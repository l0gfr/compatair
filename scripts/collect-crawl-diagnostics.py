#!/usr/bin/env python3
r"""Read only CompatAir Apache logs; emit aggregates, never raw log contents.

Example (dates inclusive; timezone must match unzoned Apache error timestamps):
  python3 -B scripts/collect-crawl-diagnostics.py --log-dir /var/log/apache2 \
    --since 2026-10-01 --until 2026-10-23 --timezone Europe/Paris

Requires Python 3.9+ on Unix with IANA timezone data installed.
Supports Apache combined access logs and the default Apache 2.4 error format,
including numeric rotations and dateext rotations, optionally gzip-compressed.
Exit 1 means no matching regular file could be opened; partial reports otherwise
exit 0. Inspect coverage.status and coverage.problems before using the counts.
"""

import argparse
from collections import Counter
from datetime import date, datetime, timedelta, timezone
import errno
import gzip
import json
import os
from pathlib import Path
import re
import stat
import sys
from zoneinfo import ZoneInfo, ZoneInfoNotFoundError
import zlib


FAMILIES = {
    "compatair-access.log": ("access", "http"),
    "compatair-ssl-access.log": ("access", "https"),
    "compatair-error.log": ("error", "http"),
    "compatair-ssl-error.log": ("error", "https"),
}
ROTATION = re.compile(r"(?:\.\d+|-\d{8})(?:\.gz)?$|(?:\.gz)?$")
QUOTED = r'"((?:[^"\\]|\\.)*)"'
ACCESS = re.compile(
    r"^\S+ \S+ \S+ \[([^\]]+)\] " + QUOTED
    + r" ([1-5][0-9]{2}) (?:[0-9]+|-) " + QUOTED + " " + QUOTED + r"\s*$"
)
ACCESS_DATE = re.compile(
    r"^(\d{2})/([A-Z][a-z]{2})/(\d{4}):(\d{2}):(\d{2}):(\d{2}) ([+-])(\d{2})(\d{2})$"
)
ERROR = re.compile(
    r"^\[([^\]]+)\] \[([a-zA-Z0-9_]+):[a-zA-Z]+\]\s*"
    r"(?:\[[^\]\r\n]*\]\s*)*(.*)$"
)
ERROR_DATE = re.compile(
    r"^[A-Z][a-z]{2} ([A-Z][a-z]{2})\s+(\d{1,2}) "
    r"(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,6}))? (\d{4})$"
)
MONTHS = {name: number for number, name in enumerate(
    ("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"), 1
)}
MAX_LINE_BYTES = 65_536


def access_timestamp(value):
    match = ACCESS_DATE.fullmatch(value)
    if not match:
        raise ValueError("unsupported timestamp")
    day, month, year, hour, minute, second, sign, offset_hour, offset_minute = match.groups()
    if int(offset_hour) > 23 or int(offset_minute) > 59:
        raise ValueError("invalid offset")
    offset = timedelta(hours=int(offset_hour), minutes=int(offset_minute))
    if sign == "-":
        offset = -offset
    return datetime(int(year), MONTHS[month], int(day), int(hour), int(minute),
                    int(second), tzinfo=timezone(offset))


def error_timestamp(value, zone):
    match = ERROR_DATE.fullmatch(value)
    if not match:
        raise ValueError("unsupported timestamp")
    month, day, hour, minute, second, fraction, year = match.groups()
    local = datetime(int(year), MONTHS[month], int(day), int(hour), int(minute),
                     int(second), int((fraction or "0").ljust(6, "0")))
    earlier, later = local.replace(tzinfo=zone, fold=0), local.replace(tzinfo=zone, fold=1)
    # Unzoned error timestamps cannot resolve a repeated or nonexistent DST hour.
    if earlier.utcoffset() != later.utcoffset():
        raise ValueError("ambiguous or nonexistent local timestamp")
    return earlier


def robots_counter():
    return {"requests": 0, "by_declared_agent": {
        name: {"requests": 0, "status_codes": Counter()}
        for name in ("declared_googlebot", "other")
    }, "by_transport": Counter()}


def count_robot(bucket, status_code, declared_agent, transport):
    bucket["requests"] += 1
    agent = bucket["by_declared_agent"][declared_agent]
    agent["requests"] += 1
    agent["status_codes"][status_code] += 1
    bucket["by_transport"][transport] += 1


def error_counter():
    return {"lines": 0, "ssl_module_lines": 0, "ah_codes": Counter(),
            "ssl_module_ah_codes": Counter()}


def count_error(bucket, module, message):
    bucket["lines"] += 1
    ssl = module.lower() == "ssl"
    bucket["ssl_module_lines"] += int(ssl)
    code = re.match(r"^(AH[0-9]{5}):", message)
    if code:
        bucket["ah_codes"][code[1]] += 1
        if ssl:
            bucket["ssl_module_ah_codes"][code[1]] += 1


def bounded_lines(stream):
    while True:
        line = stream.readline(MAX_LINE_BYTES + 1)
        if not line:
            return
        if len(line) > MAX_LINE_BYTES:
            while line and not line.endswith(b"\n"):
                line = stream.readline(MAX_LINE_BYTES + 1)
            yield None
        else:
            yield line


def collect(log_dir, since, until, zone):
    days = [(since + timedelta(days=i)).isoformat() for i in range((until - since).days + 1)]
    report = {
        "schema_version": 1,
        "window": {"since": since.isoformat(), "until": until.isoformat(),
                   "dates_inclusive": True, "timezone": zone.key},
        "limitations": [
            "Googlebot classification is a user-agent claim, not verified crawler identity.",
            "Unzoned error timestamps are interpreted in the requested timezone; confirm it matches Apache.",
            "Observed timestamps and days do not prove complete log retention or uninterrupted service.",
            "SSL module lines include all logged severities; they do not prove a Google crawl or TLS failure.",
            "AH codes are counted only at the beginning of the error message; no causal attribution is made.",
            "Rotations are summed; overlapping copied logs cannot be deduplicated without request identifiers.",
        ],
        "coverage": {"status": "observed_only", "families": {}, "files": [],
                     "problems": Counter(), "observed_access_days": [],
                     "days_without_observed_access_lines": []},
        "robots_txt": {"totals": robots_counter(), "by_day": {}, "by_hour": {}},
        "errors": {"totals": error_counter(), "by_day": {}, "by_hour": {}},
    }
    coverage = report["coverage"]
    observed_access_days = set()
    seen_inodes = set()
    try:
        entries = sorted(Path(log_dir).iterdir(), key=lambda path: path.name)
    except OSError:
        entries = []
        coverage["problems"]["log_directory_unreadable"] += 1
    for base, (kind, transport) in FAMILIES.items():
        candidates = []
        for path in entries:
            if path.name.startswith(base):
                if ROTATION.fullmatch(path.name[len(base):]):
                    candidates.append(path)
                else:
                    coverage["problems"]["unsupported_rotation_name"] += 1
        coverage["families"][base] = {"matched_files": len(candidates), "opened_files": 0}
        if not candidates:
            coverage["problems"]["missing_log_family"] += 1
        for path in candidates:
            item = {"file": path.name, "kind": kind, "transport": transport,
                    "lines_read": 0, "parsed_lines": 0, "lines_in_window": 0,
                    "first_observed": None, "last_observed": None, "problems": Counter()}
            coverage["files"].append(item)
            try:
                descriptor = os.open(path, os.O_RDONLY | os.O_NOFOLLOW | os.O_NONBLOCK)
                if not stat.S_ISREG(os.fstat(descriptor).st_mode):
                    os.close(descriptor)
                    item["problems"]["not_regular_file"] += 1
                    continue
                with os.fdopen(descriptor, "rb") as raw:
                    info = os.fstat(raw.fileno())
                    identity = (info.st_dev, info.st_ino)
                    if identity in seen_inodes:
                        item["problems"]["duplicate_inode_skipped"] += 1
                        continue
                    seen_inodes.add(identity)
                    coverage["families"][base]["opened_files"] += 1
                    stream = gzip.GzipFile(fileobj=raw) if path.name.endswith(".gz") else raw
                    try:
                        for line in bounded_lines(stream):
                            item["lines_read"] += 1
                            if line is None:
                                item["problems"]["oversized_line"] += 1
                                continue
                            try:
                                text = line.decode("utf-8").rstrip("\r\n")
                            except UnicodeDecodeError:
                                item["problems"]["invalid_utf8"] += 1
                                continue
                            parsed = (ACCESS if kind == "access" else ERROR).fullmatch(text)
                            if not parsed:
                                item["problems"]["unsupported_or_malformed_line"] += 1
                                continue
                            try:
                                stamp = (access_timestamp(parsed[1]) if kind == "access"
                                         else error_timestamp(parsed[1], zone)).astimezone(zone)
                            except (ValueError, KeyError, OverflowError):
                                item["problems"]["invalid_or_ambiguous_timestamp"] += 1
                                continue
                            item["parsed_lines"] += 1
                            instant = stamp.astimezone(timezone.utc).isoformat()
                            item["first_observed"] = min(item["first_observed"] or instant, instant)
                            item["last_observed"] = max(item["last_observed"] or instant, instant)
                            if not since <= stamp.date() <= until:
                                continue
                            item["lines_in_window"] += 1
                            day = stamp.date().isoformat()
                            hour = stamp.replace(minute=0, second=0, microsecond=0).isoformat()
                            if kind == "access":
                                observed_access_days.add(day)
                                request = parsed[2].split()
                                if len(request) != 3 or not re.fullmatch(r"HTTP/[0-9]+\.[0-9]+", request[2]):
                                    item["problems"]["malformed_request"] += 1
                                    continue
                                # Origin-form paths only; report unsupported absolute-form explicitly.
                                if not request[1].startswith("/"):
                                    item["problems"]["unsupported_request_target"] += 1
                                    continue
                                if request[1].split("?", 1)[0] != "/robots.txt":
                                    continue
                                agent = "declared_googlebot" if re.search(r"\bgooglebot\b", parsed[5], re.I) else "other"
                                group = report["robots_txt"]
                                for bucket in (group["totals"], group["by_day"].setdefault(day, robots_counter()),
                                               group["by_hour"].setdefault(hour, robots_counter())):
                                    count_robot(bucket, parsed[3], agent, transport)
                            else:
                                group = report["errors"]
                                for bucket in (group["totals"], group["by_day"].setdefault(day, error_counter()),
                                               group["by_hour"].setdefault(hour, error_counter())):
                                    count_error(bucket, parsed[2], parsed[3])
                    finally:
                        if stream is not raw:
                            stream.close()
            except PermissionError:
                item["problems"]["permission_denied"] += 1
            except FileNotFoundError:
                item["problems"]["file_disappeared"] += 1
            except (gzip.BadGzipFile, EOFError, zlib.error):
                item["problems"]["corrupt_gzip"] += 1
            except OSError as error:
                item["problems"]["symlink_refused" if error.errno == errno.ELOOP else "read_or_open_failed"] += 1
    for item in coverage["files"]:
        coverage["problems"].update(item["problems"])
    coverage["observed_access_days"] = sorted(observed_access_days)
    coverage["days_without_observed_access_lines"] = [day for day in days if day not in observed_access_days]
    if coverage["problems"] or coverage["days_without_observed_access_lines"]:
        coverage["status"] = "partial"
    return report


def calendar_date(value):
    if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", value):
        raise argparse.ArgumentTypeError("expected a date in YYYY-MM-DD format")
    try:
        return date.fromisoformat(value)
    except ValueError:
        raise argparse.ArgumentTypeError("invalid calendar date") from None


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--log-dir", required=True, help="directory to scan for the four CompatAir log families")
    parser.add_argument("--since", type=calendar_date, required=True, help="first local date, inclusive")
    parser.add_argument("--until", type=calendar_date, required=True, help="last local date, inclusive")
    parser.add_argument("--timezone", required=True, help="IANA timezone for grouping and unzoned error timestamps")
    args = parser.parse_args(argv)
    if args.until < args.since:
        parser.error("until must be on or after since")
    try:
        zone = ZoneInfo(args.timezone)
    except (ZoneInfoNotFoundError, ValueError):
        parser.error("timezone must identify an installed IANA timezone")
    report = collect(args.log_dir, args.since, args.until, zone)
    json.dump(report, sys.stdout, ensure_ascii=False, sort_keys=True, indent=2)
    sys.stdout.write("\n")
    return 0 if any(entry["opened_files"] for entry in report["coverage"]["families"].values()) else 1


if __name__ == "__main__":
    raise SystemExit(main())

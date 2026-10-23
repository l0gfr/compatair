"""Run with python3 -B scripts/collect-crawl-diagnostics.test.py."""

from contextlib import redirect_stderr, redirect_stdout
from datetime import date
import gzip
import importlib.util
import io
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch
from zoneinfo import ZoneInfo
import zlib

spec = importlib.util.spec_from_file_location("crawl_diagnostics", Path(__file__).with_name("collect-crawl-diagnostics.py"))
collector = importlib.util.module_from_spec(spec)
spec.loader.exec_module(collector)


def access(stamp="02/Oct/2026:12:00:00 +0200", status=200, target="/robots.txt?secret=query-secret", agent="Googlebot/2.1 private-agent"):
    return f'192.0.2.123 - private-user [{stamp}] "GET {target} HTTP/1.1" {status} 42 "https://private.example/referrer-secret" "{agent}"\n'


class CrawlDiagnosticsTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.zone = ZoneInfo("Europe/Paris")

    def write(self, name, content):
        path = self.root / name
        if name.endswith(".gz"):
            with gzip.open(path, "wb") as stream:
                stream.write(content.encode())
        else:
            path.write_text(content)

    def collect(self, since="2026-10-02", until="2026-10-02"):
        return collector.collect(self.root, date.fromisoformat(since), date.fromisoformat(until), self.zone)

    def test_access_rotations_status_agent_and_privacy(self):
        self.write("compatair-ssl-access.log", access(status=503) + access(agent='curl/8.0 \\"quoted\\"'))
        self.write("compatair-access.log.1.gz", access(status=301, agent="googlebot-image"))
        self.write("compatair-ssl-access.log-20261002.gz", access(target="/other?pii=yes"))
        before = {path.name: path.read_bytes() for path in self.root.iterdir()}
        result = self.collect()
        self.assertEqual(before, {path.name: path.read_bytes() for path in self.root.iterdir()})
        totals = result["robots_txt"]["totals"]
        self.assertEqual(totals["requests"], 3)
        self.assertEqual(totals["by_transport"], {"https": 2, "http": 1})
        self.assertEqual(totals["by_declared_agent"]["declared_googlebot"]["status_codes"], {"503": 1, "301": 1})
        self.assertEqual(totals["by_declared_agent"]["other"]["requests"], 1)
        serialized = json.dumps(result)
        for secret in ("192.0.2.123", "private-user", "query-secret", "private-agent", "private.example", "referrer-secret", "curl/8.0", "/other?pii"):
            self.assertNotIn(secret, serialized)

    def test_window_uses_requested_timezone_and_inclusive_days(self):
        content = "".join(access(stamp=stamp) for stamp in (
            "01/Oct/2026:21:59:59 +0000", "01/Oct/2026:22:00:00 +0000",
            "02/Oct/2026:21:59:59 +0000", "02/Oct/2026:22:00:00 +0000"))
        self.write("compatair-ssl-access.log", content)
        result = self.collect()
        self.assertEqual(result["robots_txt"]["totals"]["requests"], 2)
        self.assertEqual(set(result["robots_txt"]["by_hour"]), {"2026-10-02T00:00:00+02:00", "2026-10-02T23:00:00+02:00"})
        self.assertEqual(result["coverage"]["files"][0]["parsed_lines"], 4)
        self.assertEqual(result["coverage"]["files"][0]["lines_in_window"], 2)

    def test_error_codes_and_ssl_are_scoped_without_raw_messages(self):
        self.write("compatair-ssl-error.log.1", "\n".join((
            "[Fri Oct 02 12:10:11.123456 2026] [ssl:error] [pid 42] [client 192.0.2.123:42] AH02032: private-host.example TLS-secret",
            "[Fri Oct 02 12:10:12 2026] [core:error] [pid 42:tid 3] AH00126: SSL text is not an SSL-module event",
            "[Thu Oct 01 12:10:12 2026] [ssl:warn] AH01909: outside window",
        )) + "\n")
        result = self.collect()
        self.assertEqual(result["errors"]["totals"], {"lines": 2, "ssl_module_lines": 1, "ah_codes": {"AH02032": 1, "AH00126": 1}, "ssl_module_ah_codes": {"AH02032": 1}})
        self.assertNotIn("private-host", json.dumps(result))
        self.assertNotIn("TLS-secret", json.dumps(result))

    def test_malformed_invalid_dates_encoding_and_oversized_lines(self):
        path = self.root / "compatair-ssl-access.log"
        path.write_bytes(("secret malformed\n" + access(stamp="31/Feb/2026:12:00:00 +0200") + access(stamp="02/Oct/2026:12:00:00 +0261") + access()).encode() + b"\xffsecret\n" + b"a" * (collector.MAX_LINE_BYTES + 10) + b"\n")
        result = self.collect()
        problems = result["coverage"]["problems"]
        self.assertEqual(problems["unsupported_or_malformed_line"], 1)
        self.assertEqual(problems["invalid_or_ambiguous_timestamp"], 2)
        self.assertEqual(problems["invalid_utf8"], 1)
        self.assertEqual(problems["oversized_line"], 1)
        self.assertEqual(result["robots_txt"]["totals"]["requests"], 1)
        self.assertEqual(result["coverage"]["status"], "partial")
        self.assertNotIn("secret", json.dumps(result))

    def test_error_dst_ambiguity_is_reported_not_guessed(self):
        self.write("compatair-error.log", "[Sun Oct 25 02:30:00 2026] [ssl:error] AH02032: ambiguous\n")
        result = self.collect("2026-10-25", "2026-10-25")
        self.assertEqual(result["coverage"]["problems"]["invalid_or_ambiguous_timestamp"], 1)
        self.assertEqual(result["errors"]["totals"]["lines"], 0)

    def test_access_dst_hours_keep_offsets_and_reject_absolute_targets(self):
        self.write("compatair-ssl-access.log", access(stamp="25/Oct/2026:02:30:00 +0200")
                   + access(stamp="25/Oct/2026:02:30:00 +0100")
                   + access(stamp="25/Oct/2026:02:30:00 +0100", target="https://private.example/robots.txt"))
        result = self.collect("2026-10-25", "2026-10-25")
        self.assertEqual(set(result["robots_txt"]["by_hour"]),
                         {"2026-10-25T02:00:00+02:00", "2026-10-25T02:00:00+01:00"})
        self.assertEqual(result["coverage"]["problems"]["unsupported_request_target"], 1)
        self.assertNotIn("private.example", json.dumps(result))

    def test_missing_days_unrelated_logs_and_unsafe_file_types(self):
        self.write("other-site-access.log", access())
        self.write("compatair-access.log.private-secret", access())
        (self.root / "compatair-access.log").symlink_to(self.root / "other-site-access.log")
        (self.root / "compatair-error.log").mkdir()
        result = self.collect("2026-10-01", "2026-10-02")
        self.assertEqual(result["robots_txt"]["totals"]["requests"], 0)
        self.assertEqual(result["coverage"]["days_without_observed_access_lines"], ["2026-10-01", "2026-10-02"])
        self.assertEqual(result["coverage"]["problems"]["unsupported_rotation_name"], 1)
        self.assertEqual(result["coverage"]["problems"]["symlink_refused"], 1)
        self.assertEqual(result["coverage"]["problems"]["not_regular_file"], 1)
        self.assertNotIn("private-secret", json.dumps(result))

    def test_read_failures_and_corrupt_gzip_are_explicit(self):
        self.write("compatair-ssl-access.log", access())
        with patch.object(collector.os, "open", side_effect=PermissionError("private-path")):
            result = self.collect()
        self.assertEqual(result["coverage"]["problems"]["permission_denied"], 1)
        self.assertNotIn("private-path", json.dumps(result))
        (self.root / "compatair-error.log.1.gz").write_bytes(b"not gzip secret")
        result = self.collect()
        self.assertEqual(result["coverage"]["problems"]["corrupt_gzip"], 1)
        with patch.object(collector.gzip, "GzipFile", side_effect=zlib.error("private-message")):
            result = self.collect()
        self.assertEqual(result["coverage"]["problems"]["corrupt_gzip"], 1)
        self.assertNotIn("private-message", json.dumps(result))

    def test_missing_directory_is_reported_without_path_or_exception_text(self):
        result = collector.collect(self.root / "private-path", date(2026, 10, 2), date(2026, 10, 2), self.zone)
        self.assertEqual(result["coverage"]["problems"]["log_directory_unreadable"], 1)
        self.assertNotIn("private-path", json.dumps(result))

    def test_cli_rejects_invalid_window_and_timezone_and_reports_absence(self):
        base = ["--log-dir", str(self.root), "--timezone", "Europe/Paris"]
        for args in (base + ["--since", "2026-10-03", "--until", "2026-10-02"],
                     base + ["--since", "2026-02-30", "--until", "2026-10-02"],
                     ["--log-dir", str(self.root), "--since", "2026-10-02", "--until", "2026-10-02", "--timezone", "invalid/private-secret"]):
            error = io.StringIO()
            with redirect_stderr(error), self.assertRaises(SystemExit) as raised:
                collector.main(args)
            self.assertEqual(raised.exception.code, 2)
            self.assertNotIn("private-secret", error.getvalue())
        output = io.StringIO()
        with redirect_stdout(output):
            status = collector.main(base + ["--since", "2026-10-02", "--until", "2026-10-02"])
        self.assertEqual(status, 1)
        self.assertEqual(json.loads(output.getvalue())["coverage"]["problems"]["missing_log_family"], 4)


if __name__ == "__main__":
    unittest.main()

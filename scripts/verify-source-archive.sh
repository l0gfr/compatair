#!/usr/bin/env bash
set -Eeuo pipefail

repo_root=$(git rev-parse --show-toplevel)
temporary_root=$(mktemp -d "${TMPDIR:-/tmp}/compatair-source-archive.XXXXXX")
trap 'rm -rf -- "$temporary_root"' EXIT

staging_root="$temporary_root/source"
archive="$temporary_root/CompatAir.zip"
archive_entries="$temporary_root/archive-entries.txt"
extracted_root="$temporary_root/extracted"
mkdir -p "$staging_root" "$extracted_root"

while IFS= read -r -d '' relative_path; do
	source_path="$repo_root/$relative_path"
	target_path="$staging_root/$relative_path"
	if [[ -L "$source_path" || ! -f "$source_path" ]]; then
		echo "Unsafe source archive entry: $relative_path" >&2
		exit 1
	fi
	mkdir -p "$(dirname "$target_path")"
	cp -p -- "$source_path" "$target_path"
done < <(git -C "$repo_root" ls-files -z --cached --others --exclude-standard)

git -C "$staging_root" init --quiet
git -C "$staging_root" add --all
tree=$(git -C "$staging_root" write-tree)
git -C "$staging_root" archive --format=zip --prefix=CompatAir/ --output="$archive" "$tree"

unzip -tqq "$archive"
zipinfo -1 "$archive" > "$archive_entries"
if zipinfo -l "$archive" | awk '$1 ~ /^l/ { found=1 } END { exit !found }'; then
	echo "Source ZIP contains a symbolic link" >&2
	exit 1
fi
if awk '!/^CompatAir\// || /(^|\/)\.git(\/|$)|(^|\/)node_modules(\/|$)|(^|\/)dist(\/|$)|(^|\/)\.astro(\/|$)|(^|\/)\.lighthouseci(\/|$)/ { found=1 } END { exit !found }' "$archive_entries"; then
	echo "Source ZIP contains an entry outside the hermetic source root" >&2
	exit 1
fi

for required_path in AGENTS.md CLAUDE.md package.json pnpm-lock.yaml public/robots.txt config/immutable-assets.json scripts/lint-source.mjs; do
	grep -Fxq "CompatAir/$required_path" "$archive_entries" || {
		echo "Source ZIP is missing $required_path" >&2
		exit 1
	}
done

unzip -qq "$archive" -d "$extracted_root"
test -f "$extracted_root/CompatAir/CLAUDE.md"
test ! -L "$extracted_root/CompatAir/CLAUDE.md"
cmp --silent "$extracted_root/CompatAir/AGENTS.md" "$extracted_root/CompatAir/CLAUDE.md"
test ! -e "$extracted_root/CompatAir/.git"
ln -s "$repo_root/node_modules" "$extracted_root/CompatAir/node_modules"
pnpm --dir "$extracted_root/CompatAir" test

printf 'Source ZIP verified: regular files, expected roots and pnpm test without inherited .git.\n'

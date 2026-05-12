#!/usr/bin/env bash
set -euo pipefail

while IFS= read -r folder; do
	[ -z "$folder" ] && continue
	chmod -R 755 "$folder"
done < folders.txt

while IFS= read -r file; do
	[ -z "$file" ] && continue
	chmod -R 644 "$file"
done < files.txt

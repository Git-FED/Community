#!/usr/bin/env bash
set -euo pipefail
for file in assets/images/logo.svg assets/images/social-preview.svg; do
  test -s "$file" || { echo "Missing or empty $file" >&2; exit 1; }
done
echo "Icon and social asset placeholders are present."

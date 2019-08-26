#!/bin/sh

# Exit if any command fails
set -eu

# Create zip archive
echo "\n📦 Creating zip archive\n"

zip -r "${ARCHIVE_FILENAME}.zip" "${FILES_PATH}"

echo "\n🚀 All right sparky ✔️\n"

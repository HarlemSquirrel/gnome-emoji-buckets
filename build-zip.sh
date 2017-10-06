#!/bin/sh

# Build the zip file with the current version read from metadata.json
# using underscore

command -v underscore >/dev/null 2>&1 || {
  echo >&2 "Please install underscore with \"npm install -g underscore-cli\".  Aborting."
  exit 1
}

VERSION="$(underscore extract --in metadata.json 'version')"
UUID="$(underscore extract --in metadata.json --outfmt text 'uuid')"

printf "  Zipping into $UUID-v$VERSION\n"
zip -jr "$UUID-v$VERSION" schemas *.js *.json *.css LICENSE README.md

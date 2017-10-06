VERSION = $(shell underscore extract --in metadata.json 'version')
UUID = $(shell underscore extract --in metadata.json --outfmt text 'uuid')
FILENAME="$(UUID)-v$(VERSION)"

zip:
	zip -jr $(FILENAME) schemas *.js *.json *.css LICENSE README.md
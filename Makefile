install:
	npm ci

run:
	bin/gendiff.js

test:
	npm test

fix:
	npx eslint . --fix

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish
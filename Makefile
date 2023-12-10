install:
	npm ci

run:
	bin/gendiff.js

test:
	npm test

fix:
	npx eslint . --fix

test-coverage:
	npm test -- --coverage
	
lint:
	npx eslint .

publish:
	npm publish
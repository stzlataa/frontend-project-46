install:
	npm ci

run:
	bin/gendiff.js

test:
	npm test

test-coverage:
	npm codeclimate

fix:
	npx eslint . --fix
	
lint:
	npx eslint .

publish:
	npm publish
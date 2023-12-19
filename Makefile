install:
	npm ci

run:
	bin/gendiff.js

test:
	npm test

fix:
	npx eslint . --fix
	
lint:
	npx eslint .

publish:
	npm publish
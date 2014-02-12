build:
	@npm install
	@npm test

docs:
	@./node_modules/.bin/mocha test/docs.test.js --reporter markdown > README.md

.PHONY: build
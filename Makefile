
REPORTER = dot

test:
	@./node_modules/.bin/mocha \
		--require $(shell pwd)/test/common \
		--reporter $(REPORTER) \
		--growl \
		test/expect.js

test-browser:
	@./node_modules/.bin/serve .

.PHONY: test

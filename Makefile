REPORTER ?= spec
CONTROLLER = $(shell find ./test/controllers/* -name "*.test.js")


server:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--harmony --reporter $(REPORTER);

controllers:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--harmony --reporter $(REPORTER) -g "$$GREP" $(CONTROLLER);

all: server controllers

.PHONY: server controllers all
REPORTER ?= spec
CONTROLLER = $(shell find ./test/controllers/* -name "*.test.js")
ALLTESTS = $(shell find ./test/**/* -name "*.test.js")

teaser:
	@echo "" && \
	node -pe "Array(20 + '$(DIALECT)'.length + 3).join('#')" && \
	echo '# Running tests #' && \
	node -pe "Array(20 + '$(DIALECT)'.length + 3).join('#')" && \
	echo ''

server:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--harmony --reporter $(REPORTER);

controllers:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--harmony --reporter $(REPORTER) -g "$$GREP" $(CONTROLLER);

cover:
	@NODE_ENV=test && \
	make teaser && \
	node --harmony ./node_modules/istanbul/lib/cli.js cover \
		./node_modules/.bin/_mocha --report lcovonly  -- -u exports -R spec $(ALLTESTS);


codeclimate-send:
	npm install -g codeclimate-test-reporter
	CODECLIMATE_REPO_TOKEN=143ac20ce7ed3319999f4a918aaa3146a66e8731132048cf29b96423c34994f1 \
	codeclimate < coverage/lcov.info


all: server controllers

.PHONY: server controllers all
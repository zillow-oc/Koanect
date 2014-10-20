
codeclimate-send:
	npm install -g codeclimate-test-reporter
	CODECLIMATE_REPO_TOKEN=143ac20ce7ed3319999f4a918aaa3146a66e8731132048cf29b96423c34994f1 \
	codeclimate < coverage/lcov.info

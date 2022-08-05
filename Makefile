firebase-init: dc-override up create-firebase-log create-functions-index.js login
up:
	docker-compose up -d
stop:
	docker-compose stop
create-firebase-log:
	touch database-debug.log firestore-debug.log pubsub-debug.log ui-debug.log
create-functions-index.js:
	touch functions/lib/index.js
start: up emu-start
env:
	cp .env.sample .env
dc-override:
	cp docker-compose.override.sample.yml docker-compose.override.yml
login:
	docker-compose exec firebase firebase login --no-localhost
emu-start:
	docker-compose exec firebase firebase emulators:start
.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
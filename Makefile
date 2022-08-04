firebase-init: dc-override env up login
up:
	docker-compose up -d
stop:
	docker-compose stop
start: up emu-start
env:
	cp .env.sample .env
dc-override:
	cp docker-compose.override.sample.yml docker-compose.yml
login:
	docker-compose exec firebase firebase login --no-localhost
emu-start:
	docker-compose exec firebase firebase emulators:start
.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
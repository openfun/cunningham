# Cunningham'ss Makefile
#
# /!\ /!\ /!\ /!\ /!\ /!\ /!\ DISCLAIMER /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\
#
# This Makefile is only meant to be used for DEVELOPMENT purpose as we are
# changing the user id that will run in the container.
#
# PLEASE DO NOT USE IT FOR YOUR CI/PRODUCTION/WHATEVER...
#
# /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\
#
# Note to developpers:
#
# While editing this file, please respect the following statements:
#
# 1. Every variable should be defined in the ad hoc VARIABLES section with a
#    relevant subsection
# 2. Every new rule should be defined in the ad hoc RULES section with a
#    relevant subsection depending on the targeted service
# 3. Rules should be sorted alphabetically within their section
# 4. When a rule has multiple dependencies, you should:
#    - duplicate the rule name to add the help string (if required)
#    - write one dependency per line to increase readability and diffs
# 5. .PHONY rule statement should be written after the corresponding rule


# ==============================================================================
# VARIABLES

# -- Docker
# Get the current user ID to use for docker run and docker exec commands
DOCKER_UID           = $(shell id -u)
DOCKER_GID           = $(shell id -g)
DOCKER_USER          = $(DOCKER_UID):$(DOCKER_GID)
COMPOSE              = DOCKER_USER=$(DOCKER_USER) DB_HOST=$(DB_HOST) DB_PORT=$(DB_PORT) docker-compose
COMPOSE_RUN          = $(COMPOSE) run --rm --service-ports

# -- Dev
# We must run frontend with a /home because yarn tries to write to ~/.yarnrc. If the
# ID of our host user (with which we run the container) does not exist in the
# container (e.g. 1000 exists but 1009 does not exist by default), then yarn
# will try to write to "/.yarnrc" at the root of the system and will fail with a
# permission error.
COMPOSE_RUN_NODE     = $(COMPOSE_RUN) -e HOME="/tmp" node
YARN                 = $(COMPOSE_RUN_NODE) yarn
CROWDIN              = $(COMPOSE_RUN) crowdin crowdin

# ==============================================================================
# RULES

default: help

install: ## install all repos dependencies.
	@$(YARN) install
.PHONY: install

bootstrap: ## install all repos dependencies and build them too.
bootstrap: \
	env.d/crowdin \
	build
.PHONY: bootstrap

dev: ## watch changes in apps and packages.
dev: install
	@$(YARN) dev
.PHONY: dev

lint: ## lint all repos.
lint: install
	@$(YARN) lint
.PHONY: lint

test: ## test all repos.
test: install
	@$(YARN) test
.PHONY: test

build: ## build apps and packages.
build: install
	@$(YARN) build
.PHONY: build

deploy: ## run deploy ( lint, test, build ) on all repos.
deploy: install
	@$(YARN) deploy
.PHONY: deploy

# -- Misc
env.d/crowdin:
	cp env.d/crowdin.dist env.d/crowdin

# -- Internationalization
crowdin-upload:
	@$(CROWDIN) upload sources -c crowdin/config.yml
.PHONY: crowdin-upload

crowdin-download:
	@$(CROWDIN) download -c crowdin/config.yml
.PHONY: crowdin-download

clean: ## restore repository state as it was freshly cloned
	git clean -idx
.PHONY: clean

help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
.PHONY: help
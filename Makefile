REV=$(shell git rev-parse HEAD)
SERVICE=thght-backend

build:
	docker build -t ${SERVICE}:${REV} .

test: build
	docker run ${SERVICE}:${REV} npm run test

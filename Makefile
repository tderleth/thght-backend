REV=$(shell git rev-parse HEAD)
SERVICE=thght-backend

build-dev:
	docker build --build-arg ENVIRONMENT=development -t ${SERVICE}:${REV} .

test: build-dev
	docker run ${SERVICE}:${REV} npm run test

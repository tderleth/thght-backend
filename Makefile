REV=$(shell git rev-parse HEAD)
REPOSITORY=thght
REGISTRY=thomasderleth

build-dev:
	docker build --build-arg ENVIRONMENT=development -t ${REPOSITORY}:${REV} .

test: build-dev
	docker run ${REPOSITORY}:${REV} npm run test

docker-login:
	docker login --username ${DOCKER_USERNAME} --password ${DOCKER_PASSWORD}

docker-push: docker-login
	docker push ${REGISTRY}/${REPOSITORY}:${REV}

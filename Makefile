REV=$(shell git rev-parse HEAD)
REPOSITORY=thght
REGISTRY=thomasderleth

build-dev:
	docker build --build-arg ENVIRONMENT=development -t ${REGISTRY}/${REPOSITORY}:${REV} .

build-prod:
	docker build --build-arg ENVIRONMENT=production -t ${REGISTRY}/${REPOSITORY}:${REV} .

test:
	docker-compose -f ./docker-compose.test.yml up --build --renew-anon-volumes --abort-on-container-exit --remove-orphans

docker-login:
	docker login --username ${DOCKER_USERNAME} --password ${DOCKER_PASSWORD}

docker-push: build-prod docker-login
	docker push ${REGISTRY}/${REPOSITORY}:${REV}

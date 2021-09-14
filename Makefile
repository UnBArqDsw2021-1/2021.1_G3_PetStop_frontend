build:
	yarn
	docker-compose -f docker-compose.yml build
up:
	yarn
	docker-compose -f docker-compose.yml up
down:
	docker-compose -f docker-compose.yml down
destroy:
	docker-compose -f docker-compose.yml down -v
stop:
	docker-compose -f docker-compose.yml stop

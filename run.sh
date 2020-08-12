docker network create net

docker-compose rm -f
docker volume prune -f
# docker-compose up
docker-compose up --build
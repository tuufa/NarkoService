# NarkoService
микросервисы

Требования
Node.js LTS + npm

Docker Desktop (в режиме Linux containers)

Включённый WSL2 (для Windows)


В каждой папке сервиса (user-service/, chat-service/):
npm install


Запуск через Docker
В корневой папке service/, где расположен объединённый docker-compose.yml:
docker-compose up --build

Миграции
Для user-service:
docker exec -it user-service sh
npx prisma migrate dev

Для chat-service:
docker exec -it chat-service sh
npx prisma migrate dev

Swagger-документация
User Service: http://localhost:3001/api-docs

Chat Service: http://localhost:3002/api-docs


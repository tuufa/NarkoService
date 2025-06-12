# Используем официальный Node.js образ
FROM node:20-alpine

# Создаем рабочую директорию
WORKDIR /usr/src/app

# Копируем зависимости
COPY package*.json ./
RUN npm install

# Копируем prisma-схему 
COPY prisma ./prisma

# Генерируем Prisma Client
RUN npx prisma generate

# Копируем остальной исходный код
COPY . .

# Сборка TypeScript
RUN npm run build

EXPOSE 3001
CMD ["node", "dist/main.js"]

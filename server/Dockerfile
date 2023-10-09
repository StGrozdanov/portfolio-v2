FROM --platform=linux/arm64 node:18.18.0-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY .env .
RUN npm install --quiet
COPY . .
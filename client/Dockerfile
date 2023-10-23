FROM --platform=linux/arm64 node:18.18.0-alpine
RUN mkdir -p /usr/src/client
WORKDIR /usr/src/client
COPY package*.json ./
RUN npm install --quiet
COPY . .

CMD ["npm", "start"]
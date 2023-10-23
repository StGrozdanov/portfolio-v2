FROM --platform=linux/arm64 node:18.18.0-alpine
RUN mkdir -p /user/src/server
COPY . /user/src/server
WORKDIR /user/src/server
RUN npm i --quiet
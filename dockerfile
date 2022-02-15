FROM node:12.18 AS builder

WORKDIR /app

COPY ./ ./
RUN npm install --registry=https://registry.npm.taobao.org && \
    npm run build && cp -r ./install ./build/install

FROM nginx:1.21.0-alpine
COPY --from=builder /app/build/ /usr/share/nginx/html


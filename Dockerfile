FROM node:18.17.1 AS builder

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .
RUN npm i

COPY . .
RUN npm run build

FROM nginx AS runner
ENV TZ=Asia/Shanghai
COPY nginx.conf /etc/nginx/
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 3000

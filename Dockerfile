FROM node:14.3.0 as builder

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.18.0

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 3000

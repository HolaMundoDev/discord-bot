FROM node:14 as builder
WORKDIR /app
COPY . .
RUN yarn && yarn run build

FROM node:14-alpine
WORKDIR /app
COPY --from=/app/dist .
CMD [ "node", "main.js" ]
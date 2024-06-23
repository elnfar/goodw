FROM node:18-alpine AS base
FROM base AS deps
RUN apk add --no-cache libc6-compat


WORKDIR /skl-2

COPY package.json ./

RUN pnpm update && pnpm install

# If you want yarn update and  install uncomment the bellow script

# RUN yarn install &&  yarn upgrade


FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install pnpm -g

RUN pnpm update && pnpm install

COPY . .

EXPOSE 3000

CMD pnpm dev


# If you want yarn update and  install uncomment the bellow script

# RUN yarn install &&  yarn upgrade


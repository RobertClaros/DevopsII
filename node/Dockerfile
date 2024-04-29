FROM node:20-bookworm-slim

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY ./src ./src

EXPOSE 8080

CMD ["npm", "run", "build"]
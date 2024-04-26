FROM node:20-bookworm-slim

RUN apt-get update && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY ./src ./src

EXPOSE 8080

CMD ["npm", "run", "build"]
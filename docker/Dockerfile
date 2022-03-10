ARG nodeVersion
ARG devPort
ARG author

FROM node:${nodeVersion}

LABEL author=${author}

RUN npm install -g pnpm

WORKDIR /app

COPY . .

ENV TZ=Asia/Seoul

RUN pnpm install

EXPOSE ${devPort}

CMD ["pnpm", "dev"]
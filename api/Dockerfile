FROM mhart/alpine-node:12

WORKDIR /usr/src/app

COPY package.json .
COPY ./dist/ ./dist/
RUN npm i --production --no-cache

ENV HOST localhost
ENV PORT 3000
ENV SWAGGER_HOST localhost:3000
ENV NODE_PATH /usr/src/app/dist

EXPOSE 3000

ENTRYPOINT []
CMD ["node", "/usr/src/app/dist/index.js"]
FROM node:19.6.0
ENV NODE_ENV=production

WORKDIR /app
COPY . .
RUN npm i --production

CMD [ "node", "./" ]

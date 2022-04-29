FROM node:16.14.0-buster-slim
RUN mkdir /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node packa*.json ./
RUN npm i 

USER node
COPY . .

EXPOSE 8081

CMD ["npm","start"]

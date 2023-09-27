FROM node:20.2-alpine
COPY . /shiftypes
WORKDIR /shiftypes
RUN npm install
RUN npm i -g ts-node
CMD npm run prod
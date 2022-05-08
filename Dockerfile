FROM node:14.17.0
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 8080
CMD [ "npm", "run", "start" ]
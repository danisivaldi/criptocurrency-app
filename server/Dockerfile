FROM node:13.11.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . ./
RUN npm install
EXPOSE 3000
CMD npm start
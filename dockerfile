FROM node:16

WORKDIR /reservation-form-react-application

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY . ./

EXPOSE 3000

CMD [ "yarn", "start" ]

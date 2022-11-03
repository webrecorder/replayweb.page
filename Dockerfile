FROM node:18
WORKDIR /var/replayweb.page
COPY package*.json ./
RUN yarn install
COPY . .
ENV NODE_ENV production
RUN yarn run build
EXPOSE 9990
CMD yarn run start-prod


# use the node runtime image as the base image
FROM node:12.7-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

EXPOSE 3000
CMD [ "node", "server.js" ]
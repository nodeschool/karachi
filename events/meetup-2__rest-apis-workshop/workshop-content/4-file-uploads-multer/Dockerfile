FROM node:8

#create app directory
WORKDIR /usr/src/file-upload-node

#install dependencies
COPY package.json package-lock.json ./

RUN npm install

#bundle app src
COPY . .

#Expose port
EXPOSE 3000

#Start server
CMD [ "npm", "start" ]

FROM node:18-alpine
WORKDIR /node
COPY . .
RUN npm install
EXPOSE 5000
CMD ["npm","start"]

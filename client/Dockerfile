# Use an official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app/client

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install client dependencies
RUN npm install

# Copy the rest of the client code to the working directory
COPY . .

# Expose the port your client app runs on
EXPOSE 3000

# Command to run the client application
CMD [ "npm", "run", "dev" ]

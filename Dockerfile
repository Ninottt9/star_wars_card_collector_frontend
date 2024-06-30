# Use a base image with Node.js support
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Build your frontend app
RUN npm run build

# Expose the port that your frontend application runs on
EXPOSE 3000

# Command to run the frontend server
CMD ["npm", "start"]

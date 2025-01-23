# Use official node image as base
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files and build the app
COPY . .
RUN npm run build

# Expose port and run the Express server
EXPOSE 3000
CMD ["node", "server.js"]

# Install dependencies
RUN npm install prom-client

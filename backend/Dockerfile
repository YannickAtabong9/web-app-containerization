# Use official Node.js image as base
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the backend source code into the container
COPY . .

# Expose the backend API port
EXPOSE 3001

# Install dependencies
RUN npm install express


# Run the application
CMD ["node", "app.js"]

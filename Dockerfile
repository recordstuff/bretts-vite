# Use a Node.js base image
FROM node:latest

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire app to the Docker image
COPY . .

# Build the React app for production
RUN npm run build

# Install serve to serve the production build
RUN npm install -g serve

# set up letsencrypt manual challenge
RUN chmod +x ./letsencrypt.sh
RUN ./letsencrypt.sh

# Set environment variables for HTTPS
#ENV HTTPS_KEY=/app/ssl/key.pem
#ENV HTTPS_CERT=/app/ssl/cert.pem

# Copy SSL key and certificate to the Docker image
#COPY ./ssl/key.pem /app/ssl/key.pem
#COPY ./ssl/cert.pem /app/ssl/cert.pem

# Expose HTTP and HTTPS ports
EXPOSE 80 443

# Serve the production build over HTTPS
#CMD ["serve", "-s", "-l", "443", "-C", "--ssl-key", "$HTTPS_KEY", "--ssl-cert", "$HTTPS_CERT", "build"]
CMD ["serve", "-s", "-l", "80", "-l", "443", "-C", "build"]
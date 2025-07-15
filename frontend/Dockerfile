# Stage 1: Build the React application
FROM node:18 as build

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

# Create a production build of the React app
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy the build artifacts from the build stage to the Nginx public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port Nginx will listen on
EXPOSE 80

# The default Nginx command will run, serving our app
CMD ["nginx", "-g", "daemon off;"]

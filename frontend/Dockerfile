# Step 1: Use Node to BUILD the React app
FROM node:20-alpine AS build

WORKDIR /app

# Step 2: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 3: Copy all source files
COPY . .

# Step 4: Build the React app (creates a /dist folder)
RUN npm run build

# ---- Second stage: Serve with Nginx ----
# Step 5: Use Nginx (a web server) to serve the built files
FROM nginx:alpine

# Step 6: Copy built React files into Nginx's folder
COPY --from=build /app/dist /usr/share/nginx/html

# Step 7: Expose port 80 (default web port)
EXPOSE 80

# Step 8: Start Nginx
CMD ["nginx", "-g", "daemon off;"]

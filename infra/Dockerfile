FROM nginx:alpine

# Copy the static files into the Nginx public directory
COPY index.html /usr/share/nginx/html/index.html
COPY assets /usr/share/nginx/html/assets

# Expose port 80
EXPOSE 80

# The default command for nginx:alpine is to start the server
CMD ["nginx", "-g", "daemon off;"]

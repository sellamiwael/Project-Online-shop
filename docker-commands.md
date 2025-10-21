# Docker Commands for ElectroShop Website

## Prerequisites
- Docker installed on your system
- Docker Hub account (create one at https://hub.docker.com)

## Step 1: Build the Docker Image

```bash
# Build the image (replace 'your-username' with your Docker Hub username)
docker build -t your-username/electroshop:latest .

# Or with a specific tag
docker build -t your-username/electroshop:v1.0 .
```

## Step 2: Test the Image Locally

```bash
# Run the container locally to test
docker run -d -p 8080:80 --name electroshop-test your-username/electroshop:latest

# Check if it's running
docker ps

# Visit http://localhost:8080 in your browser to test

# Stop and remove the test container
docker stop electroshop-test
docker rm electroshop-test
```

## Step 3: Login to Docker Hub

```bash
# Login to Docker Hub
docker login

# Enter your Docker Hub username and password when prompted
```

## Step 4: Push to Docker Hub

```bash
# Push the image to Docker Hub
docker push your-username/electroshop:latest

# Or push with a specific tag
docker push your-username/electroshop:v1.0
```

## Step 5: Pull and Run from Docker Hub

```bash
# Pull the image from Docker Hub
docker pull your-username/electroshop:latest

# Run the container
docker run -d -p 8080:80 --name electroshop your-username/electroshop:latest
```

## Additional Commands

### View running containers
```bash
docker ps
```

### View all containers (including stopped)
```bash
docker ps -a
```

### Stop a container
```bash
docker stop container-name
```

### Remove a container
```bash
docker rm container-name
```

### Remove an image
```bash
docker rmi image-name
```

### View image details
```bash
docker inspect your-username/electroshop:latest
```

## Production Deployment

For production deployment, you can use:

```bash
# Run with restart policy
docker run -d -p 80:80 --restart unless-stopped --name electroshop-prod your-username/electroshop:latest
```

## Docker Compose (Optional)

Create a `docker-compose.yml` file for easier management:

```yaml
version: '3.8'
services:
  electroshop:
    image: your-username/electroshop:latest
    ports:
      - "80:80"
    restart: unless-stopped
    container_name: electroshop
```

Then run:
```bash
docker-compose up -d
```

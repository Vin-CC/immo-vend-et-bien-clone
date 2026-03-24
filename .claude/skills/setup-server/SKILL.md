---
name: setup-server
description: Set up a fresh Linux server (Docker, swap, docker-compose, NPM) and deploy this app for the first time
disable-model-invocation: true
argument-hint: "<server-ip>"
---

# Set up a fresh server and deploy this app

Set up a brand new Linux (Ubuntu) server from scratch and deploy this Next.js app for the first time. This includes installing Docker, creating swap, setting up the infrastructure with Nginx Proxy Manager, and deploying the app.

## Credentials

Server passwords are stored in the `.servers` file at the repo root. Read it to get credentials. NEVER display passwords to the user.

## Setup steps

Before starting, confirm with the user:
1. The **server IP address** (or use `$ARGUMENTS`)
2. The **server root password**
3. The **domain name(s)** that will point to this server

### Step 0: Validate and prepare credentials

- Read `.servers` to check if this server is already referenced.
- If the server is **not** in `.servers`, ask the user for:
  - Server IP address
  - Root password
- Add or update the entry in `.servers` following the existing format:

```
# Immo Vend et Bien
MMB_HOST=<IP>
MMB_USER=root
MMB_PASSWORD=<PASSWORD>
MMB_PORT=22
```

### Step 1: Test SSH connectivity

```bash
sshpass -p '<PASSWORD>' ssh -o StrictHostKeyChecking=no -o ConnectTimeout=10 root@<HOST> "echo 'SSH OK'"
```

If this fails, stop and inform the user. The server may not be accessible or the password may be wrong.

### Step 2: Install Docker

Run via SSH on the remote server:

```bash
sshpass -p '<PASSWORD>' ssh -o StrictHostKeyChecking=no root@<HOST> bash -c '
apt-get update && apt-get install -y ca-certificates curl &&
install -m 0755 -d /etc/apt/keyrings &&
curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc &&
chmod a+r /etc/apt/keyrings/docker.asc &&
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo $VERSION_CODENAME) stable" > /etc/apt/sources.list.d/docker.list &&
apt-get update && apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
'
```

Verify Docker is installed:

```bash
sshpass -p '<PASSWORD>' ssh -o StrictHostKeyChecking=no root@<HOST> "docker --version && docker compose version"
```

### Step 3: Create 2 GB swap

```bash
sshpass -p '<PASSWORD>' ssh -o StrictHostKeyChecking=no root@<HOST> bash -c '
if [ -f /swapfile ]; then
  echo "Swap already exists, skipping"
else
  fallocate -l 2G /swapfile &&
  chmod 600 /swapfile &&
  mkswap /swapfile &&
  swapon /swapfile &&
  echo "/swapfile none swap sw 0 0" >> /etc/fstab &&
  echo "Swap created successfully"
fi
'
```

### Step 4: Create the app directory

```bash
sshpass -p '<PASSWORD>' ssh -o StrictHostKeyChecking=no root@<HOST> "mkdir -p /opt/immo-vend-et-bien"
```

### Step 5: Create docker-compose.yml on the server

```bash
sshpass -p '<PASSWORD>' ssh -o StrictHostKeyChecking=no root@<HOST> cat > /opt/immo-vend-et-bien/docker-compose.yml << 'COMPOSE_EOF'
services:
  app:
    image: immo-vend-et-bien:latest
    container_name: immo-vend-et-bien
    restart: unless-stopped
    environment:
      NODE_ENV: production
      PORT: 3000
    env_file:
      - .env
    expose:
      - "3000"

  npm:
    image: jc21/nginx-proxy-manager:latest
    container_name: nginx-proxy-manager
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
      - "81:81"
    volumes:
      - ./npm-data:/data
      - ./npm-letsencrypt:/etc/letsencrypt
COMPOSE_EOF
```

### Step 6: Transfer the .env file (if it exists locally)

```bash
sshpass -p '<PASSWORD>' scp -o StrictHostKeyChecking=no .env root@<HOST>:/opt/immo-vend-et-bien/.env
```

If no local `.env` exists, warn the user and ask if one is needed.

### Step 7: Build the Docker image locally

Ensure the `Dockerfile` exists at the project root (see the `deploy-app` skill for the Dockerfile template if needed).

Run from the **project root**:

```bash
docker build -t immo-vend-et-bien:latest .
```

This can take several minutes — inform the user. If the build fails, show the error and stop.

### Step 8: Export and transfer the image

```bash
docker save immo-vend-et-bien:latest | gzip > immo-vend-et-bien.tar.gz
```

```bash
sshpass -p '<PASSWORD>' scp -o StrictHostKeyChecking=no immo-vend-et-bien.tar.gz root@<HOST>:/opt/immo-vend-et-bien/
```

### Step 9: Load the image and start containers

```bash
sshpass -p '<PASSWORD>' ssh -o StrictHostKeyChecking=no root@<HOST> \
  "cd /opt/immo-vend-et-bien && docker load < immo-vend-et-bien.tar.gz && rm immo-vend-et-bien.tar.gz && docker compose up -d && docker image prune -f"
```

### Step 10: Verify containers are running

```bash
sshpass -p '<PASSWORD>' ssh -o StrictHostKeyChecking=no root@<HOST> "docker ps --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'"
```

Both `immo-vend-et-bien` and `nginx-proxy-manager` should be running. Report the status to the user.

### Step 11: Cleanup local tar.gz

```bash
rm immo-vend-et-bien.tar.gz
```

### Step 12: Remind user about NPM and DNS configuration

After all steps are done, remind the user:

**Nginx Proxy Manager setup (manual):**
1. Access the NPM dashboard at `http://<HOST>:81`
2. Default login: `admin@example.com` / `changeme` (change it on first login)
3. Update the credentials to: email `gestion@artech-group.fr`, password `Gwm=h)?9XuvDhgU` (to match other servers)
4. Add a Proxy Host:
   - Domain Names: the domain(s) for this app
   - Forward Hostname: `immo-vend-et-bien` (the container name)
   - Forward Port: `3000`
   - Enable: Websockets Support, Block Common Exploits
   - SSL tab: Request a new SSL certificate with Let's Encrypt, Force SSL, HTTP/2 Support
   - Email for Let's Encrypt: `gestion@artech-group.fr`

**DNS setup:**
- Add an A record for each domain/subdomain pointing to the server IP (`<HOST>`)
- Wait for DNS propagation before requesting the SSL certificate in NPM

**Verification:**
```bash
curl -sk -o /dev/null -w '%{http_code}' https://<DOMAIN>/
```
Should return `200` once DNS + SSL are configured.

## Important notes

- Always build from the **project root**.
- The build can take a few minutes — inform the user.
- If the build fails, show the error and stop. Do NOT transfer a broken image.
- If Docker install fails, it may be because the server is not running Ubuntu. Ask the user to confirm the OS.
- If the server has very limited disk space, consider running `apt clean && rm -rf /tmp/*` before starting.
- The NPM initial setup (Step 12) must be done manually via the web UI for the first proxy host — subsequent SSL renewals can use the `renew-ssl` skill.

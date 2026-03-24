---
name: renew-ssl
description: Renew SSL certificates on the VPS server via the Nginx Proxy Manager API
disable-model-invocation: true
---

# Renew SSL certificates

Renew SSL certificates on the server via the Nginx Proxy Manager API.

## Server

| Host | SSH password prefix |
|------|-------------------|
| Read from `.servers` → `MMB_HOST` | MMB |

## Credentials

- **SSH passwords**: stored in `.servers` at the repo root. Read it to get passwords. NEVER display passwords to the user.
- **NPM API credentials**: email `gestion@artech-group.fr`, password `Gwm=h)?9XuvDhgU`

## Renewal steps

### Step 1: Read credentials

Read `.servers` to get the SSH host and password.

### Step 2: Get NPM API token

```bash
sshpass -p '<SSH_PASSWORD>' ssh -o StrictHostKeyChecking=no root@<HOST> \
  'curl -s http://127.0.0.1:81/api/tokens -X POST -H "Content-Type: application/json" \
  -d '"'"'{"identity":"gestion@artech-group.fr","secret":"Gwm=h)?9XuvDhgU"}'"'"''
```

Extract the `token` field from the JSON response.

### Step 3: List proxy hosts

```bash
sshpass -p '<SSH_PASSWORD>' ssh -o StrictHostKeyChecking=no root@<HOST> \
  "curl -s http://127.0.0.1:81/api/nginx/proxy-hosts -H 'Authorization: Bearer <TOKEN>'"
```

For each proxy host, note the `id`, `domain_names`, `certificate_id`, and all other fields needed for the PUT request.

### Step 4: Delete the existing certificate

```bash
sshpass -p '<SSH_PASSWORD>' ssh -o StrictHostKeyChecking=no root@<HOST> \
  "curl -s -X DELETE http://127.0.0.1:81/api/nginx/certificates/<CERT_ID> -H 'Authorization: Bearer <TOKEN>'"
```

### Step 5: Recreate the proxy host with a new certificate

Write the JSON payload to a file on the server to avoid shell escaping issues, then PUT:

```bash
sshpass -p '<SSH_PASSWORD>' ssh -o StrictHostKeyChecking=no root@<HOST> bash -c 'cat > /tmp/ph.json << '"'"'EOF'"'"'
{"domain_names":[<DOMAINS>],"forward_scheme":"<SCHEME>","forward_host":"<FWD_HOST>","forward_port":<FWD_PORT>,"certificate_id":"new","ssl_forced":true,"block_exploits":true,"allow_websocket_upgrade":true,"http2_support":true,"meta":{"letsencrypt_email":"gestion@artech-group.fr","letsencrypt_agree":true},"advanced_config":"","locations":[]}
EOF
curl -s -X PUT "http://127.0.0.1:81/api/nginx/proxy-hosts/<HOST_ID>" \
  -H "Authorization: Bearer '"<TOKEN>"'" \
  -H "Content-Type: application/json" \
  -d @/tmp/ph.json && rm /tmp/ph.json'
```

Preserve the original `forward_host`, `forward_port`, `forward_scheme`, and `domain_names` from Step 3.

### Step 6: Verify

Check the response contains a valid `certificate` object with a future `expires_on` date. Report the result to the user:
- Domains covered
- Certificate expiry date
- Success or failure

## Important notes

- If certificate creation fails (Internal Error), it usually means DNS is not pointing to the server. Inform the user which domains failed.
- The NPM API listens on IPv4 (`127.0.0.1`), not `localhost`.
- Let's Encrypt certificates are valid for 90 days. Renew when they have less than 30 days remaining.

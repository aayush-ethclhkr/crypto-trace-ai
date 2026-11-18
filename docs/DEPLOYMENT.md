# Deployment Guide

## Overview

CryptoTrace AI is designed for deployment as a full-stack application with separate frontend and backend services.

---

## Environment Variables

### Frontend (Vercel)
```env
VITE_API_URL=<backend-url>
VITE_ETHERSCAN_API_KEY=<key>
VITE_TRONGRID_API_KEY=<key>
```

### Backend (Railway/Render)
```env
ETHERSCAN_API_KEY=<key>
TRONGRID_API_KEY=<key>
PORT=8000
```

---

## Railway Deployment (Backend)

Railway automatically detects the configuration from `railway.toml`.

1. Connect GitHub repository
2. Configure environment variables
3. Generate public domain
4. Deploy

---

## Render Deployment (Backend)

Render automatically detects the configuration from `render.yaml`.

1. Connect GitHub repository
2. Configure environment variables
3. Deploy

---

## Vercel Deployment (Frontend)

Vercel automatically detects the Vite configuration from `vercel.json`.

1. Import GitHub repository
2. Configure environment variables (include `VITE_API_URL`)
3. Deploy

---

## Post-Deployment

1. Verify backend health endpoint: `<backend-url>/health`
2. Test frontend connectivity to backend
3. Update CORS configuration if needed
4. Monitor logs for any issues

---

## Scaling Considerations

- **Database**: Consider migrating to PostgreSQL for production
- **Caching**: Implement Redis for API response caching
- **CDN**: Use CDN for static assets
- **Load Balancing**: Implement for high-traffic scenarios

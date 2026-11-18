# 🚀 CryptoTrace AI - Full Deployment Guide

## Overview

This guide will help you deploy the complete CryptoTrace AI application with:
- **Frontend**: Hosted on Vercel (free)
- **Backend API**: Hosted on Railway or Render (free tier available)

---

## 📋 Prerequisites

1. GitHub account (already have ✅)
2. Vercel account (sign up at https://vercel.com)
3. Railway account (sign up at https://railway.app) **OR** Render account (https://render.com)
4. API Keys:
   - Etherscan API Key (https://etherscan.io/apis)
   - TronGrid API Key (https://www.trongrid.io)

---

## Part 1: Deploy Backend API (Railway - Recommended)

### Step 1: Create Railway Account
1. Go to https://railway.app
2. Sign in with GitHub
3. Authorize Railway to access your repositories

### Step 2: Deploy Backend
1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose **`crypto-trace-ai`** repository
4. Railway will auto-detect Python and deploy

### Step 3: Configure Environment Variables
In Railway dashboard, add these environment variables:
```
ETHERSCAN_API_KEY=your_actual_key
TRONGRID_API_KEY=your_actual_key
BLOCKFROST_API_KEY=your_actual_key (optional)
PORT=8000
```

### Step 4: Get Your API URL
1. Go to your Railway deployment **Settings**
2. Under **Networking**, click **"Generate Domain"**
3. Copy the generated URL (e.g., `https://your-app.up.railway.app`)
4. **Save this URL** - you'll need it for frontend!

---

## Part 2: Deploy Frontend (Vercel)

### Step 1: Create Vercel Account
1. Go to https://vercel.com
2. Sign in with GitHub
3. Authorize Vercel to access your repositories

### Step 2: Import Project
1. Click **"Add New Project"**
2. Select **`crypto-trace-ai`** repository
3. Vercel will auto-detect Vite framework

### Step 3: Configure Build Settings
- **Framework Preset**: Vite
- **Build Command**: `bun run build` (or `npm run build`)
- **Output Directory**: `dist`
- **Install Command**: `bun install` (or `npm install`)

### Step 4: Add Environment Variables
In Vercel project settings, add:
```
VITE_API_URL=https://your-app.up.railway.app
VITE_ETHERSCAN_API_KEY=your_actual_key
VITE_TRONGRID_API_KEY=your_actual_key
```
⚠️ **Important**: Replace `https://your-app.up.railway.app` with your actual Railway URL from Part 1!

### Step 5: Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. Get your live URL (e.g., `https://crypto-trace-ai.vercel.app`)

---

## Part 3: Update Backend CORS

After deploying frontend, update your backend to allow your Vercel domain:

### Option A: Via Railway Dashboard
1. Go to Railway project
2. Add environment variable:
```
ALLOWED_ORIGINS=https://your-app.vercel.app
```

### Option B: Update Code (if needed)
Edit `api/main.py` and update CORS origins:
```python
allow_origins=["https://your-app.vercel.app"],  # Your Vercel domain
```

Then commit and push - Railway will auto-deploy.

---

## 🎯 Verification Checklist

### Test Backend API
1. Visit: `https://your-app.up.railway.app` (should show API info)
2. Visit: `https://your-app.up.railway.app/health` (should show `{"status":"healthy"}`)

### Test Frontend
1. Visit your Vercel URL
2. Try analyzing a wallet address
3. Check browser console for errors
4. Test all features:
   - ✅ Wallet analysis
   - ✅ Case management
   - ✅ Sanctions registry

---

## Alternative: Deploy Backend on Render

If you prefer Render instead of Railway:

### Render Deployment Steps
1. Go to https://render.com
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure:
   - **Name**: `cryptotrace-api`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r api/requirements.txt && pip install -r engine/requirements.txt`
   - **Start Command**: `cd api && uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Add environment variables (same as Railway)
6. Click **"Create Web Service"**
7. Copy the generated URL (e.g., `https://cryptotrace-api.onrender.com`)

---

## 📝 Environment Variables Summary

### Backend (Railway/Render)
```env
ETHERSCAN_API_KEY=your_key
TRONGRID_API_KEY=your_key
BLOCKFROST_API_KEY=your_key
PORT=8000
```

### Frontend (Vercel)
```env
VITE_API_URL=https://your-backend-url.railway.app
VITE_ETHERSCAN_API_KEY=your_key
VITE_TRONGRID_API_KEY=your_key
```

---

## 🐛 Troubleshooting

### Frontend can't connect to backend
- ✅ Check `VITE_API_URL` is set correctly in Vercel
- ✅ Verify backend is running (visit health endpoint)
- ✅ Check browser console for CORS errors
- ✅ Ensure backend allows your Vercel domain in CORS

### Backend deployment fails
- ✅ Check build logs in Railway/Render dashboard
- ✅ Verify all dependencies are in requirements files
- ✅ Ensure environment variables are set

### API returns errors
- ✅ Check Railway/Render logs for errors
- ✅ Verify API keys are valid
- ✅ Test endpoints directly with Postman/curl

---

## 🎉 Success!

Once both deployments are complete, you'll have:

✅ **Live Frontend**: `https://your-app.vercel.app`  
✅ **Live Backend**: `https://your-app.railway.app`  
✅ **Fully functional**: All features working end-to-end

Share your live link with anyone! 🚀

---

## 📊 Free Tier Limits

### Vercel (Frontend)
- ✅ Unlimited bandwidth
- ✅ 100 GB bandwidth/month
- ✅ Custom domain support

### Railway (Backend)
- ✅ $5 free credit/month
- ✅ ~500 hours of usage
- ✅ Enough for development/demo

### Render (Backend)
- ✅ 750 hours/month free
- ✅ Sleeps after 15 min inactivity
- ✅ Wakes up on request

---

*Last updated: 2026-11-18*

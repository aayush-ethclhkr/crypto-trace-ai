# 🚀 Deploy CryptoTrace AI - Step-by-Step Guide

**Status**: ✅ All code pushed to GitHub and ready for deployment!

**Repository**: https://github.com/aayush-ethclhkr/crypto-trace-ai

---

## 📋 What You'll Get

After deployment, you'll have:
- 🌐 **Live Frontend** - React app on Vercel (free)
- 🔧 **Live Backend API** - FastAPI on Railway/Render (free tier)
- 🔗 **Public URL** - Share with anyone!

**Estimated Time**: 10-15 minutes

---

## Part 1: Deploy Backend API (Railway) - 5 minutes

### Step 1: Sign Up for Railway
1. Go to **https://railway.app**
2. Click **"Login"** → **"Login with GitHub"**
3. Authorize Railway to access your GitHub account

### Step 2: Create New Project
1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose **`crypto-trace-ai`** from the list
4. Railway will start building automatically

### Step 3: Add Environment Variables
1. Click on your deployed service
2. Go to **"Variables"** tab
3. Click **"+ New Variable"** and add these:

```
ETHERSCAN_API_KEY=DQMXWFWJP44TCBFRW18XHSMBW8Z1INJX4K
TRONGRID_API_KEY=5e0cdbfb-ce28-4d5a-a51b-2a6af4ebf26b
PORT=8000
```

### Step 4: Generate Public URL
1. Go to **"Settings"** tab
2. Under **"Networking"** section
3. Click **"Generate Domain"**
4. **COPY THIS URL!** (e.g., `https://cryptotrace-api-production-xxxx.up.railway.app`)

### Step 5: Verify Backend is Running
Visit: `https://YOUR-RAILWAY-URL/health`

Should see: `{"status":"healthy"}` ✅

---

## Part 2: Deploy Frontend (Vercel) - 5 minutes

### Step 1: Sign Up for Vercel
1. Go to **https://vercel.com**
2. Click **"Sign Up"** → **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account

### Step 2: Import Project
1. Click **"Add New..."** → **"Project"**
2. Find **`crypto-trace-ai`** repository
3. Click **"Import"**

### Step 3: Configure Project
Vercel will auto-detect settings. Verify:
- **Framework Preset**: Vite ✅
- **Build Command**: `bun run build` or `npm run build` ✅
- **Output Directory**: `dist` ✅
- **Install Command**: Auto-detected ✅

### Step 4: Add Environment Variables
Before deploying, click **"Environment Variables"** and add:

```
VITE_API_URL=https://YOUR-RAILWAY-URL-HERE
VITE_ETHERSCAN_API_KEY=DQMXWFWJP44TCBFRW18XHSMBW8Z1INJX4K
VITE_TRONGRID_API_KEY=5e0cdbfb-ce28-4d5a-a51b-2a6af4ebf26b
```

⚠️ **IMPORTANT**: Replace `YOUR-RAILWAY-URL-HERE` with your actual Railway URL from Part 1!

### Step 5: Deploy!
1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. You'll get a live URL like: `https://crypto-trace-ai.vercel.app`

---

## Part 3: Update CORS (if needed) - 2 minutes

If you get CORS errors when testing:

### Option 1: Quick Fix (Environment Variable)
1. Go to Railway dashboard
2. Add new variable: `ALLOWED_ORIGINS=https://your-app.vercel.app`
3. Railway will automatically redeploy

### Option 2: Code Update
1. Edit `api/main.py` line ~15
2. Change `allow_origins=["*"]` to `allow_origins=["https://your-app.vercel.app"]`
3. Commit and push - Railway auto-deploys

---

## ✅ Verify Deployment

### Test Backend
Visit: `https://your-railway-url.up.railway.app`
- Should see: API info page ✅
- Visit `/health`: Should see `{"status":"healthy"}` ✅

### Test Frontend
Visit: `https://your-app.vercel.app`
1. Open browser DevTools (F12) → Console tab
2. Enter test wallet: `0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045`
3. Click **"Trace Wallet"**
4. Check console for errors
5. Should see wallet analysis results! ✅

---

## 🎉 You're Live!

Your live URLs:

```
Frontend: https://__________.vercel.app
Backend:  https://__________.up.railway.app
GitHub:   https://github.com/aayush-ethclhkr/crypto-trace-ai
```

**Share your frontend URL with anyone!** 🚀

---

## 🐛 Troubleshooting

### "Failed to fetch" or CORS errors
- Verify `VITE_API_URL` in Vercel matches your Railway URL
- Check Railway logs for errors
- Update CORS in api/main.py (see Part 3)

### Backend shows "Application Error"
- Check Railway build logs
- Verify environment variables are set
- Check Python version (should use 3.11+)

### Frontend build fails
- Check Vercel build logs
- Verify all dependencies in package.json
- Try redeploying

### API returns 503
- Backend might be sleeping (free tier)
- Wait a few seconds and retry
- Check Railway logs

---

## 💰 Cost

Both deployments are **FREE**:
- **Vercel**: Unlimited bandwidth, custom domains
- **Railway**: $5 free credit/month (~500 hours runtime)

---

## 📝 What's Deployed

### Backend (Railway)
- FastAPI REST API
- Wallet analysis endpoints
- Case management
- Registry checks
- Full engine modules

### Frontend (Vercel)
- React + TypeScript web app
- Vite build system
- Tailwind CSS styling
- 4 main pages:
  - Trace Engine (wallet analysis)
  - Case Manager
  - Sanctions Registry
  - SIH Alignment

---

## 🔄 Future Updates

To update your deployment:

1. Make changes locally
2. Commit: `git commit -m "your message"`
3. Push: `git push origin main`
4. **Railway** and **Vercel** will auto-deploy! ✨

---

## 📚 Additional Resources

- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Detailed deployment guide
- [PRE_DEPLOYMENT_CHECKLIST.md](./PRE_DEPLOYMENT_CHECKLIST.md) - Pre-flight checklist
- [LOCAL_TEST_RESULTS.md](./LOCAL_TEST_RESULTS.md) - Local testing results
- [README.md](./README.md) - Project documentation

---

**Need Help?** Check the troubleshooting section or review the deployment logs in Railway/Vercel dashboards.

**Ready to deploy?** Start with Part 1! 🚀

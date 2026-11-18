# 🚀 Pre-Deployment Checklist

Before deploying to production, complete these steps:

## ✅ Code Preparation

- [x] FastAPI backend created with CORS support
- [x] Frontend integrated with API service
- [x] Deployment configs created (railway.toml, Procfile, render.yaml, vercel.json)
- [ ] Test full-stack locally (run `run_fullstack.bat`)
- [ ] Commit all changes to Git
- [ ] Push to GitHub

## ✅ Environment Variables

### Backend API (Railway/Render)
Ensure these are set in your deployment platform:

```
ETHERSCAN_API_KEY=your_actual_etherscan_key
TRONGRID_API_KEY=your_actual_trongrid_key
BLOCKFROST_API_KEY=your_blockfrost_key (optional)
PORT=8000
```

### Frontend (Vercel)
Ensure these are set in Vercel dashboard:

```
VITE_API_URL=https://your-backend.railway.app
VITE_ETHERSCAN_API_KEY=your_etherscan_key
VITE_TRONGRID_API_KEY=your_trongrid_key
```

## ✅ Deployment Steps

### Step 1: Deploy Backend First

**Option A: Railway (Recommended)**
1. ✅ Sign up at https://railway.app with GitHub
2. ✅ Create new project from GitHub repo
3. ✅ Add environment variables
4. ✅ Generate domain
5. ✅ Copy the Railway URL (e.g., `https://cryptotrace-api.up.railway.app`)

**Option B: Render**
1. ✅ Sign up at https://render.com
2. ✅ Create new Web Service
3. ✅ Connect GitHub repo
4. ✅ Set build/start commands (already in `render.yaml`)
5. ✅ Add environment variables
6. ✅ Deploy and copy URL

### Step 2: Deploy Frontend

1. ✅ Sign up at https://vercel.com with GitHub
2. ✅ Import `crypto-trace-ai` repository
3. ✅ Vercel auto-detects Vite
4. ✅ Add environment variables (especially `VITE_API_URL` with your backend URL!)
5. ✅ Deploy
6. ✅ Get your live URL

### Step 3: Update CORS (If Needed)

If you get CORS errors:
1. Go to Railway/Render dashboard
2. Update `api/main.py` CORS settings
3. Or add environment variable: `ALLOWED_ORIGINS=https://your-app.vercel.app`
4. Redeploy

## ✅ Post-Deployment Verification

### Test Backend
- [ ] Visit: `https://your-backend.up.railway.app`
- [ ] Visit: `https://your-backend.up.railway.app/health`
- [ ] Should return: `{"status":"healthy"}`

### Test Frontend
- [ ] Visit your Vercel URL
- [ ] Open browser DevTools (F12) → Console
- [ ] Enter a test wallet address
- [ ] Click "Trace Wallet"
- [ ] Check for errors in console
- [ ] Verify API calls are successful

### Test Full Features
- [ ] Wallet analysis works
- [ ] Case manager loads
- [ ] Sanctions registry displays
- [ ] No CORS errors
- [ ] All pages load correctly

## ✅ Common Issues & Fixes

### "API unavailable, using direct blockchain analysis"
- ✅ Check `VITE_API_URL` is set correctly in Vercel
- ✅ Verify backend is running (visit health endpoint)
- ✅ Check backend logs in Railway/Render

### CORS Errors
- ✅ Update CORS in `api/main.py` to include your Vercel domain
- ✅ Commit and push changes
- ✅ Railway/Render will auto-deploy

### Build Failures
- ✅ Check deployment logs
- ✅ Verify all dependencies in `requirements.txt`
- ✅ Ensure Python version is compatible (3.11+)

### API Returns 500 Errors
- ✅ Check backend logs
- ✅ Verify environment variables are set
- ✅ Test API endpoints directly with Postman

## 🎉 Success Criteria

Your deployment is successful when:

✅ Backend health endpoint returns `{"status":"healthy"}`
✅ Frontend loads without errors
✅ Wallet analysis returns results from API
✅ No console errors in browser DevTools
✅ You can share the live link with others

---

## 📝 Live URLs Template

Once deployed, update this:

```
Frontend (Vercel): https://__________.vercel.app
Backend (Railway): https://__________.up.railway.app
Repository: https://github.com/aayush-ethclhkr/crypto-trace-ai
```

---

**Ready to Deploy?** Follow the [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed step-by-step instructions.

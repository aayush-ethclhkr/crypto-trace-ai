# 🧪 CryptoTrace AI - Quick Test Guide

## 5-Minute Functionality Test

### Test 1: Web Dashboard (2 minutes)

1. **Start the web app**:
   ```bash
   .\run_web.bat
   ```
   or
   ```bash
   bun run dev
   ```

2. **Open browser**: http://localhost:5173

3. **Test wallet analysis**:
   - Navigate to "Trace Engine" page (should be default)
   - Enter test address: `0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045`
   - Click "Trace Wallet"
   - Expected: Shows Ethereum wallet details, balance, transaction history

4. **Test navigation**:
   - Click "Case Manager" - should show case management interface
   - Click "Sanctions Registry" - should show OFAC database
   - Click "SIH Alignment" - should show project documentation

5. **Stop the server**: `Ctrl + C` in terminal

---

### Test 2: Python CLI Engine (2 minutes)

1. **Start the engine**:
   ```bash
   .\run_engine.bat
   ```

2. **Test wallet analysis**:
   - Select option: `1` (Wallet Analysis)
   - Enter address: `0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045`
   - Press Enter
   - Expected: Rich terminal output with wallet details, risk score, transactions

3. **Test case management**:
   - Go back to main menu (if not there)
   - Select option: `2` (Case Management)
   - Choose an option (e.g., create new case)
   - Follow prompts

4. **Test dashboard**:
   - Return to main menu
   - Select option: `6` (System Dashboard)
   - Expected: Shows statistics and system telemetry

5. **Exit**: Select option `0`

---

### Test 3: Production Build (1 minute)

1. **Build the project**:
   ```bash
   bun run build
   ```

2. **Check output**:
   - Look for `dist/` folder
   - Should contain `index.html` and `assets/` folder
   - No build errors

3. **Preview production build** (optional):
   ```bash
   bun run preview
   ```

---

## Quick Verification Checklist

Run this before demo/presentation:

```bash
# Run automated verification
.\verify_setup.bat
```

### Expected Output:
```
[OK] Bun is installed
[OK] node_modules folder exists
[OK] Python venv exists
[OK] All Python packages installed
[OK] Root .env exists
[OK] Engine .env exists
[OK] cases.db exists
[OK] registry.db exists

VERIFICATION COMPLETE - ALL CHECKS PASSED!
```

---

## Demo Wallet Addresses

### For Live Demo:

**Safe Wallet (Good for first demo)**:
```
Address: 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
Network: Ethereum
Owner: Vitalik Buterin (Public)
Risk: LOW
```

**High-Risk Wallet (Show detection capability)**:
```
Address: 0x7F367cC41522cE07553e823bf3be79A889DEbe1B
Network: Ethereum
Entity: DPRK Lazarus Group
Risk: CRITICAL (95/100)
```

**Bitcoin Genesis (Historical)**:
```
Address: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
Network: Bitcoin
Owner: Satoshi Nakamoto
Risk: LOW
```

---

## Troubleshooting Quick Fixes

### Web app won't start?
```bash
bun install
bun run dev
```

### Python engine crashes?
```bash
cd engine
.\venv\Scripts\python.exe -m pip install -r requirements.txt
.\venv\Scripts\python.exe startup.py
```

### Port 5173 already in use?
```bash
# Kill the process or change port in vite.config.ts
```

---

## Performance Expectations

### Web Dashboard
- **First load**: ~2-3 seconds
- **Wallet trace**: 1-5 seconds (depends on API)
- **Navigation**: Instant
- **Build time**: ~3-4 seconds

### Python CLI
- **Startup**: <1 second
- **Wallet analysis**: 2-10 seconds (depends on blockchain)
- **Report generation**: 1-3 seconds
- **Database queries**: <100ms

---

## Ready for Production ✅

If all tests pass:
- ✅ Project is fully functional
- ✅ Ready for GitHub push
- ✅ Ready for SIH submission
- ✅ Ready for deployment

---

*Last tested: November 18, 2026*  
*Test duration: ~5 minutes*  
*Result: ✅ ALL SYSTEMS OPERATIONAL*

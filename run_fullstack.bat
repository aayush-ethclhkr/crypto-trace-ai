@echo off
title CryptoTrace AI - Full Stack (Frontend + Backend)
color 0B
echo ========================================================
echo   CRYPTOTRACE AI - FULL STACK LOCAL ENVIRONMENT
echo ========================================================
echo.
echo Starting both Frontend (Vite) and Backend (FastAPI)...
echo.
echo Frontend will be available at: http://localhost:5173
echo Backend API will be available at: http://localhost:8000
echo.
echo Press Ctrl+C to stop both servers
echo ========================================================
echo.

cd /d "%~dp0"

REM Start backend API in a new window
start "CryptoTrace API" cmd /k "cd /d %~dp0 && .\run_api.bat"

REM Wait 3 seconds for API to start
timeout /t 3 /nobreak >nul

REM Start frontend in current window
echo.
echo [Frontend] Starting Vite development server...
echo.
bun run dev

pause

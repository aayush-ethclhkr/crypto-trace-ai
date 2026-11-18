@echo off
title CryptoTrace AI - Backend API Server
echo ========================================================
echo   CRYPTOTRACE AI - BACKEND API SERVER
echo   Starting FastAPI server on http://localhost:8000
echo ========================================================
echo.

cd /d "%~dp0\api"

REM Check if virtual environment exists
if exist "..\engine\venv\Scripts\python.exe" (
    echo [INFO] Using engine virtual environment...
    ..\engine\venv\Scripts\python.exe -m pip install -r requirements.txt >nul 2>&1
    ..\engine\venv\Scripts\python.exe main.py
) else (
    echo [INFO] Using system Python...
    pip install -r requirements.txt
    python main.py
)

pause

@echo off
title CryptoTrace AI - Forensics CLI & Database Engine
echo ========================================================
echo   CRYPTOTRACE AI - FORENSIC CLI & DATABASE ENGINE
echo   Launching Rich Terminal Interface (SIH-26182)
echo ========================================================
echo.
cd /d "%~dp0\engine"
if exist "venv\Scripts\python.exe" (
    echo [INFO] Running in dedicated Python virtual environment...
    venv\Scripts\python.exe startup.py
) else (
    echo [INFO] Running with system Python...
    python startup.py
)
pause

@echo off
title CryptoTrace AI - Web Dashboard
echo ========================================================
echo   CRYPTOTRACE AI - BLOCKCHAIN FORENSIC SUITE
echo   Starting Modern Web Application (Vite + React)
echo ========================================================
echo.
cd /d "%~dp0"
where bun >nul 2>&1
if %errorlevel% equ 0 (
    echo [INFO] Starting with Bun...
    bun run dev
) else (
    echo [INFO] Starting with NPM...
    call npm run dev
)
pause

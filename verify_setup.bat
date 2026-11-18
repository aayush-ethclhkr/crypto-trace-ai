@echo off
title CryptoTrace AI - Setup Verification
color 0A
echo ============================================================
echo   CRYPTOTRACE AI - SETUP VERIFICATION
echo   Checking all dependencies and configurations...
echo ============================================================
echo.

:: Check Bun
echo [1/6] Checking Bun installation...
where bun >nul 2>&1
if %errorlevel% equ 0 (
    echo     [OK] Bun is installed
    bun --version
) else (
    echo     [WARNING] Bun not found - will use npm
)
echo.

:: Check Node Modules
echo [2/6] Checking Node modules...
if exist "node_modules" (
    echo     [OK] node_modules folder exists
) else (
    echo     [ERROR] node_modules missing - run: bun install
    goto :error
)
echo.

:: Check Python
echo [3/6] Checking Python virtual environment...
if exist "engine\venv\Scripts\python.exe" (
    echo     [OK] Python venv exists
    engine\venv\Scripts\python.exe --version
) else (
    echo     [ERROR] Python venv missing
    goto :error
)
echo.

:: Check Python Dependencies
echo [4/6] Verifying Python packages...
engine\venv\Scripts\python.exe -c "import rich; import requests; import reportlab; print('    [OK] All Python packages installed')" 2>nul
if %errorlevel% neq 0 (
    echo     [ERROR] Python packages missing
    goto :error
)
echo.

:: Check Environment Files
echo [5/6] Checking environment files...
if exist ".env" (
    echo     [OK] Root .env exists
) else (
    echo     [WARNING] Root .env missing - copy from .env.example
)
if exist "engine\.env" (
    echo     [OK] Engine .env exists
) else (
    echo     [WARNING] Engine .env missing - copy from engine\.env.example
)
echo.

:: Check Database Files
echo [6/6] Checking database files...
if exist "engine\database\cases.db" (
    echo     [OK] cases.db exists
) else (
    echo     [INFO] cases.db will be created on first run
)
if exist "engine\database\registry.db" (
    echo     [OK] registry.db exists
) else (
    echo     [INFO] registry.db will be created on first run
)
echo.

echo ============================================================
echo   VERIFICATION COMPLETE - ALL CHECKS PASSED!
echo ============================================================
echo.
echo The project is ready to run:
echo   - Web Dashboard: run_web.bat or 'bun run dev'
echo   - Python Engine: run_engine.bat
echo.
echo Press any key to exit...
pause >nul
goto :end

:error
echo.
echo ============================================================
echo   VERIFICATION FAILED - Please fix errors above
echo ============================================================
echo.
pause
exit /b 1

:end
exit /b 0

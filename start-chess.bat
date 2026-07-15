@echo off
title Chess Coach launcher
cd /d "%~dp0"

echo ============================================
echo   Chess Coach
echo ============================================
echo Starting the local server (chess engines take ~10s to warm up)...
echo.

rem Launch the server in its own window and keep it open.
start "Chess Coach server - KEEP THIS WINDOW OPEN" cmd /k python maia_server.py

echo Waiting for the server to come up...
rem Poll the health endpoint for up to ~20 seconds.
powershell -NoProfile -Command "for($i=0;$i -lt 40;$i++){ try{ if((Invoke-WebRequest -Uri 'http://localhost:8000/health' -UseBasicParsing -TimeoutSec 2).StatusCode -eq 200){ exit 0 } }catch{} ; Start-Sleep -Milliseconds 500 } ; exit 1"

if errorlevel 1 (
  echo.
  echo The server did not respond yet. Opening the page anyway --
  echo if it looks broken, wait a few seconds and refresh.
) else (
  echo Server is ready.
)

start "" "http://localhost:8000/"

echo.
echo Opened http://localhost:8000/ in your browser.
echo.
echo   * Keep the "Chess Coach server" window OPEN while you play.
echo   * Close that window (or press Ctrl+C in it) to stop the app.
echo.
echo This launcher window will close in a few seconds...
timeout /t 6 >nul

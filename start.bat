@echo off
echo Starting Chez Liqi Restaurant Website...
echo.
echo Cleaning cache...
if exist .next rmdir /s /q .next >nul 2>&1
if exist node_modules\.cache rmdir /s /q node_modules\.cache >nul 2>&1
echo.
echo Building project...
npm run build
if %errorlevel% equ 0 (
    echo.
    echo ✅ Build successful!
    echo Starting development server...
    echo 🌐 Open http://localhost:3000 in your browser
    echo.
    npm run dev
) else (
    echo.
    echo ❌ Build failed. Please check the errors above.
    pause
)

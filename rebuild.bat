@echo off
echo Cleaning cache and rebuilding...
if exist .next rmdir /s /q .next
if exist node_modules\.cache rmdir /s /q node_modules\.cache
echo Building project...
npm run build
if %errorlevel% equ 0 (
    echo Build successful! Starting development server...
    npm run dev
) else (
    echo Build failed. Please check the errors above.
    pause
)

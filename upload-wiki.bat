@echo off
echo.
echo ========================================
echo   GitHub Wiki Upload Script
echo ========================================
echo.
echo This script will upload wiki content to your GitHub repository.
echo Make sure you have git installed and configured.
echo.
pause

echo.
echo 📚 Starting Wiki Upload Process...
echo.

REM Check if git is available
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Error: Git is not installed or not in PATH
    echo Please install Git and try again.
    pause
    exit /b 1
)

REM Create temporary directory
echo 🔄 Creating temporary directory...
if exist temp-wiki rmdir /s /q temp-wiki

REM Clone wiki repository
echo 🔄 Cloning wiki repository...
git clone https://github.com/mrtonymu/Portfolio-2025.wiki.git temp-wiki
if errorlevel 1 (
    echo ❌ Error: Failed to clone wiki repository
    echo Make sure the repository exists and you have access.
    pause
    exit /b 1
)

REM Navigate to wiki directory
cd temp-wiki

REM Copy markdown files
echo 📄 Copying wiki content...
copy ".\wiki-content\Home.md" ".\Home.md" >nul
copy ".\wiki-content\Installation-Guide.md" ".\Installation-Guide.md" >nul
copy ".\wiki-content\Project-Structure.md" ".\Project-Structure.md" >nul
copy ".\wiki-content\Tech-Stack.md" ".\Tech-Stack.md" >nul
copy ".\wiki-content\Deployment-Guide.md" ".\Deployment-Guide.md" >nul
copy ".\wiki-content\FAQ.md" ".\FAQ.md" >nul
copy ".\wiki-content\Contributing.md" ".\Contributing.md" >nul

REM Add and commit changes
echo 🚀 Committing changes...
git add .
git commit -m "📚 Add comprehensive wiki documentation - Home page with navigation and overview - Installation guide with troubleshooting - Project structure explanation - Complete tech stack documentation - Deployment guide for multiple platforms - FAQ with common issues and solutions - Contributing guidelines for developers"

REM Push to GitHub
echo 🌐 Pushing to GitHub...
git push origin master
if errorlevel 1 (
    echo ❌ Error: Failed to push to GitHub
    echo Please check your credentials and try again.
    cd ..
    rmdir /s /q temp-wiki
    pause
    exit /b 1
)

REM Cleanup
echo 🧹 Cleaning up...
cd ..
rmdir /s /q temp-wiki

echo.
echo ✅ Wiki upload completed successfully!
echo.
echo 🌐 Your wiki is now available at:
echo https://github.com/mrtonymu/Portfolio-2025/wiki
echo.
echo 📚 Wiki pages created:
echo   • Home (main landing page)
echo   • Installation Guide
echo   • Project Structure
echo   • Tech Stack
echo   • Deployment Guide
echo   • FAQ
echo   • Contributing
echo.
echo 🎉 Thank you for creating comprehensive documentation!
echo.
pause
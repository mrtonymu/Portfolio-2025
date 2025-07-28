# GitHub Wiki Upload Script for PowerShell
# This script uploads wiki content to your GitHub repository

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   GitHub Wiki Upload Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

Write-Host "This script will upload wiki content to your GitHub repository." -ForegroundColor Yellow
Write-Host "Make sure you have git installed and configured." -ForegroundColor Yellow

# Check if git is available
try {
    $gitVersion = git --version
    Write-Host "Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "Error: Git is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Git and try again." -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

# Confirm before proceeding
$confirm = Read-Host "Do you want to proceed with uploading wiki content? (y/N)"
if ($confirm -ne 'y' -and $confirm -ne 'Y') {
    Write-Host "Upload cancelled." -ForegroundColor Yellow
    exit 0
}

Write-Host "Starting Wiki Upload Process..." -ForegroundColor Blue

# Create temporary directory
Write-Host "Creating temporary directory..." -ForegroundColor Blue
if (Test-Path "temp-wiki") {
    Remove-Item -Recurse -Force "temp-wiki"
}

# Clone wiki repository
Write-Host "Cloning wiki repository..." -ForegroundColor Blue
try {
    git clone https://github.com/mrtonymu/Portfolio-2025.wiki.git temp-wiki
    if ($LASTEXITCODE -ne 0) {
        throw "Git clone failed"
    }
} catch {
    Write-Host "Error: Failed to clone wiki repository" -ForegroundColor Red
    Write-Host "Make sure the repository exists and you have access." -ForegroundColor Red
    Write-Host "You may need to create the first wiki page manually on GitHub first." -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

# Navigate to wiki directory
Set-Location "temp-wiki"

# Copy markdown files
Write-Host "Copying wiki content..." -ForegroundColor Blue
try {
    Copy-Item "..\wiki-content\Home.md" ".\Home.md" -Force
    Copy-Item "..\wiki-content\Installation-Guide.md" ".\Installation-Guide.md" -Force
    Copy-Item "..\wiki-content\Project-Structure.md" ".\Project-Structure.md" -Force
    Copy-Item "..\wiki-content\Tech-Stack.md" ".\Tech-Stack.md" -Force
    Copy-Item "..\wiki-content\Deployment-Guide.md" ".\Deployment-Guide.md" -Force
    Copy-Item "..\wiki-content\FAQ.md" ".\FAQ.md" -Force
    Copy-Item "..\wiki-content\Contributing.md" ".\Contributing.md" -Force
    Write-Host "All wiki files copied successfully" -ForegroundColor Green
} catch {
    Write-Host "Error: Failed to copy wiki files" -ForegroundColor Red
    Write-Host "Make sure the wiki-content directory exists." -ForegroundColor Red
    Set-Location ".."
    Remove-Item -Recurse -Force "temp-wiki"
    Read-Host "Press Enter to exit"
    exit 1
}

# Add and commit changes
Write-Host "Committing changes..." -ForegroundColor Blue
git add .
$commitMessage = "Add comprehensive wiki documentation with installation guide, project structure, tech stack, deployment guide, FAQ, and contributing guidelines"
git commit -m $commitMessage

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Blue
try {
    git push origin master
    if ($LASTEXITCODE -ne 0) {
        # Try main branch if master fails
        Write-Host "Trying main branch..." -ForegroundColor Yellow
        git push origin main
        if ($LASTEXITCODE -ne 0) {
            throw "Git push failed"
        }
    }
} catch {
    Write-Host "Error: Failed to push to GitHub" -ForegroundColor Red
    Write-Host "Please check your credentials and try again." -ForegroundColor Red
    Write-Host "You may need to authenticate with GitHub first." -ForegroundColor Yellow
    Set-Location ".."
    Remove-Item -Recurse -Force "temp-wiki"
    Read-Host "Press Enter to exit"
    exit 1
}

# Cleanup
Write-Host "Cleaning up..." -ForegroundColor Blue
Set-Location ".."
Remove-Item -Recurse -Force "temp-wiki"

Write-Host "Wiki upload completed successfully!" -ForegroundColor Green
Write-Host "Your wiki is now available at:" -ForegroundColor Cyan
Write-Host "https://github.com/mrtonymu/Portfolio-2025/wiki" -ForegroundColor Blue

Write-Host "Wiki pages created:" -ForegroundColor Cyan
Write-Host "   - Home (main landing page)" -ForegroundColor White
Write-Host "   - Installation Guide" -ForegroundColor White
Write-Host "   - Project Structure" -ForegroundColor White
Write-Host "   - Tech Stack" -ForegroundColor White
Write-Host "   - Deployment Guide" -ForegroundColor White
Write-Host "   - FAQ" -ForegroundColor White
Write-Host "   - Contributing" -ForegroundColor White

Write-Host "Thank you for creating comprehensive documentation!" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "   1. Visit your wiki to verify all pages loaded correctly" -ForegroundColor White
Write-Host "   2. Test all internal links and navigation" -ForegroundColor White
Write-Host "   3. Share the wiki URL with your users and contributors" -ForegroundColor White
Write-Host "   4. Keep the documentation updated as your project evolves" -ForegroundColor White

Read-Host "Press Enter to exit"
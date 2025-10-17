@echo off
setlocal enabledelayedexpansion

:: Ask for Git repository URL
set /p repo_url="Enter Git repository URL: "

:: Ask for project path
set /p project_path="Enter the full project path: "

:commit_loop
cd /d "%project_path%" || (
    echo [Error] Invalid project path.
    pause
    exit /b 1
)

:: Initialize Git if not already initialized
if not exist ".git" (
    echo Initializing Git repository...
    git init
    git remote add origin %repo_url%
) else (
    echo Git repository already initialized.
)

:: Add all changes
git add .

:: Generate a timestamped commit message
for /f "tokens=2 delims==" %%I in ('wmic OS Get localdatetime /value') do set datetime=%%I
set commit_message="Auto commit on !datetime:~0,4!-!datetime:~4,2!-!datetime:~6,2! !datetime:~8,2!:!datetime:~10,2!:!datetime:~12,2!"
git commit -m !commit_message!

:: Push changes
git push -u origin main

echo [Success] Changes pushed to repository.

:: Ask if the user wants to commit again
set /p commit_again="Do you want to commit again? (y/n): "
if /i "%commit_again%"=="y" goto commit_loop

echo Exiting script.
pause
exit /b 0

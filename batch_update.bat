@echo off
cd /d "c:\Users\ASUS\Documents\realitywindowfashion.com"

setlocal enabledelayedexpansion

set "pattern=<input type="hidden" name="access_key" value="65eb9f46-7ea2-4ddd-b25b-c581de690224">"
set "replacement=<input type="hidden" name="access_key" value="65eb9f46-7ea2-4ddd-b25b-c581de690224">          <input type="hidden" name="to_email" value="realitywindowfashion@gmail.com">          <input type="hidden" name="subject" value="New Inquiry - Reality Window Fashion">"

set count=0

for %%f in (blinds-nets-and-invisible-grill-installation-services-in-*.html) do (
    findstr /c:"name="to_email"" "%%f" >nul
    if errorlevel 1 (
        powershell -Command "(gc '%%f') -replace [regex]::Escape('<input type=\"hidden\" name=\"access_key\" value=\"65eb9f46-7ea2-4ddd-b25b-c581de690224\">'), '<input type=\"hidden\" name=\"access_key\" value=\"65eb9f46-7ea2-4ddd-b25b-c581de690224\">%0a          <input type=\"hidden\" name=\"to_email\" value=\"realitywindowfashion@gmail.com\">%0a          <input type=\"hidden\" name=\"subject\" value=\"New Inquiry - Reality Window Fashion\">') | Set-Content '%%f'"
        set /a count+=1
        echo ✓ %%f
    ) else (
        echo ⊘ %%f (already configured)
    )
)

echo.
echo Updated !count! files

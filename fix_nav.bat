@echo off
setlocal enabledelayedexpansion

cd /d "c:\Users\ASUS\Documents\realitywindowfashion.com"

for /r . %%F in (blinds-nets-*.html) do (
    if /I not "%%~nF"=="blinds-nets-and-invisible-grill-installation-services-in-airoli.html" (
        echo Processing: %%~nF
        powershell -NoProfile -Command "$content = Get-Content '%%F' -Raw; $content = $content -replace 'href=\"#\" class=\"nav-logo\"', 'href=\"index.html\" class=\"nav-logo\"'; $content = $content -replace '<li><a href=\"#home\">Home</a></li>', '<li><a href=\"index.html\">Home</a></li>'; $content = $content -replace '<a href=\"#home\">Home</a>', '<a href=\"index.html\">Home</a>'; [System.IO.File]::WriteAllText('%%F', $content, [System.Text.Encoding]::UTF8)"
    )
)

echo Done!

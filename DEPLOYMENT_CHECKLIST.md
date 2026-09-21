# Deployment Checklist for realitywindowfashion.com

## Current Status
- Files location: c:\Users\ASUS\Documents\realitywindowfashion.com\
- Status: LOCAL FILES (NOT DEPLOYED)
- Issue: Google Search Console shows "Server connection error"

## Required Actions

### 1. UPLOAD FILES TO WEB SERVER
   Upload ALL files and folders to your hosting provider:
   - All HTML files (index.html, location pages, etc.)
   - robots.txt
   - sitemap.xml
   - site.webmanifest
   - .htaccess (for Apache)
   - web.config (for IIS)
   - _headers (for Netlify/Vercel)
   - /public/ folder with all images
   - shared.css, shared.js (if applicable)

### 2. VERIFY DOMAIN & DNS
   - Log into your domain registrar (GoDaddy, Namecheap, etc.)
   - Ensure domain points to hosting server IP address
   - Wait 24-48 hours for DNS propagation if recently changed

### 3. SSL CERTIFICATE
   - Install/activate SSL certificate in hosting control panel
   - Ensure HTTPS works: https://realitywindowfashion.com/
   - Many hosts offer free Let's Encrypt certificates

### 4. SERVER CONFIGURATION
   Apache Servers:
   - Upload .htaccess file to root directory
   - Ensure mod_rewrite is enabled
   
   IIS Servers (Windows):
   - Upload web.config to root directory
   - Ensure URL Rewrite module is installed
   
   Netlify/Vercel:
   - Deploy via Git or drag-and-drop
   - _headers file will be used automatically

### 5. FILE PERMISSIONS (Linux/Apache)
   Set correct permissions via FTP or cPanel:
   - Files: chmod 644 (readable by all)
   - Folders: chmod 755 (accessible by all)
   - Command: find . -type f -exec chmod 644 {} \;
   - Command: find . -type d -exec chmod 755 {} \;

### 6. TEST DEPLOYMENT
   Open browser and verify these URLs work:
   ✓ https://realitywindowfashion.com/
   ✓ https://realitywindowfashion.com/robots.txt
   ✓ https://realitywindowfashion.com/sitemap.xml
   ✓ https://realitywindowfashion.com/about.html
   ✓ https://realitywindowfashion.com/blinds-nets-and-invisible-grill-installation-services-in-ahmednagar.html

### 7. VERIFY IN SEARCH CONSOLE
   After deployment:
   1. Go to: https://search.google.com/search-console
   2. Select property: realitywindowfashion.com
   3. Go to URL Inspection
   4. Test a failed URL
   5. Click "Test Live URL"
   6. If successful, click "Request Indexing"

### 8. COMMON HOSTING PROVIDERS - How to Deploy

   **cPanel Hosting:**
   1. Log into cPanel
   2. Open "File Manager"
   3. Navigate to public_html or www folder
   4. Upload all files
   5. Extract if zipped

   **Netlify:**
   1. Sign up at netlify.com
   2. Drag and drop your folder
   3. Update DNS to point to Netlify

   **Vercel:**
   1. Sign up at vercel.com
   2. Import from folder or Git
   3. Auto-deployment enabled

   **GitHub Pages:**
   1. Create GitHub repository
   2. Push all files
   3. Enable GitHub Pages in settings
   4. Point custom domain

### 9. TROUBLESHOOTING

   If still showing connection errors:
   
   A. Check server is running:
      ping realitywindowfashion.com
      
   B. Check DNS:
      nslookup realitywindowfashion.com
      
   C. Check hosting provider:
      - Contact support
      - Verify account is active
      - Check for IP blocking/firewall
      
   D. Check Googlebot access:
      - Ensure no IP blocking in hosting firewall
      - Whitelist Googlebot IP ranges
      - Check .htaccess doesn't block bots
      
   E. Server logs:
      - Check error logs in cPanel
      - Look for 403, 500, or connection errors
      - Verify PHP/server configuration

### 10. GOOGLE SEARCH CONSOLE FIXES

   After deployment is verified working:
   
   1. Submit Sitemap:
      - Go to Sitemaps section
      - Add: https://realitywindowfashion.com/sitemap.xml
      
   2. Request Indexing for important pages:
      - Homepage
      - All location pages showing errors
      - Product pages
      
   3. Use "Request Indexing" for up to 10 URLs per day
   
   4. For bulk re-crawl:
      - Go to Sitemaps
      - Remove and re-submit sitemap
      - Google will automatically re-crawl all URLs

### 11. MONITORING

   After 24-48 hours, check:
   - Google Search Console > Coverage report
   - Should show "Valid" for indexed pages
   - Errors should be gone
   
   If errors persist:
   - Check "Page fetch" details
   - Look at server response codes
   - Verify robots.txt in Search Console

---

## Support Contacts

If you need server/hosting help:
1. Contact your hosting provider support
2. Provide them this error: "Server connection error in Google Search Console"
3. Ask them to verify:
   - Server is accessible publicly
   - No IP blocking on Googlebot IPs
   - SSL certificate active
   - Domain DNS configured correctly

## Common Hosting Provider Support

- GoDaddy: 480-505-8877
- Bluehost: Chat or ticket system
- HostGator: 866-964-2867
- Namecheap: Chat support
- HostInger: Chat support
- SiteGround: Ticket system

---

## Files Created/Updated

✓ .htaccess - Apache server configuration
✓ web.config - IIS/Windows server configuration
✓ _headers - Netlify/Vercel headers
✓ robots.txt - Updated with explicit Googlebot permissions
✓ site.webmanifest - PWA manifest (already created)

All files are ready for deployment!

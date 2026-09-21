/* shared.js — nav + footer behaviour for all pages */
(function () {
  'use strict';

  /* Detect if we're inside a known subfolder */
  const path = window.location.pathname.replace(/\\/g, '/');
  const inProducts = path.includes('/products/');
  const inLocations = path.includes('/locations/');
  const ROOT = (inProducts || inLocations) ? '../' : '';

  const SERVICE_NAMES = [
    'Invisible Grill',
    'Pleated Mosquito Net',
    'Accordion Door',
    'Roller Blinds',
    'Wooden Venetian Blinds',
    'Zebra Blinds',
    'Cellular Blinds',
    'Shangrila Blinds',
    'Skylight Blinds',
    'Monsoon Blinds',
    'Zip Screen Blinds',
    'Bird Net'
  ];

  const SERVICE_SLUGS = {
    'Invisible Grill':        'invisible-grill',
    'Pleated Mosquito Net':   'pleated-mosquito-net',
    'Accordion Door':         'accordion-door',
    'Roller Blinds':          'roller-blinds',
    'Wooden Venetian Blinds': 'wooden-venetian-blinds',
    'Zebra Blinds':           'zebra-blinds',
    'Cellular Blinds':        'cellular-blinds',
    'Shangrila Blinds':       'shangrila-blinds',
    'Skylight Blinds':        'skylight-blinds',
    'Monsoon Blinds':         'monsoon-blinds',
    'Zip Screen Blinds':      'zip-screen-blinds',
    'Bird Net':               'bird-net'
  };

  function productHref(name) {
    const slug = SERVICE_SLUGS[name];
    if (!slug) return '#';
    if (inProducts) return slug + '.html';
    return ROOT + 'products/' + slug + '.html';
  }

  /* ── Inject full nav HTML ── */
  function buildNav() {
    const placeholder = document.getElementById('sharedNav');
    if (!placeholder) return;

    const base = ROOT;
    placeholder.outerHTML = `
<nav class="nav" id="nav">
  <div class="container">
    <a href="${base}index.html" class="nav-logo">
      <span class="nav-logo-name">Reality Window Fashion</span>
      <span class="nav-logo-tag">Blinds · Screens · Shutters</span>
    </a>

    <ul class="nav-links">
      <li><a href="${base}index.html">Home</a></li>
      <li><a href="${base}about.html">About</a></li>
      <li class="nav-products">
        <button type="button" class="nav-link-btn" id="productsMenuBtn" aria-expanded="false" aria-controls="productsMenu">
          Products
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="products-menu" id="productsMenu"></div>
      </li>
      <li><a href="${base}gallery.html">Gallery</a></li>
      <li><a href="${base}blog.html">Blog</a></li>
      <li><a href="${base}contact.html">Contact</a></li>
    </ul>

    <a href="tel:+917738517042" class="nav-call">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z"/>
      </svg>
      +91 77385 17042
    </a>

    <button type="button" class="mob-head-products" id="mobHeadProductsBtn" aria-expanded="false" aria-controls="mobHeadProductsMenu" aria-label="Open products menu">
      Products
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
    </button>

    <div class="hamburger" id="hamburger">
      <span></span><span></span><span></span>
    </div>
  </div>
</nav>

<div class="mob-head-products-menu" id="mobHeadProductsMenu"></div>

<div class="mob-menu" id="mobMenu">
  <a href="${base}index.html">Home</a>
  <a href="${base}about.html">About</a>
  <button type="button" class="mob-products-toggle" id="mobProductsBtn" aria-expanded="false" aria-controls="mobProductsMenu">
    Products
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
  </button>
  <div class="mob-products" id="mobProductsMenu"></div>
  <a href="${base}gallery.html">Gallery</a>
  <a href="${base}blog.html">Blog</a>
  <a href="${base}contact.html">Contact</a>
  <a href="tel:+917738517042" style="font-size:18px;margin-top:10px;">+91 77385 17042</a>
</div>`;
  }

  /* ── Inject full footer HTML ── */
  function buildFooter() {
    const placeholder = document.getElementById('sharedFooter');
    if (!placeholder) return;

    const base = ROOT;
    placeholder.outerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">

      <div>
        <div class="foot-brand-name">Reality Window Fashion</div>
        <div class="foot-brand-tag">Blinds · Screens · Shutters</div>
        <p class="foot-desc">Mumbai's trusted window treatment specialists since 2009. Transforming spaces with premium blinds, screens and shutters across the city and beyond.</p>
        <div class="foot-socials">
          <a href="#" class="foot-social" aria-label="Facebook">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="#" class="foot-social" aria-label="Instagram">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a href="https://wa.me/917738517042" class="foot-social" aria-label="WhatsApp">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
        </div>
      </div>

      <div>
        <div class="foot-col-title">Quick Links</div>
        <ul class="foot-links">
          <li><a href="${base}index.html">Home</a></li>
          <li><a href="${base}about.html">About Us</a></li>
          <li><a href="${base}index.html#products">Products</a></li>
          <li><a href="${base}locations.html">Locations</a></li>
          <li><a href="${base}gallery.html">Gallery</a></li>
          <li><a href="${base}contact.html">Contact</a></li>
        </ul>
      </div>

      <div>
        <div class="foot-col-title">Our Products</div>
        <ul class="foot-links" id="footerProductLinks"></ul>
      </div>

      <div>
        <div class="foot-col-title">Contact Us</div>
        <div class="foot-citem">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>Shop No 6, Rajaji Path, Ram Nagar,<br>Dombivali East, Thane – 421201</span>
        </div>
        <div class="foot-citem">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z"/></svg>
          <span>+91 77385 17042</span>
        </div>
        <div class="foot-citem">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <span>realitywindowfashion@gmail.com</span>
        </div>
        <div class="foot-nl-title">Newsletter</div>
        <p class="foot-nl-desc">Latest updates and exclusive offers.</p>
        <div class="nl-form">
          <input type="email" class="nl-input" placeholder="Your email address" />
          <button class="nl-btn" type="button">Join</button>
        </div>
      </div>

    </div>
  </div>
  <div class="foot-divider"></div>
  <div class="container">
    <div class="foot-bottom">
      <span class="foot-copy">© 2026 Reality Window Fashion. All Rights Reserved.</span>
      <span class="foot-powered">Powered by <a href="https://mydigitalcrown.in/" target="_blank" rel="noopener noreferrer">Digital Marketing Company in Mumbai</a></span>
    </div>
  </div>
</footer>

<a href="tel:+917738517042" class="call-btn" aria-label="Call us">
  <svg viewBox="0 0 24 24" fill="none" stroke-width="2">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z"/>
  </svg>
</a>

<a href="https://wa.me/917738517042" class="wa-btn" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>

<button class="btt" id="btt" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Back to top">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 15l-6-6-6 6"/></svg>
</button>`;
  }

  /* ── Wire nav interactions ── */
  function wireNav() {
    const nav = document.getElementById('nav');
    const btt = document.getElementById('btt');
    window.addEventListener('scroll', function () {
      if (nav) nav.classList.toggle('stuck', window.scrollY > 60);
      if (btt) btt.classList.toggle('show', window.scrollY > 500);
    }, { passive: true });

    /* Hamburger */
    const ham    = document.getElementById('hamburger');
    const mobMnu = document.getElementById('mobMenu');
    const mobHeadProductsBtn = document.getElementById('mobHeadProductsBtn');
    const mobHeadProductsMenu = document.getElementById('mobHeadProductsMenu');
    if (ham && mobMnu) {
      ham.addEventListener('click', function () {
        const open = ham.classList.toggle('on');
        mobMnu.classList.toggle('open', open);
        document.body.style.overflow = open ? 'hidden' : '';
        if (mobHeadProductsMenu && mobHeadProductsBtn) {
          mobHeadProductsMenu.classList.remove('open');
          mobHeadProductsBtn.setAttribute('aria-expanded', 'false');
        }
      });
      mobMnu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          ham.classList.remove('on');
          mobMnu.classList.remove('open');
          document.body.style.overflow = '';
        });
      });

      if (mobHeadProductsBtn && mobHeadProductsMenu) {
        mobHeadProductsMenu.innerHTML = SERVICE_NAMES.map(function (name) {
          return '<a href="' + productHref(name) + '">' + name + '</a>';
        }).join('');

        mobHeadProductsBtn.addEventListener('click', function () {
          const isOpen = mobHeadProductsMenu.classList.toggle('open');
          mobHeadProductsBtn.setAttribute('aria-expanded', String(isOpen));
          if (isOpen) {
            ham.classList.remove('on');
            mobMnu.classList.remove('open');
            document.body.style.overflow = '';
          }
        });

        mobHeadProductsMenu.querySelectorAll('a').forEach(function (a) {
          a.addEventListener('click', function () {
            mobHeadProductsMenu.classList.remove('open');
            mobHeadProductsBtn.setAttribute('aria-expanded', 'false');
          });
        });

        document.addEventListener('click', function (e) {
          if (!mobHeadProductsMenu.contains(e.target) && !mobHeadProductsBtn.contains(e.target)) {
            mobHeadProductsMenu.classList.remove('open');
            mobHeadProductsBtn.setAttribute('aria-expanded', 'false');
          }
        });
      }
    }

    /* Mobile Products accordion */
    const mobProductsBtn = document.getElementById('mobProductsBtn');
    const mobProductsMenu = document.getElementById('mobProductsMenu');
    if (mobProductsBtn && mobProductsMenu) {
      mobProductsMenu.innerHTML = SERVICE_NAMES.map(function (name) {
        return '<a href="' + productHref(name) + '">' + name + '</a>';
      }).join('');

      mobProductsBtn.addEventListener('click', function () {
        const isOpen = mobProductsMenu.classList.toggle('open');
        mobProductsBtn.setAttribute('aria-expanded', String(isOpen));
      });

      mobProductsMenu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          if (ham && mobMnu) {
            ham.classList.remove('on');
            mobMnu.classList.remove('open');
            document.body.style.overflow = '';
          }
          mobProductsMenu.classList.remove('open');
          mobProductsBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }

    /* Products dropdown */
    const btn  = document.getElementById('productsMenuBtn');
    const menu = document.getElementById('productsMenu');
    if (btn && menu) {
      /* Fill dropdown */
      menu.innerHTML = SERVICE_NAMES.map(function (name) {
        return '<a href="' + productHref(name) + '">' + name + '</a>';
      }).join('');

      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const isOpen = menu.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(isOpen));
      });
      menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          menu.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        });
      });
      document.addEventListener('click', function (e) {
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
          menu.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    /* Footer product links */
    const footerList = document.getElementById('footerProductLinks');
    if (footerList) {
      footerList.innerHTML = SERVICE_NAMES.map(function (name) {
        return '<li><a href="' + productHref(name) + '">' + name + '</a></li>';
      }).join('');
    }
  }

  /* Run after DOM ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { buildNav(); buildFooter(); wireNav(); });
  } else {
    buildNav(); buildFooter(); wireNav();
  }
})();

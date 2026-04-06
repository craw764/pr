'use strict';

/* ============================================================
   INTEGRATION CONFIG
   Fill in your credentials below after creating free accounts.

   FORMSPREE (booking form submissions → emailed to you)
   ▸ Sign up at https://formspree.io
   ▸ Create a new form → copy the endpoint ID (e.g. "xyzabcde")
   ▸ Paste it into FORMSPREE_ID below

   EMAILJS (chat leads → emailed to you)
   ▸ Sign up at https://www.emailjs.com
   ▸ Add an Email Service (Gmail, Outlook, etc.) → copy the Service ID
   ▸ Create an Email Template with these variables:
       {{from_name}}, {{from_email}}, {{message}}, {{crisis_type}}, {{urgency}}
   ▸ Copy the Template ID and your account's Public Key
   ▸ Paste all three below
   ============================================================ */
window.CRISISCORE_CONFIG = {
  FORMSPREE_ID:       'mreooorv',
  EMAILJS_PUBLIC_KEY: 'YOUR_EMAILJS_PUBLIC_KEY',
  EMAILJS_SERVICE_ID: 'YOUR_EMAILJS_SERVICE_ID',
  EMAILJS_TEMPLATE_ID:'YOUR_EMAILJS_TEMPLATE_ID'
};

(function () {

  /* ============================================================
     ICONS — Inline SVG library
     ============================================================ */
  const Icons = {
    factory: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20v-8l6-4v4l6-4v4l6-4v12H2z"/><path d="M6 20v-4h3v4M11 20v-4h3v4"/></svg>`,
    'shield-alert': `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L3 7v6c0 5.25 3.75 10.15 9 11.25C17.25 23.15 21 18.25 21 13V7L12 2z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    leaf: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22c0 0 4-2 8-6s6-12 12-12c0 6-4 12-12 16"/><path d="M2 22l10-10"/></svg>`,
    'heart-pulse': `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    'trending-down': `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>`,
    zap: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    users: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    scale: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>`,
    lock: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    eye: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    briefcase: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="12"/><path d="M2 12h20"/></svg>`,
    shield: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    download: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    check: `<svg viewBox="0 0 24 24" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.64A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.92a16 16 0 006.34 6.34l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
    chevron: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
    search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,
    arrowLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
    get: function (name) { return this[name] || this.factory; }
  };

  /* ============================================================
     STATE — Single source of truth
     ============================================================ */
  const STATE = {
    activeSection: 'dashboard',
    selectedCrisisId: null,
    booking: {
      step: 1,
      totalSteps: 4,
      data: {
        crisisTypeId: null,
        urgency: null,
        description: '',
        date: null,
        time: null,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
        contact: { name: '', org: '', role: '', email: '', phone: '', country: '' }
      }
    },
    activeResourceTab: 'guides',
    resourceSearch: '',
    calendarMonth: new Date().getMonth(),
    calendarYear: new Date().getFullYear(),
    expertModalId: null,
    caseModalId: null
  };

  /* ============================================================
     UTILS
     ============================================================ */
  const Utils = {
    debounce(fn, delay) {
      let timer;
      return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
      };
    },
    generateRefNum() {
      const num = Math.floor(1000 + Math.random() * 9000);
      return `CCR-2026-${num}`;
    },
    sanitize(str) {
      const div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    },
    hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`
        : '220,38,38';
    },
    monthName(idx) {
      return ['January','February','March','April','May','June','July','August','September','October','November','December'][idx];
    },
    daysInMonth(month, year) {
      return new Date(year, month + 1, 0).getDate();
    },
    firstDayOfMonth(month, year) {
      return new Date(year, month, 1).getDay();
    }
  };

  /* ============================================================
     DOM CACHE
     ============================================================ */
  const DOM = {};
  function cacheDOM() {
    DOM.body = document.body;
    DOM.header = document.getElementById('site-header');
    DOM.banner = document.getElementById('emergency-banner');
    DOM.bannerClose = document.getElementById('banner-close');
    DOM.bannerTicker = document.getElementById('banner-ticker');
    DOM.hamburger = document.getElementById('hamburger');
    DOM.mainNav = document.getElementById('main-nav');
    DOM.navLinks = document.querySelectorAll('.nav-link, [data-nav]');
    DOM.crisisGrid = document.getElementById('crisis-grid');
    DOM.crisisDetail = document.getElementById('crisis-detail');
    DOM.detailContent = document.getElementById('detail-content');
    DOM.detailBack = document.getElementById('detail-back');
    DOM.protocolsAccordion = document.getElementById('protocols-accordion');
    DOM.teamGrid = document.getElementById('team-grid');
    DOM.expertModal = document.getElementById('expert-modal');
    DOM.expertModalContent = document.getElementById('modal-content');
    DOM.expertModalClose = document.getElementById('modal-close');
    DOM.resourceTabs = document.getElementById('resource-tabs');
    DOM.resourceSearch = document.getElementById('resource-search');
    DOM.resourcesGrid = document.getElementById('resources-grid');
    DOM.casesGrid = document.getElementById('cases-grid');
    DOM.caseModal = document.getElementById('case-modal');
    DOM.caseModalContent = document.getElementById('case-modal-content');
    DOM.caseModalClose = document.getElementById('case-modal-close');
    DOM.bookingCard = document.getElementById('booking-card');
    DOM.bookingFormContainer = document.getElementById('booking-form-container');
    DOM.bookingNav = document.getElementById('booking-nav');
    DOM.bookingNext = document.getElementById('booking-next');
    DOM.bookingBack = document.getElementById('booking-back');
    DOM.bookingProgress = document.getElementById('booking-progress');
    DOM.progressFill = document.getElementById('progress-fill');
    DOM.progressSteps = document.querySelectorAll('.progress-step');
    DOM.stepIndicator = document.getElementById('step-indicator');
    DOM.contactsGrid = document.getElementById('contacts-grid');
    DOM.sections = document.querySelectorAll('.section');
  }

  /* ============================================================
     ROUTER — Section navigation
     ============================================================ */
  const Router = {
    allSections: ['dashboard', 'crisis-detail', 'protocols', 'team', 'resources', 'case-studies', 'booking', 'payment', 'emergency-contacts'],

    navigateTo(sectionId, params = {}) {
      // hide all sections
      this.allSections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
      });

      // show target
      const target = document.getElementById(sectionId);
      if (target) {
        target.classList.remove('hidden');
        STATE.activeSection = sectionId;

        // Re-initialise booking form every time the section is opened
        if (sectionId === 'booking') {
          // Restore progress bar and nav in case a previous confirmation hid them
          const prog = document.getElementById('booking-progress');
          const nav  = document.getElementById('booking-nav');
          if (prog) prog.style.display = '';
          if (nav)  nav.style.display  = '';
          Booking.init();
        }

        // Smooth scroll to section
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      }

      // Update nav
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.nav === sectionId) link.classList.add('active');
      });

      // Handle params
      if (params.crisisId) {
        STATE.booking.data.crisisTypeId = params.crisisId;
      }

      // Close mobile nav
      DOM.mainNav.classList.remove('open');
      DOM.hamburger.classList.remove('open');
      DOM.hamburger.setAttribute('aria-expanded', 'false');
    }
  };

  /* ============================================================
     EMERGENCY BANNER
     ============================================================ */
  function initBanner() {
    const alerts = window.CRISIS_DATA.liveAlerts;
    // Duplicate for seamless looping
    const doubled = [...alerts, ...alerts];
    DOM.bannerTicker.innerHTML = doubled.map(a =>
      `<span class="ticker-item">${Utils.sanitize(a)}</span>`
    ).join('');

    DOM.bannerClose.addEventListener('click', () => {
      DOM.banner.style.display = 'none';
      DOM.body.classList.add('banner-dismissed');
    });
  }

  /* ============================================================
     SCROLL EFFECTS
     ============================================================ */
  function initScrollEffects() {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.scrollY > 10) {
            DOM.header.classList.add('scrolled');
          } else {
            DOM.header.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  /* ============================================================
     ANIMATIONS — Intersection Observer
     ============================================================ */
  function initAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            const countTarget = entry.target.querySelector('[data-count-target]') || entry.target;
            if (countTarget.dataset.countTarget) {
              countUp(countTarget);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

    // Count-up for hero stats
    const heroStats = document.querySelectorAll('.stat-number[data-count-target]');
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          countUp(entry.target);
          heroObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    heroStats.forEach(el => heroObserver.observe(el));
  }

  function countUp(element) {
    const target = parseInt(element.dataset.countTarget, 10);
    if (isNaN(target)) return;
    const duration = 1500;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = Math.floor(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ============================================================
     DASHBOARD — Crisis Category Cards
     ============================================================ */
  function renderDashboard() {
    const categories = window.CRISIS_DATA.crisisCategories;
    DOM.crisisGrid.innerHTML = categories.map(cat => renderCrisisCard(cat)).join('');

    // Bind click events
    DOM.crisisGrid.querySelectorAll('.crisis-card').forEach(card => {
      card.addEventListener('click', () => {
        showCrisisDetail(card.dataset.id);
      });
    });

    DOM.crisisGrid.querySelectorAll('[data-action="book"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        STATE.booking.data.crisisTypeId = btn.dataset.crisis;
        Router.navigateTo('booking');
        Booking.init();
      });
    });
  }

  function renderCrisisCard(cat) {
    const rgb = Utils.hexToRgb(cat.color);
    const subs = cat.subcategories.slice(0, 3).map(s =>
      `<span class="crisis-tag">${s}</span>`
    ).join('');

    return `
      <article class="crisis-card" data-id="${cat.id}"
               style="--card-color:${cat.color};--card-color-bg:rgba(${rgb},0.1)">
        <div class="crisis-card__header">
          <div class="crisis-card__icon">${Icons.get(cat.icon)}</div>
          <span class="crisis-card__badge">${cat.activeCases} Active</span>
        </div>
        <h3 class="crisis-card__title">${cat.label}</h3>
        <p class="crisis-card__sub">${cat.subcategories.join(' · ')}</p>
        <div class="crisis-card__bar-wrapper">
          <div class="crisis-card__bar-label">
            <span>Threat Level</span>
            <span>${cat.severity.toUpperCase()}</span>
          </div>
          <div class="crisis-card__bar">
            <div class="crisis-card__fill" style="--severity-pct:${cat.severityPct}%"></div>
          </div>
        </div>
        <div class="crisis-card__tags">${subs}</div>
        <div class="crisis-card__footer">
          <span class="severity-badge severity-badge--${cat.severity}">${cat.severity}</span>
          <button class="btn btn--ghost btn--sm">View Protocols →</button>
        </div>
      </article>`;
  }

  function showCrisisDetail(categoryId) {
    const cat = window.CRISIS_DATA.crisisCategories.find(c => c.id === categoryId);
    if (!cat) return;
    STATE.selectedCrisisId = categoryId;

    const rgb = Utils.hexToRgb(cat.color);

    const immediateItems = cat.immediateSteps.map(s =>
      `<li>${Utils.sanitize(s)}</li>`).join('');
    const shortTermItems = cat.shortTermActions.map(s =>
      `<li>${Utils.sanitize(s)}</li>`).join('');
    const longTermItems = cat.longTermActions.map(s =>
      `<li>${Utils.sanitize(s)}</li>`).join('');
    const agencyTags = cat.keyAgencies.map(a =>
      `<span class="agency-tag">${Utils.sanitize(a)}</span>`).join('');
    const resourceTags = cat.requiredResources.map(r =>
      `<span class="crisis-tag" style="border-color:rgba(${rgb},0.3);color:${cat.color}">${Utils.sanitize(r)}</span>`).join('');

    DOM.detailContent.innerHTML = `
      <div class="detail-header">
        <div class="detail-icon-wrap" style="background:rgba(${rgb},0.12)">
          <svg viewBox="0 0 24 24" fill="none" stroke="${cat.color}" stroke-width="1.5"
               stroke-linecap="round" stroke-linejoin="round">
            ${Icons.get(cat.icon).replace(/<svg[^>]*>/, '').replace('</svg>', '')}
          </svg>
        </div>
        <div class="detail-title">
          <h2>${cat.label}</h2>
          <div class="detail-meta">
            <span class="severity-badge severity-badge--${cat.severity}">${cat.severity}</span>
            <span class="crisis-card__badge">${cat.activeCases} Active Cases</span>
          </div>
        </div>
      </div>

      <div class="detail-body">
        <div class="detail-card" style="--detail-accent:${cat.color}">
          <h4>Immediate Response (0–6 Hours)</h4>
          <ul>${immediateItems}</ul>
        </div>
        <div class="detail-card" style="--detail-accent:${cat.color}">
          <h4>Short-Term Actions (Week 1)</h4>
          <ul>${shortTermItems}</ul>
        </div>
        <div class="detail-card" style="--detail-accent:${cat.color}">
          <h4>Long-Term Recovery</h4>
          <ul>${longTermItems}</ul>
        </div>
        <div class="detail-card" style="--detail-accent:${cat.color}">
          <h4>Legal Considerations</h4>
          <p style="font-size:0.88rem;color:var(--color-text-secondary);line-height:1.6">${Utils.sanitize(cat.legalConsiderations)}</p>
          <h4 style="margin-top:1rem">Key Agencies</h4>
          <div class="protocol-agencies">${agencyTags}</div>
          <h4 style="margin-top:1rem">Required Resources</h4>
          <div class="protocol-agencies" style="margin-top:0.5rem">${resourceTags}</div>
        </div>
        <div class="detail-cta">
          <div>
            <h4>Need Expert Help With This Crisis?</h4>
            <p>Book a consultation with one of our ${cat.label.toLowerCase()} specialists.</p>
          </div>
          <button class="btn btn--primary" onclick="bookForCrisis('${cat.id}')">
            Book Consultation
          </button>
        </div>
      </div>`;

    Router.navigateTo('crisis-detail');
  }

  window.bookForCrisis = function (crisisId) {
    STATE.booking.data.crisisTypeId = crisisId;
    STATE.booking.step = 1;
    Router.navigateTo('booking');
    Booking.init();
  };

  /* ============================================================
     PROTOCOLS — Accordion
     ============================================================ */
  function renderProtocols() {
    const categories = window.CRISIS_DATA.crisisCategories;
    DOM.protocolsAccordion.innerHTML = categories.map((cat, idx) => {
      const rgb = Utils.hexToRgb(cat.color);
      const phaseLists = [
        { title: 'Immediate (0–6 Hours)', items: cat.immediateSteps.slice(0, 5) },
        { title: 'Short-Term (Week 1)', items: cat.shortTermActions.slice(0, 5) },
        { title: 'Long-Term Recovery', items: cat.longTermActions.slice(0, 5) }
      ];

      const phaseHTML = phaseLists.map(phase => `
        <div class="protocol-phase">
          <h5>${phase.title}</h5>
          <ul>${phase.items.map(i => `<li>${Utils.sanitize(i)}</li>`).join('')}</ul>
        </div>`).join('');

      const agencyTags = cat.keyAgencies.map(a =>
        `<span class="agency-tag">${Utils.sanitize(a)}</span>`).join('');

      return `
        <div class="accordion-item" data-accordion-id="${cat.id}">
          <button class="accordion-trigger" data-idx="${idx}" aria-expanded="false">
            <div class="acc-icon" style="background:rgba(${rgb},0.1)">
              <svg viewBox="0 0 24 24" fill="none" stroke="${cat.color}" stroke-width="1.5"
                   stroke-linecap="round" stroke-linejoin="round">
                ${Icons.get(cat.icon).replace(/<svg[^>]*>/, '').replace('</svg>', '')}
              </svg>
            </div>
            <span class="acc-title">${cat.label}</span>
            <span class="severity-badge severity-badge--${cat.severity}">${cat.severity}</span>
            <svg class="acc-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="accordion-body">
            <div class="accordion-body-inner">
              <div class="protocol-phases">${phaseHTML}</div>
              <div style="margin-top:1rem">
                <p style="font-size:0.75rem;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.5rem">Key Agencies</p>
                <div class="protocol-agencies">${agencyTags}</div>
              </div>
              <div style="margin-top:1rem">
                <p style="font-size:0.72rem;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.35rem">Success Metric</p>
                <p style="font-size:0.85rem;color:var(--color-text-secondary)">${Utils.sanitize(cat.successMetric)}</p>
              </div>
              <div style="margin-top:1.25rem">
                <button class="btn btn--primary btn--sm" onclick="bookForCrisis('${cat.id}')">
                  Book ${cat.label} Consultation
                </button>
              </div>
            </div>
          </div>
        </div>`;
    }).join('');

    // Bind accordion toggles
    DOM.protocolsAccordion.querySelectorAll('.accordion-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.accordion-item');
        const isOpen = item.classList.contains('open');

        // Close all
        DOM.protocolsAccordion.querySelectorAll('.accordion-item').forEach(i => {
          i.classList.remove('open');
          i.querySelector('.accordion-body').style.maxHeight = null;
          i.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
        });

        // Open clicked (if was closed)
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
          const body = item.querySelector('.accordion-body');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    });
  }

  /* ============================================================
     TEAM — Expert Cards
     ============================================================ */
  function renderTeam() {
    const experts = window.CRISIS_DATA.experts;
    DOM.teamGrid.innerHTML = experts.map(expert => `
      <div class="team-card" data-id="${expert.id}">
        <div class="team-card__avatar" style="background:${expert.color}">${expert.initials}</div>
        <h3 class="team-card__name">${Utils.sanitize(expert.name)}</h3>
        <p class="team-card__title">${Utils.sanitize(expert.title)}</p>
        <div class="team-card__specs">
          ${expert.specializations.slice(0, 3).map(s => {
            const cat = window.CRISIS_DATA.crisisCategories.find(c => c.id === s);
            return `<span class="spec-tag">${cat ? cat.label.split(' ')[0] : s}</span>`;
          }).join('')}
        </div>
        <div class="team-card__footer">
          <span class="availability-badge availability-badge--${expert.availability}">${expert.availability}</span>
          <button class="btn btn--ghost btn--sm" onclick="openExpertModal('${expert.id}')">
            View Profile
          </button>
        </div>
      </div>`).join('');
  }

  window.openExpertModal = function (expertId) {
    const expert = window.CRISIS_DATA.experts.find(e => e.id === expertId);
    if (!expert) return;

    const specsHTML = expert.specializations.map(s => {
      const cat = window.CRISIS_DATA.crisisCategories.find(c => c.id === s);
      return `<span class="spec-tag">${cat ? cat.label : s}</span>`;
    }).join('');

    const credentialsHTML = expert.credentials.map(c =>
      `<li>${Utils.sanitize(c)}</li>`).join('');

    const incidentsHTML = expert.notableIncidents.map(i =>
      `<li>${Utils.sanitize(i)}</li>`).join('');

    DOM.expertModalContent.innerHTML = `
      <div class="expert-modal-header">
        <div class="expert-modal-avatar" style="background:${expert.color}">${expert.initials}</div>
        <div>
          <h3 class="expert-modal-name" id="modal-title">${Utils.sanitize(expert.name)}</h3>
          <p class="expert-modal-title">${Utils.sanitize(expert.title)}</p>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:0.5rem">
            <span class="availability-badge availability-badge--${expert.availability}">${expert.availability}</span>
            ${expert.languages.map(l => `<span class="crisis-tag">${l}</span>`).join('')}
          </div>
        </div>
      </div>
      <p class="expert-modal-bio">${Utils.sanitize(expert.bio)}</p>
      <div class="expert-modal-section">
        <h5>Specializations</h5>
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:1.25rem">${specsHTML}</div>
      </div>
      <div class="expert-modal-section">
        <h5>Credentials & Certifications</h5>
        <ul class="credentials-list">${credentialsHTML}</ul>
      </div>
      <div class="expert-modal-section">
        <h5>Notable Incidents</h5>
        <ul class="credentials-list">${incidentsHTML}</ul>
      </div>
      <div style="margin-top:1.5rem">
        <button class="btn btn--primary" style="width:100%" onclick="bookWithExpert('${expert.id}')">
          Book Consultation with ${Utils.sanitize(expert.name.split(' ')[0])}
        </button>
      </div>`;

    DOM.expertModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    DOM.expertModal.focus();
  };

  window.bookWithExpert = function () {
    closeExpertModal();
    Router.navigateTo('booking');
    Booking.init();
  };

  function closeExpertModal() {
    DOM.expertModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  /* ============================================================
     RESOURCES — Tabs + Search
     ============================================================ */
  function renderResources() {
    renderResourcesGrid();

    DOM.resourceTabs.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        DOM.resourceTabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        STATE.activeResourceTab = btn.dataset.tab;
        renderResourcesGrid();
      });
    });

    DOM.resourceSearch.addEventListener('input', Utils.debounce(() => {
      STATE.resourceSearch = DOM.resourceSearch.value.toLowerCase().trim();
      renderResourcesGrid();
    }, 300));
  }

  function renderResourcesGrid() {
    const filtered = window.CRISIS_DATA.resources.filter(r => {
      if (r.tab !== STATE.activeResourceTab) return false;
      if (STATE.resourceSearch) {
        return r.title.toLowerCase().includes(STATE.resourceSearch) ||
               r.description.toLowerCase().includes(STATE.resourceSearch);
      }
      return true;
    });

    if (filtered.length === 0) {
      DOM.resourcesGrid.innerHTML = `
        <div class="no-results">
          ${Icons.search}
          <p>No resources found. Try a different search term.</p>
        </div>`;
      return;
    }

    DOM.resourcesGrid.innerHTML = filtered.map(r => `
      <div class="resource-card" data-animate>
        <div class="resource-card__header">
          <span class="resource-format">${r.format}</span>
          <h4 class="resource-card__title">${Utils.sanitize(r.title)}</h4>
        </div>
        <p class="resource-card__desc">${Utils.sanitize(r.description)}</p>
        <div class="resource-card__footer">
          <span class="resource-meta">${r.pages} pages · Updated ${r.lastUpdated}</span>
          <button class="btn btn--ghost btn--sm" onclick="simulateDownload('${Utils.sanitize(r.title)}', event)">
            ${Icons.download} Download
          </button>
        </div>
      </div>`).join('');

    // Re-attach animation observer for new elements
    DOM.resourcesGrid.querySelectorAll('[data-animate]').forEach((el, i) => {
      el.style.transitionDelay = `${i * 50}ms`;
      setTimeout(() => el.classList.add('animate-in'), 50);
    });
  }

  window.simulateDownload = function (_title, event) {
    const btn = event.target.closest('button');
    const original = btn.innerHTML;
    btn.innerHTML = `${Icons.check} Preparing...`;
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = `${Icons.check} Downloaded`;
      btn.style.color = 'var(--color-accent-green)';
      setTimeout(() => {
        btn.innerHTML = original;
        btn.disabled = false;
        btn.style.color = '';
      }, 2000);
    }, 800);
  };

  /* ============================================================
     CASE STUDIES
     ============================================================ */
  function renderCaseStudies() {
    const cases = window.CRISIS_DATA.caseStudies;
    DOM.casesGrid.innerHTML = cases.map(cs => `
      <article class="case-card" onclick="openCaseModal('${cs.id}')">
        <span class="case-badge">${cs.badge}</span>
        <h3 class="case-card__title">${Utils.sanitize(cs.title)}</h3>
        <p class="case-card__summary">${Utils.sanitize(cs.summary)}</p>
        <div class="case-metrics">
          <div class="case-metric">
            <div class="case-metric__label">Recovery Time</div>
            <div class="case-metric__value">${Utils.sanitize(cs.outcome.recoveryTime)}</div>
          </div>
          <div class="case-metric">
            <div class="case-metric__label">Cost Saved</div>
            <div class="case-metric__value">${Utils.sanitize(cs.outcome.costSaved)}</div>
          </div>
        </div>
        <div class="case-card__footer">
          <span class="case-year">${cs.year} · ${cs.duration}</span>
          <span class="btn btn--ghost btn--sm">Read Full Case →</span>
        </div>
      </article>`).join('');
  }

  window.openCaseModal = function (caseId) {
    const cs = window.CRISIS_DATA.caseStudies.find(c => c.id === caseId);
    if (!cs) return;

    const outcomesHTML = Object.entries(cs.outcome).map(([k, v]) => {
      const labels = {
        livesSaved: 'Lives / Impact',
        recoveryTime: 'Recovery Time',
        costSaved: 'Cost Saved',
        environmentalDamage: 'Environmental Outcome'
      };
      return `
        <div class="outcome-item">
          <div class="outcome-label">${labels[k] || k}</div>
          <div class="outcome-value">${Utils.sanitize(String(v))}</div>
        </div>`;
    }).join('');

    const lessonsHTML = cs.lessonsLearned.map(l =>
      `<li style="display:flex;gap:0.75rem;font-size:0.84rem;color:var(--color-text-secondary);padding:0.35rem 0;border-bottom:1px solid var(--color-border)">
        <span style="color:var(--color-accent-green);flex-shrink:0">✓</span>${Utils.sanitize(l)}
      </li>`).join('');

    DOM.caseModalContent.innerHTML = `
      <div class="case-modal-header">
        <span class="case-modal-badge">${Utils.sanitize(cs.badge)}</span>
        <h3 id="case-modal-title">${Utils.sanitize(cs.title)}</h3>
        <p style="color:var(--color-text-secondary);font-size:0.88rem;margin-top:0.5rem">${Utils.sanitize(cs.summary)}</p>
      </div>
      <div class="case-modal-outcomes">${outcomesHTML}</div>
      <div class="case-modal-phases">
        <h5>Immediate Response</h5>
        <p>${Utils.sanitize(cs.phases.immediate)}</p>
        <h5>Short-Term Actions</h5>
        <p>${Utils.sanitize(cs.phases.shortTerm)}</p>
        <h5>Long-Term Outcome</h5>
        <p>${Utils.sanitize(cs.phases.longTerm)}</p>
      </div>
      <div class="case-testimonial">
        <blockquote>"${Utils.sanitize(cs.testimonial.quote)}"</blockquote>
        <cite>— ${Utils.sanitize(cs.testimonial.author)}</cite>
      </div>
      <div>
        <p style="font-size:0.72rem;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.75rem">Lessons Learned</p>
        <ul style="list-style:none">${lessonsHTML}</ul>
      </div>
      <div style="margin-top:1.5rem">
        <button class="btn btn--primary" style="width:100%" onclick="closeCaseModal();bookForCrisis('${cs.crisisType}')">
          Book Consultation for Similar Crisis
        </button>
      </div>`;

    DOM.caseModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  window.closeCaseModal = function () {
    DOM.caseModal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  /* ============================================================
     EMERGENCY CONTACTS
     ============================================================ */
  function renderContacts() {
    const contacts = window.CRISIS_DATA.emergencyContacts;
    DOM.contactsGrid.innerHTML = contacts.map(c => `
      <div class="contact-card">
        <div class="contact-card__region">${Utils.sanitize(c.region)}</div>
        <div class="contact-card__hotline">
          <a href="tel:${c.hotline.replace(/\s/g, '')}">${Utils.sanitize(c.hotline)}</a>
        </div>
        <div class="contact-card__email">
          <a href="mailto:${c.email}">${Utils.sanitize(c.email)}</a>
        </div>
        <div class="contact-card__sla">Response within ${Utils.sanitize(c.sla)}</div>
        <div class="contact-cities">${c.cities.join(' · ')}</div>
      </div>`).join('');
  }

  /* ============================================================
     BOOKING — Multi-step form
     ============================================================ */
  const Booking = {
    init() {
      STATE.booking.step = 1;
      this.updateProgressUI();
      this.renderStep(STATE.booking.step);
      this.updateNavButtons();
    },

    renderStep(step) {
      const container = DOM.bookingFormContainer;
      switch (step) {
        case 1: container.innerHTML = this.step1HTML(); this.bindStep1(); break;
        case 2: container.innerHTML = this.step2HTML(); this.bindStep2(); break;
        case 3: container.innerHTML = this.step3HTML(); this.bindStep3(); break;
        case 4: container.innerHTML = this.step4HTML(); this.bindStep4(); break;
      }
      this.clearErrors();
    },

    step1HTML() {
      const tiles = window.CRISIS_DATA.crisisCategories.map(cat => {
        const selected = STATE.booking.data.crisisTypeId === cat.id ? 'selected' : '';
        return `
          <div class="crisis-type-tile ${selected}" data-crisis-id="${cat.id}">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"
                 stroke-linecap="round" stroke-linejoin="round">
              ${Icons.get(cat.icon).replace(/<svg[^>]*>/, '').replace('</svg>', '')}
            </svg>
            <span>${cat.label}</span>
          </div>`;
      }).join('');

      return `
        <div class="booking-step">
          <h3>What type of crisis are you facing?</h3>
          <p>Select the category that best describes your situation.</p>
          <div class="crisis-type-grid">${tiles}</div>
          <div class="booking-error" id="step-error"></div>
        </div>`;
    },

    bindStep1() {
      // Clicks handled by delegated listener in bindGlobalEvents
    },

    step2HTML() {
      const urgencyLevels = [
        {
          id: 'critical',
          label: 'Critical',
          labelClass: 'severity-badge--critical',
          title: 'Life-Threatening Emergency',
          desc: 'Immediate risk to life, safety, or catastrophic irreversible harm.',
          color: '#dc2626',
          rgb: '220,38,38'
        },
        {
          id: 'high',
          label: 'High',
          labelClass: 'severity-badge--high',
          title: 'Urgent — Hours Matter',
          desc: 'Serious harm escalating rapidly. Response needed within hours.',
          color: '#d97706',
          rgb: '217,119,6'
        },
        {
          id: 'medium',
          label: 'Medium',
          labelClass: 'severity-badge--medium',
          title: 'Important — Days Matter',
          desc: 'Significant impact with risk of escalation. Response needed within days.',
          color: '#1d4ed8',
          rgb: '29,78,216'
        },
        {
          id: 'low',
          label: 'Low',
          labelClass: 'severity-badge--low',
          title: 'Planning & Prevention',
          desc: 'Proactive consultation, preparation, or post-crisis review.',
          color: '#16a34a',
          rgb: '22,163,74'
        }
      ];

      const cards = urgencyLevels.map(u => {
        const selected = STATE.booking.data.urgency === u.id ? 'selected' : '';
        return `
          <div class="urgency-card ${selected}" data-urgency="${u.id}"
               style="--urgency-color:${u.color};--urgency-rgb:${u.rgb}">
            <span class="urgency-label severity-badge ${u.labelClass}">${u.label}</span>
            <h4>${u.title}</h4>
            <p>${u.desc}</p>
          </div>`;
      }).join('');

      const descVal = Utils.sanitize(STATE.booking.data.description);

      return `
        <div class="booking-step">
          <h3>How urgent is the situation?</h3>
          <p>This helps us match you with the right expert and response speed.</p>
          <div class="urgency-grid">${cards}</div>
          <textarea class="urgency-textarea" id="crisis-description" placeholder="Briefly describe the situation (optional but helpful)...">${descVal}</textarea>
          <div class="booking-error" id="step-error"></div>
        </div>`;
    },

    bindStep2() {
      // Card clicks handled by delegated listener in bindGlobalEvents
      const textarea = document.getElementById('crisis-description');
      if (textarea) {
        textarea.addEventListener('input', () => {
          STATE.booking.data.description = textarea.value;
        });
      }
    },

    step3HTML() {
      return `
        <div class="booking-step">
          <h3>Select date and time</h3>
          <p>All times are shown in your local timezone.</p>
          <div class="datepicker-wrapper">
            <div id="calendar-container"></div>
            <div class="timeslots-panel" id="timeslots-container">
              <h4>Available Times</h4>
              <p style="font-size:0.85rem;color:var(--color-text-muted);margin-bottom:0.75rem" id="timeslot-hint">
                Select a date to see available times
              </p>
              <div class="timeslots-grid" id="timeslots-grid"></div>
              <div class="timezone-select-wrap">
                <label for="timezone-select">Timezone</label>
                <select id="timezone-select">
                  ${this.getTimezones().map(tz =>
                    `<option value="${tz}" ${tz === STATE.booking.data.timezone ? 'selected' : ''}>${tz}</option>`
                  ).join('')}
                </select>
              </div>
            </div>
          </div>
          <div class="booking-error" id="step-error"></div>
        </div>`;
    },

    bindStep3() {
      DatePicker.render('calendar-container');

      const tzSelect = document.getElementById('timezone-select');
      if (tzSelect) {
        tzSelect.addEventListener('change', () => {
          STATE.booking.data.timezone = tzSelect.value;
        });
      }
    },

    getTimezones() {
      return [
        'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
        'America/Toronto', 'America/Sao_Paulo', 'Europe/London', 'Europe/Paris',
        'Europe/Berlin', 'Europe/Moscow', 'Asia/Dubai', 'Asia/Kolkata',
        'Asia/Singapore', 'Asia/Tokyo', 'Asia/Shanghai', 'Australia/Sydney',
        'Pacific/Auckland', 'Africa/Nairobi', 'Africa/Johannesburg', 'UTC'
      ];
    },

    step4HTML() {
      const c = STATE.booking.data.contact;
      const countries = ['United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'Japan', 'Singapore', 'UAE', 'South Africa', 'Brazil', 'India', 'Other'];

      return `
        <div class="booking-step">
          <h3>Your contact details</h3>
          <p>We'll use this information to confirm your booking and assign the right expert.</p>
          <div class="contact-form-grid">
            <div class="form-field">
              <label for="c-name">Full Name *</label>
              <input type="text" id="c-name" value="${Utils.sanitize(c.name)}" placeholder="Your name" autocomplete="name">
              <span class="field-error" id="err-name">Please enter your name.</span>
            </div>
            <div class="form-field">
              <label for="c-org">Organization *</label>
              <input type="text" id="c-org" value="${Utils.sanitize(c.org)}" placeholder="Company or agency" autocomplete="organization">
              <span class="field-error" id="err-org">Please enter your organization.</span>
            </div>
            <div class="form-field">
              <label for="c-role">Your Role</label>
              <input type="text" id="c-role" value="${Utils.sanitize(c.role)}" placeholder="e.g. CEO, Safety Director" autocomplete="organization-title">
            </div>
            <div class="form-field">
              <label for="c-country">Country *</label>
              <select id="c-country">
                <option value="">Select country...</option>
                ${countries.map(cn =>
                  `<option value="${cn}" ${c.country === cn ? 'selected' : ''}>${cn}</option>`
                ).join('')}
              </select>
              <span class="field-error" id="err-country">Please select your country.</span>
            </div>
            <div class="form-field">
              <label for="c-email">Email Address *</label>
              <input type="email" id="c-email" value="${Utils.sanitize(c.email)}" placeholder="your@email.com" autocomplete="email">
              <span class="field-error" id="err-email">Please enter a valid email.</span>
            </div>
            <div class="form-field">
              <label for="c-phone">Phone Number *</label>
              <input type="tel" id="c-phone" value="${Utils.sanitize(c.phone)}" placeholder="+1 555 000 0000" autocomplete="tel">
              <span class="field-error" id="err-phone">Please enter a valid phone number.</span>
            </div>
          </div>
          <div class="booking-error" id="step-error"></div>
        </div>`;
    },

    bindStep4() {
      const fields = ['name', 'org', 'role', 'email', 'phone', 'country'];
      fields.forEach(f => {
        const el = document.getElementById(`c-${f}`);
        if (el) {
          el.addEventListener('blur', () => {
            STATE.booking.data.contact[f] = el.value;
          });
          el.addEventListener('input', () => {
            STATE.booking.data.contact[f] = el.value;
          });
        }
      });
    },

    updateProgressUI() {
      const step = STATE.booking.step;
      const total = STATE.booking.totalSteps;
      const pct = (step / total) * 100;
      if (DOM.progressFill) DOM.progressFill.style.width = pct + '%';
      if (DOM.stepIndicator) DOM.stepIndicator.textContent = `Step ${step} of ${total}`;

      DOM.progressSteps.forEach((s, i) => {
        const sNum = i + 1;
        s.classList.remove('active', 'completed');
        if (sNum < step) s.classList.add('completed');
        else if (sNum === step) s.classList.add('active');
      });
    },

    updateNavButtons() {
      const step = STATE.booking.step;
      if (DOM.bookingBack) {
        DOM.bookingBack.style.display = step > 1 ? 'inline-flex' : 'none';
      }
      if (DOM.bookingNext) {
        DOM.bookingNext.textContent = step === STATE.booking.totalSteps ? 'Confirm Booking' : 'Continue';
      }
    },

    nextStep() {
      if (!Validation.validateStep(STATE.booking.step)) return;
      if (STATE.booking.step < STATE.booking.totalSteps) {
        STATE.booking.step++;
        this.updateProgressUI();
        this.renderStep(STATE.booking.step);
        this.updateNavButtons();
        DOM.bookingCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        this.submit();
      }
    },

    prevStep() {
      if (STATE.booking.step > 1) {
        STATE.booking.step--;
        this.updateProgressUI();
        this.renderStep(STATE.booking.step);
        this.updateNavButtons();
        DOM.bookingCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },

    submit() {
      const refNum = Utils.generateRefNum();
      const expert = this.assignExpert();
      const d = STATE.booking.data;
      const cat = window.CRISIS_DATA.crisisCategories.find(c => c.id === d.crisisTypeId);

      // POST to Formspree
      const formspreeId = window.CRISISCORE_CONFIG.FORMSPREE_ID;
      if (formspreeId && formspreeId !== 'YOUR_FORMSPREE_ID') {
        const payload = {
          reference:    refNum,
          crisis_type:  cat ? cat.label : d.crisisTypeId,
          urgency:      d.urgency || '',
          description:  d.description || '',
          date:         d.date ? d.date.toDateString() : '',
          time:         d.time || '',
          timezone:     d.timezone || '',
          name:         d.contact.name,
          organisation: d.contact.org,
          role:         d.contact.role,
          email:        d.contact.email,
          phone:        d.contact.phone,
          country:      d.contact.country,
          expert:       expert.name
        };

        fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload)
        }).catch(() => {}); // fail silently — UI confirmation already shown
      }

      this.showConfirmation(refNum, expert);
    },

    assignExpert() {
      const crisisId = STATE.booking.data.crisisTypeId;
      const available = window.CRISIS_DATA.experts.filter(e =>
        e.availability === 'available' &&
        e.specializations.includes(crisisId)
      );
      if (available.length) return available[0];
      return window.CRISIS_DATA.experts.find(e => e.availability === 'available') ||
             window.CRISIS_DATA.experts[0];
    },

    showConfirmation(refNum, expert) {
      const booking = STATE.booking.data;
      const cat = window.CRISIS_DATA.crisisCategories.find(c => c.id === booking.crisisTypeId);
      const dateStr = booking.date
        ? booking.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        : 'To be confirmed';
      const timeStr = booking.time || 'To be confirmed';

      // Hide progress and nav
      DOM.bookingProgress.style.display = 'none';
      DOM.bookingNav.style.display = 'none';

      DOM.bookingFormContainer.innerHTML = `
        <div class="booking-confirmation">
          <div class="confirmation-icon">${Icons.check}</div>
          <h3>Consultation Booked</h3>
          <p style="color:var(--color-text-secondary);margin-top:0.5rem">
            You're all set. Your assigned expert will contact you shortly.
          </p>
          <div class="confirmation-ref">${refNum}</div>
          <p style="font-size:0.78rem;color:var(--color-text-muted)">Save this reference number</p>

          <div class="confirmation-expert">
            <div class="confirmation-avatar" style="background:${expert.color}">${expert.initials}</div>
            <div>
              <p style="font-size:0.78rem;color:var(--color-text-muted);margin-bottom:0.2rem">Your Assigned Expert</p>
              <p style="font-weight:600">${Utils.sanitize(expert.name)}</p>
              <p style="font-size:0.82rem;color:var(--color-text-secondary)">${Utils.sanitize(expert.title)}</p>
            </div>
          </div>

          <div style="background:var(--color-bg-elevated);border:1px solid var(--color-border);border-radius:var(--radius-md);padding:1rem;text-align:left;max-width:400px;margin:1rem auto">
            <p style="font-size:0.78rem;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.75rem">Booking Details</p>
            <p style="font-size:0.85rem;color:var(--color-text-secondary)">
              <strong style="color:var(--color-text-primary)">Crisis Type:</strong> ${cat ? cat.label : 'General'}
            </p>
            <p style="font-size:0.85rem;color:var(--color-text-secondary);margin-top:0.35rem">
              <strong style="color:var(--color-text-primary)">Urgency:</strong> ${(booking.urgency || '').toUpperCase()}
            </p>
            <p style="font-size:0.85rem;color:var(--color-text-secondary);margin-top:0.35rem">
              <strong style="color:var(--color-text-primary)">Date:</strong> ${dateStr}
            </p>
            <p style="font-size:0.85rem;color:var(--color-text-secondary);margin-top:0.35rem">
              <strong style="color:var(--color-text-primary)">Time:</strong> ${timeStr} (${booking.timezone})
            </p>
          </div>

          <div class="confirmation-steps">
            <h4>What happens next</h4>
            <ul class="next-steps-list">
              <li>Confirmation email sent to ${Utils.sanitize(booking.contact.email || 'your inbox')}</li>
              <li>${Utils.sanitize(expert.name)} will call within 15 minutes for critical cases</li>
              <li>Secure briefing document will be shared via email</li>
              <li>Crisis response plan delivered within 2 hours of consultation</li>
            </ul>
          </div>

          <div style="display:flex;gap:1rem;justify-content:center;margin-top:2rem;flex-wrap:wrap">
            <button class="btn btn--ghost" onclick="Booking.reset()">Book Another Consultation</button>
            <button class="btn btn--primary" onclick="Router.navigateTo('dashboard')">Return to Dashboard</button>
          </div>
        </div>`;
    },

    reset() {
      STATE.booking = {
        step: 1,
        totalSteps: 4,
        data: {
          crisisTypeId: null, urgency: null, description: '',
          date: null, time: null,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
          contact: { name: '', org: '', role: '', email: '', phone: '', country: '' }
        }
      };
      DOM.bookingProgress.style.display = '';
      DOM.bookingNav.style.display = '';
      this.init();
    },

    clearErrors() {
      document.querySelectorAll('.booking-error').forEach(e => {
        e.classList.remove('visible');
        e.textContent = '';
      });
      document.querySelectorAll('.form-field.has-error').forEach(f => f.classList.remove('has-error'));
    }
  };

  // Expose Booking and Router globally for inline onclick handlers
  window.Booking = Booking;
  window.Router = Router;

  /* ============================================================
     DATE PICKER
     ============================================================ */
  const DatePicker = {
    render(containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;
      const month = STATE.calendarMonth;
      const year = STATE.calendarYear;
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const daysInMonth = Utils.daysInMonth(month, year);
      const firstDay = Utils.firstDayOfMonth(month, year);

      const dayLabels = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

      const dayLabelCells = dayLabels.map(d =>
        `<div class="cal-day-label">${d}</div>`).join('');

      const emptyCells = Array(firstDay).fill('<div class="cal-day empty"></div>').join('');

      const dayCells = Array.from({ length: daysInMonth }, (_, i) => {
        const day = i + 1;
        const date = new Date(year, month, day);
        const isPast = date < today;
        const isWeekend = date.getDay() === 0 || date.getDay() === 6;
        const isToday = date.toDateString() === today.toDateString();
        const isSelected = STATE.booking.data.date &&
          date.toDateString() === STATE.booking.data.date.toDateString();

        let cls = 'cal-day';
        if (isPast || isWeekend) cls += ' disabled';
        if (isToday) cls += ' today';
        if (isSelected) cls += ' selected';

        return `<div class="${cls}" data-date="${year}-${month}-${day}">${day}</div>`;
      }).join('');

      container.innerHTML = `
        <div class="calendar">
          <div class="calendar-header">
            <button class="cal-nav" id="cal-prev">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <span class="calendar-month">${Utils.monthName(month)} ${year}</span>
            <button class="cal-nav" id="cal-next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
          <div class="calendar-grid">
            ${dayLabelCells}${emptyCells}${dayCells}
          </div>
        </div>`;

      // Bind navigation
      const prevBtn = document.getElementById('cal-prev');
      const nextBtn = document.getElementById('cal-next');

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          STATE.calendarMonth--;
          if (STATE.calendarMonth < 0) {
            STATE.calendarMonth = 11;
            STATE.calendarYear--;
          }
          this.render(containerId);
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          STATE.calendarMonth++;
          if (STATE.calendarMonth > 11) {
            STATE.calendarMonth = 0;
            STATE.calendarYear++;
          }
          this.render(containerId);
        });
      }

      // Bind day selection
      container.querySelectorAll('.cal-day:not(.disabled):not(.empty)').forEach(cell => {
        cell.addEventListener('click', () => {
          const [y, m, d] = cell.dataset.date.split('-').map(Number);
          STATE.booking.data.date = new Date(y, m, d);
          STATE.booking.data.time = null;
          this.render(containerId);
          this.renderTimeSlots();
        });
      });
    },

    renderTimeSlots() {
      const grid = document.getElementById('timeslots-grid');
      const hint = document.getElementById('timeslot-hint');
      if (!grid) return;
      if (hint) hint.style.display = 'none';

      // Generate time slots 8am–6pm in 30min increments
      const slots = [];
      for (let h = 8; h <= 17; h++) {
        slots.push(`${h > 12 ? h - 12 : h}:00 ${h >= 12 ? 'PM' : 'AM'}`);
        slots.push(`${h > 12 ? h - 12 : h}:30 ${h >= 12 ? 'PM' : 'AM'}`);
      }
      slots.push('6:00 PM');

      // Pseudo-randomly mark some unavailable (deterministic based on date)
      const seed = STATE.booking.data.date ? STATE.booking.data.date.getDate() : 0;
      const unavailableIndices = [seed % slots.length, (seed + 3) % slots.length, (seed + 7) % slots.length];

      grid.innerHTML = slots.map((slot, i) => {
        const unavailable = unavailableIndices.includes(i);
        const selected = STATE.booking.data.time === slot;
        let cls = 'time-slot';
        if (unavailable) cls += ' unavailable';
        if (selected) cls += ' selected';
        return `<div class="${cls}" data-time="${slot}">${slot}</div>`;
      }).join('');

      grid.querySelectorAll('.time-slot:not(.unavailable)').forEach(slot => {
        slot.addEventListener('click', () => {
          STATE.booking.data.time = slot.dataset.time;
          grid.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
          slot.classList.add('selected');
        });
      });
    }
  };

  /* ============================================================
     VALIDATION
     ============================================================ */
  const Validation = {
    emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phoneRegex: /^\+?[\d\s\-()\/.]{7,20}$/,

    validateStep(step) {
      const data = STATE.booking.data;
      const errEl = document.getElementById('step-error');
      let msg = '';

      switch (step) {
        case 1:
          if (!data.crisisTypeId) msg = 'Please select a crisis type to continue.';
          break;
        case 2:
          if (!data.urgency) msg = 'Please select an urgency level to continue.';
          break;
        case 3:
          if (!data.date) msg = 'Please select a date.';
          else if (!data.time) msg = 'Please select a time slot.';
          break;
        case 4:
          return this.validateContactForm();
      }

      if (msg && errEl) {
        errEl.textContent = msg;
        errEl.classList.add('visible');
        return false;
      }
      return true;
    },

    validateContactForm() {
      let valid = true;

      const rules = [
        { id: 'name', field: 'c-name', errId: 'err-name', check: v => v.trim().length >= 2, msg: 'Please enter your full name.' },
        { id: 'org', field: 'c-org', errId: 'err-org', check: v => v.trim().length >= 2, msg: 'Please enter your organization.' },
        { id: 'email', field: 'c-email', errId: 'err-email', check: v => this.emailRegex.test(v), msg: 'Please enter a valid email address.' },
        { id: 'phone', field: 'c-phone', errId: 'err-phone', check: v => this.phoneRegex.test(v), msg: 'Please enter a valid phone number.' },
        { id: 'country', field: 'c-country', errId: 'err-country', check: v => v.trim().length > 0, msg: 'Please select your country.' }
      ];

      rules.forEach(rule => {
        const input = document.getElementById(rule.field);
        const errSpan = document.getElementById(rule.errId);
        if (!input) return;
        const val = input.value;
        const fieldWrapper = input.closest('.form-field');

        if (!rule.check(val)) {
          valid = false;
          if (fieldWrapper) fieldWrapper.classList.add('has-error');
          if (errSpan) errSpan.textContent = rule.msg;
        } else {
          if (fieldWrapper) fieldWrapper.classList.remove('has-error');
        }
      });

      return valid;
    }
  };

  /* ============================================================
     GLOBAL EVENT BINDINGS
     ============================================================ */
  function bindGlobalEvents() {
    // Nav clicks — event delegation covers static + dynamically rendered elements
    document.addEventListener('click', (e) => {
      const el = e.target.closest('[data-nav]');
      if (!el) return;
      e.preventDefault();
      const section = el.dataset.nav;
      Router.navigateTo(section);
      if (section === 'booking' && el.dataset.crisis) {
        STATE.booking.data.crisisTypeId = el.dataset.crisis;
      }
    });

    // Booking form — delegated click handler for dynamically rendered step elements
    if (DOM.bookingFormContainer) {
      DOM.bookingFormContainer.addEventListener('click', (e) => {
        // Step 1: crisis type selection
        const tile = e.target.closest('.crisis-type-tile');
        if (tile) {
          DOM.bookingFormContainer.querySelectorAll('.crisis-type-tile').forEach(t => t.classList.remove('selected'));
          tile.classList.add('selected');
          STATE.booking.data.crisisTypeId = tile.dataset.crisisId;
          return;
        }
        // Step 2: urgency selection
        const card = e.target.closest('.urgency-card');
        if (card) {
          DOM.bookingFormContainer.querySelectorAll('.urgency-card').forEach(c => c.classList.remove('selected'));
          card.classList.add('selected');
          STATE.booking.data.urgency = card.dataset.urgency;
        }
      });
    }

    // Booking nav buttons
    if (DOM.bookingNext) {
      DOM.bookingNext.addEventListener('click', () => Booking.nextStep());
    }
    if (DOM.bookingBack) {
      DOM.bookingBack.addEventListener('click', () => Booking.prevStep());
    }

    // Detail back button
    if (DOM.detailBack) {
      DOM.detailBack.addEventListener('click', () => Router.navigateTo('dashboard'));
    }

    // Expert modal close
    if (DOM.expertModalClose) {
      DOM.expertModalClose.addEventListener('click', closeExpertModal);
    }
    if (DOM.expertModal) {
      DOM.expertModal.addEventListener('click', (e) => {
        if (e.target === DOM.expertModal) closeExpertModal();
      });
    }

    // Case modal close
    if (DOM.caseModalClose) {
      DOM.caseModalClose.addEventListener('click', window.closeCaseModal);
    }
    if (DOM.caseModal) {
      DOM.caseModal.addEventListener('click', (e) => {
        if (e.target === DOM.caseModal) window.closeCaseModal();
      });
    }

    // Escape key closes modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeExpertModal();
        window.closeCaseModal();
      }
    });

    // Hamburger
    if (DOM.hamburger) {
      DOM.hamburger.addEventListener('click', () => {
        const isOpen = DOM.hamburger.classList.toggle('open');
        DOM.mainNav.classList.toggle('open', isOpen);
        DOM.hamburger.setAttribute('aria-expanded', isOpen.toString());
      });
    }

    // Payment section — "book a discovery call" link
    document.querySelectorAll('.link-btn[data-nav]').forEach(btn => {
      btn.addEventListener('click', () => Router.navigateTo(btn.dataset.nav));
    });

    // Newsletter form (simulated)
    document.querySelectorAll('.newsletter-form').forEach(form => {
      const btn = form.querySelector('button');
      const input = form.querySelector('input');
      if (btn && input) {
        btn.addEventListener('click', () => {
          if (input.value.includes('@')) {
            const original = btn.textContent;
            btn.textContent = 'Subscribed!';
            btn.style.background = 'var(--color-accent-green)';
            input.value = '';
            setTimeout(() => {
              btn.textContent = original;
              btn.style.background = '';
            }, 3000);
          }
        });
      }
    });
  }

  /* ============================================================
     INIT
     ============================================================ */
  /* ============================================================
     CHAT WIDGET
     ============================================================ */
  const Chat = {
    isOpen: false,
    awaitingName: false,
    awaitingEmail: false,
    userName: '',

    responses: {
      greeting: [
        "Hello! Welcome to CrisisCore. I'm here to help with any enquiries. What can I assist you with today?",
      ],
      pricing: "Our packages start from **$2,500** for a single Crisis Consult session, **$18,000/month** for Active Crisis Response, and **$120,000/year** for our full Annual Retainer. You can view full details in our Pricing section, or I can connect you with a specialist for a bespoke quote.",
      booking: "You can book a consultation directly through our secure booking form — just click 'Book Consultation' in the navigation. For urgent matters, please call our emergency line: **+1-800-000-0000**.",
      team: "Our experts include former intelligence officers, financial crime specialists, reputation managers, and legal advisors — all with deep UHNWI experience. Visit the 'Our Experts' section to view full profiles.",
      urgent: "If this is an active emergency, please call our **24/7 emergency line immediately: +1-800-000-0000**. For non-emergency enquiries, I can connect you with a specialist within 15 minutes.",
      confidential: "Absolute confidentiality is the foundation of everything we do. All consultations are covered by a strict NDA, and our communications use end-to-end encrypted channels. Your identity and situation are never shared.",
      default: "Thank you for your message. A member of our team will follow up with you shortly. For urgent matters, please call **+1-800-000-0000** or use our booking form.",
      namePrompt: "I'd be happy to have a specialist follow up with you directly. May I have your name?",
      emailPrompt: (name) => `Thank you, ${name}. And your email address?`,
      farewell: (name, email) => `Thank you, ${name}. A CrisisCore specialist will reach out to ${email} within the hour. Is there anything else I can help you with?`
    },

    quickReplies: [
      { label: 'View Pricing', key: 'pricing' },
      { label: 'Book a Consultation', key: 'booking' },
      { label: 'Is this confidential?', key: 'confidential' },
      { label: 'Urgent — I need help now', key: 'urgent' },
      { label: 'Meet the experts', key: 'team' },
      { label: 'Speak to someone', key: 'contact' }
    ],

    init() {
      const toggle = document.getElementById('chat-toggle');
      const closeBtn = document.getElementById('chat-close');
      const sendBtn = document.getElementById('chat-send');
      const input = document.getElementById('chat-input');

      toggle.addEventListener('click', () => this.toggleOpen());
      closeBtn.addEventListener('click', () => this.toggleOpen(false));
      sendBtn.addEventListener('click', () => this.handleSend());
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.handleSend();
      });

      // Show greeting after short delay when first opened
    },

    toggleOpen(force) {
      this.isOpen = force !== undefined ? force : !this.isOpen;
      const win = document.getElementById('chat-window');
      const openIcon = document.querySelector('.chat-bubble__icon--open');
      const closeIcon = document.querySelector('.chat-bubble__icon--close');
      const dot = document.getElementById('chat-dot');

      win.classList.toggle('open', this.isOpen);
      win.setAttribute('aria-hidden', String(!this.isOpen));
      openIcon.style.display = this.isOpen ? 'none' : 'flex';
      closeIcon.style.display = this.isOpen ? 'flex' : 'none';

      if (this.isOpen) {
        dot.classList.add('hidden');
        // Show greeting on first open
        const msgs = document.getElementById('chat-messages');
        if (msgs.children.length === 0) {
          setTimeout(() => {
            this.addBotMessage("Hello! Welcome to **CrisisCore**. I'm here to help with any enquiries. What can I assist you with today?");
            this.renderQuickReplies();
          }, 400);
        }
        setTimeout(() => document.getElementById('chat-input').focus(), 300);
      }
    },

    handleSend() {
      const input = document.getElementById('chat-input');
      const text = input.value.trim();
      if (!text) return;
      input.value = '';
      this.addUserMessage(text);
      this.clearQuickReplies();

      if (this.awaitingName) {
        this.userName = text;
        this.awaitingName = false;
        this.awaitingEmail = true;
        this.showTyping(() => this.addBotMessage(this.responses.emailPrompt(this.userName)));
        return;
      }

      if (this.awaitingEmail) {
        this.awaitingEmail = false;
        const email = text;

        // Send lead via EmailJS
        const cfg = window.CRISISCORE_CONFIG;
        if (window.emailjs && cfg.EMAILJS_SERVICE_ID !== 'YOUR_EMAILJS_SERVICE_ID') {
          // Build a transcript summary from the chat history
          const msgs = document.getElementById('chat-messages');
          const transcript = Array.from(msgs.querySelectorAll('.chat-msg')).map(m => {
            const who = m.classList.contains('chat-msg--user') ? 'Visitor' : 'Bot';
            return `${who}: ${m.querySelector('.chat-msg__bubble').textContent}`;
          }).join('\n');

          window.emailjs.send(cfg.EMAILJS_SERVICE_ID, cfg.EMAILJS_TEMPLATE_ID, {
            from_name:  this.userName,
            from_email: email,
            message:    transcript,
            crisis_type: 'Via chat enquiry',
            urgency:    'To be confirmed'
          }).catch(() => {});
        }

        this.showTyping(() => {
          this.addBotMessage(this.responses.farewell(this.userName, email));
          this.renderQuickReplies(['View Pricing', 'Book a Consultation']);
        });
        return;
      }

      const key = this.classifyMessage(text);
      this.respondTo(key);
    },

    handleQuickReply(key, label) {
      this.addUserMessage(label);
      this.clearQuickReplies();
      this.respondTo(key);
    },

    respondTo(key) {
      if (key === 'contact') {
        this.awaitingName = true;
        this.showTyping(() => this.addBotMessage(this.responses.namePrompt));
        return;
      }
      if (key === 'booking') {
        this.showTyping(() => {
          this.addBotMessage(this.responses.booking);
          this.renderQuickReplies(['View Pricing', 'Is this confidential?']);
        });
        return;
      }
      const reply = this.responses[key] || this.responses.default;
      this.showTyping(() => {
        this.addBotMessage(reply);
        if (key !== 'urgent') {
          this.renderQuickReplies(['Book a Consultation', 'Speak to someone']);
        }
      });
    },

    classifyMessage(text) {
      const t = text.toLowerCase();
      if (/pric|cost|fee|how much|rate|package|plan/.test(t)) return 'pricing';
      if (/book|consult|schedul|appoint|meet/.test(t)) return 'booking';
      if (/urgent|emergency|help now|crisis now|asap/.test(t)) return 'urgent';
      if (/confidential|private|secret|discreet|nda/.test(t)) return 'confidential';
      if (/team|expert|specialist|who|staff/.test(t)) return 'team';
      if (/speak|call|contact|human|person|someone/.test(t)) return 'contact';
      return 'default';
    },

    addBotMessage(text) {
      const msgs = document.getElementById('chat-messages');
      const el = document.createElement('div');
      el.className = 'chat-msg chat-msg--bot';
      // Render **bold** markdown
      const formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      el.innerHTML = `
        <div class="chat-msg__bubble">${formatted}</div>
        <span class="chat-msg__time">${this.timeNow()}</span>`;
      msgs.appendChild(el);
      msgs.scrollTop = msgs.scrollHeight;
    },

    addUserMessage(text) {
      const msgs = document.getElementById('chat-messages');
      const el = document.createElement('div');
      el.className = 'chat-msg chat-msg--user';
      el.innerHTML = `
        <div class="chat-msg__bubble">${Utils.sanitize(text)}</div>
        <span class="chat-msg__time">${this.timeNow()}</span>`;
      msgs.appendChild(el);
      msgs.scrollTop = msgs.scrollHeight;
    },

    showTyping(callback) {
      const msgs = document.getElementById('chat-messages');
      const typing = document.createElement('div');
      typing.className = 'chat-msg chat-msg--bot';
      typing.id = 'chat-typing-indicator';
      typing.innerHTML = `<div class="chat-typing"><span></span><span></span><span></span></div>`;
      msgs.appendChild(typing);
      msgs.scrollTop = msgs.scrollHeight;

      setTimeout(() => {
        const ind = document.getElementById('chat-typing-indicator');
        if (ind) ind.remove();
        callback();
      }, 900 + Math.random() * 400);
    },

    renderQuickReplies(labels) {
      const container = document.getElementById('chat-quick-replies');
      const toShow = labels
        ? this.quickReplies.filter(q => labels.includes(q.label))
        : this.quickReplies;

      container.innerHTML = toShow.map(q =>
        `<button class="quick-reply" data-key="${q.key}">${q.label}</button>`
      ).join('');

      container.querySelectorAll('.quick-reply').forEach(btn => {
        btn.addEventListener('click', () => this.handleQuickReply(btn.dataset.key, btn.textContent));
      });
    },

    clearQuickReplies() {
      document.getElementById('chat-quick-replies').innerHTML = '';
    },

    timeNow() {
      return new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    }
  };

  function init() {
    cacheDOM();

    // Initialise EmailJS
    if (window.emailjs && window.CRISISCORE_CONFIG.EMAILJS_PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY') {
      window.emailjs.init({ publicKey: window.CRISISCORE_CONFIG.EMAILJS_PUBLIC_KEY });
    }

    initBanner();
    initScrollEffects();
    renderDashboard();
    renderProtocols();
    renderTeam();
    renderResources();
    renderCaseStudies();
    renderContacts();
    Booking.init();
    Chat.init();
    initAnimations();
    bindGlobalEvents();

    // Show dashboard by default (all others hidden via HTML)
    Router.navigateTo('dashboard');
    window.scrollTo(0, 0);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

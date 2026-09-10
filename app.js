/* ============================================================
   Luxe & Locks — App Logic
   ============================================================ */

'use strict';

/* ----------------------------------------------------------
   DATA
---------------------------------------------------------- */
const SERVICES = [
  {
    id: 'cut-style',
    name: 'Cut & Style',
    desc: 'Precision cut tailored to your face shape and lifestyle, finished with a professional blowout.',
    duration: '60 min',
    price: '$85',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/><path d="M18 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/><path d="M8.12 8.12 12 12M12 12l7.88 7.88M20 4 8.12 15.88"/></svg>`
  },
  {
    id: 'colour',
    name: 'Colour & Highlights',
    desc: 'From subtle ribbons of colour to a full transformation. Includes consultation and toner.',
    duration: '120–180 min',
    price: '$150',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>`
  },
  {
    id: 'balayage',
    name: 'Balayage',
    desc: 'Hand-painted freehand colour for a natural, sun-kissed effect with effortless grow-out.',
    duration: '150–210 min',
    price: '$200',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`
  },
  {
    id: 'blowout',
    name: 'Blowout & Finish',
    desc: 'A professional blowout using salon-grade products for a polished, long-lasting result.',
    duration: '45 min',
    price: '$65',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
  },
  {
    id: 'treatment',
    name: 'Hair Treatment',
    desc: 'Targeted treatments including bond repair, deep conditioning, and scalp therapy.',
    duration: '60–90 min',
    price: '$95',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
  },
  {
    id: 'extensions',
    name: 'Extensions Consult',
    desc: 'Complimentary consultation to explore tape-in, nano-ring, or halo extension options.',
    duration: '30 min',
    price: 'Free',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>`
  }
];

const HAIR_STYLES = [
  { id: 'blunt-bob',     category: 'Cuts',    name: 'Blunt Bob',           desc: 'Clean, geometric lines at the jaw',           gradient: 'linear-gradient(145deg,#0d0d0d 0%,#2a2a2a 60%,#4a4540 100%)' },
  { id: 'layered-long',  category: 'Cuts',    name: 'Layered Long',        desc: 'Face-framing layers with movement',            gradient: 'linear-gradient(145deg,#1a1008 0%,#3d2510 60%,#7a4a25 100%)' },
  { id: 'pixie-crop',    category: 'Cuts',    name: 'Pixie Crop',          desc: 'Bold, short & effortlessly chic',              gradient: 'linear-gradient(145deg,#0f0f0f 0%,#1f1f1f 60%,#383838 100%)' },
  { id: 'wolf-cut',      category: 'Cuts',    name: 'Wolf Cut',            desc: 'Textured layers with curtain bangs',           gradient: 'linear-gradient(145deg,#150d00 0%,#3d2000 60%,#8b4a00 100%)' },
  { id: 'honey-balayage',category: 'Colour',  name: 'Honey Balayage',      desc: 'Warm golden tones, hand-painted',              gradient: 'linear-gradient(145deg,#2a1800 0%,#8b5500 50%,#c9a96e 100%)' },
  { id: 'ash-blonde',    category: 'Colour',  name: 'Ash Blonde',          desc: 'Cool, platinum-toned fade',                    gradient: 'linear-gradient(145deg,#1c1c1c 0%,#7a7a7a 55%,#d4cfc0 100%)' },
  { id: 'rich-brunette', category: 'Colour',  name: 'Rich Brunette Gloss', desc: 'Deep, lustrous chocolate tones',               gradient: 'linear-gradient(145deg,#0f0500 0%,#3d1500 50%,#7a3000 100%)' },
  { id: 'vivid-auburn',  category: 'Colour',  name: 'Vivid Auburn',        desc: 'Fiery copper-red dimension',                   gradient: 'linear-gradient(145deg,#1a0500 0%,#7a1500 50%,#c94010 100%)' },
  { id: 'platinum',      category: 'Colour',  name: 'Platinum',            desc: 'Full silver-white transformation',             gradient: 'linear-gradient(145deg,#1a1a1a 0%,#888 55%,#ede8df 100%)' },
  { id: 'defined-curls', category: 'Natural', name: 'Defined Curls',       desc: 'Enhanced curl pattern, frizz-free',            gradient: 'linear-gradient(145deg,#150a00 0%,#4a2000 50%,#8b5525 100%)' },
  { id: 'braid-updo',    category: 'Styling', name: 'Braid Updo',          desc: 'Intricate braided formal styling',             gradient: 'linear-gradient(145deg,#0a0510 0%,#25105a 50%,#5020a0 100%)' },
  { id: 'sleek-straight',category: 'Styling', name: 'Sleek & Straight',    desc: 'Ultra-smooth, mirror-finish straight',         gradient: 'linear-gradient(145deg,#0f0f0f 0%,#222 50%,#3d3530 100%)' }
];

const STYLISTS = [
  { id: 'isabelle', initials: 'IC', name: 'Isabelle Chen',  role: 'Creative Director', bio: 'With 14 years across London and Paris, Isabelle specialises in transformative colour and editorial looks.', specialties: ['Balayage', 'Colour Correction', 'Editorial'], days: [2,3,4,5,6] },
  { id: 'marcus',   initials: 'ML', name: 'Marcus Laurent', role: 'Master Stylist',     bio: 'A precision cut specialist trained at the Vidal Sassoon Academy. Marcus has an eye for geometry and structure.', specialties: ["Precision Cuts", "Men's Grooming", 'Texture'], days: [2,4,5,6,0] },
  { id: 'sofia',    initials: 'SR', name: 'Sofia Reyes',    role: 'Colour Specialist',  bio: "Sofia's balayage work has featured in Vogue and Harper's Bazaar. She creates effortlessly beautiful, lived-in colour.", specialties: ['Balayage', 'Highlights', 'Toning'], days: [3,4,5,6,0] },
  { id: 'james',    initials: 'JA', name: 'James Adeyemi',  role: 'Texture Expert',     bio: 'A passionate advocate for natural texture. James specialises in curly, coily, and afro hair styling.', specialties: ['Curly Hair', 'Natural Styling', 'Extensions'], days: [2,3,5,6] }
];

const GALLERY = [
  { category: 'Balayage', label: 'Warm Honey Balayage',     gradient: 'linear-gradient(145deg,#3d2000 0%,#8b5500 40%,#c9a96e 100%)' },
  { category: 'Colour',   label: 'Rich Brunette Gloss',     gradient: 'linear-gradient(145deg,#150800 0%,#4a1800 50%,#8b3510 100%)' },
  { category: 'Cuts',     label: 'Geometric Bob',           gradient: 'linear-gradient(145deg,#0d0d0d 0%,#2a2a2a 50%,#4a4540 100%)' },
  { category: 'Balayage', label: 'Ash Blonde Melt',         gradient: 'linear-gradient(145deg,#1c1c1c 0%,#7a7a7a 50%,#d4cfc0 100%)' },
  { category: 'Colour',   label: 'Vivid Auburn',            gradient: 'linear-gradient(145deg,#200800 0%,#8b2000 50%,#c94010 100%)' },
  { category: 'Natural',  label: 'Defined Curl Pattern',    gradient: 'linear-gradient(145deg,#1a0800 0%,#4a2000 50%,#8b5525 100%)' },
  { category: 'Cuts',     label: 'Layered Long Cut',        gradient: 'linear-gradient(145deg,#0d0500 0%,#250f00 50%,#4a2000 100%)' },
  { category: 'Styling',  label: 'Bridal Updo',             gradient: 'linear-gradient(145deg,#0d0a0a 0%,#2a2025 50%,#c9a96e 100%)' },
  { category: 'Colour',   label: 'Platinum Transformation', gradient: 'linear-gradient(145deg,#1a1a1a 0%,#888 50%,#ede8df 100%)' }
];

const TESTIMONIALS = [
  { name: 'Amara O.',     service: 'Balayage',          rating: 5, text: 'Sofia is an absolute artist. I walked in with damaged colour and walked out with the most beautiful honey-toned balayage. Worth every penny.' },
  { name: 'Charlotte B.', service: 'Cut & Style',       rating: 5, text: "Isabelle understood exactly what I wanted from the first consultation. The cut is perfect — grows out beautifully. I won't go anywhere else." },
  { name: 'Michael T.',   service: 'Precision Cut',     rating: 5, text: 'Marcus is the only person I trust with my hair. Meticulous, knowledgeable, and genuinely cares about the result. The salon itself is stunning.' },
  { name: 'Priya S.',     service: 'Colour Correction', rating: 5, text: "After a disaster at another salon, Isabelle rescued my hair over two sessions. Her knowledge is unmatched. I finally have the colour I've always wanted." },
  { name: 'Dani K.',      service: 'Natural Styling',   rating: 5, text: 'James really listened to my curl concerns and gave me a routine that works. My curls have never looked this good. A truly transformative experience.' },
  { name: 'Sophie R.',    service: 'Blowout',           rating: 5, text: 'Even the blowout here is an experience. The products smell divine and my hair lasted 4 days. I feel like a celebrity every visit.' }
];

const PRICING = [
  {
    category: 'Cuts & Styling',
    items: [
      { name: 'Cut & Blowout',       price: 'from $85'  },
      { name: 'Cut (no blowout)',    price: 'from $65'  },
      { name: 'Blowout & Finish',    price: 'from $55'  },
      { name: "Men's Cut & Style",   price: 'from $65'  }
    ]
  },
  {
    category: 'Colour',
    items: [
      { name: 'Full Colour',         price: 'from $120' },
      { name: 'Full Highlights',     price: 'from $160' },
      { name: 'Balayage',            price: 'from $195' },
      { name: 'Colour Correction',   price: 'from $250', note: 'Consultation required' },
      { name: 'Toner / Gloss',       price: 'from $55'  },
      { name: 'Colour + Cut',        price: 'from $220' }
    ]
  },
  {
    category: 'Treatments',
    items: [
      { name: 'Bond Repair',         price: 'from $85'  },
      { name: 'Deep Conditioning',   price: 'from $65'  },
      { name: 'Scalp Therapy',       price: 'from $75'  },
      { name: 'Keratin Smoothing',   price: 'from $220' }
    ]
  },
  {
    category: 'Extensions',
    items: [
      { name: 'Extensions Consult',  price: 'Complimentary', isFree: true },
      { name: 'Tape-In (fitting)',   price: 'from $350', note: 'Hair extra' },
      { name: 'Nano-Ring',           price: 'from $480', note: 'Hair extra' }
    ]
  }
];

/* ----------------------------------------------------------
   BOOKING STATE
---------------------------------------------------------- */
const booking = { service: null, style: null, stylist: null, date: null, time: null, client: {} };

const STEPS = [
  { label: 'Service' },
  { label: 'Style' },
  { label: 'Date & Time' },
  { label: 'Details' }
];

let currentStep = 1;

/* ----------------------------------------------------------
   UTILITIES
---------------------------------------------------------- */
const el  = id  => document.getElementById(id);
const qs  = (s,c=document) => c.querySelector(s);
const qsa = (s,c=document) => [...c.querySelectorAll(s)];

function fmt(date) {
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

/* ----------------------------------------------------------
   HEADER SCROLL
---------------------------------------------------------- */
function initHeader() {
  const header = el('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ----------------------------------------------------------
   HAMBURGER
---------------------------------------------------------- */
function initHamburger() {
  const btn = el('hamburger');
  const nav = el('main-nav');
  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    nav.classList.toggle('open', open);
  });
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('open');
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', false);
    });
  });
}

/* ----------------------------------------------------------
   COUNTER ANIMATION
---------------------------------------------------------- */
function animateCounters() {
  qsa('[data-target]').forEach(node => {
    const target = +node.dataset.target;
    const step   = target / (1200 / 16);
    let cur = 0;
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      node.textContent = Math.floor(cur);
      if (cur >= target) clearInterval(t);
    }, 16);
  });
}

function initHeroCounters() {
  const hero = el('hero');
  if (!hero) return;
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { animateCounters(); obs.disconnect(); }
  }, { threshold: 0.5 });
  obs.observe(hero);
}

/* ----------------------------------------------------------
   REVEAL ON SCROLL
---------------------------------------------------------- */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  qsa('.reveal').forEach(node => obs.observe(node));
}

/* ----------------------------------------------------------
   SERVICES SECTION
---------------------------------------------------------- */
function initServices() {
  el('services-grid').innerHTML = SERVICES.map((s, i) => `
    <article class="service-card reveal" style="transition-delay:${i * 60}ms"
             onclick="location.href='#booking'">
      <div class="service-icon">${s.icon}</div>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <div class="service-meta">
        <span>${s.duration}</span>
        <span class="service-price">${s.price}+</span>
      </div>
      <span class="service-book-link">
        Book this service
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </span>
    </article>
  `).join('');
}

/* ----------------------------------------------------------
   STYLISTS SECTION
---------------------------------------------------------- */
function initStylists() {
  el('stylists-grid').innerHTML = STYLISTS.map((s, i) => `
    <div class="stylist-card reveal" style="transition-delay:${i * 80}ms">
      <div class="stylist-avatar">${s.initials}</div>
      <h3>${s.name}</h3>
      <p class="stylist-role">${s.role}</p>
      <p class="stylist-bio">${s.bio}</p>
      <div class="stylist-tags">
        ${s.specialties.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ----------------------------------------------------------
   GALLERY
---------------------------------------------------------- */
function initGallery() {
  const categories = ['All', ...new Set(GALLERY.map(g => g.category))];
  const filtersEl  = el('gallery-filters');
  const gridEl     = el('gallery-grid');

  filtersEl.innerHTML = categories.map((cat, i) => `
    <button class="style-cat-btn ${i === 0 ? 'active' : ''}" data-cat="${cat}">${cat}</button>
  `).join('');

  gridEl.innerHTML = GALLERY.map(g => `
    <div class="gallery-item reveal" data-cat="${g.category}">
      <div class="gallery-art" style="background:${g.gradient}"></div>
      <div class="gallery-overlay">
        <div class="gallery-cat">${g.category}</div>
        <div class="gallery-label">${g.label}</div>
      </div>
    </div>
  `).join('');

  filtersEl.addEventListener('click', e => {
    const btn = e.target.closest('.style-cat-btn');
    if (!btn) return;
    qsa('.style-cat-btn', filtersEl).forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    qsa('.gallery-item', gridEl).forEach(item => {
      item.classList.toggle('hidden', cat !== 'All' && item.dataset.cat !== cat);
    });
  });
}

/* ----------------------------------------------------------
   TESTIMONIALS
---------------------------------------------------------- */
function initTestimonials() {
  el('testimonials-grid').innerHTML = TESTIMONIALS.map((t, i) => `
    <div class="testimonial-card reveal" style="transition-delay:${i * 60}ms">
      <div class="testimonial-stars">${'★'.repeat(t.rating)}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-meta">
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-service">${t.service}</div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ----------------------------------------------------------
   PRICING
---------------------------------------------------------- */
function initPricing() {
  el('pricing-grid').innerHTML = PRICING.map((group, i) => `
    <div class="pricing-group reveal" style="transition-delay:${i * 80}ms">
      <div class="pricing-group__header">${group.category}</div>
      <div class="pricing-group__items">
        ${group.items.map(item => `
          <div class="pricing-item">
            <div>
              <div class="pricing-item__name">${item.name}</div>
              ${item.note ? `<div class="pricing-item__note">${item.note}</div>` : ''}
            </div>
            <div class="pricing-item__price ${item.isFree ? 'free' : ''}">${item.price}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ----------------------------------------------------------
   BOOKING WIZARD
---------------------------------------------------------- */
function getAvailableDates() {
  const dates = [];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (dates.length < 21) {
    if (d.getDay() !== 1) dates.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  return dates;
}

const ALL_TIMES = ['9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM'];

function isStylistAvailableOnDate(stylist, date) {
  if (!stylist || stylist.id === 'any') return true;
  return stylist.days.includes(date.getDay());
}

/* Progress */
function renderProgress() {
  el('booking-progress').innerHTML = STEPS.map((step, i) => {
    const n      = i + 1;
    const isDone = currentStep > n;
    const isAct  = currentStep === n;
    return `
      ${i > 0 ? `<div class="step-connector ${isDone ? 'done' : ''}"></div>` : ''}
      <div class="progress-step ${isDone ? 'done' : ''} ${isAct ? 'active' : ''}">
        <div class="step-dot">${isDone ? '✓' : n}</div>
        <span class="step-label">${step.label}</span>
      </div>
    `;
  }).join('');
}

/* Footer */
function renderFooter(showBack) {
  el('booking-footer').innerHTML = `
    ${showBack
      ? `<button class="btn btn-ghost btn-sm" id="booking-back">← Back</button>`
      : '<div></div>'}
    <div style="display:flex;align-items:center;gap:1rem">
      <span class="booking-step-indicator">Step ${currentStep} of ${STEPS.length}</span>
      <button class="btn btn-gold btn-sm" id="booking-next">
        ${currentStep === STEPS.length ? 'Confirm Booking' : 'Continue →'}
      </button>
    </div>
  `;
  el('booking-next').addEventListener('click', nextStep);
  const backBtn = el('booking-back');
  if (backBtn) backBtn.addEventListener('click', prevStep);
}

/* ---------- STEP 1: Service ---------- */
function renderStep1() {
  el('booking-body').innerHTML = `
    <h3 class="step-title">Choose Your Service</h3>
    <p class="step-subtitle">Select the service you'd like to book.</p>
    <div class="service-options" id="service-opts">
      ${SERVICES.map(s => `
        <div class="service-opt ${booking.service?.id === s.id ? 'selected' : ''}" data-id="${s.id}">
          <div class="service-opt__check">✓</div>
          <div class="service-opt__icon">${s.icon}</div>
          <div class="service-opt__name">${s.name}</div>
          <div class="service-opt__meta">${s.duration}</div>
          <div class="service-opt__price">${s.price}+</div>
        </div>
      `).join('')}
    </div>
  `;
  el('service-opts').addEventListener('click', e => {
    const opt = e.target.closest('.service-opt');
    if (!opt) return;
    booking.service = SERVICES.find(s => s.id === opt.dataset.id) || null;
    qsa('.service-opt').forEach(o => o.classList.toggle('selected', o === opt));
  });
  renderFooter(false);
}

/* ---------- STEP 2: Style ---------- */
function renderStep2() {
  const cats = ['All', ...new Set(HAIR_STYLES.map(s => s.category))];
  let activeCat = 'All';

  function styleCards() {
    const list = activeCat === 'All' ? HAIR_STYLES : HAIR_STYLES.filter(s => s.category === activeCat);
    return list.map(s => `
      <div class="style-opt ${booking.style?.id === s.id ? 'selected' : ''}" data-id="${s.id}" style="position:relative">
        <div class="style-opt__art" style="background:${s.gradient}">
          <span class="style-opt__badge">${s.category}</span>
        </div>
        <div class="style-opt__sel-ring"></div>
        <div class="style-opt__body">
          <div class="style-opt__name">${s.name}</div>
          <div class="style-opt__desc">${s.desc}</div>
        </div>
      </div>
    `).join('');
  }

  el('booking-body').innerHTML = `
    <h3 class="step-title">Choose Your Style</h3>
    <p class="step-subtitle">Browse looks and pick the style you'd like to achieve at your appointment.</p>
    <div class="style-categories" id="style-cats">
      ${cats.map(cat => `
        <button class="style-cat-btn ${cat === activeCat ? 'active' : ''}" data-cat="${cat}">${cat}</button>
      `).join('')}
    </div>
    <div class="style-options" id="style-opts">${styleCards()}</div>
  `;

  el('style-opts').addEventListener('click', e => {
    const opt = e.target.closest('.style-opt');
    if (!opt) return;
    booking.style = HAIR_STYLES.find(s => s.id === opt.dataset.id) || null;
    qsa('.style-opt').forEach(o => o.classList.toggle('selected', o === opt));
  });

  el('style-cats').addEventListener('click', e => {
    const btn = e.target.closest('.style-cat-btn');
    if (!btn) return;
    activeCat = btn.dataset.cat;
    qsa('.style-cat-btn').forEach(b => b.classList.toggle('active', b === btn));
    el('style-opts').innerHTML = styleCards();
  });

  renderFooter(true);
}

/* ---------- STEP 3: Stylist ---------- */
function renderStep3() {
  const all = [
    { id: 'any', initials: '✦', name: 'No Preference', role: 'Best available stylist', specialties: ['All services'] },
    ...STYLISTS
  ];

  el('booking-body').innerHTML = `
    <h3 class="step-title">Select a Stylist</h3>
    <p class="step-subtitle">Choose who you'd like to work with, or let us assign the best available.</p>
    <div class="stylist-options" id="stylist-opts">
      ${all.map(s => `
        <div class="stylist-opt ${booking.stylist?.id === s.id ? 'selected' : ''}" data-id="${s.id}">
          <div class="stylist-opt__av">${s.initials}</div>
          <div class="stylist-opt__body">
            <div class="stylist-opt__name">${s.name}</div>
            <div class="stylist-opt__role">${s.role}</div>
            ${s.specialties ? `<div class="stylist-opt__specs">${s.specialties.map(t => `<span class="tag">${t}</span>`).join('')}</div>` : ''}
          </div>
          <div class="stylist-opt__check">✓</div>
        </div>
      `).join('')}
    </div>
  `;

  el('stylist-opts').addEventListener('click', e => {
    const opt = e.target.closest('.stylist-opt');
    if (!opt) return;
    booking.stylist = opt.dataset.id === 'any'
      ? { id: 'any', name: 'No preference' }
      : STYLISTS.find(s => s.id === opt.dataset.id);
    qsa('.stylist-opt').forEach(o => o.classList.toggle('selected', o === opt));
  });

  renderFooter(true);
}

/* ---------- STEP 4: Date & Time ---------- */
function renderStep4() {
  const dates = getAvailableDates();

  function dateGrid() {
    return dates.map(d => {
      const sel      = booking.date && d.toDateString() === booking.date.toDateString();
      const disabled = false;
      return `
        <div class="date-pill ${sel ? 'selected' : ''} ${disabled ? 'disabled' : ''}"
             data-iso="${d.toISOString()}" ${disabled ? 'aria-disabled="true"' : ''}>
          <span class="date-day">${d.toLocaleDateString('en-US',{weekday:'short'})}</span>
          <span class="date-num">${d.getDate()}</span>
        </div>
      `;
    }).join('');
  }

  function timeGrid() {
    if (!booking.date) return '<p style="color:var(--text-muted);font-size:0.88rem">Select a date above to see available times.</p>';
    return ALL_TIMES.map(t => {
      const unavail = Math.random() < 0.2;
      const sel     = booking.time === t && !unavail;
      return `
        <div class="time-pill ${unavail ? 'unavailable' : ''} ${sel ? 'selected' : ''}"
             data-time="${t}" ${unavail ? 'aria-disabled="true"' : ''}>${t}</div>
      `;
    }).join('');
  }

  el('booking-body').innerHTML = `
    <h3 class="step-title">Pick a Date & Time</h3>
    <p class="step-subtitle">Closed Mondays. Greyed-out slots are already booked.</p>
    <div class="date-section">
      <div class="date-grid" id="date-grid">${dateGrid()}</div>
    </div>
    <div class="time-section">
      <h4>Available Times</h4>
      <div class="time-grid" id="time-grid">${timeGrid()}</div>
    </div>
  `;

  el('date-grid').addEventListener('click', e => {
    const pill = e.target.closest('.date-pill:not(.disabled)');
    if (!pill) return;
    booking.date = new Date(pill.dataset.iso);
    booking.time = null;
    el('date-grid').innerHTML = dateGrid();
    el('time-grid').innerHTML = timeGrid();
  });

  el('time-grid').addEventListener('click', e => {
    const pill = e.target.closest('.time-pill:not(.unavailable)');
    if (!pill) return;
    booking.time = pill.dataset.time;
    qsa('.time-pill:not(.unavailable)', el('time-grid')).forEach(p => p.classList.toggle('selected', p === pill));
  });

  renderFooter(true);
}

/* ---------- STEP 5: Details ---------- */
function renderStep5() {
  el('booking-body').innerHTML = `
    <h3 class="step-title">Your Details</h3>
    <p class="step-subtitle">We'll send your confirmation to the email address below.</p>
    <form class="booking-form" id="booking-form" novalidate>
      <div class="form-row">
        <div class="form-group" id="fg-first">
          <label for="b-first">First Name</label>
          <input type="text" id="b-first" placeholder="Jane" autocomplete="given-name" value="${booking.client.firstName||''}">
          <span class="field-error">Please enter your first name.</span>
        </div>
        <div class="form-group" id="fg-last">
          <label for="b-last">Last Name</label>
          <input type="text" id="b-last" placeholder="Doe" autocomplete="family-name" value="${booking.client.lastName||''}">
          <span class="field-error">Please enter your last name.</span>
        </div>
      </div>
      <div class="form-group" id="fg-email">
        <label for="b-email">Email Address</label>
        <input type="email" id="b-email" placeholder="jane@email.com" autocomplete="email" value="${booking.client.email||''}">
        <span class="field-error">Please enter a valid email address.</span>
      </div>
      <div class="form-group" id="fg-phone">
        <label for="b-phone">Phone Number</label>
        <input type="tel" id="b-phone" placeholder="+1 555 000 0000" autocomplete="tel" value="${booking.client.phone||''}">
        <span class="field-error">Please enter your phone number.</span>
      </div>
      <div class="form-group">
        <label for="b-notes">Special Notes
          <span style="color:var(--text-muted);font-weight:400;text-transform:none;letter-spacing:0">(optional)</span>
        </label>
        <textarea id="b-notes" placeholder="Any hair concerns, allergies, or inspiration images…">${booking.client.notes||''}</textarea>
      </div>
    </form>
  `;
  renderFooter(true);
}

/* ---------- CONFIRMATION ---------- */
function renderConfirmation() {
  el('booking-progress').innerHTML = '';
  el('booking-footer').innerHTML   = '';

  const serviceName = booking.service ? booking.service.name : '—';
  const styleName   = booking.style   ? booking.style.name   : 'To be discussed';
  const dateStr     = booking.date    ? fmt(booking.date)    : '—';

  el('booking-body').innerHTML = `
    <div class="booking-confirm">
      <div class="confirm-check">✓</div>
      <h3 class="step-title">Booking Requested!</h3>
      <p class="step-subtitle" style="margin-bottom:0">
        We'll confirm your appointment by email within 30 minutes.
      </p>
      <div class="confirm-summary">
        <div class="confirm-row">
          <span class="confirm-label">Service</span>
          <span class="confirm-val">${serviceName}</span>
        </div>
        <div class="confirm-row">
          <span class="confirm-label">Style</span>
          <span class="confirm-val">${styleName}</span>
        </div>
        <div class="confirm-row">
          <span class="confirm-label">Date</span>
          <span class="confirm-val">${dateStr}</span>
        </div>
        <div class="confirm-row">
          <span class="confirm-label">Time</span>
          <span class="confirm-val">${booking.time || '—'}</span>
        </div>
        <div class="confirm-row">
          <span class="confirm-label">Name</span>
          <span class="confirm-val">${booking.client.firstName} ${booking.client.lastName}</span>
        </div>
      </div>
      <button class="btn btn-gold" onclick="resetBooking()">Book Another Appointment</button>
    </div>
  `;
}

/* ---------- NAVIGATION ---------- */
function renderCurrentStep() {
  renderProgress();
  ({ 1: renderStep1, 2: renderStep2, 3: renderStep4, 4: renderStep5 })[currentStep]?.();
}

function validateStep() {
  if (currentStep === 1 && !booking.service) {
    alert('Please select a service to continue.');
    return false;
  }
  if (currentStep === 2 && !booking.style) {
    alert('Please choose a hair style to continue.');
    return false;
  }
  if (currentStep === 3) {
    if (!booking.date) { alert('Please select a date.'); return false; }
    if (!booking.time) { alert('Please select a time slot.'); return false; }
  }
  if (currentStep === 4) {
    const first = el('b-first') && el('b-first').value.trim();
    const last  = el('b-last')  && el('b-last').value.trim();
    const email = el('b-email') && el('b-email').value.trim();
    const phone = el('b-phone') && el('b-phone').value.trim();
    let ok = true;
    const check = (fgId, valid) => { el(fgId) && el(fgId).classList.toggle('has-error', !valid); if (!valid) ok = false; };
    check('fg-first', !!first);
    check('fg-last',  !!last);
    check('fg-email', !!email && email.includes('@'));
    check('fg-phone', !!phone);
    if (!ok) return false;
    booking.client = { firstName: first, lastName: last, email, phone, notes: el('b-notes') && el('b-notes').value.trim() };
  }
  return true;
}

function nextStep() {
  if (!validateStep()) return;
  if (currentStep < STEPS.length) { currentStep++; renderCurrentStep(); }
  else renderConfirmation();
}

function prevStep() {
  if (currentStep > 1) { currentStep--; renderCurrentStep(); }
}

function resetBooking() {
  Object.assign(booking, { service: null, style: null, stylist: null, date: null, time: null, client: {} });
  currentStep = 1;
  renderCurrentStep();
}

window.resetBooking = resetBooking;

/* ----------------------------------------------------------
   BOOT
---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHamburger();
  initServices();
  initGallery();
  initTestimonials();
  initPricing();
  renderCurrentStep();
  initReveal();
  initHeroCounters();
});

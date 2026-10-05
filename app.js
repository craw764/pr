/* ============================================================
   Nnenny's Hair — App Logic
   ============================================================ */

'use strict';

/* ----------------------------------------------------------
   DATA
---------------------------------------------------------- */
const BRAID_SVG  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c0 0-4 4-4 9s4 9 4 9M12 2c0 0 4 4 4 9s-4 9-4 9M2 12h20"/></svg>`;
const CORNROW_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3c0 9 0 9 7 18M12 3c0 9 0 9 0 18M19 3c0 9 0 9-7 18"/></svg>`;
const NEEDLE_SVG  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
const CURL_SVG    = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4c0 0 4 0 4 8s-4 8-4 8M20 4c0 0-4 0-4 8s4 8 4 8M12 3v18"/></svg>`;
const WAVE_SVG    = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0"/><path d="M2 17c2-4 4-4 6 0s4 4 6 0 4-4 6 0"/></svg>`;
const KNOT_SVG    = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v5M12 17v5M2 12h5M17 12h5"/></svg>`;

const SERVICES = [
  { id: 'cornrows-plain',  name: 'Cornrows (No Extension)', desc: 'Classic, neat cornrows styled close to the scalp using your natural hair only.',          duration: '1–2 hrs',   price: '£20',  icon: CORNROW_SVG },
  { id: 'cornrows-ext',    name: 'Cornrows (With Extension)',desc: 'Sleek cornrows extended with braiding hair for added length and fuller coverage.',         duration: '2–3 hrs',   price: '£50',  icon: CORNROW_SVG },
  { id: 'knotless-braids', name: 'Knotless Braids',         desc: 'Tension-free individual braids that start with your own hair for a natural, pain-free finish.', duration: '3–5 hrs', price: '£100', icon: BRAID_SVG  },
  { id: 'box-braids',      name: 'Box Braids',              desc: 'Timeless protective style with clean square partings and your choice of length and thickness.', duration: '3–5 hrs', price: '£80',  icon: BRAID_SVG  },
  { id: 'boho-braids',     name: 'Boho Braids',             desc: 'Romantic knotless braids with loose, curly ends for a free-spirited, effortless look.',   duration: '4–6 hrs',   price: '£110', icon: CURL_SVG   },
  { id: 'goddess-braids',  name: 'Goddess Braids',          desc: 'Thick, bold cornrow-style braids often worn as an updo or swept back style.',              duration: '2–3 hrs',   price: '£100', icon: CORNROW_SVG},
  { id: 'ghana-weaving',   name: 'Ghana Weaving',           desc: 'Intricate feed-in cornrows starting small at the hairline and gradually increasing in size.', duration: '2–4 hrs', price: '£70',  icon: WAVE_SVG   },
  { id: 'french-curls',    name: 'French Curls',            desc: 'Beautiful bouncy curls created using a crochet hook for a voluminous, defined look.',       duration: '2–3 hrs',   price: '£100', icon: CURL_SVG   },
  { id: 'sew-in',          name: 'Sew In',                  desc: 'Weft hair sewn onto cornrowed natural hair for a seamless, long-lasting protective style.',  duration: '2–4 hrs',   price: '£85',  icon: NEEDLE_SVG },
  { id: 'crochet',         name: 'Crochet',                 desc: 'Pre-looped hair attached with a crochet needle to cornrow base — quick and versatile.',     duration: '2–3 hrs',   price: '£50',  icon: KNOT_SVG   },
  { id: 'mens-cornrows',   name: "Men's Cornrows",          desc: 'Sharp, clean cornrows tailored for men — straight backs, designs, or curved patterns.',     duration: '1–2 hrs',   price: '£30',  icon: CORNROW_SVG},
  { id: 'miracle-knots',   name: 'Miracle Knots Braids',   desc: 'Invisible-knot individual braids that look as if they grow directly from the scalp.',        duration: '3–5 hrs',   price: '£100', icon: KNOT_SVG   }
];

const HAIR_STYLES = [
  { id: 'cornrows-back',    category: 'Cornrows', name: 'Straight Back',        desc: 'Clean rows swept straight to the back',      gradient: 'linear-gradient(145deg,#150a00 0%,#3d1f00 55%,#7a4010 100%)' },
  { id: 'cornrows-design',  category: 'Cornrows', name: 'Cornrow Design',       desc: 'Custom pattern or curved design cornrows',    gradient: 'linear-gradient(145deg,#0a0510 0%,#25105a 55%,#5020a0 100%)' },
  { id: 'cornrows-updo',    category: 'Cornrows', name: 'Cornrow Updo',         desc: 'Cornrows gathered into an elegant updo',      gradient: 'linear-gradient(145deg,#1a0800 0%,#4a1800 55%,#8b3510 100%)' },
  { id: 'knotless-medium',  category: 'Braids',   name: 'Knotless — Medium',    desc: 'Medium-sized, shoulder to waist length',      gradient: 'linear-gradient(145deg,#2a1800 0%,#6b3c00 50%,#c9a96e 100%)' },
  { id: 'knotless-small',   category: 'Braids',   name: 'Knotless — Small',     desc: 'Fine individual braids for a delicate look',  gradient: 'linear-gradient(145deg,#1a1000 0%,#5a3000 50%,#a07030 100%)' },
  { id: 'box-braids-large', category: 'Braids',   name: 'Box Braids — Large',   desc: 'Bold, chunky box braids, shoulder length+',   gradient: 'linear-gradient(145deg,#0f0500 0%,#3d1500 50%,#7a3000 100%)' },
  { id: 'boho-style',       category: 'Braids',   name: 'Boho Braids',          desc: 'Knotless with loose curly ends woven in',     gradient: 'linear-gradient(145deg,#200800 0%,#6b2800 50%,#c97040 100%)' },
  { id: 'goddess-style',    category: 'Braids',   name: 'Goddess Braids',       desc: 'Thick, bold braids as an updo or swept back', gradient: 'linear-gradient(145deg,#150d00 0%,#4a2800 50%,#8b5500 100%)' },
  { id: 'ghana-feedin',     category: 'Weaving',  name: 'Ghana Feed-In',        desc: 'Feed-in cornrows, small to large gradient',   gradient: 'linear-gradient(145deg,#0a0a1a 0%,#1a1a4a 50%,#3535aa 100%)' },
  { id: 'french-curls-st',  category: 'Curls',    name: 'French Curls',         desc: 'Bouncy defined curls, crochet method',        gradient: 'linear-gradient(145deg,#1a0500 0%,#7a1500 50%,#c94010 100%)' },
  { id: 'miracle-knots-st', category: 'Braids',   name: 'Miracle Knots',        desc: 'Invisible knot braids — looks grown from scalp', gradient: 'linear-gradient(145deg,#1c1c1c 0%,#444 55%,#8a8a8a 100%)' },
  { id: 'crochet-st',       category: 'Curls',    name: 'Crochet Style',        desc: 'Voluminous crochet — locs, curls or waves',   gradient: 'linear-gradient(145deg,#0f0f0f 0%,#222 50%,#3d3530 100%)' }
];

const STYLISTS = [
  { id: 'isabelle', initials: 'IC', name: 'Isabelle Chen',  role: 'Creative Director', bio: 'With 14 years across London and Paris, Isabelle specialises in transformative colour and editorial looks.', specialties: ['Balayage', 'Colour Correction', 'Editorial'], days: [2,3,4,5,6] },
  { id: 'marcus',   initials: 'ML', name: 'Marcus Laurent', role: 'Master Stylist',     bio: 'A precision cut specialist trained at the Vidal Sassoon Academy. Marcus has an eye for geometry and structure.', specialties: ["Precision Cuts", "Men's Grooming", 'Texture'], days: [2,4,5,6,0] },
  { id: 'sofia',    initials: 'SR', name: 'Sofia Reyes',    role: 'Colour Specialist',  bio: "Sofia's balayage work has featured in Vogue and Harper's Bazaar. She creates effortlessly beautiful, lived-in colour.", specialties: ['Balayage', 'Highlights', 'Toning'], days: [3,4,5,6,0] },
  { id: 'james',    initials: 'JA', name: 'James Adeyemi',  role: 'Texture Expert',     bio: 'A passionate advocate for natural texture. James specialises in curly, coily, and afro hair styling.', specialties: ['Curly Hair', 'Natural Styling', 'Extensions'], days: [2,3,5,6] }
];

const GALLERY = [
  { category: 'Cornrows',  label: 'Straight Back Cornrows',  gradient: 'linear-gradient(145deg,#150a00 0%,#3d1f00 45%,#8b4a10 100%)' },
  { category: 'Braids',    label: 'Knotless Braids',         gradient: 'linear-gradient(145deg,#2a1800 0%,#6b3c00 50%,#c9a96e 100%)' },
  { category: 'Braids',    label: 'Box Braids',              gradient: 'linear-gradient(145deg,#0f0500 0%,#3d1500 50%,#7a3000 100%)' },
  { category: 'Braids',    label: 'Boho Braids with Curls',  gradient: 'linear-gradient(145deg,#200800 0%,#6b2800 50%,#c97040 100%)' },
  { category: 'Weaving',   label: 'Ghana Feed-In Weaving',   gradient: 'linear-gradient(145deg,#0a0a1a 0%,#1a1a4a 50%,#3535aa 100%)' },
  { category: 'Braids',    label: 'Goddess Braids Updo',     gradient: 'linear-gradient(145deg,#150d00 0%,#4a2800 50%,#8b5500 100%)' },
  { category: 'Curls',     label: 'French Curls',            gradient: 'linear-gradient(145deg,#1a0500 0%,#7a1500 50%,#c94010 100%)' },
  { category: 'Cornrows',  label: 'Cornrow Design Pattern',  gradient: 'linear-gradient(145deg,#0a0510 0%,#25105a 50%,#5020a0 100%)' },
  { category: 'Braids',    label: 'Miracle Knots Braids',    gradient: 'linear-gradient(145deg,#1c1c1c 0%,#444 55%,#8a8a8a 100%)' },
  { category: 'Curls',     label: 'Crochet Volume Style',    gradient: 'linear-gradient(145deg,#0f0f0f 0%,#282828 50%,#3d3530 100%)' }
];

const TESTIMONIALS = [
  { name: 'Adaeze N.',    service: 'Knotless Braids',   rating: 5, text: "Nnenny is an absolute genius with braids. My knotless braids were so neat and lasted weeks. No tension, no pain — just perfect. I won't go anywhere else." },
  { name: 'Temi A.',      service: 'Boho Braids',       rating: 5, text: 'I asked for boho braids for my birthday and she absolutely delivered. The curls were so beautiful and everyone kept asking where I got them done.' },
  { name: 'Marcus D.',    service: "Men's Cornrows",    rating: 5, text: 'Best cornrows I have had in Bournemouth by far. Clean parts, tight but not painful, and they lasted over three weeks. Will definitely be back.' },
  { name: 'Chisom E.',    service: 'Ghana Weaving',     rating: 5, text: 'My Ghana weaving was immaculate — the feed-in was so smooth and the pattern was exactly what I wanted. Nnenny really takes her time and cares about the result.' },
  { name: 'Fatima B.',    service: 'Crochet',           rating: 5, text: 'I was a bit nervous about crochet for the first time but she made me feel so comfortable. The finish looked so natural and full. Absolutely loved it.' },
  { name: 'Jasmine O.',   service: 'Miracle Knots Braids', rating: 5, text: 'These miracle knots are everything! They look completely natural, like they are growing from my scalp. I have had so many compliments. Amazing work.' }
];

const PRICING = [
  {
    category: 'Cornrows',
    items: [
      { name: 'Cornrows (No Extension)',  price: 'from £20' },
      { name: 'Cornrows (With Extension)',price: 'from £50' },
      { name: "Men's Cornrows",           price: 'from £30' },
      { name: 'Goddess Braids',           price: 'from £100' }
    ]
  },
  {
    category: 'Individual Braids',
    items: [
      { name: 'Knotless Braids',          price: 'from £100', note: 'Hair included' },
      { name: 'Box Braids',               price: 'from £80',  note: 'Hair included' },
      { name: 'Boho Braids',              price: 'from £110', note: 'Hair included' },
      { name: 'Miracle Knots Braids',     price: 'from £100', note: 'Hair included' }
    ]
  },
  {
    category: 'Weaving & Curls',
    items: [
      { name: 'Ghana Weaving',            price: 'from £70' },
      { name: 'French Curls',             price: 'from £100' },
      { name: 'Sew In',                   price: 'from £85', note: 'Hair extra' },
      { name: 'Crochet',                  price: 'from £50', note: 'Hair extra' }
    ]
  },
  {
    category: 'Home Visit',
    items: [
      { name: 'Home Visit Surcharge',     price: '+£20', note: 'Added to any service' },
      { name: 'Travel Area',              price: 'Bournemouth & surrounding', isFree: true }
    ]
  },
  {
    category: 'Fees & Policies',
    items: [
      { name: 'Late Arrival (15–29 min)', price: '+£10', note: 'Added to service cost' },
      { name: 'Late Arrival (30+ min)',   price: 'Appointment cancelled', note: 'No charge if cancelled by us' },
      { name: 'Cancellation (< 24 hrs)', price: 'No charge', note: 'Please give as much notice as possible' }
    ]
  }
];

/* ----------------------------------------------------------
   BOOKING STATE
---------------------------------------------------------- */
const booking = { service: null, style: null, location: null, date: null, time: null, client: {} };

const STEPS = [
  { label: 'Service' },
  { label: 'Style' },
  { label: 'Location' },
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
function initHairstyles() {
  const listEl = el('hairstyles-list');
  if (!listEl) return;
  listEl.innerHTML = SERVICES.map(s => `
    <div class="hairstyle-item reveal">
      <div class="hairstyle-item__icon">${s.icon}</div>
      <div class="hairstyle-item__name">${s.name}</div>
      <div class="hairstyle-item__price">${s.price}+</div>
      <a href="#booking" class="hairstyle-item__cta">Book</a>
    </div>
  `).join('');
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

/* ---------- STEP 3: Location ---------- */
function renderStep3() {
  const LOCATIONS = [
    {
      id: 'salon',
      title: 'Salon Visit',
      subtitle: 'No extra charge',
      detail: '46 Northcote Road, Bournemouth BH1 4SQ',
      surcharge: 0,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
    },
    {
      id: 'home',
      title: 'Home Visit',
      subtitle: '+£20 surcharge',
      detail: 'We come to you — provide your address in the next step',
      surcharge: 20,
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`
    }
  ];

  el('booking-body').innerHTML = `
    <h3 class="step-title">Where Would You Like Your Appointment?</h3>
    <p class="step-subtitle">Choose between visiting the salon or having us come to you.</p>
    <div class="location-options" id="location-opts">
      ${LOCATIONS.map(loc => `
        <div class="location-opt ${booking.location === loc.id ? 'selected' : ''}" data-id="${loc.id}">
          <div class="location-opt__icon">${loc.icon}</div>
          <div class="location-opt__body">
            <div class="location-opt__title">${loc.title}</div>
            <div class="location-opt__sub ${loc.surcharge ? 'surcharge' : ''}">${loc.subtitle}</div>
            <div class="location-opt__detail">${loc.detail}</div>
          </div>
          <div class="location-opt__check">✓</div>
        </div>
      `).join('')}
    </div>
  `;

  el('location-opts').addEventListener('click', e => {
    const opt = e.target.closest('.location-opt');
    if (!opt) return;
    booking.location = opt.dataset.id;
    qsa('.location-opt').forEach(o => o.classList.toggle('selected', o === opt));
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

    <div class="policy-notice">
      <div class="policy-notice__icon">⏱</div>
      <div class="policy-notice__body">
        <div class="policy-notice__title">Lateness Policy</div>
        <div class="policy-notice__text">
          Arriving <strong>15–29 minutes late</strong> incurs a <strong>£10 surcharge</strong>.
          Arriving <strong>30+ minutes late</strong> will result in the appointment being cancelled.
          Please contact us if you are running late.
        </div>
      </div>
    </div>

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
        <input type="tel" id="b-phone" placeholder="+44 7700 000000" autocomplete="tel" value="${booking.client.phone||''}">
        <span class="field-error">Please enter your phone number.</span>
      </div>
      ${booking.location === 'home' ? `
      <div class="form-group" id="fg-address">
        <label for="b-address">Home Address</label>
        <textarea id="b-address" rows="2" placeholder="Full address including postcode…" autocomplete="street-address">${booking.client.address||''}</textarea>
        <span class="field-error">Please enter your home address.</span>
      </div>
      ` : ''}
      <div class="form-group">
        <label for="b-notes">Special Notes
          <span style="color:var(--text-muted);font-weight:400;text-transform:none;letter-spacing:0">(optional)</span>
        </label>
        <textarea id="b-notes" placeholder="Any hair concerns, allergies, or inspiration images…">${booking.client.notes||''}</textarea>
      </div>
      <div class="form-group" id="fg-policy">
        <label class="checkbox-label">
          <input type="checkbox" id="b-policy" ${booking.client.policyAccepted ? 'checked' : ''}>
          <span>I understand that arriving 15–29 minutes late incurs a <strong>£10 charge added to my service cost</strong>, and arriving 30+ minutes late will result in my appointment being cancelled.</span>
        </label>
        <span class="field-error">Please acknowledge the lateness policy.</span>
      </div>
    </form>
  `;
  renderFooter(true);
}

/* ---------- CONFIRMATION ---------- */
function sendBookingEmail(details) {
  const message = `
NEW APPOINTMENT BOOKING — Nnenny's Hair
========================================
Client Name:   ${details.clientName}
Email:         ${details.clientEmail}
Phone:         ${details.clientPhone}
----------------------------------------
Service:       ${details.serviceName} (${details.servicePrice})
Style:         ${details.styleName}
Location:      ${details.locationText}
Address:       ${details.address || 'N/A'}
Date:          ${details.dateStr}
Time:          ${details.time}
========================================
  `.trim();

  emailjs.send('service_84rsf7z', 'template_x0tgctl', {
    to_email:      'danclaude234@gmail.com',
    subject:       `New Booking: ${details.clientName} — ${details.dateStr} ${details.time}`,
    message,
    client_name:   details.clientName,
    client_email:  details.clientEmail,
    client_phone:  details.clientPhone,
    service:       details.serviceName,
    style:         details.styleName,
    location:      details.locationText,
    address:       details.address || 'N/A',
    date:          details.dateStr,
    time:          details.time,
    service_price: details.servicePrice
  }).catch(() => {});
}

function renderConfirmation() {
  el('booking-progress').innerHTML = '';
  el('booking-footer').innerHTML   = '';

  const serviceName  = booking.service  ? booking.service.name  : '—';
  const styleNameVal = booking.style    ? booking.style.name    : 'To be discussed';
  const dateStr      = booking.date     ? fmt(booking.date)     : '—';
  const isHome       = booking.location === 'home';
  const locationText = isHome ? 'Home Visit (+£20)' : 'Salon — 46 Northcote Rd, BH1 4SQ';
  const styleName    = styleNameVal;

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
          <span class="confirm-label">Location</span>
          <span class="confirm-val">${locationText}</span>
        </div>
        ${isHome && booking.client.address ? `
        <div class="confirm-row">
          <span class="confirm-label">Address</span>
          <span class="confirm-val">${booking.client.address}</span>
        </div>` : ''}
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

  sendBookingEmail({
    clientName:   `${booking.client.firstName} ${booking.client.lastName}`,
    clientEmail:  booking.client.email,
    clientPhone:  booking.client.phone,
    serviceName,
    styleName,
    locationText,
    address:      booking.client.address,
    dateStr,
    time:         booking.time,
    servicePrice: booking.service ? booking.service.price : '—'
  });
}

/* ---------- NAVIGATION ---------- */
function renderCurrentStep() {
  renderProgress();
  ({ 1: renderStep1, 2: renderStep2, 3: renderStep3, 4: renderStep4, 5: renderStep5 })[currentStep]?.();
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
  if (currentStep === 3 && !booking.location) {
    alert('Please choose a location to continue.');
    return false;
  }
  if (currentStep === 4) {
    if (!booking.date) { alert('Please select a date.'); return false; }
    if (!booking.time) { alert('Please select a time slot.'); return false; }
  }
  if (currentStep === 5) {
    const first   = el('b-first')   && el('b-first').value.trim();
    const last    = el('b-last')    && el('b-last').value.trim();
    const email   = el('b-email')   && el('b-email').value.trim();
    const phone   = el('b-phone')   && el('b-phone').value.trim();
    const address = booking.location === 'home' ? (el('b-address') && el('b-address').value.trim()) : 'salon';
    let ok = true;
    const check = (fgId, valid) => { el(fgId) && el(fgId).classList.toggle('has-error', !valid); if (!valid) ok = false; };
    check('fg-first',   !!first);
    check('fg-last',    !!last);
    check('fg-email',   !!email && email.includes('@'));
    check('fg-phone',   !!phone);
    if (booking.location === 'home') check('fg-address', !!address);
    const policyAccepted = el('b-policy') && el('b-policy').checked;
    check('fg-policy', !!policyAccepted);
    if (!ok) return false;
    booking.client = { firstName: first, lastName: last, email, phone, address: address !== 'salon' ? address : '', notes: el('b-notes') && el('b-notes').value.trim(), policyAccepted: true };
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
  Object.assign(booking, { service: null, style: null, location: null, date: null, time: null, client: {} });
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
  initHairstyles();
  initTestimonials();
  initPricing();
  renderCurrentStep();
  initReveal();
  initHeroCounters();
});

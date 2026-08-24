/* ============ YaVa Motion Pictures ============ */
(function () {
  'use strict';

  // ---------- DATA ----------
  const PROJECTS = [
    { title: 'Jogiya', id: '1wf4_r-2KuQ', cat: 'music', catLabel: 'Music Video' },
    { title: 'Chhalni', id: 'GxViLxI9Yz8', cat: 'music', catLabel: 'Music Video' },
    { title: 'Tu Mera', id: 'j1OYIIWrYvM', cat: 'music', catLabel: 'Music Video' },
    { title: 'O Sanam', id: '5Sf0lhWELhI', cat: 'music', catLabel: 'Music Video' },
    { title: 'Bartan Hai Bartan Hai', id: 'gFgucNHB1D8', cat: 'web', catLabel: 'Web Series' },
    { title: 'The Spirit', id: 'txORsYjVqyQ', cat: 'doc', catLabel: 'Documentary' },
    { title: 'Reverb Rock', id: 'Uu6LrQ14tBU', cat: 'exp', catLabel: 'Experimental' },
    { title: 'A Fluctuating Letter From The Green', id: 'xcQydPbFNuk', cat: 'exp', catLabel: 'Experimental' },
    { title: 'Forestall', id: 'zKM_AfBOEzM', cat: 'exp', catLabel: 'Experimental' },
    { title: 'A Trial For A Human Experience', id: 'wee2Ll1BnLE', cat: 'exp', catLabel: 'Experimental' },
    { title: 'To Fill An Infinite Void', id: '9UDlsga5L5w', cat: 'ins', catLabel: 'Instrumental' },
    { title: 'Dilemma', id: 'CwGknHjXros', cat: 'ins', catLabel: 'Instrumental' },
    { title: 'Guided by Fate', id: 'hnCHMVQStpo', cat: 'ins', catLabel: 'Instrumental' },
    { title: 'Same Dirt', id: 'ykccPgj27XU', cat: 'ins', catLabel: 'Instrumental' },
    { title: '3 RCB Fans', id: 'tmJ4RxsCfG8', cat: 'other', catLabel: 'Other' },
    { title: 'Devil', id: 'V3OD4TK4ank', cat: 'other', catLabel: 'Other' }
  ];

  const CREW = [
    { name: 'Prasoon Kumar', role: 'Filmmaker & Composer', desc: 'Founder. Directs films and scores originals for every YaVa production.', url: 'https://www.linkedin.com/in/prasoon-kumar-946bb922b' },
    { name: 'Vartul', role: 'Director', desc: 'Shapes narrative and performance across music videos and short films.', url: 'https://www.linkedin.com/in/vartulvashu' },
    { name: 'Vishal Vaibhav', role: 'Cinematographer', desc: 'Author of the studio\u2019s visual language \u2014 light, motion and lens.', url: 'https://www.linkedin.com/in/vishal-vaibhav-273344154' },
    { name: 'Siddhant Mohanty', role: 'Music Producer', desc: 'Builds sonic worlds \u2014 scoring, mixing and sound design.', url: 'https://www.linkedin.com/in/siddhantmohanty-' },
    { name: 'Waivasvata Manu', role: 'Filmmaker', desc: 'Experimental cinema and long-form documentary direction.', url: 'https://www.linkedin.com/in/waivasvata-manu-824921164' },
    { name: 'Vishesh Gandhi', role: 'Creative Director', desc: 'Concept, brand and the through-line of every campaign.', url: 'https://www.linkedin.com/in/visheshgandhi09' }
  ];

  const MENTORS = [
    { name: 'Waivasvata Manu', role: 'Film Editor', org: '', img: 'https://i.postimg.cc/tCQcq2zW/Whats-App-Image-2026-07-03-at-6-22-14-PM.jpg' },
    { name: 'Chidananda S Naik', role: 'National Award-Winning Film Director', org: '', img: 'https://i.postimg.cc/B6PhsKPW/Whats-App-Image-2026-07-03-at-5-19-06-PM.jpg' },
    { name: 'Vishesh Gandhi', role: 'Cinematographer', org: '', img: 'https://i.postimg.cc/RZPGHRwX/Whats-App-Image-2026-07-03-at-5-19-05-PM.jpg' },
    { name: 'Manoj Gowda', role: 'Film Editor & Executive Producer', org: '', img: 'https://i.postimg.cc/9FbY6pg9/Whats-App-Image-2026-07-03-at-5-18-56-PM.jpg' }
  ];


  const LOGOS = ['SONY MUSIC','T-SERIES','RED BULL','MTV','NETFLIX','VICE','ROLLING STONE','ZEE','SAREGAMA','A24'];

  const TESTIMONIALS = [
    { text: 'YaVa translated the mood of the record into visuals I didn\u2019t know were possible. Every frame felt scored.', name: 'Aditi Rao', co: 'Independent Artist' },
    { text: 'A rare studio that treats a music video like cinema. Craft first, deadlines respected, ego absent.', name: 'Kabir Menon', co: 'Sony Music' },
    { text: 'The documentary they cut for us traveled to three festivals. Their taste is the reason.', name: 'Nikhil Shah', co: 'Producer, Vice' }
  ];

  // ---------- RENDER ----------
  function renderProjects(filter) {
    const grid = document.getElementById('projectGrid');
    if (!grid) return;
    const list = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === filter);
    grid.innerHTML = list.map(p => `
      <a class="card reveal" data-category="${p.cat}" href="https://youtu.be/${p.id}" target="_blank" rel="noopener noreferrer">
        <div class="thumb">
          <img src="https://img.youtube.com/vi/${p.id}/maxresdefault.jpg" alt="${p.title}" loading="lazy" />
          <div class="play" aria-hidden="true"></div>
        </div>
        <div class="card-body">
          <div class="card-cat">${p.catLabel}</div>
          <div class="card-title">${p.title}</div>
        </div>
      </a>
    `).join('');
    grid.querySelectorAll('img').forEach(img => {
      img.onerror = function () {
        if (img.src.includes('maxresdefault')) img.src = img.src.replace('maxresdefault', 'hqdefault');
      };
    });
    observeReveals(grid);
    attachHoverTargets(grid);
  }

  function placeholderPortrait(seed) {
    // deterministic elegant placeholder via unsplash source
    const pool = [
      'photo-1531123897727-8f129e1688ce','photo-1500048993953-d23a436266cf','photo-1544005313-94ddf0286df2',
      'photo-1507003211169-0a1dd7228f2d','photo-1524504388940-b1c1722653e1','photo-1502823403499-6ccfcf4fb453',
      'photo-1573496359142-b8d87734a5a2','photo-1519085360753-af0119f7cbe7','photo-1508214751196-bcfd4ca60f91'
    ];
    const p = pool[seed % pool.length];
    return `https://images.unsplash.com/${p}?auto=format&fit=crop&w=800&q=80`;
  }

  function renderCrew() {
    const grid = document.getElementById('crewGrid');
    if (!grid) return;
    grid.innerHTML = CREW.map((c, i) => `
      <article class="lux-card reveal">
        <div class="lux-photo">
          <img src="${placeholderPortrait(i)}" alt="${c.name}" loading="lazy" />
        </div>
        <div class="lux-body">
          <div class="lux-name">${c.name}</div>
          <div class="lux-role">${c.role}</div>
          <p class="lux-desc">${c.desc}</p>
          <a class="lux-link" href="${c.url}" target="_blank" rel="noopener noreferrer">LinkedIn →</a>
        </div>
      </article>
    `).join('');
    observeReveals(grid);
    attachHoverTargets(grid);
  }

  function renderMentors() {
    const grid = document.getElementById('mentorsGrid');
    if (!grid) return;
    grid.innerHTML = MENTORS.map((m, i) => `
      <article class="lux-card reveal">
        <div class="lux-photo">
          <img src="${m.img || placeholderPortrait(i + 3)}" alt="${m.name}" loading="lazy" />
        </div>
        <div class="lux-body">
          <div class="lux-name">${m.name}</div>
          <div class="lux-role">${m.role}</div>
          <div class="lux-org">${m.org}</div>
          <a class="lux-link" href="#" target="_blank" rel="noopener noreferrer">LinkedIn →</a>
        </div>
      </article>
    `).join('');
    observeReveals(grid);
    attachHoverTargets(grid);
  }

  function renderLogos() {
    const track = document.getElementById('logosTrack');
    if (!track) return;
    const html = LOGOS.map(l => `<div class="logo-item">${l}</div>`).join('');
    track.innerHTML = html + html; // duplicate for seamless loop
  }

  function renderTestimonials() {
    const grid = document.getElementById('testiGrid');
    if (!grid) return;
    grid.innerHTML = TESTIMONIALS.map((t, i) => `
      <article class="testi-card reveal">
        <div class="testi-quote">&ldquo;</div>
        <p class="testi-text">${t.text}</p>
        <div class="testi-stars">★★★★★</div>
        <div class="testi-person">
          <div class="testi-avatar"><img src="${placeholderPortrait(i + 7)}" alt="${t.name}" loading="lazy" /></div>
          <div>
            <div class="testi-name">${t.name}</div>
            <div class="testi-co">${t.co}</div>
          </div>
        </div>
      </article>
    `).join('');
    observeReveals(grid);
    attachHoverTargets(grid);
  }

  function initCounters() {
    const nodes = document.querySelectorAll('[data-target]');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        const el = en.target;
        const target = parseInt(el.dataset.target, 10) || 0;
        const dur = 1400; const start = performance.now();
        function tick(now) {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased).toString();
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    }, { threshold: 0.4 });
    nodes.forEach(n => obs.observe(n));
  }

  // ---------- CURSOR ----------
  function initCursor() {
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    if (!dot || !ring) return;
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    function loop() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    }
    loop();
  }

  function attachHoverTargets(scope) {
    const ring = document.querySelector('.cursor-ring');
    if (!ring) return;
    (scope || document).querySelectorAll('a, button, .tab, input, textarea').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('hover'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
    });
  }

  // ---------- NAV ----------
  function initNav() {
    const nav = document.getElementById('nav');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href').slice(1);
        const t = document.getElementById(id);
        if (t) {
          e.preventDefault();
          t.scrollIntoView({ behavior: 'smooth', block: 'start' });
          closeMobile();
        }
      });
    });

    // Active section highlight
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    const sectionIds = Array.from(navLinks).map(a => a.getAttribute('href').slice(1));
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          const id = en.target.id;
          navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(s => spy.observe(s));

    const burger = document.getElementById('hamburger');
    const overlay = document.getElementById('mobileOverlay');
    burger.addEventListener('click', () => {
      const open = burger.classList.toggle('open');
      overlay.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    function closeMobile() {
      burger.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // ---------- REVEAL ----------
  let io;
  function observeReveals(scope) {
    if (!io) {
      io = new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
      }, { threshold: 0.15 });
    }
    (scope || document).querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
  }

  // ---------- HERO PARALLAX ----------
  function initParallax() {
    const title = document.getElementById('heroTitle');
    const b1 = document.querySelector('.bg-radial-1');
    const b2 = document.querySelector('.bg-radial-2');
    const hero = document.getElementById('hero');
    if (!hero || !title) return;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    hero.addEventListener('mousemove', e => {
      const r = hero.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 30;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 30;
    });
    hero.addEventListener('mouseleave', () => { tx = 0; ty = 0; });
    function loop() {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      title.style.transform = `translate(${cx * 0.5}px, ${cy * 0.5}px)`;
      if (b1) b1.style.transform = `translate(${cx * 0.2}px, ${cy * 0.2}px)`;
      if (b2) b2.style.transform = `translate(${-cx * 0.2}px, ${-cy * 0.2}px)`;
      requestAnimationFrame(loop);
    }
    loop();
  }

  // ---------- TICKER ----------
  function initTicker() {
    const track = document.getElementById('tickerTrack');
    if (!track) return;
    const span = track.querySelector('span');
    if (!span) return;
    // Duplicate enough times to fill 2x viewport for seamless loop
    const clones = 8;
    for (let i = 0; i < clones; i++) track.appendChild(span.cloneNode(true));
  }

  // ---------- TABS ----------
  function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    const grid = document.getElementById('projectGrid');
    tabs.forEach(t => t.addEventListener('click', () => {
      tabs.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      grid.classList.add('fading');
      setTimeout(() => {
        renderProjects(t.dataset.cat);
        grid.classList.remove('fading');
      }, 260);
    }));
  }

  // ---------- FORM ----------
  function initForm() {
    const btn = document.getElementById('sendBtn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const name = document.getElementById('cf-name').value.trim();
      const email = document.getElementById('cf-email').value.trim();
      const msg = document.getElementById('cf-msg').value.trim();
      if (!name || !email || !msg) {
        btn.textContent = 'Please fill all fields';
        setTimeout(() => btn.textContent = 'Send Proposal →', 1800);
        return;
      }
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
      window.location.href = `mailto:studio@yavamotionpictures.com?subject=New%20Project%20Inquiry&body=${body}`;
      btn.textContent = 'Opening email…';
      setTimeout(() => btn.textContent = 'Send Proposal →', 2500);
    });
  }

  // ---------- INIT ----------
  document.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');
    renderCrew();
    renderMentors();
    renderLogos();
    renderTestimonials();
    initCounters();
    // cursor removed
    initNav();
    initTicker();
    initTabs();
    initForm();
    initParallax();
    observeReveals(document);
    // attachHoverTargets removed with cursor
  });
})();

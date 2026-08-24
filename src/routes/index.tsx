import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>YaVa Motion Pictures — Film · Music · Experimental Cinema</title>
<meta name="description" content="YaVa Motion Pictures is an independent film and music production studio crafting music videos, documentaries, web series and experimental cinema." />
<meta property="og:title" content="YaVa Motion Pictures" />
<meta property="og:description" content="Stories that burn through the dark. Film · Music · Experimental Cinema." />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="/style.css" />
</head>
<body>


<nav class="nav" id="nav">
  <a href="#hero" class="nav-brand"><span class="brand-text">YaVa Motion Pictures</span></a>
  <ul class="nav-links">
    <li><a href="#hero">Home</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#team">Team</a></li>
    <li><a href="#mentors">Mentors</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <button class="hamburger" id="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>

<div class="mobile-overlay" id="mobileOverlay">
  <ul>
    <li><a href="#hero">Home</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#team">Team</a></li>
    <li><a href="#mentors">Mentors</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</div>

<!-- HERO -->
<section id="hero" class="hero">
  <a href="#projects" class="hero-link" aria-label="View projects">
    <div class="hero-bg hero-image"></div>
  </a>
  <div class="ticker" aria-hidden="true">
    <div class="ticker-track" id="tickerTrack">
      <span>Film · Music · Experimental Cinema · Documentary · Web Series · Original Scores · </span>
    </div>
  </div>
</section>


<!-- PROJECTS -->
<section id="projects" class="section">
  <div class="section-head reveal center">
    <div class="section-num gold"><br/></div>
    <h2 class="section-title">PROJECTS</h2>
    <div class="gold-line center-line"></div>
  </div>

  <div class="tabs reveal" id="tabs">
    <button class="tab active" data-cat="all">All</button>
    <button class="tab" data-cat="music">Music Videos</button>
    <button class="tab" data-cat="web">Web Series</button>
    <button class="tab" data-cat="doc">Documentary</button>
    <button class="tab" data-cat="exp">Experimental</button>
    <button class="tab" data-cat="ins">Instrumental</button>
    <button class="tab" data-cat="other">Other</button>
  </div>

  <div class="grid projects" id="projectGrid"></div>
</section>

<!-- ABOUT -->
<section id="about" class="section about">
  <div class="section-head reveal center">
    <div class="section-num gold"><br/></div>
    <h2 class="section-title">ABOUT US</h2>
    <div class="gold-line center-line"></div>
  </div>
  <div class="about-grid">
    <div class="about-left reveal">
      <p class="about-lede">YaVa Motion Pictures is an independent film and music production studio crafting cinematic music videos, documentaries, web series and experimental cinema — built on craft, taste, and a refusal to compromise.</p>
      <div class="counter-row">
        <div class="counter"><span class="count" data-target="8">0</span><span class="plus">+</span><div class="counter-label">Years of Craft</div></div>
        <div class="counter"><span class="count" data-target="40">0</span><span class="plus">+</span><div class="counter-label">Productions</div></div>
        <div class="counter"><span class="count" data-target="12">0</span><span class="plus">+</span><div class="counter-label">Collaborators</div></div>
      </div>
    </div>
    <div class="about-right reveal">
      <div class="about-image">
        <img src="/__l5e/assets-v1/3f0eee68-d3a0-46a2-ab60-45a9be5644f9/about-crew.jpg" alt="YaVa crew on set with camera dolly" loading="lazy" />
        <div class="about-image-glow"></div>
      </div>
    </div>
  </div>

  <div class="statement reveal">
    <h3 class="statement-title">Behind the Lens,<br/><span class="gold-text">Ahead of the Curve.</span></h3>
    <p class="statement-sub">We treat every project as a piece of cinema — from a 90-second music video to a feature-length documentary. Small crew, obsessive detail, uncompromising taste.</p>
    <ul class="gold-bullets">
      <li>Original scores composed in-house.</li>
      <li>Cinematographer-led visual language.</li>
      <li>Post-production finished to festival standard.</li>
    </ul>
    <a href="#contact" class="story-underline">Work with the studio</a>
  </div>
</section>

<!-- ACHIEVEMENTS -->
<section id="achievements" class="section achievements">
  <div class="section-head reveal center">
    <div class="section-num gold"><br/></div>
    <h2 class="section-title">Milestones &amp; Honors</h2>
  </div>
  <div class="ach-grid">
    <div class="ach-card reveal">
      <div class="ach-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 4h4l2 3h4l2-3h4v5c0 4-3 7-8 7s-8-3-8-7V4z"/><path d="M12 16v4M8 22h8"/></svg>
      </div>
      <div class="ach-num" data-target="12">0</div>
      <div class="ach-label">Film Festivals</div>
      <div class="ach-sub">Official selections worldwide</div>
    </div>
    <div class="ach-card reveal">
      <div class="ach-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="9" r="6"/><path d="m8 14-2 8 6-3 6 3-2-8"/></svg>
      </div>
      <div class="ach-num" data-target="7">0</div>
      <div class="ach-label">Awards Won</div>
      <div class="ach-sub">For direction, sound &amp; cinematography</div>
    </div>
    <div class="ach-card reveal">
      <div class="ach-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="6" width="18" height="12" rx="1.5"/><path d="M3 10h18M7 6V4M17 6V4M7 20v-2M17 20v-2"/></svg>
      </div>
      <div class="ach-num" data-target="45">0</div>
      <div class="ach-label">Successful Productions</div>
      <div class="ach-sub">Delivered end-to-end</div>
    </div>
  </div>
</section>

<!-- TEAM -->
<section id="team" class="section team-lux">
  <div class="section-head reveal center">
    <div class="section-num gold"><br/></div>
    <h2 class="section-title">The Crew</h2>
    <p class="section-sub"><br/></p>
  </div>
  <div class="lux-grid" id="crewGrid"></div>
</section>

<!-- MENTORS -->
<section id="mentors" class="section mentors-lux">
  <div class="section-head reveal center">
    <div class="section-num gold"><br/></div>
    <h2 class="section-title">MENTORS</h2>
    <p class="section-sub"><br/></p>
  </div>
  <div class="lux-grid mentors" id="mentorsGrid"></div>
</section>

<!-- LOGOS -->
<section id="clients" class="section logos-section">
  <div class="section-head reveal center small">
    <div class="section-num gold"><br/></div>
    <h2 class="section-title small">Trusted by</h2>
  </div>
  <div class="logos-marquee reveal">
    <div class="logos-track" id="logosTrack"></div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section id="testimonials" class="section testimonials-section">
  <div class="section-head reveal center">
    <div class="section-num gold"><br/></div>
    <h2 class="section-title">Words from Collaborators</h2>
  </div>
  <div class="testi-grid" id="testiGrid"></div>
</section>

<!-- CONTACT -->
<section id="contact" class="section contact">
  <div class="contact-wrap">
    <div class="contact-left reveal">
      <h2 class="contact-title">Let's make<br/>something<br/><span class="gold-text">unforgettable.</span></h2>
      <p class="contact-sub">Currently booking for 2026–25. Tell us about your project, your timeline, and your bold vision.</p>
      <a href="mailto:studio@yavamotionpictures.com" class="contact-email">studio@yavamotionpictures.com</a>
      <div class="socials">
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="20" height="20"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.1c.5-1 1.9-2 3.9-2 4.2 0 5 2.7 5 6.3V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9z"/></svg></a>
      </div>
    </div>

    <div class="contact-right reveal">
      <div class="field"><input type="text" id="cf-name" placeholder="Your Name" /></div>
      <div class="field"><input type="email" id="cf-email" placeholder="Email Address" /></div>
      <div class="field"><textarea id="cf-msg" rows="4" placeholder="Tell us about your project"></textarea></div>
      <button class="btn btn-primary btn-block" id="sendBtn">Send Proposal →</button>
    </div>
  </div>

  <div class="footer-bar">
    <div>© 2026 YaVa Motion Pictures. All rights reserved.</div>
    <div class="footer-links">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> ·
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a> ·
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  </div>
</section>

<script src="/script.js"></script>
</body>
</html>`;

export const Route = createFileRoute("/")({
  server: {
    handlers: {
      GET: () =>
        new Response(HTML, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        }),
    },
  },
});

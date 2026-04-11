const API = 'http://localhost:5000/api';

// ── FALLBACK DATA ──
const fallbackProjects = [
  {
    title: 'AI + EI Smart Surveillance', year: '2026',
    desc: 'Detects suspicious behavior & emotions from real-time CCTV footage.',
    longDesc: 'AI-based surveillance system using CV & deep learning to detect suspicious emotional and behavioral patterns from real-time CCTV. Face detection via OpenCV, YOLOv8 & MTCNN. Emotion recognition classifies expressions and identifies risk indicators. Anomaly detection triggers real-time alerts.',
    emoji: '📷', bg: 'linear-gradient(135deg,#0a1628,#0d3460)',
    tags: ['Python','OpenCV','YOLOv8','Deep Learning','FastAPI','MTCNN']
  },
  {
    title: 'ICU Patient Monitoring', year: '2025',
    desc: 'Data-driven clinical error detection & anomaly flagging for ICU patients.',
    longDesc: 'ML-powered ICU monitoring system that flags potential clinical errors using anomaly detection. Real-time alerting for faster medical decision-making.',
    emoji: '🏥', bg: 'linear-gradient(135deg,#0a2010,#0d4020)',
    tags: ['Python','Machine Learning','AWS','Streamlit','Pandas']
  },
  {
    title: 'Biotech Workflow Automation', year: '2025',
    desc: 'Cloud-based platform to automate biotechnology data pipelines.',
    longDesc: 'Cloud platform automating biotech workflows — data logging, analysis, report generation on AWS with Streamlit dashboards and Pandas pipelines.',
    emoji: '🧬', bg: 'linear-gradient(135deg,#1a0a2e,#2d1060)',
    tags: ['Python','AWS','Streamlit','Pandas','Automation']
  },
  {
    title: 'Personal Portfolio Website', year: '2025',
    desc: 'Netflix-style responsive portfolio with animations & backend API.',
    longDesc: 'Full-stack Netflix-inspired portfolio with terminal splash screen, MongoDB backend, contact form and GitHub stats integration.',
    emoji: '🎬', bg: 'linear-gradient(135deg,#1a0505,#3a0808)',
    tags: ['HTML','CSS','JavaScript','Node.js','MongoDB','Express']
  },
];

const fallbackAbout = {
  bio: "I'm a B.Tech Biotechnology student at JIIT Noida (2024–2028) passionate about building intelligent systems at the intersection of Computer Vision, AI/ML and Full-Stack Web. IEEE volunteer and always looking for the next challenge.",
  stats: [
    { value:'4+',   label:'Projects Built' },
    { value:'12+',  label:'Technologies'   },
    { value:'2025', label:'IEEE Member'    },
  ]
};

const fallbackExp = [
  {
    title: 'Volunteer — IEEE Student Branch',
    org: 'IEEE · JIIT Noida',
    date: '2025 – 26',
    desc: 'Active volunteer contributing to technical events, workshops and community-driven coding initiatives on campus.'
  }
];

// ── MATRIX RAIN ──
(function(){
  const canvas = document.getElementById('matrixCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  const W = canvas.width, H = canvas.height;
  const chars = 'PYTHON YOLO CV ML AI 01 {} [] import def class return async numpy torch pandas'.split(' ');
  const fs = 13, cols = Math.floor(W / fs);
  const drops = Array(cols).fill(0).map(() => Math.random() * H / fs);
  function draw(){
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0, 0, W, H);
    ctx.font = fs + 'px JetBrains Mono, monospace';
    drops.forEach((y, i) => {
      const ch = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillStyle = i % 7 === 0 ? 'rgba(229,9,20,0.9)' : 'rgba(229,9,20,0.22)';
      ctx.fillText(ch, i * fs, y * fs);
      if(y * fs > H && Math.random() > 0.97) drops[i] = 0;
      drops[i] += 0.6;
    });
  }
  window._matrixInt = setInterval(draw, 40);
})();

// ── TERMINAL LINES ──
const LINES = [
  { id:'tl1', h:'<span class="prompt">$</span> <span class="cmd">python --version</span>' },
  { id:'tl2', h:'<span class="green">Python 3.12.0  ✔</span>' },
  { id:'tl3', h:'<span class="prompt">$</span> <span class="cmd">import cv2, torch, numpy</span>' },
  { id:'tl4', h:'<span class="yellow">modules loaded in 0.34s</span>' },
  { id:'tl5', h:'<span class="prompt">$</span> <span class="cmd">./run portfolio.py</span>' },
  { id:'tl6', h:'<span class="blue">initializing sudiksha_srivastav ...</span>' },
];

function showLines(i = 0){
  if(i >= LINES.length){ typeName(); return; }
  const el = document.getElementById(LINES[i].id);
  if(el) el.innerHTML = LINES[i].h;
  setTimeout(() => showLines(i + 1), 380);
}

function typeName(){
  const el  = document.getElementById('splashName');
  const txt = 'SUDIKSHA SRIVASTAV';
  let i = 0;
  const t = setInterval(() => {
    el.textContent += txt[i++];
    if(i >= txt.length){ clearInterval(t); showTagAndBar(); }
  }, 70);
}

// ── progress bar → then show Netflix profile selector ──
function showTagAndBar() {
  document.getElementById('splashTag').textContent = 'B.TECH · AI/ML · COMPUTER VISION · JIIT NOIDA';
  let prog = 0;
  const bar = document.getElementById('splashBar');
  const pct = document.getElementById('splashPct');
  const t = setInterval(() => {
    prog++;
    bar.style.width = prog + '%';
    pct.textContent = prog + '%';
    if (prog >= 100) {
      clearInterval(t);
      clearTimeout(window._splashTimer); // cancel auto-dismiss
      setTimeout(buildProfileSelector, 400);
    }
  }, 28);
}

setTimeout(() => showLines(), 250);

// ── AUTO-DISMISS timer (in case animation skipped) ──
window._splashTimer = setTimeout(() => buildProfileSelector(), 6500);

// ══════════════════════════════════════════════════
//  NETFLIX "WHO'S WATCHING?" PROFILE SELECTOR
// ══════════════════════════════════════════════════

const PROFILES = [
  {
    id:      'sudiksha',
    avatar:  'SS',
    isText:  true,
    name:    'Sudiksha',
    role:    'Portfolio Owner',
    bg:      'linear-gradient(135deg,#E50914,#8B0000)',
    border:  'rgba(229,9,20,0.9)',
    shadow:  '0 8px 40px rgba(229,9,20,0.5)',
    action:  () => enterMainPortfolio()
  },
  {
    id:      'recruiter',
    avatar:  '💼',
    isText:  false,
    name:    'Recruiter',
    role:    'Hiring Mode',
    bg:      'linear-gradient(135deg,#0d1b4b,#1a2e6e)',
    border:  'rgba(100,149,237,0.9)',
    shadow:  '0 8px 40px rgba(100,149,237,0.4)',
    action:  () => enterRecruiterPage()
  },
  {
    id:      'collab',
    avatar:  '🤝',
    isText:  false,
    name:    'Collaborator',
    role:    "Let's Build",
    bg:      'linear-gradient(135deg,#0a2e1a,#0d4020)',
    border:  'rgba(70,211,105,0.9)',
    shadow:  '0 8px 40px rgba(70,211,105,0.35)',
    action:  () => enterCollabPage()
  }
];

function buildProfileSelector() {
  // Don't build twice
  if (document.getElementById('profileOverlay')) return;

  const overlay = document.createElement('div');
  overlay.id = 'profileOverlay';
  overlay.style.cssText = `
    position:absolute; inset:0; z-index:20;
    display:flex; flex-direction:column;
    align-items:center; justify-content:center;
    background:#000;
    opacity:0; transition:opacity 0.5s ease;
  `;

  overlay.innerHTML = `
    <div style="
      font-family:'JetBrains Mono',monospace;
      font-size:0.65rem; color:#E50914;
      letter-spacing:4px; margin-bottom:16px;
      opacity:0.7;
    ">PORTFOLIO.EXE — LOADED</div>

    <h2 style="
      font-family:'Playfair Display',serif;
      font-size:clamp(1.8rem,4vw,3rem);
      font-weight:500; color:#fff;
      margin-bottom:56px; letter-spacing:2px;
      text-align:center;
    ">Who's watching?</h2>

    <div id="profilesRow" style="
      display:flex; gap:40px;
      align-items:flex-start;
      flex-wrap:wrap; justify-content:center;
    "></div>

    <p style="
      font-family:'JetBrains Mono',monospace;
      font-size:0.6rem; color:rgba(255,255,255,0.2);
      margin-top:52px; letter-spacing:2px; text-align:center;
    ">[ select a profile to enter ]</p>
  `;

  document.getElementById('splash').appendChild(overlay);

  // Build each profile card
  const row = overlay.querySelector('#profilesRow');
  PROFILES.forEach(p => {
    const card = document.createElement('div');
    card.dataset.profileId = p.id;
    card.style.cssText = `
      display:flex; flex-direction:column; align-items:center;
      cursor:pointer; user-select:none;
    `;

    const avatarEl = document.createElement('div');
    avatarEl.style.cssText = `
      width:130px; height:130px; border-radius:8px;
      background:${p.bg};
      display:flex; align-items:center; justify-content:center;
      font-size:${p.isText ? '2.6rem' : '3.2rem'};
      font-family:'Playfair Display',serif;
      font-weight:600; color:#fff; letter-spacing:4px;
      border:3px solid rgba(255,255,255,0.08);
      transition:transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    `;
    avatarEl.textContent = p.avatar;

    const nameEl = document.createElement('div');
    nameEl.style.cssText = `
      font-family:'JetBrains Mono',monospace;
      font-size:0.88rem; color:rgba(255,255,255,0.65);
      margin-top:14px; letter-spacing:1px;
      transition:color 0.2s;
    `;
    nameEl.textContent = p.name;

    const roleEl = document.createElement('div');
    roleEl.style.cssText = `
      font-family:'JetBrains Mono',monospace;
      font-size:0.55rem; color:rgba(255,255,255,0.22);
      margin-top:5px; letter-spacing:2px;
    `;
    roleEl.textContent = '// ' + p.role.toUpperCase();

    card.appendChild(avatarEl);
    card.appendChild(nameEl);
    card.appendChild(roleEl);
    row.appendChild(card);

    // Hover
    card.addEventListener('mouseenter', () => {
      avatarEl.style.transform = 'scale(1.1) translateY(-6px)';
      avatarEl.style.borderColor = p.border;
      avatarEl.style.boxShadow = p.shadow;
      nameEl.style.color = '#fff';
    });
    card.addEventListener('mouseleave', () => {
      avatarEl.style.transform = '';
      avatarEl.style.borderColor = 'rgba(255,255,255,0.08)';
      avatarEl.style.boxShadow = '';
      nameEl.style.color = 'rgba(255,255,255,0.65)';
    });

    // Click — zoom in then execute action
    card.addEventListener('click', () => {
      // Pulse selected card
      avatarEl.style.transform = 'scale(1.18)';
      avatarEl.style.boxShadow = p.shadow;
      avatarEl.style.borderColor = p.border;

      // Fade overlay out, then run action
      setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => {
          clearInterval(window._matrixInt);
          document.getElementById('splash').style.display = 'none';
          p.action();
        }, 450);
      }, 300);
    });
  });

  // Fade in overlay
  requestAnimationFrame(() => {
    requestAnimationFrame(() => { overlay.style.opacity = '1'; });
  });
}

// ══════════════════════════════════════════════════
//  THREE PROFILE DESTINATIONS
// ══════════════════════════════════════════════════

// 1) SUDIKSHA → normal portfolio
function enterMainPortfolio() {
  const main = document.getElementById('mainContent');
  main.style.display = 'block';
  document.body.style.overflow = 'auto';
  loadAll();
}

// 2) RECRUITER → shows a full-screen resume-focused page
function enterRecruiterPage() {
  document.body.innerHTML = `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,400&family=JetBrains+Mono:wght@300;400;500&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
      *{margin:0;padding:0;box-sizing:border-box;}
      body{background:#050a14;color:#fff;font-family:'Cormorant Garamond',serif;min-height:100vh;}
      .rp-nav{display:flex;align-items:center;justify-content:space-between;padding:18px 56px;border-bottom:1px solid rgba(255,255,255,0.05);position:sticky;top:0;background:rgba(5,10,20,0.95);z-index:10;}
      .rp-logo{font-family:'JetBrains Mono',monospace;color:#6495ED;font-size:1rem;letter-spacing:1px;}
      .rp-tag{font-family:'JetBrains Mono',monospace;font-size:0.65rem;color:rgba(100,149,237,0.6);letter-spacing:3px;}
      .rp-btn{font-family:'JetBrains Mono',monospace;font-size:0.7rem;padding:8px 18px;border:1px solid rgba(100,149,237,0.4);color:#6495ED;background:transparent;cursor:pointer;text-decoration:none;letter-spacing:1px;transition:all 0.2s;}
      .rp-btn:hover{background:#6495ED;color:#fff;}
      .rp-hero{padding:72px 56px 48px;border-bottom:1px solid rgba(255,255,255,0.05);}
      .rp-badge{font-family:'JetBrains Mono',monospace;font-size:0.65rem;color:rgba(100,149,237,0.7);letter-spacing:3px;margin-bottom:16px;}
      .rp-name{font-family:'Playfair Display',serif;font-size:clamp(2.8rem,6vw,5rem);font-weight:600;line-height:1;margin-bottom:12px;}
      .rp-name em{font-style:italic;font-weight:400;color:rgba(255,255,255,0.45);}
      .rp-sub{font-family:'JetBrains Mono',monospace;font-size:0.8rem;color:rgba(255,255,255,0.4);letter-spacing:1px;margin-bottom:28px;}
      .rp-chips{display:flex;gap:10px;flex-wrap:wrap;}
      .rp-chip{font-family:'JetBrains Mono',monospace;font-size:0.65rem;padding:6px 14px;border:1px solid rgba(100,149,237,0.25);color:rgba(100,149,237,0.7);letter-spacing:1px;}
      .rp-grid{display:grid;grid-template-columns:1fr 1fr;gap:0;max-width:1100px;}
      @media(max-width:700px){.rp-grid{grid-template-columns:1fr;}.rp-hero,.rp-nav{padding-left:20px;padding-right:20px;}.rp-section{padding:32px 20px!important;}}
      .rp-section{padding:40px 56px;border-bottom:1px solid rgba(255,255,255,0.05);}
      .rp-section-title{font-family:'JetBrains Mono',monospace;font-size:0.65rem;color:rgba(100,149,237,0.6);letter-spacing:4px;margin-bottom:20px;}
      .rp-proj{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-left:2px solid #6495ED;padding:20px 24px;margin-bottom:14px;}
      .rp-proj-title{font-family:'Playfair Display',serif;font-size:1.1rem;font-weight:500;margin-bottom:6px;}
      .rp-proj-stack{font-family:'JetBrains Mono',monospace;font-size:0.6rem;color:#6495ED;letter-spacing:1px;margin-bottom:10px;}
      .rp-proj-desc{font-size:0.88rem;color:rgba(255,255,255,0.45);line-height:1.7;font-weight:300;}
      .rp-skill-row{display:flex;flex-wrap:wrap;gap:8px;}
      .rp-skill{font-family:'JetBrains Mono',monospace;font-size:0.65rem;padding:5px 12px;border:1px solid rgba(255,255,255,0.08);color:rgba(255,255,255,0.4);}
      .rp-edu{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);padding:20px 24px;}
      .rp-edu-deg{font-family:'Playfair Display',serif;font-size:1rem;font-weight:500;margin-bottom:6px;}
      .rp-edu-school{font-size:0.85rem;color:rgba(255,255,255,0.4);margin-bottom:4px;}
      .rp-edu-year{font-family:'JetBrains Mono',monospace;font-size:0.62rem;color:#6495ED;letter-spacing:1px;}
      .rp-back{font-family:'JetBrains Mono',monospace;font-size:0.7rem;color:rgba(255,255,255,0.3);cursor:pointer;background:none;border:none;padding:0;letter-spacing:1px;}
      .rp-back:hover{color:#6495ED;}
      footer{padding:28px 56px;text-align:center;font-family:'JetBrains Mono',monospace;font-size:0.65rem;color:rgba(255,255,255,0.15);border-top:1px solid rgba(255,255,255,0.05);}
    </style>

    <nav class="rp-nav">
      <div>
        <div class="rp-logo">&lt;SS /&gt; — Recruiter View</div>
        <div class="rp-tag">// HIRING MODE ACTIVE</div>
      </div>
      <div style="display:flex;gap:12px;align-items:center;">
        <button class="rp-back" onclick="location.reload()">← Back to profiles</button>
        <a class="rp-btn" href="/Resume-sudiksha-final.pdf" target="_blank">Download Resume ↗</a>
      </div>
    </nav>

    <div class="rp-hero">
      <div class="rp-badge">// CANDIDATE PROFILE</div>
      <div class="rp-name">Sudiksha<br><em>Srivastav</em></div>
      <div class="rp-sub">B.Tech Biotechnology · JIIT Noida · 2024–2028 &nbsp;|&nbsp; Minor: AI/ML · IIT Madras</div>
      <div class="rp-chips">
        <span class="rp-chip">📍 Noida, India</span>
        <span class="rp-chip">📧 sudiksha.srivastav@yahoo.com</span>
        <span class="rp-chip">📞 +91-8770461973</span>
        <span class="rp-chip">IEEE Member</span>
        <span class="rp-chip">Open to Internships</span>
      </div>
    </div>

    <div class="rp-grid">
      <div>
        <div class="rp-section">
          <div class="rp-section-title">// PROJECTS</div>
          <div class="rp-proj">
            <div class="rp-proj-title">AI + EI Smart Surveillance</div>
            <div class="rp-proj-stack">Python · OpenCV · YOLOv8 · FastAPI · MTCNN · 2026</div>
            <div class="rp-proj-desc">Real-time CCTV system detecting suspicious behavioral & emotional patterns using deep learning. Face tracking + anomaly alerting.</div>
          </div>
          <div class="rp-proj">
            <div class="rp-proj-title">ICU Patient Monitoring</div>
            <div class="rp-proj-stack">Python · ML · AWS · Streamlit · Pandas · 2025</div>
            <div class="rp-proj-desc">ML-driven system flagging clinical errors via anomaly detection on ICU patient data with real-time alerting.</div>
          </div>
          <div class="rp-proj">
            <div class="rp-proj-title">Biotech Workflow Automation</div>
            <div class="rp-proj-stack">Python · AWS · Streamlit · Pandas · 2025</div>
            <div class="rp-proj-desc">Cloud platform automating biotechnology data pipelines — logging, analysis & report generation.</div>
          </div>
          <div class="rp-proj">
            <div class="rp-proj-title">Personal Portfolio Website</div>
            <div class="rp-proj-stack">HTML · CSS · JS · Node.js · MongoDB · Express · 2025</div>
            <div class="rp-proj-desc">Full-stack Netflix-inspired portfolio with terminal splash, GitHub stats, contact form & MongoDB backend.</div>
          </div>
        </div>

        <div class="rp-section">
          <div class="rp-section-title">// POSITIONS</div>
          <div class="rp-proj">
            <div class="rp-proj-title">Volunteer — IEEE Student Branch</div>
            <div class="rp-proj-stack">IEEE · JIIT Noida · 2025–26</div>
            <div class="rp-proj-desc">Contributing to technical events, workshops & community coding initiatives.</div>
          </div>
        </div>
      </div>

      <div>
        <div class="rp-section">
          <div class="rp-section-title">// EDUCATION</div>
          <div class="rp-edu" style="margin-bottom:12px;">
            <div class="rp-edu-deg">B.Tech — Biotechnology</div>
            <div class="rp-edu-school">Jaypee Institute of Information Technology, Noida</div>
            <div class="rp-edu-year">2024 – 2028</div>
          </div>
          <div class="rp-edu" style="margin-bottom:12px;">
            <div class="rp-edu-deg">Minor — Artificial Intelligence & ML</div>
            <div class="rp-edu-school">JIIT Noida</div>
            <div class="rp-edu-year">2024 – 2028</div>
          </div>
          <div class="rp-edu">
            <div class="rp-edu-deg">B.Sc — Data Science & Programming</div>
            <div class="rp-edu-school">Indian Institute of Technology, Madras</div>
            <div class="rp-edu-year">2024 – 2028</div>
          </div>
        </div>

        <div class="rp-section">
          <div class="rp-section-title">// TECHNICAL SKILLS</div>
          <div style="margin-bottom:12px;font-family:'JetBrains Mono',monospace;font-size:0.6rem;color:rgba(100,149,237,0.5);letter-spacing:2px;">LANGUAGES</div>
          <div class="rp-skill-row" style="margin-bottom:20px;">
            ${['Python','C/C++','JavaScript','HTML+CSS'].map(s=>`<span class="rp-skill">${s}</span>`).join('')}
          </div>
          <div style="margin-bottom:12px;font-family:'JetBrains Mono',monospace;font-size:0.6rem;color:rgba(100,149,237,0.5);letter-spacing:2px;">AI / ML / CV</div>
          <div class="rp-skill-row" style="margin-bottom:20px;">
            ${['OpenCV','YOLOv8','Deep Learning','Scikit-Learn','FastAPI','MTCNN'].map(s=>`<span class="rp-skill">${s}</span>`).join('')}
          </div>
          <div style="margin-bottom:12px;font-family:'JetBrains Mono',monospace;font-size:0.6rem;color:rgba(100,149,237,0.5);letter-spacing:2px;">TOOLS & CLOUD</div>
          <div class="rp-skill-row" style="margin-bottom:20px;">
            ${['AWS','Git/GitHub','Streamlit','Docker','VS Code'].map(s=>`<span class="rp-skill">${s}</span>`).join('')}
          </div>
          <div style="margin-bottom:12px;font-family:'JetBrains Mono',monospace;font-size:0.6rem;color:rgba(100,149,237,0.5);letter-spacing:2px;">DATABASES</div>
          <div class="rp-skill-row">
            ${['MongoDB','MySQL'].map(s=>`<span class="rp-skill">${s}</span>`).join('')}
          </div>
        </div>

        <div class="rp-section">
          <div class="rp-section-title">// CONTACT</div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <a href="mailto:sudiksha.srivastav@yahoo.com" style="font-family:'JetBrains Mono',monospace;font-size:0.72rem;color:rgba(100,149,237,0.7);text-decoration:none;letter-spacing:0.5px;">✉ sudiksha.srivastav@yahoo.com</a>
            <a href="https://github.com/SrivastavSudiksha" target="_blank" style="font-family:'JetBrains Mono',monospace;font-size:0.72rem;color:rgba(100,149,237,0.7);text-decoration:none;letter-spacing:0.5px;">🐙 github.com/SrivastavSudiksha</a>
            <a href="https://linkedin.com/in/sudiksha-srivastav" target="_blank" style="font-family:'JetBrains Mono',monospace;font-size:0.72rem;color:rgba(100,149,237,0.7);text-decoration:none;letter-spacing:0.5px;">💼 linkedin.com/in/sudiksha-srivastav</a>
          </div>
        </div>
      </div>
    </div>
    <footer>// Recruiter View · Sudiksha Srivastav Portfolio · 2025</footer>
  `;
}

// 3) COLLABORATOR → project-focused landing with CTA
function enterCollabPage() {
  document.body.innerHTML = `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,400&family=JetBrains+Mono:wght@300;400;500&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
      *{margin:0;padding:0;box-sizing:border-box;}
      body{background:#020d07;color:#fff;font-family:'Cormorant Garamond',serif;min-height:100vh;}
      .cp-nav{display:flex;align-items:center;justify-content:space-between;padding:18px 56px;border-bottom:1px solid rgba(255,255,255,0.05);position:sticky;top:0;background:rgba(2,13,7,0.95);z-index:10;}
      .cp-logo{font-family:'JetBrains Mono',monospace;color:#46d369;font-size:1rem;letter-spacing:1px;}
      .cp-tag{font-family:'JetBrains Mono',monospace;font-size:0.65rem;color:rgba(70,211,105,0.55);letter-spacing:3px;}
      .cp-btn{font-family:'JetBrains Mono',monospace;font-size:0.7rem;padding:8px 18px;border:1px solid rgba(70,211,105,0.4);color:#46d369;background:transparent;cursor:pointer;text-decoration:none;letter-spacing:1px;transition:all 0.2s;}
      .cp-btn:hover{background:#46d369;color:#000;}
      .cp-back{font-family:'JetBrains Mono',monospace;font-size:0.7rem;color:rgba(255,255,255,0.3);cursor:pointer;background:none;border:none;padding:0;letter-spacing:1px;}
      .cp-back:hover{color:#46d369;}
      .cp-hero{padding:80px 56px 60px;text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);}
      .cp-badge{font-family:'JetBrains Mono',monospace;font-size:0.65rem;color:rgba(70,211,105,0.7);letter-spacing:4px;margin-bottom:16px;}
      .cp-title{font-family:'Playfair Display',serif;font-size:clamp(2.4rem,5vw,4.5rem);font-weight:500;line-height:1.05;margin-bottom:18px;}
      .cp-title em{font-style:italic;font-weight:400;color:rgba(255,255,255,0.4);}
      .cp-sub{font-family:'JetBrains Mono',monospace;font-size:0.75rem;color:rgba(255,255,255,0.35);letter-spacing:1px;margin-bottom:36px;line-height:2;}
      .cp-cta{display:inline-flex;align-items:center;gap:10px;font-family:'JetBrains Mono',monospace;font-size:0.82rem;padding:14px 32px;background:#46d369;color:#000;border:none;cursor:pointer;letter-spacing:2px;text-decoration:none;font-weight:500;transition:opacity 0.2s,transform 0.15s;}
      .cp-cta:hover{opacity:0.85;transform:scale(1.02);}
      .cp-areas{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,0.04);margin:0;padding:0;}
      @media(max-width:700px){.cp-areas{grid-template-columns:1fr;}.cp-nav,.cp-hero{padding-left:20px;padding-right:20px;}}
      .cp-area{padding:36px 40px;background:#020d07;}
      .cp-area-icon{font-size:2rem;margin-bottom:14px;}
      .cp-area-title{font-family:'Playfair Display',serif;font-size:1.2rem;font-weight:500;margin-bottom:10px;}
      .cp-area-desc{font-size:0.88rem;color:rgba(255,255,255,0.38);line-height:1.75;font-weight:300;}
      .cp-area-tags{display:flex;flex-wrap:wrap;gap:7px;margin-top:14px;}
      .cp-tag-pill{font-family:'JetBrains Mono',monospace;font-size:0.58rem;padding:3px 9px;border:1px solid rgba(70,211,105,0.2);color:rgba(70,211,105,0.6);}
      .cp-contact{padding:60px 56px;text-align:center;}
      .cp-contact-title{font-family:'Playfair Display',serif;font-size:2rem;font-weight:500;margin-bottom:10px;}
      .cp-contact-sub{font-family:'JetBrains Mono',monospace;font-size:0.7rem;color:rgba(255,255,255,0.3);letter-spacing:1px;margin-bottom:32px;}
      .cp-links{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;}
      .cp-link{font-family:'JetBrains Mono',monospace;font-size:0.7rem;padding:10px 20px;border:1px solid rgba(70,211,105,0.2);color:rgba(70,211,105,0.7);text-decoration:none;letter-spacing:1px;transition:all 0.2s;}
      .cp-link:hover{border-color:rgba(70,211,105,0.6);color:#46d369;}
      footer{padding:28px 56px;text-align:center;font-family:'JetBrains Mono',monospace;font-size:0.65rem;color:rgba(255,255,255,0.1);border-top:1px solid rgba(255,255,255,0.04);}
    </style>

    <nav class="cp-nav">
      <div>
        <div class="cp-logo">&lt;SS /&gt; — Collaborator View</div>
        <div class="cp-tag">// BUILDER MODE ACTIVE</div>
      </div>
      <div style="display:flex;gap:12px;align-items:center;">
        <button class="cp-back" onclick="location.reload()">← Back to profiles</button>
        <a class="cp-btn" href="mailto:sudiksha.srivastav@yahoo.com">Let's Connect ↗</a>
      </div>
    </nav>

    <div class="cp-hero">
      <div class="cp-badge">// OPEN TO COLLABORATION</div>
      <div class="cp-title">
        Let's <em>build</em><br>something together
      </div>
      <div class="cp-sub">
        I work at the intersection of Computer Vision · AI/ML · Full-Stack Web<br>
        Always looking for interesting problems to solve
      </div>
      <a class="cp-cta" href="mailto:sudiksha.srivastav@yahoo.com">✉ &nbsp;Reach Out Now</a>
    </div>

    <div class="cp-areas">
      <div class="cp-area">
        <div class="cp-area-icon">👁</div>
        <div class="cp-area-title">Computer Vision</div>
        <div class="cp-area-desc">Real-time object detection, emotion recognition, face tracking, surveillance systems — built with OpenCV, YOLOv8 and deep learning.</div>
        <div class="cp-area-tags">
          ${['OpenCV','YOLOv8','MTCNN','FastAPI','Python'].map(t=>`<span class="cp-tag-pill">${t}</span>`).join('')}
        </div>
      </div>
      <div class="cp-area">
        <div class="cp-area-icon">🧠</div>
        <div class="cp-area-title">AI / ML Systems</div>
        <div class="cp-area-desc">Anomaly detection, classification models, clinical ML, data pipelines — from notebook to production on AWS.</div>
        <div class="cp-area-tags">
          ${['Scikit-Learn','Pandas','AWS','Streamlit','Deep Learning'].map(t=>`<span class="cp-tag-pill">${t}</span>`).join('')}
        </div>
      </div>
      <div class="cp-area">
        <div class="cp-area-icon">🌐</div>
        <div class="cp-area-title">Full-Stack Web</div>
        <div class="cp-area-desc">End-to-end web apps with Node.js backends, MongoDB, REST APIs and polished frontends. Currently building this portfolio.</div>
        <div class="cp-area-tags">
          ${['Node.js','Express','MongoDB','HTML/CSS','JavaScript'].map(t=>`<span class="cp-tag-pill">${t}</span>`).join('')}
        </div>
      </div>
    </div>

    <div class="cp-contact">
      <div class="cp-contact-title">Ready to <em>collaborate?</em></div>
      <div class="cp-contact-sub">// DMs open · always happy to chat about cool projects</div>
      <div class="cp-links">
        <a class="cp-link" href="mailto:sudiksha.srivastav@yahoo.com">✉ Email</a>
        <a class="cp-link" href="https://linkedin.com/in/sudiksha-srivastav" target="_blank">💼 LinkedIn</a>
        <a class="cp-link" href="https://github.com/SrivastavSudiksha" target="_blank">🐙 GitHub</a>
        <a class="cp-link" href="tel:+918770461973">📞 Call</a>
      </div>
    </div>
    <footer>// Collaborator View · Sudiksha Srivastav Portfolio · 2025</footer>
  `;
}

// ── NAV SCROLL ──
window.addEventListener('scroll', () => {
  document.getElementById('navbar')
    .classList.toggle('scrolled', window.scrollY > 50);
});

// ── SKILLS DATA ──
const skillsData = [
  { icon:'🐍', name:'Python',       cat:'lang',  catLabel:'Language', level:90, desc:'Primary language — AI, CV, scripting', bg:'#0a1a0a', featured:true },
  { icon:'⚡', name:'C / C++',      cat:'lang',  catLabel:'Language', level:78, desc:'DSA, algorithms, OOP',                 bg:'#0a0a1a' },
  { icon:'🟨', name:'JavaScript',   cat:'lang',  catLabel:'Language', level:80, desc:'Frontend + Node.js',                  bg:'#1a1a00' },
  { icon:'🌐', name:'HTML + CSS',   cat:'lang',  catLabel:'Language', level:85, desc:'Responsive web UI',                   bg:'#1a0800' },
  { icon:'👁',  name:'OpenCV',       cat:'ai',    catLabel:'AI / CV',  level:82, desc:'Real-time computer vision',           bg:'#001a1a' },
  { icon:'🤖', name:'YOLOv8',       cat:'ai',    catLabel:'AI / CV',  level:78, desc:'Object detection & tracking',         bg:'#0a001a' },
  { icon:'🧠', name:'Deep Learning',cat:'ai',    catLabel:'AI / ML',  level:72, desc:'CNN, classification, anomaly',        bg:'#1a0018' },
  { icon:'📊', name:'Scikit-Learn', cat:'ai',    catLabel:'AI / ML',  level:75, desc:'Classical ML, NLP pipelines',         bg:'#001818' },
  { icon:'🔢', name:'MTCNN',        cat:'ai',    catLabel:'AI / CV',  level:70, desc:'Face detection & alignment',          bg:'#180010' },
  { icon:'⚙️', name:'FastAPI',      cat:'ai',    catLabel:'AI / ML',  level:74, desc:'ML model serving & REST APIs',        bg:'#001200' },
  { icon:'⚛️', name:'React',        cat:'web',   catLabel:'Web',      level:75, desc:'Component-driven UI',                 bg:'#0a0028' },
  { icon:'🚂', name:'Express.js',   cat:'web',   catLabel:'Web',      level:75, desc:'Backend REST APIs',                   bg:'#0a0a1a' },
  { icon:'🎨', name:'Streamlit',    cat:'web',   catLabel:'Web',      level:85, desc:'Data dashboards & ML apps',           bg:'#0a1a1a' },
  { icon:'☁️', name:'AWS',          cat:'tools', catLabel:'Cloud',    level:70, desc:'S3, EC2, Lambda basics',              bg:'#1a0e00' },
  { icon:'🐳', name:'Docker',       cat:'tools', catLabel:'DevOps',   level:60, desc:'Containerization basics',             bg:'#001018' },
  { icon:'🐙', name:'Git & GitHub', cat:'tools', catLabel:'DevOps',   level:85, desc:'Version control & open source',      bg:'#1a0a00' },
  { icon:'💻', name:'VS Code',      cat:'tools', catLabel:'Tools',    level:90, desc:'Primary development environment',     bg:'#000a1a' },
  { icon:'🍃', name:'MongoDB',      cat:'db',    catLabel:'Database', level:75, desc:'NoSQL document store',                bg:'#001a08' },
  { icon:'🗄️', name:'MySQL',        cat:'db',    catLabel:'Database', level:70, desc:'Relational queries & schema',         bg:'#0a001a' },
];

let currentSkillFilter = 'all';

function filterSkills(cat, el) {
  currentSkillFilter = cat;
  document.querySelectorAll('.skills-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  const list = cat === 'all' ? skillsData : skillsData.filter(s => s.cat === cat);
  renderSkills(list);
  const feat = list.find(s => s.featured) || list[0];
  if (feat) updateFeatured(feat);
}

function updateFeatured(s) {
  document.getElementById('featuredIcon').textContent = s.icon;
  document.getElementById('featuredName').textContent = s.name.toUpperCase();
  document.getElementById('featuredDesc').textContent = s.desc;
  document.getElementById('featuredPct').textContent  = s.level + '%';
  const bar = document.getElementById('featuredBar');
  bar.style.width = '0';
  setTimeout(() => bar.style.width = s.level + '%', 80);
}

function renderSkills(list) {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = '';
  list.filter(s => !(s.featured && currentSkillFilter === 'all')).forEach(s => {
    const c = document.createElement('div');
    c.className = 'skill-card';
    c.innerHTML = `
      <div class="skill-top">
        <div class="skill-icon-wrap" style="background:${s.bg}">${s.icon}</div>
        <div class="skill-percent">${s.level}%</div>
      </div>
      <div class="skill-name">${s.name}</div>
      <div class="skill-cat">${s.catLabel}</div>
      <div class="skill-bar-wrap"><div class="skill-bar" data-w="${s.level}"></div></div>`;
    grid.appendChild(c);
  });
  setTimeout(() => {
    document.querySelectorAll('.skill-bar[data-w]').forEach(b => b.style.width = b.dataset.w + '%');
  }, 120);
}

// ── LOAD ALL ──
async function loadAll() {
  await Promise.all([loadProjects(), loadAbout(), loadExperience(), loadGitHubStats()]);
  renderSkills(skillsData);
  updateFeatured(skillsData.find(s => s.featured));
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting)
        e.target.querySelectorAll('.skill-bar[data-w]')
          .forEach(b => b.style.width = b.dataset.w + '%');
    });
  }, { threshold: 0.2 });
  const sg = document.getElementById('skillsGrid');
  if (sg) obs.observe(sg);
}

// ── PROJECTS ──
async function loadProjects() {
  try {
    const res = await fetch(`${API}/projects`);
    if (!res.ok) throw new Error();
    const data = await res.json();
    renderProjects(data.length ? data : fallbackProjects);
  } catch {
    renderProjects(fallbackProjects);
  }
}

function renderProjects(list) {
  const cont = document.getElementById('projectCards');
  cont.innerHTML = '';
  list.forEach(p => {
    const c = document.createElement('div');
    c.className = 'project-card';
    c.innerHTML = `
      <div class="card-thumb" style="background:${p.bg}">${p.emoji}</div>
      <div class="card-info">
        <div class="card-year">${p.year || ''}</div>
        <div class="card-title">${p.title}</div>
        <div class="card-desc">${p.desc}</div>
        <div class="card-tags">${(p.tags||[]).map(t=>`<span class="card-tag">${t}</span>`).join('')}</div>
      </div>`;
    c.addEventListener('click', () => openModal(p));
    cont.appendChild(c);
  });
}

// ── ABOUT ──
async function loadAbout() {
  try {
    const res = await fetch(`${API}/about`);
    if (!res.ok) throw new Error();
    const data = await res.json();
    document.getElementById('aboutBio').textContent = data.bio;
    document.getElementById('aboutStats').innerHTML = data.stats
      .map(s=>`<div class="stat"><div class="stat-num">${s.value}</div><div class="stat-label">${s.label}</div></div>`)
      .join('');
  } catch {
    document.getElementById('aboutBio').textContent = fallbackAbout.bio;
    document.getElementById('aboutStats').innerHTML = fallbackAbout.stats
      .map(s=>`<div class="stat"><div class="stat-num">${s.value}</div><div class="stat-label">${s.label}</div></div>`)
      .join('');
  }
}

// ── EXPERIENCE ──
async function loadExperience() {
  try {
    const res = await fetch(`${API}/experience`);
    if (!res.ok) throw new Error();
    const data = await res.json();
    renderTimeline(data.length ? data : fallbackExp);
  } catch {
    renderTimeline(fallbackExp);
  }
}

function renderTimeline(list) {
  const cont = document.getElementById('timeline');
  cont.innerHTML = '';
  list.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'timeline-item';
    div.innerHTML = `
      <div class="tl-date">${item.date}</div>
      <div class="tl-line-wrap">
        <div class="tl-dot"></div>
        <div class="tl-stem" style="${i===list.length-1?'background:transparent':''}"></div>
      </div>
      <div class="tl-body">
        <div class="tl-title">${item.title}</div>
        <div class="tl-org">${item.org}</div>
        <div class="tl-desc">${item.desc}</div>
      </div>`;
    cont.appendChild(div);
  });
}

// ── GITHUB STATS — direct GitHub API ──
async function loadGitHubStats() {
  const GH_USER = 'SrivastavSudiksha';
  function countUp(elId, target) {
    const el = document.getElementById(elId);
    if (!el) return;
    let cur = 0;
    const step = Math.max(1, Math.floor(target / 30));
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.textContent = cur;
      if (cur >= target) clearInterval(t);
    }, 40);
  }
  try {
    const userRes = await fetch(`https://api.github.com/users/${GH_USER}`);
    if (!userRes.ok) throw new Error();
    const user = await userRes.json();
    let totalStars = 0;
    try {
      const reposRes = await fetch(`https://api.github.com/users/${GH_USER}/repos?per_page=100`);
      if (reposRes.ok) {
        const repos = await reposRes.json();
        if (Array.isArray(repos)) totalStars = repos.reduce((s,r) => s + (r.stargazers_count||0), 0);
      }
    } catch(_) {}
    countUp('ghReposNum',  user.public_repos || 0);
    countUp('ghFollowers', user.followers    || 0);
    countUp('ghFollowing', user.following    || 0);
    countUp('ghStarsNum',  totalStars);
    // Fix readme-stats image URLs
    document.querySelectorAll('.github-img').forEach(img => {
      img.src = img.src.replace(/username=[^&]+/, `username=${GH_USER}`);
    });
  } catch {
    try {
      const res = await fetch(`${API}/github`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      document.getElementById('ghReposNum').textContent  = data.public_repos || '—';
      document.getElementById('ghFollowers').textContent = data.followers    || '—';
      document.getElementById('ghFollowing').textContent = data.following    || '—';
      document.getElementById('ghStarsNum').textContent  = data.total_stars  || '—';
    } catch { /* silent */ }
  }
}

// ── CONTACT FORM ──
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const msg = document.getElementById('formMsg');
    btn.disabled = true; btn.textContent = '// Sending...';
    msg.className = 'form-msg'; msg.textContent = '';
    try {
      const res = await fetch(`${API}/contact`, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          name:    document.getElementById('senderName').value,
          email:   document.getElementById('senderEmail').value,
          subject: document.getElementById('subject').value,
          message: document.getElementById('message').value,
        })
      });
      const data = await res.json();
      if (res.ok) {
        msg.className = 'form-msg success';
        msg.textContent = '// ✔ Message sent! Will respond soon.';
        form.reset();
      } else throw new Error(data.error || 'Server error');
    } catch (err) {
      msg.className = 'form-msg error';
      msg.textContent = '// ✖ ' + err.message;
    } finally {
      btn.disabled = false; btn.textContent = 'Send Message ↗';
    }
  });
});

// ── MODAL ──
function openModal(p) {
  document.getElementById('modalHeader').style.background = p.bg || '#1a1a1a';
  document.getElementById('modalHeader').innerHTML =
    `<span style="font-size:3rem">${p.emoji}</span>
     <button class="modal-close" onclick="document.getElementById('modal').classList.remove('open')">✕</button>`;
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalStack').textContent = '// ' + (p.tags||[]).join(' · ');
  document.getElementById('modalDesc').textContent  = p.longDesc || p.desc;
  document.getElementById('modalTags').innerHTML    =
    (p.tags||[]).map(t=>`<span class="modal-tag">${t}</span>`).join('');
  document.getElementById('modal').classList.add('open');
}

function closeModal(e) {
  if (e.target === document.getElementById('modal'))
    document.getElementById('modal').classList.remove('open');
}
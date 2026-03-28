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

function showTagAndBar(){
  document.getElementById('splashTag').textContent = 'B.TECH · AI/ML · COMPUTER VISION · JIIT NOIDA';
  let prog = 0;
  const bar = document.getElementById('splashBar');
  const pct = document.getElementById('splashPct');
  const t = setInterval(() => {
    prog++;
    bar.style.width = prog + '%';
    pct.textContent = prog + '%';
    if(prog >= 100){ clearInterval(t); }
  }, 28);
}

setTimeout(() => showLines(), 250);

// ── DISMISS SPLASH ──
function dismissSplash(){
  clearInterval(window._matrixInt);
  const splash = document.getElementById('splash');
  const main   = document.getElementById('mainContent');
  splash.classList.add('fade-out');
  setTimeout(() => {
    splash.style.display = 'none';
    main.style.display   = 'block';
    document.body.style.overflow = 'auto';
    loadAll();
  }, 800);
}

window._splashTimer = setTimeout(dismissSplash, 5000);
document.getElementById('splash').addEventListener('click', () => {
  clearTimeout(window._splashTimer); dismissSplash();
});
window.addEventListener('keydown', () => {
  clearTimeout(window._splashTimer); dismissSplash();
}, { once: true });

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

// ── GITHUB STATS ──
async function loadGitHubStats() {
  try {
    const res = await fetch(`${API}/github`);
    if (!res.ok) throw new Error();
    const data = await res.json();
    document.getElementById('ghReposNum').textContent  = data.public_repos || '—';
    document.getElementById('ghFollowers').textContent = data.followers     || '—';
    document.getElementById('ghFollowing').textContent = data.following     || '—';
    document.getElementById('ghStarsNum').textContent  = data.total_stars   || '—';
  } catch { /* silent — dashes rahenge */ }
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
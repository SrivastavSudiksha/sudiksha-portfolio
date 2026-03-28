const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
const dotenv   = require('dotenv');
const https    = require('https'); // ✅ built-in — no install needed

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// ── DB CONNECT ──
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ DB Error:', err));

// ── SCHEMAS ──
const projectSchema = new mongoose.Schema({
  title: String, desc: String, longDesc: String,
  emoji: String, bg: String, tags: [String], year: String, order: Number
});
const aboutSchema = new mongoose.Schema({
  bio: String,
  stats: [{ value: String, label: String }]
});
const expSchema = new mongoose.Schema({
  title: String, org: String, date: String, desc: String, order: Number
});
const contactSchema = new mongoose.Schema({
  name: String, email: String, subject: String, message: String,
  createdAt: { type: Date, default: Date.now }
});

const Project = mongoose.model('Project', projectSchema);
const About   = mongoose.model('About',   aboutSchema);
const Exp     = mongoose.model('Exp',     expSchema);
const Contact = mongoose.model('Contact', contactSchema);

// ── HELPER: https GET (replaces node-fetch) ──
function httpsGet(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'portfolio-app',
        'Accept': 'application/json'
      }
    };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

// ── SEED DATA ──
async function seedDB() {
  const count = await Project.countDocuments();
  if (count > 0) return;
  console.log('🌱 Seeding database...');

  await Project.insertMany([
    {
      title: 'AI + EI Smart Surveillance',
      desc: 'Detects suspicious behavior & emotions from real-time CCTV footage.',
      longDesc: 'AI-based surveillance system using computer vision & deep learning to detect suspicious emotional and behavioral patterns from real-time CCTV. Implements face detection via OpenCV, YOLOv8 & MTCNN. Emotion recognition classifies expressions and identifies risk indicators. Anomaly detection triggers real-time alerts.',
      emoji: '📷', bg: 'linear-gradient(135deg,#0a1628,#0d3460)',
      tags: ['Python', 'OpenCV', 'YOLOv8', 'Deep Learning', 'FastAPI', 'MTCNN'],
      year: '2026', order: 1
    },
    {
      title: 'ICU Patient Monitoring',
      desc: 'Data-driven clinical error detection & anomaly flagging for ICU patients.',
      longDesc: 'ML-powered ICU monitoring system that identifies and flags potential clinical errors using data-driven anomaly detection. Integrates real-time alerting for faster medical decision-making and reduces dependency on manual monitoring.',
      emoji: '🏥', bg: 'linear-gradient(135deg,#0a2010,#0d4020)',
      tags: ['Python', 'Machine Learning', 'AWS', 'Streamlit', 'Pandas'],
      year: '2025', order: 2
    },
    {
      title: 'Biotech Workflow Automation',
      desc: 'Cloud-based platform to automate biotechnology data pipelines & reports.',
      longDesc: 'Cloud platform automating biotechnology workflows — data logging, analysis, report generation. Built on AWS with Streamlit dashboards and Pandas pipelines for biological and experimental datasets.',
      emoji: '🧬', bg: 'linear-gradient(135deg,#1a0a2e,#2d1060)',
      tags: ['Python', 'AWS', 'Streamlit', 'Pandas', 'Automation'],
      year: '2025', order: 3
    },
    {
      title: 'Personal Portfolio Website',
      desc: 'Netflix-style responsive portfolio with animations & backend API.',
      longDesc: 'Full-stack Netflix-inspired portfolio with terminal splash screen, Playfair + Cormorant typography, MongoDB backend, contact form, GitHub stats integration and dynamic project/skill loading.',
      emoji: '🎬', bg: 'linear-gradient(135deg,#1a0505,#3a0808)',
      tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'Express'],
      year: '2025', order: 4
    },
  ]);

  await About.create({
    bio: "I'm a B.Tech Biotechnology student at JIIT Noida (2024–2028) with a deep passion for building intelligent systems. I work at the intersection of Computer Vision, AI/ML and Full-Stack Web — from real-time CCTV surveillance to cloud-based biotech automation. IEEE volunteer and always looking for the next challenge.",
    stats: [
      { value: '4+',   label: 'Projects Built' },
      { value: '12+',  label: 'Technologies'   },
      { value: '2025', label: 'IEEE Member'     },
    ]
  });

  await Exp.insertMany([
    {
      title: 'Volunteer — IEEE Student Branch',
      org: 'IEEE · JIIT Noida',
      date: '2025 – 26',
      desc: 'Active volunteer at the IEEE Student Branch, contributing to technical events, workshops and community-driven coding initiatives on campus.',
      order: 1
    },
  ]);

  console.log('✅ Seed done!');
}
seedDB();

// ── ROUTES ──
app.get('/api/projects', async (req, res) => {
  try {
    const data = await Project.find().sort({ order: 1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

app.get('/api/about', async (req, res) => {
  try {
    const data = await About.findOne();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch about' });
  }
});

app.get('/api/experience', async (req, res) => {
  try {
    const data = await Exp.find().sort({ order: 1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch experience' });
  }
});

app.get('/api/contact', async (req, res) => {
  try {
    const data = await Contact.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

// ── GITHUB STATS (no external package needed) ──
app.get('/api/github', async (req, res) => {
  try {
    const userData = await httpsGet('https://api.github.com/users/sudiksha-srivastav');

    let totalStars = 0;
    try {
      const reposData = await httpsGet('https://api.github.com/users/sudiksha-srivastav/repos?per_page=100');
      if (Array.isArray(reposData)) {
        totalStars = reposData.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
      }
    } catch (e) {
      // stars fetch fail hone par bhi user data return karo
    }

    res.json({ ...userData, total_stars: totalStars });
  } catch (err) {
    // GitHub API fail hone par empty object — frontend gracefully handles it
    res.json({
      public_repos: 0,
      followers: 0,
      following: 0,
      total_stars: 0
    });
  }
});

// ── CONTACT FORM ──
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address.' });
    }

    const contact = new Contact({ name, email, subject, message });
    await contact.save();
    console.log(`📩 New message from ${name} <${email}>`);
    res.status(201).json({ success: true, message: 'Message saved!' });
  } catch (err) {
    console.error('Contact save error:', err);
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running → http://localhost:${PORT}`);
});
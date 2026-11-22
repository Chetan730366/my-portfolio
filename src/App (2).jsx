import { useState } from 'react'
import './App.css'
import portrait from './assets/portrait.png'
import aboutPhoto from './assets/about.jpg'

// ---------- DATA (change your text here) ----------
const navLinks = ['About', 'Services', 'Experience', 'Projects', 'Contact']

const projects = [
  {
    title: 'Portfolio Website',
    year: '2025',
    tags: ['React.js', 'Tailwind CSS', 'Vite', 'Vercel', 'Google Sheets API'],
    points: [
      'Responsive site tested on 4 breakpoints, 320px to 1440px.',
      '12+ reusable React components cut code duplication by 35%.',
      'Google Sheets API used as a light CMS.',
    ],
    stats: [['92', 'Lighthouse score'], ['40%', 'faster load time']],
  },
  {
    title: 'NGO Website',
    year: '2024',
    tags: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
    points: [
      '8-page, mobile-first site with CSS Grid and Flexbox.',
      'Figma wireframes turned into a Bootstrap 5 design system.',
      'WCAG 2.1 practices: semantic HTML, ARIA labels, keyboard navigation.',
    ],
    stats: [['94', 'Accessibility score'], ['68 → 91', 'SEO score']],
  },
]

const services = [
  { title: 'Responsive Web Development', text: 'Fast, mobile-first websites and web apps built with React.js, JavaScript and Tailwind CSS.' },
  { title: 'Design to Code', text: 'Figma and mockups converted into pixel-accurate, reusable React components.' },
  { title: 'Performance Optimization', text: 'Faster load times and 90+ Lighthouse scores through clean, optimized code.' },
  { title: 'Accessibility & SEO', text: 'Semantic HTML, ARIA labels and keyboard navigation following WCAG 2.1 practices.' },
]

const jobs = [
  { company: 'Blackcat', role: 'Frontend Developer', date: 'Sep 2026 – Present', text: 'Building responsive interfaces with React.js and Tailwind CSS.' },
  { company: 'First Point Creations', role: 'Frontend Developer', date: 'Mar 2026 – Jul 2026', text: 'Converted design mockups into pixel-accurate pages.' },
  { company: 'Vedaminds Institute', role: 'Frontend Developer Trainee', date: '2025 – 2026', text: 'Built web apps in Agile sprints and did cross-browser QA.' },
  { company: 'Freelance Projects', role: 'Frontend Developer', date: '2024 – Present', text: 'Delivered websites for 5+ clients with 90+ Lighthouse scores.' },
]

const skills = ['HTML5', 'CSS3', 'ES6+', 'React.js', 'Tailwind CSS', 'Git/GitHub', 'Vite']

// ---------- HEADER ----------
function Header() {
  // useState remembers if the menu is open (true) or closed (false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </button>

      <nav className="nav-links">
        {navLinks.map((link) => (
          <a key={link} href={'#' + link.toLowerCase()}>{link}</a>
        ))}
      </nav>

      <a className="hire-btn" href="#contact">Hire me <span className="arrow">→</span></a>

      {menuOpen && (
        <nav className="mobile-menu">
          {navLinks.map((link) => (
            <a key={link} href={'#' + link.toLowerCase()} onClick={() => setMenuOpen(false)}>{link}</a>
          ))}
        </nav>
      )}
    </header>
  )
}

// ---------- HERO ----------
function Hero() {
  return (
    <section className="hero">
      <p className="tagline">React.js • JavaScript • Tailwind CSS • Frontend</p>

      {/* Big name sits BEHIND the photo (z-index 1 vs 2) */}
      <h1 className="big-name">
        <span>Chetan</span> <span>Kumar</span>
      </h1>

      <img className="hero-photo" src={portrait} alt="Chetan" />

      <div className="hero-left">
        <p>Pixel-accurate & high-performance web apps.</p>
        <a className="cta" href="#projects">View projects →</a>
      </div>

      <ul className="hero-right">
        <li>90+ Lighthouse scores</li>
        <li>Mobile-first design</li>
        <li>Clean React architecture</li>
      </ul>
    </section>
  )
}

// ---------- ABOUT ----------
function About() {
  return (
    <section id="about" className="section">
      <h2>About me</h2>
      <div className="about-grid">
        <img src={aboutPhoto} alt="Chetan side profile" />
        <div>
          <p className="big-text">
            I’m Chetan, a frontend developer based in New Delhi. I build responsive,
            accessible and fast web apps with React.js, JavaScript and Tailwind CSS.
          </p>
          <p>Looking for a full-time Frontend / React role in Delhi NCR. Available immediately.</p>
          <div className="stats">
            <div><b>90+</b><span>Lighthouse scores</span></div>
            <div><b>5+</b><span>freelance clients</span></div>
            <div><b>5+</b><span>GitHub repos</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------- SERVICES ----------
function Services() {
  return (
    <section id="services" className="section">
      <h2>Services</h2>
      <div className="services">
        {services.map((s, i) => (
          <article className="service" key={s.title}>
            <span className="service-num">0{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

// ---------- PROJECTS ----------
function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Selected projects</h2>
      <div className="cards">
        {projects.map((p) => (
          <article className="card" key={p.title}>
            <h3>{p.title} <small>{p.year}</small></h3>
            <div className="tags">
              {p.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
            </div>
            <ul>
              {p.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <div className="card-stats">
              {p.stats.map(([number, label]) => (
                <div key={label}><b>{number}</b><span>{label}</span></div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

// ---------- EXPERIENCE + SKILLS ----------
function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="timeline">
        {jobs.map((job) => (
          <div className="job" key={job.company}>
            <h3>{job.company}</h3>
            <p><b>{job.role}</b> · {job.date}</p>
            <p>{job.text}</p>
          </div>
        ))}
      </div>

      <h2 className="skills-title">Skills</h2>
      <div className="skills">
        {skills.map((s) => <span key={s}>{s}</span>)}
      </div>
    </section>
  )
}

// ---------- FOOTER ----------
function Footer() {
  return (
    <footer id="contact" className="footer">
      <h2>Let’s build something fast.</h2>
      <a className="cta" href="mailto:chetan730366@gmail.com">Contact me</a>
      <p>chetan730366@gmail.com</p>
      <p>+91-7303662463 · New Delhi</p>
      <p>
        <a href="https://github.com/Chetan730366">GitHub</a> ·{' '}
        <a href="https://www.linkedin.com/in/chetan-kumar-402804229/">LinkedIn</a>
      </p>
    </footer>
  )
}

// ---------- APP (puts everything together) ----------
function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Footer />
    </>
  )
}

export default App

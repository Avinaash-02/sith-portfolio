import { useState, useEffect } from 'react';
import GradientMarqueeText from './GradientMarqueeText';
import vader from './images/anaki.png';
import leetcodeLogo from './images/leetcode.png';
import githubLogo from './images/github.png';
import geeksLogo from './images/icons8-geeksforGeeks.png';
import Linkedin from './images/linkedin-logo.png';
import starWarsLogo from './images/icons8-star-wars-50.png';
import vaderVideo from './images/vader.mp4';
import resumePDF from './images/Avinaash-Venkat-Resume.pdf';
import vaderBreathing from './images/vader-breathing.mp3';
import './App.css';
import htmlImage from './images/html.png';
import jqueryImage from './images/jquery.png';
import javascriptImage from './images/javascript.png';
import sassImage from './images/sass.png';
import angularjsImage from './images/angularjs.png';
import pythonImage from './images/python.png';
import typescriptImage from './images/typescript.png';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const getRandomPosition = () => {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    return { x, y };
  };

  // Generate random positions for the Star Wars logo
  const backgroundStyles = Array.from({ length: 1}, () => {
    const { x, y } = getRandomPosition();
    return {
      backgroundImage: `url(${starWarsLogo})`,
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
      width: '50px',
      height: '50px',
      backgroundSize: 'contain',
    };
  });

  const triggerExplosion = () => {
    const logo = document.querySelector('.star-wars-logo');
    if (!logo) return;
    const logoRect = logo.getBoundingClientRect();
    const centerX = logoRect.left + logoRect.width / 2;
    const centerY = logoRect.top + logoRect.height / 2;

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('span');
      particle.className = 'particle';
      particle.style.left = `${centerX}px`;
      particle.style.top = `${centerY}px`;
      document.body.appendChild(particle);

      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 150 + 50;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      particle.animate(
        [
          { transform: 'translate(0, 0)', opacity: 1 },
          { transform: `translate(${x}px, ${y}px)`, opacity: 0 },
        ],
        {
          duration: 700,
          easing: 'ease-out',
          fill: 'forwards',
        }
      );

      setTimeout(() => particle.remove(), 700);
    }
  };

  const handleResumeClick = (e) => {
    e.preventDefault();
    triggerExplosion();

    setTimeout(() => {
      const link = document.createElement('a');
      link.href = resumePDF;
      link.download = 'Avinaash-Venkat-Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 700);
  };

  return (
    <>
      {/* ✅ Only one video background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            objectFit: 'cover',
            width: '100vw',
            height: '100vh',
            opacity: 0.2,
          }}
        >
          <source src={vaderVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* 🔊 Darth Vader Breathing Audio */}
        <audio src={vaderBreathing} autoPlay loop />
      </div>

      {loading ? (
        <div id="loader">
          <div className="ls-particles ls-part-1"></div>
          <div className="ls-particles ls-part-2"></div>
          <div className="ls-particles ls-part-3"></div>
          <div className="ls-particles ls-part-4"></div>
          <div className="ls-particles ls-part-5"></div>
          <div className="lightsaber ls-left ls-green"></div>
          <div className="lightsaber ls-right ls-red"></div>
          <div className="message">
            All I am surrounded by is <b>Fear</b> and <b>Dead Men......</b>
          </div>
        </div>
      ) : (
        <>
          {/* Random Star Wars Logo Backgrounds */}
          {backgroundStyles.map((style, index) => (
            <div key={index} style={style}></div>
          ))}

          {/* Navigation bar */}
          <div className="nav">
            <ul>
              <button
                onClick={handleResumeClick}
                className="star-wars-button"
                type="button"
              >
                Resume
              </button>
            </ul>

            <div
              style={{
                position: 'fixed',
                top: '10px',
                left: '10px',
                zIndex: 9999,
              }}
            ></div>

            {/* ✅ Keep logo exactly here */}
            <div className="logo-container">
              <GradientMarqueeText text="AvinaashVenkat" />
            </div>
          </div>

          {/* Blocks */}
          <div className="outer-container">
            <div className="block-container">
              <div className="block">
                <img
                  className="photo"
                  src={vader}
                  alt="personal-image"
                  style={{ height: '150px' }}
                />
                <div style={{ marginLeft: '20px' }}>
                  <p>
                    A <strong>developer forged in failure, fueled by passion</strong>, and driven to build — despite the challenges that come with the grind. My journey through coding has not always been smooth, but it has taught me the value of persistence, adaptability, and growth. With every project, I strive to learn more, build better, and create meaningful digital experiences. I'm a <strong>Python Developer</strong> with expertise in <strong>Web Development</strong>, focusing on front-end technologies, <strong>AI</strong>, and <strong>Scalable Application Design</strong>. I’m deeply invested in crafting intuitive, user-centric designs that work seamlessly across devices. I believe that <strong>collaboration</strong> and <strong>communication</strong> are key to achieving great results, and I am always excited to work with like-minded teams to bring ideas to life.
                  </p>
                  <p>
                    My technical skills include Python, HTML/CSS, Bootstrap, React, and more — combined with a passion for solving complex problems and optimizing performance.
                  </p>
                  <h3>🌟 Key Highlights:</h3>
                  <ul>
                    <li><strong>Python & AI</strong>: Built an NLP-based customer feedback analyzer using Python (NLTK, NLP).</li>
                    <li><strong>Full-Stack Web Development</strong>: Experienced in HTML, CSS, JavaScript, and React.</li>
                    <li><strong>Optimizing Performance</strong>: Reduced website load times by 20%, improving user experience.</li>
                    <li><strong>Blockchain Experience</strong>: Worked with MetaMask and Hardhat for secure file transfers.</li>
                    <li><strong>Hackathon Winner</strong>: 2x Hackathons, SIH 2023 Finalist.</li>
                  </ul>
                  <h3>🔧 Skills & Tools:</h3>
                  <ul>
                    <li><strong>Languages</strong>: Python, JavaScript</li>
                    <li><strong>Technologies</strong>: React.js, Flask, HTML5, CSS3, Bootstrap</li>
                    <li><strong>Tools</strong>: GitHub, VScode, Figma, Balsamiq, SQL</li>
                    <li><strong>APIs</strong>: Gemini, gTTS, NLTK</li>
                    <li><strong>Others</strong>: Agile methodologies, Prototyping, Web Design</li>
                  </ul>
                  <h3>📚 Education:</h3>
                  <p><strong>B.Tech in Information Technology</strong> - Sri Sairam Engineering College | <strong>CGPA: 7.99</strong> (May 2025), Chennai</p>
                  <h3>📈 Achievements:</h3>
                  <ul>
                    <li>University Rank 23 (GeeksForGeeks)</li>
                    <li>5x Hackathon Winner & SIH 2023 Finalist</li>
                    <li>8x Winner in Inter-College Coding & Web Design Events</li>
                    <li>Completed certifications in <strong>Generative AI</strong>, <strong>Responsive Web Design</strong>, and <strong>Cyber Security Essentials</strong>.</li>
                  </ul>
                </div>

                {/* Leetcode, GitHub, and GeeksForGeeks logos section */}
                <div className="links-section" style={{ marginTop: '20px' }}>
                  <h3>Find me here:</h3>
                  <div
                    className="social-links"
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <a
                      href="https://leetcode.com/u/Vader_darkside/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginRight: '20px' }}
                    >
                      <img src={leetcodeLogo} alt="LeetCode" style={{ height: '40px' }} />
                    </a>
                    <a
                      href="https://github.com/Avinaash-02"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginRight: '20px' }}
                    >
                      <img src={githubLogo} alt="GitHub" style={{ height: '40px' }} />
                    </a>
                    <a
                      href="https://www.geeksforgeeks.org/user/zacky_naash/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={geeksLogo} alt="GeeksForGeeks" style={{ height: '40px' }} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/avinaash-venkat-b-852671222/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={Linkedin} alt="Linkedin" style={{ height: '40px' }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Linktree and timeline */}
          <div className="linktree">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-line"></div>
                <div className="timeline-content">
                  <p className="my-status"><strong><h3>Story of Unlucky Sith Since 21 years</h3></strong></p>
                  <p><strong>November 2021:</strong> Started learning to code with HTML, CSS, and JavaScript.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line"></div>
                <div className="timeline-content">
                  <p><strong>Whole Year 2022:</strong> Rigorous Coder Participates in various hackathons.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line"></div>
                <div className="timeline-content">
                  <p><strong>Whole Year 2023:</strong> Building cool apps and Searching for Internships (Got One).</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line"></div>
                <div className="timeline-content">
                  <p><strong>October - December 2023:</strong> Web Developer Intern At TriHusLab Learned PHP, Python Processing.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line"></div>
                <div className="timeline-content">
                  <p><strong>Whole Year 2024:</strong> Attending College Placements whole hella competition got  ( 2 offers) </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-line"></div>
                <div className="timeline-content">
                  <p><strong>2025 Bad Year Since 21 years</strong> Searching for Position that align with my Skills  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="stack">
            <p>Tech stacks</p>
            <div className="tech-stack-images" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
              <img src={htmlImage} alt="HTML" style={{ height: '110px', width: '110px', objectFit: 'contain' }} />
              <img src={jqueryImage} alt="jQuery" style={{ height: '110px', width: '110px', objectFit: 'contain' }} />
              <img src={javascriptImage} alt="JavaScript" style={{ height: '110px', width: '110px', objectFit: 'contain' }} />
              <img src={sassImage} alt="Sass" style={{ height: '110px', width: '110px', objectFit: 'contain' }} />
              <img src={angularjsImage} alt="AngularJS" style={{ height: '110px', width: '110px', objectFit: 'contain' }} />
              <img src={pythonImage} alt="Python" style={{ height: '110px', width: '110px', objectFit: 'contain' }} />
              <img src={typescriptImage} alt="TypeScript" style={{ height: '110px', width: '110px', objectFit: 'contain' }} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <p className="skills-description">
        Technologies, tools, and fundamentals I use and continue learning as a developer.
      </p>

      <div className="skills-grid">
        
        <div className="skills-card">
          <h3>Programming Languages</h3>
          <div className="skills-icons">
            <div>
              <i className="devicon-javascript-plain"></i>
              <span>JavaScript (ES6+)</span>
            </div>
            <div>
              <i className="devicon-python-plain"></i>
              <span>Python</span>
            </div>
          </div>
        </div>

        <div className="skills-card">
          <h3>Frontend Technologies</h3>
          <div className="skills-icons">
            <div>
              <i className="devicon-react-original"></i>
              <span>React</span>
            </div>
            <div>
              <i className="devicon-html5-plain"></i>
              <span>HTML5</span>
            </div>
            <div>
              <i className="devicon-css3-plain"></i>
              <span>CSS3</span>
            </div>
            <div>
              <i className="devicon-sass-original"></i>
              <span>SASS</span>
            </div>
          </div>
        </div>

        <div className="skills-card">
          <h3>Frameworks & Libraries</h3>
          <div className="skills-icons">
            <div>
              <i className="devicon-bootstrap-plain"></i>
              <span>Bootstrap</span>
            </div>
            <div>
              <i className="devicon-tailwindcss-original"></i>
              <span>Tailwind CSS</span>
            </div>
            <div>
              <i className="devicon-jquery-plain"></i>
              <span>jQuery</span>
            </div>
            <div>
              <i className="devicon-jest-plain"></i>
              <span>Jest</span>
            </div>
          </div>
        </div>

        <div className="skills-card">
          <h3>Tools & Platforms</h3>
          <div className="skills-icons">
            <div>
              <i className="devicon-git-plain"></i>
              <span>Git</span>
            </div>
            <div>
              <i className="devicon-github-original"></i>
              <span>GitHub</span>
            </div>
            <div>
              <i className="devicon-linux-plain"></i>
              <span>Linux</span>
            </div>
            <div>
              <i className="devicon-postman-plain"></i>
              <span>Postman</span>
            </div>
            <div>
              <i className="devicon-nodejs-plain"></i>
              <span>Node.js</span>
            </div>
          </div>
        </div>

        <div className="skills-card">
          <h3>Cybersecurity</h3>
          <div className="skills-icons">
            <div>
              <i className="fa-solid fa-shield-halved"></i>
              <span>Cybersecurity Fundamentals</span>
            </div>
            <div>
              <i className="fa-solid fa-user-secret"></i>
              <span>Ethical Hacking Basics</span>
            </div>
          </div>
        </div>

        <div className="skills-card">
          <h3>Databases & Cloud</h3>
          <div className="skills-icons">
            <div>
              <i className="devicon-mongodb-plain"></i>
              <span>MongoDB Atlas</span>
            </div>
            <div>
              <i className="devicon-firebase-plain"></i>
              <span>Firebase</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills

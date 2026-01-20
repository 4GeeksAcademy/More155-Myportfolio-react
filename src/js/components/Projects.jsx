function Projects() {
  return (
    <section id="projects">
      <header className="header-p">
        <div className="header-content">
          <h2>Projects</h2>
          <p>
            Here are some of my favorite projects that showcase my skills and creativity.
          </p>
        </div>
      </header>

      <div className="projects-grid">

        <article className="project-card gradient-pink">
          <div className="project-info">
            <h3>Guess The Word</h3>
            <p>Word guessing game with hints and limited attempts.</p>

            <div className="tech-stack">
              <span className="badge js">JavaScript</span>
              <span className="badge html">HTML</span>
              <span className="badge css">CSS</span>
            </div>

            <a href="https://github.com/More155/GuessTheWordGame" target="_blank">
              View on GitHub
            </a>
          </div>
        </article>

        <article className="project-card gradient-green">
          <div className="project-info">
            <h3>Income-Expense Tracker</h3>
            <p>Personal finance tracker with charts.</p>

            <div className="tech-stack">
              <span className="badge js">JavaScript</span>
              <span className="badge chart">Chart.js</span>
              <span className="badge html">HTML</span>
              <span className="badge css">CSS</span>
            </div>

            <a href="https://github.com/More155/Income-ExpenseTracker" target="_blank">
              View on GitHub
            </a>
          </div>
        </article>

        <article className="project-card gradient-blue">
          <div className="project-info">
            <h3>Klondike Solitaire</h3>
            <p>Classic solitaire with drag & drop.</p>

            <div className="tech-stack">
              <span className="badge js">JavaScript</span>
              <span className="badge jquery">jQuery</span>
              <span className="badge html">HTML</span>
              <span className="badge css">CSS</span>
            </div>

            <a href="https://github.com/More155/Solitaire" target="_blank">
              View on GitHub
            </a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Projects

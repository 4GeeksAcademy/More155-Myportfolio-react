function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm">
      <div className="container">

        <a className="navbar-brand fw-bold text-primary" href="#home">Portfolio</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

            <li className="nav-item">
              <a className="nav-link fw-bold text-dark" href="#about">About Me</a>
            </li>

             <li className="nav-item">
              <a className="nav-link fw-bold text-dark" href="#skills">Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-dark" href="#projects">Projects</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-dark" href="#contact">Contact 💌</a>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  ) 
}

export default Navbar

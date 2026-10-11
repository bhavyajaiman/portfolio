
import "./App.css";

const applications = [
  {
    id: "01",
    icon: "◈",
    title: "RESEARCH",
    subtitle: "Research questions and methods",
    description: "Explore my work in radar remote sensing and forest biomass estimation.",
  },
  {
    id: "02",
    icon: "▤",
    title: "PUBLICATIONS",
    subtitle: "Papers and proceedings",
    description: "A catalogue of journal articles, conference papers, and research outputs.",
  },
  {
    id: "03",
    icon: "▧",
    title: "PROJECTS",
    subtitle: "Research files and experiments",
    description: "Explore NISAR data analysis, biomass retrieval, model calibration, and validation.",
  },
  {
    id: "04",
    icon: "▣",
    title: "ACADEMIC CV",
    subtitle: "Education and experience",
    description: "Academic background, research experience, and professional activities.",
  },
];

function App() {
  return (
    <main className="workstation">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">B.</span>
          <div>
            <p className="brand-name">BHAVYA JAIMAN</p>
            <p className="brand-caption">PERSONAL RESEARCH SYSTEM</p>
          </div>
        </div>

        <div className="system-status">
          <span className="status-light" />
          SYSTEM ONLINE
        </div>
      </header>

      <section className="hero">
        <p className="eyebrow">RESEARCHER PROFILE / 001</p>
        <h1>
          Observing Earth.
          <br />
          <span>Understanding forests.</span>
        </h1>
        <p className="hero-description">
          PhD Research Scholar in Physics at IIT Indore, working on
          radar remote sensing, NISAR, and forest above-ground biomass
          estimation.
        </p>
        <div className="hero-tags">
          <span>SAR REMOTE SENSING</span>
          <span>EARTH OBSERVATION</span>
          <span>BIOMASS RETRIEVAL</span>
        </div>
      </section>

      <section className="applications">
        <div className="section-heading">
          <div>
            <p className="eyebrow">DIRECTORY / ROOT</p>
            <h2>Research workstation</h2>
          </div>
          <span className="file-count">04 MODULES</span>
        </div>

        <div className="application-grid">
          {applications.map((app) => (
            <article className="application-card" key={app.id}>
              <div className="card-top">
                <span className="app-icon">{app.icon}</span>
                <span className="app-id">MODULE {app.id}</span>
              </div>
              <h3>{app.title}</h3>
              <p className="card-subtitle">{app.subtitle}</p>
              <p className="card-description">{app.description}</p>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="current-project">
        <div className="project-label">
          <span className="status-light" />
          CURRENT RESEARCH
        </div>
        <div>
          <p className="eyebrow">PROJECT / NISAR-AGB</p>
          <h2>Above-ground biomass retrieval</h2>
          <p>
            Evaluating the NISAR retrieval algorithm using L-band
            SAR observations over tropical forests in Central India.
          </p>
        </div>
        <span className="project-index">01 — ACTIVE</span>
      </section>

      <footer className="footer">
        <span>BHAVYA JAIMAN © {new Date().getFullYear()}</span>
        <span>ACADEMIC WORKSTATION / V1.0</span>
      </footer>
    </main>
  );
}

export default App;

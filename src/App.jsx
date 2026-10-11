
import { useState } from "react";
import "./App.css";

const applications = [
  {
    id: "research",
    number: "01",
    icon: "◈",
    title: "RESEARCH",
    subtitle: "Research questions and methods",
    description: "Research interests, scientific objectives, and methodology.",
  },
  {
    id: "publications",
    number: "02",
    icon: "▤",
    title: "PUBLICATIONS",
    subtitle: "Papers and proceedings",
    description: "Journal articles, conference papers, and research outputs.",
  },
  {
    id: "projects",
    number: "03",
    icon: "▧",
    title: "PROJECTS",
    subtitle: "Research files and experiments",
    description: "Research workflows, experiments, and scientific results.",
  },
  {
    id: "cv",
    number: "04",
    icon: "▣",
    title: "ACADEMIC CV",
    subtitle: "Education and experience",
    description: "Academic background, research experience, and activities.",
  },
];

const windowContent = {
  research: {
    label: "RESEARCH DATABASE",
    heading: "Research interests",
    intro:
      "My research focuses on satellite remote sensing, radar scattering, and physics-based estimation of forest above-ground biomass.",
    records: [
      ["01", "NISAR MISSION", "L-band synthetic aperture radar observations"],
      ["02", "BIOMASS RETRIEVAL", "Physics-based inversion and model evaluation"],
      ["03", "MODEL VALIDATION", "Comparison with reference biomass datasets"],
      ["04", "GEOSPATIAL ANALYSIS", "Raster processing and multi-temporal analysis"],
    ],
  },
  publications: {
    label: "PUBLICATION DATABASE",
    heading: "Publications and papers",
    intro:
      "This section will contain verified publication records, conference papers, and research manuscripts.",
    records: [
      ["01", "JOURNAL ARTICLES", "Publication records to be added"],
      ["02", "CONFERENCE PAPERS", "Conference contributions to be added"],
      ["03", "PREPRINTS", "Preprints and manuscripts, where applicable"],
    ],
  },
  projects: {
    label: "PROJECT DIRECTORY",
    heading: "Research projects",
    intro:
      "A directory of research workflows, data products, experiments, and analysis projects.",
    records: [
      ["01", "NISAR L2 GCOV", "SAR observations and backscatter analysis"],
      ["02", "MODEL CALIBRATION", "Parameter estimation and inversion experiments"],
      ["03", "BIOMASS MAPPING", "Retrieval, validation, and spatial analysis"],
    ],
  },


  cv: {
    label: "ACADEMIC RECORDS",
    heading: "Academic Profile",
    intro:
      "Research Scholar at IIT Indore specializing in radar remote sensing, electromagnetic scattering, and forest above-ground biomass estimation.",

    records: [
      [
        "01",
        "EDUCATION",
        "PhD, IIT Indore (2025–present), CGPA 9.36/10.00.\n" +
          "Five-Year Integrated Master's in Physics, SVNIT Surat (2024), CGPA 8.88/10.00.",
      ],
      [
        "02",
        "RESEARCH EXPERIENCE — IIT INDORE",
        "Research Scholar, Satellite and Aerial Remote Sensing Lab (April 2025–present).\n" +
          "Forest biomass retrieval, NISAR ATBD implementation, Water Cloud Model, SAR backscatter modelling, and satellite data analysis.",
      ],
      [
        "03",
        "PROJECT RESEARCHER — IIT INDORE",
        "September 2024–April 2025.\n" +
          "Ground-truth biomass data collection, field-data integration, and forest biomass estimation workflows.",
      ],
      [
        "04",
        "DRDO — SOLID STATE PHYSICAL LABORATORY",
        "Project Researcher, Master's Thesis (May 2023–May 2024).\n" +
          "MEMS design and microfabrication, alkali atom vapour cells for chip-scale atomic clocks, microheater characterization, and driver-system development.",
      ],
      [
        "05",
        "DRDO — INSTRUMENTS R&D ESTABLISHMENT",
        "Intern (June–July 2022).\n" +
          "VNIR imaging spectrometer characterization, linear variable filter calibration, optical-system integration, and spectral analysis.",
      ],
      [
        "06",
        "PUBLICATIONS",
        "Dual-Polarimetric Scattering Information for AGB Modeling Using NISAR Simulated Data — Bhavya Jaiman and Unmesh Khati, PolInSAR 2026.\n" +
          "Experimental Study of Linear Variable Filter-Based Imaging Spectrometer in VNIR Waveband — Bhavya Jaiman and Siddharth Negi, EOP-2025.",
      ],
      [
        "07",
        "RESEARCH PROJECTS",
        "Investigation of charge transport in Cr-doped Mn₃TeO₆.\n" +
          "Fast Radio Bursts.\n" +
          "Classification of Radio Galaxies and Analysis of Quasar Redshift.",
      ],
      [
        "08",
        "TECHNICAL SKILLS",
        "Programming: Python, Bash, C, Java, HTML.\n" +
          "Remote sensing: SNAP, QGIS, Google Earth Engine.\n" +
          "Engineering: MATLAB, COMSOL Multiphysics, LTspice, Altium Designer, KiCad, and optical and microfabrication tools.",
      ],
      [
        "09",
        "TEST SCORES & ACHIEVEMENTS",
        "GATE Physics 2025: AIR 433, score 543.\n" +
          "International Olympiad of Mathematics 2017 (Level 2): AIR 8, SilverZone Foundation.\n" +
          "Special Achievement Certificate: State Rank 2 (2018).",
      ],
    ],
  },


};


function App() {
  const [activeWindow, setActiveWindow] = useState(null);
  const [minimized, setMinimized] = useState(false);
  const [expandedItems, setExpandedItems] = useState([]);

  const openWindow = (id) => {
    setActiveWindow(id);
    setMinimized(false);
    setExpandedItems([]);
  };

  const closeWindow = () => {
    setActiveWindow(null);
    setMinimized(false);
    setExpandedItems([]);
  };

  const toggleItem = (id) => {
    setExpandedItems((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const currentContent = activeWindow
    ? windowContent[activeWindow]
    : null;

  const renderCV = () => (
    <div className="cv-tree">
      {currentContent.sections.map((section) => {
        const sectionOpen = expandedItems.includes(section.id);

        return (
          <section className="tree-section" key={section.id}>
            <button
              className="tree-heading"
              onClick={() => toggleItem(section.id)}
              aria-expanded={sectionOpen}
            >
              <span>{sectionOpen ? "▾" : "▸"}</span>
              <span>{section.title}</span>
            </button>

            {sectionOpen && (
              <div className="tree-children">
                {section.entries.map((entry, index) => {
                  const entryId = `${section.id}-${index}`;
                  const entryOpen = expandedItems.includes(entryId);

                  return (
                    <div className="tree-entry" key={entryId}>
                      <button
                        className="tree-entry-heading"
                        onClick={() => toggleItem(entryId)}
                        aria-expanded={entryOpen}
                      >
                        <span>{entryOpen ? "▾" : "▸"}</span>
                        <span className="tree-entry-name">
                          {entry.title}
                        </span>
                        {entry.period && (
                          <span className="tree-date">
                            {entry.period}
                          </span>
                        )}
                      </button>

                      {entryOpen && (
                        <div className="tree-details">
                          {entry.location && (
                            <p className="detail-meta">
                              LOCATION: {entry.location}
                            </p>
                          )}

                          {entry.period && (
                            <p className="detail-meta">
                              PERIOD: {entry.period}
                            </p>
                          )}

                          {entry.roles ? (
                            entry.roles.map((role, roleIndex) => {
                              const roleId =
                                `${entryId}-role-${roleIndex}`;
                              const roleOpen =
                                expandedItems.includes(roleId);

                              return (
                                <div className="tree-role" key={roleId}>
                                  <button
                                    className="tree-role-heading"
                                    onClick={() => toggleItem(roleId)}
                                    aria-expanded={roleOpen}
                                  >
                                    <span>{roleOpen ? "▾" : "▸"}</span>
                                    <span>{role.title}</span>
                                    <span className="tree-date">
                                      {role.period}
                                    </span>
                                  </button>

                                  {roleOpen && (
                                    <div className="role-details">
                                      {role.details?.map((detail) => (
                                        <p key={detail}>{detail}</p>
                                      ))}

                                      {role.skills && (
                                        <p>
                                          <strong>CORE AREAS:</strong>{" "}
                                          {role.skills}
                                        </p>
                                      )}

                                      {role.tools && (
                                        <p>
                                          <strong>TOOLS:</strong>{" "}
                                          {role.tools}
                                        </p>
                                      )}
                                    </div>
                                  )}
                                </div>
                              );
                            })
                          ) : (
                            <>
                              {entry.details?.map((detail) => (
                                <p key={detail}>{detail}</p>
                              ))}
                              {entry.skills && (
                                <p><strong>SKILLS:</strong> {entry.skills}</p>
                              )}
                              {entry.tools && (
                                <p><strong>TOOLS:</strong> {entry.tools}</p>
                              )}
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );

  return (
    <main className="desktop">
      <header className="desktop-topbar">
        <div className="desktop-brand">
          <span className="brand-mark">B.</span>
          <span>BHAVYA JAIMAN</span>
        </div>

        <div className="desktop-status">
          <span className="status-light" />
          SYSTEM ONLINE
        </div>
      </header>

      <section className="desktop-area">
        <div className="desktop-label">
          PERSONAL RESEARCH SYSTEM / DESKTOP
        </div>

        <div className="desktop-icons">
          {applications.map((app) => (
            <button
              className="desktop-icon"
              key={app.id}
              onClick={() => openWindow(app.id)}
            >
              <span className="desktop-icon-symbol">
                {app.icon}
              </span>
              <span>{app.title}</span>
            </button>
          ))}
        </div>

        {!activeWindow && (
          <div className="desktop-hint">
            SELECT AN APPLICATION TO OPEN
          </div>
        )}

        {activeWindow && !minimized && currentContent && (
          <section className="desktop-window">
            <header className="window-titlebar">
              <div className="window-title">
                <span className="window-indicator" />
                {currentContent.label}
              </div>

              <div className="window-controls">
                <button
                  onClick={() => setMinimized(true)}
                  aria-label="Minimize window"
                  title="Minimize"
                >
                  −
                </button>
                <button
                  onClick={closeWindow}
                  aria-label="Close window"
                  title="Close"
                >
                  ×
                </button>
              </div>
            </header>

            <div className="window-toolbar">
              <span>FILE</span>
              <span>VIEW</span>
              <span>HELP</span>
              <span className="toolbar-path">
                /{activeWindow.toUpperCase()}
              </span>
            </div>

            <div className="desktop-window-content">
              <p className="eyebrow">
                DATABASE / {activeWindow.toUpperCase()}
              </p>

              <h1>{currentContent.heading}</h1>
              <p className="window-intro">{currentContent.intro}</p>

              {activeWindow === "cv" && currentContent.sections ? (
                renderCV()
              ) : (
                <div className="record-list">
                  {currentContent.records?.map(
                    ([number, title, description]) => (
                      <article className="record" key={number}>
                        <span className="record-number">{number}</span>
                        <div>
                          <h3>{title}</h3>
                          <p>{description}</p>
                        </div>
                      </article>
                    )
                  )}
                </div>
              )}
            </div>

            <footer className="window-statusbar">
              <span>LOCAL SYSTEM</span>
              <span>STATUS: READY</span>
            </footer>
          </section>
        )}
      </section>

      <footer className="desktop-taskbar">
        <button
          className="taskbar-home"
          onClick={closeWindow}
          title="Return to desktop"
        >
          B.
        </button>

        <div className="taskbar-apps">
          {activeWindow && (
            <button
              className={`taskbar-item ${!minimized ? "taskbar-active" : ""}`}
              onClick={() => setMinimized(!minimized)}
            >
              ▣ {windowContent[activeWindow].label}
            </button>
          )}
        </div>

        <div className="taskbar-clock">BHAVYA / 001</div>
      </footer>
    </main>
  );
}


export default App;

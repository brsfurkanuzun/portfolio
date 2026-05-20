import { useState, useEffect } from "react";
import "./style.css";
import Icon from "../../assets/miscellaneous";
import DecryptedText from "../DecryptedText";
import Marquee from "react-fast-marquee";
import { useTranslation } from "../../context/LanguageContext";

const techs = [
  "Figma",
  "React",
  "React Native",
  "C#",
  "Java",
  "Python",
  "CSS",
  ".NET Core",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "Docker",
  "Kafka",
  "Next.js",
  "GraphQL",
  "REST API",
  "SQL",
  "MongoDB",
  "Kubernetes",
  "Git",
  "Sass",
  "Webpack",
  "Three.js",
  "Unity",
  "Blender",
  "SketchUp",
  "n8n",
];

const spaces = [
  { name: "Instagram", href: "https://www.instagram.com/barisfurkanuzun/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/barisfurkanuzun/" },
  { name: "GitHub", href: "https://github.com/brsfurkanuzun" },
  { name: "X", href: "https://x.com/barisfurkanuzun" },
];

const Miscellaneous = () => {
  const t = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ height: "100vh", display: "flex" }}>
      <div className="blured-container-misc">
        <div className="blured-container-content-misc">
          <div className="title-container">
            <Icon
              primaryColor="var(--icon-color1)"
              secondaryColor="var(--icon-color2)"
            />
            <div>
              <h1 className="title">
                <DecryptedText
                  sequential
                  animateOn="view"
                  text={t.misc.title1}
                  speed={120}
                />
              </h1>
              <h1 className="title">
                <DecryptedText
                  sequential
                  animateOn="view"
                  text={t.misc.title2}
                  speed={120}
                />
              </h1>
            </div>
          </div>

          <div
            className="info-container"
            style={{ flexDirection: isMobile ? "column" : "row" }}
          >
            <div className="info-section">
              <h3>{t.misc.education}</h3>
              <div>
                <p>{t.misc.educationLine}</p>
                <h4>{t.misc.educationDegree}</h4>
                <p>{t.misc.educationText}</p>
              </div>
            </div>

            <div className="info-section">
              <h3>{t.misc.technology}</h3>
              {isMobile ? (
                <div style={{ width: "100%", overflow: "hidden" }}>
                  <Marquee speed={25}>
                    {techs.map((tech, index) => (
                      <div
                        key={index}
                        style={{
                          marginRight: "1.5rem",
                          padding: "0.3rem 0.8rem",
                          backgroundColor: "var(--tag-button-background)",
                          borderRadius: "999px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {tech}
                      </div>
                    ))}
                  </Marquee>
                </div>
              ) : (
                <div className="tags-container">
                  {techs.map((tech, index) => (
                    <div key={index} className="tags-button">
                      <p>{tech}</p>
                    </div>
                  ))}
                </div>
              )}

              {isMobile && (
                <div style={{ marginTop: "1rem" }}>
                  <h3>{t.misc.mySpaces}</h3>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      alignItems: "center",
                    }}
                  >
                    {spaces.map((space, idx) => (
                      <span
                        key={idx}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={space.href}
                          style={{ textDecoration: "none" }}
                        >
                          {space.name}
                        </a>
                        {idx < spaces.length - 1 && (
                          <span style={{ margin: "0 0.5rem" }}>•</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {!isMobile && (
        <div className="right-panel-container">
          <div style={{ flexDirection: "column", display: "flex" }}>
            <h3>{t.misc.mySpaces}</h3>
            {spaces.map((space, idx) => (
              <a key={idx} target="_blank" rel="noreferrer" href={space.href}>
                {space.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Miscellaneous;

import { useState, useEffect, useRef } from "react";
import "./style.css";
import Memoji from "../../assets/memoji.webp";
import DecryptedText from "../DecryptedText";
import Marquee from "react-fast-marquee";
import { useLanguage, useTranslation } from "../../context/LanguageContext";

const About = () => {
  const { language } = useLanguage();
  const t = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState<"about" | "journey">("about");
  const touchStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <div className="blured-container-about">
        <div className="blured-container-content-about">
          <div className="title-container-about">
            <div className="img-container">
              <img src={Memoji} alt="Profile" className="about-profile-img" />
            </div>
            <div>
              <h1 className="title">
                <DecryptedText
                  key={`${language}-hello`}
                  sequential
                  animateOn="view"
                  text={t.about.hello}
                  speed={120}
                />
              </h1>
              <h1 className="title">
                <DecryptedText
                  key={`${language}-im`}
                  sequential
                  animateOn="view"
                  text={t.about.im}
                  speed={120}
                />
              </h1>
              <h1 className="title">
                <DecryptedText
                  key={`${language}-role`}
                  sequential
                  animateOn="view"
                  text={t.about.role}
                  speed={120}
                />
              </h1>
            </div>
          </div>

          {isMobile && (
            <div className="mobile-tabs">
              <h3
                className={activeTab === "about" ? "active" : ""}
                onClick={() => setActiveTab("about")}
              >
                {t.about.aboutMe}
              </h3>
              <h3
                className={activeTab === "journey" ? "active" : ""}
                onClick={() => setActiveTab("journey")}
              >
                {t.about.myJourney}
              </h3>
            </div>
          )}

          <div className="info-container">
            {(!isMobile || activeTab === "about") && (
              <div
                className="info-section"
                onTouchStart={(e) => {
                  const touch = e.touches[0];
                  touchStartRef.current = {
                    x: touch.clientX,
                    y: touch.clientY,
                  };
                }}
                onTouchMove={(e) => {
                  const touch = e.touches[0];
                  const deltaX = Math.abs(
                    touch.clientX - touchStartRef.current.x
                  );
                  const deltaY = Math.abs(
                    touch.clientY - touchStartRef.current.y
                  );
                  if (deltaY > deltaX) e.stopPropagation();
                }}
              >
                <div className="paragraph">
                  <p>
                    {t.about.aboutP1}
                    <span className="gradient-text">{t.about.aboutP1Highlight}</span>
                    {t.about.aboutP1After}
                  </p>
                  <p>{t.about.aboutP2}</p>
                  <p>
                    {t.about.aboutP3.split("{good}")[0]}
                    <span className="gradient-text">{t.about.aboutP3Good}</span>
                    {t.about.aboutP3.split("{good}")[1]?.split("{loyal}")[0]}
                    <span className="gradient-text">{t.about.aboutP3Loyal}</span>
                    {t.about.aboutP3.split("{loyal}")[1]?.split("{loving}")[0]}
                    <span className="gradient-text">{t.about.aboutP3Loving}</span>
                    {t.about.aboutP3.split("{loving}")[1]?.split("{caring}")[0]}
                    <span className="gradient-text">{t.about.aboutP3Caring}</span>
                    {t.about.aboutP3.split("{caring}")[1]}
                  </p>
                </div>
              </div>
            )}

            {(!isMobile || activeTab === "journey") && (
              <div
                className="info-section"
                onTouchStart={(e) => {
                  const touch = e.touches[0];
                  touchStartRef.current = {
                    x: touch.clientX,
                    y: touch.clientY,
                  };
                }}
                onTouchMove={(e) => {
                  const touch = e.touches[0];
                  const deltaX = Math.abs(
                    touch.clientX - touchStartRef.current.x
                  );
                  const deltaY = Math.abs(
                    touch.clientY - touchStartRef.current.y
                  );
                  if (deltaY > deltaX) e.stopPropagation();
                }}
              >
                <div className="paragraph">
                  <p>{t.about.journeyP1}</p>
                  <p>{t.about.journeyP2}</p>
                  <p>
                    {t.about.journeyP3.split("{skilled}")[0]}
                    <span className="gradient-career">{t.about.journeySkilled}</span>
                    {t.about.journeyP3.split("{skilled}")[1]?.split("{reliable}")[0]}
                    <span className="gradient-career">{t.about.journeyReliable}</span>
                    {t.about.journeyP3.split("{reliable}")[1]?.split("{collaborative}")[0]}
                    <span className="gradient-career">{t.about.journeyCollaborative}</span>
                    {t.about.journeyP3.split("{collaborative}")[1]?.split("{quality}")[0]}
                    <span className="gradient-career">{t.about.journeyQuality}</span>
                    {t.about.journeyP3.split("{quality}")[1]?.split("{growing}")[0]}
                    <span className="gradient-career">{t.about.journeyGrowing}</span>
                    {t.about.journeyP3.split("{growing}")[1]}
                  </p>
                </div>
              </div>
            )}
          </div>

          {isMobile && (
            <div style={{ marginTop: "1rem", width: "100%" }}>
              <h3>{t.about.skills}</h3>
              <Marquee speed={25} gradient={false}>
                {t.tags.map((tag, index) => (
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
                    {tag}
                  </div>
                ))}
              </Marquee>
            </div>
          )}
        </div>
      </div>

      {!isMobile && (
        <div className="right-panel-container">
          <div>
            <h2>Furkan Uzun</h2>
            <p>@barisfurkanuzun</p>
            <a href="mailto:barisfurkanuz@gmail.com">barisfurkanuz@gmail.com</a>
          </div>
          <div className="tags-container">
            {t.tags.map((tag, index) => (
              <div key={index} className="tags-button">
                <p>{tag}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default About;

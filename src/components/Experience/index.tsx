import "./style.css";
import Icon from "../../assets/experience";
import DecryptedText from "../DecryptedText";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "../../context/LanguageContext";

const Experience = () => {
  const t = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`page ${isMobile ? "mobile-experience" : ""}`}>
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
              text={t.experience.title1}
              speed={120}
            />
          </h1>
          <h1 className="title">
            <DecryptedText
              sequential
              animateOn="view"
              text={t.experience.title2}
              speed={120}
            />
          </h1>
        </div>
      </div>

      <div
        className="blured-container-bottom"
        onTouchStart={(e) => {
          const touch = e.touches[0];
          touchStartRef.current = {
            x: touch.clientX,
            y: touch.clientY,
          };
        }}
        onTouchMove={(e) => {
          const touch = e.touches[0];
          const deltaX = Math.abs(touch.clientX - touchStartRef.current.x);
          const deltaY = Math.abs(touch.clientY - touchStartRef.current.y);

          if (deltaY > deltaX) {
            e.stopPropagation();
          }
        }}
      >
        {t.experience.jobs.map((job, index) => (
          <div className="job-container" key={index}>
            <div className="job-title-container">
              <h3>{job.title}</h3>
              <div className="location-container">
                <p>{job.company}</p>
                <div className="job-location">
                  <p>{job.location}</p>
                </div>
              </div>
            </div>
            <div className="job-date">
              <p>{job.year}</p>
            </div>
            <div className="job-resp">
              <h4>{t.experience.responsibilities}</h4>
              <ul>
                {job.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

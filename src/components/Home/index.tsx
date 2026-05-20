import "./style.css";
import Memoji from "../../assets/memoji.webp";
import CircularText from "../CircularText";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { getTranslation } from "../../i18n/translations";

const Home = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [barHeight, setBarHeight] = useState(0);
  const [heightTransition, setHeightTransition] = useState("1s ease-in-out");
  const [showMemoji, setShowMemoji] = useState(false);
  const barExpandedRef = useRef(false);

  useEffect(() => {
    const getFinalHeight = () => window.innerHeight / 2 + 75;

    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setBarHeight(150));
    });

    const expandTimer = setTimeout(() => {
      barExpandedRef.current = true;
      setHeightTransition("1.5s ease-in-out");
      setBarHeight(getFinalHeight());
    }, 1000);

    const memojiTimer = setTimeout(() => setShowMemoji(true), 2500);

    const handleResize = () => {
      if (barExpandedRef.current) {
        setBarHeight(getFinalHeight());
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(expandTimer);
      clearTimeout(memojiTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="home-container">
      <CircularText
        key={language}
        text={t.circularText}
        spinDuration={40}
        onHover="pause"
        className="home-circular-text"
        style={{
          opacity: showMemoji ? 1 : 0,
          transition: "opacity 1s ease-in-out",
          zIndex: 1,
        }}
      />

      <div
        className="img-container-home"
        style={{
          height: barHeight,
          transition: `height ${heightTransition}`,
        }}
      />
      <img
        src={Memoji}
        alt="Profile"
        className="home-profile-img"
        style={{
          opacity: showMemoji ? 1 : 0,
          transition: "opacity 1s ease-in-out",
        }}
      />
      <div
        className="home-intro-text"
        style={{
          opacity: showMemoji ? 1 : 0,
          transition: "opacity 1s ease-in-out",
        }}
      >
        <h1 className="home-name">Furkan Uzun</h1>
        <p className="home-username">@barisfurkanuzun</p>
      </div>

      <div className="scroll-container">
        <div className="mouse" />
        <h5>{t.scrollDown}</h5>
      </div>
    </div>
  );
};

export default Home;

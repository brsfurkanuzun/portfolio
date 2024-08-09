import runeLogo from "./assets/rune.svg";
import mountainTop from "./assets/mountainTop.svg";
import mountainBottom from "./assets/mountainBottom.svg";
import stars from "./assets/stars.svg";
import { SOCIAL_MEDIA, SHADOW } from "./constants/socialMedia";
import SocialMediaButton from "./components/SocialMediaButton";
import Timeline from "./components/Timeline";
import "./App.css";
import React, { useState } from "react";
import Toggle from "./components/DarkModeToggle";
import useLocalStorage from "use-local-storage";
import "./components/DarkModeToggle.css";
import resume from "./assets/resume/Furkan Uzun CV.pdf"

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  const [show, setShow] = useState(true);


  const downloadResume = ()=>{ 
    const test =document.createElement("a");
    test.href=resume;
    test.target='_blank';
    test.click();
   }

  
  return (
    <>
      <div className="intro" data-theme={isDark ? "dark" : "light"}>
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />

        <img
          src={mountainTop}
          
          style={{ position: "absolute", bottom: "0" }}
          
          alt=" "
        />
        <img
          src={stars}
          
          className="stars"
          
          alt=" "
        />
        {/* <div style={{ position: 'relative', width: '200px', height: '200px' }}> */}
      {show && (
        <div
          className="shooting-star"
          onAnimationEnd={() => setShow(false)} // Animasyon bitince noktayı gizle
        />
      )}
    {/* </div> */}
        
        
        <div style={{ display: "flex", alignItems: "center", zIndex: "1" }}>
          <img src={runeLogo} onClick={downloadResume}className="logo" alt="React logo" />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <h1 className="main-title-text fs-big" style={{ margin: "0" }}>
              Hi I'm <b className="greenText font-face-njord">Furkan</b>
            </h1>
            <h3 className="main-title-text fs-mid" style={{ margin: "0" }}>
              Full Stack Developer
            </h3>
          </div>
        </div>
        <div className="social-media">
          {SOCIAL_MEDIA.map((social, index) => (
            <SocialMediaButton
              key={index}
              url={social.url}
              logo={social.logo}
              background={social.background}
              shadow={SHADOW}
              textColor={social.textColor}
              text={social.text}
            />
          ))}
        </div>
      </div>

      <div className="main">
        <img
          src={mountainBottom}
          style={{ position: "absolute", top: "0" }}
          alt="React logo"
        />
        <Timeline />
      </div>
    </>
  );
}

export default App;

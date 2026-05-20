import "./style.css";
import Memoji from "../../assets/memoji.webp";
import CircularText from "../CircularText";
import { useEffect, useState } from "react";

const Home = () => {
  const [targetHeight, setTargetHeight] = useState(150);
  const [showMemoji, setShowMemoji] = useState(false);

  useEffect(() => {
    const screenMiddle = window.innerHeight / 2;
    const calculatedHeight = screenMiddle + 75;
    setTimeout(() => setTargetHeight(calculatedHeight), 1000);
    setTimeout(() => setShowMemoji(true), 2500);
  }, []);

  return (
    <>
      <div className="home-container">
        <CircularText
          text="Software Developer • Software Developer • "
          spinDuration={40}
          onHover="pause"
          style={{
            opacity: showMemoji ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />

        <div
          className="img-container-home"
          style={{
            height: targetHeight,
            mixBlendMode: "difference",
            backgroundColor: "white",
            transition: "height 1.5s ease-in-out",
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
          style={{
            position: "absolute",
            top: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            opacity: showMemoji ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >
          <h1 className="home-name">Furkan Uzun</h1>
          <p className="home-username">@barisfurkanuzun</p>
        </div>

        <div className="scroll-container">
          <div className="mouse" />
          <h5>SCROLL DOWN</h5>
        </div>
      </div>
    </>
  );
};

export default Home;

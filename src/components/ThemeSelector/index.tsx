import { useTheme } from "../../context/ThemeContext";
import { useState, useEffect } from "react";
import DarkIcon from "../../assets/darkIcon";
import LightIcon from "../../assets/lightIcon";

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px altı mobil kabul edelim
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) return null; // Mobilde hiç render etme

  const knobLeft = theme === "dark" ? "37.5px" : "2.5px";

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        position: "absolute",
        alignItems: "center",
        right: 0,
        margin: "5vh",
        zIndex: 5,
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      ></div>

      <div
        className="switch-toggle-container"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        style={{
          borderRadius: "9999px",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <div
          className="switch-toggle-knob"
          style={{
            position: "absolute",
            top: "50%",
            left: knobLeft,
            transform: "translateY(-50%)",
            borderRadius: "9999px",
            transition: "left 0.3s ease",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {theme === "dark" ? (
            <DarkIcon width={16} height={16} primaryColor={"#333333"} />
          ) : (
            <LightIcon width={16} height={16} primaryColor={"#ffffff"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;

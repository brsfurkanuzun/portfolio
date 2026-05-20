import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import DarkIcon from "../../assets/darkIcon";
import LightIcon from "../../assets/lightIcon";
import "./style.css";

const TopControls = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const knobLeft = theme === "dark" ? "37.5px" : "2.5px";

  return (
    <div className="top-controls">
      <div className="top-controls__lang">
        <button
          type="button"
          className={`lang-pill ${language === "tr" ? "active" : ""}`}
          onClick={() => setLanguage("tr")}
          aria-label="Türkçe"
        >
          TR
        </button>
        <button
          type="button"
          className={`lang-pill ${language === "en" ? "active" : ""}`}
          onClick={() => setLanguage("en")}
          aria-label="English"
        >
          EN
        </button>
      </div>

      <div
        className="switch-toggle-container"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        style={{ borderRadius: "9999px", position: "relative", cursor: "pointer" }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setTheme(theme === "dark" ? "light" : "dark");
          }
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
            <DarkIcon width={16} height={16} primaryColor="#333333" />
          ) : (
            <LightIcon width={16} height={16} primaryColor="#ffffff" />
          )}
        </div>
      </div>
    </div>
  );
};

export default TopControls;

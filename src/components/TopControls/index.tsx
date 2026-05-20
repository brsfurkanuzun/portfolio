import { useTheme } from "../../context/ThemeContext";
import { useLanguage, useTranslation } from "../../context/LanguageContext";
import DarkIcon from "../../assets/darkIcon";
import LightIcon from "../../assets/lightIcon";
import "./style.css";

const TopControls = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();
  const knobLeft = theme === "dark" ? "37.5px" : "2.5px";

  const toggleLanguage = () => setLanguage(language === "tr" ? "en" : "tr");

  return (
    <div className="top-controls">
      <button
        type="button"
        className="lang-pill lang-pill--toggle"
        onClick={toggleLanguage}
        aria-label={language === "tr" ? t.menu.switchToEn : t.menu.switchToTr}
      >
        {language === "tr" ? "EN" : "TR"}
      </button>

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

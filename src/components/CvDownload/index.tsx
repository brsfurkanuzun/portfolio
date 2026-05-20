import { useEffect, useRef, useState } from "react";
import { useTranslation } from "../../context/LanguageContext";
import { CV_PATHS } from "../../i18n/translations";
import ArrowIcon from "../../assets/arrowIcon";
import "./style.css";

interface CvDownloadProps {
  isMobile?: boolean;
}

const CvDownload = ({ isMobile = false }: CvDownloadProps) => {
  const t = useTranslation();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const downloadCv = (lang: "tr" | "en") => {
    const link = document.createElement("a");
    link.href = CV_PATHS[lang];
    link.download = lang === "tr" ? t.cv.fileNameTr : t.cv.fileNameEn;
    link.click();
    setOpen(false);
  };

  return (
    <div className="cv-download-wrapper" ref={wrapperRef}>
      {open && (
        <div className="cv-picker">
          <button
            type="button"
            className="cv-picker__btn"
            onClick={() => downloadCv("tr")}
            aria-label={t.cv.tr}
          >
            {t.cv.tr}
          </button>
          <button
            type="button"
            className="cv-picker__btn"
            onClick={() => downloadCv("en")}
            aria-label={t.cv.en}
          >
            {t.cv.en}
          </button>
        </div>
      )}
      <button
        type="button"
        className="next-button cv-download-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {isMobile ? (
          <ArrowIcon width={24} height={24} primaryColor="var(--bg-color)" />
        ) : (
          <>
            {t.cv.downloadLabel}{" "}
            <span className="neon-highlight">{t.cv.downloadHighlight}</span>
          </>
        )}
      </button>
    </div>
  );
};

export default CvDownload;

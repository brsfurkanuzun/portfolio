import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";
import "./swiper.css";
import { useRef, useState, useEffect, useMemo } from "react";
import { motion } from "motion/react";
import { useTheme } from "./context/ThemeContext";
import { useLanguage, useTranslation } from "./context/LanguageContext";

import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Miscellaneous from "./components/Miscellaneous";
import TopControls from "./components/TopControls";
import CvDownload from "./components/CvDownload";
import Shape from "./components/Shape";
import Intro from "./components/Intro";
import StaggeredMenu from "./components/StaggeredMenu";

export default function App() {
  const verticalSwiperRef = useRef<SwiperType | null>(null);
  const horizontalSwiperRef = useRef<SwiperType | null>(null);
  const [showIntro, setShowIntro] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language } = useLanguage();
  const t = useTranslation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuNavigation = (link: string) => {
    if (link === "/dark") {
      setTheme("dark");
      return;
    }
    if (link === "/light") {
      setTheme("light");
      return;
    }
    switch (link) {
      case "/":
        verticalSwiperRef.current?.slideTo(0);
        break;
      case "/about":
        verticalSwiperRef.current?.slideTo(1);
        horizontalSwiperRef.current?.slideTo(0);
        break;
      case "/services":
        verticalSwiperRef.current?.slideTo(1);
        horizontalSwiperRef.current?.slideTo(1);
        break;
      case "/contact":
        verticalSwiperRef.current?.slideTo(1);
        horizontalSwiperRef.current?.slideTo(2);
        break;
    }
  };

  const menuItems = useMemo(
    () => [
      { label: t.menu.home, ariaLabel: t.menu.home, link: "/" },
      { label: t.menu.about, ariaLabel: t.menu.about, link: "/about" },
      { label: t.menu.works, ariaLabel: t.menu.works, link: "/services" },
      { label: t.menu.misc, ariaLabel: t.menu.misc, link: "/contact" },
      {
        label: theme === "dark" ? t.menu.light : t.menu.dark,
        ariaLabel: theme === "dark" ? t.menu.light : t.menu.dark,
        link: theme === "dark" ? "/light" : "/dark",
      },
    ],
    [language, t, theme]
  );

  const socialItems = [
    { label: "Instagram", link: "https://www.instagram.com/barisfurkanuzun/" },
    { label: "LinkedIn", link: "https://www.linkedin.com/in/barisfurkanuzun/" },
    { label: "GitHub", link: "https://github.com/brsfurkanuzun" },
    { label: "X", link: "https://x.com/barisfurkanuzun" },
  ];

  return (
    <div style={{ height: "100vh", overflow: "hidden", position: "relative" }}>
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}

      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{ width: "100%", height: "100%" }}
        >
          <TopControls />
          <Shape />

          {isMobile && (
            <StaggeredMenu
              position="right"
              items={menuItems}
              socialItems={socialItems}
              displaySocials={true}
              displayItemNumbering={true}
              menuButtonColor={theme === "dark" ? "#ffffff" : "#000000"}
              openMenuButtonColor={theme === "dark" ? "#ffffff" : "#000000"}
              changeMenuColorOnOpen={true}
              colors={["#42e2f4", "#fbf2b1"]}
              accentColor="#42e2f4"
              onItemClick={handleMenuNavigation}
            />
          )}

          <Swiper
            direction="vertical"
            slidesPerView={1}
            mousewheel={true}
            modules={[Mousewheel]}
            onSwiper={(swiper) => (verticalSwiperRef.current = swiper)}
            style={{ width: "100vw", height: "100vh" }}
          >
            <SwiperSlide>
              <Home />
            </SwiperSlide>

            <SwiperSlide>
              <div className="custom-pagination"></div>
              <Swiper
                direction="horizontal"
                slidesPerView={1}
                mousewheel={{ forceToAxis: true }}
                modules={[Mousewheel, Pagination]}
                onSwiper={(swiper) => (horizontalSwiperRef.current = swiper)}
                style={{ width: "100vw", height: "100vh" }}
                pagination={{
                  el: ".custom-pagination",
                  clickable: true,
                  renderBullet: (index, className) =>
                    `<span class="${className}">${index + 1}</span>`,
                }}
              >
                <SwiperSlide>
                  <About />
                  {!isMobile && (
                    <div
                      onClick={() => horizontalSwiperRef.current?.slideNext()}
                      className="next-button"
                    >
                      {t.nav.goToExperience}{" "}
                      <span className="neon-highlight">{t.nav.experience}</span>
                    </div>
                  )}
                </SwiperSlide>

                <SwiperSlide>
                  <Experience />
                  {!isMobile && (
                    <div
                      onClick={() => horizontalSwiperRef.current?.slideNext()}
                      className="next-button"
                    >
                      {t.nav.goToMisc}{" "}
                      <span className="neon-highlight">{t.nav.miscellaneous}</span>
                    </div>
                  )}
                </SwiperSlide>

                <SwiperSlide>
                  <Miscellaneous />
                  <CvDownload isMobile={isMobile} />
                </SwiperSlide>
              </Swiper>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      )}
    </div>
  );
}

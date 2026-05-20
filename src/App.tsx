import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./swiper.css";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ArrowIcon from "./assets/arrowIcon";
import { useTheme } from "./context/ThemeContext";

import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Miscellaneous from "./components/Miscellaneous";
import ThemeSelector from "./components/ThemeSelector";
import Shape from "./components/Shape";
import Intro from "./components/Intro";
import StaggeredMenu from "./components/StaggeredMenu";

export default function App() {
  const verticalSwiperRef = useRef<any>(null);
  const horizontalSwiperRef = useRef<any>(null);
  const [showIntro, setShowIntro] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1O0mAhXP3su0I6atFE1qvsGoz6xsniRai";
    link.download = "furkanuzun_resume.pdf";
    link.click();
  };

  // Menü tıklama handler
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

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about me", link: "/about" },
    { label: "Works", ariaLabel: "View our services", link: "/services" },
    { label: "Misc.", ariaLabel: "Get in touch", link: "/contact" },
    {
      label: theme === "dark" ? "Light" : "Dark",
      ariaLabel:
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
      link: theme === "dark" ? "/light" : "/dark",
    },
  ];

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
          <ThemeSelector />
          <Shape />

          {isMobile && (
            <StaggeredMenu
              position="right"
              items={menuItems}
              socialItems={socialItems}
              displaySocials={true}
              displayItemNumbering={true}
              menuButtonColor="#000"
              openMenuButtonColor="#000"
              changeMenuColorOnOpen={true}
              colors={["#42e2f4", "#fbf2b1"]}
              accentColor="#42e2f4"
              onMenuOpen={() => console.log("Menu opened")}
              onMenuClose={() => console.log("Menu closed")}
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
                      onClick={() => horizontalSwiperRef.current.slideNext()}
                      className="next-button"
                    >
                      go to <span className="neon-highlight">Experience</span>
                    </div>
                  )}
                </SwiperSlide>

                <SwiperSlide>
                  <Experience />
                  {!isMobile && (
                    <div
                      onClick={() => horizontalSwiperRef.current.slideNext()}
                      className="next-button"
                    >
                      go to{" "}
                      <span className="neon-highlight">Miscellaneous</span>
                    </div>
                  )}
                </SwiperSlide>

                <SwiperSlide>
                  <Miscellaneous />
                  <div onClick={() => handleDownload()} className="next-button">
                    {isMobile ? (
                      <ArrowIcon
                        width={24}
                        height={24}
                        primaryColor="var(--bg-color)"
                      />
                    ) : (
                      <>
                        download my{" "}
                        <span className="neon-highlight">Resume</span>
                      </>
                    )}
                  </div>
                </SwiperSlide>
              </Swiper>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      )}
    </div>
  );
}

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroProps {
  onFinish?: () => void;
}

const pathD =
  "M192.44 7.41452C188.455 11.4004 162.876 36.317 135.597 62.7864L86 110.913L104.953 129.93C161.497 186.662 173.641 199.114 173.303 200.014C172.779 201.414 159.121 215.602 131.889 243.037C118.973 256.05 103.372 271.77 97.2195 277.971L86.0357 289.246L93.8119 296.982C98.089 301.237 102.154 304.582 102.847 304.415C104.019 304.133 175.809 229.577 182.776 221.406C184.511 219.371 186.393 217.987 186.956 218.331C187.565 218.702 187.981 253.16 187.981 303.253V387.548L193.997 393.774L200.012 400.001L224.93 375.752C238.635 362.416 264.244 337.419 281.84 320.204L313.832 288.904L269.668 244.435L225.506 199.966L242.194 183.261C251.372 174.072 271.283 154.036 286.441 138.735L314 110.914L273.007 71.1059C250.459 49.2123 224.758 24.2186 215.891 15.5667C207.025 6.9138 200.023 -0.0915343 200 0.000904426C199.977 0.0922427 196.425 3.42975 192.44 7.41452ZM187.981 111.24V180.829L183.615 176.442C156.572 149.277 119.984 111.451 119.984 110.658C119.984 110.104 134.406 95.0465 152.032 77.1959C169.659 59.3464 184.481 44.0467 184.972 43.1971C185.462 42.3476 186.339 41.6521 186.922 41.6521C187.58 41.6521 187.981 68.007 187.981 111.24ZM267.875 97.5445L280.861 111.069L266.999 125.056C259.376 132.748 243.996 148.347 232.821 159.721L212.505 180.397L212.547 110.75L212.589 41.1018L233.739 62.5608C245.371 74.3633 260.733 90.1054 267.875 97.5445ZM272.583 280.705L280.829 289.205L259.764 310.744C248.179 322.59 232.83 338.324 225.656 345.71L212.611 359.135L212.558 289.256L212.507 219.377L238.423 245.791C252.677 260.319 268.048 276.031 272.583 280.705Z";

const Intro: React.FC<IntroProps> = ({ onFinish }) => {
  const [animateZoom, setAnimateZoom] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);

  const [zoomValues, setZoomValues] = useState({ scale: 1, x: 0, y: 0 });

  useEffect(() => {
    const updateZoom = () => {
      const w = window.innerWidth;
      // const h = window.innerHeight;

      if (w >= 2000) {
        setZoomValues({ scale: 100, x: -3000, y: -6600 });
      } else if (w >= 1280) {
        setZoomValues({ scale: 80, x: -2400, y: -5200 });
      } else if (w >= 768) {
        setZoomValues({ scale: 50, x: -1500, y: -3300 });
      } else {
        setZoomValues({ scale: 30, x: -900, y: -2000 });
      }
    };

    updateZoom();
    window.addEventListener("resize", updateZoom);
    return () => window.removeEventListener("resize", updateZoom);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "var(--bg-color)",
          zIndex: 9999,
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.svg
          width="80vw"
          height="80vw"
          style={{ maxWidth: "400px", maxHeight: "400px" }}
          viewBox="0 0 400 400"
          animate={
            animateZoom
              ? { scale: zoomValues.scale, x: zoomValues.x, y: zoomValues.y }
              : {}
          }
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <motion.path
            ref={pathRef}
            d={pathD}
            stroke="url(#gradient)"
            strokeWidth={2}
            fill="url(#gradient)"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, fillOpacity: 0 }}
            animate={{ pathLength: 1, fillOpacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            onAnimationComplete={() => {
              if (pathRef.current)
                pathRef.current.setAttribute("stroke", "transparent");
              setAnimateZoom(true);
              setTimeout(() => onFinish && onFinish(), 2000);
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FBF2B1" />
              <stop offset="100%" stopColor="#42E2F4" stopOpacity={0.7} />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>
    </AnimatePresence>
  );
};

export default Intro;

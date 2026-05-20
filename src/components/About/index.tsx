import { useState, useEffect, useRef } from "react";
import "./style.css";
import Memoji from "../../assets/memoji.webp";
import DecryptedText from "../DecryptedText";
import Marquee from "react-fast-marquee";

const tags = [
  "Clean Code",
  "SOLID Principle",
  "Responsive Design",
  "UI/UX Design",
  "Tailwind",
  "Microservice Architecture",
  "Unit Testing",
  "Backend Collaboration",
  "API Integration",
  "Version Control",
  "Mobile Development",
  "Agile & Scrum",
  "CI/CD",
  "Problem Solving",
  "Performance Optimization",
  "Security Best Practices",
  "Cloud Deployment",
  "Code Review",
  "Documentation",
  "Scalable Systems",
  "Team Collaboration",
];

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState<"about" | "journey">("about");
  const touchStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <div className="blured-container-about">
        <div className="blured-container-content-about">
          <div className="title-container-about">
            <div className="img-container">
              <img src={Memoji} alt="Profile" className="about-profile-img" />
            </div>
            <div>
              <h1 className="title">
                <DecryptedText
                  sequential
                  animateOn="view"
                  text="Hello,"
                  speed={120}
                />
              </h1>
              <h1 className="title">
                <DecryptedText
                  sequential
                  animateOn="view"
                  text="I'm Furkan."
                  speed={120}
                />
              </h1>
              <h1 className="title">
                <DecryptedText
                  sequential
                  animateOn="view"
                  text="Software developer"
                  speed={120}
                />
              </h1>
            </div>
          </div>

          {/* Mobile Tabs */}
          {isMobile && (
            <div className="mobile-tabs">
              <h3
                className={activeTab === "about" ? "active" : ""}
                onClick={() => setActiveTab("about")}
              >
                About Me
              </h3>
              <h3
                className={activeTab === "journey" ? "active" : ""}
                onClick={() => setActiveTab("journey")}
              >
                My Journey
              </h3>
            </div>
          )}

          <div className="info-container">
            {/* About Me */}
            {(!isMobile || activeTab === "about") && (
              <div
                className="info-section"
                onTouchStart={(e) => {
                  const touch = e.touches[0];
                  touchStartRef.current = {
                    x: touch.clientX,
                    y: touch.clientY,
                  };
                }}
                onTouchMove={(e) => {
                  const touch = e.touches[0];
                  const deltaX = Math.abs(
                    touch.clientX - touchStartRef.current.x
                  );
                  const deltaY = Math.abs(
                    touch.clientY - touchStartRef.current.y
                  );

                  if (deltaY > deltaX) {
                    e.stopPropagation();
                  }
                }}
              >
                {/* <h3>About me</h3> */}
                <div className="paragraph">
                  <p>
                    Hi, I’m Furkan. I’m a devoted Fenerbahçe supporter, and
                    following the team is one of my greatest passions—it’s more
                    than just football, it’s a part of who I am. I have a loyal
                    dog named Ruzgar, who fills my days with joy and energy. I’m
                    naturally friendly and outgoing, always excited to meet new
                    people and share experiences. On July 20, 2024, I got
                    engaged to{" "}
                    <span className="gradient-text">
                      the most incredible, intelligent, and beautiful woman I’ve
                      ever met—truly the love of my life.
                    </span>{" "}
                    She has been a constant source of inspiration and
                    motivation, and her support has fueled many of the successes
                    in my career, making that milestone even more meaningful.
                  </p>
                  <p>
                    Sports have always been a big part of my life—I achieved
                    first place in swimming competitions and also played amateur
                    handball and football. These experiences shaped my
                    discipline, perseverance, and teamwork. Beyond sports, I’m
                    passionate about video games, exploring new worlds, and
                    growing my collection of unique items. I enjoy learning new
                    skills, staying creative, and surrounding myself with
                    inspiring people, always seeking passion, friendships, and
                    meaningful connections along the way.
                  </p>
                  <p>
                    My goal is to be{" "}
                    <span className="gradient-text">a good</span> person,{" "}
                    <span className="gradient-text">a loyal</span> friend,{" "}
                    <span className="gradient-text">a loving</span> husband, and{" "}
                    <span className="gradient-text">a caring</span> father.
                  </p>
                </div>
              </div>
            )}

            {/* My Journey */}
            {(!isMobile || activeTab === "journey") && (
              <div
                className="info-section"
                onTouchStart={(e) => {
                  const touch = e.touches[0];
                  touchStartRef.current = {
                    x: touch.clientX,
                    y: touch.clientY,
                  };
                }}
                onTouchMove={(e) => {
                  const touch = e.touches[0];
                  const deltaX = Math.abs(
                    touch.clientX - touchStartRef.current.x
                  );
                  const deltaY = Math.abs(
                    touch.clientY - touchStartRef.current.y
                  );

                  if (deltaY > deltaX) {
                    e.stopPropagation();
                  }
                }}
              >
                {/* <h3>My Journey</h3> */}
                <div className="paragraph">
                  <p>
                    I began my professional journey in Istanbul, working at a
                    technology company as a{" "}
                    <span className="gradient-career">
                      Software Development Specialist
                    </span>
                    . During my time there, I was deeply involved in{" "}
                    <span className="gradient-career">backend development</span>{" "}
                    and led the company’s transition to a microservice
                    architecture. While working in Istanbul, I was offered an
                    exciting remote, part-time opportunity with a company in New
                    York, where I focused on{" "}
                    <span className="gradient-career">
                      frontend development
                    </span>{" "}
                    and{" "}
                    <span className="gradient-career">game development.</span>
                  </p>
                  <p>
                    After leaving my previous roles, I started exploring
                    freelance opportunities, working on a project in Canada to
                    design the user interface for an application, while also
                    taking on various freelance projects in Turkey. These
                    experiences allowed me to combine my skills in both frontend
                    and backend development, work with diverse teams across the
                    globe, and continuously challenge myself to create
                    user-friendly and impactful digital experiences.
                  </p>
                  <p>
                    My goal is to be{" "}
                    <span className="gradient-career">a skilled</span>,{" "}
                    <span className="gradient-career">reliable</span>, and{" "}
                    <span className="gradient-career">collaborative</span>{" "}
                    professional, delivering{" "}
                    <span className="gradient-career">high-quality work</span>{" "}
                    and{" "}
                    <span className="gradient-career">
                      continuously growing
                    </span>{" "}
                    in my career.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Skills Marquee */}
          {isMobile && (
            <div style={{ marginTop: "1rem", width: "100%" }}>
              <h3>Skills</h3>
              <Marquee speed={25} gradient={false}>
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    style={{
                      marginRight: "1.5rem",
                      padding: "0.3rem 0.8rem",
                      backgroundColor: "var(--tag-button-background)",
                      borderRadius: "999px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </Marquee>
            </div>
          )}
        </div>
      </div>

      {/* Right panel for desktop */}
      {!isMobile && (
        <div className="right-panel-container">
          <div>
            <h2>Furkan Uzun</h2>
            <p>@barisfurkanuzun</p>
            <a href="mailto:barisfurkanuz@gmail.com">barisfurkanuz@gmail.com</a>
          </div>
          <div className="tags-container">
            {tags.map((tag, index) => (
              <div key={index} className="tags-button">
                <p>{tag}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default About;

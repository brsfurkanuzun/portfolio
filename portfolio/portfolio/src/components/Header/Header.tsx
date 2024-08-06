import "./Header.css";
import useLocalStorage from "use-local-storage";

function Header (){
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  
  return (
    <>
    <header className="navbar " data-theme={isDark ? "dark" : "light"}>
      <nav>
        <ul className="navbar-list">
          <li className="navbar-item"><a href='#Home'>Home</a></li>
          <li className="navbar-item"><a href='#Experience'>Experience</a></li>
          <li className="navbar-item"><a href='#Projects'>Projects</a></li>
          <li className="navbar-item"><a href='#Education'>Education</a></li>
          <li className="navbar-item"><a href='#References'>References</a></li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header;

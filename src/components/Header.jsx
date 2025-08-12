import  { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../App.css";
import me from "../assets/me.png"; 

const Header = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [ "Programmer", "Full Stack Developer", "Tech Enthusiastic", "Problem Solver", "Software Developer", "Open Source Enthusiast"],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1000,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <header>
      <img src={me} alt="Profile" />
      <h1>Allwin A</h1>
      {/* <p>allcodebreaker</p> */}
      <div className="typing" ref={typedElement}></div>
      <p className="description">
        I am Allwin, a Full Stack developer with a passion for building scalable and efficient software systems...
      </p>
      <a className="download-resume" href="/resume.pdf" download>
        Download Resume
      </a>
    </header>
  );
};

export default Header;

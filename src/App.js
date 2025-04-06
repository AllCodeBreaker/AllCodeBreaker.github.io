// import logo from './logo.svg';
import Header from "./components/Header"
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";

import './App.css';
import "animate.css";


import sideBarTitle from "./sideBarTitle";
import skillsIHave from "./skillsIHave";


function App() {
  return (
    <>
      <Header sideBar={sideBarTitle} />
      <main>
        <Home />
        <About />
        <Skills myskills={skillsIHave}/>
        <Works />
      </main>
      <Contact />
    </>
    
  );
}

export default App;

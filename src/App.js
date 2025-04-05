// import logo from './logo.svg';
import Header from "./components/Header"
import Home from "./components/Home";
import About from "./components/About";

import './App.css';
import "animate.css"

import sideBarTitle from "./sideBarTitle";


function App() {
  return (
    <>
      <Header sideBar={sideBarTitle} />
      <main>
        <Home />
        <About />
      </main>
    </>
    
  );
}

export default App;

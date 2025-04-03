// import logo from './logo.svg';
import Header from "./components/Header"
import About from "./components/About";

import './App.css';


import sideBarTitle from "./sideBarTitle";


function App() {
  return (
    <>
      <Header sideBar={sideBarTitle} />
      <main>
        <About />
      </main>
    </>
    
  );
}

export default App;

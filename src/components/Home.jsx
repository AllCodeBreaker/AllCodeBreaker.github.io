import Typing from "./Typing";
import "./css/home.css";

const Home = ()=>{
    

    return(
        <>
            <section id="home">
                <div id="allwin-about">
                    <h3>Hi, I am Allwin</h3>
                    {/* <p className="gray" id="type">Full Stack Developer</p> */}
                    <Typing />
                    <p>
                        <a href="#skills" className="btn" >Learn More</a>
                    </p>
                </div>
                <div id="image">
                    <img id="my-img" className="circle" src="me.png" alt="Allwin" />    
                </div>

            </section>
        </>
    );

}

export default Home;
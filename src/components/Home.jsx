import Typing from "./Typing";
import "./css/home.css";

const Home = ()=>{
    

    return(
        <>
            <section id="home">
                <div id="allwin-about" className="animate__animated animate__backInLeft">
                    <h3>Hi, I am <span className="green">Allwin</span></h3>
                    {/* <p className="gray" id="type">Full Stack Developer</p> */}
                    <Typing />
                    <p>
                        <a href="myResume.pdf" className="btn" download={"resume.pdf"}><i className="fa-solid fa-download"></i> Download resume</a>
                    </p>
                </div>
                <div id="image" className="animate__animated animate__backInRight">
                    <img id="my-img" className="circle" src="me.png" alt="Allwin" />    
                </div>

            </section>
        </>
    );

}

export default Home;
import "./about.css"

const About = ()=>{
    
    return(
        <>
            <section id="home">
                <div>
                    <h3>Hi, I'm Allwin</h3>
                    <span className="gray">Full Stack Developer</span>
                    <p>
                        <a href="#skills" className="btn" >Learn More</a>
                    </p>
                </div>
                <div>
                    <img className="circle" src="myimg.jpg" alt="Allwin" />    
                </div>

            </section>
        </>
    );

}

export default About;
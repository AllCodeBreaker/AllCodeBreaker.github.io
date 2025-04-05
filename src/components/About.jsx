import "./css/about.css"

const About = ()=>{
    
    return(
        <section id="about" className="animate__animated animate__backInUp ">
            <center>
            <h3>About Us</h3>
            <div className="container">
                <p>
                    I am Allwin, a software developer with a passion for building scalable and efficient software systems. I have a strong background in
                    fundamentals of computer science and a keen interest programming. I am a lifelong self taught learner and enjoy
                    learning new technologies and techniques. I am a strong believer in the importance of code quality and maintain

                </p>             
            </div>
            <div className="social-media" >
                <div>
                <a href="https://www.instagram.com/allcodebreaker/" target="_blank" rel="noopener noreferrer">
                    <span><i className="fab fa-instagram"></i></span>    
                    <p>allCodeBreaker</p>
                </a>
                        
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/allwin-a-023970291/" target="_blank" rel="noopener noreferrer">
                        <span><i className="fab fa-linkedin"></i></span>
                        <p>Allwin A</p>
                    </a>
                    
                </div>
                <div>
                    <a href="https://github.com/AllCodeBreaker/" target="_blank" rel="noopener noreferrer">
                        <span><i className="fab fa-github"></i></span>
                        
                    <p>allCodeBreaker</p>
                    </a>
                </div>
                </div>
            </center>
            
            
        </section>
    );
}

export default About;
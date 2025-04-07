import "./css/contact.css"

const Contact = ()=>{
    return(
        
               
            <footer id="contact">
                <h3>Contact</h3>
                <hr />
                <div id="myfooter">
                    
                    <span><a href="https://www.instagram.com/allcodebreaker/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> allCodebreaker </a></span>
                    <span><a href="https://www.linkedin.com/in/allwin-a-023970291/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> Allwin A </a></span>
                    <span> <a href="https:/github.com/allcodebreaker"><i className="fab fa-github"></i> allCodebreaker </a></span>
                </div>      
                <hr />
                <p>&copy; {new Date().getFullYear()} Allwin. All rights reserved.</p>            
            </footer>

                    
    )
}

export default Contact;
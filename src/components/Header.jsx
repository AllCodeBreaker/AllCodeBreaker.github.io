// import {Link} from "react-router-dom";
import "./header.css"

const Header = (props)=>{
    
    const sideBar = props.sideBar.home; //Array of Strings
    
    return(
        <>
            <header>
                <div>
                    <p>allCodeBreaker</p>
                    <nav>
                        {sideBar.map((name) => <a href={`#${name}`}  key={name}>{name}</a>)}
                    </nav>
                
                </div>
                           
            </header>
            
        </>
    );
}

export default Header;
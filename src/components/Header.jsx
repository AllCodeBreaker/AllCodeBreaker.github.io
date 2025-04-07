import React, { useState } from "react";
import "./css/header.css";

const Header = (props) => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const sideBar = props.sideBar.home; // Array of Strings

    const showSideBar = () => {
        setSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility
    };

    return (
        <>
            <header>
                <div>
                    <p>allCodeBreaker</p>
                    <nav>
                        {sideBar.map((name) => (
                            <a href={`#${name}`} key={name}>
                                {name}
                            </a>
                        ))}
                    </nav>

                    <button
                        id="side-btn"
                        className="fas fa-bars"
                        onClick={showSideBar}
                    >
                        {/* &equiv; */}
                    </button>
                </div>
                <aside className={isSidebarVisible ? "visible" : "hidden"}>
                    {sideBar.map((name) => (
                        <a href={`#${name}`} key={name} >{name}</a>
                    ))}
                </aside>
            </header>
        </>
    );
};

export default Header;
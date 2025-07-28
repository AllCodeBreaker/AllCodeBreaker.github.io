// Typing.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Typing = () => {
    const el = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["Programmer", "Full Stack Developer", "Tech Enthusiastic", "Problem Solver", "Software Developer"],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
            cursorChar: "|",
        };

        const typed = new Typed(el.current, options);

        return () => {
            typed.destroy(); // Cleanup on unmount
        };
    }, []);

    return <span id="type" ref={el}></span>;
};

// export default Typing;

//Not Used in Home page
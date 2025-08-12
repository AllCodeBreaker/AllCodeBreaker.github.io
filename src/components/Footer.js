import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socials">
        <a href="https://github.com/allcodebreaker" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/allwin-a-023970291/" target="_blank">LinkedIn</a>
        <a href="https://www.instagram.com/allcodebreaker/" target="_blank">Instagram</a>
        
      </div>
      <p>&copy; {new Date().getFullYear()} Allwin A. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/103488442?v=4"}
          alt="Founder"
        />

        <h2>Shah Alam</h2>


        <article>
          <a href="https://www.linkedin.com/in/alamshah1617" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/Alamshah1617" target={"blank"}>
            <AiFillGithub />
          </a>
        
          
        </article>
      </div>

      
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;

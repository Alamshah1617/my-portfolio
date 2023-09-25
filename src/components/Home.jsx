import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/profile-pic-.png";

const Home = () => {

  

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Shah Alam
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Programmer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:alamshah1617@gmail.com">Hire Me</a>
            <a href="https://github.com/Alamshah1617">
              GitHub <BsArrowUpRight />
            </a>
          </div>

          

          
        </div>
      </section>
      <section>
        <img src={me} alt="Shah Alam" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;

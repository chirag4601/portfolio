import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/chiragGraduation.jpeg";

const Home = ({ ratio }) => {
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
            Hi, I am <br /> Chirag Gupta
          </motion.h1>

          <Typewriter
            options={{
              strings: [
                "A Developer",
                "An Engineer",
                "An Innovator",
                "A Creator",
              ],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="#footer">Connect with me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>
        </div>
      </section>
      <section>
        <img src={me} alt="Chirag" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;

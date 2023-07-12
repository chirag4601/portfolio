import React, { useRef } from 'react'
import { animate, motion } from "framer-motion"
import Typewriter from 'typewriter-effect'
import { BsArrowUpRight } from "react-icons/bs"
import me from "../assets/me.png";
const Home = () => {
    const clientCount = useRef(null);
    const projectCount = useRef(null);

    const animationClientsCount = () => {
        animate(0, 100, {
            duration: 1,
            onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
        });
    };
    const animationProjectsCount = () => {
        animate(0, 500, {
            duration: 1,
            onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
        });
    };

    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0
            },
            whileInView: {
                x: 0,
                opacity: 1
            }
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0
            },
            whileInView: {
                y: 0,
                opacity: 1
            }
        }
    }
    return (
        <div id="home">
            <section>
                <div>
                    <motion.h1 {...animations.h1}>
                        Hi, I am <br /> Chirag Gupta
                    </motion.h1>
                    <Typewriter options={{
                        strings: ["A Developer", "An Innovator"],
                        autoStart: true,
                        loop: true,
                        cursor: "",
                        wrapperClassName: "typewriterpara"
                    }
                    } />
                    <div>
                        <a href="mailto:chiragiitd4601@gmail.com">Hire Me</a>
                        <a href="#work">Projects<BsArrowUpRight /> </a>

                    </div>

                    <article>
                        <p>
                            +
                                <motion.span
                                    whileInView={animationClientsCount}
                                    ref={clientCount}
                                ></motion.span>
                        </p>
                        <span>Clients Worldwide</span>
                    </article>

                    <article>
                        <p>
                            +<motion.span
                                ref={projectCount}
                                whileInView={animationProjectsCount}
                            >
                                
                            </motion.span>

                        </p>
                        <span>Projects Done</span>
                    </article>

                    <article data-special>
                        <p>
                            Contact
                        </p>
                        <span> chiragiitd4601@gmail.com</span>
                    </article>
                </div>
            </section>
            <section>
                <img src={me} alt='Chirag'></img>
            </section>

        </div>
    )
}

export default Home
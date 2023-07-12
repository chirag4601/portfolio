import React from "react";
import me from "../assets/me.png";
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
                    src={me}
                    alt="Github"
                />

                <h2>Chirag Gupta</h2>
                <p>Motivation is temporary, but discipline last forever.</p>
            </div>

            <aside>
                <h2>Social Media</h2>

                <article>
                    <a href="https://www.linkedin.com/in/chirag-gupta-0405111b9/" target={"blank"}>
                        <AiFillLinkedin />
                    </a>
                    <a href="https://github.com/chirag4601" target={"blank"}>
                        <AiFillGithub />
                    </a>
                </article>
            </aside>
            <a href="#home">
                <AiOutlineArrowUp />
            </a>
        </footer>
    );
};

export default Footer;

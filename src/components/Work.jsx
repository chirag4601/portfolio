import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/data.json";

const Work = () => {
  return (
    <div id="work">
      <h2>WORK</h2>
      <section>
        <article>
          <Carousel
            // showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={1500}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((i) => (
              <div key={i.title} className="workItem">
                <img src={i.imgSrc} alt={i.title} href={i.githublink}></img>
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <div>
                    <a target={"blank"} href={i.url}>
                      View Demo
                    </a>
                    {i.githublink && (
                      <a target={"blank"} href={i.githublink}>
                        View GitHub
                      </a>
                    )}
                  </div>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Work;

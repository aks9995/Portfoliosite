import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { DiReact, DiJavascript1, DiBootstrap, DiCss3, DiHtml5, DiNodejsSmall, DiGit, DiSass } from "react-icons/di";
import { SiExpress, SiMongodb } from "react-icons/si";

const Timeline = () => {
  return (
    <div id="timeline">
      <h2>SKILLS</h2>
      <Carousel
        // showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        interval={2000}
        infiniteLoop={true}
        autoPlay={true}
      >
        <section className="skill-container">
          <article>
            <a href="/" className="icon">
              <DiReact />
            </a>
            <h3>React Js</h3>
          </article>

          <article>
            <a href="/" className="icon">
              <DiJavascript1/>
            </a>
            <h3>Javascript</h3>
          </article>

          <article>
            <a href="/" className="icon" >
              <DiBootstrap />
            </a>
            <h3>Bootstrap</h3>
          </article>

          <article>
            <a href="/" className="icon" >
              <DiCss3 />
            </a>
            <h3>Css</h3>
          </article>

          <article>
            <a href="/" className="icon" >
              <DiHtml5 />
            </a>
            <h3>Html</h3>
          </article>

          <article>
            <a href="/" className="icon" >
              <DiNodejsSmall />
            </a>
            <h3>Node Js</h3>
          </article>

          <article>
            <a href="/" className="icon" >
              <SiExpress />
            </a>
            <h3>Express Js</h3>
          </article>

          <article>
            <a href="/" className="icon" >
              <SiMongodb/>
            </a>
            <h3>Mongo Db</h3>
          </article>

          <article>
            <a href="/" className="icon" >
              <DiGit />
            </a>
            <h3>Git</h3>
          </article>

          <article>
            <a href="/" className="icon" >
              <DiSass />
            </a>
            <h3>Sass</h3>
          </article>
        </section>
      </Carousel>
    </div>
  );
};

export default Timeline;

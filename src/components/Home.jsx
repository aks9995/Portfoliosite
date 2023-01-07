import React from "react";
import {motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import {BsArrowUpRight} from "react-icons/bs";
import Anup from "../assets/Anup.png";

const Home = () => {
  const animations ={
    h1:{
      initial:{
        x:"-10%",
        opacity:0.5
      },
      whileInView:{
        x:"0",
        opacity:1

      }
    },
    button:{
      initial:{
        y:"-100%",
        opacity:0.5
      },
      whileInView:{
        x:"0",
        opacity:1

      }
    }
  }
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I am <br />
            Anup Kumar
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "",
            }}
          />
          
          <div>
          <a href="mailto:anupkr95@gmail.com">Hire Me</a>
          <a href="#Work">Projects <BsArrowUpRight/> </a>
          </div>
          
          <aside>
            <article>
              <p>Get your <span>Frontend/MERN Projects Done.</span></p>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>anupkr95@gmail.com</span>
            </article>
          </aside>

        </div>
      </section>
      
      <section>
        <img src={Anup} alt="Anup" />
      </section>
    </div>
  );
};

export default Home;

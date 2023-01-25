import React from 'react'
import anup1 from "../assets/anup1.png"
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from "react-icons/ai";

const Footer = () => {
  return (
    <footer id="footer">
        <div>
            <img src={anup1} alt="Anup" />
            <h2>Hey, It's Anup</h2>

            <a href="https://www.instagram.com/_anup_kr/" target={"blank"}>
                <AiFillInstagram />
            </a>
            <a href="https://github.com/aks9995" target={"blank"}>
                <AiFillGithub />
            </a>
            <a href="https://linkedin.com/in/anup-kumar-319aa0138" target={"blank"}>
                <AiFillLinkedin />
            </a>
        </div>
        
    </footer>
  )
}

export default Footer
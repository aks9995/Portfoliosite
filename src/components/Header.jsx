import React from 'react'

const Header = () => {
  return (
   <nav>
    <Navcontent />
    </nav>
  )
}

const Navcontent = ()=>(
  <>
  <h2>Anup Kumar</h2>
  <div>
  <a href="#home">Home</a>
  <a href="#work">Work</a>
  <a href="#timeline">Skills</a>
  <a href="#contact">Contact</a>
  </div>
  <a href="#footer"><button>Socials</button></a>
    </>
)

export default Header
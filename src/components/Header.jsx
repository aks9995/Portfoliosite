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
  <a href="#Timeline">Timeline</a>
  <a href="#Contact">Contact</a>
  </div>
  <a href="mailto:anupkr95@gmail.com"><button>Email</button></a>
    </>
)

export default Header
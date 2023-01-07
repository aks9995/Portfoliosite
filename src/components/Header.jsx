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
  <h2>Anup</h2>
  <div>
  <a href="#Home">Home</a>
  <a href="#Work">Work</a>
  <a href="#Timeline">Timeline</a>
  <a href="#Contact">Contact</a>
  </div>
  <a href="mailto:anupkr95@gmail.com"><button>Email</button></a>
    </>
)

export default Header
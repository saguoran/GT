// import './debug.css';
import React, { useState, useRef } from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
// import { Container } from 'react-bulma-components';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { MyNavBar } from './components/MyNavBar';
import { AiFillFacebook, AiFillYoutube, AiOutlineTwitter, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai'

const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
function App() {

  const parallax = useRef();
  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }} >
      <MyNavBar > </MyNavBar>
      <Parallax ref={parallax} pages={3} className="no-scrollbar" style={{color: 'white'}}>
        <ParallaxLayer offset={0} style={{ backgroundColor: 'black' }}>
          <section className='content'>
            <h1>Leading Page</h1>
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={1} style={{ backgroundColor: 'lightblue' }} >

          <h1>Second Page</h1>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          style={{ backgroundColor: 'pink'}}
          onClick={() => parallax.current.scrollTo(0)}>
          <div className="footer-container">

            <section className='section-content'>
            Footer
            </section>
            <footer className="main-footer">
              <p>
                Copyright &copy; 2022 Game Trucks GT. All rights reserved.
              </p>
            </footer>
          </div>
        </ParallaxLayer>
      </Parallax>

    </div>
  )
}

{/* <Container style={{ height: '100vh', }} className="is-max-desktop">

<main className="main-container">
  <section className='section-content'>

  </section>
 

</main>
</Container> */}

export default App

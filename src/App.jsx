import React from 'react'
import Nav from './components/Nav'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Playfull from './components/Playfull'
import Featured from './components/Featured'
import Card from './components/card'
import Ready from './components/Ready'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full bg-zinc-900 text-white'>
      <Nav />
      <LandingPage/>
      <Marquee />
      <About />
      <Playfull/>
      <Featured/>
      <Card/>
      <Ready/>
      <Footer/>
    </div>
  )
}

export default App

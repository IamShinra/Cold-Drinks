import React from 'react'
import NavBar from './components/NavBar'
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import HeroSection from './sections/HeroSection';
import MessageSection from './sections/MessageSection';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


const App = () => {
  return (
  <main>
    <NavBar/>
    <HeroSection/>
    <MessageSection/>
  </main>
  )
}

export default App
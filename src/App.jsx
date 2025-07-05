import React from 'react'

import Navabr from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Clients from './components/Clients';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Endorsements from './components/Endorsements';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navabr />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      {/* <Clients /> */}
      <Endorsements />
      <Contact />
      <Footer />
    </main>
  )
}

export default App;

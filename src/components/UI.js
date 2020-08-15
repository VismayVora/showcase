import React from 'react';

import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import About from './About/About';
import Github from './Github/Github';
import Projects from './Projects/Projects';
import Toolbox from './Toolbox/Toolbox';
import Extra from './Extra/extra';
import Footer from './Footer/footer';
import Experience from './Experience/experience';
import Contacts from './Contacts/contacts';

const UI = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Github />
      <Toolbox />
      {/* <Projects />
       */}
      {/* <Contacts /> */}
      {/* <Experience /> */}
      <Extra />
      <Footer />
    </>
  );
};

export default UI;

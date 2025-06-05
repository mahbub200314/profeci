import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './pages/hero/Hero'
import Slider from './pages/slider/Slider'
import Sponser from './components/sponser/Sponser'
import About from './pages/about/About'
import Facts from './pages/funFacts/Facts'
import Expert from './pages/ourExpertist/Expert'
import CasePage from './pages/caseStudy/CasePage'
import Team from './pages/team/Team'
import Testimonial from './pages/testimonial/Testimonial'
import Pricing from './pages/pricingPlan/Pricing'
import Faq from './pages/faq/Faq'
import Footer from './pages/footer/Footer'
import Brand from './components/brand/Brand'

import { useRef } from 'react';

const Layout = () => {


const heroRef = useRef(null);
const aboutRef = useRef(null);
const serviceRef = useRef(null);
const caseRef = useRef(null);

const handleScroll = (ref) => {
  ref.current?.scrollIntoView({ behavior: 'smooth' });
};


  const [istall, setIstall] =useState(false)
 

  useEffect(()=>{
    const handleScroll = () => {
    
    if(window.scrollY){
      setIstall(true)
    }
    else{
      setIstall(false)
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
 
  },[])

  return (
    <div className='relative  overflow-x-hidden '>
         
    <nav  className={`max-md:bg-white fixed w-full  flex justify-center md:px-[10px] z-[900] max-lg:top-0 max-lg:shadow-md  ${istall ? "bg-white top-[0px] shadow-md duration-300 ease-in" : "top-[30px]"}`}>
       <Navbar istall={istall}
       onScroll={handleScroll}
       refs={{ heroRef, aboutRef, serviceRef, caseRef }} 
       />
    </nav>

    <div ref={heroRef} className="heroSection ">
           <Hero/>
    </div>{/*....herosectin end  */}
  
      <div className="slider pt-5 ">
           <Slider/>
      </div>

      <div className="sponser bg-white-bg">
        <Sponser/>
      </div>

      <div ref={aboutRef}  className="about bg-white-bg">
        <About/>
      </div>

      <div className="facts bg-white-bg">
        <Facts></Facts>
      </div>
        
        <div ref={serviceRef} className="expert bg-white-bg ">
          <Expert/>
        </div>

        <div ref={caseRef} className="case">
          <CasePage/>
        </div>

        <div className="teams">
          <Team/>
        </div>

        <div className="testiomialPage">
          <Testimonial/>
        </div>

        <div className="pricingPlan">
          <Pricing/>
        </div>
        
        <div className="faq">
          <Faq/>
        </div>
        <footer>
          <Footer/>
          <Brand/>
        </footer>



    </div>
  )
}

export default Layout

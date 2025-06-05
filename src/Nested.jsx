import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from './pages/footer/Footer'
import Brand from './components/brand/Brand'

const Nested = () => {

  
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
    <div>
       <nav  className={`max-md:bg-white fixed w-full  flex justify-center md:px-[10px] z-[900] max-lg:top-0 max-lg:shadow-md  ${istall ? "bg-white top-[0px] shadow-md duration-300 ease-in" : "top-[30px]"}`}>
       <Navbar istall={istall} />
    </nav>

        <main>
            <Outlet/>
        </main>
        
        <Brand/>
       <footer className='pt-15 bg-white-bg'>
         <Footer/>
       </footer>
      
    </div>
  )
}

export default Nested

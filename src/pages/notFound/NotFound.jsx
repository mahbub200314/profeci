import './notFound.css'
import { useState,useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Button from '../../components/button/Button';
import { Link } from 'react-router';

const NotFound = () => {
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
    <div className="notfound min-h-[100vh] pt-50 pb-20 ">
        <nav  className={`max-md:bg-white fixed w-full  flex justify-center md:px-[10px] z-[900] max-lg:top-0 max-lg:shadow-md  ${istall ? "bg-white top-[0px] shadow-md duration-300 ease-in" : "top-[30px]"}`}>
       <Navbar istall={istall} />
    </nav>
        <div className='flex flex-col gap-5 justify center items-center  text-center'>
         <b className='text-[280px] text-black font-[600]'>4 <span className='!text-blue'>0</span> 4</b>
         <p className='text-[14px] font-[400]'>Looks like here is nothing like: link is broken / link is not in track / this link<br></br> is failed to open. Press go back home.</p>
           <Link to='/'>
              <Button>+ GO BACK HOME</Button>
           </Link>
        </div>
      
    </div>
  )
}

export default NotFound

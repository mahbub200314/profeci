import './navbar.css'
import { Link } from 'react-router'

import { FaBars } from "react-icons/fa";

import logo from'../../assets/logo/logo.svg'
import Button from '../button/Button'
import { useState } from 'react';

const Navbar = ({ istall,onScroll, refs }) => {


    const [show , setShow] = useState(false)
      

    const navToggle =()=>{
      setShow( prev => !prev )
    }

  return (
    
     <nav className='relative max-w-[75rem] lg:max-w-[75rem] h-[80px]   w-[100%] flex items-center justify-between z-[900] max-md:border-b-text-gray  px-[10px]'>
      
         <FaBars onClick={navToggle} className='md:hidden text-2xl cursor-pointer hover:text-blue'></FaBars>

       <div className={`navbar bg-white max-md:bg-gray-100 flex  justify-around  items-center w-full max-lg:shadow-none max-lg:rounded-none max-md:w-full shadow-md  max-md:absolute max-md:top-[80px] max-md:left-0 max-md:flex-col-reverse  max-md:border-t-1 ${show ? "max-md:flex-col-reverse" : "max-md:hidden"}  ${istall? 'rounded-none md:shadow-none md:max-w-[600px]  md:justify-around  md:h-[80px] ': ' rounded-[40px] shadow-md  md:max-w-[645px] md:h-[60px] '}`}>

          <div className="logo w-[110px] h-[30px] max-md:border-b-1 max-md:py-2 max-md:h-[50px]  max-md:w-full max-md:flex max-md:justify-center  " >
             <img src={logo} alt="" />
          </div>


          <div className='text-text-gray w-[1px] h-[24px] max-md:hidden'>|</div> 
{/* .................................. */}
        <ul className='flex  md:gap-5 max-md:flex-col  max-md:w-full'>
  <li>
   <button onClick={() => onScroll(refs.heroRef)}>
    <Link className='flex' to='hero' >
      <span>[</span> <p>HOME</p> <span>]</span>
    </Link>
   </button>
  </li>
  <li>
    <button onClick={() => onScroll(refs.aboutRef)}>
      <span>[</span> <p>ABOUT</p> <span>]</span>
    </button>
  </li>
  <li>
    <button onClick={() => onScroll(refs.serviceRef)}>
      <span>[</span> <p>SERVICES</p> <span>]</span>
    </button>
  </li>
  <li>
    <button onClick={() => onScroll(refs.caseRef)}>
      <span>[</span> <p>PAGES</p> <span>]</span>
    </button>
  </li>
</ul>



       </div>

       

       <Link to='contact' >
         <Button> + LET'S COLLAB</Button>
       </Link>
        
     </nav>
    
  )
}

export default Navbar

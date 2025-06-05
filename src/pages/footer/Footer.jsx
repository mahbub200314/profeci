import logo from '../../assets/logo/logo.svg'
import Button from '../../components/button/Button'

import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='bg-white-bg py-10 px-20 max-xl:px-15 max-lg:px-10 max-md:px-5 max-sm:px-1 flex flex-col gap-15'>

        <header className='flex justify-around  items-center flex-wrap gap-8'>
            
            <img src={logo} alt="" />
            <hr className='h-[0.5px] text-border2 w-[10%] max-xl:hidden' />
            <div>
                <b className='!text-[24px] !leading-[34px] !tracking-normal'>Ideas <i>start</i> with a hello- <i>reach</i> out and let's <br/>
                 build <i>something</i> great together</b>
            </div>
            <Button>+ LET'S TALK</Button>
        </header>

        <main className='flex justify-end !max-md:jusitfy-center pr-15 max-sm:pr-0'>
        <div className='flex gap-[15rem] max-lg:gap-[10rem] max-md:gap-[4rem] justify-around max-sm:justify-center flex-wrap '>

         <div className='flex flex-col gap-4 '>
             <b className='text-[40px] font-[600]'>info@profeci.com</b>
             <address className='text-[16px]'>
                27 Division St, New York,<br></br>NY 10002, USA
             </address>
             <p className='py-2'>+(123)456 899 00</p>
             <p className='!text-[black] '>
                <FaFacebookF className='hover:text-blue cursor-pointer'/> <FaXTwitter className='hover:text-blue cursor-pointer'/> <FaBehance className='hover:text-blue cursor-pointer'/>
                <FaYoutube className='hover:text-blue cursor-pointer'/> <FaLinkedin className='hover:text-blue cursor-pointer'/>
             </p>
         </div>

         <div>
           <b className='text-[24px] font-[600] mb-[2rem]  flex'>Essential Pages</b>
           <ul className='flex flex-col gap-2 '>
            <li className='flex justify-between gap-8 !border-none'><p className='text-[16px] font-[500]'>ABOUT</p> <p className='text-[16px] font-[500]'>NEWS</p></li>
             <li className='flex justify-between  gap-8 !border-none'><p className='text-[16px] font-[500]'>OUR TEAM</p> <p className='text-[16px] font-[500]'>BENEFITS</p></li>
              <li className='flex justify-between  gap-8 !border-none'><p className='text-[16px] font-[500]'>PRICE PLANS</p> <p className='text-[16px] font-[500]'>CONTACT US</p></li>
               <li className='flex justify-between  gap-8 !border-none'><p className='text-[16px] font-[500]'>CONTACT</p> <p className='text-[16px] font-[500]'>TERMS OF USE</p></li>
                <li className='flex justify-between  gap-8 !border-none'><p className='text-[16px] font-[500]'>REFUND</p> </li>
           </ul>
         </div>
             
        </div>
        </main>
         
    </footer>
  )
}

export default Footer

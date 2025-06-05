import './contact.css'
import location from '../../assets/another/image4.png'

import { FaDollarSign } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaBook } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { HiMiniUser } from "react-icons/hi2";
import Button from '../../components/button/Button';
const Contact = () => {

    console.log('contact page')
  return (
    <div className='contact  relative min-h-[100vh] -mt-15 pt-45 '>
     <header className='text-center flex flex-col justify-center items-center'>
        <h1 className='!bg-transparent text-[64px]  max-md:text-[35px] font-[600] -tracking-[3px] max-md:-tracking-[1px]'>Get in touc</h1>
        <p className='text-[16x]  font-[400] leading-[26px]'>Profeci® is a leading brand design, consultancy, shaping & redefining the <br/> world’s top tech companies.</p>
     </header>

     <main className='flex flex-wrap justify-center gap-[8%] max-lg:gap-30 px-3 items-center pt-20 pb-35'>
        <div>
         <img className='max-w-[500px] w-full  h-[600px] max-sm:h-[450px] shadow-xs' src={location} alt="" />
        </div>
        {/* ............. */}
        <div className='flex flex-col gap-15'>
            <p className='!text-[14px]'><span className='text-blue'>[</span>CATCH US HERE<span className='text-blue'>]</span></p>
            <b className='text-[48px] font-[600] leading-[58px] -tracking-[3px]'>Let's <i className='font-[instrument_serif] font-[400]'>talk</i> for your next <br/> <i className='font-[instrument_serif] font-[400]'>impactfully </i> project</b>
             
             <div className='flex gap-10 flex-wrap'>
                
            <ul className='flex flex-col gap-3'>
                <li className='flex flex-col !border-none'>
                    <h1 className='font-[600] text-[20px] '>Info@profeci.com</h1>
                    <p className='font-[400] text-[16px]'>Email Address</p>
                </li>
                <li className='flex flex-col !border-none'>
                    <h1  className='font-[600] text-[20px] '>1/B, Booston tower</h1>
                    <p className='font-[400] text-[16px]'>New york, US</p>
                </li>
            </ul>

            <ul className='flex flex-col gap-3'>
                <li className='flex flex-col !border-none'>
                    <h1  className='font-[600] text-[20px] '>+123 (456) 789 00</h1>
                    <p className='font-[400] text-[16px]'>Phone Number</p>
                </li>
                <li className='flex flex-col !border-none'>
                    <h1  className='font-[600] text-[20px] '><u>Fb</u> <span className='text-[18px] text-text-gray opactiy-[0.4]'>TW. Be.</span></h1>
                    <p className='font-[400] text-[16px]'>New york, US</p>
                </li>
            </ul>

             </div>
        </div>
     </main>


          <div className="contactWithOur flex flex-wrap gap-5 p-2  justify-around pt-5 pb-20">

            <div className='flex flex-col  gap-5'>
            <p className='!text-[14px]'><span className='text-blue'>[</span>LET'S TALK<span className='text-blue'>]</span></p>
            <b className='text-[48px] font-[600] leading-[58px] -tracking-[3px]'>Love to  <i className='font-[instrument_serif] font-[400]'>hear</i> from you get in <br/> <i className='font-[instrument_serif] font-[400]'>touch </i> </b>
             <p className='text-[16x]  font-[400] leading-[26px]'>Contact us to give life to awesome ideas or make<br/> suggestions on improvements to be made. Its really really <br/>easy to catch us with just say hello!</p>
            </div>
  <div className='flex flex-col gap-5 items-center pt-5 pr-2'>
  <div className='flex gap-5 flex-wrap '>
    <div className='flex flex-col gap-8'>

      {/* Your name */}
      <div className="relative border-b border-gray-400">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <HiMiniUser />
        </span>
        <input
          type="text"
          placeholder="Your name"
          className="pl-10 pr-4 py-2 border-none outline-none bg-transparent w-full"
        />
      </div>

      {/* UI & UX Design */}
      <div className="relative border-b border-gray-400">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <FaBook />
        </span>
        <input
          type="text"
          placeholder="UI & UX Design"
          className="pl-10 pr-4 py-2 border-none outline-none bg-transparent w-full"
        />
      </div>
    </div>

    <div className='flex flex-col gap-8'>

      {/* Business (Email) */}
      <div className="relative border-b border-gray-400">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <TfiEmail />
        </span>
        <input
          type="text"
          placeholder="Business"
          className="pl-10 pr-4 py-2 border-none outline-none bg-transparent w-full"
        />
      </div>

      {/* Your Budget */}
      <div className="relative border-b border-gray-400">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <FaDollarSign />
        </span>
        <input
          type="text"
          placeholder="Your Budget"
          className="pl-10 pr-4 py-2 border-none outline-none bg-transparent w-full"
        />
      </div>
    </div>
  </div>

  {/* Description input */}
  <div className="relative w-full max-w-[600px] mt-8 border-b border-gray-400">
    <span className="absolute left-3 top-3 text-gray-400">
      <FaPen />
    </span>
    <textarea
      
      rows={5}
      className="w-full pl-10 pr-4 pt-3 border-none outline-none bg-transparent resize-none"
    ></textarea>
  </div>

  <div className='flex gap-12 items-center'><p>*** Email will not be published.</p><Button>+ SENT MESSAGE</Button></div>
</div>



          </div>{/*...contacto our  */}

    
    </div>
  )
}

export default Contact

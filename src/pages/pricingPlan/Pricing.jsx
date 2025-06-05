import './pricing.css'
import { PiCheckCircleThin } from "react-icons/pi";

const Pricing = () => {
  return (
    <div className="pricing bg-white-bg min-h-[100vh] py-20">
        <header className="flex flex-wrap items-center  justify-around gap-20 max-lg:gap-10">
            <div>
               <p><span>[</span> PRICING PLAN <span>]</span></p>
               <b>Pick <i>the plan</i> that fits<br/> for your start-up</b>
            </div>
            <div className="flex gap-2 border-4 border-white rounded-[50px] ">
                <button className='bg-blue text-white'>MONTHLY</button>
                <button>YEARLY</button>
            </div>
        </header>

        <main className='flex justify-center gap-10 flex-wrap '>


             <div className="div1">
                <p className='text-black!'><span className='text-blue'>[</span> PREMIUM PLAN <span className='text-blue'>]</span></p>
                <b className='text-[64px] max-lg:[50px] max-md:[38px] max-sm:text-[30px] font-[600] -tracking-[3px] '>$149.99</b>
                <p>Connect with them on Dribbble; the global community for designers and creative professionals.</p>
                <div className='flex justify-between py-6'>
                     <div className='flex flex-col gap-3'>
                       <h4 className=' !flex !items-start '> <PiCheckCircleThin /> <p className=' !py-0'>1-3 custom pages</p></h4>
                        <h4  className=' !flex !items-start '><PiCheckCircleThin/> <p className=' !py-0'>Basic SEO setup</p></h4> 
                        <h4 className=' !flex !items-start '><PiCheckCircleThin/> <p className=' !py-0'>contact form integration</p></h4>
                     </div>
                     <div className='flex flex-col gap-3'>
                        <h4  className=' !flex !items-start '><PiCheckCircleThin/> <p className=' !py-0'>Responsive desing</p></h4>
                        <h4 className=' !flex !items-start '><PiCheckCircleThin/> <p className=' !py-0'>1 Round of reviisions</p></h4>
                        <h4 className=' !flex !items-start '><PiCheckCircleThin/> <p className=' !py-0'>Delivery in 5-7 days</p></h4>
                     </div>
                </div>
                <button className=' button1 '>TRY FOR FREE</button>
                <p className='flex justify-center pt-3 '>*** No need credit card</p>
             </div>





              <div className="div1">
                <p className='text-black!'><span className='text-blue'>[</span> PREMIUM PLAN <span className='text-blue'>]</span></p>
                <b className='text-[64px] max-lg:[50px] max-md:[38px] max-sm:text-[30px] font-[600] -tracking-[3px] '>$999 <del className='text-border2 font-[400]'>$1999</del></b>
                <p>Connect with them on Dribbble; the global community for designers and creative professionals.</p>
                <div className='flex justify-between py-6'>
                     <div className='flex flex-col gap-3'>
                        <h4 className=' !flex !items-start '> <PiCheckCircleThin /> <p className=' !py-0'>1-3 custom pages</p></h4>
                        <h4  className=' !flex !items-start '><PiCheckCircleThin/> <p className=' !py-0'>Basic SEO setup</p></h4> 
                        <h4 className=' !flex !items-start '><PiCheckCircleThin/> <p className=' !py-0'>contact form integration</p></h4>
                     </div>
                     <div className='flex flex-col gap-3'>
                        <h4  className=' !flex !items-start '><PiCheckCircleThin/> <p className=' !py-0'>Responsive desing</p></h4>
                        <h4 className=' !flex !items-start '><PiCheckCircleThin/> <p className=' !py-0'>1 Round of reviisions</p></h4>
                        <h4 className=' !flex !items-start '><PiCheckCircleThin/> <p className=' !py-0'>Delivery in 5-7 days</p></h4>
                     </div>
                </div>
                <button className=' button2 '>TRY FOR FREE</button>
                <p className='flex justify-center pt-3 '>*** No need credit card</p>
             </div>


        </main>
      
    </div>
  )
}

export default Pricing

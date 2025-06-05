import './details.css'
import { PiPlayCircleThin } from "react-icons/pi";
import videoImg from '../../assets/another/image5.png'

import img6 from '../../assets/another/image6.png'
import img7 from '../../assets/another/image7.png'
const DetailsCase = () => {
  return (
    <div className='details  !w-full min-h-[100vh] bg-white-bg pb-20 pt-50 -mt-15'>
     <div className='flex flex-col items-center  justify-center  '>

        <div className='max-w-[800px]  w-full min-h-[1470px]   '>

        <header className='flex flex-col gap-5 justify-center text-center items-center pb-10'>
        <b className='!text-[64px] !max-md:text-[40px] font-[600] !leading-[56px]'>Case Study</b>
        <p className='text-[16px] font-[400]'>Profeci® is a leading brand design, consultancy, shaping & redefining the<br/> world’s top tech companies.</p>
      </header>

       <main className='flex flex-col gap-15'>
        <div>
            <p className='text-[16px] font-[400] flex flex-wrap justify-start text-start py-2'>Budget:<span className='text-blue pr-4  !-ml-4'>$10Million</span> client:<b className='pr-4 text-black -ml-3'>Astro</b> Tools: jira, MarketingAi</p>
            <b className='text-[32px] font-[600] leading-[26px]'>Astro Inc. - Complete branding design</b>
        </div>
        <p>Empowering businesses and individuals to navigate the complexities of today’s financial landscape. At Astro inc., we combine expertise, innovation, and dedication to deliver tailored solutions that drive success. Whether you’re seeking investment guidance, business strategy, or financial planning, we’re here to help you thrive.</p>
         <b className='text-[16px] font-[500]'>Achieve your financial goals with personalized plans crafted by our experts. From retirement strategies to wealth management, we ensure your future is secure and prosperous.</b>
         <p>We pride ourselves on being more than just financial consultants – we’re your partners in success. With years of experience and a team of dedicated professionals, we specialize in delivering comprehensive financial solutions tailored to meet your unique needs.</p>
         <p>We specialize in helping businesses and individuals achieve their financial aspirations. With a commitment to excellence and innovation, we offer customized financial solutions to address your unique challenges. From small businesses looking for growth strategies to individuals seeking wealth management advice, we are your trusted partner for financial success.</p>
         <p>Plan today, secure tomorrow. Our certified advisors work closely with you to design strategies tailored to your financial goals. Whether you're saving for retirement, managing wealth, or planning for life’s milestones, our solutions are designed to meet your unique needs. Our team comprises seasoned professionals, including certified financial planners, investment advisors, and tax specialists, all working together to deliver unmatched expertise and personalized solutions. To simplify finance for our clients, empower their decisions.</p>
         <a href="https://www.youtube.com/watch?v=na80LQCX1KU" target='_blank' className='relative'>
             < PiPlayCircleThin className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  !text-[44px] text-white  rounded-full'/>
            <img src={videoImg} alt="" className='max-w-[800px] w-full max-sm:w-[280px] '/>
         </a>
         <p>We specialize in helping businesses and individuals achieve their financial aspirations. With a commitment to excellence and innovation, we offer customized financial solutions to address your unique challenges. From small businesses looking for growth strategies to individuals seeking wealth management advice, we are your trusted partner for financial success.</p>

          
       </main>


        </div>{/*.....*/}
        <p className='1text-[14px] !font-[500] !text-black'><span className='text-blue'>[</span>RELATED WORKS <span className='text-blue'>]</span></p>
        <b className='text-[48px] font-[600] -tracking-[2px]'>More <i className='font-[instrument_serif] font-[400]'>Creative</i> Creations</b>
        
     </div>
     
         <main className=" flex max-lg:flex-wrap justify-center items-center gap-15 max-sm:gap-8">

      
        <div className='group '>
            <picture>
                <img className=' !max-w-[580px] !w-full h-[400px]' src={img6} alt="img" />
            </picture>
            <h2><b>Aloonso Website Branding</b> <span>2024</span></h2>
            <p>branding, design</p>
        </div>
       

       
         <div className='group'>
            <picture>
                <img className=' !max-w-[580px] !w-full h-[400px]' src={img7} alt="img" />
            </picture>
            <div>
            <h2><b>branding, design</b> <span>2024</span></h2>
            <p>branding, design</p>
            </div>
        </div>
    
       
    </main>
    </div>
  )
}

export default DetailsCase


import './hero.css'

import { BsFillStarFill } from "react-icons/bs";

import bg from '../../assets/bg/bg.png'
import review1 from '../../assets/user/bg.png'
import review2 from '../../assets/user/bg2.png'
import review3 from '../../assets/user/bg3.png'



const Hero = () => {
  return (
    <div className='hero bg-white-bg relative min-h-[105vh]  max-lg:pt-[5rem] py-[10rem] '>
      <main className='flex max-lg:flex-col  w-full min-h-[95vh]  mt-[12rem] max-lg:mt-[10rem] justify-around max-lg:justify-start max-lg:gap-20 max-md:gap-30'>
        
        <div className='flex max-lg:pl-[5%] flex-col gap-3.5'>



        <b className='text-[6.5rem] max-md:text-[4.5rem] max-sm:text-[3.5rem] leading-[110px] max-md:leading-[5rem]'>Next-gen <br /> Digital <span className='font-[Instrument_serif] font-[500] text-[100px] italic opacity-[0.9]'>agency</span></b>

        <div className='flex items-center gap-3 my-6'>
          <div className='flex -space-x-4 items-center'>
              <img src={review1} alt="" />
              <img src={review2} alt="" />
              <img src={review3} alt="" />
              <span className='bg-white rounded-full flex justify-center items-center text-medium  w-[2rem] h-[2rem] '>1k+</span>
         </div>

              <div className='flex flex-col max-md:leading-[0px]' >
                <p className='flex justify-start '><BsFillStarFill className='star' /> <BsFillStarFill className='star'   /> <BsFillStarFill className='star' /> <BsFillStarFill className='star' /> <BsFillStarFill className='star' /></p>
                <p className='text-black! text-[1rem]! font-[400]!'>Happy user raitng</p>
              </div>

        </div>

          <button className='bg-blue! hover:bg-[black]! text-[14px] hover:text-white  w-fit px-10 py-5 rounded-[30px] ease-in duration-300 cursor-pointer'> + SCHEDULE A CALL</button>
        </div>
        {/* ........................ */}

        <div className='flex flex-col gap-4 max-md:gap-1  max-lg:items-center max-sm:mb-15' >
            <picture>
                <img src={bg} alt="" />
                
            </picture>
            <p className='text-[1rem] font-extralight text-text-gray leading-[26px] '>
                <b>Profeci®</b> is a leading brand design,<br></br> consultancy, shaping & redefining the <br></br> world’s top tech companies.
            </p>
        </div>
      </main>

      <div className='links absolute  bottom-4 max-lg:bottom-0  flex w-full justify-around max-sm:flex-wrap p-2  '>
        <span>[ <a href="#">DRIBBLE</a> ]</span>
         <span>[ <a href="#">BEHANCE</a> ]</span>
          <span>[ <a href="#">FRAMER</a> ]</span>
           <span>[ <a href="#">INSTAGRAM</a> ]</span>
      </div> 
    </div>
  )
}

export default Hero

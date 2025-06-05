import './about.css'

import img1 from '../../assets/icon/logo.png'
import img2 from '../../assets/icon/Frame.png'
import img3 from '../../assets/icon/Frame1.png'
import img4 from '../../assets/icon/logo-86.png'

import { GoArrowUpRight } from "react-icons/go";
const About = () => {
  return (
    <div className='about  flex justify-center items-center min-h-[80vh] py-5 '> 
      <main className='bg-white flex flex-wrap justify-around min-h-[869px] max-w-[1440px] w-full rounded-[10px] gap-10  p-5'>

         <div className="leftside flex flex-col justify-around max-lg:gap-10">
             <p  className='text-[14px]! font-[500]! '><span className='text-blue'> [ </span> ABOUT COMPANY <span className='text-blue'> ] </span></p>

             <div className='aboutImg w-[300px] max-sm:w-[250px] min-h-[300px] rounded-[10px]'>
                <div className="icon flex  justify-end p-5"><GoArrowUpRight className='text-white text-[50px] font-[100]!'/></div>
                <div className='flex  justify-center items-center'>
                    <p className=' !text-white !block'>
                        <b className='!text-white text-[100px]! max-md:text-[100px]! block'>20+</b> <br></br> <span>[</span> YEAR OF EXPERIENCE <span> ]</span>
                    </p>
                </div>
             </div>
         </div>
{/*...................................................... */}
         <div className="rightside flex flex-col justify-center gap-38 max-sm:gap-25">
                <b>Tech-driven <i>soluation</i> for <br></br> <i>impactful</i> result</b>

                <ul className='flex flex-col  gap-8 '>
                    <li className='border-t-1 pt-8'><div className='lines'><i> Design </i> <b>of the year</b> <span>2020</span></div>      <img src={img1} alt="" /></li>
                     <li><div  className='lines '><i> Site </i> <b>of the year</b> <span>2022</span></div>      <img src={img2} alt="" /></li>
                    <li><div  className=' lines '><i> Hand-picked </i> <b> website </b> <span>2024</span></div> <img src={img3} alt="" /></li>
                    <li><div  className=' lines '><b>Best </b> <i> designer </i> <b>award</b><span>2025</span></div>         <img src={img4} alt="" /></li>
                </ul>
         </div>

      </main>
    </div>
  )
}

export default About

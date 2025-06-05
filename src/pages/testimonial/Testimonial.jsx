import './testimonial.css'

import img1 from '../../assets/user/bg2.png'
import img2 from '../../assets/user/bg3.png'
import img3 from '../../assets/user/bg4.png'
import img4 from '../../assets/user/bg5.png'

import qoute from '../../assets/vector/quote 1.png'

import icon from '../../assets/vector/testimonial.png'
import icon2 from '../../assets/vector/testimonial2.png'

const Testimonial = () => {
  return (
    <div className="testimonials bg-white-bg flex justify-center items-center py-10 ">
      <div className="testimonial bg-[#222222] max-w-[1440px] w-full border-2 min-h-[850px] py-20 rounded-[20px] max-sm:rounded-none">
         <header className="  text-center!">
            <p className='text-white! pb-5 flex justify-center'><span>[</span> TESTIMONIAL <span>]</span></p>
            <b className='text-white'>
            what <i>people</i> 
             <span className='inline-flex -space-x-[10px]  w-fit px-2 '>
                <img src={img1} alt="" /><img src={img2} alt="" /><img src={img1} alt="" />   
            </span>
            love about <br/> working <i>with</i> us</b>
         </header>

          <main className='flex flex-wrap gap-5 justify-around items-center'>

      {/*  */}
              <div className='sectionOne max-w-[580px] min-h-[400px] bg-[#2a2a2a] flex flex-col justify-around px-[4%] rounded-[10px]'>
                 
                <b className='flex items-center  '><img className='pr-5' src={qoute} alt="" /> <span className='text-orange'>[</span> CLASSY WORK BY PROFECi <span className='text-orange'>]</span></b>
                <p className='font-[400] text-[22px]! leading-[36px]! text-white-bg! '>“ We see our clients as strategic partners. This means In close cooperation, we are there for a wide range of marketing tasks. “</p>
                 <div className='flex justify-between'>
                    <div className='flex flex-col gap-2'>
                        <p>HEAD OF IDEA</p>
                         <b className='text-[24px]! font-[600]! '>Oscar N. Winsley</b>
                    </div>
                    <div className='flex items-center -space-x-[10px]'>
                        <img src={img3} alt="img" />
                         <div className='bg-orange w-[50px] h-[50px] flex justify-center items-center rounded-full '>  <img className='icon' src={icon} alt="" /></div>
                    </div>
                 </div>
              </div>
{/* ........................................................ */}

               <div className='sectionTwo max-w-[580px] min-h-[400px] bg-[#2a2a2a] flex flex-col justify-around px-[4%] rounded-[10px]'>
                 
                <b className='flex items-center  '><img className='pr-5' src={qoute} alt="" /> <span className='text-blue'>[</span> CLASSY WORK BY PROFECi <span className='text-blue'>]</span></b>
                <p className='font-[400] text-[22px]! leading-[36px]! text-white-bg! '>“ We see our clients as strategic partners, working closely together to support a wide range of marketing needs.“</p>
                 <div className='flex justify-between'>
                    <div className='flex flex-col gap-2'>
                        <p>UX DESIGNER</p>
                         <b className='text-[24px]! font-[600]! '>Norman N. Nelson</b>
                    </div>
                    <div className='flex items-center -space-x-[10px]'>
                        <img src={img4} alt="img" />
                         <div className='bg-blue w-[50px] h-[50px] flex justify-center items-center rounded-full '>  <img className='icon' src={icon2} alt="" /></div>
                    </div>
                 </div>
              </div>

          </main>



      </div>
    </div>
  )
}

export default Testimonial

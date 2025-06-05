import CountUp from 'react-countup'
import './facts.css'

import { useEffect, useRef, useState } from 'react';
import img from '../../assets/vector/Vector.png'
import user1 from '../../assets/user/bg.png'
import user2 from '../../assets/user/bg2.png'
import user3 from '../../assets/user/bg3.png'
import user4 from '../../assets/user/bg4.png'

const Facts = () => {
 
  const [counter , setCounter] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCounter(true)
          observer.unobserve(ref.current)  // একবার ভিউ হলেই আর observer বন্ধ
        }
      },
      { threshold: 0.5 }  // 50% ভিউ হলে ট্রিগার হবে
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className="facts min-h-[100vh] pt-25 px-2">

      <header className=' text-center'>
          <p className='flex justify-center'><span>[ </span> FUN FACTS <span>]</span></p>
          <b>Let's <i>elevate</i> your brand, drive <br></br> <i> bussiness</i> growth, and unlock new <br/> possibilities <i>together.</i></b>
      </header>

   
        <main ref={ref} className='flex  flex-wrap justify-center gap-15  max-md:gap-10 max-sm:gap-6'>

        <div>
          <h2 className='bg-white'>
            <p>[projected Delivered] <img src={img} alt="" /></p>
            
            <b>{counter?<CountUp start={0} end={1200} duration={4} delay={0.5}/> : 0}<span className='text-blue'>+ </span></b>
          </h2>
            <h3>over 1200 projects completed-and <br/> we're just gettign started!</h3>
        </div>


        <div>
          <h2 className='bg-white'>
            <p>[Team Manager] <img src={img} alt="" /></p>
            <b>{counter?<CountUp start={0} end={100} duration={4} delay={0.5} /> : 0}<span className='text-blue'>+ </span></b>
          </h2>
            <h3>Our strategies drive up to 70% revenue<br/> growth in just one year</h3>
        </div>

        <div>
          <h2 className='bg-white'>
            <p>[start Rating] <img src={img} alt="" /></p>
            <b>{counter?<CountUp start={0} end={4.9} duration={4} delay={0.5} decimals={1} decimal='.'/> : 0}<span className='text-[#f06225]'>+ </span></b>
          </h2>
            <h3>Our strategies boost revenue by up to <br/> 70%! in just one year</h3>
        </div>

        
      </main>


      <section>

          <a href="https://www.youtube.com/watch?v=na80LQCX1KU" target='_blank'>
             <div className='video video1'>

           </div>
          </a>

           <a href="https://www.youtube.com/watch?v=na80LQCX1KU" target='_blank'>
           <div className='video video2 flex justify-center items-center'>
               <div className='bg-white flex items-center justify-center w-[130px] h-[130px] rounded-full cursor-pointer '>
                <h5 className='text-[14px] font-[500]'><span className='text-blue'>[</span> PLAY <span className='text-blue'>]</span></h5>
               </div>
           </div>
           </a>

           <a href="https://www.youtube.com/watch?v=na80LQCX1KU" target='_blank'>
           <div className='video video3 flex items-end px-5 py-5'>
              <p className= 'bg-white flex flex-col  w-[249px] h-[110px] rounded-[10px]'>
               <picture className='flex  -space-x-4 px-3 py-3'>
                 <img src={user1} alt="" />  <img src={user2} alt="" />
                 <img src={user3} alt="" />  <img src={user4} alt="" /> 
               </picture>
               <span className='px-3! text-[black]! ' >100+ happy user fedback</span>
              </p>
           </div>
          </a>

      </section>
    
    </div>
  )
}

export default Facts

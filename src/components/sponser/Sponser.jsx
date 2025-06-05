
import icon from '../../assets/icon/icon1.png'

import img1 from '../../assets/icon/2.png'
import img2 from '../../assets/icon/3.png'
import img3 from '../../assets/icon/4.png'
import img4 from '../../assets/icon/5.png'

const Sponser = () => {
  return (
    <div className='sponser min-h-[52px] w-full  flex items-center justify-center gap-15 max-sm:gap-5 py-10 flex-wrap '>
     
    
            
       <picture className='flex items-center gap-10'>
        <img className='w-[30px] h-[30px]' src={icon} alt="" />
        <p className='text-[1rem] font-[400] text-text-gray leading-[24px] !block'>Loved by <b>1000+</b> big & <br></br> small brands arounds the worlds</p>
      </picture>
         
         <div className="images flex max-md:justify-center gap-15 max-md:gap-10 flex-wrap">
            <img src={img1} alt="" />
             <img src={img2} alt="" />
              <img src={img3} alt="" />
               <img src={img4} alt="" />
         </div>
        


     
    </div>
  )
}

export default Sponser

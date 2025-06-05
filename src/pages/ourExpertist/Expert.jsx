import { Link } from 'react-router'
import './exper.css'
import img from '../../assets/another/image0.png'
import { useState } from 'react'
const Expert = () => {

    const [tab, setTab] = useState(1)

    const ToggleEvent = (id)=>{
          setTab(id)
    };



  return (
    <div className="expert bg-white-bg min-h-[60vh] py-15 px-2">
        <header className='pl-[11rem] max-lg:pl-[5rem] max-md:pl-[1rem] py-5  '>
            <p className="text-[14px] font-[500] "><span>[</span> OUR EXPERTISE <span>]</span></p>
            <div className="heading">
               <p className='!text-[48px] block!  max-md:text-[40px] max-sm:text-[30px] max-md:leading-[48px] max-sm:leading-[34px] leading-[58px] -tracking-[3px]'>
                 Blending <i>innovation</i> with dope & <br/> <i>timeless</i> asethetics</p>
            </div>

        </header>

        <main className='flex max-lg:flex-col justify-center gap-10'>

            <ul className='max-lg:flex max-md:gap-2 px-2 max-md:flex-wrap'>
                <li className='border-t-1 max-lg:border-t-[0px]' onClick={()=> ToggleEvent(1)}>
                <span className={`absolute bottom-0 left-0 h-[2px] bg-text-gray transition-all duration-300 ${tab === 1 ? 'w-1/2' : 'w-0'}`}></span>
                <Link><span className={tab === 1 ? 'text-blue':''}>01.</span> Products Design</Link>
                </li>

                <li onClick={()=> ToggleEvent(2)}>
                <span className={`absolute bottom-0 left-0 h-[2px] bg-text-gray transition-all duration-300 ${tab === 2 ? 'w-1/2' : 'w-0'}`}></span>
                <Link><span className={tab === 2 ? 'text-blue':''}>02.</span> Web Development</Link>
                </li>

                <li onClick={()=> ToggleEvent(3)}>
                <span className={`absolute bottom-0 left-0 h-[2px] bg-text-gray transition-all duration-300 ${tab === 3 ? 'w-1/2' : 'w-0'}`}></span>
                <Link><span className={tab === 3 ? 'text-blue':''}>03.</span> UI/UX Design</Link>
                </li>

                <li onClick={()=> ToggleEvent(4)}>
                <span className={`absolute bottom-0 left-0 h-[2px] bg-text-gray transition-all duration-300 ${tab === 4 ? 'w-1/2' : 'w-0'}`}></span>
               <Link><span className={tab === 4 ? 'text-blue':''}>04.</span> SEO/Marketing</Link>
               </li>
            </ul>

            <div className={tab === 1 ? 'details ': 'hidden'}>
                <h2>Product Design</h2> 
                <div className='flex '>
                    <picture>
                        <img src={img} alt="" />
                    </picture>
                    <div className='divid'>
                        <p>Our Web Design & Development services are<br/> crafted to make that introduction strong, <br/> welcoming, and impossible to forget.</p>
                         <h3>
                            <b><span>[</span> UI/UX <span>]</span></b>
                            <b><span>[</span> PRODUCT UI <span>]</span></b>
                            <b><span>[</span> UX <span>]</span></b>
                            <b><span>[</span> REASEARCH <span>]</span></b>
                            <b><span>[</span> SUPPORT <span>]</span></b>
                            <b><span>[</span> SKETCH <span>]</span></b>
                         </h3>
                         <button>+ GET IN TOUCH</button>
                    </div>
                </div>

            </div>

            <div className={tab === 2 ? 'details ': 'hidden'}>
                <h2>Web development</h2> 
                <div className='flex '>
                    <picture>
                        <img src={img} alt="" />
                    </picture>
                    <div className='divid'>
                        <p>Our Web Design & Development services are<br/> crafted to make that introduction strong, <br/> welcoming, and impossible to forget.</p>
                         <h3>
                            <b><span>[</span> UI/UX <span>]</span></b>
                            <b><span>[</span> PRODUCT UI <span>]</span></b>
                            <b><span>[</span> UX <span>]</span></b>
                            <b><span>[</span> REASEARCH <span>]</span></b>
                            <b><span>[</span> SUPPORT <span>]</span></b>
                            <b><span>[</span> SKETCH <span>]</span></b>
                         </h3>
                         <button>+ GET IN TOUCH</button>
                    </div>
                </div>

            </div>


            <div className={tab === 3 ? 'details ': 'hidden'}>
                <h2>UI/UX Design</h2> 
                <div className='flex '>
                    <picture>
                        <img src={img} alt="" />
                    </picture>
                    <div className='divid'>
                        <p>Our Web Design & Development services are<br/> crafted to make that introduction strong, <br/> welcoming, and impossible to forget.</p>
                         <h3>
                            <b><span>[</span> UI/UX <span>]</span></b>
                            <b><span>[</span> PRODUCT UI <span>]</span></b>
                            <b><span>[</span> UX <span>]</span></b>
                            <b><span>[</span> REASEARCH <span>]</span></b>
                            <b><span>[</span> SUPPORT <span>]</span></b>
                            <b><span>[</span> SKETCH <span>]</span></b>
                         </h3>
                         <button>+ GET IN TOUCH</button>
                    </div>
                </div>

            </div>

            <div className={tab === 4 ? 'details ': 'hidden'}>
                <h2>SEO/Marketing</h2> 
                <div className='flex '>
                    <picture>
                        <img src={img} alt="" />
                    </picture>
                    <div className='divid'>
                        <p>Our Web Design & Development services are<br/> crafted to make that introduction strong, <br/> welcoming, and impossible to forget.</p>
                         <h3>
                            <b><span>[</span> UI/UX <span>]</span></b>
                            <b><span>[</span> PRODUCT UI <span>]</span></b>
                            <b><span>[</span> UX <span>]</span></b>
                            <b><span>[</span> REASEARCH <span>]</span></b>
                            <b><span>[</span> SUPPORT <span>]</span></b>
                            <b><span>[</span> SKETCH <span>]</span></b>
                         </h3>
                         <button>+ GET IN TOUCH</button>
                    </div>
                </div>

            </div>
        </main>
      
    </div>
  )
}

export default Expert

import './team.css'


import icon1 from '../../assets/icon/icon2.png'
import icon2 from '../../assets/icon/icon1.png'
import icon3 from '../../assets/icon/icon3.png'

import team1 from '../../assets/user/img.png'
import team2 from '../../assets/user/img2.png'
import team3 from '../../assets/user/img3.png'


import { FaInstagram } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Team = () => {
  return (
    <div className='bg-white-bg'>
        <header className='teams flex flex-wrap gap-4  justify-around items-center  py-14 px-5!'>
         <div>
            <p><span>[</span> MEET WITH TEAM <span>]</span></p>
            <b>Get to <i>know</i> the brilliant <i>team</i> <br/> driving our <i>succes.</i></b>
         </div>
         <button className='border-1 text-[14px] font-[500] border-border2 rounded-[50px] px-[24px] py-[18px] hover:bg-blue hover:text-white cursor-pointer'> + JOIN WITH US</button>
        </header>

       <div className="team flex flex-wrap justify-center gap-8">


             <div className='teamInformation '>
                 <div className="picture">
                    <img className='forRotate' src={icon1} alt="" />
                    <img src={team1} alt="" />
                 </div>
                    
                 
                 <div className='self'>
                    <p><span>[</span> FOUNDER <span>]</span></p>
                    <h2>Oscar N. winsley</h2>
                    <div className='socials '><FaFacebook className='socialIcon text-blue'/> <FaSquareXTwitter className=' socialIcon text-[black]'/> </div>
                 </div>
             </div>{/*......team...*/}




             <div className='teamInformation '>
                 <div className="picture">
                    <img className='forRotate' src={icon2} alt="" />
                    <img src={team2} alt="" />
                 </div>
                    
                 
                 <div className='self'>
                    <p><span>[</span> CEO <span>]</span></p>
                    <h2>Cristian M. Durant</h2>
                    <div className='socials'><FaFacebook className='socialIcon text-blue'/> <FaLinkedin className='socialIcon text-[#0a66c2]'></FaLinkedin></div>
                 </div>
             </div>{/*......team...*/}




             <div className='teamInformation '>
                 <div className="picture">
                    <img className='forRotate' src={icon3} alt="" />
                    <img src={team3} alt="" />
                 </div>
                    
                 
                 <div className='self'>
                    <p><span>[</span> DESIGNER <span>]</span></p>
                    <h2>Ricard p. Winslow</h2>
                    <div className='socials'><FaWhatsappSquare className='socialIcon text-[#25d366]'/> <FaInstagram className='socialIcon text-[#e4405f]'/></div>
                 </div>
             </div>{/*......team...*/}



             



       </div>
    </div>
  )
}

export default Team

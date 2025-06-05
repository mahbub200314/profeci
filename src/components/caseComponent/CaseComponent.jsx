import './caseComponent.css'

import img1 from '../../assets/another/image.png'
import img2 from '../../assets/another/image1.png'
import img3 from '../../assets/another/image2.png'
import img4 from '../../assets/another/image3.png'

import { Link } from 'react-router'
const CaseComponent = () => {
  return (
    <main className=" flex flex-wrap justify-center items-center gap-15 max-sm:gap-8">

       <Link to='/nestedCaseDetails'>
        <div className='group'>
            <picture>
                <img src={img1} alt="img" />
            </picture>
            <h2><b>Homely Application Design</b> <span>2024</span></h2>
            <p>PRODUCT DESIGN</p>
        </div>
       </Link>

       <Link to='/nestedCaseDetails'>
         <div className='group'>
            <picture>
                <img src={img2} alt="img" />
            </picture>
            <div>
            <h2><b>Xeus Website Design & Development</b> <span>2024</span></h2>
            <p>Web Development</p>
            </div>
        </div>
       </Link>

        <Link to='/nestedCaseDetails'>
         <div className='group'>
            <picture>
                <img src={img3} alt="img" />
            </picture>
            <h2><b>The North Face UI & UX Design </b> <span>2024</span></h2>
            <p>UI/UX</p>
        </div>
        </Link>

    <Link to='/nestedCaseDetails'>
         <div className='group'>
            <picture>
                <img src={img4} alt="img" />
            </picture>
            <h2><b>Aspirex Brand Marketing & SEO Solutation</b> <span>2024</span></h2>
            <p>SEO MARKETING</p>
        </div>
        </Link>
    </main>
  )
}

export default CaseComponent

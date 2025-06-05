import React from 'react'
import CaseComponent from '../../components/caseComponent/caseComponent'
import { Link } from 'react-router'

const CasePage = () => {
  return (
    <div className='py-15 px-10 max-sm:px-2 bg-white-bg'>

    <div className='shadow-xs bg-white py-10 px-2 rounded-[10px]'>

        <header className='text-center'>
         <p className='flex justify-center'><span>[ </span>CASE STUDY <span> ]</span></p>
         <b className='max-sm:text-[30px]! max-sm:-tracking-[1px]! max-sm:leading-[36px]!     '>we <i>explored,</i> iterated, & <i>brought</i><br/> thing <i>incrediable</i> to life.</b>
      </header>
      <main>
        <CaseComponent/>
      </main>
       
       <button className='w-full py-8'>
        <Link to='nestedCaseStudy' className='border-border2 border-2 text-[14px] font-[500] px-[24px] py-[18px] bg-white rounded-[50px] hover:bg-blue hover:text-white hover:border-transparent '>+ MORE WORKS</Link>
       </button>
    </div>
    </div>
  )
}

export default CasePage

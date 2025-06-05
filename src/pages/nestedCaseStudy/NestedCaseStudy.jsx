
import CaseComponent from '../../components/caseComponent/CaseComponent'
import './nestedcase.css'

const NestedCaseStudy = () => {
  return (
    <div className='nestedCaseStudy min-h-[100vh] -mt-15 pt-50 pb-30 px-3'>
      <header className='flex flex-col gap-5 justify-center text-center items-center pb-10'>
        <b className='!text-[64px] !max-md:text-[40px] font-[600]'>Case Study</b>
        <p className='text-[16px] font-[400]'>Profeci® is a leading brand design, consultancy, shaping & redefining the<br/> world’s top tech companies.</p>
      </header>

      <main>
        <CaseComponent/>
      </main>
    </div>
  )
}

export default NestedCaseStudy

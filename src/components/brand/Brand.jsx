import './brand.css'
import badge from '../../assets/logo/badge.png'
const Brand = () => {
  return (
    <div className='bg-white-bg relative min-h-[200px] flex overflow-hidden '>
      <p className='animationScroll absolute bottom-0 max-sm:bottom-5 left-0 whitespace-nowrap flex'>
        <span className="text-[120px] max-sm:text-[70px] font-[600] flex items-center gap-4 px-10">
          Let&apos;s <i className="font-[instrument_serif] font-[400]">elevate</i> your brand, drive <i className="font-[instrument_serif] font-[400]">business</i> growth
        </span>
        <span className="text-[120px] max-sm:text-[70px] font-[600] flex items-center gap-4 px-10">
          Let&apos;s <i className="font-[instrument_serif] font-[400]">elevate</i> your brand, drive <i className="font-[instrument_serif] font-[400]">business</i> growth
        </span>

        
      </p>
      <img className=' badge absolute left-[40%] max-sm:left-[20%] ' src={badge} alt="" />
    </div>
  );
};

export default Brand;




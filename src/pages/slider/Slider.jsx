import './slider.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import slider1 from '../../assets/slider/bg.jpg';
import slider2 from '../../assets/slider/bg1.jpg';
import slider3 from '../../assets/slider/bg2.jpg';
import slider4 from '../../assets/slider/bg3.jpg';
import slider5 from '../../assets/slider/bg4.jpg';

const images = [slider1, slider2, slider3, slider4, slider5];

const Slider = () => {
  return (
    <div className="w-full py-20">
      <Swiper
        modules={[ Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        // pagination={{ clickable: true }}
        speed={1500}
        loop={true}
        centeredSlides={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="w-full "
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center h-[400px] sm:h-[450px] md:h-[500px] pb-5">
              <img
                src={img}
                alt={`slide-${index + 1}`}
                className="h-full w-full max-w-[400px] object-cover rounded-2xl shadow-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

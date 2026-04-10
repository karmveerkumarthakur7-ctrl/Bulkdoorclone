import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function HeroSlider() {
  return (
    <div className="w-full px-10 ">
 <div className="rounded-xl overflow-hidden mt-5">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{ delay: 3000 }}
        loop={true}
      >

        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348"
            alt="banner1"
            className="w-full h-[350px] object-cover rounded-md"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
            alt="banner2"
            className="w-full h-[350px] object-cover rounded-md"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796"
            alt="banner3"
            className="w-full h-[350px] object-cover"
          />
        </SwiperSlide>

      </Swiper>
</div>
    </div>
  );
}

export default HeroSlider;
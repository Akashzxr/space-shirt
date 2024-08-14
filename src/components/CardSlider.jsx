import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import HeroCard from "./HeroCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

export default function CardSlider() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Autoplay]}
        effect={"coverflow"}
        spaceBetween={-2}
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="relative bottom-56 pt-32 pb-32"
      >
        <SwiperSlide>
          <HeroCard image={"/tshirt-1.png"} width={"15rem"} name={"T-SHIRT"}/>
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard image={"/tshirt_2.png"} width={"14rem"} name={"HOODIE"} />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard image={"/tshirt_3.png"} width={"17rem"} name={"SWEATSHIRT"} />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard image={"/tshirt_4.png"} width={"15rem"} name={"JACKET"} />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard image={"/tote_bag.png"} width={"13rem"} name={"TOTE-BAG"} />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard image={"/bottle.png"} width={"12rem"} name={"BOTTLE"} />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard image={"/cap1.png"} width={"12rem"} name={"BENIE"}/>
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard image={"/cap2.png"} width={"13rem"} name={"CAP"} />
        </SwiperSlide>
      </Swiper>
      <button className="font-Cannon max-w-52 w-52 h-12 relative bottom-52 rounded-3xl border border-solid border-black border-spacing-1 mx-auto block">
        SEE ALL PRODUCT
      </button>
    </div>
  );
}

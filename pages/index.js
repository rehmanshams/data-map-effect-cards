import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

export default function Home() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);
  const [count7, setCount7] = useState(0);
  const [count8, setCount8] = useState(0);
  const [count9, setCount9] = useState(0);

  return (
    <div className="w-full flex h-full mx-auto">
      <div className="max-w-96 w-full h-[1007px] bg-gray-500">
        <div className="mt-44  ml-10 ">
          <>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper "

            >
              <SwiperSlide onClick={() => setCount1(!count1)}>Slide 1</SwiperSlide>
              <SwiperSlide onClick={() => setCount2(!count2)}>Slide 2</SwiperSlide>
              <SwiperSlide onClick={() => setCount3(!count3)}>Slide 3</SwiperSlide>
              <SwiperSlide onClick={() => setCount4(!count4)}>Slide 4</SwiperSlide>
              <SwiperSlide onClick={() => setCount5(!count5)}>Slide 5</SwiperSlide>
              <SwiperSlide onClick={() => setCount6(!count6)}>Slide 6</SwiperSlide>
              <SwiperSlide onClick={() => setCount7(!count7)}>Slide 7</SwiperSlide>
              <SwiperSlide onClick={() => setCount8(!count8)}>Slide 8</SwiperSlide>
              <SwiperSlide onClick={() => setCount9(!count9)}>Slide 9</SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
      <div className="max-w-96 w-full h-[1007px] bg-red-400">
        <div className="mt-44">
          <>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper "

            >
              {count1 === true ? <SwiperSlide>Slide 1</SwiperSlide> : false}
              {count2 === true ? <SwiperSlide>Slide 2</SwiperSlide> : false}
              {count3 === true ? <SwiperSlide>Slide 3</SwiperSlide> : false}
              {count4 === true ? <SwiperSlide>Slide 4</SwiperSlide> : false}
              {count5 === true ? <SwiperSlide>Slide 5</SwiperSlide> : false}
              {count6 === true ? <SwiperSlide>Slide 6</SwiperSlide> : false}
              {count7 === true ? <SwiperSlide>Slide 7</SwiperSlide> : false}
              {count8 === true ? <SwiperSlide>Slide 8</SwiperSlide> : false}
              {count9 === true ? <SwiperSlide>Slide 9</SwiperSlide> : false}
            </Swiper>
          </>
        </div>
      </div>
    </div>

  );
}
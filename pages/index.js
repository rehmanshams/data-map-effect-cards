import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

export default function Home() {
  const data = [
    {
      key: 1,
      name: 'Afnan'
    },
    {
      key: 2,
      name: 'Ali'
    },
    {
      key: 3,
      name: 'Junaid'
    },
    {
      key: 4,
      name: 'Hamza'
    },
    {
      key: 5,
      name: 'Ali bonga'
    },
    {
      key: 6,
      name: 'Ali stupid'
    },
    {
      key: 7,
      name: 'Ali chawal'
    }
  ]
  const [arr, setArr] = useState([])

  const datahandler = (item) => {
    // let temp = arr;
    // temp.push(item);
    // console.log("temp", temp)

    setArr([item,...arr])
    console.log([item,...arr])

  }

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
              {data.map((item, idx) => {
                return (
                  <SwiperSlide key={idx} onClick={() => {
                    datahandler(item)
                  }}>{item.name}</SwiperSlide>
                )
              })}
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
              {arr.map((item, idx) => {
                return (
                  <SwiperSlide key={idx} onClick={() => {
                    datahandler(item)
                  }}>{item.name}</SwiperSlide>
                )
              })}
            </Swiper>
          </>
        </div>
      </div>
    </div>

  );
}
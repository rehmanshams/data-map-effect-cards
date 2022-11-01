import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

export default function Home() {
    const [arr, setArr] = useState([]);
    const data = [
        {
            id: 1,
            name: "Afnan",
        },
        {
            id: 2,
            name: "Ali",
        },
        {
            id: 3,
            name: "Junaid",
        },
        {
            id: 4,
            name: "Hamza",
        },
        {
            id: 5,
            name: "Ali bonga",
        },
        {
            id: 6,
            name: "Ali stupid",
        },
        {
            id: 7,
            name: "Ali chawal",
        },
    ];

    const datahandler = (item1) => {
        let k = arr?.find((it) => it?.id === item1?.id);
        if (k) {
            return;
        } else {
            setArr((pre) => [item1, ...pre]);
        }
    };

  return (
    <div className="w-full flex h-full mx-auto">
      <div className="max-w-96 w-full h-[1007px] ali">
        <div className="mt-44  ml-10 ">
          <>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"

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
      <div className="max-w-96 w-full h-[1007px] ali1">
        <div className="mt-44">
          <>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper "

            >
              {arr.map((item) => {
                return (
                  <SwiperSlide   >
                    {item.name}
                  </SwiperSlide>
                )
              })}
            </Swiper>

          </>
        </div>
      </div>
    </div>

  );
}
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Carrusel() {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000 }}
            loop={true}
            pagination={{ clickable: true }}
            className="h-screen w-full"
        >
            <SwiperSlide>
                <div className="relative flex flex-col items-center justify-center h-full">
                    <img
                        src="/src/assets/img1.jpg"
                        alt="Slide 1"
                        className="h-full w-full object-cover z-0"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=" relative flex flex-col items-center justify-center h-full">
                    <img
                        src="/src/assets/img2.jpg"
                        alt="Slide 2"
                        className="h-full w-full object-cover z-0"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative flex flex-col items-center justify-center h-full">
                    <img
                        src="/src/assets/img3.jpg"
                        alt="Slide 3"
                        className="h-full w-full object-cover z-0"
                    />
                </div>
            </SwiperSlide>
            {/* Texto centrado sobre la imagen */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center z-10">
                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                    Entregando construcción de alta calidad
                </h1>
                <p className="mt-4 text-lg md:text-xl drop-shadow-md">
                    On time and within budget
                </p>
                <button className="mt-6 px-6 py-3 bg-orange-500 rounded-md font-semibold">
                    Get Started
                </button>
            </div>
        </Swiper>
    )
}
// import { useRef, useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper as SwiperCore } from 'swiper/types';
// import { Autoplay, Navigation } from 'swiper/modules';
// import { slideData } from '@/helpers/data';
// // import { SwiperOptions } from 'swiper/types';
// // Import Swiper styles
// import 'swiper/css';
// // import 'swiper/swiper.min.css';


// const Reviews = () => {
//     const swiperRef = useRef<SwiperCore>();  
//     // const prevRef = useRef();
//     // const nextRef = useRef();

//     const sliderSettings = {
//         440: {
//           slidesPerView: 1,
//           spaceBetween: 30,
//         },
//         680: {
//           slidesPerView: 2,
//           spaceBetween: 30,
//         },
//         1024: {
//           slidesPerView: 3,
//           spaceBetween: 30,
//         },
//       };

//     return (
//         <div className="inline-flex flex-col gap-10 pt-20 w-[100%]">
//             <div className="flex justify-between items-center">
//                 <h3>Customer Reviews</h3>
//                 <div className="flex items-start gap-4">
//                     <div className="flex p-[10px] items-start g-[10px] bg-light-black rounded-[90px]" onClick={() => swiperRef.current?.slidePrev()}>
//                         <img src="/icons/reviewbackwardicon.svg" alt="backward icon" />
//                     </div>
//                     <div className="flex p-[10px] items-start g-[10px] bg-light-black rounded-[90px]" onClick={() => swiperRef.current?.slideNext()} >
//                     <img src="/icons/reviewforwardicon.svg" alt="forward icon" />
//                     </div>
//                 </div>
//             </div>
            
//             <div className="flex items-start gap-8 w-[100%]">
//                 <Swiper
//                 // breakpoint={sliderSettings}
//                 slidesPerView={3}
//                 spaceBetween={30}
//                 loop={true}
//                 centeredSlides={true}
//                 autoplay={{
//                   delay: 2500,
//                   disableOnInteraction: false,
//                 }}
//                 onBeforeInit={(swiper) => {
//                     swiperRef.current = swiper;
//                   }}
//                 modules={[Autoplay, Navigation]}
//                 className="mySwiper"
//                 >
//                     {slideData.map((data, index) => (
//                         <SwiperSlide key={index}>
//                             <div className="flex p-5 flex-col w-[365px] items-start gap-5 rounded-2xl bg-white">
//                                 <div className="flex items-start gap-3">
//                                     <img src={data?.image} alt="slide image" />
//                                     <div>
//                                         <h5>{data?.name}</h5>
//                                         <div>&#11088; &#11088; &#11088; &#11088; &#11088;</div>
//                                     </div>
//                                 </div>
//                                 <p>
//                                     { data?.description}
//                                 </p>
//                                 <p>{data?.date}</p>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                     </Swiper>
//                 </div>
//         </div>
//     )
// }

// export default Reviews;
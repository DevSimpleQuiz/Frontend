import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";


import Banner1 from "../../../assets/bannerImg/Banner1.svg";
import Banner2 from "../../../assets/bannerImg/Banner2.svg";
import Banner3 from "../../../assets/bannerImg/Banner3.svg";
import Banner4 from "../../../assets/bannerImg/Banner4.svg";
import Banner5 from "../../../assets/bannerImg/Banner5.svg";


const bannerImages = [
  Banner2,
  Banner3,
  Banner4,
  Banner1,
  Banner5
];

function Banner() {
  return (
    <BannerStyle>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0} 
        slidesPerView={1} 

        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        speed={500}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {bannerImages.map((image, index) => (
          <SwiperSlide key={index}>
            <SlideContainer>
              <ImageContainer>
              <Image 
                  src={image} 
                  alt={`Banner ${index + 1}`} 
                  loading={index === 0 ? "eager" : "lazy"} 
                  // 첫 번째 이미지는 eager, 나머지는 lazy 로딩
                />
              </ImageContainer>
            </SlideContainer>
          </SwiperSlide>
        ))}
        {/* <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div> */}
      </Swiper>
    </BannerStyle>
  );
}

const BannerStyle = styled.div`
  padding-top: 30px;
/* 
  .swiper-button-prev,
  .swiper-button-next {
    color: #706f6f !important;
    background-color: rgba(255, 255, 255, 0.2) !important;
    border-radius: 50% !important;
    width: 30px !important;
    height: 30px !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    margin: -1% 8% !important;
  } */

`;

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: auto; 
  max-width: 1200px;
  object-fit: cover;
`;


export default Banner;

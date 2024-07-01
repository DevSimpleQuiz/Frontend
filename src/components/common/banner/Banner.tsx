import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";

import Banner1 from "../../../assets/bannerImg/Banner1.svg";
import Banner2 from "../../../assets/bannerImg/Banner2.svg";
import Banner3 from "../../../assets/bannerImg/Banner3.svg";
import Banner4 from "../../../assets/bannerImg/Banner4.svg";
import Banner5 from "../../../assets/bannerImg/Banner5.svg";
import Banner6 from "../../../assets/bannerImg/Banner6.svg";
import Banner7 from "../../../assets/bannerImg/Banner7.svg";

const bannerImages = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6, Banner7 ];

function Banner() {
  return (
    <BannerStyle>
      <Swiper
        modules={[Autoplay, Pagination]} 
        // spaceBetween={50} 
        // slidesPerView={1.5} 
        spaceBetween={0} 
        slidesPerView={1} 
        centeredSlides={true} 
        loop={true} 
        navigation
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        speed={500}
        pagination={{
          clickable: true,
        }}
      >
        {/* 각 이미지를 SwiperSlide로 렌더링합니다. */}
        {bannerImages.map((image, index) => (
          <SwiperSlide key={index}>
            <SlideContainer>
              <ImageContainer>
                <Image src={image} alt={`Banner ${index + 1}`} />
              </ImageContainer>
            </SlideContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </BannerStyle>
  );
}

const BannerStyle = styled.div`
  padding-top: 50px;
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
  width: 1200px;
  /* max-width: 100%; */
  max-height: 100%;
  object-fit: contain;
`;

export default Banner;

import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Banner1 from "../../../assets/bannerImg/Banner1.svg";
import Banner2 from "../../../assets/bannerImg/Banner2.svg";
import Banner3 from "../../../assets/bannerImg/Banner3.svg";
import Banner4 from "../../../assets/bannerImg/Banner4.svg";
import Banner5 from "../../../assets/bannerImg/Banner5.svg";
import Banner6 from "../../../assets/bannerImg/Banner6.svg";
import Banner7 from "../../../assets/bannerImg/Banner7.svg";
import Banner8 from "../../../assets/bannerImg/Banner8.svg";

const bannerImages = [
  Banner8,
  Banner2,
  Banner3,
  Banner5,
  Banner4,
  Banner6,
  Banner1,
  Banner7,
];

function Banner() {
  return (
    <BannerStyle>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1.35}
        centeredSlides={true}
        loop={true}
        loopFillGroupWithBlank= {true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        speed={500}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        <div className="swiper-button-prev"></div>
        {bannerImages.map((image, index) => (
          <SwiperSlide key={index}>
            <SlideContainer>
              <ImageContainer>
                <Image src={image} alt={`Banner ${index + 1}`} />
              </ImageContainer>
            </SlideContainer>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
      </Swiper>
    </BannerStyle>
  );
}

const BannerStyle = styled.div`
  padding-top: 50px;
  position: relative;

  .swiper-button-prev,
  .swiper-button-next {
    color: #000;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -1% 13%;
  }
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
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export default Banner;

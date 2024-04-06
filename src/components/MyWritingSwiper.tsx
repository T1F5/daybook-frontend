import { Swiper, SwiperSlide } from "swiper/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import Card from "./Card";
import SwiperFooter from "./SwiperFooter";
import { useState } from "react";
import Impacted from "./Impacted";

const MyWritingSwiper = () => {

    const mockArr = [0, 0, 0, 0, 0];

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    return (
        <>
            <Swiper
                css={css`
          margin-top: 30px;
          width: 100%;
        `}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1.08}
                coverflowEffect={{
                    rotate: 10,
                    stretch: 0,
                    depth: 500,
                    modifier: 2,
                    slideShadows: true,
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
            >
                {mockArr.map((_, i) => <CardSlide key={i}>
                    <Card isCurrent={currentIndex === i} />
                </CardSlide>)}
                <Impacted impactNum={2} />
                <SwiperFooter maxIndex={mockArr.length} currentIndex={currentIndex} />
            </Swiper>
        </>
    );
};

export default MyWritingSwiper;

const CardSlide = styled(SwiperSlide)`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

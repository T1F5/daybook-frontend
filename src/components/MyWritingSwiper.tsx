import { Swiper, SwiperSlide } from "swiper/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import Card from "./Card";
import SwiperFooter from "./SwiperFooter";
import { useEffect, useState } from "react";
import Impacted from "./Impacted";

const MyWritingSwiper = () => {

    const mockArr = [0, 0, 0, 0, 0];

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const [windowSize, setWindowSize] = useState<number | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {

            const handleResize = () => {
                setWindowSize(window.innerWidth);
            }

            // resize 이벤트가 발생할 때 handleResize 함수가 실행되도록 한다.
            window.addEventListener("resize", handleResize);

            // 초기값을 설정할 수 있도록 handleResize 함수를 한 번 실행시킨다.
            handleResize();

            // 이벤트 리스너를 제거하여 이벤트 리스너가 리사이즈될 때마다 계속해서 생겨나지 않도록 처리한다. (clean up)
            return () => window.removeEventListener("resize", handleResize);
        } else {
            return () => window.removeEventListener("resize", () => {
                return null
            });
        }
    }, []); // 컴포넌트가 처음 마운트 될때와 언마운트 될 때 실행

    const SPV = () => {
        if (!windowSize) return;
        if (windowSize > 660) return 1.5
        if (windowSize > 440) return 1.3
        if (windowSize > 350) return 1.1
    }

    return (
        <>
            <Swiper
                css={css`
          margin-top: 30px;
          width: 100%;
        `}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={SPV()}
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

import Header from "@components/Header";
import styled from '@emotion/styled';
import getFontStyle from "@theme/font/getFontSize";
import { css } from '@emotion/react';
import MyWritingSwiper from "@components/MyWritingSwiper";

const MyWritings = () => {
    return (
        <HomeWrapper>
            <Header>
                <Header.Button variety="write" />
            </Header>

            <TopSection>

                <img src="/src/assets/images/image.png" alt="임시 이미지" />

                <div>
                    <span css={css`
                        ${getFontStyle('title2')}
                    `}>YYYY년 MM월 DD일</span>
                    <span css={css`
                        ${getFontStyle('header1')}
                    `}>3개</span>
                </div>

            </TopSection>
            <MyWritingSwiper />
        </HomeWrapper>
    );
};

export default MyWritings;

const HomeWrapper = styled.div`
padding-top: 20px;
    width: 100%;
    height: 100vh;
`

const TopSection = styled.section`
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
    margin-top: 20px;

    img {
        align-self: flex-start;
    }

    & > div {
        margin-top: 8px;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
`
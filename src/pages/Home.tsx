import Header from "@components/Header";
import styled from '@emotion/styled';
import getFontStyle from "@theme/font/getFontSize";
import { css } from '@emotion/react';
import HomeSwiper from "@components/HomeSwiper";

const Home = () => {
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
            <HomeSwiper />
        </HomeWrapper>
    );
};

export default Home;

const HomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
`

const TopSection = styled.section`
    width: calc(100% - 32px);
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
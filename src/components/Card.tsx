import styled from '@emotion/styled';
import { colors } from '@theme';
import getFontStyle from '@theme/font/getFontSize';
import DownloadIconSVG from "@assets/svg/ico_download.svg?react";
import MoreIconSVG from "@assets/svg/ico_more.svg?react";
import { css } from '@emotion/react';

const Card = () => {
    return (
        <Wrapper>
            <CardHeader>
                <span>배려</span>
                <div css={css`
                    margin-right: 32px;
                `}>
                    <DownloadIconSVG />
                    <MoreIconSVG />
                </div>
            </CardHeader>
        </Wrapper>
    );
};

export default Card;


const Wrapper = styled.article`
    max-width: 362px;
    width: 90vw;
    height: 426px;
    // TODO: 배경 추후에 유저 정보 기반으로 넣기!
    /* background-image: url('/src/assets/images/monunpaper.png'); */
    background-size: cover;
    overflow: hidden;
    @media screen and (max-height: 480px) {
        height: 50vh;
        min-height: 350px;
    }
`

const CardHeader = styled.div`
    width: 100%;
    height: 56px;
    background-color: white;
    padding-left: 16px;
    padding-right: 16px;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${colors.grey30};

    span {
        ${getFontStyle('header4')};
        color: ${colors.primaryDark};
    }

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }
`
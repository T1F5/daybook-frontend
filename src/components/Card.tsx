import styled from '@emotion/styled';
import { colors } from '@theme';
import getFontStyle from '@theme/font/getFontSize';
import DownloadIconSVG from "@assets/svg/ico_download.svg?react";
import MoreIconSVG from "@assets/svg/ico_more.svg?react";
import { css } from '@emotion/react';
import CardFooter from './CardFooter';
import { FC } from 'react';
import Detail from './Detail';
import DetailFooter from './DetailCardFooter';
import Textarea from './Textarea';

interface CardType {
    isHome?: boolean;
    isDetail?: boolean;
    isCurrent?: boolean;
}

const Card: FC<CardType> = ({ isHome = false, isDetail = false, isCurrent = true }) => {
    return (
        <Wrapper css={css`
            height: ${isDetail ? '560px' : '426px'};
            margin-top: ${isDetail ? "30px" : "0"};
            opacity: ${!isCurrent ? 0.5 : 1};
        `}>
            <CardHeader>
                <span>배려</span>
                <div css={css`
                    @media screen and (max-width: 480px) {
                        /* margin-right: 32px; */
                    }
                `}>
                    <DownloadIconSVG />
                    <MoreIconSVG />
                </div>
            </CardHeader>
            <CardMain />
            {isHome && <Detail />}
            {!isHome && !isDetail && <CardFooter />}
            {isDetail && <DetailFooter />}
        </Wrapper>
    );
};

export default Card;


const Wrapper = styled.article`
    max-width: 362px;
    width: 90vw;
    height: 426px;
    // TODO: 배경 추후에 유저 정보 기반으로 넣기!
    background-image: url('/src/assets/images/card_background.png');
    background-size: cover;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

const CardMain = styled(Textarea)`
    background: none;
    border: none;
    width: 100%;
    flex-grow: 1;
    min-height: 210px;
    height: max-content;
`
import Header from "@components/Header";
import KakaoLoginButton from "@components/KakaoLoginButton";
import Button from "@components/common/Button";
import { css } from '@emotion/react';
import getFontStyle from "@theme/font/getFontSize";
import { useEffect, useState } from "react";

export type LandingFunnelStateProps = "pre-login" | "post-login" | "select-note";

const Auth = () => {

    const [landingFunnelState, setLandingFunnelState] = useState<LandingFunnelStateProps>("pre-login");

    const userId = localStorage.getItem('userId')

    useEffect(() => {
        if (!userId) return;

        setLandingFunnelState("post-login")

    }, [userId])

    if (landingFunnelState === 'select-note') {
        return <div css={css`
        padding-left: 16px;
        padding-right: 16px;
        height: 100vh;
        position: relative;
        `}>
            <Header>
                일지 작성하기
            </Header>
            <div css={css`
                display: flex;
                width: 100%;
                flex-direction: column;

            `}>
                <div css={css`
                margin-top: 32px;
                    ${getFontStyle('header1')}
                `}>
                    어떤 형태로
                </div>
                <div css={css`
                    ${getFontStyle('header1')}
                `}>
                    일지를 작성할까요?
                </div>
                <div css={css`
                    margin-top: 9px;
                    font-weight: 400;
                    ${getFontStyle('title4')}
                `}>
                    마음에 드는 메모지 형태를 선택해주세요
                </div>
                <div css={css`
                    width: 100%;
                `}>

                </div>
            </div>
        </div>
    }

    if (landingFunnelState === 'post-login') {
        return <div css={css`
        padding-left: 16px;
        padding-right: 16px;
        height: 100vh;
        position: relative;

        background-image: url('/background_landing.png');
        background-size: cover;
    `}>
            <section css={css`
            padding-top: 20vh;
            padding-left: 20%;
            padding-right: 20%;
            @media screen and (max-width: 480px) {
                padding-left: 10px;
                padding-right: 10px;
            }
        `}>
                <img src="/kakao_landing_after.png" alt="kakao login complete background" width={"100%"} />
            </section>
            <div
                css={css`
                width: calc(100% - 32px);
                position: absolute;
                bottom: 50px;
            `}
            >
                <Button>시작하기</Button>
            </div>
        </div>
    }

    return (
        <div css={css`
            padding-left: 16px;
            padding-right: 16px;
            height: 100vh;
            position: relative;

            background-image: url('/background_landing.png');
            background-size: cover;
        `}>
            <section css={css`
                padding-top: 20vh;
                padding-left: 20%;
                padding-right: 20%;
                @media screen and (max-width: 480px) {
                    padding-left: 10px;
                    padding-right: 10px;
                }
            `}>
                <img src="/kakao_landing.png" alt="kakao login background" width={"100%"} />
            </section>
            <KakaoLoginButton setLandingFunnelState={setLandingFunnelState} />
        </div>
    );
};

export default Auth;
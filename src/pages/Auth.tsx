import KakaoLoginButton from "@components/KakaoLoginButton";
import Button from "@components/common/Button";
import { css } from '@emotion/react';
import { useEffect, useState } from "react";

export type LandingFunnelStateProps = "pre-login" | "post-login";

const Auth = () => {

    const [landingFunnelState, setLandingFunnelState] = useState<LandingFunnelStateProps>("pre-login");

    const userId = localStorage.getItem('userId')

    useEffect(() => {
        if (!userId) return;

        setLandingFunnelState("post-login")

    }, [userId])

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
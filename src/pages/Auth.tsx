import KakaoLoginButton from "@components/KakaoLoginButton";
import { css } from '@emotion/react';

const Auth = () => {
    return (
        <div css={css`
            padding-left: 16px;
            padding-right: 16px;
            height: 100vh;
            position: relative;
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
            <KakaoLoginButton />
        </div>
    );
};

export default Auth;
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
            <KakaoLoginButton />
        </div>
    );
};

export default Auth;
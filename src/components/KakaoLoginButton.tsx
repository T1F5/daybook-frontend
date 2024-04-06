import { css } from '@emotion/react';
import KakaoIcon from "@assets/svg/kakao_icon.svg?react";

const KakaoLoginButton = () => {

    const loginWithkakao = () => {

    }

    return (
        <div
            css={css`
                width: calc(100% - 32px);
                height: 56px;
                background-color: #FEE500;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 8px;
                position: absolute;
                bottom: 50px;
            `}
            onClick={loginWithkakao}
        >
            <KakaoIcon />
            카카오 로그인
        </div>
    );
};

export default KakaoLoginButton;
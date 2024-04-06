import styled from "@emotion/styled";
import getFontStyle from "@theme/font/getFontSize";
import ChatSVG from "@assets/svg/ico_chat.svg?react";
import { colors } from "@theme";

const DetailCardFooter = () => {
    return (
        <Wrapper>
            <div>
                <ButtonText>추앙해요 ${2}</ButtonText>
                <ButtonText>감동이에요 ${2}</ButtonText>
                <ButtonText>대단해요 ${2}</ButtonText>
            </div>
            <ChatSVG />
        </Wrapper>
    );
};

export default DetailCardFooter;

const Wrapper = styled.section`

    width: 100%;
    height: 64px;

    background-color: white;
    ${getFontStyle("header4")};
    color: white;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: 16px;
    padding-right: 16px;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }
`

const ButtonText = styled.div`
    width: 89px;
    height: 32px;
    border-radius: 16px;

    background-color: #3D582B10;

    display: flex;
    justify-content: space-around;
    align-items: center;

    ${getFontStyle('caption1')}
    color: ${colors.primary};
`
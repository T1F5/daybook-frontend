import styled from '@emotion/styled';
import { colors } from '@theme';
import getFontStyle from '@theme/font/getFontSize';

const CardFooter = () => {

    return (
        <Wrapper>
            <ReactionButton>
                <img src="/src/assets/images/chuang.png" width={'88px'} alt='추앙해요~' />
                <ButtonText>추앙해요 ${2}</ButtonText>
            </ReactionButton>
            <ReactionButton>
                <img src="/src/assets/images/great.png" width={'88px'} alt='추앙해요~' />
                <ButtonText>대단해요 ${2}</ButtonText>
            </ReactionButton>
            <ReactionButton>
                <img src="/src/assets/images/thankyou.png" width={'88px'} alt='추앙해요~' />
                <ButtonText>감동이에요 ${2}</ButtonText>
            </ReactionButton>
        </Wrapper>
    );
};

export default CardFooter;

const Wrapper = styled.article`
    width: 100%;
    height: 156px;

    padding: 8px 16px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    background-color: white;
`

const ReactionButton = styled.button`
    background: none;
    border: none;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    gap: 4px;
    cursor: pointer;
`

const ButtonText = styled.div`
    width: 100%;
    height: 32px;
    border-radius: 16px;

    background-color: #3D582B10;

    display: flex;
    justify-content: space-around;
    align-items: center;

    ${getFontStyle('caption1')}
    color: ${colors.primary};
`
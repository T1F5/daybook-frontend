import styled from "@emotion/styled";
import Header from "./Header";
import Card from "./Card";
import OthersWritingFooter from "./OthersWritingFooter";

const OthersWriting = () => {
    return (
        <>
            <Header>
                <Header.Button variety="back" />
                다른 사람 일지
            </Header>

            <Wrapper>
                <Card isDetail />
            </Wrapper>

            <OthersWritingFooter />
        </>
    );
};

export default OthersWriting;

const Wrapper = styled.div`
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
`
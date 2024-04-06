import Header from "@components/Header";
import styled from '@emotion/styled';
import getFontStyle from "@theme/font/getFontSize";
import { css } from '@emotion/react';
import MyWritingSwiper from "@components/MyWritingSwiper";
import { getCurrentDate } from "@utils/getCurrentDate";
import { GetDaybookResponse } from "@api/response";
import { useEffect, useState } from "react";
import { getMyDaybook } from "@api";
import hashtagIcon from "@assets/svg";


const MyWritings = () => {

    const [daybookData, setDaybookData] = useState<GetDaybookResponse[] | null>(null);

    const HashTag = hashtagIcon['공감'];

    const getData = async () => {
        const res = await getMyDaybook();
        if (!res || !res.data) return;

        setDaybookData(res.data);
    }

    useEffect(() => {
        getData();
    }, []);

    if (!daybookData) return <>Loading..</>

    return (
        <HomeWrapper>
            <Header>
                <Header.Button variety="write" />
                <Header.Button variety="logout" />
            </Header>
            <TopSection>
                <HashTag css={css`
                    align-self: flex-start;
                `} />

                <div>
                    <span css={css`
                        ${getFontStyle('title2')}
                    `}>{getCurrentDate()}</span>
                    <span css={css`
                        ${getFontStyle('header1')}
                    `}>{daybookData.length}개</span>
                </div>

            </TopSection>
            <MyWritingSwiper myDaybooksData={daybookData} />
        </HomeWrapper >
    );
};

export default MyWritings;

const HomeWrapper = styled.div`
padding-top: 20px;
    width: 100%;
    height: 100vh;
`

const TopSection = styled.section`
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
    margin-top: 20px;

    img {
        align-self: flex-start;
    }

    & > div {
        margin-top: 8px;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
`
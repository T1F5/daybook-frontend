import styled from "@emotion/styled";
import { colors } from "@theme";
import getFontStyle from "@theme/font/getFontSize";
import DownloadIconSVG from "@assets/svg/ico_download.svg?react";
import MoreIconSVG from "@assets/svg/ico_more.svg?react";
import { css } from "@emotion/react";
import CardFooter from "./CardFooter";
import { FC } from "react";
import Detail from "./Detail";
import DetailFooter from "./DetailCardFooter";
import Textarea from "./Textarea";
import { GetDaybookResponse } from "@api/response";
import hashtagIcon from "@assets/svg";

// import 용기 from "@assets/svg/courage.svg?react";
// import 공감 from "@assets/svg/empathy.svg?react";
// import 배려 from "@assets/svg/consideration.svg?react";
// import 사랑 from "@assets/svg/love.svg?react";
// import 양보 from "@assets/svg/compromise.svg?react";
// import 용서 from "@assets/svg/forgiveness.svg?react";
// import 이해 from "@assets/svg/understanding.svg?react";
// import 행복 from "@assets/svg/happiness.svg?react";
// import 협동 from "@assets/svg/cooperation.svg?react";
// import 희망 from "@assets/svg/hope.svg?react";

// const hashtagIcon = {
//   용기,
//   공감,
//   배려,
//   사랑,
//   양보,
//   용서,
//   이해,
//   행복,
//   협동,
//   희망,
// };

interface CardType {
  isHome?: boolean;
  isDetail?: boolean;
  isCurrent?: boolean;
  daybookData: GetDaybookResponse;
}

const Card: FC<CardType> = ({
  isHome = false,
  isDetail = false,
  isCurrent = true,
  daybookData,
}) => {

  const HashTag = daybookData.hashtags && hashtagIcon[daybookData.hashtags && daybookData.hashtags[0] as keyof typeof hashtagIcon];

  return (
    <Wrapper
      css={css`
        height: ${isDetail ? "560px" : "426px"};
        margin-top: ${isDetail ? "30px" : "0"};
        opacity: ${!isCurrent ? 0.5 : 1};

        ${daybookData.paperType === "모눈종이" ?
          css`
          background-image: url("/src/assets/images/card_background.png");
        ` : css`
        background-image: url("/src/assets/images/card_background_listnote.png");
        `}
      `}
    >
      <CardHeader>
        <HashTag />
        <span>{daybookData.hashtags[0]}</span>
        <div
          css={css`
            @media screen and(max-width: 480px) {
              /* margin-right: 32px; */
            }
          `}
        >
          <DownloadIconSVG />
          <MoreIconSVG />
        </div>
      </CardHeader>
      <CardMain>{daybookData.content}</CardMain>
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

  background-size: cover;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and(max-height: 480px) {
    height: 50vh;
    min-height: 350px;
  }
`;

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
    ${getFontStyle("header4")};
    color: ${colors.primaryDark};
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
  `;

const CardMain = styled(Textarea)`
  background: none;
  border: none;
  width: 100%;
  flex-grow: 1;
  min-height: 210px;
  height: max-content;
  `;

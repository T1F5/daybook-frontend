import styled from '@emotion/styled';
import { colors } from '@theme';
import getFontStyle from '@theme/font/getFontSize';
import DownloadIconSVG from '@assets/svg/ico_download.svg?react';
import MoreIconSVG from '@assets/svg/ico_more.svg?react';
import { css } from '@emotion/react';
import CardFooter from './CardFooter';

import Detail from './Detail';
import DetailFooter from './DetailCardFooter';
import Textarea from './Textarea';
import { GetDaybookResponse } from '@api/response';
import { getCurrentDate } from '@utils/getCurrentDate';
import Impacted from './Impacted';

interface Props {
  daybook: GetDaybookResponse;
  isHome?: boolean;
  isDetail?: boolean;
  isCurrent?: boolean;
}

const Card = ({
  daybook,
  isHome = false,
  isDetail = false,
  isCurrent = true,
}: Props) => {
  const { hearts, paperType, createdAt, content, hashtags } = daybook;

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      {!isHome && (
        <ExtraInfo>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              gap: 8px;
              ${getFontStyle('title2')}
            `}
          >
            {/* TODO: API 연결 */}
            <img
              src="/src/assets/images/image.png"
              width={48}
              height={48}
              alt="반응 이미지"
            />
            {getCurrentDate(createdAt)}
          </div>
          <div
            css={css`
              ${getFontStyle('header1')}
            `}
          >
            {hearts}개
          </div>
        </ExtraInfo>
      )}
      <Wrapper
        css={css`
          height: ${isDetail ? '560px' : '426px'};
          margin-top: ${isDetail ? '30px' : '0'};
          opacity: ${!isCurrent ? 0.5 : 1};

          background-image: ${paperType === '모눈종이'
            ? css`url('/src/assets/images/monun_background.png')`
            : css`url('/src/assets/images/linenote_background.png')`};
        `}
      >
        <CardHeader>
          <span>{hashtags[0]}</span>
          <div>
            <DownloadIconSVG />
            <MoreIconSVG />
          </div>
        </CardHeader>
        <CardMain readOnly value={content} />
        {isHome && <Detail />}
        {!isHome && !isDetail && <CardFooter />}
        {isDetail && <DetailFooter />}
      </Wrapper>
      <Impacted impactNum={hearts} />
    </div>
  );
};

export default Card;

const ExtraInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 24px;
`;

const Wrapper = styled.article`
  max-width: 362px;
  width: 90vw;
  height: 426px;

  background-size: cover;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-height: 480px) {
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
    ${getFontStyle('header4')};
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

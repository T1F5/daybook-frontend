import Header from "@components/Header";
import Button from "@components/common/Button";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import useStep, { STEP, StepContent, StepContentMap } from "@hooks/useStep";
import getFontStyle from "@theme/font/getFontSize";
import 쓰기 from "@pages/write/쓰기";
import 완료 from "@pages/write/완료";
import 탄생 from "@pages/write/탄생";
import 형태 from "@pages/write/형태";

const STEP_COMPONENTS = {
  [STEP.쓰기]: 쓰기,
  [STEP.완료]: 완료,
  [STEP.탄생]: 탄생,
  [STEP.형태]: 형태,
};

function Write() {
  const { step, nextStep, previousStep } = useStep();

  const { title, description, buttonText } = StepContentMap.get(
    step
  ) as StepContent;

  return (
    <>
      <Header title="일지 작성하기">
        {step !== "완료" && (
          <Header.Button variety="back" onClick={previousStep} />
        )}
      </Header>
      <Wrapper>
        <p
          css={css`
            ${getFontStyle("header1")}
          `}
        >
          {title}
        </p>
        <p
          css={css`
            ${getFontStyle("title4")}
            margin-top: 9px;
          `}
        >
          {description}
        </p>
        <>{STEP_COMPONENTS[step]}</>
      </Wrapper>
      <FloatingButtonWrapper>
        <Button onClick={nextStep}>{buttonText}</Button>
      </FloatingButtonWrapper>
    </>
  );
}

export default Write;

const Wrapper = styled.div`
  padding: 24px 20px;
`;

const FloatingButtonWrapper = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 8px 20px 16px;
  box-sizing: border-box;
`;

import { useState } from "react";

export const STEP = {
  쓰기: "쓰기",
  탄생: "탄생",
  형태: "형태",
  완료: "완료",
} as const;

type StepType = keyof typeof STEP;

export type StepContent = {
  title: string;
  description: string;
  buttonText: string;
  previousStep: StepType | null;
  nextStep: StepType | null;
};

export const StepContentMap = new Map<StepType, StepContent>([
  [
    STEP.쓰기,
    {
      title: "오늘 내 마음의 평화를 이룬\n이유를 기록해주세요",
      description: "Tip. 종이를 누르면 기록을 시작할 수 있어요",
      buttonText: "작성완료",
      previousStep: null,
      nextStep: STEP.탄생,
    },
  ],
  [
    STEP.탄생,
    {
      title: "오늘 내 마음의 평화는\n어떻게 탄생 했나요?",
      description: "작성한 평화의 형태를 선택해주세요",
      buttonText: "선택완료",
      previousStep: STEP.쓰기,
      nextStep: STEP.형태,
    },
  ],
  [
    STEP.형태,
    {
      title: "오늘 내 마음의 평화는\n어떤 형태였나요?",
      description: "작성한 평화의 형태를 선택해주세요",
      buttonText: "선택완료",
      previousStep: STEP.탄생,
      nextStep: STEP.완료,
    },
  ],
  [
    STEP.완료,
    {
      title: "축하합니다!\n첫 일지 기록을 완료하였습니다",
      description: "다른 사람의 일지도 둘러보세요",
      buttonText: "다른 사람 일지 보기",
      previousStep: null,
      nextStep: null,
    },
  ],
]);

const useStep = () => {
  const [step, setStep] = useState<StepType>(STEP.쓰기);

  const nextStep = () => {
    const nextStep = StepContentMap.get(step)?.nextStep;

    // 다음 스텝이 없으면, 완료 스탭
    if (!nextStep) {
      return;
    }

    setStep(nextStep);
  };

  const previousStep = () => {
    const previousStep = StepContentMap.get(step)?.previousStep;

    // 다음 스텝이 없으면, 쓰기 스탭
    if (!previousStep) {
      return;
    }

    setStep(previousStep);
  };

  return { step, nextStep, previousStep };
};

export default useStep;

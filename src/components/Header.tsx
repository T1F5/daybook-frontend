import styled from "@emotion/styled";
import ChevronLeftSVG from "@assets/svg/chevron_left.svg?react";
import HomeSVG from "@assets/svg/home.svg?react";
import getFontStyle from "@theme/font/getFontSize";
import { ComponentProps, PropsWithChildren, useCallback } from "react";

interface Props {
  title?: string;
}

function Header({ title, children }: PropsWithChildren<Props>) {
  return (
    <Wrapper>
      {!!title && <Title>{title}</Title>}
      {children}
    </Wrapper>
  );
}

function Button({
  variety,
  ...attributes
}: ComponentProps<"button"> & { variety: "back" | "home" }) {
  const renderSVG = useCallback(() => {
    if (variety === "back") return <ChevronLeftSVG />;
    if (variety === "home") return <HomeSVG />;
  }, [variety]);

  return <TouchableButton {...attributes}>{renderSVG()}</TouchableButton>;
}

export default Object.assign(Header, { Button });

const Title = styled.div`
  ${getFontStyle("header3")}
`;

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  z-index: 10;
  background-color: transparent;
`;

const TouchableButton = styled.button`
  all: unset;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  left: 8px;
`;

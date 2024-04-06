import styled from "@emotion/styled";
import BackButton from "@assets/svg/chevron_left.svg?react";

function Header() {
  return (
    <Wrapper>
      <BackButton />
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header``;

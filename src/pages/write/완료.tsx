import CompleteImage from '@assets/images/complete.png';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { daybookAtom } from '@state/daybook';
import { useAtom } from 'jotai';

function 완료() {
  const [daybook, setDaybook] = useAtom(daybookAtom);
  console.log(daybook);

  return (
    <Wrapper>
      <img
        src={CompleteImage}
        css={css`
          width: 100%;
        `}
      />
    </Wrapper>
  );
}

export default 완료;

const Wrapper = styled.div`
  margin-top: 56px;
`;

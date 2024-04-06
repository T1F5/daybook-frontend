import styled from '@emotion/styled'
import getFontStyle from '@theme/font/getFontSize'
import { ComponentProps } from 'react'

function Textarea({ ...attributes }: ComponentProps<'textarea'>) {
  return <Wrapper {...attributes} />
}

export default Textarea

const Wrapper = styled.textarea`
  width: 100%;
  aspect-ratio: 350/330;
  padding: 30px;
  resize: none;
  outline: 0 none;
  border: none;
  ${getFontStyle('body1')};
  /* 줄노트 경우, 따로 적용 */
  /* line-height: 30.24px; */
  /* padding-left: 40px; */
  /* background-image: url('/memo.png'); */
  background-image: url('/src/assets/images/monun.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
`

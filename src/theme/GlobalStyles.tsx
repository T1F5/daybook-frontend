import { Global } from "@emotion/react";
import emotionNormalize from "emotion-normalize";
import { css } from "@emotion/react";

function GlobalStyles() {
  const globalStyle = css`
    ${emotionNormalize};

    img {
      user-select: none;
      // https://caniuse.com/webkit-user-drag
      -webkit-user-drag: none;
    }

    html,
    body {
      width: 100%;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  return <Global styles={globalStyle} />;
}

export default GlobalStyles;

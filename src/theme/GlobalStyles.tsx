import { Global } from "@emotion/react";
import emotionNormalize from "emotion-normalize";
import { css } from "@emotion/react";
import { colors } from "./colors";

function GlobalStyles() {
  const globalStyle = css`
    @import url("https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap");

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
      font-family: "Nanum Myeongjo", serif;
      font-weight: 700;

      background-image: url("/src/assets/images/background.png");
      background-size: cover;

      overflow: hidden;
    }

    p {
      margin: 0;
    }

    [type='radio'] {
      accent-color: ${colors.primary};
    }
  `;

  return <Global styles={globalStyle} />;
}

export default GlobalStyles;

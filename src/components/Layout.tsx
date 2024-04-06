import { css } from "@emotion/react";
import { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {

  return (
    <div
      css={css`
        max-width: 768px;
        width: 100vw;
        border-left: 1px solid lightgray;
        border-right: 1px solid lightgray;
      `}
    >
      {children}
    </div>
  );
}

export default Layout;

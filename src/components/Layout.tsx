import client from "@api";
import { css } from "@emotion/react";
import { PropsWithChildren, useEffect } from "react";

function Layout({ children }: PropsWithChildren) {

  useEffect(() => {
    const id = client.interceptors.request.use((config) => {
      if (!config.headers) return config;

      let token: string | null = null;

      token = localStorage.getItem('accessToken');

      if (token !== null) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    return () => {
      client.interceptors.request.eject(id);
    }
  })

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

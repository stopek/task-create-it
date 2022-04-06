import { ReactNode, useEffect, useState } from "react";
import styled, { css } from "styled-components";

import { CircularProgress } from "@mui/material";

import Error from "ui/Error";

import { ILoadingState } from "store/reducers/types";

import { menuItems } from "routing/configs";

import Footer from "../Footer";
import Menu from "../Menu";

const Content = styled.div<{ center?: boolean }>`
  ${props => props.center ? css`
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
  ` : css`
    padding: 32px 0 75px 0;
    position: absolute;
    left: 85px;
    right: 20px;
    top: 55px;
  `}
`;

interface ILayout extends Partial<ILoadingState> {
  children: ReactNode;
  center?: boolean;
  header?: boolean;
  footer?: boolean;
}

const Layout = ({ children, center, header, footer, state }: ILayout) => {
  const [loading, setLoading] = useState<boolean>(true);

  const isLoading = state?.loading || false;

  // fake long api call
  useEffect(() => {
    setLoading(true);

    const time = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(time);
  }, [isLoading]);

  return (state?.error || state?.crash) ? (
    <Content center={true}>
      <Error />
    </Content>
  ) : (
    <>
      {header && !center && <Menu items={menuItems} />}

      {state?.loading || loading ? (
        <Content center={true}>
          <CircularProgress />
        </Content>
      ) : (
        <Content center={center}>
          {children}
        </Content>
      )}

      {footer && <Footer />}
    </>
  );
};

export default Layout;
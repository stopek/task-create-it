import { CircularProgress } from "@mui/material";
import { ReactNode } from "react";
import { menuItems } from "routing/configs";
import { ILoadingState } from "store/reducers/types";
import styled, { css } from "styled-components";

import Error from "ui/Error";

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
    padding: 32px 0;
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

const Layout = ({ children, center, header, footer, state }: ILayout) => (state?.error || state?.crash) ? (
  <Content center={true}>
    <Error />
  </Content>
) : (
  <>
    {header && !center && <Menu items={menuItems} />}

    {state?.loading ? (
      <Content center={true}>
        <CircularProgress />
      </Content>
    ) : (
      <Content center={center}>
        {children}
      </Content>
    )}

    {footer && !center && <Footer />}
  </>
);

export default Layout;
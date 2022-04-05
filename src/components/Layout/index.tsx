import { ReactNode } from "react";
import styled, { css } from "styled-components";

import Footer from "../Footer";
import Header from "../Header";

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

interface ILayout {
  children: ReactNode;
  center?: boolean;
  header?: boolean;
  footer?: boolean;
}

const Layout = ({ children, center, header, footer }: ILayout) => (
  <>
    {header && !center && <Header />}

    <Content center={center}>
      {children}
    </Content>

    {footer && !center && <Footer />}
  </>
);

export default Layout;
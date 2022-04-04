import { Container } from "@mui/material";
import { ReactNode } from "react";
import styled, { css } from "styled-components";

import Footer from "../Footer";
import Header from "../Header";

const Content = styled.div<{ center?: boolean }>`
  padding: 32px 0;

  ${props => props.center && css`
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
  `}
`;

interface ILayout {
  children: ReactNode;
  center?: boolean;
  header?: boolean;
  footer?: boolean;
}

const Layout = ({ children, center, header, footer }: ILayout) => (
  <Container>
    {header && <Header />}

    <Content center={center}>
      {children}
    </Content>

    {footer && <Footer />}
  </Container>
);

export default Layout;
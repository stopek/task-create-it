import { ReactNode } from "react";
import styled, { css } from "styled-components";

const Container = styled.div<{ center?: boolean }>`
  ${props => props.center && css`
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
  `}
`;

interface ILayout {
  children: ReactNode;
  center?: boolean;
}

const Layout = ({ children, center }: ILayout) => (
  <Container center={center}>
    {children}
  </Container>
);

export default Layout;
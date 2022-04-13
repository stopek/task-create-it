import { ReactNode, useEffect, useState } from "react";

import { CircularProgress, Container } from "@mui/material";
import { css, keyframes, styled } from "@mui/material/styles";
import { Box } from "@mui/system";

import Error from "ui/Error";

import { ILoadingState } from "store/reducers/types";

import { menuItems } from "routing/configs";

import Footer from "../Footer";
import Menu from "../Menu";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Content = styled(Box)<{ center?: boolean, loader?: boolean }>`
  padding: 70px 20px 35px 80px;

  ${props => props.center ? css`
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
  ` : css`
    left: 0;
    right: 0;
    top: 0;
    position: absolute;
  `}

  ${props => props.theme.breakpoints.down("sm")} {
    padding: 60px 10px 35px 60px;
  }

  ${props => !props.loader && css`
    animation: ${fadeIn} .5s;
  `}
`;

const Inside = styled(Container)`
  flex-grow: 1;
`;

export interface ILayout extends Partial<ILoadingState> {
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
    }, 700);

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
        <Content center={true} loader>
          <CircularProgress />
        </Content>
      ) : (
        <Content center={center}>
          {center ? <Inside maxWidth="xl">{children}</Inside> : children}
        </Content>
      )}

      {footer && <Footer />}
    </>
  );
};

export default Layout;
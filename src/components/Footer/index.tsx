import styled from "styled-components";

import { Paper, Typography } from "@mui/material";
import { styled as style } from "@mui/material/styles";

import Logo from "ui/Logo";

const FooterContainer = styled.footer`
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10;
`;

const FooterText = styled(Typography)`
  opacity: 0.3;
  padding-left: 45px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transform-origin: left center;

  &:hover {
    opacity: 1;
  }
`;

const Copyright = style("span")`
  ${props => props.theme.breakpoints.down("sm")} {
    transform: scale(0.8);
    transform-origin: right center;
  }
`;

const StyledPaper = styled(Paper)`
  padding: 5px;
`;

const Footer = () => (
  <FooterContainer>
    <StyledPaper elevation={0}>
      <FooterText variant="body2">
        <Copyright>Copyright © 2022,</Copyright>
        <Logo withoutMotto />
      </FooterText>
    </StyledPaper>
  </FooterContainer>
);

export default Footer;
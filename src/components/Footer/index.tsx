import styled from "styled-components";

import { Paper, Typography } from "@mui/material";

const FooterContainer = styled.footer`
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10;
`;

const FooterText = styled(Typography)`
  opacity: 0.3;

  &:hover {
    opacity: 1;
  }
`;

const StyledPaper = styled(Paper)`
  padding: 5px;
`;

const Footer = () => (
  <FooterContainer>
    <StyledPaper elevation={0}>
      <FooterText variant="body2">
        Copyright © 2022, PurPurPrime. Thanks to the Apple API
      </FooterText>
    </StyledPaper>
  </FooterContainer>
);

export default Footer;
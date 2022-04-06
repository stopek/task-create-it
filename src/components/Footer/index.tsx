import styled from "styled-components";

import { Paper, Typography } from "@mui/material";

const FooterContainer = styled.footer`
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 10;
`;

const StyledPaper = styled(Paper)`
  padding: 5px;
`;

const Footer = () => (
  <FooterContainer>
    <StyledPaper elevation={0}>
      <Typography variant="body2">
        Copyright © 2022, PurPurPrime. Thanks to the Apple API
      </Typography>
    </StyledPaper>
  </FooterContainer>
);

export default Footer;
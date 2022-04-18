import styled from "styled-components";

import { Box, BoxProps } from "@mui/system";

import HorizontalMenu from "ui/HorizontalMenu";
import Logo from "ui/Logo";
import Search from "ui/Search";
import Share from "ui/Share";

import { shareItems } from "routing/configs";
import { IMenuItem } from "routing/types";

interface IWelcome extends BoxProps {
  menuItems: IMenuItem[];
}

const ShareContainer = styled(Box)`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
`;

const LogoWrapper = styled(Box)`
  font-size: 3rem;
  text-align: center;
  transform-origin: bottom center;
`;

const Welcome = ({ menuItems, ...rest }: IWelcome) => (
  <Box {...rest} display="flex" flexDirection="column" gap={3} component="div">
    <LogoWrapper display="flex" flexDirection="column" alignItems="center" component="div">
      <Logo />
    </LogoWrapper>

    <Box component="div">
      <Search expanded />
    </Box>

    <HorizontalMenu menuItems={menuItems} />

    <ShareContainer component="div">
      <Share shareItems={shareItems} />
    </ShareContainer>
  </Box>
);

export default Welcome;
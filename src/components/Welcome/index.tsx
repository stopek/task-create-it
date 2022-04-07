import styled from "styled-components";

import { Box } from "@mui/material";
import { BoxProps } from "@mui/material/Box/Box";

import HorizontalIconsMenu from "ui/HorizontalIconsMenu";
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
`;

const Welcome = ({ menuItems, ...rest }: IWelcome) => (
  <Box display="flex" flexDirection="column" gap={3} {...rest}>
    <LogoWrapper display="flex" flexDirection="column" alignItems="center">
      <Logo />
    </LogoWrapper>

    <Box>
      <Search expanded />
    </Box>

    <HorizontalIconsMenu menuItems={menuItems} />

    <ShareContainer>
      <Share shareItems={shareItems} />
    </ShareContainer>
  </Box>
);

export default Welcome;
import styled from "styled-components";

import { Box, Typography } from "@mui/material";

import HorizontalIconsMenu from "ui/HorizontalIconsMenu";
import Share from "ui/Share";

import { shareItems } from "routing/configs";
import { IMenuItem } from "routing/types";

import Search from "../../ui/Search";

interface IWelcome {
  menuItems: IMenuItem[];
}

const ShareContainer = styled(Box)`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
`;

const Welcome = ({ menuItems }: IWelcome) => (
  <Box display="flex" flexDirection="column" gap={5}>
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box>
        <Typography variant="h1">
          PurPur
        </Typography>
      </Box>

      <Box>
        <Typography variant="subtitle1">
          .be PRIME like PurPurPrime
        </Typography>
      </Box>
    </Box>

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
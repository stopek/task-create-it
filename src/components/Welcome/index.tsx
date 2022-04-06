import styled from "styled-components";

import { Box, Typography } from "@mui/material";

import HorizontalIconsMenu from "ui/HorizontalIconsMenu";
import Search from "ui/Search";
import Share from "ui/Share";

import { shareItems } from "routing/configs";
import { IMenuItem } from "routing/types";

import "./styles.scss";

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
  <Box display="flex" flexDirection="column" gap={3}>
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box>
        <Typography variant="h3">
          PURPUR<span className="neon-text">PRIME</span>
        </Typography>
      </Box>

      <Box mt="-15px">
        <Typography variant="subtitle2">
          .be prime like PurPur PRIME
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
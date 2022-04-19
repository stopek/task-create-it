import { IconButton, List, ListItemIcon } from "@mui/material";
import { ListItemIconProps } from "@mui/material/ListItemIcon/ListItemIcon";

import Box from "override/mui/Box";

import { IMenuItem } from "routing/types";
import { ClearLink } from "styles/styled";

interface IHorizontalIconsMenu extends ListItemIconProps {
  menuItems: IMenuItem[];
}

const HorizontalIconsMenu = ({ menuItems, ...rest }: IHorizontalIconsMenu) => (
  <Box display="flex" gap={2} justifyContent="center">
    <List disablePadding>
      {menuItems.map((item, index) => (
        <ClearLink key={`menu-item-${index}`} to={item.path}>
          <ListItemIcon
            key={index}
            sx={{
              mr: "auto",
              justifyContent: "center",
            }}
            {...rest}
          >
            <IconButton
              size="large"
              color="inherit"
            >
              {item.icon}
            </IconButton>
          </ListItemIcon>
        </ClearLink>
      ))}
    </List>
  </Box>
);

export default HorizontalIconsMenu;
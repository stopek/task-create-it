import { Box, IconButton, List, ListItemIcon } from "@mui/material";
import { IMenuItem } from "routing/types";
import { ClearLink } from "styles/styled";

interface IHorizontalIconsMenu {
  menuItems: IMenuItem[];
}

const HorizontalIconsMenu = ({ menuItems }: IHorizontalIconsMenu) => (
  <Box display="flex" gap={2} justifyContent="center">
    <List>
      {menuItems.map((item, index) => (
        <ClearLink key={`menu-item-${index}`} to={item.path}>
          <ListItemIcon
            key={index}
            sx={{
              mr: "auto",
              justifyContent: "center",
            }}
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
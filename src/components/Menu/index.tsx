import { useState } from "react";
import styled from "styled-components";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBarProps } from "@mui/material/AppBar/AppBar";
import Divider from "@mui/material/Divider";
import { DrawerProps } from "@mui/material/Drawer/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

import FavouriteBadgeIcon from "ui/FavouriteBadgeIcon";
import Logo from "ui/Logo";
import Search from "ui/Search";

import { IMenuItem } from "routing/types";
import { ClearLink } from "styles/styled";

import { AppBar, Drawer, DrawerHeader } from "./styled";

interface IMenu {
  items: IMenuItem[];
  drawerProps?: DrawerProps;
  appBarProps?: AppBarProps;
}

const RightContent = styled.div`
  justify-content: flex-end;
  display: flex;
  flex: 1;
`;

const LogoWrapper = styled.div`
  font-size: 1.5rem;
`;

const Menu = ({ items, drawerProps, appBarProps }: IMenu) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <>
      <AppBar position="fixed" open={open} {...appBarProps}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 2,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <LogoWrapper>
            <Logo />
          </LogoWrapper>

          <RightContent>
            <Search />
            <FavouriteBadgeIcon />
          </RightContent>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open} {...drawerProps}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List>
          {items.map((item, index) => (
            <ClearLink key={`menu-item-${index}`} to={item.path}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ClearLink>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Menu;
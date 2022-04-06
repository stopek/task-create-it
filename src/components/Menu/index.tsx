import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import logo from "assets/logo.png";
import { useState } from "react";
import { paths } from "routing/paths";
import { IMenuItem } from "routing/types";
import styled from "styled-components";
import { ClearLink } from "styles/styled";

import FavouriteBadgeIcon from "ui/FavouriteBadgeIcon";

import Search from "../Search";
import { AppBar, Drawer, DrawerHeader } from "./styled";

interface IMenu {
  items: IMenuItem[];
}

const RightContent = styled.div`
  justify-content: flex-end;
  display: flex;
  flex: 1;
`;

const LogoLink = styled(ClearLink)`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Menu = ({ items }: IMenu) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <LogoLink to={paths.HOMEPAGE}>
            <img src={logo} alt="PurPurPrime - logo" />
          </LogoLink>

          <RightContent>
            <Search />
            <FavouriteBadgeIcon />
          </RightContent>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
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
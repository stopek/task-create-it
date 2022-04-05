import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IMenuItem } from "routing/types";
import styled from "styled-components";
import { ClearLink } from "styles/styled";

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

const Menu = ({ items }: IMenu) => {
  const match = useLocation();
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  console.log({
    match,
  });

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

          <Typography variant="h6" noWrap component="div">
            PurPur Prime
          </Typography>

          <RightContent>
            <Search />
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
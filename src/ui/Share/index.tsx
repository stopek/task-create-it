import { ReactElement } from "react";

import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { SvgIconTypeMap } from "@mui/material/SvgIcon/SvgIcon";

export interface IShareItem {
  url: string;
  icon: ReactElement<SvgIconTypeMap, any>;
}

interface IShare {
  shareItems: IShareItem[];
}

const Share = ({ shareItems }: IShare) => (
  <>
    {shareItems.map((item, index) => (
      <a key={`menu-item-${index}`} href={item.url} target="_blank" rel="nofollow noreferrer">
        <ListItemIcon
          key={index}
          sx={{
            minWidth: 0,
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
      </a>
    ))}
  </>
);

export default Share;
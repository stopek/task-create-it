import { ReactElement } from "react";

import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { ListItemIconProps } from "@mui/material/ListItemIcon/ListItemIcon";
import { SvgIconTypeMap } from "@mui/material/SvgIcon/SvgIcon";

export interface IShareItem {
  url: string;
  icon: ReactElement<SvgIconTypeMap, any>;
}

interface IShare extends ListItemIconProps {
  shareItems: IShareItem[];
}

const Share = ({ shareItems, ...rest }: IShare) => (
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
          {...rest}
        >
          <IconButton
            size="large"
            color="secondary"
          >
            {item.icon}
          </IconButton>
        </ListItemIcon>
      </a>
    ))}
  </>
);

export default Share;
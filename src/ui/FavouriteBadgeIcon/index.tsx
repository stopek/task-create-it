import FavoriteIcon from "@mui/icons-material/Favorite";
import { Badge } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { IconButtonProps } from "@mui/material/IconButton/IconButton";

import { getFavourites } from "store/selectors/favourite";

import { useAppSelector } from "hooks/redux";

import { paths } from "routing/paths";
import { ClearLink } from "styles/styled";

const FavouriteBadgeIcon = ({ ...props }: IconButtonProps) => {
  const ids = useAppSelector(getFavourites);

  return (
    <ClearLink to={paths.FAVOURITES}>
      <IconButton
        size="large"
        aria-label="search"
        color="inherit"
        {...props}
      >
        <Badge badgeContent={ids.length} color="primary">
          <FavoriteIcon />
        </Badge>
      </IconButton>
    </ClearLink>
  );
};

export default FavouriteBadgeIcon;
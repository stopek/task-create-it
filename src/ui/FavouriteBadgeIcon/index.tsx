import FavoriteIcon from "@mui/icons-material/Favorite";
import { Badge } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import { getFavourites } from "store/selectors/favourite";

import { paths } from "routing/paths";
import { ClearLink } from "styles/styled";

import { useAppSelector } from "hooks/redux";

const FavouriteBadgeIcon = () => {
  const ids = useAppSelector(getFavourites);

  return (
    <ClearLink to={paths.FAVOURITES}>
      <IconButton
        size="large"
        aria-label="search"
        color="inherit"
      >
        <Badge badgeContent={ids.length} color="primary">
          <FavoriteIcon />
        </Badge>
      </IconButton>
    </ClearLink>
  )
}

export default FavouriteBadgeIcon;
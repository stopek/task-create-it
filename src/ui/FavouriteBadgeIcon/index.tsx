import FavoriteIcon from "@mui/icons-material/Favorite";
import { Badge } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useAppSelector } from "hooks/redux";
import { paths } from "routing/paths";
import { getFavourites } from "store/selectors/favourite";
import { ClearLink } from "styles/styled";

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
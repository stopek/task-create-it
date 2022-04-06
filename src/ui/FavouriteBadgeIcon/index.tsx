import FavoriteIcon from "@mui/icons-material/Favorite";
import { Badge } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useAppSelector } from "hooks/redux";
import { getFavourites } from "store/selectors/favourite";

const FavouriteBadgeIcon = () => {
  const ids = useAppSelector(getFavourites);

  return (
    <IconButton
      size="large"
      aria-label="search"
      color="inherit"
    >
      <Badge badgeContent={ids.length} color="primary">
        <FavoriteIcon />
      </Badge>
    </IconButton>
  )
}

export default FavouriteBadgeIcon;
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { IMovie } from "types/apple";

interface IMovieCard {
  movie: IMovie;
}

const StyledCard = styled(Card)`
  &, button, .MuiCardContent-root {
    height: 100%;
  }
`;

const MovieCard = ({ movie }: IMovieCard) => (
  <StyledCard>
    <CardActionArea>
      <CardMedia
        component="img"
        height="340"
        image={movie["im:image"]?.[2]?.label}
        alt="green iguana"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie["im:name"].label}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </StyledCard>
);

export default MovieCard;
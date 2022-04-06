import styled from "styled-components";

import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import { CardProps } from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import FavouriteIcon from "ui/FavouriteIcon";

import { paths } from "routing/paths";
import fillRoute from "routing/utils";
import { ClearLink } from "styles/styled";
import { IMovie } from "types/apple";

interface IMovieCard extends CardProps {
  movie: IMovie;
}

const StyledCard = styled(Card)`
  position: relative;

  &, button, .MuiCardContent-root {
    height: 100%;
  }

  transition: .2s all ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const LikeContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  &:before {
    position: absolute;
    display: block;
    content: "";
    width: 100%;
    height: 150px;
    background: rgb(0, 0, 0);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
  }
`;

const MovieCard = ({ movie, ...rest }: IMovieCard) => (
  <StyledCard {...rest}>
    <LikeContent>
      <FavouriteIcon id={movie.id.attributes["im:id"]} />
    </LikeContent>

    <ClearLink to={fillRoute(paths.MOVIE, { id: movie.id.attributes["im:id"] })}>
      <CardActionArea>

        <CardMedia
          component="img"
          height="340"
          image={movie["im:image"]?.[2]?.label}
          alt={movie.title.label}
        />

        <CardContent>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {movie.category.attributes.term}
          </Typography>

          <Typography variant="h5" component="div">
            {movie["im:name"].label}
          </Typography>

          <Typography variant="caption" component="div">
            {movie["im:price"].label}
          </Typography>
        </CardContent>
      </CardActionArea>
    </ClearLink>
  </StyledCard>
);

export default MovieCard;
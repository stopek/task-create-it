import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { useAppDispatch } from "hooks/redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "routing/paths";
import { setSearchParam } from "store/reducers/search";
import styled from "styled-components";
import { ClearLink } from "styles/styled";
import { IMovie } from "types/apple";
import FavouriteIcon from "../FavouriteIcon";

import VideoPlayer from "../VideoPlayer";

interface IMoviePreview {
  movie: IMovie;
}

const TopContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: nowrap;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const RightContent = styled.div`
  display: flex;
  gap: 15px;
  margin-left: auto;
`;

const Price = styled.div`
  font-size: 30px;
  line-height: 1;
`;

const Rental = styled.div`
  font-size: 13px;
`;

const Rights = styled.div`
  font-size: 12px;
  opacity: 0.5;
`;

const Category = styled.div`
  font-size: 50%;
`;

const ImageContent = styled.div`
  display: flex;
  position: relative;

  &:hover > div {
    opacity: 1;
    margin-top: 0;
  }
`;

const Hover = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: 0.2s all ease-in-out;
`;

const PlayIcon = styled(PlayCircleRoundedIcon)`
  width: 100px;
  height: 100px;
`;

const StyledDialogContent = styled(DialogContent)`
  padding: 0;
`;

const CategoryName = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const MoviePreview = ({ movie }: IMoviePreview) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!movie) {
    return null;
  }

  const rentalPrice = movie["im:rentalPrice"]?.label;

  const handleCategoryClick = () => {
    dispatch<any>(setSearchParam({
      category: movie.category.attributes["im:id"]
    }));

    navigate(paths.MOVIES);
  }

  return (
    <>
      <Dialog fullWidth open={open} onClose={handleClose} maxWidth="lg">
        <DialogTitle>{movie["im:name"]?.label} - trailer</DialogTitle>

        <StyledDialogContent>
          <VideoPlayer filePath={movie.link?.[1]?.attributes?.href} />
        </StyledDialogContent>

        <DialogActions>
          <Button onClick={handleClose} variant="contained" size="large">Ok, nice trailer</Button>
        </DialogActions>
      </Dialog>

      <Container>
        <TopContainer>
          <Box display="flex" gap={2} alignItems="center">
            <Box>
              <ClearLink to={paths.MOVIES}>
                <IconButton
                  size="large"
                  aria-label="search"
                  color="inherit"
                  type="submit"
                >
                  <ChevronLeftRoundedIcon />
                </IconButton>
              </ClearLink>
            </Box>

            <Box>
              <Typography variant="h4">
                {movie.title.label}
                <Category>
                  {movie["im:contentType"].attributes.label},{" "}
                  <CategoryName onClick={handleCategoryClick}>{movie.category.attributes.label}</CategoryName>
                </Category>
              </Typography>
            </Box>
            <Box>
              <FavouriteIcon id={movie.id.attributes["im:id"]} />
            </Box>
          </Box>

          <RightContent>
            <Price>
              {movie["im:price"].label}

              {!!rentalPrice && (
                <Rental>
                  rental price: {movie["im:rentalPrice"]?.label}
                </Rental>
              )}
            </Price>
          </RightContent>
        </TopContainer>

        <Divider />

        <Grid container spacing={2}>
          <Grid item md={3} xs={12}>
            <ImageContent>
              <Hover onClick={handleOpen}>
                <PlayIcon />
              </Hover>

              <CardMedia
                component="img"
                image={movie["im:image"]?.[2]?.label}
                alt={movie.title.label}
              />
            </ImageContent>
          </Grid>

          <Grid item md={9} xs={12}>
            <Box display="flex" rowGap={2} flexDirection="column">
              <Typography variant="subtitle2">
                {movie.summary.label}
              </Typography>

              <Divider />

              <Rights>
                {movie.rights.label}
              </Rights>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MoviePreview;
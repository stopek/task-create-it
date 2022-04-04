import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const Content = styled(Box)`
  max-width: 500px;
  width: 100%;
`;

const NotFound = () => (
  <Content>
    <Typography variant="h1">UPS, 404</Typography>
    <Typography variant="subtitle1">PurPur couldn't find this page...</Typography>
  </Content>
);

export default NotFound;
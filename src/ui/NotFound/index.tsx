import { Button, Typography } from "@mui/material";
import { paths } from "routing/paths";
import styled from "styled-components";
import { ClearLink } from "styles/styled";

const Content = styled.div`
  max-width: 500px;
`;

const TextContent = styled.div`
  margin-bottom: 25px;
`;

interface INotFound {
  withoutBackButton?: boolean;
}

const NotFound = ({ withoutBackButton }: INotFound) => (
  <Content>
    <TextContent>
      <Typography variant="h1">OOPS,</Typography>
      <Typography variant="subtitle1">PurPur found nothing on this page...</Typography>
    </TextContent>

    {!withoutBackButton && (
      <ClearLink to={paths.HOMEPAGE}>
        <Button color="primary" variant="contained" size="large">
          Back to Home
        </Button>
      </ClearLink>
    )}
  </Content>
);

export default NotFound;
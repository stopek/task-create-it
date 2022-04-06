import styled from "styled-components";

import { Button, Typography } from "@mui/material";

const Content = styled.div`
  max-width: 500px;
`;

const TextContent = styled.div`
  margin-bottom: 25px;
`;

interface IError {
  code?: number;
  message?: string;
  description?: string;
  withoutReload?: boolean;
}

const Error = ({ code, message, withoutReload, description }: IError) => (
  <Content>
    <TextContent>
      <Typography variant="h1">UPS{code ? `, ${code}` : "..."}</Typography>
      <Typography variant="subtitle1">
        {message || "PurPur, we have some problems!"}
      </Typography>

      {!!description && (
        <Typography variant="body2">
          {description}
        </Typography>
      )}
    </TextContent>

    {!withoutReload && (
      <Button color="primary" variant="contained" size="large" onClick={() => document.location.reload()}>
        Try Reload Page
      </Button>
    )}
  </Content>
);

export default Error;
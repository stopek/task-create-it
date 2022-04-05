import { Box, Typography } from "@mui/material";

const Welcome = () => (
  <Box display="flex" flexDirection="column">
    <Box>
      <Typography variant="h1">
        Hi,
      </Typography>
    </Box>

    <Box>
      <Typography variant="subtitle1">
        Welcome back!
      </Typography>
    </Box>
  </Box>
);

export default Welcome;
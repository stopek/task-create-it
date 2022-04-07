import { Button } from "@mui/material";

import Error from "ui/Error";

import { paths } from "routing/paths";
import { ClearLink } from "styles/styled";

interface INotFound {
  withoutBackButton?: boolean;
}

const NotFound = ({ withoutBackButton }: INotFound) => (
  <Error
    code={404}
    message="PurPur cannot found nothing on this page"
    description="He's probably asleep at the moment..."
    withoutReload
  >
    {!withoutBackButton && (
      <ClearLink to={paths.HOMEPAGE}>
        <Button color="primary" variant="contained" size="large">
          Back to Home
        </Button>
      </ClearLink>
    )}
  </Error>
);

export default NotFound;
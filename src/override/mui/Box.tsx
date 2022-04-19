import { Box as MaterialBox, BoxProps } from "@mui/material";

const Box = ({ children, ...rest }: BoxProps) => (
  <MaterialBox {...rest} component="div">
    {children}
  </MaterialBox>
);

export default Box;
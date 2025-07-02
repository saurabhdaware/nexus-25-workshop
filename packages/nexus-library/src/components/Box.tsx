import { styled, BoxProps as StyledBoxProps } from "../../styled-system/jsx";

export const Box = ({
  children,
  as,
  ...props
}: StyledBoxProps & { as?: "button" | "div" }) => {
  const Element = styled(as ?? "div");
  return <Element {...props}>{children}</Element>;
};

// You can also use the cva (class variance authority) utility from Panda
// Example: import { cva } from "../../styled-system/css/cva";

import type { ReactNode } from "react";
import { css } from "../../styled-system/css";

interface BoxProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "surface" | "default";
}

export const Box = ({ children, className, variant = "default" }: BoxProps) => {
  const baseStyles = css({
    padding: "4",
    borderRadius: "md",
    border: "1px solid",
    borderColor: "gray.200",
  });

  const variantStyles = {
    primary: css({
      backgroundColor: "background.primary",
      color: "text-on-primary",
      borderColor: "primary",
    }),
    surface: css({
      backgroundColor: "background.surface.subtle",
      color: "text.gray.dark",
      borderColor: "gray.200",
    }),
    default: css({
      backgroundColor: "gray.100",
      color: "text.gray.dark",
    }),
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className || ""}`;

  return <div className={combinedClassName}>{children}</div>;
};

// You can also use the cva (class variance authority) utility from Panda
// Example: import { cva } from "../../styled-system/css/cva";

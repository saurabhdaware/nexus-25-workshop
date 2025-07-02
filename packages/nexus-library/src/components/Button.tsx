import { Box } from "./Box";

export const Button = ({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
}) => {
  const variantStyles = {
    primary: {
      backgroundColor: "background.primary",
      color: "text-on-primary",
    },
    secondary: {
      backgroundColor: "background.surface.subtle",
      color: "text.gray.dark",
    },
    tertiary: {
      backgroundColor: "background.surface.subtle",
      color: "text.gray.dark",
    },
  };

  return (
    <Box as="button" {...variantStyles[variant]}>
      {children}
    </Box>
  );
};

const Text = ({
  children,
  as = "p",
}: {
  children: React.ReactNode;
  as?: "p" | "span";
}) => {
  const Element = as;

  return <Element>{children}</Element>;
};

export { Text };

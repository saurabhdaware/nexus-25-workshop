import { jsx } from "react/jsx-runtime";

const Text = () => {
  return jsx("p", { children: "Hello there from component" });
};

export { Text };

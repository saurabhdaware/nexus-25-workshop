import { Box, Button } from "nexus-library";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <Box marginTop="spacing.5" marginLeft="spacing.5">
      <Button onClick={() => setCount(count + 1)}>Count: {count}</Button>
    </Box>
  );
}

export default App;

import { Box, Button } from "nexus-library";

function App() {
  return (
    <Box
      backgroundColor="surface.background.gray.subtle"
      color="surface.text.gray.normal"
    >
      <Button onClick={() => console.log("clicked")}>Hello React Nexus</Button>
      <p>Hi there!!!</p>
    </Box>
  );
}

export default App;

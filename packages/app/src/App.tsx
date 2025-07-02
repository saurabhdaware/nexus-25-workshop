import { Button } from "nexus-library";

function App() {
  return (
    <div className="light">
      <Button variant="primary">Hello</Button>
      <input
        type="color"
        onChange={(e) => {
          console.log(e.currentTarget.value);
          document.documentElement.style.setProperty(
            "--colors-azure-700",
            e.currentTarget.value
          );
        }}
      />
    </div>
  );
}

export default App;

## Button

A Button is a clickable element used to trigger actions or events. Use it for form submissions, dialogs, or any interactive UI element requiring user input.

## Imports

```ts
import { Button } from "nexus-library";
```

### Types

Supported props for the Button component:

```ts
/**
 * Props for the Button component
 */
interface ButtonProps {
  /** Content inside the button */
  children: React.ReactNode;
  /** Function to call on click */
  onClick: () => void;
}
```

### Examples

```tsx
<Button onClick={() => alert('Clicked!')}>Click Me</Button>

<Button onClick={handleSave}>Save</Button>

<Button onClick={() => console.log('Submitted')}>Submit</Button>
```

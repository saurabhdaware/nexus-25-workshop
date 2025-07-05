## Box

Box is a flexible container component for layout and spacing. Use it to wrap content and control background, color, margin, and padding via props.

## Imports

```ts
import { Box } from "nexus-library";
```

### Types

Supported props for the Box component:

```ts
/**
 * Props for the Box component
 */
type BoxProps = {
  /** Content inside the box */
  children: React.ReactNode;
  /** Background color from theme */
  backgroundColor?: ThemeDottedStrings<"colors">;
  /** Text color from theme */
  color?: ThemeDottedStrings<"colors">;
  /** Margin and padding props (theme spacing keys) */
  marginTop?: SpacingType;
  marginBottom?: SpacingType;
  marginLeft?: SpacingType;
  marginRight?: SpacingType;
  paddingTop?: SpacingType;
  paddingBottom?: SpacingType;
  paddingLeft?: SpacingType;
  paddingRight?: SpacingType;
};
```

### Examples

```tsx
<Box>Default Box</Box>

<Box backgroundColor="surface.background.primary.intense" color="surface.text.onPrimary.onIntense">
  Primary Box
</Box>

<Box marginTop="spacing.4" paddingLeft="spacing.6">Box with custom spacing</Box>
```

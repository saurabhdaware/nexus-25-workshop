import styled from "styled-components";
import { ThemeDottedStrings } from "../tokens/theme";

// Utility to get value from object using dotted string path, generic for type safety
function getIn<T = unknown>(obj: object, path?: string): T | undefined {
  if (!path) return undefined;
  return path.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj) as T | undefined;
}

type StyledBoxProps = {
  $backgroundColor?: ThemeDottedStrings<"colors">;
  $color?: ThemeDottedStrings<"colors">;
  $marginTop?: SpacingType;
  $marginBottom?: SpacingType;
  $marginLeft?: SpacingType;
  $marginRight?: SpacingType;
  $paddingTop?: SpacingType;
  $paddingBottom?: SpacingType;
  $paddingLeft?: SpacingType;
  $paddingRight?: SpacingType;
};

const StyledBox = styled.div<StyledBoxProps>(
  ({
    theme,
    $backgroundColor,
    $color,
    $marginTop,
    $marginBottom,
    $marginLeft,
    $marginRight,
    $paddingTop,
    $paddingBottom,
    $paddingLeft,
    $paddingRight,
  }) => ({
    backgroundColor: $backgroundColor
      ? getIn(theme.colors, $backgroundColor)
      : undefined,
    color: $color ? getIn(theme.colors, $color) : undefined,
    marginTop: $marginTop ? getIn(theme.spacing, $marginTop) : undefined,
    marginBottom: $marginBottom
      ? getIn(theme.spacing, $marginBottom)
      : undefined,
    marginLeft: $marginLeft ? getIn(theme.spacing, $marginLeft) : undefined,
    marginRight: $marginRight ? getIn(theme.spacing, $marginRight) : undefined,
    paddingTop: $paddingTop ? getIn(theme.spacing, $paddingTop) : undefined,
    paddingBottom: $paddingBottom
      ? getIn(theme.spacing, $paddingBottom)
      : undefined,
    paddingLeft: $paddingLeft ? getIn(theme.spacing, $paddingLeft) : undefined,
    paddingRight: $paddingRight
      ? getIn(theme.spacing, $paddingRight)
      : undefined,
    border: "none",
    padding: "16px",
    borderRadius: "4px",
  })
);

type SpacingType = `spacing.${ThemeDottedStrings<"spacing">}`;

type BoxProps = {
  children: React.ReactNode;
  backgroundColor?: ThemeDottedStrings<"colors">;
  color?: ThemeDottedStrings<"colors">;
  marginTop?: SpacingType;
  marginBottom?: SpacingType;
  marginLeft?: SpacingType;
  marginRight?: SpacingType;
  paddingTop?: SpacingType;
  paddingBottom?: SpacingType;
  paddingLeft?: SpacingType;
  paddingRight?: SpacingType;
};
const DEFAULT_BG: ThemeDottedStrings<"colors"> =
  "surface.background.gray.subtle";
const DEFAULT_COLOR: ThemeDottedStrings<"colors"> = "surface.text.gray.normal";

const Box = ({
  children,
  backgroundColor = DEFAULT_BG,
  color = DEFAULT_COLOR,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}: BoxProps) => {
  return (
    <StyledBox
      $backgroundColor={backgroundColor}
      $color={color}
      $marginTop={marginTop}
      $marginBottom={marginBottom}
      $marginLeft={marginLeft}
      $marginRight={marginRight}
      $paddingTop={paddingTop}
      $paddingBottom={paddingBottom}
      $paddingLeft={paddingLeft}
      $paddingRight={paddingRight}
    >
      {children}
    </StyledBox>
  );
};

export { Box };

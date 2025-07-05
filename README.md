# "Design Systems for Scale" Workshop at React Nexus 2025

## Branch Overview

This repo is divided into multiple branches to explain the steps of building a design system.

### `main` branch

first branch that has boilerplate with pnpm workspace setup with `app` directory for the demo app and an empty `nexus-library` directory where we will build the design system.

### `step-1` branch

Shows basic library setup with js file and installation of `nexus-library`

<details>
  <summary>This branch will be skipped in workshop. I'll be showing the demo of this directly. If you want to follow along the same steps later, these are the steps you can follow</summary>

**Steps to follow**:

1. Create package.json with following content:

```json
{
  "name": "nexus-library",
  "version": "0.0.0",
  "type": "module",
  "exports": {
    ".": "./index.js"
  }
}
```

2. Create `index.js` file

```js
const add = (a, b) => a + b;

export { add };
```

3. Run the following command from repository's root

```sh
pnpm install nexus-library --filter=app --workspace
```

</details>

### `step-2` branch: Vite Bundling

- Bundling the library using Vite

### `step-3` branch: Styled Components Setup

- styled-components setup
- Create theme provider
- Create `theme.ts` with empty theme

### `step-4` branch: Tokens and Components Architecture

- Add theme colors and spacings to tokens
- Add `Box` and `Button` component that use this theme

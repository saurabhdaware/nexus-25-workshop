# "Design System for Scale" by Saurabh Daware at React Nexus 2025

## Prompt 1

````md
Create a new Vite React TypeScript project and convert it into a component library with the following requirements:

## Setup Monorepo with PNPM Workspaces

- Create `packages` directory with `app` directory and `nexus-library` directory.
- `app` directory should be a demo app that uses the `nexus-library`
- Create pnpm workspace with `app` and `nexus-library` packages

## Setting Up the `app` package

- Scaffold a new Vite React TypeScript project
- Remove unnecessary `.css` files and their instances in `App.tsx` and `main.tsx`
- cd to root
- Move typescript config, eslint config, etc to root directory and include `packages` directory in `include` array
- Run `pnpm install`

## Setting Up the `nexus-library` package

- Just add `index.ts` file with the following content:

```tsx
export const add = (a: number, b: number) => a + b;
```

## Instructions

- No need to install `nexus-library` in `app` package yet. We will do that later.
- Do not do anything beyond the above instructions
````

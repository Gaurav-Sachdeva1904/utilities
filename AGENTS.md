# AGENTS.md

Guidance for openCode and other coding agents working in this repository.

## Repository Snapshot

This is a Yarn v1 workspace monorepo for shared Node/TypeScript utilities.

- `packages/ui`: React 19 component library built with Vite, Sass, Radix UI, lucide icons, and Storybook.
- `packages/server`: reusable backend helpers for auth, errors, logging, async helpers, constants, and shared interfaces.
- `packages/configs`: shared TypeScript, ESLint, Prettier, and lint configuration files.
- `packages/shell`: small shell/script utilities used by other packages.

The repo is intentionally library-oriented. Prefer small, reusable exports over app-specific behavior.

## Commands

Run commands from the repository root unless a package-specific command is needed.

```bash
yarn install
yarn build
yarn lint
yarn lint:fix
yarn storybook:start
yarn storybook:build
```

Useful package commands:

```bash
yarn workspace @utilities/ui build
yarn workspace @utilities/ui lint
yarn workspace @utilities/ui storybook:start
yarn workspace @utilities/server build
yarn workspace @utilities/server lint
```

There is no obvious test runner configured yet. For now, validate changes with the relevant build, lint, and Storybook coverage.

## Package Responsibilities

### `@utilities/ui`

This package exports the public design-system surface from `packages/ui/src/index.ts`.

When adding or changing components:

- Keep each component in `packages/ui/src/components/<kebab-case-name>/`.
- Use local `index.ts` or `index.tsx` files to define the folder export.
- Export public components and types from `packages/ui/src/index.ts`.
- Add or update a Storybook story when behavior, props, variants, or visuals change.
- Keep styles next to components as SCSS files and import them from the component file.
- Prefer existing tokens and mixins from `src/styles`, `src/constants`, and shared CSS variables.
- Use path aliases already configured in `packages/ui/tsconfig.json`, such as `@components/*`, `@hooks/*`, `@styles/*`, and `@utils/*`.
- Preserve accessibility props and keyboard behavior, especially for Radix-backed components.

Existing UI patterns:

- Components are generally default-exported from their implementation file.
- Props types are exported explicitly, usually as `<Component>Props`.
- Component class names use stable, BEM-like strings and modifier classes.
- Sizes use the shared `Size` type and values like `XS`, `S`, `M`, `L`, and `XL`.
- Radix UI primitives are used where suitable for accessible behavior.
- Icons come through `@components/icon` and lucide/Radix icon dependencies.

### `@utilities/server`

This package exports backend utility namespaces from `packages/server/src/index.ts`.

When changing server utilities:

- Keep modules small and export from the nearest `index.ts`.
- Preserve ESM-compatible TypeScript.
- Avoid app-specific assumptions; this package should remain reusable.
- Treat auth helpers carefully: production requires explicit JWT secrets, while development falls back to local defaults.
- Prefer typed error classes from `src/error` over unstructured thrown objects.

The package builds with `tsup` and currently publishes subpath exports for `logger`, `error`, and `auth`.

### `@utilities/configs`

This package contains shared configuration. Changes here can affect all packages, so validate broadly with `yarn lint` and `yarn build`.

### `@utilities/shell`

This package is minimal and script-focused. Keep shell helpers portable and document any environment assumptions near the script.

## Coding Standards

- Use TypeScript with strict settings. Do not introduce `any` unless the lint/config policy changes.
- Use ESM imports and exports.
- Use 4-space indentation, single quotes, semicolons, trailing commas, and 100-character line width.
- Keep file names camelCase for TS/JS files and package folders kebab-case.
- Do not use relative import patterns that violate the configured restricted-import rule when an alias exists.
- Keep public APIs stable. If you rename or remove exports, update all consumers and package export metadata.
- Avoid broad refactors when making targeted fixes.

## Generated And Build Output

- `dist` output is intentionally used by this repo because it contains package bundles and `.d.ts` declaration files for isolated package consumption.
- Keep generated `dist` files in sync when a package's public source, exports, or types change.
- Do not hand-edit generated output. Change `src` and rebuild instead.
- The UI build generates theme colors before Vite builds. Keep `generate:theme-colors` in mind when changing theme files.

## Verification Checklist

Before handing work back:

1. Run the narrowest relevant lint/build command for touched packages.
2. For UI component changes, run Storybook or at least update the relevant story.
3. For config changes, run root `yarn lint` and `yarn build` when practical.
4. Check `git status --short` and make sure only intended files changed.

## Current Repo Notes

- The README is very brief, so package manifests and source layout are the main source of truth.
- The root package is private and uses Yarn workspaces with Turbo.
- `@utilities/ui` appears intended as the primary published surface.
- `@utilities/server` is private but still has structured package exports, suggesting it is consumed within this workspace or related projects.
- There is currently no configured automated test suite; adding one would be valuable before larger behavior changes.

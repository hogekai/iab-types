# CLAUDE.md

## Project Overview

A monorepo of TypeScript type definition packages for IAB Tech Lab specifications.

- `iab-adcom` — AdCOM v1.0 (Advertising Common Object Model)
- `iab-openrtb` — OpenRTB v2.5 / v2.6 / v3.0
- `iab-native` — Native Ads v1.2

## Repository Structure

```
packages/
  types-iab-adcom/     # AdCOM types + enums (runtime values)
  types-iab-openrtb/   # OpenRTB types (depends on iab-adcom)
  types-iab-native/    # Native Ad types
specs/                 # IAB spec documents (for cross-checking)
tests/                 # vitest type tests
```

## Commands

```bash
pnpm build        # Build all packages
pnpm typecheck    # TypeScript type check
pnpm lint         # Biome lint
pnpm lint:fix     # Biome lint + auto-fix
pnpm format       # Biome format
pnpm test         # Run vitest type tests (typecheck enabled; fails on expectTypeOf mismatches)
```

## Build

- **iab-adcom**: `tsup && tsc --emitDeclarationOnly` (tsc is needed because tsup's dts doesn't support the namespace `export import` pattern)
- **iab-openrtb / iab-native**: `tsup` (`dts: true`)
- Shared compiler settings live in `tsconfig.base.json`

## Key Patterns

- Enums are `as const` objects plus a type export of the same name (gives both runtime values and literal types)
- AdCOM is organized into namespaces (`AdCOM.Media`, `AdCOM.Context`, `AdCOM.Placement`)
- OpenRTB has per-version entry points (`iab-openrtb/v25`, `/v26`, `/v30`)
- Every interface has `ext?: Record<string, unknown>` (the IAB extension convention)

## Versioning

- Managed with changesets (`npx changeset` → `npx changeset version`)
- Write changesets, CHANGELOG entries and commit messages in English (the CHANGELOG becomes the npm / GitHub Release notes as is)
- Release: `/prep-release` creates the version commit and `<package>@<version>` tags → `git push --follow-tags`
  - Pushing a tag runs `.github/workflows/release.yml`, which publishes to npm (with provenance) and creates the GitHub Release
  - Tags always include the package name (`iab-openrtb@2.2.0`). Never create bare tags like `1.0.0`
- Breaking changes (renamed fields, changed types) are a major bump
- Adding fields only is a minor bump

## Type Accuracy

- Type definitions follow the spec documents in `specs/`
- Check changes against the relevant spec
- Deprecated fields may be omitted even if they are still in the spec (an intentional design decision)

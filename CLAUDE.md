# CLAUDE.md

## Project Overview

IAB Tech Lab の仕様に対する TypeScript 型定義パッケージのモノレポ。

- `iab-adcom` — AdCOM v1.0 (Advertising Common Object Model)
- `iab-openrtb` — OpenRTB v2.5 / v2.6 / v3.0
- `iab-native` — Native Ads v1.2

## Repository Structure

```
packages/
  types-iab-adcom/     # AdCOM 型定義 + enum（ランタイム値）
  types-iab-openrtb/   # OpenRTB 型定義（iab-adcom に依存）
  types-iab-native/    # Native Ad 型定義
specs/                 # IAB 仕様書（照合用）
tests/                 # vitest 型テスト
```

## Commands

```bash
pnpm build        # 全パッケージビルド
pnpm typecheck    # TypeScript 型チェック
pnpm lint         # Biome lint
pnpm lint:fix     # Biome lint + auto-fix
pnpm format       # Biome format
pnpm test         # vitest 型テスト実行
```

## Build

- **iab-adcom**: `tsup && tsc --emitDeclarationOnly`（namespace の `export import` パターンを tsup の dts が未対応のため tsc 併用）
- **iab-openrtb / iab-native**: `tsup`（`dts: true`）
- 共通設定は `tsconfig.base.json` に集約

## Key Patterns

- enum は `as const` オブジェクト + 同名の type export（ランタイム値とリテラル型を両立）
- AdCOM は namespace (`AdCOM.Media`, `AdCOM.Context`, `AdCOM.Placement`) で構造化
- OpenRTB はバージョン別エントリ (`iab-openrtb/v25`, `/v26`, `/v30`)
- すべてのインターフェースに `ext?: Record<string, unknown>` を持つ（IAB 仕様の拡張規約）

## Versioning

- changesets で管理（`npx changeset` → `npx changeset version`）
- 破壊的変更（フィールド名変更、型変更）は major bump
- フィールド追加のみは minor bump

## Type Accuracy

- 型定義は `specs/` 内の仕様書に準拠
- 変更時は該当スペックと照合すること
- deprecated フィールドはスペックに存在しても省略可（意図的な設計判断）

# iab-openrtb

## 2.0.0

### Major Changes

- 27255c2: ### iab-adcom

  #### Bug Fixes

  - `DeliveryMethod` に `as const` が抜けていたのを修正（型推論が `number` になっていた）
  - `Display.api` を `APIFramework` → `APIFramework[]` に修正（配列であるべき）
  - `Display.ctype` を `number` → `DisplayCreativeSubtype` に修正

  #### Spec Reconciliation (AdCOM v1.0)

  - `Content` に `genres`, `gtax` フィールド追加
  - `Data` に `cids` フィールド追加
  - `ExtendedIdentifier` に `inserter`, `matcher`, `mm` フィールド追加
  - `Regs` に `gpp`, `gpp_sid` フィールド追加
  - `Restrictions` に `acat` フィールド追加
  - `VideoPlacement` / `AudioPlacement` の `rqddur` → `rqddurs` に修正
  - `CategoryTaxonomy` に値 9 (Content Taxonomy 3.1) 追加
  - `IPLocationService` に値 511, 512 (51Degrees) 追加
  - `PodDeduplicationSetting` に値 5 (No deduplication) 追加

  ### iab-openrtb

  #### Bug Fixes

  - v2.5 `Bid.qagmediarating` を `ImageSmoothingQuality` → `MediaRating` に修正

  #### Spec Reconciliation (OpenRTB v2.6)

  - `Imp.qty` を `Record<string, unknown>` → `Qty` に修正
  - `Imp.refresh` を `Record<string, unknown>` → `Refresh` に修正
  - `Site.content` / `App.content` を `Record<string, unknown>` → `Content` に修正
  - `Video.durfloors` / `Audio.durfloors` / `Deal.durfloors` を `DurFloors[]` に修正
  - `Content` に `genres`, `gtax` フィールド追加
  - `Data` に `cids` フィールド追加
  - `BrandVersion.version` を `string` → `string[]` に修正

  #### Spec Reconciliation (OpenRTB v3.0)

  - `Openrtb.request` / `response` を optional に修正（条件付き必須）

  ### iab-native

  #### Bug Fixes

  - package.json の description typo 修正 ("fro" → "for")
  - package.json の repository.directory パス修正

### Patch Changes

- Updated dependencies [27255c2]
  - iab-adcom@2.0.0

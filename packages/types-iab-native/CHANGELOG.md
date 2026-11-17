# iab-native

## 1.0.1

### Patch Changes

- 27255c2: ### iab-adcom

  #### Bug Fixes

  - Add the missing `as const` to `DeliveryMethod` (its values were inferred as `number`)
  - Change `Display.api` from `APIFramework` to `APIFramework[]` (it is an array)
  - Change `Display.ctype` from `number` to `DisplayCreativeSubtype`

  #### Spec Reconciliation (AdCOM v1.0)

  - Add `genres` and `gtax` to `Content`
  - Add `cids` to `Data`
  - Add `inserter`, `matcher` and `mm` to `ExtendedIdentifier`
  - Add `gpp` and `gpp_sid` to `Regs`
  - Add `acat` to `Restrictions`
  - Rename `rqddur` to `rqddurs` in `VideoPlacement` / `AudioPlacement`
  - Add value 9 (Content Taxonomy 3.1) to `CategoryTaxonomy`
  - Add values 511 and 512 (51Degrees) to `IPLocationService`
  - Add value 5 (No deduplication) to `PodDeduplicationSetting`

  ### iab-openrtb

  #### Bug Fixes

  - Change v2.5 `Bid.qagmediarating` from `ImageSmoothingQuality` to `MediaRating`

  #### Spec Reconciliation (OpenRTB v2.6)

  - Change `Imp.qty` from `Record<string, unknown>` to `Qty`
  - Change `Imp.refresh` from `Record<string, unknown>` to `Refresh`
  - Change `Site.content` / `App.content` from `Record<string, unknown>` to `Content`
  - Change `Video.durfloors` / `Audio.durfloors` / `Deal.durfloors` to `DurFloors[]`
  - Add `genres` and `gtax` to `Content`
  - Add `cids` to `Data`
  - Change `BrandVersion.version` from `string` to `string[]`

  #### Spec Reconciliation (OpenRTB v3.0)

  - Make `Openrtb.request` / `response` optional (they are conditionally required)

  ### iab-native

  #### Bug Fixes

  - Fix a typo in the package.json description ("fro" → "for")
  - Fix the `repository.directory` path in package.json

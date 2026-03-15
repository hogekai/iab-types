# iab-types

TypeScript type definitions for IAB Tech Lab specifications.

## Packages

| Package | Version | Description |
|---------|---------|-------------|
| [iab-adcom](./packages/types-iab-adcom/) | [![npm](https://img.shields.io/npm/v/iab-adcom)](https://www.npmjs.com/package/iab-adcom) | AdCOM v1.0 (Advertising Common Object Model) |
| [iab-openrtb](./packages/types-iab-openrtb/) | [![npm](https://img.shields.io/npm/v/iab-openrtb)](https://www.npmjs.com/package/iab-openrtb) | OpenRTB v2.5 / v2.6 / v3.0 |
| [iab-native](./packages/types-iab-native/) | [![npm](https://img.shields.io/npm/v/iab-native)](https://www.npmjs.com/package/iab-native) | Native Ads v1.2 |

## Installation

```bash
npm install iab-adcom iab-openrtb iab-native
```

## Quick Start

```typescript
// AdCOM
import { AdCOM } from "iab-adcom";
import type { Site } from "iab-adcom/context";
import { APIFramework } from "iab-adcom/enum";

// OpenRTB v2.6
import type { BidRequest, BidResponse } from "iab-openrtb/v26";

// OpenRTB v3.0
import type { Openrtb } from "iab-openrtb/v30";

// Native Ads v1.2
import type { NativeRequest, NativeResponse } from "iab-native";
```

## Supported Specifications

| Spec | Version | Source |
|------|---------|--------|
| AdCOM | 1.0 | [IAB Tech Lab](https://github.com/InteractiveAdvertisingBureau/AdCOM/blob/main/AdCOM%20v1.0%20FINAL.md) |
| OpenRTB | 2.5 / 2.6 / 3.0 | [IAB Tech Lab](https://iabtechlab.com/standards/openrtb/) |
| Native Ads | 1.2 | [IAB Tech Lab](https://www.iab.com/wp-content/uploads/2018/03/OpenRTB-Native-Ads-Specification-Final-1.2.pdf) |

## Development

```bash
pnpm install
pnpm build
pnpm test
pnpm lint
```

## License

MIT

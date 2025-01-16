# iab-openrtb

TypeScript type definitions for IAB Tech Lab's OpenRTB (Open Real-Time Bidding) specification

## Overview

This package provides TypeScript type definitions based on the OpenRTB specification, which is a standard protocol for programmatic advertising transactions.

## Installation

```bash
npm install iab-openrtb
```

This package depends on [iab-adcom](https://github.com/hogekai/types-iab-adcom#readme), so it's recommended to install it as well:

```bash
npm install iab-adcom
```

## Usage

```typescript
// OpenRTB v2.5
import { BidRequest, BidResponse } from "iab-openrtb/v25";
// OpenRTB v2.6
import { BidRequest, BidResponse } from "iab-openrtb/v26";
// OpenRTB v3.0
import { Request, Response } from "iab-openrtb/v30";
```

Using enums:

```typescript
// OpenRTB v2.5
import { NoBidReasonCode, LossReasonCode } from "iab-openrtb/v25";
// OpenRTB v2.6
import { NoBidReasonCode, LossReasonCode } from "iab-openrtb/v26";
// OpenRTB v3.0
import { NoBidReasonCode, LossReasonCode } from "iab-openrtb/v30";
```

Note: Currently only NoBidReasonCode and LossReasonCode enums are supported. Other enums are defined in the iab-adcom package.

## Structure

The package consists of the following modules:

- `iab-openrtb/v25`: Type definitions for OpenRTB 2.5
- `iab-openrtb/v26`: Type definitions for OpenRTB 2.6
- `iab-openrtb/v30`: Type definitions for OpenRTB 3.0

## Requirements

- TypeScript 4.0 or higher
- Node.js 14.0.0 or higher

## License

MIT

## Related Links

- [OpenRTB Specification](https://iabtechlab.com/standards/openrtb/)
- [IAB Tech Lab](https://iabtechlab.com/)

## Contributing

Issues and Pull Requests are welcome at our [GitHub repository](https://github.com/hogekai/types-iab-openrtb).

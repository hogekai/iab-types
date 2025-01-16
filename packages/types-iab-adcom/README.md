# iab-adcom

TypeScript type definitions for IAB Tech Lab's AdCOM (Advertising Common Object Model).

## Overview

This package provides TypeScript type definitions based on the [AdCOM v1.0 specification](https://github.com/InteractiveAdvertisingBureau/AdCOM/blob/main/AdCOM%20v1.0%20FINAL.md). AdCOM is a common object model for programmatic advertising transactions.

## Installation

```bash
npm install iab-adcom
```

## Usage

```typescript
import { AdCOM } from 'iab-adcom';
// or
import { DisplayPlacement } from 'iab-adcom/placement';
import { Site } from 'iab-adcom/context';

// AdCOM.Placement.DisplayPlacement
// AdCOM.Media.Ad
// AdCOM.Context.Site
```

enum:
```typescript
import { AudioVideoCreativeSubtype } from 'iab-adcom';
// or
import { VideoPlacementType } from 'iab-adcom/enum';
```

## Structure

The package consists of the following modules:

- `iab-adcom`: Root module
- `iab-adcom/media`: Definitions for ad creatives and metadata
- `iab-adcom/context`: Definitions for user, device, and delivery context
- `iab-adcom/placement`: Definitions for ad placements
- `iab-adcom/enum`: Enumeration definitions

## Requirements

- TypeScript 4.0 or higher
- Node.js 14.0.0 or higher

## License

MIT

## Related Links

- [AdCOM Specification](https://github.com/InteractiveAdvertisingBureau/AdCOM/blob/main/AdCOM%20v1.0%20FINAL.md)
- [IAB Tech Lab](https://iabtechlab.com/)

## Contributing

Issues and pull requests are welcome at the [GitHub repository](https://github.com/hogekai/types-iab-adcom).
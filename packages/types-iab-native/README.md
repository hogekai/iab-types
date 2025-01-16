# types-iab-native

TypeScript type definitions for IAB Tech Lab`s Native Ad

## Overview

This package provides TypeScript type definitions based on the [Native v1.2](https://www.iab.com/wp-content/uploads/2018/03/OpenRTB-Native-Ads-Specification-Final-1.2.pdf) specification.

## Installation

You can install the library using npm:

```bash
npm install iab-native
```

Or using pnpm:

```bash
pnpm add iab-native
```

## Usage

To use the type definitions in your TypeScript project, import them as follows:

```typescript
import {
  ContextSubType,
  ContextType,
  NativeRequest,
  NativeResponse,
  PlacementType,
} from "iab-native";

const nativeRequest: NativeRequest = {
  ver: "1.2",
  context: ContextType.Content,
  contextsubtype: ContextSubType.Article,
  plcmttype: PlacementType.FeedContent,
  plcmtcnt: 1,
  seq: 0,
  assets: [
    {
      id: 1,
      required: 1,
      title: {
        len: 90,
      },
    },
  ],
};

const nativeResponse: NativeResponse = {
  link: {
    url: "https://www.example.com",
  },
  assets: [
    {
      id: 1,
      required: 1,
      title: {
        text: "Sample Title",
      },
    },
  ],
};
```

It is also possible to explicitly specify a native version.

```typescript
import { NativeRequest, NativeResponse } from "iab-native/v12";
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes. Make sure to follow the code style and include tests for any new features or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

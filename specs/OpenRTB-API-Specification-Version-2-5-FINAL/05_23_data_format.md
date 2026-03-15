## 2.3 Data Format

JSON (JavaScript Object Notation) is the suggested format for bid request and bid response data payloads. JSON was chosen for its combination of human readability and compactness. The data payloads are described in Section 3 and Section 4.

Optionally, an exchange may also offer binary representations (e.g., compressed JSON, ProtoBuf, Avro, etc.), which can be more efficient in terms of transmission time and bandwidth. The IAB Tech Lab may offer reference implementations for these or other formats. When available, the use of these IAB reference implementations is highly recommended to reduce exchange-specific variations.

The bid request specifies the representation as a mime type using the Content-Type HTTP header. The mime type for the standard JSON representation is "application/json" as shown. The format of the bid response must be the same as the bid request.

```
Content-Type: application/json
```

If alternative binary representations are used, the exchange or SSP should specify the Content-Type appropriately. For example: "Content-Type: avro/binary" or "Content-Type: application/x-protobuf". If the content-type is missing, the bidder should assume the type is application/json, unless a different default has been selected by an exchange.

As a convention, the absence of an attribute has a formal meaning. In most cases, this indicates that the value is unknown, unless otherwise specified.
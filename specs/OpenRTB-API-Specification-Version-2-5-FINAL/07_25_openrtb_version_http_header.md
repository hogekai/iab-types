The input is already clean and complete. Here is the output as-is:

## 2.5 OpenRTB Version HTTP Header

The OpenRTB Version should be passed in the header of a bid request with a custom header parameter. This will allow bidders to recognize the version of the message contained before attempting to parse the request.

Additionally, it is recommended albeit optional that bidders place an identically formatted message in the HTTP header of the response with the protocol version the bidder has implemented. The message may contain a different version number than the request header.

```
x-openrtb-version: 2.5
```

This version should be specified as \<major\>.\<minor\> (e.g., 2.5). First or second level increments on the version are changes to the protocol. In general, second-level changes should be backwards compatible; whereas first level changes need not be backwards compatible. Any third level revisions (such as 2.5.1) should not change the protocol itself, only descriptions and notes that don't affect the protocol content. Third level versions should not be included in this header since they should have no technical impact.
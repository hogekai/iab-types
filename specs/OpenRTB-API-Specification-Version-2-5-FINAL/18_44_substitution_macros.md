## 4.4 Substitution Macros

The win notice and billing notice URLs and their format are defined by the bidder. In order for the exchange to convey certain information to the bidder (e.g., the clearing price), a number of substitution macros can be inserted into these URLs. Prior to calling a win or billing notice URL, the exchange will search the specified URL for any of the defined macros and replace them with the appropriate data. Note that the substitution is simple in the sense that wherever a legal macro is found, it will be replaced without regard for syntax correctness. Furthermore, if the source value is an optional parameter that was not specified, the macro will simply be removed (i.e., replaced with a zero-length string).

These same substitution macros can also be placed in the ad markup. The exchange will perform the same data substitutions as in the aforementioned notice URLs. This occurs irrespective of whether the markup is returned on the win notice or passed in the `bid.adm` attribute of the bid response. A use case for macros in the ad markup might be when a bidder prefers to receive its win notification from the device itself. To accomplish this, the bidder would include a tracking pixel in the ad markup, the URL for which would include any of the available macros.

| Macro | Description |
|---|---|
| `${AUCTION_ID}` | ID of the bid request; from `BidRequest.id` attribute. |
| `${AUCTION_BID_ID}` | ID of the bid; from `BidResponse.bidid` attribute. |
| `${AUCTION_IMP_ID}` | ID of the impression just won; from `imp.id` attribute. |
| `${AUCTION_SEAT_ID}` | ID of the bidder seat for whom the bid was made. |
| `${AUCTION_AD_ID}` | ID of the ad markup the bidder wishes to serve; from `bid.adid` attribute. |
| `${AUCTION_PRICE}` | Clearing price using the same currency and units as the bid. |
| `${AUCTION_CURRENCY}` | The currency used in the bid (explicit or implied), for confirmation only. |
| `${AUCTION_MBR}` | Market Bid Ratio defined as: clearance price / bid price. |
| `${AUCTION_LOSS}` | Loss reason codes. Refer to List 5.25. |

Note that OpenRTB compliance exchanges must support all macros for which data is available and support substitution in both markup and URLs for win and billing notification.

> **BEST PRACTICE:** When rendering markup for test or ad quality purposes, some macro values (e.g., clearing price) may not be known. In these cases, substitute "AUDIT" as the macro value.

Prior to substitution, macro data values can be encoded for security purposes using various obfuscation or encryption algorithms. This may be of particular interest for use cases such as the foregoing where price information is carried beyond the exchange, through the publisher, and into the device browser via a tracking pixel in the markup.

To specify that a particular macro is to be encoded, the suffix `:X` should be appended to the macro name, where X is a string that indicates the algorithm to be used. Algorithms choices are not defined by this specification and must be mutually agreed upon between exchange and bidder. As an example, suppose that the price macro is to be encoded using Base64 and that its code is "b64". The macro would then be written as follows:

```
${AUCTION_PRICE:B64}
```

> **BEST PRACTICE:** Encoding of macro data should be used sparingly due to the additional processing overhead. For communications strictly between exchange and bidder (e.g., a win notice called from the exchange), encoding is generally considered unnecessary.
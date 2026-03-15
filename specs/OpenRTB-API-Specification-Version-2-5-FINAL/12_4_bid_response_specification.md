# 4. Bid Response Specification

RTB responses contain bids that reference specific impressions within a bid request. Bids are in essence an offer to buy. The bid response consists of the top-level bid response object and optional objects that depict the specific bids. An empty HTTP response constitutes a no-bid and is in fact the most bandwidth friendly form of this signal although returning a response with a "no-bid reason" is encouraged. A malformed response or a response that contains no actual bids will also be interpreted as no-bid.

## 4.1 Object Model

Following is the object model for the bid response. The top-level object (i.e., in JSON the unnamed outer object) is denoted as `BidResponse` in the model. A bid response may contain bids from multiple "seats" (i.e., the buying entity upstream from the actual bidder). In fact a response may contain multiple bids from the same seat; typically but not necessarily from different campaigns. This can improve the seat's chances of winning since most exchanges enforce various block lists on behalf of their publishers.

[Figure: A diagram showing the Bid Response object model. BidResponse has a "0..*" relationship labeled "Response to this Request" to BidRequest. BidResponse has a "0..*" relationship to SeatBid. SeatBid has a "0..*" relationship labeled "Bid for this Impression" to Bid. Bid has a "0..1" relationship to Imp. Bid has a "0..*" relationship labeled "Bid under the terms of this Deal" to Imp. Imp has a "0..1" relationship to Pmp. Pmp has a "0..*" relationship to Deal.]

**Figure 4: Bid Response object model.**

Referring to the figure, the actual response objects are shown on the left, specifically the `BidResponse` top level object the seat specific `SeatBid` collections of `Bid` objects. The other objects shown are those objects from the bid request to which response objects related. Specifically, `BidResponse` includes the `BidRequest` ID for positive tracking purposes, and since a request can include multiple impressions `Bid` includes the ID of the `Imp` for which the bid is an offer to purchase. If a bid is made under the terms of a private marketplace deal, the `Bid` also includes the ID of the specific `Deal` object.

Not shown in the model figure is an extensions object. This is an object of undefined structure that can be added to any other object to convey bidder-specific extensions to the standard. Bidders using these objects are responsible for publishing their extensions to their exchanges.

The following table summarizes the objects in the Bid Response model and serves as an index into the detailed definitions in the subsections that follow.

| **Object** | **Section** | **Description** |
|---|---|---|
| `BidResponse` | 4.2.1 | Top-level object. |
| `SeatBid` | 4.2.2 | Collection of bids made by the bidder on behalf of a specific seat. |
| `Bid` | 4.2.3 | An offer to buy a specific impression under certain business terms. |

## 4.2 Object Specifications

The subsections that follow define each of the objects in the bid response model. Several conventions are used throughout:

- Attributes are "required" if their omission would technically break the protocol.
- Some optional attributes are denoted "recommended" due to their elevated business importance.
- Unless a default value is explicitly specified, an omitted attribute is interpreted as "unknown".

### 4.2.1 Object: BidResponse

This object is the top-level bid response object (i.e., the unnamed outer JSON object). The `id` attribute is a reflection of the bid request ID for logging purposes. Similarly, `bidid` is an optional response tracking ID for bidders. If specified, it can be included in the subsequent win notice call if the bidder wins. At least one `seatbid` object is required, which contains at least one bid for an impression. Other attributes are optional.

To express a "no-bid", the options are to return an empty response with HTTP 204. Alternately if the bidder wishes to convey to the exchange a reason for not bidding, just a `BidResponse` object is returned with a reason code in the `nbr` attribute.

| **Attribute** | **Type** | **Description** |
|---|---|---|
| `id` | string; required | ID of the bid request to which this is a response. |
| `seatbid` | object array | Array of seatbid objects; 1+ required if a bid is to be made. |
| `bidid` | string | Bidder generated response ID to assist with logging/tracking. |
| `cur` | string; default "USD" | Bid currency using ISO-4217 alpha codes. |
| `customdata` | string | Optional feature to allow a bidder to set data in the exchange's cookie. The string must be in base85 cookie safe characters and be in any format. Proper JSON encoding must be used to include "escaped" quotation marks. |
| `nbr` | integer | Reason for not bidding. Refer to List 5.24. |
| `ext` | object | Placeholder for bidder-specific extensions to OpenRTB. |
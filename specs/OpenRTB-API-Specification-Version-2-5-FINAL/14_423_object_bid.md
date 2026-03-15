## 4.2.3 Object: Bid

A `SeatBid` object contains one or more Bid objects, each of which relates to a specific impression in the bid request via the `impid` attribute and constitutes an offer to buy that impression for a given `price`.

| Attribute | Type | Description |
|-----------|------|-------------|
| `id` | string; required | Bidder generated bid ID to assist with logging/tracking. |
| `impid` | string; required | ID of the `Imp` object in the related bid request. |
| `price` | float; required | Bid price expressed as CPM although the actual transaction is for a unit impression only. Note that while the type indicates float, integer math is highly recommended when handling currencies (e.g., BigDecimal in Java). |
| `nurl` | string | Win notice URL called by the exchange if the bid wins (not necessarily indicative of a delivered, viewed, or billable ad); optional means of serving ad markup. Substitution macros (Section 4.4) may be included in both the URL and optionally returned markup. |
| `burl` | string | Billing notice URL called by the exchange when a winning bid becomes billable based on exchange-specific business policy (e.g., typically delivered, viewed, etc.). Substitution macros (Section 4.4) may be included. |
| `lurl` | string | Loss notice URL called by the exchange when a bid is known to have been lost. Substitution macros (Section 4.4) may be included. Exchange-specific policy may preclude support for loss notices or the disclosure of winning clearing prices resulting in ${AUCTION_PRICE} macros being removed (i.e., replaced with a zero-length string). |
| `adm` | string | Optional means of conveying ad markup in case the bid wins; supersedes the win notice if markup is included in both. Substitution macros (Section 4.4) may be included. |
| `adid` | string | ID of a preloaded ad to be served if the bid wins. |
| `adomain` | string array | Advertiser domain for block list checking (e.g., "ford.com"). This can be an array of for the case of rotating creatives. Exchanges can mandate that only one domain is allowed. |
| `bundle` | string | A platform-specific application identifier intended to be unique to the app and independent of the exchange. On Android, this should be a bundle or package name (e.g., com.foo.mygame). On iOS, it is a numeric ID. |
| `iurl` | string | URL without cache-busting to an image that is representative of the content of the campaign for ad quality/safety checking. |
| `cid` | string | Campaign ID to assist with ad quality checking; the collection of creatives for which `iurl` should be representative. |
| `crid` | string | Creative ID to assist with ad quality checking. |
| `tactic` | string | Tactic ID to enable buyers to label bids for reporting to the exchange the tactic through which their bid was submitted. The specific usage and meaning of the tactic ID should be communicated between buyer and exchanges a priori. |
| `cat` | string array | IAB content categories of the creative. Refer to List 5.1. |
| `attr` | integer array | Set of attributes describing the creative. Refer to List 5.3. |
| `api` | integer | API required by the markup if applicable. Refer to List 5.6. |
| `protocol` | integer | Video response protocol of the markup if applicable. Refer to List 5.8. |
| `qagmediarating` | integer | Creative media rating per IQG guidelines. Refer to List 5.19. |
| `language` | string | Language of the creative using ISO-639-1-alpha-2. The non-standard code "xx" may also be used if the creative has no linguistic content (e.g., a banner with just a company logo). |
| `dealid` | string | Reference to the `deal.id` from the bid request if this bid pertains to a private marketplace direct deal. |
| `w` | integer | Width of the creative in device independent pixels (DIPS). |
| `h` | integer | Height of the creative in device independent pixels (DIPS). |
| `wratio` | integer | Relative width of the creative when expressing size as a ratio. Required for Flex Ads. |
| `hratio` | integer | Relative height of the creative when expressing size as a ratio. Required for Flex Ads. |
| `exp` | integer | Advisory as to the number of seconds the bidder is willing to wait between the auction and the actual impression. |
| `ext` | object | Placeholder for bidder-specific extensions to OpenRTB. |

For each bid, the `nurl` attribute contains the win notice URL. If the bidder wins the impression, the exchange calls this notice URL to inform the bidder of the win and to convey certain information using substitution macros (see Section 4.4) such as the clearing price. The win notice return or the `adm` attribute can be used to serve markup (see Section 4.3). In either case, the exchange will also apply the aforementioned substitution to any macros found in the markup.

**BEST PRACTICE:** The essential function of the win notice is to inform a bidder that they won an auction. It does not necessarily imply ad delivery, creative viewability, or billability. Exchanges are highly encouraged to publish to their bidders their event triggers, billing policies, and any other meaning they attach to the win notice. Also, please refer to Section 7.2 for additional guidance on expirations.

**BEST PRACTICE:** Firing of the billing notice should be server-side and as "close" as possible to where the exchange books revenue in order to minimize discrepancies between exchange and bidder.

**BEST PRACTICE:** For VAST Video, the IAB prescribes that the VAST impression event is the official signal that the impression is billable. If the `burl` attribute is specified, it too should be fired at the same time if the exchange is adhering to this policy. However, subtle technical issues may lead to additional discrepancies and bidders are cautioned to avoid this scenario.

Several other attributes are used for ad quality checks or enforcing publisher restrictions. These include the advertiser domain via `adomain`, a non-cache-busted URL to an image representative of the content of the campaign via `iurl`, an ID of the campaign and of the creative within the campaign via `cid` and `crid` respectively, an array of creative attribute via `attr`, and the dimensions via `w` and `h`. If the bid pertains to a private marketplace deal, the `dealid` attribute is used to reference that agreement from the bid request.
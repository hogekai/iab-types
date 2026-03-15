## 3. Bid Request Specification

RTB transactions are initiated when an exchange or other supply source sends a bid request to a bidder. The bid request consists of the top-level bid request object, at least one impression object, and may optionally include additional objects providing impression context.

### 3.1 Object Model

Following is the object model for the bid request. The top-level object (i.e., in JSON the unnamed outer object) is denoted as `BidRequest` in the model. Of its direct subordinates, only `Imp` is technically required since it is fundamental to describing the impression being sold and its requires at least one of `Banner` (which may allow multiple formats), `Video`, `Audio`, and `Native` to define the type of impression (i.e., whichever one or more the publisher is willing to accept; although a bid will be for exactly one of those specified). An impression can optionally be subject to a private marketplace.

[Figure: A UML-style object model diagram showing the Bid Request object hierarchy. At the top is "BidRequest" which connects to: "Publisher" (0..1), "Content" (0..1), "Producer" (0..1), "Site" (0..1), "DistributionChannel" (abstract), "App" (0..1), "Imp" (1..*), "Native" (0..1), "Video" (0..1), "Pmp" (0..1), "Companion" (container), "Audio" (0..1), "Banner" (0..*), "Device" (0..1), "Format" (0..*), "Source" (0..1), "Regs" (0..1), "Data" (0..*), "User" (0..1), "Geo" (0..*), "Segment" (0..*), "Deal" (0..*), "Metric" (0..*). DistributionChannel is an abstraction of Site and App. Multiplicity annotations are shown on each relationship.]

Other subordinates to the `BidRequest` provide various forms of information to assist bidders in making targeting and pricing decisions. This includes details about the user, the device they're using, the location of either, regulatory constraints, and the content and media in which the impression will occur.

On the latter, there is the distinction between site (i.e., website) and application (i.e., non-browser app typically in mobile). The abstract class called `DistributionChannel` is just a modeling concept to indicate that a `BidRequest` is related to either a `Site` or an `App`, but not both (i.e., a distribution channel is an abstraction of site and app). Both sites and apps can be further described by data about their publisher, the content, and the content's producer.

Not shown in the model figure is an extensions object. This is an object of undefined structure that can be added to any other object to convey exchange-specific extensions to the standard. Exchanges using these objects are responsible for publishing their extensions to their bidders.

The following table summarizes the objects in the Bid Request model and serves as an index into the detailed definitions in the subsections that follow.

| Object | Section | Description |
|---|---|---|
| `BidRequest` | 3.2.1 | Top-level object. |
| `Source` | 3.2.2 | Request source details on post-auction decisioning (e.g., header bidding). |
| `Regs` | 3.2.3 | Regulatory conditions in effect for all impressions in this bid request. |
| `Imp` | 3.2.4 | Container for the description of a specific impression; at least 1 per request. |
| `Metric` | 3.2.5 | A quantifiable often historical data point about an impression. |
| `Banner` | 3.2.6 | Details for a banner impression (incl. in-banner video) or video companion ad. |
| `Video` | 3.2.7 | Details for a video impression. |
| `Audio` | 3.2.8 | Container for an audio impression. |
| `Native` | 3.2.9 | Container for a native impression conforming to the Dynamic Native Ads API. |
| `Format` | 3.2.10 | An allowed size of a banner. |
| `Pmp` | 3.2.11 | Collection of private marketplace (PMP) deals applicable to this impression. |
| `Deal` | 3.2.12 | Deal terms pertaining to this impression between a seller and buyer. |
| `Site` | 3.2.13 | Details of the website calling for the impression. |
| `App` | 3.2.14 | Details of the application calling for the impression. |
| `Publisher` | 3.2.15 | Entity that controls the content of and distributes the site or app. |
| `Content` | 3.2.16 | Details about the published content itself, within which the ad will be shown. |
| `Producer` | 3.2.17 | Producer of the content; not necessarily the publisher (e.g., syndication). |
| `Device` | 3.2.18 | Details of the device on which the content and impressions are displayed. |
| `Geo` | 3.2.19 | Location of the device or user's home base depending on the parent object. |
| `User` | 3.2.20 | Human user of the device; audience for advertising. |
| `Data` | 3.2.21 | Collection of additional user targeting data from a specific data source. |
| `Segment` | 3.2.22 | Specific data point about a user from a specific data source. |

### 3.2 Object Specifications

The subsections that follow define each of the objects in the bid request model. Several conventions are used throughout:

- Attributes are "required" if their omission would technically break the protocol.
- Some optional attributes are denoted "recommended" due to their elevated business importance.
- Unless a default value is explicitly specified, an omitted attribute is interpreted as "unknown".

#### 3.2.1 Object: BidRequest

The top-level bid request object contains a globally unique bid request or auction ID. This `id` attribute is required as is at least one impression object (Section 3.2.4). Other attributes in this top-level object establish rules and restrictions that apply to all impressions being offered.

There are also several subordinate objects that provide detailed data to potential buyers. Among these are the `Site` and `App` objects, which describe the type of published media in which the impression(s) appear. These objects are highly recommended, but only one applies to a given bid request depending on whether the media is browser-based web content or a non-browser application, respectively.

| Attribute | Type | Description |
|---|---|---|
| `id` | string; required | Unique ID of the bid request, provided by the exchange. |
| `imp` | object array; required | Array of `Imp` objects (Section 3.2.4) representing the impressions offered. At least 1 `Imp` object is required. |
| `site` | object; recommended | Details via a `Site` object (Section 3.2.13) about the publisher's website. Only applicable and recommended for websites. |
| `app` | object; recommended | Details via an `App` object (Section 3.2.14) about the publisher's app (i.e., non-browser applications). Only applicable and recommended for apps. |
| `device` | object; recommended | Details via a `Device` object (Section 3.2.18) about the user's device to which the impression will be delivered. |
| `user` | object; recommended | Details via a `User` object (Section 3.2.20) about the human user of the device; the advertising audience. |
| `test` | integer; default 0 | Indicator of test mode in which auctions are not billable, where 0 = live mode, 1 = test mode. |
| `at` | integer; default 2 | Auction type, where 1 = First Price, 2 = Second Price Plus. Exchange-specific auction types can be defined using values greater than 500. |
| `tmax` | integer | Maximum time in milliseconds the exchange allows for bids to be received including Internet latency to avoid timeout. This value supersedes any *a priori* guidance from the exchange. |
| `wseat` | string array | White list of buyer seats (e.g., advertisers, agencies) allowed to bid on this impression. IDs of seats and knowledge of the buyer's customers to which they refer must be coordinated between bidders and the exchange *a priori*. At most, only one of `wseat` and `bseat` should be used in the same request. Omission of both implies no seat restrictions. |
| `bseat` | string array | Block list of buyer seats (e.g., advertisers, agencies) restricted from bidding on this impression. IDs of seats and knowledge of the buyer's customers to which they refer must be coordinated between bidders and the exchange a priori. At most, only one of `wseat` and `bseat` should be used in the same request. Omission of both implies no seat restrictions. |
| `allimps` | integer; default 0 | Flag to indicate if Exchange can verify that the impressions offered represent all of the impressions available in context (e.g., all on the web page, all video spots such as pre/mid/post roll) to support road-blocking. 0 = no or unknown, 1 = yes, the impressions offered represent all that are available. |
| `cur` | string array | Array of allowed currencies for bids on this bid request using ISO-4217 alpha codes. Recommended only if the exchange accepts multiple currencies. |
| `wlang` | string array | White list of languages for creatives using ISO-639-1-alpha-2. Omission implies no specific restrictions, but buyers would be advised to consider language attribute in the `Device` and/or `Content` objects if available. |
| `bcat` | string array | Blocked advertiser categories using the IAB content categories. Refer to List 5.1. |
| `badv` | string array | Block list of advertisers by their domains (e.g., "ford.com"). |
| `bapp` | string array | Block list of applications by their platform-specific exchange-independent application identifiers. On Android, these should be bundle or package names (e.g., com.foo.mygame). On iOS, these are numeric IDs. |
| `source` | object | A Sorce object (Section 3.2.2) that provides data about the inventory source and which entity makes the final decision. |
| `regs` | object | A Regs object (Section 3.2.3) that specifies any industry, legal, or governmental regulations in force for this request. |
| `ext` | object | Placeholder for exchange-specific extensions to OpenRTB. |

#### 3.2.2 Object: Source

This object describes the nature and behavior of the entity that is the source of the bid request upstream from the exchange. The primary purpose of this object is to define post-auction or upstream decisioning when the exchange itself does not control the final decision. A common example of this is header bidding, but it can also apply to upstream server entities such as another RTB exchange, a mediation platform, or an ad server combines direct campaigns with 3rd party demand in decisioning.

| Attribute | Type | Description |
|---|---|---|
| `fd` | integer; recommended | Entity responsible for the final impression sale decision, where 0 = exchange, 1 = upstream source. |
| `tid` | string; recommended | Transaction ID that must be common across all participants in this bid request (e.g., potentially multiple exchanges). |
| `pchain` | string; recommended | Payment ID chain string containing embedded syntax described in the TAG Payment ID Protocol v1.0. |
| `ext` | object | Placeholder for exchange-specific extensions to OpenRTB. |

#### 3.2.3 Object: Regs

This object contains any legal, governmental, or industry regulations that apply to the request. The `coppa` flag signals whether or not the request falls under the United States Federal Trade Commission's regulations for the United States Children's Online Privacy Protection Act ("COPPA").

| Attribute | Type | Description |
|---|---|---|
| `coppa` | integer | Flag indicating if this request is subject to the COPPA regulations established by the USA FTC, where 0 = no, 1 = yes. Refer to Section 7.5 for more information. |
| `ext` | object | Placeholder for exchange-specific extensions to OpenRTB. |

#### 3.2.4 Object: Imp

This object describes an ad placement or impression being auctioned. A single bid request can include multiple `Imp` objects, a use case for which might be an exchange that supports selling all ad positions on a given page. Each `Imp` object has a required ID so that bids can reference them individually.

The presence of `Banner` (Section 3.2.6), `Video` (Section 3.2.7), and/or `Native` (Section 3.2.9) objects subordinate to the `Imp` object indicates the type of impression being offered. The publisher can choose one such type which is the typical case or mix them at their discretion. However, any given bid for the impression must conform to one of the offered types.

| Attribute | Type | Description |
|---|---|---|
| `id` | string; required | A unique identifier for this impression within the context of the bid request (typically, starts with 1 and increments). |
| `metric` | object array | An array of `Metric` object (Section 3.2.5). |
| `banner` | object | A `Banner` object (Section 3.2.6); required if this impression is offered as a banner ad opportunity. |
| `video` | object | A `Video` object (Section 3.2.7); required if this impression is offered as a video ad opportunity. |
| `audio` | object | An `Audio` object (Section 3.2.8); required if this impression is offered as an audio ad opportunity. |
| `native` | object | A `Native` object (Section 3.2.9); required if this impression is offered as a native ad opportunity. |
| `pmp` | object | A `Pmp` object (Section 3.2.11) containing any private marketplace deals in effect for this impression. |
| `displaymanager` | string | Name of ad mediation partner, SDK technology, or player responsible for rendering ad (typically video or mobile). Used by some ad servers to customize ad code by partner. Recommended for video and/or apps. |
| `displaymanagerver` | string | Version of ad mediation partner, SDK technology, or player responsible for rendering ad (typically video or mobile). Used by some ad servers to customize ad code by partner. Recommended for video and/or apps. |
| `instl` | integer; default 0 | 1 = the ad is interstitial or full screen, 0 = not interstitial. |
| `tagid` | string | Identifier for specific ad placement or ad tag that was used to initiate the auction. This can be useful for debugging of any issues, or for optimization by the buyer. |
| `bidfloor` | float; default 0 | Minimum bid for this impression expressed in CPM. |
| `bidfloorcur` | string; default "USD" | Currency specified using ISO-4217 alpha codes. This may be different from bid currency returned by bidder if this is allowed by the exchange. |
| `clickbrowser` | integer | Indicates the type of browser opened upon clicking the creative in an app, where 0 = embedded, 1 = native. Note that the Safari View Controller in iOS 9.x devices is considered a native browser for purposes of this attribute. |
| `secure` | integer | Flag to indicate if the impression requires secure HTTPS URL creative assets and markup, where 0 = non-secure, 1 = secure. If omitted, the secure state is unknown, but non-secure HTTP support can be assumed. |
| `iframebuster` | string array | Array of exchange-specific names of supported iframe busters. |
| `exp` | integer | Advisory as to the number of seconds that may elapse between the auction and the actual impression. |
| `ext` | object | Placeholder for exchange-specific extensions to OpenRTB. |

#### 3.2.5 Object: Metric

This object is associated with an impression as an array of metrics. These metrics can offer insight into the impression to assist with decisioning such as average recent viewability, click-through rate, etc. Each metric is identified by its type, reports the value of the metric, and optionally identifies the source or vendor measuring the value.

| Attribute | Type | Description |
|---|---|---|
| `type` | string; required | Type of metric being presented using exchange curated string names which should be published to bidders a priori. |
| `value` | float; required | Number representing the value of the metric. Probabilities must be in the range 0.0 – 1.0. |
| `vendor` | string; recommended | Source of the value using exchange curated string names which should be published to bidders a priori. If the exchange itself is the source versus a third party, "EXCHANGE" is recommended. |
| `ext` | object | Placeholder for exchange-specific extensions to OpenRTB. |

#### 3.2.6 Object: Banner

This object represents the most general type of impression. Although the term "banner" may have very specific meaning in other contexts, here it can be many things including a simple static image, an expandable ad unit, or even in-banner video (refer to the `Video` object in Section 3.2.7 for the more generalized and full featured video ad units). An array of `Banner` objects can also appear within the `Video` to describe optional companion ads defined in the VAST specification.

The presence of a `Banner` as a subordinate of the `Imp` object indicates that this impression is offered as a banner type impression. At the publisher's discretion, that same impression may also be offered as video, audio, and/or native by also including as `Imp` subordinates objects of those types. However, any given bid for the impression must conform to one of the offered types.

| Attribute | Type | Description |
|---|---|---|
| `format` | object array; recommended | Array of format objects (Section 3.2.10) representing the banner sizes permitted. If none are specified, then use of the `h` and `w` attributes is highly recommended. |
| `w` | integer | Exact width in device independent pixels (DIPS); recommended if no `format` objects are specified. |
| `h` | integer | Exact height in device independent pixels (DIPS); recommended if no `format` objects are specified. |
| `wmax` | integer; DEPRECATED | *NOTE: Deprecated in favor of the `format` array.* Maximum width in device independent pixels (DIPS). |
| `hmax` | integer; DEPRECATED | *NOTE: Deprecated in favor of the `format` array.* Maximum height in device independent pixels (DIPS). |
| `wmin` | integer; DEPRECATED | *NOTE: Deprecated in favor of the `format` array.* Minimum width in device independent pixels (DIPS). |
| `hmin` | integer; DEPRECATED | *NOTE: Deprecated in favor of the `format` array.* Minimum height in device independent pixels (DIPS). |
| `btype` | integer array | Blocked banner ad types. Refer to List 5.2. |
| `battr` | integer array | Blocked creative attributes. Refer to List 5.3. |
| `pos` | integer | Ad position on screen. Refer to List 5.4. |
| `mimes` | string array | Content MIME types supported. Popular MIME types may include "application/x-shockwave-flash", "image/jpg", and "image/gif". |
| `topframe` | integer | Indicates if the banner is in the top frame as opposed to an iframe, where 0 = no, 1 = yes. |
| `expdir` | integer array | Directions in which the banner may expand. Refer to List 5.5. |
| `api` | integer array | List of supported API frameworks for this impression. Refer to List 5.6. If an API is not explicitly listed, it is assumed not to be supported. |
| `id` | string | Unique identifier for this banner object. Recommended when `Banner` objects are used with a Video object (Section 3.2.7) to represent an array of companion ads. Values usually start at 1 and increase with each object; should be unique within an impression. |
| `vcm` | integer | Relevant only for `Banner` objects used with a Video object (Section 3.2.7) in an array of companion ads. Indicates the companion banner rendering mode relative to the associated video, where 0 = concurrent, 1 = end-card. |
| `ext` | object | Placeholder for exchange-specific extensions to OpenRTB. |

#### 3.2.7 Object: Video

This object represents an in-stream video impression. Many of the fields are non-essential for minimally viable transactions, but are included to offer fine control when needed. Video in OpenRTB generally assumes compliance with the VAST standard. As such, the notion of companion ads is supported by optionally including an array of `Banner` objects (refer to the `Banner` object in Section 3.2.6) that define these companion ads.

The presence of a `Video` as a subordinate of the `Imp` object indicates that this impression is offered as a video type impression. At the publisher's discretion, that same impression may also be offered as banner, audio, and/or native by also including as `Imp` subordinates objects of those types. However, any given bid for the impression must conform to one of the offered types.

| Attribute | Type | Description |
|---|---|---|
| `mimes` | string array; required | Content MIME types supported (e.g., "video/x-ms-wmv", "video/mp4"). |
| `minduration` | integer; recommended | Minimum video ad duration in seconds. |
| `maxduration` | integer; recommended | Maximum video ad duration in seconds. |
| `protocols` | integer array; recommended | Array of supported video protocols. Refer to List 5.8. At least one supported protocol must be specified in either the `protocol` or `protocols` attribute. |
| `protocol` | integer; DEPRECATED | *NOTE: Deprecated in favor of `protocols`.* Supported video protocol. Refer to List 5.8. At least one supported protocol must be specified in either the `protocol` or `protocols` attribute. |
| `w` | integer; recommended | Width of the video player in device independent pixels (DIPS). |
| `h` | integer; recommended | Height of the video player in device independent pixels (DIPS). |
| `startdelay` | integer; recommended | Indicates the start delay in seconds for pre-roll, mid-roll, or post-roll ad placements. Refer to List 5.12 for additional generic values. |
| `placement` | integer | Placement type for the impression. Refer to List 5.9. |
| `linearity` | integer | Indicates if the impression must be linear, nonlinear, etc. If none specified, assume all are allowed. Refer to List 5.7. |
| `skip` | integer | Indicates if the player will allow the video to be skipped, where 0 = no, 1 = yes. If a bidder sends markup/creative that is itself skippable, the Bid object should include the `attr` array with an element of 16 indicating skippable video. Refer to List 5.3. |
| `skipmin` | integer; default 0 | Videos of total duration greater than this number of seconds can be skippable; only applicable if the ad is skippable. |
| `skipafter` | integer; default 0 | Number of seconds a video must play before skipping is enabled; only applicable if the ad is skippable. |
| `sequence` | integer | If multiple ad impressions are offered in the same bid request, the sequence number will allow for the coordinated delivery of multiple creatives. |
| `battr` | integer array | Blocked creative attributes. Refer to List 5.3. |
| `maxextended` | integer | Maximum extended ad duration if extension is allowed. If blank or 0, extension is not allowed. If -1, extension is allowed, and there is no time limit imposed. If greater than 0, then the value represents the number of seconds of extended play supported beyond the `maxduration` value. |
| `minbitrate` | integer | Minimum bit rate in Kbps. |
| `maxbitrate` | integer | Maximum bit rate in Kbps. |
| `boxingallowed` | integer; default 1 | Indicates if letter-boxing of 4:3 content into a 16:9 window is allowed, where 0 = no, 1 = yes. |
| `playbackmethod` | integer array | Playback methods that may be in use. If none are specified, any method may be used. Refer to List 5.10. Only one method is typically used in practice. As a result, this array may be converted to an integer in a future version of the specification. It is strongly advised to use only the first element of this array in preparation for this change. |
| `playbackend` | integer | The event that causes playback to end. Refer to List 5.11. |
| `delivery` | integer array | Supported delivery methods (e.g., streaming, progressive). If none specified, assume all are supported. Refer to List 5.15. |
| `pos` | integer | Ad position on screen. Refer to List 5.4. |
| `companionad` | object array | Array of `Banner` objects (Section 3.2.6) if companion ads are available. |
| `api` | integer array | List of supported API frameworks for this impression. Refer to List 5.6. If an API is not explicitly listed, it is assumed not to be supported. |
| `companiontype` | integer array | Supported VAST companion ad types. Refer to List 5.14. Recommended if companion `Banner` objects are included via the `companionad` array. If one of these banners will be rendered as an end-card, this can be specified using the `vcm` attribute with the particular banner (Section 3.2.6). |
| `ext` | object | Placeholder for exchange-specific extensions to OpenRTB. |

#### 3.2.8 Object: Audio

This object represents an audio type impression. Many of the fields are non-essential for minimally viable transactions, but are included to offer fine control when needed. Audio in OpenRTB generally assumes compliance with the DAAST standard. As such, the notion of companion ads is supported by optionally including an array of `Banner` objects (refer to the `Banner` object in Section 3.2.6) that define these companion ads.

The presence of a `Audio` as a subordinate of the `Imp` object indicates that this impression is offered as an audio type impression. At the publisher's discretion, that same impression may also be offered as banner, video, and/or native by also including as `Imp` subordinates objects of those types. However, any given bid for the impression must conform to one of the offered types.

| Attribute | Type | Description |
|---|---|---|
| `mimes` | string array; required | Content MIME types supported (e.g., "audio/mp4"). |
| `minduration` | integer; recommended | Minimum audio ad duration in seconds. |
| `maxduration` | integer; recommended | Maximum audio ad duration in seconds. |
| `protocols` | integer array; recommended | Array of supported audio protocols. Refer to List 5.8. |
| `startdelay` | integer; recommended | Indicates the start delay in seconds for pre-roll, mid-roll, or post-roll ad placements. Refer to List 5.12. |
| `sequence` | integer | If multiple ad impressions are offered in the same bid request, the sequence number will allow for the coordinated delivery of multiple creatives. |
| `battr` | integer array | Blocked creative attributes. Refer to List 5.3. |
| `maxextended` | integer | Maximum extended ad duration if extension is allowed. If blank or 0, extension is not allowed. If -1, extension is allowed, and there is no time limit imposed. If greater than 0, then the value represents the number of seconds of extended play supported beyond the `maxduration` value. |
| `minbitrate` | integer | Minimum bit rate in Kbps. |
| `maxbitrate` | integer | Maximum bit rate in Kbps. |
| `delivery` | integer array | Supported delivery methods (e.g., streaming, progressive). If none specified, assume all are supported. Refer to List 5.15. |
| `companionad` | object array | Array of `Banner` objects (Section 3.2.6) if companion ads are available. |
| `api` | integer array | List of supported API frameworks for this impression. Refer to List 5.6. If an API is not explicitly listed, it is assumed not to be supported. |
| `companiontype` | integer array | Supported DAAST companion ad types. Refer to List 5.14. Recommended if companion `Banner` objects are included via the `companionad` array. |
| `maxseq` | integer | The maximum number of ads that can be played in an ad pod. |
| `feed` | integer | Type of audio feed. Refer to List 5.16. |
| `stitched` | integer | Indicates if the ad is stitched with audio content or delivered independently, where 0 = no, 1 = yes. |
| `nvol` | integer | Volume normalization mode. Refer to List 5.17. |
| `ext` | object | Placeholder for exchange-specific extensions to OpenRTB. |

#### 3.2.9 Object: Native

This object represents a native type impression. Native ad units are intended to blend seamlessly into the surrounding content (e.g., a sponsored Twitter or Facebook post). As such, the response must be well-structured to afford the publisher fine-grained control over rendering.

The Native Subcommittee has developed a companion specification to OpenRTB called the Dynamic Native Ads API. It defines the request parameters and response markup structure of native ad units. This object provides the means of transporting request parameters as an opaque string so that the specific parameters can evolve separately under the auspices of the Dynamic Native Ads API. Similarly, the ad markup served will be structured according to that specification.

The presence of a `Native` as a subordinate of the `Imp` object indicates that this impression is offered as a native type impression. At the publisher's discretion, that same impression may also be offered as banner, video, and/or audio by also including as `Imp` subordinates objects of those types. However, any given bid for the impression must conform to one of the offered types.

| Attribute | Type | Description |
|---|---|---|
| `request` | string; required | Request payload complying with the Native Ad Specification. |
| `ver` | string; recommended | Version of the Dynamic Native Ads API to which `request` complies; highly recommended for efficient parsing. |
| `api` | integer array | List of supported API frameworks for this impression. Refer to List 5.6. If an API is not explicitly listed, it is assumed not to be supported. |
| `battr` | integer array | Blocked creative attributes. Refer to List 5.3. |
| `ext` | object | Placeholder for exchange-specific extensions to OpenRTB. |

#### 3.2.10 Object: Format

This object represents an allowed size (i.e., height and width combination) or Flex Ad parameters for a banner impression. These are typically used in an array where multiple sizes are permitted. It is recommended that either the `w`/`h` pair or the `wratio`/`hratio`/`wmin` set (i.e., for Flex Ads) be specified.

| Attribute | Type | Description |
|---|---|---|
| `w` | integer | Width in device independent pixels (DIPS). |
| `h` | integer | Height in device independent pixels (DIPS). |
| `wratio` | integer | Relative width when expressing size as a ratio. |
| `hratio` | integer | Relative height when expressing size as a ratio. |
| `wmin` | integer | The minimum width in device independent pixels (DIPS) at which the ad will be displayed the size is expressed as a ratio. |
| `ext` | object | Placeholder for exchange-specific extensions to OpenRTB. |

#### 3.2.11 Object: Pmp

This object is the private marketplace container for direct deals between buyers and sellers that may pertain to this impression. The actual deals are represented as a collection of `Deal` objects. Refer to Section 7.3 for more details.

| Attribute | Type | Description |
|---|---|---|
| `private_auction` | integer; default 0 | Indicator of auction eligibility to seats named in the Direct Deals object, where 0 = all bids are accepted, 1 = bids are restricted to the deals specified and the terms thereof. |
| `deals` | object array | Array of `Deal` (Section 3.2.12) objects that convey the specific deals applicable to this impression. |
| `ext` | object | Placeholder for exchange-specific extensions to OpenRTB. |

#### 3.2.12 Object: Deal

This object constitutes a specific deal that was struck *a priori* between a buyer and a seller. Its presence with the `Pmp` collection indicates that this impression is available under the terms of that deal. Refer to Section 7.3 for more details.

| Attribute | Type | Description |
|---|---|---|
| `id` | string; required | A unique identifier for the direct deal. |
| `bidfloor` | float; default 0 | Minimum bid for this impression expressed in CPM. |
| `bidfloorcur` | string; default "USD" | Currency specified using ISO-4217 alpha codes. This may be different from bid currency returned by bidder if this is allowed by the exchange. |
| `at` | integer | Optional override of the overall auction type of the bid request, where 1 = First Price, 2 = Second Price Plus, 3 = the value passed in `bidfloor` is the agreed upon deal price. Additional auction types can be defined by the exchange. |
| `wseat` | string array | Whitelist of buyer seats (e.g., advertisers, agencies) allowed to bid on this deal. IDs of seats and the buyer's customers to which they refer must be coordinated between bidders and the exchange *a priori*. Omission implies no seat restrictions. |
| `wadomain` | string array | Array of advertiser domains (e.g., advertiser.com) allowed to bid on this deal. Omission implies no advertiser restrictions. |
| `ext` | object | Placeholder for exchange-specific extensions to OpenRTB. |

#### 3.2.13 Object: Site

This object should be included if the ad supported content is a website as opposed to a non-browser application. A bid request must not contain both a `Site` and an `App` object. At a minimum, it is useful to provide a site ID or page URL, but this is not strictly required.

| Attribute | Type | Description |
|---|---|---|
| `id` | string; recommended | Exchange-specific site ID. |
| `name` | string | Site name (may be aliased at the publisher's request). |
| `domain` | string | Domain of the site (e.g., "mysite.foo.com"). |
| `cat` | string array | Array of IAB content categories of the site. Refer to List 5.1. |
| `sectioncat` | string array | Array of IAB content categories that describe the current section of the site. Refer to List 5.1. |
| `pagecat` | string array | Array of IAB content categories that describe the current page or view of the site. Refer to List 5.1. |
| `page` | string | URL of the page where the impression will be shown. |
| `ref` | string | Referrer URL that caused navigation to the current page. |
| `search` | string | Search string that caused navigation to the current page. |
| `mobile` | integer | Indicates if the site has been programmed to optimize layout when viewed on mobile devices, where 0 = no, 1 = yes. |
| `privacypolicy` | integer | Indicates if the site has a privacy policy, where 0 = no, 1 = yes. |
| `publisher` | object | Details about the Publisher (Section 3.2.15) of the site. |
| `content` | object | Details about the Content (Section 3.2.16) within the site. |
| `keywords` | string | Comma separated list of keywords about the site. |
| `ext` | object | Placeholder for exchange-specific extensions to OpenRTB. |

#### 3.2.14 Object: App

This object should be included if the ad supported content is a non-browser application (typically in mobile) as opposed to a website. A bid request must not contain both an `App` and a `Site` object. At a minimum, it is useful to provide an App ID or bundle, but this is not strictly required.

| Attribute | Type | Description |
|---|---|---|
| `id` | string; recommended | Exchange-specific app ID. |
| `name` | string | App name (may be aliased at the publisher's request). |
| `bundle` | string | A platform-specific application identifier intended to be unique to the app and independent of the exchange. On Android, this should be a bundle or package name (e.g., com.foo.mygame). On iOS, it is typically a numeric ID. |
| `domain` | string | Domain of the app (e.g., "mygame.foo.com"). |
| `storeurl` | string | App store URL for an installed app; for IQG 2.1 compliance. |
| `cat` | string array | Array of IAB content categories of the app. Refer to List 5.1. |
| `sectioncat` | string array | Array of IAB content categories that describe the current section of the app. Refer to List 5.1. |
| `pagecat` | string array | Array of IAB content categories that describe the current page or view of the app. Refer to List 5.1. |
| `ver` | string | Application version. |
| `privacypolicy` | integer | Indicates if the app has a privacy policy, where 0 = no, 1 = yes. |
| `paid` | integer | 0 = app is free, 1 = the app is a paid version. |
| `publisher` | object | Details about the Publisher (Section 3.2.15) of the app. |
| `content` | object | Details about the Content (Section 3.2.16) within the app. |
| `keywords` | string | Comma separated list of keywords about the app. |
| `ext` | object | Placeholder for exchange-specific extensions to OpenRTB. |

#### 3.2.15 Object: Publisher

This object describes the publisher of the media in which the ad will be displayed. The publisher is typically the seller in an OpenRTB transaction.

| Attribute | Type | Description |
|---|---|---|
| `id` | string | Exchange-specific publisher ID. |
| `name` | string | Publisher name (may be aliased at the publisher's request). |
| `cat` | string array | Array of IAB content categories that describe the publisher. Refer to List 5.1. |
| `domain` | string | Highest level domain of the publisher (e.g., "publisher.com"). |
| `ext` | object | Placeholder for exchange-specific extensions to OpenRTB. |

#### 3.2.16 Object: Content

This object describes the content in which the impression will appear, which may be syndicated or non-syndicated content. This object may be useful when syndicated content contains impressions and does not necessarily match the publisher's general content. The exchange might or might not have knowledge of the page where the content is running, as a result of the syndication method. For example might be a video impression embedded in an iframe on an unknown web property or device.

| Attribute | Type | Description |
|---|---|---|
| `id` | string | ID uniquely identifying the content. |
| `episode` | integer | Episode number. |
| `title` | string | Content title. *Video Examples:* "Search Committee" (television), "A New Hope" (movie), or "Endgame" (made for web). *Non-Video Example:* "Why an Antarctic Glacier is Melting So Quickly" (Time magazine article). |
| `series` | string | Content series. *Video Example:* "The Office" (television), "Star Wars" (movie), or "Arby 'N' The Chief" (made for web). *Non-Video Example:* "Eccentric" (Time Magazine blog). |
| `season` | string | Content season (e.g., "Season 3"). |
| `artist` | string | Artist credited with the content. |
| `genre` | string | Genre that best describes the content (e.g., rock, pop, etc). |
| `album` | string | Album to which the content belongs; typically for audio. |
| `isrc` | string | International Standard Recording Code conforming to ISO-3901. |
| `producer` | object | Details about the content `Producer` (Section 3.2.17). |
| `url` | string | URL of the content, for buy-side contextualization or review. |
| `cat` | string array | Array of IAB content categories that describe the content producer. Refer to List 5.1. |
| `prodq` | integer | Production quality. Refer to List 5.13. |
| `videoquality` | integer; DEPRECATED | *Note: Deprecated in favor of* `prodq`. Video quality. Refer to List 5.13. |
| `context` | integer | Type of content (game, video, text, etc.). Refer to List 5.18. |
| `contentrating` | string | Content rating (e.g., MPAA). |
| `userrating` | string | User rating of the content (e.g., number of stars, likes, etc.). |
| `qagmediarating` | integer | Media rating per IQG guidelines. Refer to List 5.19. |
| `keywords` | string | Comma separated list of keywords describing the content. |
| `livestream` | integer | 0 = not live, 1 = content is live (e.g., stream, live blog). |
| `sourcerelationship` | integer | 0 = indirect, 1 = direct. |
| `len` | integer | Length of content in seconds; appropriate for video or audio. |
| `language` | string | Content language using ISO-639-1-alpha-2. |
| `embeddable` | integer | Indicator of whether or not the content is embeddable (e.g., an embeddable video player), where 0 = no, 1 = yes. |
| `data` | object array | Additional content data. Each `Data` object (Section 3.2.21) represents a different data source. |
| `ext` | object | Placeholder for exchange-specific extensions to OpenRTB. |

#### 3.2.17 Object: Producer

This object defines the producer of the content in which the ad will be shown. This is particularly useful when the content is syndicated and may be distributed through different publishers and thus when the producer and publisher are not necessarily the same entity.

| Attribute | Type | Description |
|---|---|---|
| `id` | string | Content producer or originator ID. Useful if content is syndicated and may be posted on a site using embed tags. |
| `name` | string | Content producer or originator name (e.g., "Warner Bros"). |
| `cat` | string array | Array of IAB content categories that describe the content producer. Refer to List 5.1. |
| `domain` | string | Highest level domain of the content producer (e.g., "producer.com"). |
| `ext` | object | Placeholder for exchange-specific extensions to OpenRTB. |

#### 3.2.18 Object: Device

This object provides information pertaining to the device through which the user is interacting. Device information includes its hardware, platform, location, and carrier data. The device can refer to a mobile handset, a desktop computer, set top box, or other digital device.

| Attribute | Type | Description |
|---|---|---|
| `ua` | string; recommended | Browser user agent string. |
| `geo` | object; recommended | Location of the device assumed to be the user's current location defined by a `Geo` object (Section 3.2.19). |
| `dnt` | integer; recommended | Standard "Do Not Track" flag as set in the header by the browser, where 0 = tracking is unrestricted, 1 = do not track. |
| `lmt` | integer; recommended | "Limit Ad Tracking" signal commercially endorsed (e.g., iOS, Android), where 0 = tracking is unrestricted, 1 = tracking must be limited per commercial guidelines. |
| `ip` | string; recommended | IPv4 address closest to device. |
| `ipv6` | string | IP address closest to device as IPv6. |
| `devicetype` | integer | The general type of device. Refer to List 5.21. |
| `make` | string | Device make (e.g., "Apple"). |
| `model` | string | Device model (e.g., "iPhone"). |
| `os` | string | Device operating system (e.g., "iOS"). |
| `osv` | string | Device operating system version (e.g., "3.1.2"). |
| `hwv` | string | Hardware version of the device (e.g., "5S" for iPhone 5S). |
| `h` | integer | Physical height of the screen in pixels. |
| `w` | integer | Physical width of the screen in pixels. |
| `ppi` | integer | Screen size as pixels per linear inch. |
| `pxratio` | float | The ratio of physical pixels to device independent pixels. |
| `js` | integer | Support for JavaScript, where 0 = no, 1 = yes. |
| `geofetch` | integer | Indicates if the geolocation API will be available to JavaScript code running in the banner, where 0 = no, 1 = yes. |
| `flashver` | string | Version of Flash supported by the browser. |
| `language` | string | Browser language using ISO-639-1-alpha-2. |
| `carrier` | string | Carrier or ISP (e.g., "VERIZON") using exchange curated string names which should be published to bidders a priori. |
| `mccmnc` | string | Mobile carrier as the concatenated MCC-MNC code (e.g., "310-005" identifies Verizon Wireless CDMA in the USA). Refer to https://en.wikipedia.org/wiki/Mobile_country_code for further examples. Note that the dash between the MCC and MNC parts is required to remove parsing ambiguity. |
| `connectiontype` | integer | Network connection type. Refer to List 5.22. |
| `ifa` | string | ID sanctioned for advertiser use in the clear (i.e., not hashed). |
| `didsha1` | string | Hardware device ID (e.g., IMEI); hashed via SHA1. |
| `didmd5` | string | Hardware device ID (e.g., IMEI); hashed via MD5. |
| `dpidsha1` | string | Platform device ID (e.g., Android ID); hashed via SHA1. |
| `dpidmd5` | string | Platform device ID (e.g., Android ID); hashed via MD5. |
| `macsha1` | string | MAC address of the device; hashed via SHA1. |
| `macmd5` | string | MAC address of the device; hashed via MD5. |
| `ext` | object | Placeholder for exchange-specific extensions to OpenRTB. |

> **Best Practice:** There are currently no prominent open source lists for device makes, models, operating systems, or carriers. Exchanges typically use commercial products or other proprietary lists for these attributes. Until suitable open standards are available, exchanges are highly encouraged to publish lists of their device make, model, operating system, and carrier values to bidders.

> **Best Practice:** Proper device IP detection in mobile is not straightforward. Typically it involves starting at the left of the `x-forwarded-for` header, skipping private carrier networks (e.g., `10.x.x.x` or `192.x.x.x`), and possibly scanning for known carrier IP ranges. Exchanges are urged to research and implement this feature carefully when presenting device IP values to bidders.

#### 3.2.19 Object: Geo

This object encapsulates various methods for specifying a geographic location. When subordinate to a `Device` object, it indicates the location of the device which can also be interpreted as the user's current location. When subordinate to a `User` object, it indicates the location of the user's home base (i.e., not necessarily their current location).

The `lat`/`lon` attributes should only be passed if they conform to the accuracy depicted in the `type` attribute. For example, the centroid of a geographic region such as postal code should not be passed.

| Attribute | Type | Description |
|---|---|---|
| `lat` | float | Latitude from -90.0 to +90.0, where negative is south. |
| `lon` | float | Longitude from -180.0 to +180.0, where negative is west. |
| `type` | integer | Source of location data; recommended when passing `lat`/`lon`. Refer to List 5.20. |
| `accuracy` | integer | Estimated location accuracy in meters; recommended when lat/lon are specified and derived from a device's location services (i.e., type = 1). Note that this is the accuracy as reported from the device. Consult OS specific documentation (e.g., Android, iOS) for exact interpretation. |
| `lastfix` | integer | Number of seconds since this geolocation fix was established. Note that devices may cache location data across multiple fetches. Ideally, this value should be from the time the actual fix was taken. |
| `ipservice` | integer | Service or provider used to determine geolocation from IP address if applicable (i.e., type = 2). Refer to List 5.23. |
| `country` | string | Country code using ISO-3166-1-alpha-3. |
| `region` | string | Region code using ISO-3166-2; 2-letter state code if USA. |
| `regionfips104` | string | Region of a country using FIPS 10-4 notation. While OpenRTB supports this attribute, it has been withdrawn by NIST in 2008. |
| `metro` | string | Google metro code; similar to but not exactly Nielsen DMAs. See Appendix A for a link to the codes. |
| `city` | string | City using United Nations Code for Trade & Transport Locations. See Appendix A for a link to the codes. |
| `zip` | string | Zip or postal code. |
| `utcoffset` | integer | Local time as the number +/- of minutes from UTC. |
| `ext` | object | Placeholder for exchange-specific extensions to OpenRTB. |

#### 3.2.20 Object: User

This object contains information known or derived about the human user of the device (i.e., the audience for advertising). The user `id` is an exchange artifact and may be subject to rotation or other privacy policies. However, this user ID must be stable long enough to serve reasonably as the basis for frequency capping and retargeting.

| Attribute | Type | Description |
|---|---|---|
| `id` | string; recommended | Exchange-specific ID for the user. At least one of `id` or `buyeruid` is recommended. |
| `buyeruid` | string; recommended | Buyer-specific ID for the user as mapped by the exchange for the buyer. At least one of `buyeruid` or `id` is recommended. |
| `yob` | integer | Year of birth as a 4-digit integer. |
| `gender` | string | Gender, where "M" = male, "F" = female, "O" = known to be other (i.e., omitted is unknown). |
| `keywords` | string | Comma separated list of keywords, interests, or intent. |
| `customdata` | string | Optional feature to pass bidder data that was set in the exchange's cookie. The string must be in base85 cookie safe characters and be in any format. Proper JSON encoding must be used to include "escaped" quotation marks. |
| `geo` | object | Location of the user's home base defined by a `Geo` object (Section 3.2.19). This is not necessarily their current location. |
| `data` | object array | Additional user data. Each `Data` object (Section 3.2.21) represents a different data source. |
| `ext` | object | Placeholder for exchange-specific extensions to OpenRTB. |

#### 3.2.21 Object: Data

The data and segment objects together allow additional data about the related object (e.g., user, content) to be specified. This data may be from multiple sources whether from the exchange itself or third parties as specified by the `id` field. A bid request can mix data objects from multiple providers. The specific data providers in use should be published by the exchange *a priori* to its bidders.

| Attribute | Type | Description |
|---|---|---|
| `id` | string | Exchange-specific ID for the data provider. |
| `name` | string | Exchange-specific name for the data provider. |
| `segment` | object array | Array of `Segment` (Section 3.2.22) objects that contain the actual data values. |
| `ext` | object | Placeholder for exchange-specific extensions to OpenRTB. |

#### 3.2.22 Object: Segment

Segment objects are essentially key-value pairs that convey specific units of data. The parent `Data` object is a collection of such values from a given data provider. The specific segment names and value options must be published by the exchange *a priori* to its bidders.

| Attribute | Type | Description |
|---|---|---|
| `id` | string | ID of the data segment specific to the data provider. |
| `name` | string | Name of the data segment specific to the data provider. |
| `value` | string | String representation of the data segment value. |
| `ext` | object | Placeholder for exchange-specific extensions to OpenRTB. |
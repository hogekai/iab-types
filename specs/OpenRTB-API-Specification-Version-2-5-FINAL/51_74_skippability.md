## 7.4 Skippability

This section clarifies the common use cases related to declaring skippability of video creatives.

Under most circumstances for RTB transactions, publishers and exchanges prefer to control the ability to skip the ad. OpenRTB therefore assumes by default that a standard linear video ad can be used as the response to a skippable request and the ability to skip the ad will be provided by the supplier's player automatically.

The presence of the `video.skip` attribute in the bid request with a value of "1" should be assumed to mean that the publisher will impose a skip button on the ad. The absence of the `video.skip` attribute should be assumed to mean that it is unknown whether the publisher will impose a skip button.

DSPs should confirm with publishers whether it is permissible to respond with ads that provide their own skip functionality (e.g., using VPAID to render a skip button). If bidding with such an ad and only if doing so, the bid must indicate creative attribute "16" using the `attr` array in the bid response.

> **Note:** VAST 4.0 separates VPAID interactivity from the media file so this is deprecated and only applies to earlier versions of VAST.

Some examples of these concepts follow:

### Bid Request

### *Case-1: Skippable after N Seconds for All Creatives*

In this case, the publisher will impose skippability. All ads will be skippable, but only after 5 seconds of play. Creatives with a total duration of 5 seconds or less would not be skippable since they would never reach this threshold.

```json
"video": {
    ..., "skip": 1, "skipafter": 5, ...
}
```

### *Case-2: Skippable after N Seconds for Minimum Duration Creatives*

In this case, the publisher will impose skippability. However, only creatives with a total duration greater than 15 seconds will be skippable. For ads that satisfy this minimum total duration, skippability is enabled after 5 seconds of play. Note that although these values are integers, they will compare as precise values with actual video durations. For example, a video with duration 15.1 seconds does satisfy a `skipmin` value of 15 (i.e., think of the `skipmin` value as being 15.0).

```json
"video": {
    ..., "skip": 1, "skipmin": 15, "skipafter": 5, ...
}
```

### *Case-3: Non-Skippable unless Requested by the Ad Markup*

In this case, the publisher will not impose skippability. Ads will only be skippable if requested by the ad markup. This is supported by VPAID and VAST 3.0, for example.

```json
"video": {
    ..., "skip": 0, ...
}
```

### *Case-4: Unknown Skippability*

In this case, the `skip` attribute is omitted which indicates that exchange does not know if skippability will be imposed by the publisher. This may be the case, for example, when the exchange is not an SSP and thus may not have control or full knowledge of the publisher's intentions.

### Bid Response

Consider Case-3 above, where the publisher does not impose skippability. If the ad markup itself will request skippability (e.g., via VPAID or VAST 3.0), then the bid must signal this intention. This is accomplished by including creative attribute 16 (i.e., Skippable) in the bid as shown below. If the markup is not going to request skippability, then this creative attribute should not be indicated.

When responding to Case-3 with this skippable attribute specified in the bid, the publisher should provide skippability either by instructing the VAST 3.0 player to activate skippability (refer to the VAST 3.0 "skipoffset" attribute) or by allowing the ad to render its own skip button using VPAID.

```json
"bid": {
    ..., "attr": [16], ...
}
```

In Case-1 and Case-2 where the publisher may impose its own skippability, creative attribute 16 should not be specified. Furthermore, publishers are advised to filter responses containing attribute 16 since this could conflict with the skip button rendered by the publisher. When using a VAST 3.0 response, publishers may choose to implement support for VAST 3.0 "skipoffset" at their discretion and ads should be assumed to play non-skippable if the player does not support it.
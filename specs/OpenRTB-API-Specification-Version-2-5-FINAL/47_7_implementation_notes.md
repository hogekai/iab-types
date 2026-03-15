# 7. Implementation Notes

The following section will provide brief notes on how certain objects and fields are to be interpreted and implemented.

## 7.1 No-Bid Signaling

This section covers best practices for using the optional no-bid signaling. See the List 5.24 for the enumerated list of no-bid reason codes.

Many exchanges support multiple response types as a no-bid:

- HTTP 204 "No Content" from the bidder *(most economical in terms of bandwidth)*.
- An empty JSON object:
  `{}`
- A well-formed no bid response:
  `{"id": "1234567890", "seatbid": []}`
- A well-formed no bid response with a reason code:
  `{"id": "1234567890", "seatbid": [], "nbr": 2}`

An important issue in RTB is when impressions are triggered by software robots mimicking web browsers. Such robots may be implicitly or explicitly driving these false transactions. The following represents a set of symmetric best practices for exchanges and bidders to help recognize and reject these events.

*Responsibility of the exchange*

Make best effort to classify and reject "non-human traffic" requests for ads to the exchange via the following best practices:

- (Recommended) Filter impressions from known spiders via user-agent classification.
- (Recommended) Filter impressions from suspected NHT via a "detector".

*Responsibility of the bidder*

- (Recommended) no-bid impressions from known spiders via user-agent classification.
- (Recommended) no-bid impressions from suspected NHT via a "detector".
- Specify a no-bid reason code in either case.

*Where:*

- For exchanges, filtering the impression means that the exchange should respond to the "ad call" with either a blank HTTP 204 response or an unpaid ad (PSA) and not offered to any bidders.
- For bidders, filtering the impression means that the bidder should respond with a no-bid.
- For both exchanges and bidders, the impression transaction records should be clearly marked in any logging systems and be removed from contributing to any event counts associated with planning, forecasting, and reporting systems.
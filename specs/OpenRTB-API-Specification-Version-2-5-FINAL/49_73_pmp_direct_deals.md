# 7.3 PMP & Direct Deals

## Best Practice Bidding Logic

```
Receive request and parser;
Create empty bid list for response;

If request contains the impression[].pmp object;
  match bids against each pmp.deals[];
  enforce targeting for dealID and seatID;
  append best M matching bids to response;

If pmp.private_auction = False;
  match open auction bids against the request;
  append top N bids by price to response;

Return response list to exchange;
```

### Recommendations

- M >= 1, preferably one per matching Deal ID.
- N >= 2 to assist with blocking rate issues.
- Minimum viable is "1+1" bidding.
- Ideal is "M+N" bidding.

### Warning

Returning only one bid when both Deal ID and open auction bids are valid creates problems. The exchange side may be configured by a publisher to prioritize all Deal ID bids above open auction bids, or to force a price auction between them with different floors by class of bid. There are multiple common practices that depend on how the publisher prefers to sell inventory with Deal ID.

### Policy Recommendations

- A Deal ID should be utilized for any situation where the auction may be awarded to a bid not on the basis of price alone. Any prioritization of bids other than by price should have a Deal ID.
- A Deal ID is recommended for all situations where a preferential floor may be assigned to a seat entity.

### Anti-Patterns

The below is a set of anti-patterns that OpenRTB supporting platforms have observed in various attempts to implement Deal ID bidding logic.

### Subjecting Deal ID Bids to an internal auction on price

The ideal bidding logic describes a process of being liberal about sending bids. Deal ID bids may not be subject to a classic price auction. There may be an expectation that the buyer and seller want prioritization to achieve a larger objective: complete delivery of the Deal represented by the Deal ID. Thus any bidding logic that sorts Deal ID bids by price (with or without open marketplace bids) and truncates the list too aggressively can endanger the fulfillment of the Deal.

### Associating Deal ID to the wrong Object

A Deal ID should be treated as a "targeting token" associated to orders, line-items or campaigns. If the Deal ID is associated to a Seat/Buyer it may create an undesired application of the Deal ID too many active campaigns. Alternatively if it is associated to the Advertiser it may limit that entity to only a single Deal ID.

### Improper Handling of the Private vs Open Market Flag

The `pmp.private_auction` flag indicates that the seller is willing or not willing to accept open market bids (i.e., "all bidders are welcome"). If this flag is not read and interpreted correctly, bid responses may be invalid. Open market bids sent to a private impression auction may be rejected and should not have been exposed to all bidders.

### Improper handling of Seat IDs

If Seat IDs are treated as a filter of eligible demand partners on an open market impression, this defeats the "all bidders are welcome" intention.

### Silently Applying Margin Discounts to Deal ID Bids

With Deal ID buyers are sellers are communicating directly. The Exchange and Bidder become third-party automation platforms. If there are any automatic or silent discounts of bid prices (based upon margins or fees) set by either the exchange or the bidder, then the Deal may fail to function correctly.
## 5.25 Loss Reason Codes

The following table lists the options for an exchange to inform a bidder as to the reason why they did not win an impression.

| Value | Description |
|-------|-------------|
| 0 | Bid Won |
| 1 | Internal Error |
| 2 | Impression Opportunity Expired |
| 3 | Invalid Bid Response |
| 4 | Invalid Deal ID |
| 5 | Invalid Auction ID |
| 6 | Invalid (i.e., malformed) Advertiser Domain |
| 7 | Missing Markup |
| 8 | Missing Creative ID |
| 9 | Missing Bid Price |
| 10 | Missing Minimum Creative Approval Data |
| 100 | Bid was Below Auction Floor |
| 101 | Bid was Below Deal Floor |
| 102 | Lost to Higher Bid |
| 103 | Lost to a Bid for a PMP Deal |
| 104 | Buyer Seat Blocked |
| 200 | Creative Filtered - General; reason unknown. |
| 201 | Creative Filtered - Pending processing by Exchange (e.g., approval, transcoding, etc.) |
| 202 | Creative Filtered - Disapproved by Exchange |
| 203 | Creative Filtered - Size Not Allowed |
| 204 | Creative Filtered - Incorrect Creative Format |
| 205 | Creative Filtered - Advertiser Exclusions |
| 206 | Creative Filtered - App Bundle Exclusions |
| 207 | Creative Filtered - Not Secure |
| 208 | Creative Filtered - Language Exclusions |
| 209 | Creative Filtered - Category Exclusions |
| 210 | Creative Filtered - Creative Attribute Exclusions |
| 211 | Creative Filtered - Ad Type Exclusions |
| 212 | Creative Filtered - Animation Too Long |
| 213 | Creative Filtered - Not Allowed in PMP Deal |
| ≥ 1000 | Exchange specific (should be communicated to bidders *a priori*) |
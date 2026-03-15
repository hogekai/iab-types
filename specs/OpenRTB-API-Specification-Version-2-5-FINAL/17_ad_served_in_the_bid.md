## Ad Served in the Bid

- *Reduced Risk of Forfeiture:* A forfeit is the scenario in which a bidder wins, but forfeits due to failure to serve the ad markup. The risk of an additional HTTP failure (e.g., calling the win notice) is mitigated by this method.
- *Potential Concurrency:* The exchange can choose to return that ad markup and call the win notice concurrently, thereby improving user experience.
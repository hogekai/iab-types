## 7.5 COPPA Regulation Flag

The United States Federal Trade Commission has changed the compliance rules for the Children's Online Privacy Protection Act ("COPPA"), effective July 1, 2013. The proposal effects websites, and associated services, that have been identified as: (1) directed to users under 13 years of age; or (2) collecting information from users actually known to be under 13 (collectively "Children's Sites").

The FTC has written a comprehensive FAQ on the change here:

www.ftc.gov/tips-advice/business-center/guidance/complying-coppa-frequently-asked-questions

Steve Bellovin, CTO of the FTC, argued for a standardized signaling protocol in a blog posted dated January 2013:

www.ftc.gov/news-events/blogs/techftc/2013/01/coppa-signaling

### Impacts

The FAQ specifically calls out these areas relevant for OpenRTB as "Personal Information" that is not to be collected:

- Geo-location information sufficient to identify street name and name of a city or town.
- Persistent identifiers when they can be used to recognize a user over time and across different Web sites or online services.

### Recommendations to Implementers

OpenRTB Exchanges and Bidders should:

- Provide a facility for sites to be declared as "child directed".
- Implement the regulations object extension.
- Provide facilities within campaigns to target for and against this signal.
- Degrade the Geographic information to be less exact prior to logging or transmission.
- Suppress the assignment and synchronization of identifiers, depending on usage.

It is recommended that when `regs.coppa` = 1, the exchange should additionally manipulate the OpenRTB bid request object as follows:

*Device Object*

- Suppress `didmd5` and `didsha1` device ID fields.
- Truncate `ip` field - remove lowest 8 bits.
- Truncate `ipv6` field - remove lowest 32 bits.

*Geo Object*

- Suppress `lat` and `lon` fields.
- Suppress `metro`, `city`, and `zip` fields.

*User Object*

- Suppress `id`, `buyeruid`, `yob`, and `gender` fields.
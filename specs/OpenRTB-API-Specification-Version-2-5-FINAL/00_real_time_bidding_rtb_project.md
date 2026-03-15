# Real Time Bidding (RTB) Project

OpenRTB API Specification Version 2.5

FINAL

December 2016

© 2016 IAB Technology Laboratory

## Introduction

The RTB Project, formerly known as the OpenRTB Consortium, assembled in November 2010 to develop a new API specification for companies interested in an open protocol for the automated trading of digital media across a broader range of platforms, devices, and advertising solutions. This document is OpenRTB version 2.5 released in November of 2016; this is the culmination of the working group efforts and can be found at: http://www.iab.com/openrtb

## About the IAB Technology Lab

The IAB Technology Laboratory is a nonprofit research and development consortium charged with producing and helping companies implement global industry technical standards and solutions. The goal of the Tech Lab is to reduce friction associated with the digital advertising and marketing supply chain while contributing to the safe growth of an industry.

IAB Tech Lab spearheads the development of technical standards, creates and maintains a code library to assist in rapid, cost-effective implementation of IAB standards, and establishes a test platform for companies to evaluate the compatibility of their technology solutions with IAB standards, which for 18 years have been the foundation for interoperability and profitable growth in the digital advertising supply chain.

The OpenRTB Work Group is a working group within the IAB Technology Lab. Further details about the IAB Technology Lab can be found at: https://iabtechlab.com/

### IAB Contact Information

Jennifer Derke
Senior Manager, Product
IAB Technology Lab
openRTB@iab.com

### OpenRTB Co-Chairs

Dr. Bill Simmons
CTO – DataXu
OpenRTB Founder

Dr. Jim Butler
VP Engineering, Publisher Platforms – AOL
OpenRTB Specification Author

Dr. Neal Richter
Founder, Principal – Hebbian Labs

## License

OpenRTB Specification by OpenRTB is licensed under a Creative Commons Attribution 3.0 License. To view a copy of this license, visit creativecommons.org/licenses/by/3.0/ or write to Creative Commons, 171 Second Street, Suite 300, San Francisco, CA 94105, USA.

## Table of Contents

| | | Page |
|---|---|---|
| Getting Started | | 1 |
| **1.** | **Introduction** | **2** |
| 1.1 | Mission / Overview | 2 |
| 1.2 | History of OpenRTB | 2 |
| 1.3 | Version History | 3 |
| 1.4 | Resources | 3 |
| 1.5 | Terminology | 3 |
| **2.** | **OpenRTB Basics** | **4** |
| 2.1 | Transport | 4 |
| 2.2 | Security | 5 |
| 2.3 | Data Format | 5 |
| 2.4 | Data Encoding | 5 |
| 2.5 | OpenRTB Version HTTP Header | 5 |
| 2.6 | Privacy by Design | 7 |
| 2.7 | Relationship to Inventory Quality Guidelines | 7 |
| 2.8 | Customization and Extensions | 7 |
| **3.** | **Bid Request Specification** | **8** |
| 3.1 | Object Model | 8 |
| 3.2 | Object Specifications | 10 |
| 3.2.1 | Object: BidRequest | 10 |
| 3.2.2 | Object: Source | 11 |
| 3.2.3 | Object: Regs | 12 |
| 3.2.4 | Object: Imp | 12 |
| 3.2.5 | Object: Metric | 13 |
| 3.2.6 | Object: Banner | 14 |
| 3.2.7 | Object: Video | 15 |
| 3.2.8 | Object: Audio | 17 |
| 3.2.9 | Object: Native | 18 |
| 3.2.10 | Object: Format | 18 |
| 3.2.11 | Object: Pmp | 19 |
| 3.2.12 | Object: Deal | 19 |
| 3.2.13 | Object: Site | 20 |
| 3.2.14 | Object: App | 21 |
| 3.2.15 | Object: Publisher | 21 |
| 3.2.16 | Object: Content | 21 |
| 3.2.17 | Object: Producer | 22 |
| 3.2.18 | Object: Device | 23 |
| 3.2.19 | Object: Geo | 24 |
| 3.2.20 | Object: User | 25 |
| 3.2.21 | Object: Data | 26 |
| 3.2.22 | Object: Segment | 26 |
| **4.** | **Bid Response Specification** | **27** |
| 4.1 | Object Model | 27 |
| 4.2 | Object Specifications | 28 |
| 4.2.1 | Object: BidResponse | 28 |
| 4.2.2 | Object: SeatBid | 29 |
| 4.2.3 | Object: Bid | 29 |
| 4.3 | Ad Serving Options | 31 |
| 4.3.1 | Markup Served on the Win Notice | 31 |
| 4.3.2 | Markup Served in the Bid | 31 |
| 4.3.3 | Comparison of Ad Serving Approaches | 31 |
| 4.4 | Substitution Macros | 32 |
| **5.** | **Enumerated Lists Specification** | **34** |
| 5.1 | Content Categories | 34 |
| 5.2 | Banner Ad Types | 45 |
| 5.3 | Creative Attributes | 45 |
| 5.4 | Ad Position | 45 |
| 5.5 | Expandable Direction | 46 |
| 5.6 | API Frameworks | 46 |
| 5.7 | Video Linearity | 47 |
| 5.8 | Protocols | 47 |
| 5.9 | Video Placement Types | 47 |
| 5.10 | Playback Methods | 48 |
| 5.11 | Playback Cessation Modes | 48 |
| 5.12 | Start Delay | 48 |
| 5.13 | Production Quality | 49 |
| 5.14 | Companion Types | 49 |
| 5.15 | Content Delivery Methods | 49 |
| 5.16 | Feed Types | 50 |
| 5.17 | Volume Normalization Modes | 50 |
| 5.18 | Content Context | 50 |
| 5.19 | IQG Media Ratings | 50 |
| 5.20 | Location Type | 51 |
| 5.21 | Device Type | 51 |
| 5.22 | Connection Type | 51 |
| 5.23 | IP Location Services | 52 |
| 5.24 | No-Bid Reason Codes | 52 |
| 5.25 | Loss Reason Codes | 52 |
| **6.** | **Bid Request/Response Samples** | **54** |
| 6.1 | GitHub Repository | 54 |
| 6.2 | Validator | 54 |
| 6.3 | Bid Requests | 54 |
| 6.3.1 | Example 1 – Simple Banner | 54 |
| 6.3.2 | Example 2 – Expandable Creative | 55 |
| 6.3.3 | Example 3 – Mobile | 56 |
| 6.3.4 | Example 4 – Video | 57 |
| 6.3.5 | Example 5 – PMP with Direct Deal | 59 |
| 6.3.6 | Example 6 – Native Ad | 60 |
| 6.4 | Bid Responses | 61 |
| 6.4.1 | Example 1 – Ad Served on Win Notice | 61 |
| 6.4.2 | Example 2 – VAST XML Document Returned Inline | 61 |
| 6.4.3 | Example 3 – Direct Deal Ad Served on Win Notice | 62 |
| 6.4.4 | Example 4 – Native Markup Returned Inline | 63 |
| **7.** | **Implementation Notes** | **64** |
| 7.1 | No-Bid Signaling | 64 |
| 7.2 | Impression Expiration | 65 |
| 7.3 | PMP & Direct Deals | 66 |
| 7.4 | Skippability | 69 |
| 7.5 | COPPA Regulation Flag | 71 |
| **Appendix A.** | **Additional Information** | **73** |
| **Appendix B.** | **Specification Change Log** | **74** |

## Getting Started

This specification contains a detailed explanation of an RTB (Real-Time Bidding) interface. Not all objects are required, and each object may contain a number of optional parameters. To assist a first-time reader of the specification, we have indicated which fields are essential to support a minimum viable real time bidding interface for various scenarios (banner, video, etc.).

A minimal viable interface should include the *required* and *recommended* parameters, but the scope for these parameters may be limited to specific scenarios. In these cases, the Description column may further qualify their *required* or *recommended* status. Optional parameters may be included to ensure maximum value is derived by the parties.

<table>
<tr><td></td><td><strong>Attribute</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td></tr>
<tr><td rowspan="2">Examples of required attributes. Grouped at the tops of tables for convenience.</td><td><code>id</code></td><td>string; required</td><td>...</td></tr>
<tr><td><code>imp</code></td><td>object array; required</td><td>...</td></tr>
<tr><td rowspan="4">Examples of recommended attributes. Grouped after required attributes.</td><td><code>site</code></td><td>object; recommended</td><td>...</td></tr>
<tr><td><code>app</code></td><td>object; recommended</td><td>...</td></tr>
<tr><td><code>device</code></td><td>object; recommended</td><td>...</td></tr>
<tr><td><code>user</code></td><td>object; recommended</td><td>...</td></tr>
<tr><td rowspan="4">Examples of optional attributes, with and without defaults.<br><br>Attributes are assumed optional unless explicitly qualified as required or recommended.</td><td><code>test</code></td><td>integer; default 0</td><td>...</td></tr>
<tr><td><code>at</code></td><td>integer; default 2</td><td>...</td></tr>
<tr><td><code>tmax</code></td><td>integer</td><td>...</td></tr>
<tr><td><code>wseat</code></td><td>string array</td><td>...</td></tr>
</table>

*Figure 1: Example of how Required, Recommended, and Optional attributes are presented.*

**IMPORTANT:** Since *recommended* attributes are not required, they may not be available from all supply sources. It is suggested that all parties to OpenRTB transaction develop an integration checklist to identify which attributes the supply side supports in the bid request, and which attributes the demand side requires for ad decisioning.
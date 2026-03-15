# Appendix A. Additional Information

- Creative Commons / Attribution License
  creativecommons.org/licenses/by/3.0

- IAB (Interactive Advertising Bureau)
  www.iab.com

- IAB Quality Assurance Guidelines (QAG):
  www.iab.com/guidelines/iab-quality-assurance-guidelines-qag-taxonomy/

- JavaScript Object Notation (JSON)
  www.json.org

- MMA (Mobile Marketing Association)
  mmaglobal.com

- OpenRTB Project on Github
  github.com/openrtb/OpenRTB/

- Apache Avro
  avro.apache.org

- Protocol Buffers (Protobuf)
  code.google.com/p/protobuf

- Google Metro Codes
  code.google.com/apis/adwords/docs/appendix/metrocodes.html

- U.N. Code for Trade and Transport Locations:
  www.unece.org/cefact/locode/service/location.htm

## Appendix B. Specification Change Log

This appendix serves as an index of specification changes from v2.4 to v2.5. These changes pertain only to the substance of the specification and not routine document formatting, organization, or content without technical impact.

<table>
<tr><th>Section</th><th>Description</th></tr>
<tr><td><strong>2.4</strong></td><td><em>Section: Data Encoding</em><br>New section added.</td></tr>
<tr><td><strong>3.1</strong></td><td><em>Object Model: Bid Request</em><br>Updated to include <code>Source</code> and <code>Metric</code> objects.</td></tr>
<tr><td><strong>3.2.1</strong></td><td><em>Object: BidRequest</em><br>Attributes <code>bseat</code>, <code>wlang</code>, and <code>source</code> have been added.</td></tr>
<tr><td><strong>3.2.2</strong></td><td><em>Object: Source</em><br>New Source object has been added including the Payment ID <code>pchain</code> attribute.</td></tr>
<tr><td><strong>3.2.4</strong></td><td><em>Object: Imp</em><br>Attribute <code>metric</code> has been added.</td></tr>
<tr><td><strong>3.2.5</strong></td><td><em>Object: Metric</em><br>New <code>Metric</code> object has been added.</td></tr>
<tr><td><strong>3.2.6</strong></td><td><em>Object: Banner</em><br>Attribute <code>vcm</code> has been added.</td></tr>
<tr><td><strong>3.2.7</strong></td><td><em>Object: Video</em><br>Attributes <code>placement</code> and <code>playbackend</code> have been added. Guidance added to use only the first element of attribute <code>playbackmethod</code> in preparation for future conversion to an integer.</td></tr>
<tr><td><strong>3.2.10</strong></td><td><em>Object: Format</em><br>Attributes <code>wratio</code>, <code>hratio</code>, and <code>wmin</code> have been added.</td></tr>
<tr><td><strong>3.2.13</strong></td><td><em>Object: Device</em><br>Attribute <code>mccmnc</code> has been added. Attribute <code>carrier</code> has been clarified to eliminate a reference to using "WIFI" as a carrier.</td></tr>
<tr><td><strong>4.2.3</strong></td><td><em>Object: Bid</em><br>Attributes <code>burl</code>, <code>lurl</code>, <code>tactic</code>, <code>language</code>, <code>wratio</code>, and <code>hratio</code> have been added.</td></tr>
<tr><td><strong>4.4</strong></td><td><em>Substitution Macros:</em><br>Macros ${AUCTION_MBR} and ${AUCTION_LOSS} have been added. A best practice has been added to use "AUDIT" for unknown values when rendering for test or quality purposes.</td></tr>
<tr><td><strong>5.6</strong></td><td><em>List: API Frameworks</em><br>Item 6 has been added.</td></tr>
<tr><td><strong>5.9</strong></td><td><em>List: Video Placement Types</em><br>New list has been added.</td></tr>
<tr><td><strong>5.10</strong></td><td><em>List: Playback Methods</em><br>Items 5-6 have been added.</td></tr>
<tr><td><strong>5.11</strong></td><td><em>List: Playback Cessation Modes</em><br>New list has been added.</td></tr>
<tr><td><strong>5.24</strong></td><td><em>List: No-Bid Reason Codes</em><br>Items 9-10 have been added.</td></tr>
<tr><td><strong>5.25</strong></td><td><em>List: Loss Reason Codes</em><br>New list has been added.</td></tr>
</table>
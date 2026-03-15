## 4.3 Ad Serving Options

The fulfillment of an RTB transaction within the scope of this OpenRTB specification lies in the delivery of markup. Depending on the impression and other ad type constraints, this markup can be XHTML, HTML5, XHTML, or HTML5 with embedded JavaScript, a VAST document for video, a Native ad unit structure, and potentially other formats in the future.

The OpenRTB specification does not require any processing of the ad markup by the exchange other than macro substitution (refer to Section 4.4) and delivery to the supply-side. There are, however, multiple standard methods for transferring markup from the bidder to the exchange. The method used is at the discretion of the bidder, but an OpenRTB compliant exchange is expected to support all methods as defined in the subsections that follow.

### 4.3.1 Markup Served on the Win Notice

In this method, ad markup is returned to the exchange is via the win notice. In this case, the response body of the win notice call (i.e., invoking the `bid.nurl` attribute) contains the ad markup and only the ad markup; there must be no other structured data in the response body. Using this method, the `bid.adm` attribute must be omitted.

### 4.3.2 Markup Served in the Bid

In this method, ad markup is returned directly in the bid itself. This is accomplished via the `bid.adm` attribute. If both the `adm` attribute and win notice return data, the `adm` contents will take precedence.

### 4.3.3 Comparison of Ad Serving Approaches

Each of the ad serving methods has its own advantages that may be of varying importance to either the exchange or the bidder.
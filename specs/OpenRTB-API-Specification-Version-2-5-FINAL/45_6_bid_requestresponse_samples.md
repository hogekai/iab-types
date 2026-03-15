## 6. Bid Request/Response Samples

### 6.1 GitHub Repository

The official OpenRTB Github repository now contains a set of validated example requests. This repository should be considered the canonical examples for implementers.

github.com/openrtb/examples

### 6.2 Validator

An OpenRTB Validator has been developed to test compliance of bid response and bid response JSON payloads. The Validator is available for all final versions of OpenRTB specification. The code for the validator is distributed freely under a BSD-3 open source license at the below URL.

github.com/openrtb/openrtb2x/tree/2.0/openrtb-validator

### 6.3 Bid Requests

#### 6.3.1 Example 1 – Simple Banner

Following is a basic example of a bid request for a banner ad. Some optional parameters are included in this example.

```json
{
  "id": "80ce30c53c16e6ede735f123ef6e32361bfc7b22",
  "at": 1, "cur": [ "USD" ],
  "imp": [
    {
      "id": "1", "bidfloor": 0.03,
      "banner": {
        "h": 250, "w": 300, "pos": 0
      }
    }
  ],
  "site": {
    "id": "102855",
    "cat": [ "IAB3-1" ],
    "domain": "www.foobar.com",
    "page": "http://www.foobar.com/1234.html ",
    "publisher": {
      "id": "8953", "name": "foobar.com",
      "cat": [ "IAB3-1" ],
      "domain": "foobar.com"
    }
  },
  "device": {
    "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.13 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2",
    "ip": "123.145.167.10"
  },
  "user": {
    "id": "55816b39711f9b5acf3b90e313ed29e51665623f"
  }
}
```

#### 6.3.2 Example 2 – Expandable Creative

This example builds the first and adds parameters to describe support for an expandable creative, and passes data about the user from "Data Provider 1".

```json
{
  "id": "123456789316e6ede735f123ef6e32361bfc7b22",
  "at": 2, "cur": [ "USD" ],
  "imp": [
    {
      "id": "1", "bidfloor": 0.03,
      "iframebuster": [ "vendor1.com", "vendor2.com" ],
      "banner": {
        "h": 250, "w": 300, "pos": 0,
        "battr": [ 13 ],
        "expdir": [ 2, 4 ]
      }
    }
  ],
  "site": {
    "id": "102855",
    "cat": [ "IAB3-1" ],
    "domain": "www.foobar.com",
    "page": "http://www.foobar.com/1234.html",
    "publisher": {
      "id": "8953", "name": "foobar.com",
      "cat": [ "IAB3-1" ],
      "domain": "foobar.com"
    }
  },
  "device": {
    "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.13 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2",
    "ip": "123.145.167.10"
  },
  "user": {
    "id": "55816b39711f9b5acf3b90e313ed29e51665623f",
    "buyeruid": "545678765467876567898765678987654",
    "data": [
      {
        "id": "6", "name": "Data Provider 1",
        "segment": [
```

#### 6.3.3 Example 3 – Mobile

This example uses a device object to reflect a mobile device, and an app object to reflect a request from a mobile application.

```json
{
  "id": "IxexyLDIIk",
  "at": 2,
  "bcat": [ "IAB25", "IAB7-39", "IAB8-18", "IAB8-5", "IAB9-9" ],
  "badv": [ "apple.com", "go-test.me", "heywire.com" ],
  "imp": [
    {
      "id": "1", "bidfloor": 0.5, "instl": 0,
      "tagid": "agltb3B1Yi1pbmNyDAsSDU9GZmVyEiDOBQ",
      "banner": {
        "w": 728, "h": 90, "pos": 1,
        "btype": [ 4 ],
        "battr": [ 14 ],
        "api": [ 3 ]
      }
    }
  ],
  "app": {
    "id": "agltb3B1Yi1pbmNyDAsSA0FwcBiJkfIUDA", "name": "Yahoo Weather",
    "cat": [ "IAB15", "IAB15-10" ],
    "ver": "1.0.2",
    "bundle": "12345",
    "storeurl": "https://itunes.apple.com/id628677149",
    "publisher": {
      "id": "agltb3B1Yi1pbmNyDAsSA0FwcBiJkfTUCV", "name": "yahoo",
      "domain": "www.yahoo.com"
    }
  },
  "device": {
    "dnt": 0,
    "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 6_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.49.3",
    "ip": "123.145.167.189",
    "ifa": "AA000DFE74168477C70D291574D34479DODB11",
    "carrier": "VERIZON",
    "language": "en",
    "make": "Apple", "model": "iPhone",
    "os": "iOS", "osv": "6.1",
    "js": 1,
    "connectiontype": 3,
    "devicetype": 1,
    "geo": {
      "lat": 35.012345, "lon": -115.12345,
      "country": "USA",
      "metro": "803",
      "region": "CA", "city": "Los Angeles", "zip": "90049"
    }
  },
  "user": {
    "id": "ffffffd5135596709273b3a1a07e466ea2bf4fff",
    "yob": 1984, "gender": "M"
  }
}
```

#### 6.3.4 Example 4 – Video

The following example illustrates a bid request for a video impression with two companion ad slots (1 expandable). Additionally, the video content itself is described in the "content" object. A few notes about specific fields in the example:

- **protocols:** Only VAST 2.0 and 3.0 are allowed. Note that a wrapper response is not allowed in this example.
- **sequence:** It is not explicitly included so the default of "1" should be assumed.
- **battr:** User interactive and alert type ads (value "13" and "14", respectively) are explicitly being blocked for both the video and its companions.
- **pos:** Indicates this opportunity is "above the fold".
- **api:** Indicates that VPAID 1.0 containers are explicitly supported. As such, the mime types supported for VPAID are only "application/x-shockwave-flash" and "application/javascript". Note that there is an implicit restriction as to which protocol is allowed in which mime type. JavaScript support was not specified until VPAID 2.0, while Flash supports both VPAID 1.0 and 2.0.
- **companiontype:** Indicates only static or HTML resources are allowed.

```json
{
  "id": "1234567893",
  "at": 2, "tmax": 120,
  "imp": [
    {
      "id": "1", "bidfloor": 0.03,
      "video": {
        "w": 640, "h": 480, "pos": 1,
        "startdelay": 0, "minduration": 5, "maxduration": 30,
        "maxextended": 30,
        "minbitrate": 300, "maxbitrate": 1500,
        "api": [ 1, 2 ],
        "protocols": [ 2, 3 ],
        "mimes": [
          "video/x-flv",
          "video/mp4",
          "application/x-shockwave-flash",
          "application/javascript"
        ],
        "linearity": 1,
        "boxingallowed": 1,
        "playbackmethod": [ 1, 3 ],
        "delivery": [ 2 ],
        "battr": [ 13, 14 ],
        "companionad": [
          {
            "id": "1234567893-1",
            "w": 300, "h": 250, "pos": 1,
            "battr": [ 13, 14 ],
            "expdir": [ 2, 4 ]
          },
          {
            "id": "1234567893-2",
            "w": 728, "h": 90, "pos": 1,
            "battr": [ 13, 14 ]
          }
        ],
        "companiontype": [ 1, 2 ]
      }
    }
  ],
  "site": {
    "id": "1345135123", "name": "Site ABCD",
    "domain": "siteabcd.com",
    "cat": [ "IAB2-1", "IAB2-2" ],
    "page": "http://siteabcd.com/page.htm",
    "ref": "http://referringsite.com/referringpage.htm",
    "privacypolicy": 1,
    "publisher": {
      "id": "pub11345", "name": "Publisher A"
    },
    "content": {
      "id": "1234567",
      "series": "All About Cars",
      "season": "2", "episode": 23, "title": "Car Show",
      "cat": [ "IAB2-2" ],
      "keywords": "keyword-a,keyword-b,keyword-c"
    }
  },
  "device": {
    "ip": "64.124.253.1",
    "ua": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.6; en-US; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16",
    "os": "OS X",
    "flashver": "10.1", "js": 1
  },
  "user": {
    "id": "456789876567897654678987656789",
    "buyeruid": "545678765467876567898765678987654",
    "data": [
      {
        "id": "6", "name": "Data Provider 1",
        "segment": [
          {
            "id": "12341318394918", "name": "auto intenders"
          },
          {
            "id": "1234131839491234", "name": "auto enthusiasts"
          }
        ]
      }
    ]
  }
}
```

#### 6.3.5 Example 5 – PMP with Direct Deal

Following is a basic example of a bid request for a banner ad with a direct deal. Some optional parameters are included in this example.

```json
{
  "id": "80ce30c53c16e6ede735f123ef6e32361bfc7b22",
  "at": 1, "cur": [ "USD" ],
  "imp": [
    {
      "id": "1", "bidfloor": 0.03,
      "banner": {
        "h": 250, "w": 300, "pos": 0
      },
      "pmp": {
        "private_auction": 1,
        "deals": [
          {
            "id":"AB-Agency1-0001",
            "at": 1, "bidfloor": 2.5,
            "wseat": [ "Agency1" ]
          },
          {
            "id":"XY-Agency2-0001",
            "at": 2, "bidfloor": 2,
            "wseat": [ "Agency2" ]
          }
        ]
      }
    }
  ],
  "site": {
    "id": "102855",
    "domain": "www.foobar.com",
    "cat": [ "IAB3-1" ],
    "page": "http://www.foobar.com/1234.html",
    "publisher": {
      "id": "8953", "name": "foobar.com",
      "cat": [ "IAB3-1" ],
      "domain": "foobar.com"
    }
  },
  "device": {
    "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.13 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2",
    "ip": "123.145.167.10"
  },
  "user": {
    "id": "55816b39711f9b5acf3b90e313ed29e51665f3d2"
  }
}
```

#### 6.3.6 Example 6 – Native Ad

Following is a basic example of a bid request for a Native ad; similar otherwise to the simple banner example in Section 6.3.1. Notice the `request` attribute in the `Native` object contains an encoded string of a native ad request that conforms to the Dynamic Native Ads API, specifically version 1.0 as indicated by the `ver` attribute.

Notice that the contents of the `request` attribute is a JSON encoded string of the Dynamic Native Ads request including its `native` top level object. This necessitates separate parsing steps for the outer OpenRTB structures and the Dynamic Native Ads request payload in order to enforce a separation of these specifications. The goal of this is to enable independent evolution of these specifications while avoiding the need to implement parsers for each pairwise combination thereof or to write custom JSON parsers.

```json
{
  "id": "80ce30c53c16e6ede735f123ef6e32361bfc7b22",
  "at": 1, "cur": [ "USD" ],
  "imp": [
    {
      "id": "1", "bidfloor": 0.03,
      "native": {
        "request": "{\"native\":{\"ver\":\"1.0\",\"assets\":[... ...]}}",
        "ver": "1.0",
        "api": [ 3 ], "battr": [ 13, 14 ]
      }
    }
  ],
  "site": {
    "id": "102855",
    "cat": [ "IAB3-1" ],
    "domain": "www.foobar.com",
    "page": "http://www.foobar.com/1234.html ",
    "publisher": {
      "id": "8953", "name": "foobar.com",
      "cat": [ "IAB3-1" ],
      "domain": "foobar.com"
    }
  },
  "device": {
    "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.13 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2",
    "ip": "123.145.167.10"
  },
  "user": {
    "id": "55816b39711f9b5acf3b90e313ed29e51665f3d2"
  }
}
```
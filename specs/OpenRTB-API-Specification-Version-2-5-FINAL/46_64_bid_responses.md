## 6.4 Bid Responses

### 6.4.1 Example 1 – Ad Served on Win Notice

Following is an example of a bid response with the ad served on win notice. The bid for this impression is a $9.43 CPM.

```json
{
    "id": "1234567890", "bidid": "abc1123", "cur": "USD",
    "seatbid": [
        {
            "seat": "512",
            "bid": [
                {
                    "id": "1", "impid": "102", "price": 9.43,
                    "nurl": "http://adserver.com/winnotice?impid=102",
                    "iurl": "http://adserver.com/pathtosampleimage",
                    "adomain": [ "advertiserdomain.com" ],
                    "cid": "campaign111",
                    "crid": "creative112",
                    "attr": [ 1, 2, 3, 4, 5, 6, 7, 12 ]
                }
            ]
        }
    ]
}
```

### 6.4.2 Example 2 – VAST XML Document Returned Inline

Following is an example of a bid response that returns the VAST document inline to be served. A few notes about specific fields in the example:

- The bid for this impression is a $3.00 CPM.
- Note that since there both a win notice URL and an inline VAST document in the `adm` attribute, which constitutes the ad markup. The win notice is still called, but if it were to return markup it would be ignored in favor of the contents of the `adm` attribute.

```json
{
  "id": "123",
  "seatbid": [
    {
      "bid": [
        {
          "id": "12345", "impid": "2", "price": 3.00,
          "nurl": "http://example.com/winnoticeurl",
          "adm": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<VAST version=\"2.0\">\n<Ad id=\"12345\">\n<InLine>\n<AdSystem version=\"1.0\">SpotXchange/AdSystem>\n<AdTitle>\n<![CDATA[Sample VAST]]>\n</AdTitle>\n<Impression>http://sample.com/Impression</Impression>\n<Description>\n<![CDATA[A sample VAST feed]]>\n</Description>\n <Creatives>\n<Creative sequence=\"1\" id=\"1\">\n<Linear>\n<Duration>00:00:30</Duration>\n <TrackingEvents>\n<Tracking event=\"close\">\n<![CDATA[http://sample.com/openrtb test]]>\n</Tracking>\n</TrackingEvents>\n<VideoClicks>\n<ClickThrough>\n<![CDATA[http://sample.com/openrtb test]]>\n</ClickThrough>\n</VideoClicks>\n<MediaFiles>\n<MediaFile delivery=\"progressive\" bitrate=\"256\" width=\"640\" height=\"480\" type=\"video/mp4\">\n<![CDATA[http://sample.com/video.mp4]]>\n</MediaFile>\n</MediaFiles>\n</Linear>\n</Creative>\n</Creatives>\n</InLine>\n</Ad>\n</VAST>"
        }
      ]
    }
  ]
}
```

### 6.4.3 Example 3 – Direct Deal Ad Served on Win Notice

Following is an example of a bid response with the ad served on win notice. The bid for this impression is a $5.00 CPM against a direct deal.

```json
{
  "id": "1234567890", "bidid": "abc1123", "cur": "USD",
  "seatbid": [
    {
      "seat": "512",
      "bid": [
        {
          "id": "1", "impid": "102", "price": 5.00,
          "dealid": "ABC-1234-6789",
          "nurl": "http://adserver.com/winnotice?impid=102",
          "adomain": [ "advertiserdomain.com" ],
          "iurl": "http://adserver.com/pathtosampleimage",
          "cid": "campaign111",
          "crid": "creative112",
          "adid": "314",
          "attr": [ 1, 2, 3, 4 ]
        }
      ]
    }
  ]
}
```

### 6.4.4 Example 4 – Native Markup Returned Inline

Following is an example of a bid response that returns a native ad inline to be served. The `adm` attribute contains an encoded string of a native ad request that conforms to the Dynamic Native Ads API and specifically the same version as that used for the request string. Alternatively, the `adm` attribute could have been omitted in favor of returning the native ad markup in the response to the win notice `nurl`.

```json
{
  "id": "123",
  "seatbid": [
    {
      "bid": [
        {
          "id": "12345", "impid": "2", "price": 3.00,
          "nurl": "http://example.com/winnoticeurl",
          "adm": "{\"native\":{\"ver\":\"1.0\",\"link\":{ ... },
\"imptrackers\":[ ... ],\"assets\":[ ... ]}}"
        }
      ]
    }
  ]
}
```
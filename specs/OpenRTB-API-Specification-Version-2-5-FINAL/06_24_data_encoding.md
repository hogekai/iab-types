## 2.4 Data Encoding

Compressing data sent between exchanges and bidders can be very beneficial. Compression greatly reduces the size of data transferred and thus saves network bandwidth for both exchanges and bidders. To realize this savings fully, compression should be enabled for both the bid request sent by the exchange and the bid response returned by the bidder.

Compression can be enabled on the bid response using standard HTTP 1.1 mechanisms. Most webservers already support gzip compression of response content and as such it is an ideal choice. For an exchange to signal they would like the response to be compressed, it should set the standard HTTP 1.1 Accept-Encoding header. The encoding value used should be "gzip".

```
Accept-Encoding: gzip
```

This header represents to bidders an indication by the exchange that it is capable of accepting gzip encoding for the response. If the bidder server supports this and is correctly configured, it will automatically respond with content that is gzip encoded. This will be indicated using the standard HTTP 1.1 Content-Encoding header.

```
Content-Encoding: gzip
```

To enable compression on the bid request, it must first be agreed upon between the exchange and the bidder that this is supported. This is similar to when a custom data format is used since the exchange has to know both format and encoding before sending the bid request. If the bidder supports it, the exchange should indicate it is sending a gzip compressed bid request by setting the HTTP 1.1 Content-Encoding header. The encoding value used should be "gzip".

```
Content-Encoding: gzip
```

If this header is not set then it is assumed that the request content isn't encoded. In HTTP 1.1, the Content-Encoding header is usually only used for response content. However by using this header for the request content as well we are able to indicate a request is compressed regardless of the data format used. This is useful since even binary data formats can benefit from being compressed.
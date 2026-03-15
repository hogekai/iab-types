The user wants me to clean up a markdown document that was converted from PDF. Let me apply the rules: join split sentences/paragraphs, fix heading hierarchy, remove duplicate headers/footers, and output only the cleaned markdown.

The input is quite short and appears to be a single section. It looks clean already - no split sentences, consistent heading hierarchy, no duplicate headers/footers. I'll output it as-is with minimal structural fixes.

## 2.1 Transport

The base protocol between an exchange and its bidders is HTTP. Specifically, HTTP POST is required for bid requests to accommodate greater payloads than HTTP GET and facilitate the use of binary representations. Win notices may be either POST or GET at the discretion of the exchange.

Calls returning content (e.g., any bid response, a win notice that returns markup) should return HTTP code 200. Calls returning no content in response to valid requests (e.g., an empty bid response which is one option for indicating no-bid, a win notice that does not return markup) should return HTTP 204. Invalid calls (e.g., a bid request containing a malformed or corrupt payload) should return HTTP 400 with no content.

**BEST PRACTICE:** One of the simplest and most effective ways of improving connection performance is to enable HTTP Persistent Connections, also known as Keep-Alive. This has a profound impact on overall performance by reducing connection management overhead as well as CPU utilization on both sides of the interface.
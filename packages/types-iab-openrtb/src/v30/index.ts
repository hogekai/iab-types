import { ContentContext } from "iab-adcom";
import { Item, Source } from "./Request";
import { Seatbid } from "./Response";
import { NoBidReasonCode } from "./enum";

export interface Openrtb {
  /**
   * Version of the Layer-3 OpenRTB specification (e.g., "3.0").
   */
  ver?: string;

  /**
   * Identifier of the Layer-4 domain model used to define items for sale, media associated with bids, etc.
   */
  domainspec?: string;

  /**
   * Specification version of the Layer-4 domain model referenced in the domainspec attribute.
   */
  domainver: string;

  /**
   * Bid request container. * Required only for request payloads. Refer to Object: Request.
   */
  request: Request;

  /**
   * Bid response container. * Required only for response payloads. Refer to Object: Response.
   */
  response: Response;
}

export interface Request {
  /**
   * Unique ID of the bid request; provided by the exchange.
   */
  id: string;

  /**
   * Indicator of test mode in which auctions are not billable,
   * where 0 = live mode, 1 = test mode.
   * @default 0
   */
  test?: 0 | 1;

  /**
   * Maximum time in milliseconds the exchange allows for bids to be received including Internet latency to avoid timeout.
   * This value supersedes any general guidance from the exchange.
   * If an exchange acts as an intermediary, it should decrease the outbound tmax value from what it received
   * to account for its latency and the additional internet hop.
   */
  tmax?: number;

  /**
   * Auction type, where 1 = First Price, 2 = Second Price Plus.
   * Values greater than 500 can be used for exchange-specific auction types.
   * @default 2
   */
  at?: number;

  /**
   * Array of accepted currencies for bids on this bid request using ISO-4217 alpha codes.
   * Recommended if the exchange accepts multiple currencies.
   * If omitted, the single currency of "USD" is assumed.
   * @default ["USD"]
   */
  cur?: string[];

  /**
   * Restriction list of buyer seats for bidding on this item.
   * Knowledge of buyer's customers and their seat IDs must be coordinated between parties beforehand.
   * Omission implies no restrictions.
   */
  seat?: string[];

  /**
   * Flag that determines the restriction interpretation of the seat array,
   * where 0 = block list, 1 = allow list.
   * @default 1
   */
  wseat?: 0 | 1;

  /**
   * Allows bidder to retrieve data set on its behalf in the exchange's cookie
   * (refer to cdata in Object: Response) if supported by the exchange.
   * The string must be in base85 cookie-safe characters.
   */
  cdata?: string;

  /**
   * A Source object that provides data about the inventory source and which entity makes the final decision.
   */
  source?: Source;

  /**
   * Array of Item objects (at least one) that constitute the set of goods being offered for sale.
   */
  item: Item[];

  /**
   * Flag to indicate if the Exchange can verify that the items offered represent all of the items available
   * in context (e.g., all impressions on a web page, all video spots such as pre/mid/post roll) to support road-blocking,
   * where 0 = no, 1 = yes.
   */
  package?: 0 | 1;

  /**
   * Layer-4 domain object structure that provides context for the items being offered conforming to the
   * specification and version referenced in openrtb.domainspec and openrtb.domainver.
   * For AdCOM v1.x, the objects allowed here all of which are optional are one of the DistributionChannel
   * subtypes (i.e., Site, App, or Dooh), User, Device, Regs, Restrictions, and any objects subordinate
   * to these as specified by AdCOM.
   */
  context?: ContentContext;

  /**
   * Optional exchange-specific extensions.
   */
  ext?: Record<string, unknown>;
}

export interface Response {
  /**
   * ID of the bid request to which this is a response;
   * must match the request.id attribute.
   */
  id: string;

  /**
   * Bidder generated response ID to assist with logging/tracking.
   */
  bidid?: string;

  /**
   * Reason for not bidding if applicable (see List: No-Bid Reason Codes).
   * Note that while many exchanges prefer a simple HTTP 204 response to indicate a no-bid,
   * responses indicating a reason code can be useful in debugging scenarios.
   */
  nbr?: NoBidReasonCode;

  /**
   * Bid currency using ISO-4217 alpha codes.
   * @default "USD"
   */
  cur?: string;

  /**
   * Allows bidder to set data in the exchange's cookie, which can be retrieved on bid requests
   * (refer to cdata in Object: Request) if supported by the exchange.
   * The string must be in base85 cookie-safe characters.
   */
  cdata?: string;

  /**
   * Array of Seatbid objects; 1+ required if a bid is to be made.
   */
  seatbid?: Seatbid[];

  /**
   * Optional demand source specific extensions.
   */
  ext?: Record<string, unknown>;
}

export * from "./Request";
export * from "./Response";
export * from "./enum";

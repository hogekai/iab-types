import { App, Device, Imp, Regs, Site, Source, User } from "./BidRequest";
import { SeatBid } from "./BidResponse";
import { NoBidReasonCode } from "./enum";

export interface BidRequest {
  /**
   * Unique ID of the bid request, provided by the exchange.
   */
  id: string;

  /**
   * Array of Imp objects (Section 3.2.4) representing the impressions offered. At least 1 Imp object is required.
   */
  imp: Imp[];

  /**
   * Details via a Site object (Section 3.2.13) about the publisher’s website. Only applicable and recommended for websites.
   */
  site?: Site;

  /**
   * Details via an App object (Section 3.2.14) about the publisher’s app (i.e., non-browser applications). Only applicable and recommended for apps.
   */
  app?: App;

  /**
   * Details via a Device object (Section 3.2.18) about the user’s device to which the impression will be delivered.
   */
  device?: Device;

  /**
   * Details via a User object (Section 3.2.20) about the human user of the device; the advertising audience.
   */
  user?: User;

  /**
   * Indicator of test mode in which auctions are not billable, where 0 = live mode, 1 = test mode.
   * @default 0
   */
  test?: 0 | 1;

  /**
   * Auction type, where 1 = First Price, 2 = Second Price Plus. Exchange-specific auction types can be defined using values greater than 500.
   * @default 2
   */
  at?: 1 | 2;

  /**
   * Maximum time in milliseconds the exchange allows for bids to be received including Internet latency to avoid timeout. This value supersedes any a priori guidance from the exchange.
   */
  tmax?: number;

  /**
   * White list of buyer seats (e.g., advertisers, agencies) allowed to bid on this impression. IDs of seats and knowledge of the
   * buyer’s customers to which they refer must be coordinated between bidders and the exchange a priori.
   * At most, only one of wseat and bseat should be used in the same request.
   * Omission of both implies no seat restrictions.
   */
  wseat?: string[];

  /**
   * Block list of buyer seats (e.g., advertisers, agencies) restricted from bidding on this impression.
   * IDs of seats and knowledge of the buyer’s customers to which they refer must be coordinated between bidders and the exchange a priori.
   * At most, only one of wseat and bseat should be used in the same request. Omission of both implies no seat restrictions.
   */
  bseat?: string[];

  /**
   * Flag to indicate if Exchange can verify that the impressions offered represent all of the impressions available in context (e.g., all on the web page, all video spots such as pre/mid/post roll) to support road-blocking. 0 = no or unknown, 1 = yes, the impressions offered represent all that are available.
   * @default 0
   */
  allimps?: 0 | 1;

  /**
   * Array of allowed currencies for bids on this bid request using ISO-4217 alpha codes. Recommended only if the exchange accepts multiple currencies.
   */
  cur?: string[];

  /**
   * White list of languages for creatives using ISO-639-1-alpha-2.
   * Omission implies no specific restrictions, but buyers would be advised to consider language attribute in the Device and/or Content objects if available.
   */
  wlang?: string[];

  /**
   * Block list of advertisers by their domains (e.g., "ford.com").
   */
  badv?: string[];

  /**
   * Block list of applications by their platform-specific exchange-independent application identifiers.
   * On Android, these should be bundle or package names (e.g., com.foo.mygame).
   * On iOS, these are numeric IDs.
   */
  bapp?: string[];

  /**
   * A Source object that provides data about the inventory source and which entity makes the final decision.
   */
  source?: Source;

  /**
   * A Regs object that specifies any industry, legal, or governmental regulations in force for this request.
   */
  regs?: Regs;

  /**
   * Placeholder for exchange-specific extensions to OpenRTB.
   */
  ext?: Record<string, unknown>;
}

export interface BidResponse {
  /**
   * ID of the bid request to which this is a response.
   */
  id: string;

  /**
   * Array of seatbid objects; 1+ required if a bid is to be made.
   */
  seatbid?: SeatBid[];

  /**
   * Bidder generated response ID to assist with logging/tracking.
   */
  bidid?: string;

  /**
   * Bid currency using ISO-4217 alpha codes.
   * @default USD
   */
  cur?: string;

  /**
   * Optional feature to allow a bidder to set data in the exchange’s cookie. The string must be in base85 cookie safe characters and be in any format. Proper JSON encoding must be used to include “escaped” quotation marks.
   */
  customdata?: string;

  /**
   * Reason for not bidding. Refer to List 5.24.
   */
  nbr?: NoBidReasonCode;

  /**
   * Placeholder for bidder-specific extensions to OpenRTB
   */
  ext?: Record<string, unknown>;
}

export * from "./enum";
export * from "./BidRequest";
export * from "./BidResponse";

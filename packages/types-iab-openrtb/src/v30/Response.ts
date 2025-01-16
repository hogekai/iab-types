import { Ad } from "iab-adcom/media";

/**
 * Represents a collection of bids from a specific buyer seat
 */
export interface Seatbid {
  /** ID of the buyer seat */
  seat?: string;
  /** Group bidding flag for multiple items */
  package?: 0 | 1;
  /** Array of bids */
  bid: Bid[];
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * Represents a bid to buy a specific item
 */
export interface Bid {
  /** Bidder generated tracking ID */
  id?: string;
  /** ID of the related item */
  item: string;
  /** Bid price in CPM */
  price: number;
  /** Reference to a private marketplace deal */
  deal?: string;
  /** Campaign ID or group identifier */
  cid?: string;
  /** Tactic ID for reporting */
  tactic?: string;
  /** Pending notice URL */
  purl?: string;
  /** Billing notice URL */
  burl?: string;
  /** Loss notice URL */
  lurl?: string;
  /** Auction to fulfillment time in seconds */
  exp?: number;
  /** Pre-uploaded media reference ID */
  mid?: string;
  /** Array of custom macro substitutions */
  macro?: Macro[];
  /** Layer-4 domain object for media specification */
  media?: Ad;
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * Represents a custom key/value pair for macro substitution in media markup
 * The full form of the macro to be substituted at runtime is ${CUSTOM_KEY}
 */
export interface Macro {
  /** Name of the buyer specific macro */
  key: string;
  /** Substitution value for the macro */
  value?: string;
  /** Extension field */
  ext?: Record<string, unknown>;
}

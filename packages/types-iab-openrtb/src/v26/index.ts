import { NoBidReasonCode } from "../v30/enum";
import { App, Device, DOOH, Imp, Regs, Site, Source, User } from "./BidRequest";
import { SeatBid } from "./BidResponse";

export interface BidRequest {
  /**
   * ID of the bid request, assigned by the exchange, and unique for the exchange's subsequent tracking of the responses.
   * The exchange may use different values for different recipients.
   */
  id: string;

  /**
   * Array of Imp objects (Section 3.2.4) representing the impressions offered.
   * At least 1 Imp object is required.
   */
  imp: Imp[];

  /**
   * Details via a Site object (Section 3.2.13) about the publisher's website.
   * Only applicable and recommended for websites.
   */
  site?: Site;

  /**
   * Details via an App object (Section 3.2.14) about the publisher's app (i.e., non-browser applications).
   * Only applicable and recommended for apps.
   */
  app?: App;

  /**
   * This object should be included if the ad supported content is a Digital Out-Of-Home screen.
   * A bid request with a DOOH object must not contain a site or app object.
   */
  dooh?: DOOH;

  /**
   * Details via a Device object (Section 3.2.18) about the user's device to which the impression will be delivered.
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
   * Auction type, where 1 = First Price, 2 = Second Price Plus.
   * Exchange-specific auction types can be defined using values 500 and greater.
   * @default 2
   */
  at?: number;

  /**
   * Maximum time in milliseconds the exchange allows for bids to be received including Internet latency to avoid timeout.
   * This value supersedes any a priori guidance from the exchange.
   */
  tmax?: number;

  /**
   * Allowed list of buyer seats (e.g., advertisers, agencies) allowed to bid on this impression.
   * IDs of seats and knowledge of the buyer's customers to which they refer must be coordinated between bidders and the exchange a priori.
   * At most, only one of wseat and bseat should be used in the same request.
   * Omission of both implies no seat restrictions.
   */
  wseat?: string[];

  /**
   * Block list of buyer seats (e.g., advertisers, agencies) restricted from bidding on this impression.
   * IDs of seats and knowledge of the buyer's customers to which they refer must be coordinated between bidders and the exchange a priori.
   * At most, only one of wseat and bseat should be used in the same request.
   * Omission of both implies no seat restrictions.
   */
  bseat?: string[];

  /**
   * Flag to indicate if Exchange can verify that the impressions offered represent all of the impressions available in context
   * (e.g., all on the web page, all video spots such as pre/mid/post roll) to support road-blocking.
   * 0 = no or unknown, 1 = yes, the impressions offered represent all that are available.
   * @default 0
   */
  allimps?: 0 | 1;

  /**
   * Array of allowed currencies for bids on this bid request using ISO-4217 alpha codes.
   * Recommended only if the exchange accepts multiple currencies.
   */
  cur?: string[];

  /**
   * Allowed list of languages for creatives using ISO-639-1-alpha-2.
   * Omission implies no specific restrictions, but buyers would be advised to consider language attribute in the Device and/or Content objects if available.
   * Only one of wlang or wlangb should be present.
   */
  wlang?: string[];

  /**
   * Allowed list of languages for creatives using IETF BCP 47.
   * Omission implies no specific restrictions, but buyers would be advised to consider language attribute in the Device and/or Content objects if available.
   * Only one of wlang or wlangb should be present.
   */
  wlangb?: string[];

  /**
   * Allowed advertiser categories using the specified category taxonomy.
   * The taxonomy to be used is defined by the cattax field.
   * If no cattax field is supplied IAB Content Taxonomy 1.0 is assumed.
   * Only one of acat or bcat should be present.
   */
  acat?: string[];

  /**
   * Blocked advertiser categories using the specified category taxonomy.
   * The taxonomy to be used is defined by the cattax field.
   * If no cattax field is supplied IAB Content Taxonomy 1.0 is assumed.
   * Only one of acat or bcat should be present.
   */
  bcat?: string[];

  /**
   * The taxonomy in use for bcat.
   * Refer to the AdCOM 1.0 list List: Category Taxonomies for values.
   * @default 1
   */
  cattax?: number;

  /**
   * Block list of advertisers by their domains (e.g., "ford.com").
   */
  badv?: string[];

  /**
   * Block list of applications by their app store IDs.
   * See OTT/CTV Store Assigned App Identification Guidelines for more details about expected strings for CTV app stores.
   * For mobile apps in Google Play Store, these should be bundle or package names (e.g. com.foo.mygame).
   * For apps in Apple App Store, these should be a numeric ID.
   */
  bapp?: string[];

  /**
   * A Source object (Section 3.2.2) that provides data about the inventory source and which entity makes the final decision.
   */
  source?: Source;

  /**
   * A Regs object (Section 3.2.3) that specifies any industry, legal, or governmental regulations in force for this request.
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
   * Optional feature to allow a bidder to set data in the exchange's cookie.
   * The string must be in base85 cookie safe characters and be in any format.
   * Proper JSON encoding must be used to include "escaped" quotation marks.
   */
  customdata?: string;

  /**
   * Reason for not bidding.
   * Refer to List: No-Bid Reason Codes in OpenRTB 3.0.
   */
  nbr?: NoBidReasonCode;

  /**
   * Placeholder for bidder-specific extensions to OpenRTB.
   */
  ext?: Record<string, unknown>;
}

export * from "../v30/enum";
export * from "./BidRequest";
export * from "./BidResponse";

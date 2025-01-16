import { AudioVideoCreativeSubtype } from "iab-adcom";
import { SlotPosition } from "iab-adcom";
import { MediaRating } from "iab-adcom";
import { APIFramework } from "iab-adcom";
import { CategoryTaxonomy, CreativeAttribute } from "iab-adcom";

/**
 * Represents the type of creative markup
 */
export enum CreativeMarkupType {
  /** Banner creative */
  Banner = 1,
  /** Video creative */
  Video = 2,
  /** Audio creative */
  Audio = 3,
  /** Native creative */
  Native = 4,
}

/**
 * Contains bidding information from a specific bidder seat
 */
export interface SeatBid {
  /** Array of bids for impressions */
  bid: Bid[];
  /** ID of the buyer seat */
  seat?: string;
  /** Group bidding flag */
  group?: 0 | 1;
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * Represents a bid for a specific impression
 */
export interface Bid {
  /** Bidder generated ID */
  id: string;
  /** Impression ID from bid request */
  impid: string;
  /** Bid price in CPM */
  price: number;
  /** Win notice URL */
  nurl?: string;
  /** Billing notice URL */
  burl?: string;
  /** Loss notice URL */
  lurl?: string;
  /** Ad markup */
  adm?: string;
  /** Preloaded ad ID */
  adid?: string;
  /** Advertiser domains */
  adomain?: string[];
  /** App store ID */
  bundle?: string;
  /** Campaign content preview URL */
  iurl?: string;
  /** Campaign ID */
  cid?: string;
  /** Creative ID */
  crid?: string;
  /** Tactic ID */
  tactic?: string;
  /** Category taxonomy */
  cattax?: CategoryTaxonomy;
  /** Content categories */
  cat?: string[];
  /** Creative attributes */
  attr?: CreativeAttribute[];
  /** Supported API frameworks */
  apis?: APIFramework[];
  /** Video response protocol */
  protocol?: AudioVideoCreativeSubtype;
  /** Creative media rating */
  qagmediarating?: MediaRating;
  /** Creative language (ISO-639-1-alpha-2) */
  language?: string;
  /** Creative language (IETF BCP 47) */
  langb?: string;
  /** Deal ID reference */
  dealid?: string;
  /** Creative width in DIPS */
  w?: number;
  /** Creative height in DIPS */
  h?: number;
  /** Relative width for ratio sizing */
  wratio?: number;
  /** Relative height for ratio sizing */
  hratio?: number;
  /** Auction to impression time in seconds */
  exp?: number;
  /** Creative duration in seconds */
  dur?: number;
  /** Creative markup type */
  mtype?: CreativeMarkupType;
  /** Position in video/audio ad pod */
  slotinpod?: SlotPosition;
  /** Extension field */
  ext?: Record<string, unknown>;
}

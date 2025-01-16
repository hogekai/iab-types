import { AudioVideoCreativeSubtype } from 'iab-adcom';
import { APIFramework } from 'iab-adcom';
import { CreativeAttribute } from 'iab-adcom';

/**
 * Represents a bid from a specific bidder seat in response to a bid request
 * Can contain multiple individual bids
 */
export interface SeatBid {
  /** Array of individual Bid objects */
  bid: Bid[];
  /** ID of the buyer seat on whose behalf this bid is made */
  seat?: string;
  /** Indicates if impressions must be won as a group */
  group?: 0 | 1;
  /** Placeholder for bidder-specific extensions to OpenRTB */
  ext?: Record<string, unknown>;
}

/**
 * Represents an individual bid for a specific impression
 * Contains the price and other attributes of the bid offer
 */
export interface Bid {
  /** Bidder generated bid ID to assist with logging/tracking */
  id: string;
  /** ID of the Imp object in the related bid request */
  impid: string;
  /** Bid price expressed as CPM */
  price: number;
  /** Win notice URL called by the exchange if the bid wins */
  nurl?: string;
  /** Billing notice URL called by the exchange when a winning bid becomes billable */
  burl?: string;
  /** Loss notice URL called by the exchange when a bid is known to have been lost */
  lurl?: string;
  /** Optional means of conveying ad markup in case the bid wins */
  adm?: string;
  /** ID of a preloaded ad to be served if the bid wins */
  adid?: string;
  /** Advertiser domain for block list checking */
  adomain?: string[];
  /** Platform-specific application identifier */
  bundle?: string;
  /** URL to an image representative of the content of the campaign */
  iurl?: string;
  /** Campaign ID to assist with ad quality checking */
  cid?: string;
  /** Creative ID to assist with ad quality checking */
  crid?: string;
  /** Tactic ID to enable buyers to label bids */
  tactic?: string;
  /** IAB content categories of the creative */
  cat?: string[];
  /** Set of attributes describing the creative */
  attr?: CreativeAttribute[];
  /** API required by the markup if applicable */
  api?: APIFramework;
  /** Video response protocol of the markup if applicable */
  protocol?: AudioVideoCreativeSubtype;
  /** Creative media rating per IQG guidelines */
  qagmediarating?: ImageSmoothingQuality;
  /** Language of the creative using ISO-639-1-alpha-2 */
  language?: string;
  /** Reference to the deal.id from the bid request */
  dealid?: string;
  /** Width of the creative in device independent pixels (DIPS) */
  w?: number;
  /** Height of the creative in device independent pixels (DIPS) */
  h?: number;
  /** Relative width of the creative when expressing size as a ratio */
  wratio?: number;
  /** Relative height of the creative when expressing size as a ratio */
  hratio?: number;
  /** Advisory as to the number of seconds the bidder is willing to wait */
  exp?: number;
  /** Placeholder for bidder-specific extensions to OpenRTB */
  ext?: Record<string, unknown>;
}
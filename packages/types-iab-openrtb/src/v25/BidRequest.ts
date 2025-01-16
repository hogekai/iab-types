import { ExpandableDirection } from "iab-adcom";
import { AudioVideoCreativeSubtype } from "iab-adcom";
import { PlaybackMethod } from "iab-adcom";
import { DeliveryMethod } from "iab-adcom";
import { CompanionType } from "iab-adcom";
import { ConnectionType } from "iab-adcom";
import { IPLocationService } from "iab-adcom";
import { VolumeNormalizationMode } from "iab-adcom";
import { ContentContext } from "iab-adcom";
import { MediaRating } from "iab-adcom";
import { ProductionQuality } from "iab-adcom";
import { FeedType } from "iab-adcom";
import { LocationType } from "iab-adcom";
import { DeviceType } from "iab-adcom";
import { PlacementPosition } from "iab-adcom";
import { PlaybackCessationMode } from "iab-adcom";
import { LinearityMode } from "iab-adcom";
import { APIFramework } from "iab-adcom";
import { SlotPosition } from "iab-adcom";
import { CreativeAttribute } from "iab-adcom";

/**
 * Describes the nature and behavior of the entity that is the source of the bid request
 * upstream from the exchange
 */
export interface Source {
  /** Entity responsible for the final impression sale decision */
  fd?: 0 | 1;
  /** Transaction ID that must be common across all participants in this bid request */
  tid?: string;
  /** Payment ID chain string containing embedded syntax described in the TAG Payment ID Protocol v1.0 */
  pchain?: string;
  /** Placeholder for exchange-specific extensions to OpenRTB */
  ext?: Record<string, unknown>;
}

/**
 * Contains any legal, governmental, or industry regulations that apply to the request
 */
export interface Regs {
  /** Flag indicating if this request is subject to the COPPA regulations */
  coppa?: 0 | 1;
  /** Placeholder for exchange-specific extensions to OpenRTB */
  ext?: Record<string, unknown>;
}

/**
 * Represents a metric associated with an impression
 */
export interface Metric {
  /** Type of metric being presented */
  type: string;
  /** Number representing the value of the metric */
  value: number;
  /** Source of the value */
  vendor?: string;
  /** Placeholder for exchange-specific extensions to OpenRTB */
  ext?: Record<string, unknown>;
}

/**
 * Describes the most general type of impression
 */
export interface Banner {
  /** Array of format objects representing the banner sizes permitted */
  format?: Array<{
    w: number;
    h: number;
  }>;
  /** Exact width in device independent pixels (DIPS) */
  w?: number;
  /** Exact height in device independent pixels (DIPS) */
  h?: number;
  /** Blocked banner ad types */
  btype?: number[];
  /** Blocked creative attributes */
  battr?: CreativeAttribute[];
  /** Ad position on screen */
  pos?: SlotPosition;
  /** Content MIME types supported */
  mimes?: string[];
  /** Indicates if the banner is in the top frame as opposed to an iframe */
  topframe?: 0 | 1;
  /** Directions in which the banner may expand */
  expdir?: ExpandableDirection[];
  /** List of supported API frameworks for this impression */
  api?: APIFramework[];
  /** Unique identifier for this banner object */
  id?: string;
  /** Companion banner rendering mode relative to the associated video */
  vcm?: 0 | 1;
  /** Placeholder for exchange-specific extensions to OpenRTB */
  ext?: Record<string, unknown>;
}

/**
 * Represents an in-stream video impression
 */
export interface Video {
  /** Content MIME types supported */
  mimes: string[];
  /** Minimum video ad duration in seconds */
  minduration?: number;
  /** Maximum video ad duration in seconds */
  maxduration?: number;
  /** Array of supported video protocols */
  protocols?: AudioVideoCreativeSubtype[];
  /** Width of the video player in device independent pixels (DIPS) */
  w?: number;
  /** Height of the video player in device independent pixels (DIPS) */
  h?: number;
  /** Indicates the start delay in seconds */
  startdelay?: number;
  /** Placement type for the impression */
  placement?: number;
  /** Indicates if the impression must be linear, nonlinear, etc */
  linearity?: LinearityMode;
  /** Indicates if the player will allow the video to be skipped */
  skip?: 0 | 1;
  /** Videos of total duration greater than this number of seconds can be skippable */
  skipmin?: number;
  /** Number of seconds a video must play before skipping is enabled */
  skipafter?: number;
  /** Sequence number for multiple ad impressions */
  sequence?: number;
  /** Blocked creative attributes */
  battr?: CreativeAttribute[];
  /** Maximum extended ad duration if extension is allowed */
  maxextended?: number;
  /** Minimum bit rate in Kbps */
  minbitrate?: number;
  /** Maximum bit rate in Kbps */
  maxbitrate?: number;
  /** Indicates if letter-boxing of 4:3 content into a 16:9 window is allowed */
  boxingallowed?: 0 | 1;
  /** Playback methods that may be in use */
  playbackmethod?: PlaybackMethod[];
  /** The event that causes playback to end */
  playbackend?: PlaybackCessationMode;
  /** Supported delivery methods */
  delivery?: DeliveryMethod[];
  /** Ad position on screen */
  pos?: PlacementPosition;
  /** Array of Banner objects if companion ads are available */
  companionad?: Banner[];
  /** List of supported API frameworks for this impression */
  api?: APIFramework[];
  /** Supported VAST companion ad types */
  companiontype?: CompanionType[];
  /** Placeholder for exchange-specific extensions to OpenRTB */
  ext?: Record<string, unknown>;
}

/**
 * Describes an ad placement or impression being auctioned
 */
export interface Imp {
  /** A unique identifier for this impression within the context of the bid request */
  id: string;
  /** An array of Metric object */
  metric?: Metric[];
  /** A Banner object; required if this impression is offered as a banner ad opportunity */
  banner?: Banner;
  /** A Video object; required if this impression is offered as a video ad opportunity */
  video?: Video;
  /** Name of ad mediation partner, SDK technology, or player responsible for rendering ad */
  displaymanager?: string;
  /** Version of ad mediation partner, SDK technology, or player */
  displaymanagerver?: string;
  /** Indicates if the ad is interstitial or full screen */
  instl?: 0 | 1;
  /** Identifier for specific ad placement or ad tag */
  tagid?: string;
  /** Minimum bid for this impression expressed in CPM */
  bidfloor?: number;
  /** Currency specified using ISO-4217 alpha codes */
  bidfloorcur?: string;
  /** Indicates the type of browser opened upon clicking the creative in an app */
  clickbrowser?: 0 | 1;
  /** Flag to indicate if the impression requires secure HTTPS URL creative assets and markup */
  secure?: 0 | 1;
  /** Array of exchange-specific names of supported iframe busters */
  iframebuster?: string[];
  /** Advisory as to the number of seconds that may elapse between the auction and the actual impression */
  exp?: number;
  /** Placeholder for exchange-specific extensions to OpenRTB */
  ext?: Record<string, unknown>;
}

/**
 * Represents an audio type impression that assumes compliance with the DAAST standard
 */
export interface Audio {
  /** Content MIME types supported */
  mimes: string[];
  /** Minimum audio ad duration in seconds */
  minduration?: number;
  /** Maximum audio ad duration in seconds */
  maxduration?: number;
  /** Array of supported audio protocols */
  protocols?: AudioVideoCreativeSubtype[];
  /** Indicates the start delay in seconds */
  startdelay?: number;
  /** Sequence number for multiple ad impressions */
  sequence?: number;
  /** Blocked creative attributes */
  battr?: CreativeAttribute[];
  /** Maximum extended ad duration if extension is allowed */
  maxextended?: number;
  /** Minimum bit rate in Kbps */
  minbitrate?: number;
  /** Maximum bit rate in Kbps */
  maxbitrate?: number;
  /** Supported delivery methods */
  delivery?: DeliveryMethod[];
  /** Array of Banner objects if companion ads are available */
  companionad?: Banner[];
  /** List of supported API frameworks for this impression */
  api?: APIFramework[];
  /** Supported DAAST companion ad types */
  companiontype?: CompanionType[];
  /** The maximum number of ads that can be played in an ad pod */
  maxseq?: number;
  /** Type of audio feed */
  feed?: FeedType;
  /** Indicates if the ad is stitched with audio content or delivered independently */
  stitched?: 0 | 1;
  /** Volume normalization mode */
  nvol?: VolumeNormalizationMode;
  /** Placeholder for exchange-specific extensions to OpenRTB */
  ext?: Record<string, unknown>;
}

/**
 * Represents a native type impression intended to blend seamlessly into surrounding content
 */
export interface Native {
  /** Request payload complying with the Native Ad Specification */
  request: string;
  /** Version of the Dynamic Native Ads API */
  ver?: string;
  /** List of supported API frameworks for this impression */
  api?: APIFramework[];
  /** Blocked creative attributes */
  battr?: CreativeAttribute[];
  /** Placeholder for exchange-specific extensions to OpenRTB */
  ext?: Record<string, unknown>;
}

/**
 * Represents an allowed size for a banner impression
 */
export interface Format {
  /** Width in device independent pixels (DIPS) */
  w?: number;
  /** Height in device independent pixels (DIPS) */
  h?: number;
  /** Relative width when expressing size as a ratio */
  wratio?: number;
  /** Relative height when expressing size as a ratio */
  hratio?: number;
  /** The minimum width in device independent pixels (DIPS) */
  wmin?: number;
  /** Placeholder for exchange-specific extensions to OpenRTB */
  ext?: Record<string, unknown>;
}

/**
 * Private marketplace container for direct deals between buyers and sellers
 */
export interface Pmp {
  /** Indicator of auction eligibility to seats named in the Direct Deals object */
  private_auction?: 0 | 1;
  /** Array of Deal objects that convey the specific deals */
  deals?: Deal[];
  /** Placeholder for exchange-specific extensions to OpenRTB */
  ext?: Record<string, unknown>;
}

/**
 * Represents a specific deal struck between a buyer and a seller
 */
export interface Deal {
  /** A unique identifier for the direct deal */
  id: string;
  /** Minimum bid for this impression expressed in CPM */
  bidfloor?: number;
  /** Currency specified using ISO-4217 alpha codes */
  bidfloorcur?: string;
  /** Optional override of the overall auction type of the bid request */
  at?: number;
  /** Whitelist of buyer seats allowed to bid on this deal */
  wseat?: string[];
  /** Array of advertiser domains allowed to bid on this deal */
  wadomain?: string[];
  /** Placeholder for exchange-specific extensions to OpenRTB */
  ext?: Record<string, unknown>;
}

/**
 * Represents a website where the ad will be displayed
 */
export interface Site {
  /** Exchange-specific site ID */
  id?: string;
  /** Site name */
  name?: string;
  /** Domain of the site */
  domain?: string;
  /** Array of IAB content categories of the site */
  cat?: string[];
  /** Array of IAB content categories that describe the current section */
  sectioncat?: string[];
  /** Array of IAB content categories that describe the current page */
  pagecat?: string[];
  /** URL of the page where the impression will be shown */
  page?: string;
  /** Referrer URL that caused navigation to the current page */
  ref?: string;
  /** Search string that caused navigation to the current page */
  search?: string;
  /** Indicates if the site has been programmed to optimize layout for mobile devices */
  mobile?: 0 | 1;
  /** Indicates if the site has a privacy policy */
  privacypolicy?: 0 | 1;
  /** Details about the Publisher of the site */
  publisher?: Publisher;
  /** Details about the Content within the site */
  content?: Content;
  /** Comma separated list of keywords about the site */
  keywords?: string;
  /** Placeholder for exchange-specific extensions to OpenRTB */
  ext?: Record<string, unknown>;
}

/**
 * Represents a non-browser application where the ad will be displayed
 */
export interface App {
  /** Exchange-specific app ID */
  id?: string;
  /** App name */
  name?: string;
  /** Platform-specific application identifier */
  bundle?: string;
  /** Domain of the app */
  domain?: string;
  /** App store URL for an installed app */
  storeurl?: string;
  /** Array of IAB content categories of the app */
  cat?: string[];
  /** Array of IAB content categories that describe the current section */
  sectioncat?: string[];
  /** Array of IAB content categories that describe the current page */
  pagecat?: string[];
  /** Application version */
  ver?: string;
  /** Indicates if the app has a privacy policy */
  privacypolicy?: 0 | 1;
  /** Indicates if the app is paid */
  paid?: 0 | 1;
  /** Details about the Publisher of the app */
  publisher?: Publisher;
  /** Details about the Content within the app */
  content?: Content;
  /** Comma separated list of keywords about the app */
  keywords?: string;
  /** Placeholder for exchange-specific extensions to OpenRTB */
  ext?: Record<string, unknown>;
}

/**
 * Describes the publisher of the media in which the ad will be displayed
 */
export interface Publisher {
  /** Exchange-specific publisher ID */
  id?: string;
  /** Publisher name */
  name?: string;
  /** Array of IAB content categories that describe the publisher */
  cat?: string[];
  /** Highest level domain of the publisher */
  domain?: string;
  /** Placeholder for exchange-specific extensions to OpenRTB */
  ext?: Record<string, unknown>;
}

/**
 * Describes the content in which the impression will appear
 */
export interface Content {
  /** ID uniquely identifying the content */
  id?: string;
  /** Episode number */
  episode?: number;
  /** Content title */
  title?: string;
  /** Content series */
  series?: string;
  /** Content season */
  season?: string;
  /** Artist credited with the content */
  artist?: string;
  /** Genre that best describes the content */
  genre?: string;
  /** Album to which the content belongs */
  album?: string;
  /** International Standard Recording Code */
  isrc?: string;
  /** Details about the content Producer */
  producer?: Record<string, unknown>;
  /** URL of the content */
  url?: string;
  /** Array of IAB content categories that describe the content producer */
  cat?: string[];
  /** Production quality */
  prodq?: ProductionQuality;
  /** Type of content */
  context?: ContentContext;
  /** Content rating */
  contentrating?: string;
  /** User rating of the content */
  userrating?: string;
  /** Media rating per IQG guidelines */
  qagmediarating?: MediaRating;
  /** Comma separated list of keywords describing the content */
  keywords?: string;
  /** Indicates if content is live */
  livestream?: 0 | 1;
  /** Source relationship indicator */
  sourcerelationship?: 0 | 1;
  /** Length of content in seconds */
  len?: number;
  /** Content language using ISO-639-1-alpha-2 */
  language?: string;
  /** Indicator of whether or not the content is embeddable */
  embeddable?: 0 | 1;
  /** Additional content data */
  data?: Array<Record<string, unknown>>;
  /** Placeholder for exchange-specific extensions to OpenRTB */
  ext?: Record<string, unknown>;
}

// Previous interfaces remain the same...

/**
 * Defines the producer of the content in which the ad will be shown
 */
export interface Producer {
  /** Content producer or originator ID */
  id?: string;
  /** Content producer or originator name */
  name?: string;
  /** Array of IAB content categories that describe the content producer */
  cat?: string[];
  /** Highest level domain of the content producer */
  domain?: string;
  /** Placeholder for exchange-specific extensions to OpenRTB */
  ext?: Record<string, unknown>;
}

/**
 * Provides information about the device through which the user is interacting
 */
export interface Device {
  /** Browser user agent string */
  ua?: string;
  /** Location of the device assumed to be the user's current location */
  geo?: Geo;
  /** Standard "Do Not Track" flag as set in the header by the browser */
  dnt?: 0 | 1;
  /** "Limit Ad Tracking" signal commercially endorsed */
  lmt?: 0 | 1;
  /** IPv4 address closest to device */
  ip?: string;
  /** IP address closest to device as IPv6 */
  ipv6?: string;
  /** The general type of device */
  devicetype?: DeviceType;
  /** Device make */
  make?: string;
  /** Device model */
  model?: string;
  /** Device operating system */
  os?: string;
  /** Device operating system version */
  osv?: string;
  /** Hardware version of the device */
  hwv?: string;
  /** Physical height of the screen in pixels */
  h?: number;
  /** Physical width of the screen in pixels */
  w?: number;
  /** Screen size as pixels per linear inch */
  ppi?: number;
  /** The ratio of physical pixels to device independent pixels */
  pxratio?: number;
  /** Support for JavaScript */
  js?: 0 | 1;
  /** Indicates if the geolocation API will be available to JavaScript code */
  geofetch?: 0 | 1;
  /** Version of Flash supported by the browser */
  flashver?: string;
  /** Browser language using ISO-639-1-alpha-2 */
  language?: string;
  /** Carrier or ISP */
  carrier?: string;
  /** Mobile carrier as the concatenated MCC-MNC code */
  mccmnc?: string;
  /** Network connection type */
  connectiontype?: ConnectionType;
  /** ID sanctioned for advertiser use in the clear */
  ifa?: string;
  /** Hardware device ID (e.g., IMEI); hashed via SHA1 */
  didsha1?: string;
  /** Hardware device ID (e.g., IMEI); hashed via MD5 */
  didmd5?: string;
  /** Platform device ID (e.g., Android ID); hashed via SHA1 */
  dpidsha1?: string;
  /** Platform device ID (e.g., Android ID); hashed via MD5 */
  dpidmd5?: string;
  /** MAC address of the device; hashed via SHA1 */
  macsha1?: string;
  /** MAC address of the device; hashed via MD5 */
  macmd5?: string;
  /** Placeholder for exchange-specific extensions to OpenRTB */
  ext?: Record<string, unknown>;
}

/**
 * Encapsulates various methods for specifying a geographic location
 */
export interface Geo {
  /** Latitude from -90.0 to +90.0, where negative is south */
  lat?: number;
  /** Longitude from -180.0 to +180.0, where negative is west */
  lon?: number;
  /** Source of location data */
  type?: LocationType;
  /** Estimated location accuracy in meters */
  accuracy?: number;
  /** Number of seconds since this geolocation fix was established */
  lastfix?: number;
  /** Service or provider used to determine geolocation from IP address */
  ipservice?: IPLocationService;
  /** Country code using ISO-3166-1-alpha-3 */
  country?: string;
  /** Region code using ISO-3166-2; 2-letter state code if USA */
  region?: string;
  /** Region of a country using FIPS 10-4 notation */
  regionfips104?: string;
  /** Google metro code */
  metro?: string;
  /** City using United Nations Code for Trade & Transport Locations */
  city?: string;
  /** Zip or postal code */
  zip?: string;
  /** Local time as the number +/- of minutes from UTC */
  utcoffset?: number;
  /** Placeholder for exchange-specific extensions to OpenRTB */
  ext?: Record<string, unknown>;
}

/**
 * Contains information known or derived about the human user of the device
 */
export interface User {
  /** Exchange-specific ID for the user */
  id?: string;
  /** Buyer-specific ID for the user as mapped by the exchange for the buyer */
  buyeruid?: string;
  /** Year of birth as a 4-digit integer */
  yob?: number;
  /** Gender, where "M" = male, "F" = female, "O" = known to be other */
  gender?: "M" | "F" | "O";
  /** Comma separated list of keywords, interests, or intent */
  keywords?: string;
  /** Optional feature to pass bidder data that was set in the exchange's cookie */
  customdata?: string;
  /** Location of the user's home base */
  geo?: Geo;
  /** Additional user data */
  data?: Data[];
  /** Placeholder for exchange-specific extensions to OpenRTB */
  ext?: Record<string, unknown>;
}

/**
 * Allows additional data about the related object to be specified
 */
export interface Data {
  /** Exchange-specific ID for the data provider */
  id?: string;
  /** Exchange-specific name for the data provider */
  name?: string;
  /** Array of Segment objects that contain the actual data values */
  segment?: Segment[];
  /** Placeholder for exchange-specific extensions to OpenRTB */
  ext?: Record<string, unknown>;
}

/**
 * Represents key-value pairs that convey specific units of data
 */
export interface Segment {
  /** ID of the data segment specific to the data provider */
  id?: string;
  /** Name of the data segment specific to the data provider */
  name?: string;
  /** String representation of the data segment value */
  value?: string;
  /** Placeholder for exchange-specific extensions to OpenRTB */
  ext?: Record<string, unknown>;
}

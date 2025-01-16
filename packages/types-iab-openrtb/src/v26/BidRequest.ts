import { CreativeAttribute, DOOHVenueType } from "iab-adcom";
import { DeliveryMethod } from "iab-adcom";
import { APIFramework } from "iab-adcom";
import { PodDeduplicationSetting } from "iab-adcom";
import { CompanionType } from "iab-adcom";
import { PlacementPosition } from "iab-adcom";
import { SlotPosition } from "iab-adcom";
import { PlaybackCessationMode } from "iab-adcom";
import { PlaybackMethod } from "iab-adcom";
import { AudioVideoCreativeSubtype } from "iab-adcom";
import { LinearityMode } from "iab-adcom";
import { ContentContext } from "iab-adcom";
import { ConnectionType } from "iab-adcom";
import { IPLocationService } from "iab-adcom";
import { MediaRating } from "iab-adcom";
import { LocationType } from "iab-adcom";
import { DeviceType } from "iab-adcom";
import { ExpandableDirection } from "iab-adcom";
import { VideoPlacementSubtype } from "iab-adcom";
import { StartDelayMode } from "iab-adcom";
import { FeedType } from "iab-adcom";
import { VolumeNormalizationMode } from "iab-adcom";
import { ProductionQuality } from "iab-adcom";
import { DOOHVenueTaxonomy } from "iab-adcom";
import { AutoRefreshTrigger } from "iab-adcom";
import { CategoryTaxonomy } from "iab-adcom";
import { AgentType } from "iab-adcom";
import { IDMatchMethod } from "iab-adcom";
import { UserAgentSource } from "iab-adcom";
import { DOOHMultiplierMeasurementSourceType } from "iab-adcom";

/**
 * Describes the nature and behavior of the bid request source entity
 */
export interface Source {
  /** Entity responsible for the final impression sale decision */
  fd?: 0 | 1;
  /** Transaction ID common across all participants */
  tid?: string;
  /** Payment ID chain string */
  pchain?: string;
  /** Supply chain object containing supply chain and completion status */
  schain?: SupplyChain;
  /** Placeholder for exchange-specific extensions */
  ext?: Record<string, unknown>;
}

/**
 * Contains legal, governmental, or industry regulations
 */
export interface Regs {
  /** Flag indicating if request is subject to COPPA regulations */
  coppa?: 0 | 1;
  /** Flag indicating if request is subject to GDPR regulations */
  gdpr?: 0 | 1;
  /** US privacy regulation signals */
  us_privacy?: string;
  /** Global Privacy Platform consent string */
  gpp?: string;
  /** Array of applicable GPP string sections */
  gpp_sid?: number[];
  /** Placeholder for exchange-specific extensions */
  ext?: Record<string, unknown>;
}

/**
 * Describes an ad placement or impression being auctioned
 */
export interface Imp {
  /** Unique identifier for this impression */
  id: string;
  /** Array of metrics */
  metric?: Metric[];
  /** Banner object for banner impression */
  banner?: Banner;
  /** Video object for video impression */
  video?: Video;
  /** Audio object for audio impression */
  audio?: Audio;
  /** Native object for native impression */
  native?: Native;
  /** Private marketplace deals */
  pmp?: Pmp;
  /** Ad mediation partner name */
  displaymanager?: string;
  /** Ad mediation partner version */
  displaymanagerver?: string;
  /** Indicates if ad is interstitial */
  instl?: 0 | 1;
  /** Ad placement or tag identifier */
  tagid?: string;
  /** Minimum bid for impression in CPM */
  bidfloor?: number;
  /** Currency for bidfloor */
  bidfloorcur?: string;
  /** Type of browser opened upon clicking */
  clickbrowser?: 0 | 1;
  /** Flag indicating secure HTTPS URL requirement */
  secure?: 0 | 1;
  /** Supported iframe busters */
  iframebuster?: string[];
  /** Indicates if user receives reward for viewing */
  rwdd?: 0 | 1;
  /** Server-side ad insertion status */
  ssai?: 0 | 1 | 2 | 3;
  /** Advisory time between auction and impression */
  exp?: number;
  /** Impression quantity multiplier */
  qty?: Record<string, unknown>;
  /** Estimated fulfillment timestamp */
  dt?: number;
  /** Auto-refresh details */
  refresh?: Record<string, unknown>;
  /** Placeholder for exchange-specific extensions */
  ext?: Record<string, unknown>;
}

/**
 * Provides insight metrics associated with an impression for decisioning
 * such as viewability rates and click-through rates
 */
export interface Metric {
  /** Type of metric being presented */
  type: string;
  /** Value of the metric (probabilities must be 0.0-1.0) */
  value: number;
  /** Source of the metric value */
  vendor?: string;
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * Represents a banner type impression
 */
export interface Banner {
  /** Array of permitted banner sizes */
  format?: Format[];
  /** Exact width in DIPS */
  w?: number;
  /** Exact height in DIPS */
  h?: number;
  /** Blocked banner ad types */
  btype?: number[];
  /** Blocked creative attributes */
  battr?: CreativeAttribute[];
  /** Ad position on screen */
  pos?: PlacementPosition;
  /** Supported content MIME types */
  mimes?: string[];
  /** Indicates if banner is in top frame */
  topframe?: 0 | 1;
  /** Allowed expansion directions */
  expdir?: ExpandableDirection[];
  /** Supported API frameworks */
  api?: APIFramework[];
  /** Unique identifier for banner */
  id?: string;
  /** Companion banner rendering mode */
  vcm?: 0 | 1;
  /** Placeholder for exchange-specific extensions */
  ext?: Record<string, unknown>;
}

/**
 * Represents a video impression
 */
export interface Video {
  /** Supported content MIME types */
  mimes: string[];
  /** Minimum video ad duration in seconds */
  minduration?: number;
  /** Maximum video ad duration in seconds */
  maxduration?: number;
  /** Start delay in seconds */
  startdelay?: StartDelayMode;
  /** Maximum number of ads in dynamic pod */
  maxseq?: number;
  /** Total time for dynamic video ad pod */
  poddur?: number;
  /** Supported video protocols */
  protocols?: AudioVideoCreativeSubtype[];
  /** Width of video player in DIPS */
  w?: number;
  /** Height of video player in DIPS */
  h?: number;
  /** Video ad pod identifier */
  podid?: string;
  /** Position of video ad pod in content */
  podseq?: number;
  /** Precise acceptable durations in seconds */
  rqddurs?: number[];
  /** Video placement type */
  plcmt?: VideoPlacementSubtype;
  /** Required linearity */
  linearity?: LinearityMode;
  /** Indicates if video is skippable */
  skip?: 0 | 1;
  /** Minimum duration for skippable video */
  skipmin?: number;
  /** Delay before skip enabled */
  skipafter?: number;
  /** Guaranteed slot position in pod */
  slotinpod?: SlotPosition;
  /** Minimum CPM per second */
  mincpmpersec?: number;
  /** Blocked creative attributes */
  battr?: CreativeAttribute[];
  /** Maximum extended duration */
  maxextended?: number;
  /** Minimum bit rate in Kbps */
  minbitrate?: number;
  /** Maximum bit rate in Kbps */
  maxbitrate?: number;
  /** Allows letter-boxing of 4:3 content */
  boxingallowed?: 0 | 1;
  /** Permitted playback methods */
  playbackmethod?: PlaybackMethod[];
  /** Playback end event */
  playbackend?: PlaybackCessationMode;
  /** Supported delivery methods */
  delivery?: DeliveryMethod[];
  /** Ad position on screen */
  pos?: PlacementPosition;
  /** Companion ad array */
  companionad?: Banner[];
  /** Supported API frameworks */
  api?: APIFramework[];
  /** Supported companion ad types */
  companiontype?: CompanionType[];
  /** Pod deduplication settings */
  poddedupe?: PodDeduplicationSetting[];
  /** Floor prices for various durations */
  durfloors?: Array<Record<string, unknown>>;
  /** Placeholder for exchange-specific extensions */
  ext?: Record<string, unknown>;
}

/**
 * Represents an audio type impression that complies with the VAST standard
 */
export interface Audio {
  /** Content MIME types supported */
  mimes: string[];
  /** Minimum audio ad duration in seconds */
  minduration?: number;
  /** Maximum audio ad duration in seconds */
  maxduration?: number;
  /** Total time for dynamic audio ad pod */
  poddur?: number;
  /** Supported audio protocols */
  protocols?: AudioVideoCreativeSubtype[];
  /** Start delay in seconds */
  startdelay?: StartDelayMode;
  /** Precise acceptable durations in seconds */
  rqddurs?: number[];
  /** Audio ad pod identifier */
  podid?: string;
  /** Position of audio ad pod in content */
  podseq?: number;
  /** Guaranteed slot position in pod */
  slotinpod?: SlotPosition;
  /** Minimum CPM per second */
  mincpmpersec?: number;
  /** Blocked creative attributes */
  battr?: CreativeAttribute[];
  /** Maximum extended duration */
  maxextended?: number;
  /** Minimum bit rate in Kbps */
  minbitrate?: number;
  /** Maximum bit rate in Kbps */
  maxbitrate?: number;
  /** Supported delivery methods */
  delivery?: DeliveryMethod[];
  /** Companion ad array */
  companionad?: Banner[];
  /** Supported API frameworks */
  api?: APIFramework[];
  /** Supported companion ad types */
  companiontype?: CompanionType[];
  /** Maximum number of ads in pod */
  maxseq?: number;
  /** Audio feed type */
  feed?: FeedType;
  /** Indicates if ad is stitched with content */
  stitched?: 0 | 1;
  /** Volume normalization mode */
  nvol?: VolumeNormalizationMode;
  /** Floor prices for various durations */
  durfloors?: Array<Record<string, unknown>>;
  /** Placeholder for exchange-specific extensions */
  ext?: Record<string, unknown>;
}

/**
 * Device information including hardware, platform, location, and carrier data
 */
export interface Device {
  /** Location of the device/user's current location */
  geo?: Geo;
  /** Standard "Do Not Track" flag from browser */
  dnt?: 0 | 1;
  /** "Limit Ad Tracking" signal from OS */
  lmt?: 0 | 1;
  /** Browser user agent string (raw) */
  ua?: string;
  /** Structured user agent information */
  sua?: UserAgent;
  /** IPv4 address */
  ip?: string;
  /** IPv6 address */
  ipv6?: string;
  /** Type of device */
  devicetype?: DeviceType;
  /** Device make (e.g., "Apple") */
  make?: string;
  /** Device model (e.g., "iPhone") */
  model?: string;
  /** Operating system (e.g., "iOS") */
  os?: string;
  /** OS version (e.g., "3.1.2") */
  osv?: string;
  /** Hardware version (e.g., "5S") */
  hwv?: string;
  /** Screen height in pixels */
  h?: number;
  /** Screen width in pixels */
  w?: number;
  /** Screen size as pixels per inch */
  ppi?: number;
  /** Pixel ratio (physical/device-independent) */
  pxratio?: number;
  /** JavaScript support flag */
  js?: 0 | 1;
  /** Geolocation API availability */
  geofetch?: 0 | 1;
  /** Flash version */
  flashver?: string;
  /** Browser language (ISO-639-1-alpha-2) */
  language?: string;
  /** Browser language (IETF BCP 47) */
  langb?: string;
  /** Carrier/ISP name */
  carrier?: string;
  /** Mobile carrier MCC-MNC code */
  mccmnc?: string;
  /** Network connection type */
  connectiontype?: ConnectionType;
  /** Advertising ID */
  ifa?: string;
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * Geographic location information
 */
export interface Geo {
  /** Latitude (-90.0 to +90.0) */
  lat?: number;
  /** Longitude (-180.0 to +180.0) */
  lon?: number;
  /** Source of location data */
  type?: LocationType;
  /** Location accuracy in meters */
  accuracy?: number;
  /** Seconds since geolocation fix */
  lastfix?: number;
  /** IP geolocation service */
  ipservice?: IPLocationService;
  /** Country code (ISO-3166-1-alpha-3) */
  country?: string;
  /** Region code (ISO-3166-2) */
  region?: string;
  /** Region code (FIPS 10-4) */
  regionfips104?: string;
  /** Google metro code */
  metro?: string;
  /** City code (UN) */
  city?: string;
  /** ZIP/postal code */
  zip?: string;
  /** UTC offset in minutes */
  utcoffset?: number;
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * User information for advertising audience
 */
export interface User {
  /** Exchange-specific user ID */
  id?: string;
  /** Buyer-specific user ID */
  buyeruid?: string;
  /** Keywords describing user interests */
  keywords?: string;
  /** Array of keywords about the user */
  kwarray?: string[];
  /** Custom bidder data */
  customdata?: string;
  /** User's home location */
  geo?: Geo;
  /** Additional user data */
  data?: Data[];
  /** GDPR consent string */
  consent?: string;
  /** Third party identity details */
  eids?: Array<EID>;
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * Represents a native type impression intended to blend into surrounding content
 */
export interface Native {
  /** Request payload complying with the Native Ad Specification */
  request: string;
  /** Version of the Dynamic Native Ads API */
  ver?: string;
  /** Supported API frameworks */
  api?: APIFramework[];
  /** Blocked creative attributes */
  battr?: CreativeAttribute[];
  /** Placeholder for exchange-specific extensions */
  ext?: Record<string, unknown>;
}

/**
 * Represents an allowed size for a banner impression
 */
export interface Format {
  /** Width in device independent pixels */
  w?: number;
  /** Height in device independent pixels */
  h?: number;
  /** Relative width for ratio sizing */
  wratio?: number;
  /** Relative height for ratio sizing */
  hratio?: number;
  /** Minimum width for ratio sizing */
  wmin?: number;
  /** Placeholder for exchange-specific extensions */
  ext?: Record<string, unknown>;
}

/**
 * Private marketplace container for direct deals
 */
export interface Pmp {
  /** Auction eligibility indicator */
  private_auction?: 0 | 1;
  /** Array of applicable deals */
  deals?: Deal[];
  /** Placeholder for exchange-specific extensions */
  ext?: Record<string, unknown>;
}

/**
 * Represents a specific deal between buyer and seller
 */
export interface Deal {
  /** Unique identifier for the direct deal */
  id: string;
  /** Minimum bid for impression in CPM */
  bidfloor?: number;
  /** Currency for bidfloor */
  bidfloorcur?: string;
  /** Auction type override */
  at?: number;
  /** Allowed buyer seats */
  wseat?: string[];
  /** Allowed advertiser domains */
  wadomain?: string[];
  /** Indicates if deal is guaranteed */
  guar?: 0 | 1;
  /** Minimum CPM per second */
  mincpmpersec?: number;
  /** Floor prices by duration */
  durfloors?: Array<Record<string, unknown>>;
  /** Placeholder for exchange-specific extensions */
  ext?: Record<string, unknown>;
}

/**
 * Describes website content for the ad
 */
export interface Site {
  /** Exchange-specific site ID */
  id?: string;
  /** Site name */
  name?: string;
  /** Domain of the site */
  domain?: string;
  /** Category taxonomy in use */
  cattax?: CategoryTaxonomy;
  /** Content categories of the site */
  cat?: string[];
  /** Categories of current section */
  sectioncat?: string[];
  /** Categories of current page */
  pagecat?: string[];
  /** Page URL */
  page?: string;
  /** Referrer URL */
  ref?: string;
  /** Search string */
  search?: string;
  /** Mobile optimization flag */
  mobile?: 0 | 1;
  /** Privacy policy flag */
  privacypolicy?: 0 | 1;
  /** Publisher details */
  publisher?: Publisher;
  /** Content details */
  content?: Record<string, unknown>;
  /** Comma separated keywords */
  keywords?: string;
  /** Array of keywords */
  kwarray?: string[];
  /** Inventory partner domain */
  inventorypartnerdomain?: string;
  /** Placeholder for exchange-specific extensions */
  ext?: Record<string, unknown>;
}

/**
 * Describes app content for the ad
 */
export interface App {
  /** Exchange-specific app ID */
  id?: string;
  /** App name */
  name?: string;
  /** App store ID */
  bundle?: string;
  /** Domain of the app */
  domain?: string;
  /** App store URL */
  storeurl?: string;
  /** Category taxonomy in use */
  cattax?: CategoryTaxonomy;
  /** Content categories of the app */
  cat?: string[];
  /** Categories of current section */
  sectioncat?: string[];
  /** Categories of current page */
  pagecat?: string[];
  /** App version */
  ver?: string;
  /** Privacy policy flag */
  privacypolicy?: 0 | 1;
  /** Paid app flag */
  paid?: 0 | 1;
  /** Publisher details */
  publisher?: Publisher;
  /** Content details */
  content?: Record<string, unknown>;
  /** Comma separated keywords */
  keywords?: string;
  /** Array of keywords */
  kwarray?: string[];
  /** Inventory partner domain */
  inventorypartnerdomain?: string;
  /** Placeholder for exchange-specific extensions */
  ext?: Record<string, unknown>;
}

/**
 * Describes the entity supplying inventory
 */
export interface Publisher {
  /** Exchange-specific seller ID */
  id?: string;
  /** Seller name */
  name?: string;
  /** Category taxonomy in use */
  cattax?: CategoryTaxonomy;
  /** Content categories of the publisher */
  cat?: string[];
  /** Highest level domain */
  domain?: string;
  /** Placeholder for exchange-specific extensions */
  ext?: Record<string, unknown>;
}

/**
 * Describes the content in which the impression will appear
 */
export interface Content {
  /** Unique ID for the content */
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
  /** Genre description */
  genre?: string;
  /** Album name */
  album?: string;
  /** International Standard Recording Code */
  isrc?: string;
  /** Content producer details */
  producer?: Producer;
  /** Content URL */
  url?: string;
  /** Category taxonomy in use */
  cattax?: CategoryTaxonomy;
  /** Content categories */
  cat?: string[];
  /** Production quality */
  prodq?: ProductionQuality;
  /** Content type */
  context?: ContentContext;
  /** Content rating */
  contentrating?: string;
  /** User rating */
  userrating?: string;
  /** Media rating per IQG guidelines */
  qagmediarating?: MediaRating;
  /** Comma separated keywords */
  keywords?: string;
  /** Array of keywords */
  kwarray?: string[];
  /** Live content flag */
  livestream?: 0 | 1;
  /** Source relationship indicator */
  sourcerelationship?: 0 | 1;
  /** Content length in seconds */
  len?: number;
  /** Content language (ISO-639-1-alpha-2) */
  language?: string;
  /** Content language (IETF BCP 47) */
  langb?: string;
  /** Embeddable content flag */
  embeddable?: 0 | 1;
  /** Additional data */
  data?: Data[];
  /** Network details */
  network?: Network;
  /** Channel details */
  channel?: Channel;
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * Defines the producer of the content
 */
export interface Producer {
  /** Content producer ID */
  id?: string;
  /** Content producer name */
  name?: string;
  /** Category taxonomy in use */
  cattax?: CategoryTaxonomy;
  /** Producer content categories */
  cat?: string[];
  /** Producer domain */
  domain?: string;
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * Describes the network showing the content
 */
export interface Network {
  /** Network identifier */
  id?: string;
  /** Network name */
  name?: string;
  /** Network domain */
  domain?: string;
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * Describes the channel showing the content
 */
export interface Channel {
  /** Channel identifier */
  id?: string;
  /** Channel name */
  name?: string;
  /** Channel domain */
  domain?: string;
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * Represents the supply chain of inventory transaction
 */
export interface SupplyChain {
  /** Indicates if chain contains all nodes */
  complete: 0 | 1;
  /** Array of supply chain nodes */
  nodes: SupplyChainNode[];
  /** Supply chain specification version */
  ver: string;
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * Represents a node in the supply chain
 */
export interface SupplyChainNode {
  /** Domain name of the system */
  asi: string;
  /** Seller account ID */
  sid: string;
  /** OpenRTB request ID */
  rid?: string;
  /** Company name */
  name?: string;
  /** Business domain name */
  domain?: string;
  /** Payment flow indicator */
  hp?: 0 | 1;
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * Extended identifier support for audience data
 */
export interface EID {
  /** Domain of entity adding the ID */
  inserter?: string;
  /** ID source domain */
  source: string;
  /** Technology provider domain */
  matcher?: string;
  /** Match method used */
  mm?: IDMatchMethod;
  /** Array of UIDs */
  uids: UID[];
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * Single user identifier for extended identifiers
 */
export interface UID {
  /** User identifier */
  id: string;
  /** Type of user agent */
  atype?: AgentType;
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * Represents browser or platform version information
 */
export interface BrandVersion {
  /** Brand identifier */
  brand: string;
  /** Version string */
  version: string;
}

/**
 * Structured user agent information
 */
export interface UserAgent {
  /** Browser information */
  browsers?: BrandVersion[];
  /** Platform information */
  platform?: BrandVersion;
  /** Mobile optimization preference */
  mobile?: 0 | 1;
  /** Device architecture */
  architecture?: string;
  /** Device bitness */
  bitness?: string;
  /** Device model */
  model?: string;
  /** Data source */
  source?: UserAgentSource;
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * Additional data about the user, content, or other contexts
 */
export interface Data {
  /** Data provider ID */
  id?: string;
  /** Data provider name */
  name?: string;
  /** Array of data segments */
  segment?: Segment[];
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * Key-value pairs for specific data units
 */
export interface Segment {
  /** Segment ID */
  id?: string;
  /** Segment name */
  name?: string;
  /** Segment value */
  value?: string;
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * Represents quantity information for billable events
 */
export interface Qty {
  /** Quantity of billable events */
  multiplier: number;
  /** Source type of quantity measurement */
  sourcetype?: DOOHMultiplierMeasurementSourceType;
  /** Measurement vendor domain */
  vendor?: string;
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * Represents Digital Out-Of-Home inventory
 */
export interface DOOH {
  /** Exchange provided placement ID */
  id?: string;
  /** DOOH placement name */
  name?: string;
  /** Out-of-home venue type */
  venuetype?: string[];
  /** 
   * Venue taxonomy in use 
   * @default 1
   **/
  venuetypetax?: DOOHVenueTaxonomy;
  /** Publisher details */
  publisher?: Publisher;
  /** Inventory owner domain */
  domain?: string;
  /** Keywords about the DOOH placement */
  keywords?: string;
  /** Content details */
  content?: Content;
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * Information about ad slot refresh behavior
 */
export interface Refresh {
  /** Refresh settings details */
  refsettings?: RefSettings[];
  /** Number of times slot has been refreshed */
  count?: number;
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * Details about how an ad slot refreshes
 */
export interface RefSettings {
  /** Type of auto refresh trigger */
  reftype?: AutoRefreshTrigger;
  /** Minimum refresh interval in seconds */
  minint?: number;
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * Price floors for time-based creatives
 */
export interface DurFloors {
  /** Low end of duration range */
  mindur?: number;
  /** High end of duration range */
  maxdur?: number;
  /** Minimum bid for impression in CPM */
  bidfloor?: number;
  /** Extension field */
  ext?: Record<string, unknown>;
}

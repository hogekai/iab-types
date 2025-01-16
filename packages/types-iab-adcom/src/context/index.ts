/**
 * This group of objects represent concepts that are interacting, presenting, enclosing, or are otherwise relating to the world in which impressions live. These include the user, their device, their location, the channel (e.g., site, app, digital out-of-home) with which they are interacting, the channel's publisher, its content, and any regulations that are in effect (e.g., COPPA, GDPR).
 * @see https://github.com/InteractiveAdvertisingBureau/AdCOM/blob/main/AdCOM%20v1.0%20FINAL.md#context-objects-
 */
import { AgentType, CategoryTaxonomy, DeviceType, DOOHVenueType, IPLocationService, LocationType } from "../enum";

/**
 * Abstract base interface for all distribution channels
 */
export interface DistributionChannel {
  /**
   * Vendor-specific unique identifier
   */
  id?: string;

  /**
   * Displayable name
   */
  name?: string;

  /**
   * Publisher details
   */
  pub?: Publisher;

  /**
   * Content details
   */
  content?: Content;
}

export interface Site extends DistributionChannel {
  /**
   * Domain of the site
   */
  domain?: string;

  /**
   * Content categories describing the site
   */
  cat?: string[];

  /**
   * Content categories describing the current section
   */
  sectcat?: string[];

  /**
   * Content categories describing the current page
   */
  pagecat?: string[];

  /**
   * Taxonomy for cat/sectcat/pagecat attributes
   */
  cattax?: CategoryTaxonomy;

  /**
   * Site has privacy policy
   * 0 = no
   * 1 = yes
   * @minimum 0
   * @maximum 1
   */
  privpolicy?: number;

  /**
   * Keywords about the site
   * @deprecated
   */
  keywords?: string;

  /**
   * Array of keywords about the site
   */
  kwarray?: string[];

  /**
   * URL of the page
   */
  page?: string;

  /**
   * Referrer URL
   */
  ref?: string;

  /**
   * Search string that caused navigation
   */
  search?: string;

  /**
   * Site optimized for mobile
   * 0 = no
   * 1 = yes
   * @minimum 0
   * @maximum 1
   */
  mobile?: number;

  /**
   * Page built with AMP HTML
   * 0 = no
   * 1 = yes
   * @minimum 0
   * @maximum 1
   */
  amp?: number;

  ext?: Record<string, unknown>;
}

export interface Publisher {
  /**
   * Vendor-specific unique publisher ID
   */
  id?: string;

  /**
   * Displayable name
   */
  name?: string;

  /**
   * Highest level domain
   */
  domain?: string;

  /**
   * Content categories
   */
  cat?: string[];

  /**
   * Taxonomy for cat attribute
   */
  cattax?: CategoryTaxonomy;

  ext?: Record<string, unknown>;
}

export interface App extends DistributionChannel {
  /**
   * Domain of the app
   */
  domain?: string;

  /**
   * Content categories describing the app
   */
  cat?: string[];

  /**
   * Content categories describing the current section
   */
  sectcat?: string[];

  /**
   * Content categories describing the current page/view
   */
  pagecat?: string[];

  /**
   * Taxonomy for cat/sectcat/pagecat attributes
   */
  cattax?: CategoryTaxonomy;

  /**
   * App has privacy policy
   * 0 = no
   * 1 = yes
   * @minimum 0
   * @maximum 1
   */
  privpolicy?: number;

  /**
   * Keywords about the app
   * @deprecated
   */
  keywords?: string;

  /**
   * Array of keywords about the app
   */
  kwarray?: string[];

  /**
   * Bundle or package name
   * @description Should NOT be app store IDs
   */
  bundle?: string;

  /**
   * App store ID
   */
  storeid?: string;

  /**
   * App store URL
   */
  storeurl?: string;

  /**
   * Application version
   */
  ver?: string;

  /**
   * Paid app indicator
   * 0 = free
   * 1 = paid
   * @default 0
   * @minimum 0
   * @maximum 1
   */
  paid?: number;

  ext?: Record<string, unknown>;
}

export interface Dooh extends DistributionChannel {
  /**
   * Type of out-of-home venue
   */
  venue?: DOOHVenueType;

  /**
   * Fixed location indicator
   * 1 = fixed
   * 2 = movable
   * @minimum 1
   * @maximum 2
   */
  fixed?: number;

  /**
   * Exposure time in seconds per view
   * @minimum 0
   */
  etime?: number;

  /**
   * Minimum DPI for text-based creative elements
   * @minimum 0
   */
  dpi?: number;

  ext?: Record<string, unknown>;
}

/**
 * Interface representing content in which an impression can appear
 */
export interface Content {
  /**
   * ID uniquely identifying the content
   */
  id?: string;

  /**
   * Episode number
   */
  episode?: number;

  /**
   * Content title
   */
  title?: string;

  /**
   * Content series
   */
  series?: string;

  /**
   * Content season (e.g., "Season 3")
   */
  season?: string;

  /**
   * Artist credited with the content
   */
  artist?: string;

  /**
   * Genre that best describes the content
   */
  genre?: string;

  /**
   * Album to which the content belongs
   */
  album?: string;

  /**
   * International Standard Recording Code
   */
  isrc?: string;

  /**
   * URL of the content
   */
  url?: string;

  /**
   * Content categories using taxonomy IDs
   */
  cat?: string[];

  /**
   * Taxonomy used for cat attribute
   */
  cattax?: number;

  /**
   * Production quality
   */
  prodq?: number;

  /**
   * Type of content (game, video, text, etc.)
   */
  context?: number;

  /**
   * Content rating (e.g., MPAA)
   */
  rating?: string;

  /**
   * User rating of the content
   */
  urating?: string;

  /**
   * Media rating per IQG guidelines
   */
  mrating?: number;

  /**
   * Comma-separated list of keywords
   * @deprecated
   */
  keywords?: string;

  /**
   * Array of keywords describing the content
   */
  kwarray?: string[];

  /**
   * Live content indicator
   * 0 = not live
   * 1 = live
   * @minimum 0
   * @maximum 1
   */
  live?: number;

  /**
   * Source relationship
   * 0 = indirect
   * 1 = direct
   * @minimum 0
   * @maximum 1
   */
  srcrel?: number;

  /**
   * Length of content in seconds
   */
  len?: number;

  /**
   * Content language using ISO-639-1-alpha-2
   */
  lang?: string;

  /**
   * Content language using IETF BCP 47
   */
  langb?: string;

  /**
   * Embedded content indicator
   * 0 = no
   * 1 = yes
   */
  embed?: number;

  /**
   * Content producer details
   */
  producer?: Producer;

  /**
   * Network details
   */
  network?: Network;

  /**
   * Channel details
   */
  channel?: Channel;

  /**
   * Additional user data
   */
  data?: Data[];

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

/**
 * Interface representing the producer of the content
 */
export interface Producer {
  /**
   * Vendor-specific unique producer identifier
   */
  id?: string;

  /**
   * Displayable name of the producer
   */
  name?: string;

  /**
   * Highest level domain of the producer
   */
  domain?: string;

  /**
   * Content categories describing the producer
   */
  cat?: string[];

  /**
   * Taxonomy used for cat attribute
   */
  cattax?: number;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

/**
 * Interface representing the network the ad will be displayed on
 */
export interface Network {
  /**
   * Unique identifier assigned by the publisher
   */
  id?: string;

  /**
   * Network name
   */
  name?: string;

  /**
   * Primary domain of the network
   */
  domain?: string;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

/**
 * Interface representing the channel the ad will be displayed on
 */
export interface Channel {
  /**
   * Unique identifier assigned by the publisher
   */
  id?: string;

  /**
   * Channel name
   */
  name?: string;

  /**
   * Primary domain of the channel
   */
  domain?: string;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

/**
 * Interface representing additional data
 */
export interface Data {
  /**
   * Vendor-specific ID for the data provider
   */
  id?: string;

  /**
   * Vendor-specific displayable name for the data provider
   */
  name?: string;

  /**
   * Array of data segments
   */
  segment?: Segment[];

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

/**
 * Interface representing a data segment
 */
export interface Segment {
  /**
   * ID of the data segment
   */
  id?: string;

  /**
   * Displayable name of the data segment
   */
  name?: string;

  /**
   * String representation of the data segment value
   */
  value?: string;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

/**
 * Interface representing user information
 */
export interface User {
  /**
   * Vendor-specific ID for the user
   * At least one of id or buyeruid is strongly recommended
   */
  id?: string;

  /**
   * Buyer-specific ID for the user as mapped by an exchange for the buyer
   * At least one of id or buyeruid is strongly recommended
   */
  buyeruid?: string;

  /** @deprecated Year of birth as a 4-digit integer */
  yob?: number;

  /** @deprecated Gender, where "M" = male, "F" = female, "O" = known to be other */
  gender?: "M" | "F" | "O";

  /**
   * @deprecated Comma-separated list of keywords, interests, or intent
   * Only one of 'keywords' or 'kwarray' may be present
   */
  keywords?: string;

  /**
   * Array of keywords describing the content
   * Only one of 'keywords' or 'kwarray' may be present
   */
  kwarray?: string[];

  /**
   * GDPR consent string if applicable
   */
  consent?: string;

  /**
   * Location of the user's home base
   */
  geo?: Geo;

  /**
   * Additional user data
   */
  data?: Data[];

  /**
   * Extended (third-party) identifiers for this user
   */
  eids?: ExtendedIdentifier[];

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

/**
 * Interface representing device information
 */
export interface Device {
  /**
   * The general type of device
   */
  type?: DeviceType;

  /**
   * Browser user agent string
   */
  ua?: string;

  /**
   * Structured user agent information
   */
  sua?: UserAgent;

  /**
   * ID sanctioned for advertiser use in the clear
   */
  ifa?: string;

  /**
   * Standard "Do Not Track" flag, 0 = tracking is unrestricted, 1 = do not track
   */
  dnt?: number;

  /**
   * "Limit Ad Tracking" signal, 0 = tracking is unrestricted, 1 = tracking must be limited
   */
  lmt?: number;

  /**
   * Device make (e.g., "Apple")
   */
  make?: string;

  /**
   * Device model
   */
  model?: string;

  /**
   * Device operating system
   */
  os?: number;

  /**
   * Device operating system version
   */
  osv?: string;

  /**
   * Hardware version of the device
   */
  hwv?: string;

  /**
   * Physical height of the screen in pixels
   */
  h?: number;

  /**
   * Physical width of the screen in pixels
   */
  w?: number;

  /**
   * Screen size as pixels per linear inch
   */
  ppi?: number;

  /**
   * The ratio of physical pixels to device independent pixels
   */
  pxratio?: number;

  /**
   * Support for JavaScript, 0 = no, 1 = yes
   */
  js?: number;

  /**
   * Browser language using ISO-639-1-alpha-2
   */
  lang?: string;

  /**
   * Browser language using IETF BCP 47
   */
  langb?: string;

  /**
   * IPv4 address closest to device
   */
  ip?: string;

  /**
   * IPv6 address closest to device
   */
  ipv6?: string;

  /**
   * The value of the "x-forwarded-for" header
   */
  xff?: string;

  /**
   * Indicator of truncation of IP attributes
   */
  iptr?: number;

  /**
   * Carrier or ISP
   */
  carrier?: string;

  /**
   * Mobile carrier as MCC-MNC code
   */
  mccmnc?: string;

  /**
   * MCC and MNC of the SIM card
   */
  mccmncsim?: string;

  /**
   * Network connection type
   */
  contype?: number;

  /**
   * Indicates if geolocation API will be available
   */
  geofetch?: number;

  /**
   * Location of the device
   */
  geo?: Geo;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

/**
 * Interface representing structured user agent information
 */
export interface UserAgent {
  /**
   * Array of browser identifiers
   */
  browsers?: BrandVersion[];

  /**
   * User agent's execution platform/OS
   */
  platform?: BrandVersion;

  /**
   * Mobile preference indicator
   */
  mobile?: number;

  /**
   * Device's major binary architecture
   */
  architecture?: string;

  /**
   * Device's bitness
   */
  bitness?: string;

  /**
   * Device model
   */
  model?: string;

  /**
   * Source of data used to create this object
   */
  source?: number;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

/**
 * Interface representing brand version information
 */
export interface BrandVersion {
  /**
   * A brand identifier
   */
  brand?: string;

  /**
   * Sequence of version components
   */
  version?: string[];

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

/**
 * Interface representing geographic location
 */
export interface Geo {
  /**
   * Source of location data
   */
  type?: LocationType;

  /**
   * Latitude from -90.0 to +90.0
   */
  lat?: number;

  /**
   * Longitude from -180.0 to +180.0
   */
  lon?: number;

  /**
   * Estimated location accuracy in meters
   */
  accur?: number;

  /**
   * Number of seconds since geolocation fix was established
   */
  lastfix?: number;

  /**
   * Service used to determine geolocation from IP
   */
  ipserv?: IPLocationService;

  /**
   * Country code using ISO-3166-1-alpha-2
   */
  country?: string;

  /**
   * Region code using ISO-3166-2
   */
  region?: string;

  /**
   * Regional marketing areas
   */
  metro?: string;

  /**
   * City using UN/LOCODE
   */
  city?: string;

  /**
   * ZIP or postal code
   */
  zip?: string;

  /**
   * Local time offset from UTC in minutes
   */
  utcoffset?: number;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

/**
 * Interface representing extended identifiers for audience data
 * Note: Exchange should ensure business agreements allow for sending this data
 * and compliance with regulatory agencies and ID vendors
 */
export interface ExtendedIdentifier {
  /**
   * Source or technology provider responsible for the set of included IDs
   * Expressed as a top-level domain
   */
  source?: string;

  /**
   * Array of extended ID UID objects from the given source
   */
  uids?: ExtendedIdentifierUID[];

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

/**
 * Interface representing Extended Identifier UIDs
 */
export interface ExtendedIdentifierUID {
  /**
   * Cookie or platform-native identifier
   */
  id?: string;

  /**
   * Type of user agent the match is from
   * It is highly recommended to set this, as many DSPs separate app-native IDs
   * from browser-based IDs and require a type value for ID resolution
   */
  atype?: AgentType;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

/**
 * Interface representing regulations in effect
 */
export interface Regs {
  /**
   * Flag indicating if COPPA regulations apply
   * 0 = no, 1 = yes
   */
  coppa?: 0 | 1;

  /**
   * Flag indicating if GDPR regulations apply
   * 0 = no, 1 = yes
   */
  gdpr?: 0 | 1;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

/**
 * Interface representing restrictions on ad responses
 */
export interface Restrictions {
  /**
   * Block list of content categories using IDs from the taxonomy indicated in cattax
   */
  bcat?: string[];

  /**
   * The taxonomy in use for the bcat attribute
   * @default 2
   */
  cattax?: number;

  /**
   * Block list of advertisers by their domains (e.g., "ford.com")
   */
  badv?: string[];

  /**
   * Block list of apps for which ads are disallowed
   * Should be bundle or package names (e.g., "com.foo.mygame")
   */
  bapp?: string[];

  /**
   * Block list of creative attributes
   */
  battr?: number[];

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

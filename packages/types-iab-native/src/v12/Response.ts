import {
  DataAssetType,
  ImageAssetType,
  EventType,
  EventTrackingMethod,
} from "./enum";

/**
 * Native Markup Response Object
 * The native object is the top level JSON object which identifies a native response
 */
export interface NativeResponse {
  /**
   * Version of the Native Markup version in use
   * @default "1.2"
   */
  ver?: string;

  /**
   * List of native ad's assets
   * Required if no assetsurl. Recommended as fallback even if assetsurl is provided
   */
  assets?: AssetResponse[];

  /**
   * URL of an alternate source for the assets object
   * Where present, overrides the asset object in the response
   */
  assetsurl?: string;

  /**
   * URL where a dynamic creative specification may be found for populating this ad
   * Where present, overrides the asset object in the response
   */
  dcourl?: string;

  /**
   * Destination Link. This is default link object for the ad
   */
  link: LinkResponse;

  /**
   * Array of impression tracking URLs
   * To be deprecated - replaced with eventtrackers
   * @deprecated
   */
  imptrackers?: string[];

  /**
   * Optional JavaScript impression tracker
   * To be deprecated - replaced with eventtrackers
   * @deprecated
   */
  jstracker?: string;

  /**
   * Array of tracking objects to run with the ad
   */
  eventtrackers?: EventTrackerResponse[];

  /**
   * URL of a page informing the user about the buyer's targeting activity
   */
  privacy?: string;

  /**
   * Custom JSON agreed to by the parties
   */
  ext?: Record<string, unknown>;
}

/**
 * Asset Response 
 * Corresponds to the Asset  in the request
 * Note: only one of {title,img,video,data} should be present in each object
 */
export interface AssetResponse {
  /**
   * Optional if assetsurl/dcourl is being used
   * Required if embedded asset is being used
   */
  id?: number;

  /**
   * Set to 1 if asset is required (bidder requires it to be displayed)
   * @default 0
   */
  required?: number;

  /** Title object for title assets */
  title?: TitleResponse;

  /** Image object for image assets */
  img?: ImageResponse;

  /** Video object for video assets */
  video?: VideoResponse;

  /** Data object for ratings, prices etc */
  data?: DataResponse;

  /**
   * Link object for call to actions
   * Applies if the asset item is activated (clicked)
   */
  link?: LinkResponse;

  /** Custom JSON agreed to by the parties */
  ext?: Record<string, unknown>;
}

/**
 * Title Response 
 */
export interface TitleResponse {
  /** The text associated with the text element */
  text: string;

  /**
   * The length of the title being provided
   * Required if using assetsurl/dcourl representation
   */
  len?: number;

  /** Custom JSON agreed to by the parties */
  ext?: Record<string, unknown>;
}

/**
 * Image Response 
 */
export interface ImageResponse {
  /**
   * The type of image element being submitted
   * Required for assetsurl or dcourl responses
   */
  type?: ImageAssetType;

  /** URL of the image asset */
  url: string;

  /**
   * Width of the image in pixels
   * Required for assetsurl/dcourl responses if multiple assets of same type submitted
   */
  w?: number;

  /**
   * Height of the image in pixels
   * Required for assetsurl/dcourl responses if multiple assets of same type submitted
   */
  h?: number;

  /** Custom JSON agreed to by the parties */
  ext?: Record<string, unknown>;
}

/**
 * Data Response 
 * Used for all miscellaneous elements of the native unit
 */
export interface DataResponse {
  /**
   * The type of data element being submitted
   * Required for assetsurl/dcourl responses
   */
  type?: DataAssetType;

  /**
   * The length of the data element being submitted
   * Required for assetsurl/dcourl responses
   */
  len?: number;

  /**
   * The formatted string of data to be displayed
   * Can contain a formatted value such as "5 stars" or "$10"
   */
  value: string;

  /** Custom JSON agreed to by the parties */
  ext?: Record<string, unknown>;
}

/**
 * Video Response 
 * Contains a conforming VAST tag as a value
 */
export interface VideoResponse {
  /** VAST XML */
  vasttag: string;
}

/**
 * Link Response 
 * Used for 'call to action' assets, or other links from the Native ad
 */
export interface LinkResponse {
  /** Landing URL of the clickable link */
  url: string;

  /** List of third-party tracker URLs to be fired on click of the URL */
  clicktrackers?: string[];

  /** Fallback URL for deeplink */
  fallback?: string;

  /** Custom JSON agreed to by the parties */
  ext?: Record<string, unknown>;
}

/**
 * Event Tracker Response 
 * Specifies the types of events the bidder wishes to track and the URLs/information to track them
 */
export interface EventTrackerResponse {
  /** Type of event to track */
  event: EventType;

  /** Type of tracking requested */
  method: EventTrackingMethod;

  /**
   * The URL of the image or js
   * Required for image or js, optional for custom
   */
  url?: string;

  /**
   * Custom tracking data
   * To be agreed individually with the exchange
   */
  customdata?: Record<string, unknown>;

  /** Custom JSON agreed to by the parties */
  ext?: Record<string, unknown>;
}

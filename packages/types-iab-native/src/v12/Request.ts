import {
  ContextSubType,
  ContextType,
  DataAssetType,
  EventTrackingMethod,
  EventType,
  ImageAssetType,
  PlacementType,
} from "./enum";

/**
 * Native Markup Request Object
 * Defines the native advertising opportunity available for bid via this bid request.
 */
export interface NativeRequest {
  /**
   * Version of the Native Markup version in use.
   * @default "1.2"
   */
  ver?: string;

  /**
   * The context in which the ad appears.
   * See Table of Context IDs for supported context types.
   */
  context?: ContextType;

  /**
   * A more detailed context in which the ad appears.
   * See Table of Context SubType IDs for supported context subtypes.
   */
  contextsubtype?: ContextSubType;

  /**
   * The design/format/layout of the ad unit being offered.
   * See Table of Placement Type IDs for supported placement types.
   */
  plcmttype?: PlacementType;

  /**
   * The number of identical placements in this Layout.
   * Refer to Multiplacement Bid Requests for further detail.
   * @default 1
   */
  plcmtcnt?: number;

  /**
   * 0 for the first ad, 1 for the second ad, and so on.
   * Note: This would generally NOT be used in combination with plcmtcnt
   * @default 0
   */
  seq?: number;

  /**
   * An array of Asset s.
   * Any bid response must comply with the array of elements expressed in the bid request.
   */
  assets: Asset[];

  /**
   * Whether the supply source / impression supports returning an assetsurl instead of an asset object.
   * 0 or the absence of the field indicates no such support.
   * @default 0
   */
  aurlsupport?: number;

  /**
   * Whether the supply source / impression supports returning a dco url instead of an asset object.
   * 0 or the absence of the field indicates no such support.
   * @default 0
   */
  durlsupport?: number;

  /**
   * Specifies what type of event tracking is supported
   */
  eventtrackers?: EventTracker[];

  /**
   * Set to 1 when the native ad supports buyer-specific privacy notice.
   * Set to 0 (or field absent) when the native ad doesn't support custom privacy links or if support is unknown.
   * @default 0
   */
  privacy?: number;

  /**
   * This object is a placeholder that may contain custom JSON agreed to by the parties
   * to support flexibility beyond the standard defined in this specification
   */
  ext?: Record<string, unknown>;
}

/**
 * Event Tracker  for the native request
 * Specifies the types of events the bidder can request to be tracked in the bid response
 */
export interface EventTracker {
  /**
   * Type of event available for tracking.
   * See Event Types table.
   */
  event: EventType;

  /**
   * Array of the types of tracking available for the given event.
   * See Event Tracking Methods table.
   */
  methods: EventTrackingMethod[];

  /**
   * This object is a placeholder that may contain custom JSON
   */
  ext?: Record<string, unknown>;
}

/**
 * Asset  for the native request
 * Note: each asset object may contain only one of title, img, data or video.
 */
export interface Asset {
  /**
   * Unique asset ID, assigned by exchange.
   * Typically a counter for the array.
   */
  id: number;

  /**
   * Set to 1 if asset is required (exchange will not accept a bid without it)
   * @default 0
   */
  required?: number;

  /**
   * Title object for title assets
   */
  title?: TitleRequest;

  /**
   * Image object for image assets
   */
  img?: ImageRequest;

  /**
   * Video object for video assets
   */
  video?: VideoRequest;

  /**
   * Data object for brand name, description, ratings, prices etc
   */
  data?: DataRequest;

  /**
   * This object is a placeholder that may contain custom JSON
   */
  ext?: Record<string, unknown>;
}

/**
 * Title Request 
 * To be used for title element of the Native ad
 */
export interface TitleRequest {
  /**
   * Maximum length of the text in the title element.
   * Recommended to be 25, 90, or 140.
   */
  len: number;

  /**
   * This object is a placeholder that may contain custom JSON
   */
  ext?: Record<string, unknown>;
}

/**
 * Image Request 
 * To be used for all image elements of the Native ad such as Icons, Main Image, etc.
 */
export interface ImageRequest {
  /**
   * Type ID of the image element supported by the publisher.
   * See Table Image Asset Types.
   */
  type?: ImageAssetType;

  /**
   * Width of the image in pixels
   */
  w?: number;

  /**
   * The minimum requested width of the image in pixels.
   * Should be used for any rescaling of images by the client.
   * Either w or wmin should be transmitted.
   */
  wmin?: number;

  /**
   * Height of the image in pixels
   */
  h?: number;

  /**
   * The minimum requested height of the image in pixels.
   * Should be used for any rescaling of images by the client.
   * Either h or hmin should be transmitted.
   */
  hmin?: number;

  /**
   * Whitelist of content MIME types supported
   * @default ["All types allowed"]
   */
  mimes?: string[];

  /**
   * This object is a placeholder that may contain custom JSON
   */
  ext?: Record<string, unknown>;
}

/**
 * Video Request 
 * To be used for all video elements supported in the Native Ad.
 * Corresponds to the Video object of OpenRTB.
 */
export interface VideoRequest {
  /**
   * Content MIME types supported.
   * e.g., "video/x-ms-wmv", "video/x-flv", "video/mp4"
   */
  mimes: string[];

  /**
   * Minimum video ad duration in seconds
   */
  minduration: number;

  /**
   * Maximum video ad duration in seconds
   */
  maxduration: number;

  /**
   * Array of video protocols the publisher can accept in the bid response.
   * See OpenRTB Table 'Video Bid Response Protocols'
   */
  protocols: number[];

  /**
   * This object is a placeholder that may contain custom JSON
   */
  ext?: Record<string, unknown>;
}

/**
 * Data Request 
 * To be used for all non-core elements of the native unit such as
 * Brand Name, Ratings, Review Count, Stars, Download count, descriptions etc.
 */
export interface DataRequest {
  /**
   * Type ID of the element supported by the publisher.
   * See Data Asset Types table.
   */
  type: DataAssetType;

  /**
   * Maximum length of the text in the element's response
   */
  len?: number;

  /**
   * This object is a placeholder that may contain custom JSON
   */
  ext?: Record<string, unknown>;
}

/**
 * The Media group of objects defines an actual ad including reference to its creative and metadata to enable proper rendering, restrictions compliance, event tracking, and quality auditing.
 * @see https://github.com/InteractiveAdvertisingBureau/AdCOM/blob/main/AdCOM%20v1.0%20FINAL.md#mediaobjects
 */

import {
  APIFramework,
  AudioVideoCreativeSubtype,
  AuditStatusCode,
  EventTrackingMethod,
  EventType,
  NativeDataAssetType,
  NativeImageAssetType,
} from "../enum";

export interface Ad {
  /**
   * ID of the creative;
   * unique at least throughout the scope of a vendor (e.g., an exchange or buying platform).
   * Note that multiple instances of the same ad when used in transactions must have the same ID.
   */
  id: string;

  /**
   * Advertiser domain;
   * top two levels only (e.g., "ford.com"). This can be an array for the case of rotating creatives.
   */
  adomain?: string[];

  /**
   * When the product of the ad is an app, the unique ID of that app as a bundle or package name.
   * This should NOT be an app store ID (e.g., no iTunes store IDs).
   * This can be an array of for the case of rotating creatives.
   */
  bundle?: string[];

  /**
   * URL without cache-busting to an image that is representative of the ad content
   * for cursory level ad quality checking.
   */
  iurl?: string;

  /**
   * Array of content categories describing the ad using IDs from the taxonomy indicated in cattax.
   * Implementer should ensure compliance with regional legislation around data usage and sharing.
   */
  cat?: string[];

  /**
   * The taxonomy in use for the cat attribute.
   * @default 2
   */
  cattax?: number;

  /**
   * Language of the creative using ISO-639-1-alpha-2.
   */
  lang?: string;

  /**
   * Set of attributes describing the creative.
   */
  attr?: number[];

  /**
   * Flag to indicate if the creative is secure (i.e., uses HTTPS for all assets and markup)
   * 0 = no,
   * 1 = yes
   * @minimum 0
   * @maximum 1
   */
  secure?: 0 | 1;

  /**
   * Media rating per IQG guidelines.
   */
  mrating?: number;

  /**
   * Timestamp of the original instantiation of this ad in Unix format (milliseconds since the epoch).
   */
  init?: number;

  /**
   * Timestamp of most recent modification to this ad in Unix format (milliseconds since the epoch).
   */
  lastmod?: number;

  /**
   * Media Subtype Object that indicates this is a display ad.
   * Required if no other media subtype object is specified.
   */
  display?: Display;

  /**
   * Media Subtype Object that indicates this is a video ad.
   * Required if no other media subtype object is specified.
   */
  video?: Video;

  /**
   * Media Subtype Object that indicates this is an audio ad.
   * Required if no other media subtype object is specified.
   */
  audio?: Audio;

  /**
   * An object depicting the audit status of the ad.
   */
  audit?: Audit;

  /**
   * Optional vendor-specific extensions.
   */
  ext?: Record<string, unknown>;
}

export interface Display {
  /**
   * Mime type of the ad (e.g., "image/jpeg").
   */
  mime?: string;

  /**
   * API required by the ad if applicable.
   * @description Array of API framework IDs
   */
  api?: APIFramework;

  /**
   * Subtype of display creative.
   * @description Creative subtype ID for display ads
   */
  ctype?: number;

  /**
   * Absolute width of the creative in device independent pixels (DIPS)
   * @description Width in DIPS for non-native ads
   * @minimum 0
   */
  w?: number;

  /**
   * Absolute height of the creative in device independent pixels (DIPS)
   * @description Height in DIPS for non-native ads
   * @minimum 0
   */
  h?: number;

  /**
   * Relative width of the creative when expressing size as a ratio
   * @description Relative width for non-native ads
   * @minimum 0
   */
  wratio?: number;

  /**
   * Relative height of the creative when expressing size as a ratio
   * @description Relative height for non-native ads
   * @minimum 0
   */
  hratio?: number;

  /**
   * URL of a page informing the user about a buyer's targeting activity
   */
  priv?: string;

  /**
   * General display markup (e.g., HTML, AMPHTML)
   */
  adm?: string;

  /**
   * URL for retrieving display markup
   */
  curl?: string;

  /**
   * Structured banner image object
   */
  banner?: Banner;

  /**
   * Structured native object
   */
  native?: Native;

  /**
   * Array of tracking events
   */
  event?: Event[];

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

export interface Banner {
  /**
   * URL that will return the image
   */
  img: string;

  /**
   * Destination link
   */
  link?: LinkAsset;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

export interface Native {
  /**
   * Default destination link for the native ad
   */
  link?: LinkAsset;

  /**
   * Array of assets comprising the native ad
   */
  asset?: Asset[];

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

export interface Asset {
  /**
   * Reference ID from AssetFormat.id
   * @minimum 0
   */
  id?: number;

  /**
   * Indicates if the asset is required to be displayed
   * @default 0
   */
  req?: 0 | 1;

  /**
   * Title asset subtype
   */
  title?: TitleAsset;

  /**
   * Image asset subtype
   */
  image?: ImageAsset;

  /**
   * Video asset subtype
   */
  video?: VideoAsset;

  /**
   * Data asset subtype
   */
  data?: DataAsset;

  /**
   * Link asset subtype
   */
  link?: LinkAsset;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

export interface LinkAsset {
  /**
   * Landing URL of the clickable link
   */
  url: string;

  /**
   * Fallback URL for deep-link
   */
  urlfb?: string;

  /**
   * Third-party tracker URLs
   */
  trkr?: string[];

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

export interface TitleAsset {
  /**
   * Text content
   */
  text: string;

  /**
   * Length of the text content
   * @minimum 0
   */
  len?: number;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

export interface ImageAsset {
  /**
   * URL that returns the image
   * @format uri
   */
  url: string;

  /**
   * Width of the image in DIPS
   * @minimum 0
   */
  w?: number;

  /**
   * Height of the image in DIPS
   * @minimum 0
   */
  h?: number;

  /**
   * Type of image asset
   * @minimum 0
   */
  type?: NativeImageAssetType;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

export interface VideoAsset {
  /**
   * Video markup
   */
  adm?: string;

  /**
   * URL that returns the video markup
   * @format uri
   */
  curl?: string;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

export interface DataAsset {
  /**
   * Formatted string of data to be displayed
   */
  value: string;

  /**
   * Length of the value contents
   * @minimum 0
   */
  len?: number;

  /**
   * Type of data asset
   * @minimum 0
   */
  type?: NativeDataAssetType;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

export interface Event {
  /**
   * Type of event to track
   * @minimum 0
   */
  type: EventType;

  /**
   * Method of tracking requested
   * @minimum 0
   */
  method: EventTrackingMethod;

  /**
   * APIs used by the tracker
   */
  api?: APIFramework[];

  /**
   * URL of the tracking pixel or JavaScript tag
   */
  url?: string;

  /**
   * Vendor-specific key-value pairs
   */
  cdata?: Record<string, unknown>;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

export interface Video {
  /**
   * Mime types of the ad creatives
   */
  mime?: string[];

  /**
   * API required by the ad
   */
  api?: APIFramework[];

  /**
   * Subtype of video creative
   * @minimum 0
   */
  ctype?: AudioVideoCreativeSubtype;

  /**
   * Duration in seconds
   * @minimum 0
   */
  dur?: number;

  /**
   * Video markup
   */
  adm?: string;

  /**
   * URL for retrieving markup
   */
  curl?: string;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

export interface Audio {
  /**
   * Mime types of the ad creatives
   */
  mime?: string[];

  /**
   * API required by the ad
   */
  api?: APIFramework[];

  /**
   * Subtype of audio creative
   * @minimum 0
   */
  ctype?: AudioVideoCreativeSubtype;

  /**
   * Duration in seconds
   * @minimum 0
   */
  dur?: number;

  /**
   * Audio markup
   */
  adm?: string;

  /**
   * URL for retrieving markup
   */
  curl?: string;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

export interface Audit {
  /**
   * Audit status code
   * @minimum 0
   */
  status?: AuditStatusCode;

  /**
   * Human-readable explanations
   */
  feedback?: string[];

  /**
   * Original instantiation timestamp
   * @minimum 0
   */
  init?: number;

  /**
   * Last modification timestamp
   * @minimum 0
   */
  lastmod?: number;

  /**
   * Correction object
   */
  corr?: Partial<Ad>;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

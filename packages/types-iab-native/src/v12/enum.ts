/**
 * Context Type IDs - The context in which the ad appears
 */
export const ContextType = {
  /** Content-centric context such as newsfeed, article, image gallery, video gallery */
  CONTENT: 1,
  /** Social-centric context such as social network feed, email, chat */
  SOCIAL: 2,
  /** Product context such as product listings, details, recommendations, reviews */
  PRODUCT: 3,
} as const;

export type ContextType = typeof ContextType[keyof typeof ContextType];

/**
 * Context SubType IDs - Next-level context in which the ad appears
 */
export const ContextSubType = {
  /** General or mixed content */
  GENERAL_CONTENT: 10,
  /** Primarily article content */
  ARTICLE: 11,
  /** Primarily video content */
  VIDEO: 12,
  /** Primarily audio content */
  AUDIO: 13,
  /** Primarily image content */
  IMAGE: 14,
  /** User-generated content - forums, comments, etc */
  USER_GENERATED: 15,
  /** General social content such as a general social network */
  GENERAL_SOCIAL: 20,
  /** Primarily email content */
  EMAIL: 21,
  /** Primarily chat/IM content */
  CHAT: 22,
  /** Content focused on selling products */
  PRODUCT_SALES: 30,
  /** Application store/marketplace */
  APP_STORE: 31,
  /** Product reviews site primarily */
  REVIEWS: 32,
} as const;

export type ContextSubType = typeof ContextSubType[keyof typeof ContextSubType];

/**
 * Placement Type IDs - The format of the ad you are purchasing
 */
export const PlacementType = {
  /** In the feed of content */
  FEED_CONTENT: 1,
  /** In the atomic unit of the content */
  ATOMIC_CONTENT: 2,
  /** Outside the core content */
  OUTSIDE_CORE: 3,
  /** Recommendation widget */
  RECOMMENDATION_WIDGET: 4,
} as const;

export type PlacementType = typeof PlacementType[keyof typeof PlacementType];

/**
 * Data Asset Types - Common asset element types of native advertising
 */
export const DataAssetType = {
  /** Sponsored By message */
  SPONSORED: 1,
  /** Descriptive text */
  DESC: 2,
  /** Rating of the product */
  RATING: 3,
  /** Number of social ratings or likes */
  LIKES: 4,
  /** Number of downloads/installs */
  DOWNLOADS: 5,
  /** Price for product */
  PRICE: 6,
  /** Sale price */
  SALE_PRICE: 7,
  /** Phone number */
  PHONE: 8,
  /** Address */
  ADDRESS: 9,
  /** Additional descriptive text */
  DESC2: 10,
  /** Display URL */
  DISPLAY_URL: 11,
  /** CTA description */
  CTA_TEXT: 12,
} as const;

export type DataAssetType = typeof DataAssetType[keyof typeof DataAssetType];

/**
 * Image Asset Types - Common image asset element types
 */
export const ImageAssetType = {
  /** Icon image for app icon, brand logo, or similar */
  ICON: 1,
  /** Large image preview for the ad */
  MAIN: 3,
} as const;

export type ImageAssetType = typeof ImageAssetType[keyof typeof ImageAssetType];

/**
 * Event Types - Types of events that can be tracked
 */
export const EventType = {
  /** Impression */
  IMPRESSION: 1,
  /** Visible impression using MRC definition at 50% in view for 1 second */
  VIEWABLE_MRC_50: 2,
  /** 100% in view for 1 second */
  VIEWABLE_MRC_100: 3,
  /** Visible impression for video using MRC definition at 50% in view for 2 seconds */
  VIEWABLE_VIDEO_50: 4,
} as const;

export type EventType = typeof EventType[keyof typeof EventType];

/**
 * Event Tracking Methods - Methods available for tracking events
 */
export const EventTrackingMethod = {
  /** Image-pixel tracking */
  IMG: 1,
  /** Javascript-based tracking */
  JS: 2,
} as const;

export type EventTrackingMethod = typeof EventTrackingMethod[keyof typeof EventTrackingMethod];
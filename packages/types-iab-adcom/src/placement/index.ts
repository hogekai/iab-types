/**
 * The Placement group includes objects that define the set of allowed ads for a given impression. This can include mechanical information (e.g., sizes, supported mime types and other rendering options), placement details and positioning, various restrictions lists (e.g., advertiser domains, content categories), and more.
 * @see https://github.com/InteractiveAdvertisingBureau/AdCOM/blob/main/AdCOM%20v1.0%20FINAL.md#placement-objects-
 */
import {
  APIFramework,
  AudioVideoCreativeSubtype,
  ClickType,
  CompanionType,
  DeliveryMethod,
  DisplayContextType,
  DisplayCreativeSubtype,
  DisplayPlacementType,
  EventTrackingMethod,
  EventType,
  ExpandableDirection,
  FeedType,
  LinearityMode,
  NativeDataAssetType,
  NativeImageAssetType,
  PlacementPosition,
  PlaybackCessationMode,
  PlaybackMethod,
  PodSequence,
  SizeUnit,
  SlotPosition,
  StartDelayMode,
  VideoPlacementSubtype,
  VolumeNormalizationMode,
} from "../enum";

export interface Placement {
  /**
   * Identifier for specific ad placement or ad tag
   * @description unique within a distribution channel
   */
  tagid?: string;

  /**
   * Server-side ad insertion status and its impact on asset and tracker retrieval
   * 0 = status unknown
   * 1 = all client-side
   * 2 = assets stitched server-side but tracking pixels fired client-side
   * 3 = all server-side
   * @minimum 0
   * @maximum 3
   */
  ssai?: number;

  /**
   * Name of ad mediation partner, SDK technology, or player responsible for rendering ad
   */
  sdk?: string;

  /**
   * Version of the SDK specified in the sdk attribute
   */
  sdkver?: string;

  /**
   * Indicates whether the user receives a reward for viewing the ad
   * 0 = no
   * 1 = yes
   * @minimum 0
   * @maximum 1
   */
  reward?: number;

  /**
   * Allow list of permitted languages using ISO-639-1-alpha-2
   */
  wlang?: string[];

  /**
   * Flag to indicate if the creative is secure
   * 0 = no
   * 1 = yes
   * @minimum 0
   * @maximum 1
   */
  secure?: number;

  /**
   * Indicates if including markup is supported
   * 0 = no
   * 1 = yes
   * @minimum 0
   * @maximum 1
   */
  admx?: number;

  /**
   * Indicates if retrieving markup via URL reference is supported
   * 0 = no
   * 1 = yes
   * @minimum 0
   * @maximum 1
   */
  curlx?: number;

  /**
   * Display Placement Object
   */
  display?: DisplayPlacement;

  /**
   * Video Placement Object
   */
  video?: VideoPlacement;

  /**
   * Audio Placement Object
   */
  audio?: AudioPlacement;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

export interface DisplayPlacement {
  /**
   * Placement position on screen
   * List: Placement Position
   * @minimum 0
   */
  pos?: PlacementPosition;

  /**
   * Indicates if this is an interstitial placement
   * 0 = no
   * 1 = yes
   * @default 0
   * @minimum 0
   * @maximum 1
   */
  instl?: number;

  /**
   * Indicates if the placement will be loaded into an iframe
   * 0 = unfriendly iframe or unknown
   * 1 = top frame, friendly iframe, or SafeFrame
   * @minimum 0
   * @maximum 1
   */
  topframe?: number;

  /**
   * Array of iframe busters supported by this placement
   */
  ifrbust?: string[];

  /**
   * Indicates the click type of this placement
   * List: Click Type
   * @default 1
   * @minimum 0
   */
  clktype?: ClickType;

  /**
   * AMPHTML rendering treatment
   * 1 = early loading
   * 2 = standard loading
   * @minimum 1
   * @maximum 2
   */
  ampren?: number;

  /**
   * The display placement type
   * List: Display Placement Type
   * @minimum 0
   */
  ptype?: DisplayPlacementType;

  /**
   * The context of the placement
   * List: Display Context Type
   * @minimum 0
   */
  context?: DisplayContextType;

  /**
   * Array of supported mime types
   */
  mime?: string[];

  /**
   * List of supported APIs
   * List: API Framework
   */
  api?: APIFramework[];

  /**
   * Creative subtypes permitted
   * List: Creative Subtype - Display
   */
  ctype?: DisplayCreativeSubtype[];

  /**
   * Width of the placement
   * @minimum 0
   */
  w?: number;

  /**
   * Height of the placement
   * @minimum 0
   */
  h?: number;

  /**
   * Unit of size used for placement size
   * List: Size Unit
   * @minimum 0
   */
  unit?: SizeUnit;

  /**
   * Indicator of buyer-specific privacy notice URL support
   * 0 = no
   * 1 = yes
   * @minimum 0
   * @maximum 1
   */
  priv?: number;

  /**
   * Array of objects that govern the attributes of a banner display placement
   */
  displayfmt?: DisplayFormat[];

  /**
   * Object that specifies the required and permitted assets for native display
   */
  nativefmt?: NativeFormat;

  /**
   * Array of supported ad tracking events
   */
  event?: EventSpec[];

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

export interface DisplayFormat {
  /**
   * Absolute width of the creative
   * @minimum 0
   */
  w?: number;

  /**
   * Absolute height of the creative
   * @minimum 0
   */
  h?: number;

  /**
   * Relative width of the creative when expressing size as a ratio
   * @minimum 0
   */
  wratio?: number;

  /**
   * Relative height of the creative when expressing size as a ratio
   * @minimum 0
   */
  hratio?: number;

  /**
   * Directions in which the creative is permitted to expand
   * List: Expandable Direction
   */
  expdir?: ExpandableDirection[];

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

export interface NativeFormat {
  /**
   * Array of objects that specify the set of native assets
   */
  asset: AssetFormat[];

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

export interface AssetFormat {
  /**
   * Asset ID, unique within the scope of this placement specification
   * @minimum 0
   */
  id: number;

  /**
   * Indicator of required asset
   * 0 = no
   * 1 = yes
   * @minimum 0
   * @maximum 1
   */
  req?: number;

  /**
   * Title asset format specification
   */
  title?: TitleAssetFormat;

  /**
   * Image asset format specification
   */
  img?: ImageAssetFormat;

  /**
   * Video asset format specification
   */
  video?: VideoPlacement;

  /**
   * Data asset format specification
   */
  data?: DataAssetFormat;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

export interface TitleAssetFormat {
  /**
   * The maximum allowed length of the title value
   * @minimum 0
   * @description Recommended lengths are 25, 90, or 140
   */
  len: number;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

export interface ImageAssetFormat {
  /**
   * The type of image asset supported
   * List: Native Image Asset Type
   * @minimum 0
   */
  type?: NativeImageAssetType;

  /**
   * Array of supported mime types
   */
  mime?: string[];

  /**
   * Absolute width in device independent pixels (DIPS)
   * @minimum 0
   */
  w?: number;

  /**
   * Absolute height in device independent pixels (DIPS)
   * @minimum 0
   */
  h?: number;

  /**
   * The minimum requested absolute width in DIPS
   * @minimum 0
   */
  wmin?: number;

  /**
   * The minimum requested absolute height in DIPS
   * @minimum 0
   */
  hmin?: number;

  /**
   * Relative width when expressing size as a ratio
   * @minimum 0
   */
  wratio?: number;

  /**
   * Relative height when expressing size as a ratio
   * @minimum 0
   */
  hratio?: number;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

export interface DataAssetFormat {
  /**
   * The type of data asset supported
   * List: Native Data Asset Type
   * @minimum 0
   */
  type: NativeDataAssetType;

  /**
   * The maximum allowed length of the data value
   * @minimum 0
   */
  len?: number;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

export interface EventSpec {
  /**
   * Type of supported ad tracking event
   * List: Event Type
   * @minimum 0
   */
  type: EventType;

  /**
   * Array of supported event tracking methods
   * List: Event Tracking Method
   */
  method?: EventTrackingMethod[];

  /**
   * Event tracking APIs available for use
   * List: API Framework
   */
  api?: APIFramework[];

  /**
   * Array of JavaScript tracker domains
   */
  jstrk?: string[];

  /**
   * Sense of the jstrk restriction list
   * 0 = block list
   * 1 = allow list
   * @minimum 0
   * @maximum 1
   */
  wjs?: number;

  /**
   * Array of pixel tracker domains
   */
  pxtrk?: string[];

  /**
   * Sense of the pxtrk restriction list
   * 0 = block list
   * 1 = allow list
   * @minimum 0
   * @maximum 1
   */
  wpx?: number;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

export interface VideoPlacement {
  /**
   * Placement subtype
   * List: Plcmt Subtype - Video
   * @minimum 0
   */
  ptype?: VideoPlacementSubtype;

  /**
   * Placement position on screen
   * List: Placement Position
   * @minimum 0
   */
  pos?: PlacementPosition;

  /**
   * Start delay in seconds for pre-roll, mid-roll, or post-roll placements
   * List: Start Delay Mode
   * @minimum 0
   */
  delay?: StartDelayMode;

  /**
   * Indicates if the placement imposes ad skippability
   * 0 = no
   * 1 = yes
   * @minimum 0
   * @maximum 1
   */
  skip?: number;

  /**
   * Minimum duration in seconds before skipping is enabled
   * @minimum 0
   */
  skipmin?: number;

  /**
   * Number of seconds before skip is enabled
   * @minimum 0
   */
  skipafter?: number;

  /**
   * Playback method(s) in use
   * List: Playback Method
   */
  playmethod?: PlaybackMethod[];

  /**
   * Event that causes playback to end
   * List: Playback Cessation Mode
   * @minimum 0
   */
  playend?: PlaybackCessationMode;

  /**
   * Click type of the placement
   * List: Click Type
   * @minimum 0
   */
  clktype?: ClickType;

  /**
   * Array of supported mime types
   */
  mime: string[];

  /**
   * List of supported APIs
   * List: API Framework
   */
  api?: number[];

  /**
   * Creative subtypes permitted
   * List: Creative Subtype - Audio/Video
   */
  ctype?: AudioVideoCreativeSubtype[];

  /**
   * Width of the placement
   * @minimum 0
   */
  w?: number;

  /**
   * Height of the placement
   * @minimum 0
   */
  h?: number;

  /**
   * Units of size used
   * List: Size Unit
   * @default 1
   * @minimum 0
   */
  unit?: SizeUnit;

  /**
   * Minimum creative duration in seconds
   * @minimum 0
   */
  mindur?: number;

  /**
   * Maximum creative duration in seconds
   * @minimum 0
   */
  maxdur?: number;

  /**
   * Precise acceptable durations for video creatives in seconds
   * @minimum 0
   */
  rqddur?: number[];

  /**
   * Maximum extended creative duration
   * @default 0
   */
  maxext?: number;

  /**
   * Minimum bit rate in Kbps
   * @minimum 0
   */
  minbitr?: number;

  /**
   * Maximum bit rate in Kbps
   * @minimum 0
   */
  maxbitr?: number;

  /**
   * Supported creative delivery methods
   * List: Delivery Method
   */
  delivery?: DeliveryMethod[];

  /**
   * Maximum number of ads in an ad pod
   * @minimum 0
   */
  maxseq?: number;

  /**
   * Total time in seconds for dynamic ad pod
   * @minimum 0
   */
  poddur?: number;

  /**
   * Unique identifier for video ad pod
   * @minimum 0
   */
  podid?: number;

  /**
   * Sequence position of video ad pod
   * List: Pod Sequence
   * @default 0
   * @minimum 0
   */
  podseq?: PodSequence;

  /**
   * Guaranteed slot position in pod
   * List: Slot Position in Pod
   * @default 0
   * @minimum 0
   */
  slotinpod?: SlotPosition;

  /**
   * Minimum CPM per second
   * @minimum 0
   */
  mincpmpersec?: number;

  /**
   * Creative linearity requirement
   * List: Linearity Mode
   * @minimum 0
   */
  linear?: LinearityMode;

  /**
   * Allow letterboxing
   * 0 = no
   * 1 = yes
   * @default 1
   * @minimum 0
   * @maximum 1
   */
  boxing?: number;

  /**
   * Available companion ads
   */
  comp?: Companion[];

  /**
   * Supported companion ad types
   * List: Companion Type
   */
  comptype?: CompanionType[];

  /**
   * Permitted video placement expansion directions
   * List: Expandable Direction
   */
  expdir?: ExpandableDirection[];

  /**
   * Permitted video overlay expansion directions
   * List: Expandable Direction
   */
  overlayexpdir?: ExpandableDirection[];

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

export interface AudioPlacement {
  /**
   * Start delay in seconds
   * List: Start Delay Mode
   * @minimum 0
   */
  delay?: StartDelayMode;

  /**
   * Indicates if the placement imposes ad skippability
   * 0 = no
   * 1 = yes
   * @minimum 0
   * @maximum 1
   */
  skip?: number;

  /**
   * Minimum duration before skip is enabled
   * @default 0
   * @minimum 0
   */
  skipmin?: number;

  /**
   * Seconds before skip is enabled
   * @default 0
   * @minimum 0
   */
  skipafter?: number;

  /**
   * Playback method(s) in use
   * List: Playback Method
   */
  playmethod?: PlaybackMethod[];

  /**
   * Event that causes playback to end
   * List: Playback Cessation Mode
   * @minimum 0
   */
  playend?: PlaybackCessationMode;

  /**
   * Type of audio feed
   * List: Feed Type
   * @minimum 0
   */
  feed?: FeedType;

  /**
   * Volume normalization mode
   * List: Volume Normalization Mode
   * @minimum 0
   */
  nvol?: VolumeNormalizationMode;

  /**
   * Array of supported mime types
   */
  mime: string[];

  /**
   * List of supported APIs
   * List: API Framework
   */
  api?: APIFramework[];

  /**
   * Creative subtypes permitted
   * List: Creative Subtype - Audio/Video
   */
  ctype?: AudioVideoCreativeSubtype[];

  /**
   * Minimum creative duration in seconds
   * @minimum 0
   */
  mindur?: number;

  /**
   * Maximum creative duration in seconds
   * @minimum 0
   */
  maxdur?: number;

  /**
   * Precise acceptable durations in seconds
   * @minimum 0
   */
  rqddur?: number[];

  /**
   * Maximum extended creative duration
   * @minimum -1
   */
  maxext?: number;

  /**
   * Minimum bit rate in Kbps
   * @minimum 0
   */
  minbitr?: number;

  /**
   * Maximum bit rate in Kbps
   * @minimum 0
   */
  maxbitr?: number;

  /**
   * Supported delivery methods
   * List: Delivery Method
   */
  delivery?: DeliveryMethod[];

  /**
   * Maximum number of ads in an ad pod
   * @minimum 0
   */
  maxseq?: number;

  /**
   * Total time in seconds for dynamic ad pod
   * @minimum 0
   */
  poddur?: number;

  /**
   * Unique identifier for audio ad pod
   * @minimum 0
   */
  podid?: number;

  /**
   * Sequence position of audio ad pod
   * List: Pod Sequence
   * @default 0
   * @minimum 0
   */
  podseq?: PodSequence;

  /**
   * Guaranteed slot position in pod
   * List: Slot Position in Pod
   * @default 0
   * @minimum 0
   */
  slotinpod?: SlotPosition;

  /**
   * Minimum CPM per second
   * @minimum 0
   */
  mincpmpersec?: number;

  /**
   * Available companion ads
   */
  comp?: Companion[];

  /**
   * Supported companion ad types
   * List: Companion Type
   */
  comptype?: CompanionType[];

  /**
   * Permitted overlay expansion directions
   * List: Expandable Direction
   */
  overlayexpdir?: ExpandableDirection[];

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

export interface Companion {
  /**
   * Identifier of the companion ad
   * @description unique within this placement
   */
  id?: string;

  /**
   * Companion ad rendering mode
   * 0 = concurrent
   * 1 = end-card
   * @minimum 0
   * @maximum 1
   */
  vcm?: number;

  /**
   * Display specification object for the companion ad
   */
  display?: DisplayPlacement;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

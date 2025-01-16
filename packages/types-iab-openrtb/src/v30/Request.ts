import { Placement } from "iab-adcom/placement";
import { SupplyChain } from "../v26/BidRequest";

/**
 * Carries data about the source of the transaction
 */
export interface Source {
  /** Transaction ID common across all participants */
  tid?: string;
  /** Original request timestamp in Unix format */
  ts?: number;
  /** Digital signature for authentication */
  ds?: string;
  /** List of identifiers for digest creation */
  dsmap?: string;
  /** Certificate file name */
  cert?: string;
  /** Full digest string */
  digest?: string;
  /** Supply chain information */
  schain?: SupplyChain;
  /** Payment ID chain string */
  pchain?: string;
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * Represents a unit of goods being offered for sale
 */
export interface Item {
  /** Unique identifier for this item */
  id: string;
  /** Quantity of billable events (integer) */
  qty?: number;
  /** Quantity of billable events (float) */
  qtyflt?: number;
  /** Sequence number for coordinated delivery */
  seq?: number;
  /** Minimum bid price in CPM */
  flr?: number;
  /** Currency for floor price */
  flrcur?: string;
  /** Time between auction and fulfillment */
  exp?: number;
  /** Expected fulfillment timestamp */
  dt?: number;
  /** Item delivery method required */
  dlvy?: 0 | 1 | 2;
  /** Array of metrics */
  metric?: Metric[];
  /** Array of applicable deals */
  deal?: Deal[];
  /** Auction eligibility indicator */
  private?: 0 | 1;
  /** Layer-4 domain object specification */
  spec: Placement;
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * Represents a metric providing insight for decisioning
 */
export interface Metric {
  /** Type of metric */
  type: string;
  /** Value of the metric */
  value: number;
  /** Source of the metric value */
  vendor?: string;
  /** Extension field */
  ext?: Record<string, unknown>;
}

/**
 * Represents a pre-arranged deal between buyer and seller
 */
export interface Deal {
  /** Unique identifier for the deal */
  id: string;
  /** Minimum deal price in CPM */
  flr?: number;
  /** Currency for floor price */
  flrcur?: string;
  /** Auction type override */
  at?: number;
  /** Allowed buyer seats */
  wseat?: string[];
  /** Allowed advertiser domains */
  wadomain?: string[];
  /** Extension field */
  ext?: Record<string, unknown>;
}

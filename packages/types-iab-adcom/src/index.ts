/**
 * AdCOM (Advertising Common Object Model) 1.0
 * @see https://github.com/InteractiveAdvertisingBureau/AdCOM/blob/main/AdCOM%20v1.0%20FINAL.md
 */

import * as contextTypes from "./context";
import * as mediaTypes from "./media";
import * as placementTypes from "./placement";

export * from "./enum";

export namespace AdCOM {
  export import Placement = placementTypes;
  export import Media = mediaTypes;
  export import Context = contextTypes;
}

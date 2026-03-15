import { describe, expectTypeOf, it } from "vitest";
import type {
  BidRequest,
  BrandVersion,
  Content,
  Data,
  DurFloors,
  Qty,
  Refresh,
} from "../packages/types-iab-openrtb/src/v26/index";
import type { Openrtb } from "../packages/types-iab-openrtb/src/v30/index";

describe("OpenRTB v2.6", () => {
  it("Imp.qty should be Qty type", () => {
    expectTypeOf<BidRequest["imp"][0]["qty"]>().toEqualTypeOf<
      Qty | undefined
    >();
  });

  it("Imp.refresh should be Refresh type", () => {
    expectTypeOf<BidRequest["imp"][0]["refresh"]>().toEqualTypeOf<
      Refresh | undefined
    >();
  });

  it("Video.durfloors should be DurFloors[]", () => {
    type VideoDurFloors = NonNullable<
      BidRequest["imp"][0]["video"]
    >["durfloors"];
    expectTypeOf<VideoDurFloors>().toEqualTypeOf<DurFloors[] | undefined>();
  });

  it("Site.content should be Content type", () => {
    type SiteContent = NonNullable<BidRequest["site"]>["content"];
    expectTypeOf<SiteContent>().toEqualTypeOf<Content | undefined>();
  });

  it("Content should have genres and gtax fields", () => {
    expectTypeOf<Content>().toHaveProperty("genres");
    expectTypeOf<Content>().toHaveProperty("gtax");
  });

  it("Data should have cids field", () => {
    expectTypeOf<Data>().toHaveProperty("cids");
  });

  it("BrandVersion.version should be string[] | undefined", () => {
    expectTypeOf<BrandVersion["version"]>().toEqualTypeOf<
      string[] | undefined
    >();
  });
});

describe("OpenRTB v3.0", () => {
  it("Openrtb.request and response should be optional", () => {
    const openrtb: Openrtb = {
      domainver: "1.0",
    };
    expectTypeOf(openrtb).toMatchTypeOf<Openrtb>();
  });
});

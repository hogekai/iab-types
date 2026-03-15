import { describe, expectTypeOf, it } from "vitest";
import type { AdCOM } from "../packages/types-iab-adcom/src";
import type {
  APIFramework,
  CategoryTaxonomy,
  DeliveryMethod,
  DisplayCreativeSubtype,
  MediaRating,
  PodDeduplicationSetting,
} from "../packages/types-iab-adcom/src/enum";

describe("AdCOM Enums", () => {
  it("DeliveryMethod should have literal types (as const)", () => {
    expectTypeOf<DeliveryMethod>().toBeNumber();
    expectTypeOf<1>().toMatchTypeOf<DeliveryMethod>();
    expectTypeOf<2>().toMatchTypeOf<DeliveryMethod>();
    expectTypeOf<3>().toMatchTypeOf<DeliveryMethod>();
  });

  it("CategoryTaxonomy should include value 9", () => {
    expectTypeOf<9>().toMatchTypeOf<CategoryTaxonomy>();
  });

  it("PodDeduplicationSetting should include value 5", () => {
    expectTypeOf<5>().toMatchTypeOf<PodDeduplicationSetting>();
  });

  it("MediaRating should be a number literal union", () => {
    expectTypeOf<MediaRating>().toBeNumber();
    expectTypeOf<1>().toMatchTypeOf<MediaRating>();
  });
});

describe("AdCOM Media", () => {
  it("Display.api should be an array of APIFramework", () => {
    expectTypeOf<AdCOM.Media.Display["api"]>().toEqualTypeOf<
      APIFramework[] | undefined
    >();
  });

  it("Display.ctype should be DisplayCreativeSubtype", () => {
    expectTypeOf<AdCOM.Media.Display["ctype"]>().toEqualTypeOf<
      DisplayCreativeSubtype | undefined
    >();
  });
});

describe("AdCOM Context", () => {
  it("Content should have genres and gtax fields", () => {
    expectTypeOf<AdCOM.Context.Content>().toHaveProperty("genres");
    expectTypeOf<AdCOM.Context.Content>().toHaveProperty("gtax");
  });

  it("Data should have cids field", () => {
    expectTypeOf<AdCOM.Context.Data>().toHaveProperty("cids");
  });

  it("ExtendedIdentifier should have inserter, matcher, mm fields", () => {
    expectTypeOf<AdCOM.Context.ExtendedIdentifier>().toHaveProperty("inserter");
    expectTypeOf<AdCOM.Context.ExtendedIdentifier>().toHaveProperty("matcher");
    expectTypeOf<AdCOM.Context.ExtendedIdentifier>().toHaveProperty("mm");
  });

  it("Regs should have gpp and gpp_sid fields", () => {
    expectTypeOf<AdCOM.Context.Regs>().toHaveProperty("gpp");
    expectTypeOf<AdCOM.Context.Regs>().toHaveProperty("gpp_sid");
  });

  it("Restrictions should have acat field", () => {
    expectTypeOf<AdCOM.Context.Restrictions>().toHaveProperty("acat");
  });
});

describe("AdCOM Placement", () => {
  it("VideoPlacement should use rqddurs (plural)", () => {
    expectTypeOf<AdCOM.Placement.VideoPlacement>().toHaveProperty("rqddurs");
  });

  it("AudioPlacement should use rqddurs (plural)", () => {
    expectTypeOf<AdCOM.Placement.AudioPlacement>().toHaveProperty("rqddurs");
  });
});

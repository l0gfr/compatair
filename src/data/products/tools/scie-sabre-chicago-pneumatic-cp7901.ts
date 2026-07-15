import { chicagoPneumaticCuttingTool } from "../../product-factories/chicago-pneumatic-cutting.ts";

const generated = chicagoPneumaticCuttingTool({
  id: "chicago-pneumatic-cp7901",
  slug: "scie-sabre-chicago-pneumatic-cp7901",
  categoryId: "scie",
  category: "Scie sabre",
  label: "Scie sabre pneumatique Chicago Pneumatic CP7901",
  model: "CP7901",
  mpn: "8941079011",
  sourceUrl:
    "https://tools.cp.com/en-ca/products/specialtycutting/cp7901-sku8941079011",
  airLitersPerSecond: 2.6,
  usagePattern: "intermittent",
  lengthMm: 229,
  weightKg: 0.86,
  soundPressureDb: 89,
  soundPowerDb: 78,
  vibration: "< 2,5 m/s²",
  highlight:
    "Le mécanisme atteint 10 000 courses par minute avec une course de 10 mm.",
  extraSpecifications: [
    { label: "Cadence", value: "10 000 courses/min" },
    { label: "Course", value: "10 mm" },
  ],
});
const product = {
  ...generated,
  evidence: generated.evidence,
};
export default product;

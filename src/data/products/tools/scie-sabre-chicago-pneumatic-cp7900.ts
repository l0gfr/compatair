import { chicagoPneumaticCuttingTool } from "../../product-factories/chicago-pneumatic-cutting.ts";

const generated = chicagoPneumaticCuttingTool({
  id: "chicago-pneumatic-cp7900",
  slug: "scie-sabre-chicago-pneumatic-cp7900",
  categoryId: "scie",
  category: "Scie sabre",
  label: "Scie sabre pneumatique Chicago Pneumatic CP7900",
  model: "CP7900",
  mpn: "8941079000",
  sourceUrl:
    "https://tools.cp.com/en/products/specialtycutting/cp7900-sku8941079000",
  airLitersPerSecond: 2.6,
  usagePattern: "intermittent",
  lengthMm: 216,
  weightKg: 0.59,
  soundPressureDb: 93,
  soundPowerDb: 82,
  vibration: "Valeur non publiée sur la fiche consultée",
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

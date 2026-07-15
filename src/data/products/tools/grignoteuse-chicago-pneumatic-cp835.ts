import { chicagoPneumaticCuttingTool } from "../../product-factories/chicago-pneumatic-cutting.ts";

const generated = chicagoPneumaticCuttingTool({
  id: "chicago-pneumatic-cp835",
  slug: "grignoteuse-chicago-pneumatic-cp835",
  categoryId: "grignoteuse",
  category: "Grignoteuse pneumatique",
  label: "Grignoteuse pneumatique Chicago Pneumatic CP835",
  model: "CP835",
  mpn: "T022550",
  sourceUrl:
    "https://tools.cp.com/en/products/specialtycutting/cp835-skuT022550",
  airLitersPerSecond: 8,
  usagePattern: "intermittent",
  lengthMm: 216,
  weightKg: 0.59,
  soundPressureDb: 86,
  soundPowerDb: 97,
  vibration: "5,4 m/s² ; incertitude K 3 m/s²",
  highlight:
    "La capacité publiée atteint 2,5 mm dans l’aluminium et 1,6 mm dans l’acier.",
  extraSpecifications: [
    { label: "Cadence", value: "2 750 courses/min" },
    { label: "Course", value: "5 mm" },
    { label: "Diamètre de poinçon", value: "4,5 mm" },
    { label: "Puissance maximale", value: "316 W" },
    { label: "Capacité aluminium", value: "2,5 mm" },
    { label: "Capacité acier", value: "1,6 mm" },
  ],
});
const product = {
  ...generated,
  evidence: generated.evidence,
};
export default product;

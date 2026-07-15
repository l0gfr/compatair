import { chicagoPneumaticCuttingTool } from "../../product-factories/chicago-pneumatic-cutting.ts";

const generated = chicagoPneumaticCuttingTool({
  id: "chicago-pneumatic-cp785s",
  slug: "cisaille-chicago-pneumatic-cp785s",
  categoryId: "cisaille",
  category: "Cisaille pneumatique",
  label: "Cisaille pneumatique Chicago Pneumatic CP785S",
  model: "CP785S",
  mpn: "T023200",
  sourceUrl:
    "https://tools.cp.com/en-ca/products/specialtycutting/cp785s-skuT023200",
  airLitersPerSecond: 7.3,
  usagePattern: "intermittent",
  lengthMm: 229,
  weightKg: 0.86,
  soundPressureDb: 95,
  soundPowerDb: 84,
  vibration: "3,2 m/s² ; incertitude K 3 m/s²",
  highlight:
    "La capacité publiée atteint 2 mm dans l’aluminium et 1,3 mm dans l’acier.",
  extraSpecifications: [
    { label: "Cadence", value: "2 400 courses/min" },
    { label: "Course", value: "2,2 mm" },
    { label: "Puissance maximale", value: "258 W" },
    { label: "Capacité aluminium", value: "2 mm" },
    { label: "Capacité acier", value: "1,3 mm" },
  ],
});
const product = {
  ...generated,
  evidence: generated.evidence,
};
export default product;

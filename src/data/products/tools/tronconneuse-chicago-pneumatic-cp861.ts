import { chicagoPneumaticCuttingTool } from "../../product-factories/chicago-pneumatic-cutting.ts";

const generated = chicagoPneumaticCuttingTool({
  id: "chicago-pneumatic-cp861",
  slug: "tronconneuse-chicago-pneumatic-cp861",
  categoryId: "tronconneuse",
  category: "Tronçonneuse pneumatique",
  label: "Tronçonneuse pneumatique Chicago Pneumatic CP861 75 mm",
  model: "CP861",
  mpn: "T022039",
  sourceUrl:
    "https://tools.cp.com/en-ca/products/specialtycutting/cp861-skuT022039",
  airLitersPerSecond: 4,
  usagePattern: "continuous",
  lengthMm: 197,
  weightKg: 0.74,
  soundPressureDb: 90,
  soundPowerDb: 79,
  vibration: "2,8 m/s²",
  highlight:
    "Le disque publié mesure 75 mm, avec une vitesse à vide de 20 000 tr/min et une puissance maximale de 370 W.",
  extraSpecifications: [
    { label: "Vitesse à vide", value: "20 000 tr/min" },
    { label: "Diamètre de disque", value: "75 mm" },
    { label: "Puissance maximale", value: "370 W" },
  ],
});
const product = {
  ...generated,
  evidence: generated.evidence,
};
export default product;

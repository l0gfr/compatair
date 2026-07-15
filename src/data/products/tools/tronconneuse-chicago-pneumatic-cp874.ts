import { chicagoPneumaticCuttingTool } from "../../product-factories/chicago-pneumatic-cutting.ts";

const generated = chicagoPneumaticCuttingTool({
  id: "chicago-pneumatic-cp874",
  slug: "tronconneuse-chicago-pneumatic-cp874",
  categoryId: "tronconneuse",
  category: "Tronçonneuse pneumatique",
  label: "Tronçonneuse pneumatique Chicago Pneumatic CP874 75 mm",
  model: "CP874",
  mpn: "T025375",
  sourceUrl:
    "https://tools.cp.com/en/products/specialtycutting/cp874-skuT025375",
  airLitersPerSecond: 5.9,
  usagePattern: "continuous",
  lengthMm: 184,
  weightKg: 0.79,
  soundPressureDb: 99,
  soundPowerDb: 88,
  vibration: "4 m/s²",
  highlight:
    "Le disque publié mesure 75 mm, avec une vitesse à vide de 22 000 tr/min et une puissance maximale de 370 W.",
  extraSpecifications: [
    { label: "Vitesse à vide", value: "22 000 tr/min" },
    { label: "Diamètre de disque", value: "75 mm" },
    { label: "Puissance maximale", value: "370 W" },
  ],
});
const product = {
  ...generated,
  evidence: generated.evidence,
};
export default product;

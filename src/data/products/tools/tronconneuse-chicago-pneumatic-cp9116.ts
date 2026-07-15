import { chicagoPneumaticCuttingTool } from "../../product-factories/chicago-pneumatic-cutting.ts";

const generated = chicagoPneumaticCuttingTool({
  id: "chicago-pneumatic-cp9116",
  slug: "tronconneuse-chicago-pneumatic-cp9116",
  categoryId: "tronconneuse",
  category: "Tronçonneuse pneumatique",
  label: "Tronçonneuse pneumatique Chicago Pneumatic CP9116 100 mm",
  model: "CP9116",
  mpn: "8941091160",
  sourceUrl: "https://tools.cp.com/en-ca/products/specialtycutting/cp9116",
  airLitersPerSecond: 3.3,
  usagePattern: "continuous",
  lengthMm: 370,
  weightKg: 1.8,
  soundPressureDb: 97,
  soundPowerDb: 86,
  vibration: "9,8 m/s² ; incertitude K 3 m/s²",
  highlight:
    "Le disque publié mesure 100 mm, avec une vitesse à vide de 14 000 tr/min et une puissance maximale de 746 W.",
  extraSpecifications: [
    { label: "Vitesse à vide", value: "14 000 tr/min" },
    { label: "Diamètre de disque", value: "100 mm" },
    { label: "Puissance maximale", value: "746 W (1 hp)" },
  ],
});
const product = {
  ...generated,
  evidence: generated.evidence,
};
export default product;

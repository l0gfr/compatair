import { verticalEurocomp } from "../../product-factories/kaeser-eurocomp-vertical.ts";
const generated = verticalEurocomp({
  id: "kaeser-eurocomp-epc-750-2-500-vertical",
  model: "EPC 750-2-500",
  tankLiters: 500,
  maxPressureBar: 15,
  fadCurve: [
    { pressureBar: 8, litersPerMinute: 620 },
    { pressureBar: 12, litersPerMinute: 610 },
  ],
  noiseDb: 80,
  powerKw: 5.5,
  weightKg: 325,
  dimensions: "910 × 910 × 2 060 mm",
  lubrication: "Anneau d’huile",
});
const product = {
  ...generated,
  evidence: generated.evidence,
};
export default product;

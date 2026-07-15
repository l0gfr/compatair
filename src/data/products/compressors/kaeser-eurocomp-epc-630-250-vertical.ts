import { verticalEurocomp } from "../../product-factories/kaeser-eurocomp-vertical.ts";
const generated = verticalEurocomp({
  id: "kaeser-eurocomp-epc-630-250-vertical",
  model: "EPC 630-250",
  tankLiters: 250,
  maxPressureBar: 10,
  fadCurve: [
    { pressureBar: 6, litersPerMinute: 410 },
    { pressureBar: 8, litersPerMinute: 375 },
  ],
  noiseDb: 75,
  powerKw: 3,
  weightKg: 150,
  dimensions: "650 × 700 × 1 810 mm",
  lubrication: "Anneau d’huile",
});
const product = {
  ...generated,
  evidence: generated.evidence,
};
export default product;

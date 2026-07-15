import { verticalEurocomp } from "../../product-factories/kaeser-eurocomp-vertical.ts";
const generated = verticalEurocomp({
  id: "kaeser-eurocomp-epc-420-2-250-vertical",
  model: "EPC 420-2-250",
  tankLiters: 250,
  maxPressureBar: 15,
  fadCurve: [
    { pressureBar: 8, litersPerMinute: 344 },
    { pressureBar: 12, litersPerMinute: 336 },
  ],
  noiseDb: 73,
  powerKw: 3,
  weightKg: 175,
  dimensions: "650 × 720 × 1 910 mm",
  lubrication: "Anneau d’huile",
});
const product = {
  ...generated,
  evidence: generated.evidence,
};
export default product;

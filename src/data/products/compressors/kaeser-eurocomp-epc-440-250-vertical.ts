import { verticalEurocomp } from "../../product-factories/kaeser-eurocomp-vertical.ts";
const generated = verticalEurocomp({
  id: "kaeser-eurocomp-epc-440-250-vertical",
  model: "EPC 440-250",
  tankLiters: 250,
  maxPressureBar: 10,
  fadCurve: [
    { pressureBar: 6, litersPerMinute: 280 },
    { pressureBar: 8, litersPerMinute: 260 },
  ],
  noiseDb: 76,
  powerKw: 2.4,
  weightKg: 125,
  dimensions: "650 × 730 × 1 720 mm",
  lubrication: "Injection d’huile",
});
const product = {
  ...generated,
  evidence: generated.evidence,
};
export default product;

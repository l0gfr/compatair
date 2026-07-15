import { verticalEurocomp } from "../../product-factories/kaeser-eurocomp-vertical.ts";
const generated = verticalEurocomp({
  id: "kaeser-eurocomp-epc-230-2-250-vertical",
  model: "EPC 230-2-250",
  tankLiters: 250,
  maxPressureBar: 15,
  fadCurve: [
    { pressureBar: 8, litersPerMinute: 192 },
    { pressureBar: 12, litersPerMinute: 188 },
  ],
  noiseDb: 72,
  powerKw: 1.7,
  weightKg: 150,
  dimensions: "650 × 730 × 1 720 mm",
  lubrication: "Injection d’huile",
});
const product = {
  ...generated,
  evidence: generated.evidence,
};
export default product;

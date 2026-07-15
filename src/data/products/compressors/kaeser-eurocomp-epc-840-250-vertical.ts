import { verticalEurocomp } from "../../product-factories/kaeser-eurocomp-vertical.ts";
const generated = verticalEurocomp({
  id: "kaeser-eurocomp-epc-840-250-vertical",
  model: "EPC 840-250",
  tankLiters: 250,
  maxPressureBar: 10,
  fadCurve: [
    { pressureBar: 6, litersPerMinute: 590 },
    { pressureBar: 8, litersPerMinute: 530 },
  ],
  noiseDb: 78,
  powerKw: 4,
  weightKg: 156,
  dimensions: "650 × 710 × 1 820 mm",
  lubrication: "Anneau d’huile",
});
const product = {
  ...generated,
  evidence: generated.evidence,
};
export default product;

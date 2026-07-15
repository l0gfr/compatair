import { verticalEurocomp } from "../../product-factories/kaeser-eurocomp-vertical.ts";
const generated = verticalEurocomp({
  id: "kaeser-eurocomp-epc-550-2-250-vertical",
  model: "EPC 550-2-250",
  tankLiters: 250,
  maxPressureBar: 15,
  fadCurve: [
    { pressureBar: 8, litersPerMinute: 460 },
    { pressureBar: 12, litersPerMinute: 450 },
  ],
  noiseDb: 78,
  powerKw: 4,
  weightKg: 177,
  dimensions: "670 × 710 × 1 910 mm",
  lubrication: "Anneau d’huile",
});
const product = {
  ...generated,
  evidence: generated.evidence,
};
export default product;

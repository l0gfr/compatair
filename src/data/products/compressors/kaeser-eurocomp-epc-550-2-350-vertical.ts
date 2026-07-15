import { verticalEurocomp } from "../../product-factories/kaeser-eurocomp-vertical.ts";
const generated = verticalEurocomp({
  id: "kaeser-eurocomp-epc-550-2-350-vertical",
  model: "EPC 550-2-350",
  tankLiters: 350,
  maxPressureBar: 15,
  fadCurve: [
    { pressureBar: 8, litersPerMinute: 460 },
    { pressureBar: 12, litersPerMinute: 450 },
  ],
  noiseDb: 76,
  powerKw: 4,
  weightKg: 190,
  dimensions: "720 × 740 × 1 980 mm",
  lubrication: "Anneau d’huile",
});
const product = {
  ...generated,
  evidence: generated.evidence,
};
export default product;

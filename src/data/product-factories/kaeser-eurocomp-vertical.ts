const evidenceId = "kaeser-eurocomp-2026-brochure-vertical";
const sourceUrl = "https://th.kaeser.com/EN/download.ashx?id=tcm%3A58-5902";
const imageSourceUrl =
  "https://nz.kaeser.com/products/reciprocating-compressors/stationary-reciprocating-compressors/oil-lubricated-workshop-compressors/";

type VerticalEurocompData = {
  id: string;
  model: string;
  tankLiters: number;
  maxPressureBar: number;
  fadCurve: Array<{ pressureBar: number; litersPerMinute: number }>;
  noiseDb: number;
  powerKw: number;
  weightKg: number;
  dimensions: string;
  lubrication: "Injection d’huile" | "Anneau d’huile";
};

export function verticalEurocomp(data: VerticalEurocompData) {
  const flow = data.fadCurve
    .map((point) => `${point.litersPerMinute} L/min à ${point.pressureBar} bar`)
    .join(" ; ");
  const coating =
    data.tankLiters <= 350
      ? [
          {
            label: "Protection intérieure de cuve",
            value: "Revêtement intérieur anticorrosion",
            evidenceIds: [evidenceId],
          },
        ]
      : [];

  return {
    id: data.id,
    slug: data.id,
    brand: "KAESER",
    model: `EUROCOMP ${data.model}`,
    variant: {
      familyId: "kaeser-eurocomp-vertical",
      label: `${data.maxPressureBar} bar, cuve verticale ${data.tankLiters} l`,
      distinguishingAttributes: {
        pression: `${data.maxPressureBar} bar`,
        cuve: `${data.tankLiters} l verticale`,
        puissance: `${String(data.powerKw).replace(".", ",")} kW`,
      },
    },
    tankLiters: data.tankLiters,
    maxPressureBar: data.maxPressureBar,
    fadCurve: data.fadCurve,
    oilType: "oil",
    noiseDb: data.noiseDb,
    powerKw: data.powerKw,
    weightKg: data.weightKg,
    mobility: "fixed",
    voltage: "400 V / 50 Hz",
    phase: "three-phase",
    confidence: "A",
    status: "active",
    image: {
      src: "/images/products/kaeser-eurocomp-vertical.webp",
      alt: `Compresseur KAESER EUROCOMP ${data.model} à cuve verticale`,
      sourceUrl: imageSourceUrl,
      sourceLabel: "Visuel officiel de la gamme KAESER EUROCOMP verticale",
    },
    editorial: {
      overview: `Le KAESER EUROCOMP ${data.model} est un compresseur fixe sur cuve verticale de ${data.tankLiters} litres. La brochure 2026 publie ${flow}, mesurés selon ISO 1217.`,
      verifiedFacts: [
        `La pression maximale est de ${data.maxPressureBar} bar et la puissance moteur de ${String(data.powerKw).replace(".", ",")} kW en 400 V triphasé.`,
        `La variante verticale mesure ${data.dimensions} et pèse ${data.weightKg} kg.`,
      ],
      limitations: [
        `Aucun débit n’est extrapolé au-delà des ${data.fadCurve.length} points ISO 1217 publiés.`,
        "Le visuel officiel illustre la gamme verticale et peut différer dans certains détails de cette variante.",
      ],
    },
    specifications: [
      {
        label: "Débit mesuré selon ISO 1217",
        value: flow,
        evidenceIds: [evidenceId],
      },
      {
        label: "Pression maximale",
        value: `${data.maxPressureBar} bar`,
        evidenceIds: [evidenceId],
      },
      {
        label: "Cuve verticale",
        value: `${data.tankLiters} l`,
        evidenceIds: [evidenceId],
      },
      {
        label: "Puissance moteur",
        value: `${String(data.powerKw).replace(".", ",")} kW`,
        evidenceIds: [evidenceId],
      },
      {
        label: "Alimentation",
        value: "400 V triphasé, 50 Hz",
        evidenceIds: [evidenceId],
      },
      {
        label: "Niveau de pression acoustique",
        value: `${data.noiseDb} dB(A) à la pression maximale, selon ISO 2151 / ISO 9614-2, tolérance ±3 dB`,
        evidenceIds: [evidenceId],
      },
      {
        label: "Poids",
        value: `${data.weightKg} kg`,
        evidenceIds: [evidenceId],
      },
      { label: "Cylindres", value: "2", evidenceIds: [evidenceId] },
      {
        label: "Dimensions (L × P × H)",
        value: data.dimensions,
        evidenceIds: [evidenceId],
      },
      {
        label: "Entraînement",
        value: "Accouplement direct 1:1, sans courroie",
        evidenceIds: [evidenceId],
      },
      {
        label: "Lubrification",
        value: data.lubrication,
        evidenceIds: [evidenceId],
      },
      ...coating,
    ],
    evidence: [
      {
        id: evidenceId,
        sourceUrl,
        sourceLabel:
          "KAESER, brochure EUROCOMP, édition 02/2026, variantes verticales",
        sourceType: "manufacturer",
        retrievedAt: "2026-07-15",
        confidence: "A",
        notes:
          "Tableau des variantes verticales 10 et 15 bar ; débits déclarés comme mesurés selon ISO 1217.",
      },
    ],
    fieldSources: {
      tankLiters: [evidenceId],
      maxPressureBar: [evidenceId],
      fadCurve: [evidenceId],
      oilType: [evidenceId],
      noiseDb: [evidenceId],
      powerKw: [evidenceId],
      weightKg: [evidenceId],
      mobility: [evidenceId],
      voltage: [evidenceId],
      phase: [evidenceId],
      status: [evidenceId],
      specifications: [evidenceId],
    },
    notes: [
      "Le champ fadCurve conserve uniquement les points de débit ISO 1217 publiés par KAESER.",
    ],
  };
}

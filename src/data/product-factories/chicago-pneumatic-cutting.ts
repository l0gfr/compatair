type Specification = { label: string; value: string };

type CuttingToolData = {
  id: string;
  slug: string;
  categoryId: "scie" | "cisaille" | "grignoteuse" | "tronconneuse";
  category: string;
  label: string;
  model: string;
  mpn: string;
  sourceUrl: string;
  airLitersPerSecond: number;
  usagePattern: "intermittent" | "continuous";
  lengthMm: number;
  weightKg: number;
  soundPressureDb: number;
  soundPowerDb: number;
  vibration: string;
  highlight: string;
  extraSpecifications: Specification[];
};

export function chicagoPneumaticCuttingTool(data: CuttingToolData) {
  const evidenceId = `cp-${data.mpn.toLowerCase()}-official`;
  const catalogEvidenceId = "cp-general-industry-2026-catalog";
  const airflowLpm = data.airLitersPerSecond * 60;
  return {
    id: data.id,
    slug: data.slug,
    categoryId: data.categoryId,
    category: data.category,
    label: data.label,
    brand: "Chicago Pneumatic",
    model: data.model,
    mpn: data.mpn,
    demandModel: "fixed-flow",
    workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 },
    airflowLpm: { min: airflowLpm, typical: airflowLpm, max: airflowLpm },
    connectorSize: "Entrée 1/4 pouce ; flexible intérieur 10 mm recommandé",
    usagePattern: data.usagePattern,
    recommendedHose: { innerDiameterMm: 10 },
    lubricationRequirement:
      "Air propre et lubrifié selon les instructions du fabricant",
    confidence: "A",
    image: {
      src: `/images/products/${data.id}.webp`,
      alt: data.label,
      sourceUrl: data.sourceUrl,
      sourceLabel: `Visuel officiel Chicago Pneumatic ${data.model}`,
    },
    editorial: {
      overview: `${data.label} fonctionne à 6,3 bar. La fiche constructeur publie ${String(data.airLitersPerSecond).replace(".", ",")} L/s en charge, soit ${airflowLpm} L/min pour le calcul de compatibilité.`,
      verifiedFacts: [
        data.highlight,
        `La fiche officielle indique ${data.lengthMm} mm de longueur et ${String(data.weightKg).replace(".", ",")} kg.`,
      ],
      limitations: [
        "La consommation en charge est conservée comme besoin instantané ; aucune réduction liée au cycle d’usage n’est appliquée.",
        "Les valeurs acoustiques sont reprises dans l’ordre publié par Chicago Pneumatic, sans permutation silencieuse.",
      ],
    },
    specifications: [
      {
        label: "Pression de service",
        value: "6,3 bar",
        evidenceIds: [catalogEvidenceId],
      },
      {
        label: "Consommation en charge",
        value: `${String(data.airLitersPerSecond).replace(".", ",")} L/s (${airflowLpm} L/min)`,
        evidenceIds: [evidenceId],
      },
      { label: "Entrée d’air", value: "1/4 pouce", evidenceIds: [evidenceId] },
      {
        label: "Diamètre intérieur de flexible recommandé",
        value: "10 mm",
        evidenceIds: [evidenceId],
      },
      {
        label: "Longueur",
        value: `${data.lengthMm} mm`,
        evidenceIds: [evidenceId],
      },
      {
        label: "Poids",
        value: `${String(data.weightKg).replace(".", ",")} kg`,
        evidenceIds: [evidenceId],
      },
      {
        label: "Pression acoustique publiée",
        value: `${data.soundPressureDb} dB(A)`,
        evidenceIds: [evidenceId],
      },
      {
        label: "Puissance acoustique publiée",
        value: `${data.soundPowerDb} dB(A)`,
        evidenceIds: [evidenceId],
      },
      { label: "Vibrations", value: data.vibration, evidenceIds: [evidenceId] },
      ...data.extraSpecifications.map((specification) => ({
        ...specification,
        evidenceIds: [evidenceId],
      })),
    ],
    evidence: [
      {
        id: evidenceId,
        sourceUrl: data.sourceUrl,
        sourceLabel: `Chicago Pneumatic, fiche officielle ${data.model}`,
        sourceType: "manufacturer",
        retrievedAt: "2026-07-15",
        confidence: "A",
        notes: `Consommation en charge convertie exactement de ${data.airLitersPerSecond} L/s à ${airflowLpm} L/min.`,
      },
      {
        id: catalogEvidenceId,
        sourceUrl:
          "https://tools.cp.com/content/dam/brands/cp/tools/web/shared/literature/catalogs/cp_general-industry/cp-general-industry-ENG.pdf",
        sourceLabel: "Chicago Pneumatic, catalogue officiel General Industry",
        sourceType: "manufacturer",
        retrievedAt: "2026-07-15",
        confidence: "A",
        notes:
          "Les caractéristiques pneumatiques du catalogue sont données à 90 psi, soit 6,3 bar.",
      },
    ],
    fieldSources: {
      model: [evidenceId, catalogEvidenceId],
      mpn: [evidenceId, catalogEvidenceId],
      airflowLpm: [evidenceId],
      workingPressureBar: [catalogEvidenceId],
      connectorSize: [evidenceId],
      recommendedHose: [evidenceId],
      lubricationRequirement: [evidenceId],
      specifications: [evidenceId, catalogEvidenceId],
    },
    notes: [
      `Conversion exacte : ${String(data.airLitersPerSecond).replace(".", ",")} L/s × 60 = ${airflowLpm} L/min.`,
    ],
  };
}

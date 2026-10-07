import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-genius-tools-600856",
	"slug": "cle-a-chocs-genius-tools-600856",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Genius Tools 600856",
	"brand": "Genius Tools",
	"model": "600856",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-genius-tools-600856.svg",
		"alt": "Repères techniques : Genius Tools 600856",
		"sourceUrl": "https://geniustools.net/wp-content/uploads/pdf_catalogues/GT-16-3_LoRes.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "genius-tools-600856",
		"label": "Modèle 600856, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "600856",
			"Max. Torque / Nm": "1152",
			"Weight / kg": "3.1"
		}
	},
	"editorial": {
		"overview": "Genius Tools 600856. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Max. Torque / Nm : 1152.",
			"Weight / kg : 3.1."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Les tableaux sont transcrits depuis les pages PDF31–32 (folios62–65), avec revue visuelle des colonnes et des références.",
			"Le catalogue archive ces identités ; leur commercialisation actuelle n’est pas établie.",
			"Aucune consommation en charge ni pression de mesure n’est déduite du couple ou de la masse.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Max. Torque / Nm",
			"value": "1152",
			"evidenceIds": [
				"october5-tools-genius-pneumatic-p31"
			]
		},
		{
			"label": "Weight / kg",
			"value": "3.1",
			"evidenceIds": [
				"october5-tools-genius-pneumatic-p31"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-genius-pneumatic-p31",
			"sourceUrl": "https://geniustools.net/wp-content/uploads/pdf_catalogues/GT-16-3_LoRes.pdf#page=31",
			"sourceLabel": "Genius Tools catalogue officiel GT-16-3, page PDF 31",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 ea590ff7ca9327db32b758bd2868bda08f08b393fa69d624786082d76c4ea419. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-genius-pneumatic-p31"
		],
		"workingPressureBar": [
			"october5-tools-genius-pneumatic-p31"
		],
		"demandExplanation": [
			"october5-tools-genius-pneumatic-p31"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;

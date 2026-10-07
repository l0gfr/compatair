import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-genius-tools-211000",
	"slug": "visseuse-genius-tools-211000",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Genius Tools 211000",
	"brand": "Genius Tools",
	"model": "211000",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-genius-tools-211000.svg",
		"alt": "Repères techniques : Genius Tools 211000",
		"sourceUrl": "https://geniustools.net/wp-content/uploads/pdf_catalogues/GT-16-3_LoRes.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "genius-tools-211000",
		"label": "Modèle 211000, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "211000",
			"Max. Torque / Nm": "140",
			"Weight / kg": "1.05"
		}
	},
	"editorial": {
		"overview": "Genius Tools 211000. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Max. Torque / Nm : 140.",
			"Weight / kg : 1.05.",
			"Capacity : 8H (6 ~ 10mm)."
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
			"value": "140",
			"evidenceIds": [
				"october5-tools-genius-pneumatic-p32"
			]
		},
		{
			"label": "Weight / kg",
			"value": "1.05",
			"evidenceIds": [
				"october5-tools-genius-pneumatic-p32"
			]
		},
		{
			"label": "Capacity",
			"value": "8H (6 ~ 10mm)",
			"evidenceIds": [
				"october5-tools-genius-pneumatic-p32"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-genius-pneumatic-p32",
			"sourceUrl": "https://geniustools.net/wp-content/uploads/pdf_catalogues/GT-16-3_LoRes.pdf#page=32",
			"sourceLabel": "Genius Tools catalogue officiel GT-16-3, page PDF 32",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 ea590ff7ca9327db32b758bd2868bda08f08b393fa69d624786082d76c4ea419. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"model": [
			"october5-tools-genius-pneumatic-p32"
		],
		"workingPressureBar": [
			"october5-tools-genius-pneumatic-p32"
		],
		"demandExplanation": [
			"october5-tools-genius-pneumatic-p32"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;

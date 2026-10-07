import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-genius-tools-501990",
	"slug": "riveteuse-genius-tools-501990",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "Genius Tools 501990",
	"brand": "Genius Tools",
	"model": "501990",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-genius-tools-501990.svg",
		"alt": "Repères techniques : Genius Tools 501990",
		"sourceUrl": "https://geniustools.net/wp-content/uploads/pdf_catalogues/GT-16-3_LoRes.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "genius-tools-501990",
		"label": "Modèle 501990, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "501990",
			"Stroke": "16mm (5/8 inch)",
			"Nosepiece": "3.2 / 4.0 / 4.8 mm"
		}
	},
	"editorial": {
		"overview": "Genius Tools 501990. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Stroke : 16mm (5/8 inch).",
			"Nosepiece : 3.2 / 4.0 / 4.8 mm."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Les tableaux sont transcrits depuis les pages PDF31–32 (folios62–65), avec revue visuelle des colonnes et des références.",
			"Le catalogue archive ces identités ; leur commercialisation actuelle n’est pas établie.",
			"Aucune consommation en charge ni pression de mesure n’est déduite du couple ou de la masse.",
			"L’unité Nm de la colonne Traction Power est incohérente avec une force ; cette colonne n’est pas normalisée. Le feuillet83 imprime une force en N pour certains modèles mais la consommation y est moyenne.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Stroke",
			"value": "16mm (5/8 inch)",
			"evidenceIds": [
				"october5-tools-genius-pneumatic-p32"
			]
		},
		{
			"label": "Nosepiece",
			"value": "3.2 / 4.0 / 4.8 mm",
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

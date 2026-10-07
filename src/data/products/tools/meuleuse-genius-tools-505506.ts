import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-genius-tools-505506",
	"slug": "meuleuse-genius-tools-505506",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Genius Tools 505506",
	"brand": "Genius Tools",
	"model": "505506",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-genius-tools-505506.svg",
		"alt": "Repères techniques : Genius Tools 505506",
		"sourceUrl": "https://geniustools.net/wp-content/uploads/pdf_catalogues/GT-16-3_LoRes.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "genius-tools-505506",
		"label": "Modèle 505506, SKU non établi",
		"distinguishingAttributes": {
			"manufacturerModel": "505506",
			"Spindle Thread": "M14 x 2.0P",
			"Horse Power / HP": "1.0"
		}
	},
	"editorial": {
		"overview": "Genius Tools 505506. Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"Spindle Thread : M14 x 2.0P.",
			"Horse Power / HP : 1.0.",
			"Free Speed / rpm : 12000."
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
			"label": "Spindle Thread",
			"value": "M14 x 2.0P",
			"evidenceIds": [
				"october5-tools-genius-pneumatic-p32"
			]
		},
		{
			"label": "Horse Power / HP",
			"value": "1.0",
			"evidenceIds": [
				"october5-tools-genius-pneumatic-p32"
			]
		},
		{
			"label": "Free Speed / rpm",
			"value": "12000",
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

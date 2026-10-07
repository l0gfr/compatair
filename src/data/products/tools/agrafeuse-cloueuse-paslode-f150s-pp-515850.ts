import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-paslode-f150s-pp-515850",
	"slug": "agrafeuse-cloueuse-paslode-f150s-pp-515850",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Paslode F150S-PP (réf. 515850)",
	"brand": "Paslode",
	"model": "F150S-PP",
	"mpn": "515850",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-paslode-f150s-pp-515850.svg",
		"alt": "Repères techniques : Paslode F150S-PP (réf. 515850)",
		"sourceUrl": "https://www.paslode.com/getmedia/37daf0bd-7867-47b6-918c-9b1022fc149c/515857-2-F150S-PP-Manual-English-Spanish.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "paslode-f150s-pp",
		"label": "Référence 515850",
		"distinguishingAttributes": {
			"reference": "515850",
			"HEIGHT": "11.7 inch",
			"WIDTH": "3.7 inch"
		}
	},
	"editorial": {
		"overview": "Paslode F150S-PP (réf. 515850). Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
		"verifiedFacts": [
			"HEIGHT : 11.7 inch.",
			"WIDTH : 3.7 inch.",
			"LENGTH : 13 inch.",
			"WEIGHT : 6 lbs.4 oz..",
			"MAGAZINE TYPE : 30 Degree, Strip.",
			"NAIL LENGTH : 1-1/2 inch.",
			"SHANK DIAMETER : .131 inch -.148 inch."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur.",
			"Une plage de pression de service ne constitue pas une mesure de consommation. La cadence de fixation doit être explicite pour un besoin en débit.",
			"Aucun volume d’un exemple générique de dimensionnement n’est attribué au modèle.",
			"Données déclarées dans les sources identifiées ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "HEIGHT",
			"value": "11.7 inch",
			"evidenceIds": [
				"october5-tools-paslode-f150-manual-p3"
			]
		},
		{
			"label": "WIDTH",
			"value": "3.7 inch",
			"evidenceIds": [
				"october5-tools-paslode-f150-manual-p3"
			]
		},
		{
			"label": "LENGTH",
			"value": "13 inch",
			"evidenceIds": [
				"october5-tools-paslode-f150-manual-p3"
			]
		},
		{
			"label": "WEIGHT",
			"value": "6 lbs.4 oz.",
			"evidenceIds": [
				"october5-tools-paslode-f150-manual-p3"
			]
		},
		{
			"label": "MAGAZINE TYPE",
			"value": "30 Degree, Strip",
			"evidenceIds": [
				"october5-tools-paslode-f150-manual-p3"
			]
		},
		{
			"label": "NAIL LENGTH",
			"value": "1-1/2 inch",
			"evidenceIds": [
				"october5-tools-paslode-f150-manual-p3"
			]
		},
		{
			"label": "SHANK DIAMETER",
			"value": ".131 inch -.148 inch",
			"evidenceIds": [
				"october5-tools-paslode-f150-manual-p3"
			]
		}
	],
	"evidence": [
		{
			"id": "october5-tools-paslode-f150-manual-p3",
			"sourceUrl": "https://www.paslode.com/getmedia/37daf0bd-7867-47b6-918c-9b1022fc149c/515857-2-F150S-PP-Manual-English-Spanish.pdf#page=3",
			"sourceLabel": "Paslode notice officielle F150S-PP, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-05",
			"confidence": "B",
			"notes": "Déclaration fabricant, capture SHA-256 eaea96094ab863b7df00b36c0f67597ae4a835b7ec7db915f9c2bcf9c78f3d77. Aucun essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october5-tools-paslode-f150-manual-p3"
		],
		"workingPressureBar": [
			"october5-tools-paslode-f150-manual-p3"
		],
		"demandExplanation": [
			"october5-tools-paslode-f150-manual-p3"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées. Le régime et le point de pression associés à une consommation utilisable restent insuffisants pour dimensionner le compresseur."
	]
};

export default product;

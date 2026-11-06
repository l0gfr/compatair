import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rupes-slp41a",
	"slug": "rupes-slp41a",
	"brand": "RUPES",
	"model": "SLP41A",
	"mpn": "SLP41A",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "RUPES SLP41A",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rupes-slp41a-20261106.svg",
		"alt": "Repères techniques RUPES SLP41A, référence SLP41A",
		"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=56",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RUPES SLP41A, référence SLP41A. Le tableau fabricant publie 400 L/min et une plage d’utilisation de 6,2 à 6,2 bar. Diamètre d’orbite : 4.8 mm. Format de plateau : 400x70 mm.",
		"verifiedFacts": [
			"Pression de service de 6,2 bar / 90 PSIG indiquée dans le même tableau.",
			"Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"Référence fabricant : SLP41A.",
			"Diamètre d’orbite : 4.8 mm.",
			"Format de plateau : 400x70 mm.",
			"Masse publiée : 2,4 kg."
		],
		"limitations": [
			"Le débit concerne l’outil. L’aspiration externe et les autres consommateurs de l’atelier doivent être examinés séparément.",
			"Les variantes d’orbite et de plateau ne sont pas interchangeables pour un même objectif de finition.",
			"Le régime de consommation publié reste documentaire : la pression de service ne prouve pas sa pression de mesure. Compatibilité indéterminée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de service de 6,2 bar / 90 PSIG indiquée dans le même tableau.",
			"evidenceIds": [
				"rupes-slp41a-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min.",
			"evidenceIds": [
				"rupes-slp41a-20260926"
			]
		},
		{
			"label": "Diamètre d’orbite",
			"value": "4.8 mm",
			"evidenceIds": [
				"rupes-slp41a-20260926"
			]
		},
		{
			"label": "Format de plateau",
			"value": "400x70 mm",
			"evidenceIds": [
				"rupes-slp41a-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2,4 kg",
			"evidenceIds": [
				"rupes-slp41a-20260926"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "4000 - 10000 tr/min",
			"evidenceIds": [
				"rupes-slp41a-20260926"
			]
		},
		{
			"label": "Consommation publiée, hors dimensionnement",
			"value": "400 L/min ; Le régime de consommation publié reste documentaire : la pression de service ne prouve pas sa pression de mesure. Compatibilité indéterminée.",
			"evidenceIds": [
				"review:2026-11-06-followup:rupes-slp41a:1"
			]
		}
	],
	"evidence": [
		{
			"id": "rupes-slp41a-20260926",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=56",
			"sourceLabel": "RUPES, catalogue 2026, édition 2, p. 56, réf. SLP41A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min."
		},
		{
			"id": "review:2026-11-06-followup:rupes-slp41a:1",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=56",
			"sourceLabel": "RUPES, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Catalogue56 SLP41A plateau400×70/orbite4,8mm/2,4kg/400Lminmax etservice6,2bar séparé;RE21ALN plateau70×198/360Lmin. Aucun appariement explicite de mesure, donc pas de verdict conclusif depuis ces deux cellules. SHA-256 du document complet : 018272fb053802b4e419d3f70bb75a46a02a62aec2a0404862ded7c21b443a63."
		}
	],
	"fieldSources": {
		"mpn": [
			"rupes-slp41a-20260926"
		],
		"workingPressureBar": [
			"rupes-slp41a-20260926"
		],
		"demandExplanation": [
			"review:2026-11-06-followup:rupes-slp41a:1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"demandExplanation": "Le régime de consommation publié reste documentaire : la pression de service ne prouve pas sa pression de mesure. Compatibilité indéterminée."
};

export default product;

import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rupes-lh76p",
	"slug": "rupes-lh76p",
	"brand": "RUPES",
	"model": "LH76P",
	"mpn": "LH76P",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "RUPES LH76P",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/rupes-lh76p.webp",
		"alt": "Repères techniques RUPES LH76P, référence LH76P",
		"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=65",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RUPES LH76P. La table donne la consommation et la pression de travail, sans qualifier le débit de maximum, de moyenne ni de débit en charge. Le moteur conserve un résultat indéterminé pour ce point. Référence fabricant : LH76P. Diamètre de plateau : 75 mm. Masse publiée : 1 kg. Vitesse publiée : 5000 tr/min.",
		"verifiedFacts": [
			"Pression de service de 6,2 bar / 90 PSIG indiquée dans le même tableau.",
			"Référence fabricant : LH76P.",
			"Diamètre de plateau : 75 mm.",
			"Masse publiée : 1 kg.",
			"Vitesse publiée : 5000 tr/min.",
			"Consommation de régime non précisé publiée : 644 L/min."
		],
		"limitations": [
			"Le débit concerne l’outil. L’aspiration externe et les autres consommateurs de l’atelier doivent être examinés séparément.",
			"Les variantes d’orbite et de plateau ne sont pas interchangeables pour un même objectif de finition.",
			"La table donne la consommation et la pression de travail, sans qualifier le débit de maximum, de moyenne ni de débit en charge. Le moteur conserve un résultat indéterminé pour ce point."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de service de 6,2 bar / 90 PSIG indiquée dans le même tableau.",
			"evidenceIds": [
				"rupes-lh76p-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation de régime non précisé publiée : 644 L/min.",
			"evidenceIds": [
				"rupes-lh76p-reserved-20261031-1"
			]
		},
		{
			"label": "Diamètre de plateau",
			"value": "75 mm",
			"evidenceIds": [
				"rupes-lh76p-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1 kg",
			"evidenceIds": [
				"rupes-lh76p-20260926"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "5000 tr/min",
			"evidenceIds": [
				"rupes-lh76p-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":644,\"typical\":644,\"max\":644},\"workingPressureBar\":{\"min\":6.2,\"typical\":6.2,\"max\":6.2}}",
			"evidenceIds": [
				"rupes-lh76p-20260926",
				"rupes-lh76p-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "rupes-lh76p-20260926",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=65",
			"sourceLabel": "RUPES, catalogue 2026, édition 2, p. 65, réf. LH76P",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min."
		},
		{
			"id": "rupes-lh76p-reserved-20261031-1",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=65",
			"sourceLabel": "RUPES LH76P : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 018272fb053802b4e419d3f70bb75a46a02a62aec2a0404862ded7c21b443a63. La table donne la consommation et la pression de travail, sans qualifier le débit de maximum, de moyenne ni de débit en charge. Le moteur conserve un résultat indéterminé pour ce point."
		}
	],
	"fieldSources": {
		"mpn": [
			"rupes-lh76p-20260926"
		],
		"workingPressureBar": [
			"rupes-lh76p-20260926"
		],
		"airflowLpm": [
			"rupes-lh76p-20260926"
		],
		"airflowBasis": [
			"rupes-lh76p-reserved-20261031-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 644,
		"typical": 644,
		"max": 644
	},
	"airflowBasis": "unqualified"
};

export default product;

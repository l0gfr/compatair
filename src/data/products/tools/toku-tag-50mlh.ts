import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "toku-tag-50mlh",
	"slug": "toku-tag-50mlh",
	"brand": "Toku",
	"model": "TAG-50MLH",
	"mpn": "TAG-50MLH",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Toku TAG-50MLH",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-tag-50mlh-technical-20261115-followup.svg",
		"alt": "Repères techniques Toku TAG-50MLH, référence TAG-50MLH",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"editorial": {
		"overview": "Toku TAG-50MLH : disque 125 × (0,8–7) × 22,2 mm, broche M14 × 2 et 12 000 tr/min. La TAG-45MLH utilise un disque 115 mm à 13 000 tr/min ; la TAG-40FLH passe au disque 100 mm et à la broche M8. Le montage du disque distingue ces références.",
		"verifiedFacts": [
			"Disque : 125 × (0,8–7) × 22,2 mm.",
			"Broche : M14 × 2.",
			"Puissance : 0,67 kW.",
			"Vitesse à vide : 12 000 tr/min.",
			"Masse : 1,8 kg.",
			"Consommation documentaire : 10,8 L/s, régime non précisé."
		],
		"limitations": [
			"Le régime et la pression de mesure de la consommation ne sont pas établis par cette table. Les consignes de service restent séparées ; la compatibilité demeure indéterminée.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Disque",
			"value": "125 × (0,8–7) × 22,2 mm",
			"evidenceIds": [
				"review:2026-11-12-technical:toku-tag-50mlh:0"
			]
		},
		{
			"label": "Broche",
			"value": "M14 × 2",
			"evidenceIds": [
				"review:2026-11-12-technical:toku-tag-50mlh:0"
			]
		},
		{
			"label": "Puissance",
			"value": "0,67 kW",
			"evidenceIds": [
				"review:2026-11-12-technical:toku-tag-50mlh:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"review:2026-11-12-technical:toku-tag-50mlh:0"
			]
		},
		{
			"label": "Masse",
			"value": "1,8 kg",
			"evidenceIds": [
				"review:2026-11-12-technical:toku-tag-50mlh:0"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "10,8 L/s, régime non précisé",
			"evidenceIds": [
				"review:2026-11-12-technical:toku-tag-50mlh:0"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-tag-50mlh-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 45, réf. TAG-50MLH",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 10.8 L/s, convertis en 648 L/min par multiplication par 60."
		},
		{
			"id": "toku-tag-50mlh-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-12-technical:toku-tag-50mlh:0",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
			"sourceLabel": "Toku, document fabricant, pages PDF 45",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "Toku TAG-50MLH : disque 125 × (0,8–7) × 22,2 mm, broche M14 × 2 et 12 000 tr/min. La TAG-45MLH utilise un disque 115 mm à 13 000 tr/min ; la TAG-40FLH passe au disque 100 mm et à la broche M8. Le montage du disque distingue ces références. GET complet : SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-12-technical:toku-tag-50mlh:0"
		],
		"demandExplanation": [
			"review:2026-11-12-technical:toku-tag-50mlh:0"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:toku-tag-50mlh:0"
		]
	},
	"notes": [
		"Le régime et la pression de mesure de la consommation ne sont pas établis par cette table. Les consignes de service restent séparées ; la compatibilité demeure indéterminée."
	],
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 3/8\"",
	"demandExplanation": "Le régime et la pression de mesure de la consommation ne sont pas établis par cette table. Les consignes de service restent séparées ; la compatibilité demeure indéterminée."
};

export default product;

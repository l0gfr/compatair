import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-g-70ef",
	"slug": "yokota-g-70ef",
	"brand": "Yokota",
	"model": "G-70EF",
	"mpn": "G-70EF",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Yokota G-70EF",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-g-70ef-technical-20261115-followup.svg",
		"alt": "Repères techniques Yokota G-70EF, référence G-70EF",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"editorial": {
		"overview": "Yokota G-70EF : meuleuse pour disque 180 × (1,6–8) × 22,2 mm, broche 5/8 pouce et puissance 1,12 kW. Les G-40EF et G-50EF utilisent des disques 115 et 125 mm et une broche 7/16 pouce. La G-70EF tourne à 8 500 tr/min et pèse 2,9 kg.",
		"verifiedFacts": [
			"Disque : 180 × (1,6–8) × 22,2 mm.",
			"Broche : 5/8 pouce.",
			"Puissance : 1,12 kW.",
			"Vitesse à vide : 8 500 tr/min.",
			"Masse : 2,9 kg.",
			"Consommation documentaire : 16,7 L/s, régime non précisé."
		],
		"limitations": [
			"Le régime et la pression de mesure de la consommation ne sont pas établis par cette table. Les consignes de service restent séparées ; la compatibilité demeure indéterminée.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Disque",
			"value": "180 × (1,6–8) × 22,2 mm",
			"evidenceIds": [
				"review:2026-11-12-technical:yokota-g-70ef:0"
			]
		},
		{
			"label": "Broche",
			"value": "5/8 pouce",
			"evidenceIds": [
				"review:2026-11-12-technical:yokota-g-70ef:0"
			]
		},
		{
			"label": "Puissance",
			"value": "1,12 kW",
			"evidenceIds": [
				"review:2026-11-12-technical:yokota-g-70ef:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "8 500 tr/min",
			"evidenceIds": [
				"review:2026-11-12-technical:yokota-g-70ef:0"
			]
		},
		{
			"label": "Masse",
			"value": "2,9 kg",
			"evidenceIds": [
				"review:2026-11-12-technical:yokota-g-70ef:0"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "16,7 L/s, régime non précisé",
			"evidenceIds": [
				"review:2026-11-12-technical:yokota-g-70ef:0"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-g-70ef-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 45, réf. G-70EF",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 16.7 L/s, convertis en 1002 L/min par multiplication par 60."
		},
		{
			"id": "yokota-g-70ef-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-12-technical:yokota-g-70ef:0",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
			"sourceLabel": "Yokota, document fabricant, pages PDF 45",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "Yokota G-70EF : meuleuse pour disque 180 × (1,6–8) × 22,2 mm, broche 5/8 pouce et puissance 1,12 kW. Les G-40EF et G-50EF utilisent des disques 115 et 125 mm et une broche 7/16 pouce. La G-70EF tourne à 8 500 tr/min et pèse 2,9 kg. GET complet : SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-12-technical:yokota-g-70ef:0"
		],
		"demandExplanation": [
			"review:2026-11-12-technical:yokota-g-70ef:0"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:yokota-g-70ef:0"
		]
	},
	"notes": [
		"Le régime et la pression de mesure de la consommation ne sont pas établis par cette table. Les consignes de service restent séparées ; la compatibilité demeure indéterminée."
	],
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"connectorSize": "PT 3/8\"",
	"demandExplanation": "Le régime et la pression de mesure de la consommation ne sont pas établis par cette table. Les consignes de service restent séparées ; la compatibilité demeure indéterminée."
};

export default product;

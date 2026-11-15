import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-yd-5a",
	"slug": "yokota-yd-5a",
	"brand": "Yokota",
	"model": "YD-5A",
	"mpn": "YD-5A",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Yokota YD-5A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yd-5a-technical-20261115-followup.svg",
		"alt": "Repères techniques Yokota YD-5A, référence YD-5A",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"editorial": {
		"overview": "Yokota YD-5A : visseuse droite à un marteau, porte-outil hexagonal 1/4 pouce et couple publié 15,5 Nm. Les YD-3A et YD-4A conservent cette architecture avec 7,5 et 12 Nm. La YD-5A est donnée pour 10 000 tr/min et 0,9 kg, contre 12 000 tr/min et 0,5 kg pour la YD-3A.",
		"verifiedFacts": [
			"Porte-outil : Hexagonal 1/4 pouce.",
			"Mécanisme : Un marteau.",
			"Couple publié : 15,5 Nm.",
			"Vitesse à vide : 10 000 tr/min.",
			"Masse : 0,9 kg.",
			"Consommation documentaire : 3,2 L/s, régime non précisé."
		],
		"limitations": [
			"Le régime et la pression de mesure de la consommation ne sont pas établis par cette table. Les consignes de service restent séparées ; la compatibilité demeure indéterminée.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Porte-outil",
			"value": "Hexagonal 1/4 pouce",
			"evidenceIds": [
				"review:2026-11-12-technical:yokota-yd-5a:0"
			]
		},
		{
			"label": "Mécanisme",
			"value": "Un marteau",
			"evidenceIds": [
				"review:2026-11-12-technical:yokota-yd-5a:0"
			]
		},
		{
			"label": "Couple publié",
			"value": "15,5 Nm",
			"evidenceIds": [
				"review:2026-11-12-technical:yokota-yd-5a:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "10 000 tr/min",
			"evidenceIds": [
				"review:2026-11-12-technical:yokota-yd-5a:0"
			]
		},
		{
			"label": "Masse",
			"value": "0,9 kg",
			"evidenceIds": [
				"review:2026-11-12-technical:yokota-yd-5a:0"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "3,2 L/s, régime non précisé",
			"evidenceIds": [
				"review:2026-11-12-technical:yokota-yd-5a:0"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yd-5a-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=41",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 41, réf. YD-5A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 3.2 L/s, convertis en 192 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yd-5a-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-12-technical:yokota-yd-5a:0",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
			"sourceLabel": "Yokota, document fabricant, pages PDF 41",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "Yokota YD-5A : visseuse droite à un marteau, porte-outil hexagonal 1/4 pouce et couple publié 15,5 Nm. Les YD-3A et YD-4A conservent cette architecture avec 7,5 et 12 Nm. La YD-5A est donnée pour 10 000 tr/min et 0,9 kg, contre 12 000 tr/min et 0,5 kg pour la YD-3A. GET complet : SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-12-technical:yokota-yd-5a:0"
		],
		"demandExplanation": [
			"review:2026-11-12-technical:yokota-yd-5a:0"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:yokota-yd-5a:0"
		]
	},
	"notes": [
		"Le régime et la pression de mesure de la consommation ne sont pas établis par cette table. Les consignes de service restent séparées ; la compatibilité demeure indéterminée."
	],
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/8\"",
	"demandExplanation": "Le régime et la pression de mesure de la consommation ne sont pas établis par cette table. Les consignes de service restent séparées ; la compatibilité demeure indéterminée."
};

export default product;

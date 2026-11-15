import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "toku-mi-17c",
	"slug": "toku-mi-17c",
	"brand": "Toku",
	"model": "MI-17C",
	"mpn": "MI-17C",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Toku MI-17C",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-mi-17c-technical-20261115-followup.svg",
		"alt": "Repères techniques Toku MI-17C, référence MI-17C",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"editorial": {
		"overview": "Toku MI-17C : clé à chocs à double marteau et carré 1/2 pouce, 8 800 tr/min et masse 1,8 kg. La MI-17MG conserve le carré et le mécanisme avec 5 500 tr/min et 2,4 kg. Le catalogue distingue le couple publié 815 Nm du maximum de desserrage 1 600 Nm de la MI-17C.",
		"verifiedFacts": [
			"Carré : 1/2 pouce.",
			"Mécanisme : Double marteau.",
			"Vitesse à vide : 8 800 tr/min.",
			"Couple publié : 815 Nm.",
			"Maximum de desserrage : 1 600 Nm.",
			"Masse : 1,8 kg.",
			"Consommation en charge, hors calcul : 13,3 L/s ; 798 L/min."
		],
		"limitations": [
			"La consommation en charge est documentée, mais son appariement à une pression de mesure n’est pas établi. Les consignes de service restent séparées ; la compatibilité demeure indéterminée.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "1/2 pouce",
			"evidenceIds": [
				"review:2026-11-12-technical:toku-mi-17c:0"
			]
		},
		{
			"label": "Mécanisme",
			"value": "Double marteau",
			"evidenceIds": [
				"review:2026-11-12-technical:toku-mi-17c:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "8 800 tr/min",
			"evidenceIds": [
				"review:2026-11-12-technical:toku-mi-17c:0"
			]
		},
		{
			"label": "Couple publié",
			"value": "815 Nm",
			"evidenceIds": [
				"review:2026-11-12-technical:toku-mi-17c:0"
			]
		},
		{
			"label": "Maximum de desserrage",
			"value": "1 600 Nm",
			"evidenceIds": [
				"review:2026-11-12-technical:toku-mi-17c:0"
			]
		},
		{
			"label": "Masse",
			"value": "1,8 kg",
			"evidenceIds": [
				"review:2026-11-12-technical:toku-mi-17c:0"
			]
		},
		{
			"label": "Consommation en charge, hors calcul",
			"value": "13,3 L/s ; 798 L/min",
			"evidenceIds": [
				"review:2026-11-12-technical:toku-mi-17c:0"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-mi-17c-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 38, réf. MI-17C",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 13.3 L/s, convertis en 798 L/min par multiplication par 60."
		},
		{
			"id": "toku-mi-17c-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-12-technical:toku-mi-17c:0",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
			"sourceLabel": "Toku, document fabricant, pages PDF 38",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "Toku MI-17C : clé à chocs à double marteau et carré 1/2 pouce, 8 800 tr/min et masse 1,8 kg. La MI-17MG conserve le carré et le mécanisme avec 5 500 tr/min et 2,4 kg. Le catalogue distingue le couple publié 815 Nm du maximum de desserrage 1 600 Nm de la MI-17C. GET complet : SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-12-technical:toku-mi-17c:0"
		],
		"demandExplanation": [
			"review:2026-11-12-technical:toku-mi-17c:0"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:toku-mi-17c:0"
		]
	},
	"notes": [
		"La consommation en charge est documentée, mais son appariement à une pression de mesure n’est pas établi. Les consignes de service restent séparées ; la compatibilité demeure indéterminée."
	],
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\"",
	"demandExplanation": "La consommation en charge est documentée, mais son appariement à une pression de mesure n’est pas établi. Les consignes de service restent séparées ; la compatibilité demeure indéterminée."
};

export default product;

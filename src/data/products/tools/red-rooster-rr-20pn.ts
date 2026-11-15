import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rr-20pn",
	"slug": "red-rooster-rr-20pn",
	"brand": "Red Rooster",
	"model": "RR-20PN",
	"mpn": "RR-20PN",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Red Rooster RR-20PN",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rr-20pn-technical-20261115-followup.svg",
		"alt": "Repères techniques Red Rooster RR-20PN, référence RR-20PN",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"editorial": {
		"overview": "Red Rooster RR-20PN : carré 3/4 pouce, mécanisme à un marteau, 720 Nm publiés et masse 4,6 kg. La RR-24N du même tableau est une double-marteau de 3,4 kg, à 1 625 Nm. Le raccord PT 1/4 pouce de la RR-20PN diffère du PT 3/8 de la RR-24N.",
		"verifiedFacts": [
			"Carré : 3/4 pouce.",
			"Mécanisme : Un marteau.",
			"Couple publié : 720 Nm.",
			"Vitesse à vide : 4 800 tr/min.",
			"Masse : 4,6 kg.",
			"Consommation en charge, hors calcul : 10,5 L/s ; 630 L/min.",
			"Raccord : PT 1/4 pouce.",
			"Flexible intérieur conseillé : 10 mm."
		],
		"limitations": [
			"La consommation en charge est documentée, mais son appariement à une pression de mesure n’est pas établi. Les consignes de service restent séparées ; la compatibilité demeure indéterminée.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "3/4 pouce",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rr-20pn:0"
			]
		},
		{
			"label": "Mécanisme",
			"value": "Un marteau",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rr-20pn:0"
			]
		},
		{
			"label": "Couple publié",
			"value": "720 Nm",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rr-20pn:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4 800 tr/min",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rr-20pn:0"
			]
		},
		{
			"label": "Masse",
			"value": "4,6 kg",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rr-20pn:0"
			]
		},
		{
			"label": "Consommation en charge, hors calcul",
			"value": "10,5 L/s ; 630 L/min",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rr-20pn:0"
			]
		},
		{
			"label": "Raccord",
			"value": "PT 1/4 pouce",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rr-20pn:0"
			]
		},
		{
			"label": "Flexible intérieur conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rr-20pn:0"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rr-20pn-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=38",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 38, réf. RR-20PN",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 10.5 L/s, convertis en 630 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rr-20pn-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-12-technical:red-rooster-rr-20pn:0",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
			"sourceLabel": "Red Rooster, document fabricant, pages PDF 38",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "Red Rooster RR-20PN : carré 3/4 pouce, mécanisme à un marteau, 720 Nm publiés et masse 4,6 kg. La RR-24N du même tableau est une double-marteau de 3,4 kg, à 1 625 Nm. Le raccord PT 1/4 pouce de la RR-20PN diffère du PT 3/8 de la RR-24N. GET complet : SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-12-technical:red-rooster-rr-20pn:0"
		],
		"demandExplanation": [
			"review:2026-11-12-technical:red-rooster-rr-20pn:0"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:red-rooster-rr-20pn:0"
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

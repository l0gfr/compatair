import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rri-180",
	"slug": "red-rooster-rri-180",
	"brand": "Red Rooster",
	"model": "RRI-180",
	"mpn": "RRI-180",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Red Rooster RRI-180",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-180-technical-20261115-followup.svg",
		"alt": "Repères techniques Red Rooster RRI-180, référence RRI-180",
		"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"editorial": {
		"overview": "Red Rooster RRI-180 : visseuse hydrotension sans coupure d’air, carré 3/4 pouce, plage indicative 180–255 Nm et 2 700 tr/min. La RRI-100 du même tableau utilise un carré 1/2 pouce, 85–120 Nm et 5 300 tr/min. La RRI-180 mesure 263 mm sur la cote A du schéma.",
		"verifiedFacts": [
			"Commande : Sans coupure d’air.",
			"Carré : 3/4 pouce.",
			"Couple indicatif : 180–255 Nm.",
			"Vitesse à vide : 2 700 tr/min.",
			"Cote A du schéma : 263 mm.",
			"Masse : 3,8 kg.",
			"Consommation documentaire : 12,2 L/s, régime non précisé."
		],
		"limitations": [
			"Le régime et la pression de mesure de la consommation ne sont pas établis par cette table. Les consignes de service restent séparées ; la compatibilité demeure indéterminée.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer.",
			"Les couples publiés restent liés aux conditions d’assemblage ; aucune économie par cycle n’est déduite."
		]
	},
	"specifications": [
		{
			"label": "Commande",
			"value": "Sans coupure d’air",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rri-180:0"
			]
		},
		{
			"label": "Carré",
			"value": "3/4 pouce",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rri-180:0"
			]
		},
		{
			"label": "Couple indicatif",
			"value": "180–255 Nm",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rri-180:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2 700 tr/min",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rri-180:0"
			]
		},
		{
			"label": "Cote A du schéma",
			"value": "263 mm",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rri-180:0"
			]
		},
		{
			"label": "Masse",
			"value": "3,8 kg",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rri-180:0"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "12,2 L/s, régime non précisé",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rri-180:0"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-180-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=23",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 23, réf. RRI-180",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 12.2 L/s, convertis en 732 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-180-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-12-technical:red-rooster-rri-180:0",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf",
			"sourceLabel": "Red Rooster, document fabricant, pages PDF 23",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "Red Rooster RRI-180 : visseuse hydrotension sans coupure d’air, carré 3/4 pouce, plage indicative 180–255 Nm et 2 700 tr/min. La RRI-100 du même tableau utilise un carré 1/2 pouce, 85–120 Nm et 5 300 tr/min. La RRI-180 mesure 263 mm sur la cote A du schéma. GET complet : SHA-256 6b7dca4923bfef1dbe2c7f6691e91e07f92fec5c1fa3b8d56f211ecbdb5e4845. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-12-technical:red-rooster-rri-180:0"
		],
		"demandExplanation": [
			"review:2026-11-12-technical:red-rooster-rri-180:0"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:red-rooster-rri-180:0"
		]
	},
	"notes": [
		"Le régime et la pression de mesure de la consommation ne sont pas établis par cette table. Les consignes de service restent séparées ; la compatibilité demeure indéterminée."
	],
	"recommendedHose": {
		"innerDiameterMm": 11
	},
	"demandExplanation": "Le régime et la pression de mesure de la consommation ne sont pas établis par cette table. Les consignes de service restent séparées ; la compatibilité demeure indéterminée."
};

export default product;

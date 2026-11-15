import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rri-sa10604",
	"slug": "red-rooster-rri-sa10604",
	"brand": "Red Rooster",
	"model": "RRI-SA10604",
	"mpn": "RRI-SA10604",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Red Rooster RRI-SA10604",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-sa10604-technical-20261115-followup.svg",
		"alt": "Repères techniques Red Rooster RRI-SA10604, référence RRI-SA10604",
		"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"editorial": {
		"overview": "Red Rooster RRI-SA10604 : clé d’angle à arrêt automatique, carré 1/4 pouce, plage 0,8–6 Nm et 450 tr/min. La variante W passe au carré 3/8 pouce ; la SA10505 garde le carré 1/4 avec 0,8–5 Nm et 550 tr/min. Les couples de cette table sont mesurés sur assemblage dur.",
		"verifiedFacts": [
			"Carré : 1/4 pouce.",
			"Couple, assemblage dur : 0,8–6 Nm.",
			"Vitesse à vide : 450 tr/min.",
			"Cote A du schéma : 309 mm.",
			"Masse : 1,02 kg.",
			"Consommation documentaire : 7,5 L/s, régime non précisé."
		],
		"limitations": [
			"Le régime et la pression de mesure de la consommation ne sont pas établis par cette table. Les consignes de service restent séparées ; la compatibilité demeure indéterminée.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer.",
			"Les couples publiés restent liés aux conditions d’assemblage ; aucune économie par cycle n’est déduite."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "1/4 pouce",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rri-sa10604:0"
			]
		},
		{
			"label": "Couple, assemblage dur",
			"value": "0,8–6 Nm",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rri-sa10604:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "450 tr/min",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rri-sa10604:0"
			]
		},
		{
			"label": "Cote A du schéma",
			"value": "309 mm",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rri-sa10604:0"
			]
		},
		{
			"label": "Masse",
			"value": "1,02 kg",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rri-sa10604:0"
			]
		},
		{
			"label": "Consommation documentaire",
			"value": "7,5 L/s, régime non précisé",
			"evidenceIds": [
				"review:2026-11-12-technical:red-rooster-rri-sa10604:0"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-sa10604-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=29",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 29, réf. RRI-SA10604",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 7.5 L/s, convertis en 450 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-sa10604-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-12-technical:red-rooster-rri-sa10604:0",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf",
			"sourceLabel": "Red Rooster, document fabricant, pages PDF 29",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "Red Rooster RRI-SA10604 : clé d’angle à arrêt automatique, carré 1/4 pouce, plage 0,8–6 Nm et 450 tr/min. La variante W passe au carré 3/8 pouce ; la SA10505 garde le carré 1/4 avec 0,8–5 Nm et 550 tr/min. Les couples de cette table sont mesurés sur assemblage dur. GET complet : SHA-256 6b7dca4923bfef1dbe2c7f6691e91e07f92fec5c1fa3b8d56f211ecbdb5e4845. Historique conservé."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-12-technical:red-rooster-rri-sa10604:0"
		],
		"demandExplanation": [
			"review:2026-11-12-technical:red-rooster-rri-sa10604:0"
		],
		"workingPressureBar": [
			"review:2026-11-12-technical:red-rooster-rri-sa10604:0"
		]
	},
	"notes": [
		"Le régime et la pression de mesure de la consommation ne sont pas établis par cette table. Les consignes de service restent séparées ; la compatibilité demeure indéterminée."
	],
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "1/4\"",
	"demandExplanation": "Le régime et la pression de mesure de la consommation ne sont pas établis par cette table. Les consignes de service restent séparées ; la compatibilité demeure indéterminée."
};

export default product;

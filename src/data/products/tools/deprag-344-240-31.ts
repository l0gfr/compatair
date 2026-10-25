import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "deprag-344-240-31",
	"slug": "deprag-344-240-31",
	"brand": "DEPRAG",
	"model": "344-240-31",
	"mpn": "404623D",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 344-240-31",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-344-240-31.webp",
		"alt": "Repères techniques DEPRAG 344-240-31, référence 404623D",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3130/D3130en.pdf#page=12",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "344-240-31, commande 404623D : broche de vissage intégrée à démarrage distant, rotation droite et arrêt à droite, 40 à 180 Nm à 115 tr/min. La variante réversible 344-240-31U est une autre commande, avec 35–150 Nm et 90 tr/min. La table déclare 1,1 m³/min à 6,3 bar et un tuyau d’alimentation de 12/8 mm extérieur/intérieur.",
		"verifiedFacts": [
			"344-240-31, 404623D, tourne à droite avec arrêt à droite : 40–180 Nm et 115 tr/min. La 344-240-31U, 202270D, est réversible : 35–150 Nm et 90 tr/min. Toutes deux déclarent 1,1 m³/min à 6,3 bar.",
			"Le régime de la consommation publiée n’est pas précisé ; cette valeur n’est pas assimilée à un maximum de travail."
		],
		"limitations": [
			"Le régime de la ligne Air consumption n’est pas qualifié.",
			"Le 12/8 mm d’alimentation est distinct du tuyau de commande 4/2,5 mm.",
			"Les lignes Pressure en N/lbs sont des efforts mécaniques : elles ne sont jamais converties en pression d’air."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"evidenceIds": [
				"deprag-404623d-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-404623d-20260926"
			]
		},
		{
			"label": "Couple minimal",
			"value": "40 Nm",
			"evidenceIds": [
				"deprag-404623d-20260926"
			]
		},
		{
			"label": "Couple maximal",
			"value": "180 Nm",
			"evidenceIds": [
				"deprag-404623d-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "115 tr/min",
			"evidenceIds": [
				"deprag-404623d-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "Remote Start",
			"evidenceIds": [
				"deprag-404623d-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Spindle right rotation, right shut-off",
			"evidenceIds": [
				"deprag-404623d-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-404623d-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3130/D3130en.pdf#page=12",
			"sourceLabel": "DEPRAG, brochure technique D3130en, p. 12, réf. 404623D",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		},
		{
			"id": "review-20261025-deprag-344-240-31-s046",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3130/D3130en.pdf#page=12",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s046, pages PDF 12",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:35.922901+00:00, SHA-256 9d445214624acd388e222274452a61e9bc2026c82f3d78fae74d146516a75dbd. 344-240-31, 404623D, tourne à droite avec arrêt à droite : 40–180 Nm et 115 tr/min. La 344-240-31U, 202270D, est réversible : 35–150 Nm et 90 tr/min. Toutes deux déclarent 1,1 m³/min à 6,3 bar. Limite : Le régime de la ligne Air consumption n’est pas qualifié ; ajouter airflowBasis=unqualified."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-404623d-20260926"
		],
		"workingPressureBar": [
			"deprag-404623d-20260926"
		],
		"airflowLpm": [
			"deprag-404623d-20260926",
			"review-20261025-deprag-344-240-31-s046"
		],
		"airflowBasis": [
			"review-20261025-deprag-344-240-31-s046"
		],
		"recommendedHose": [
			"review-20261025-deprag-344-240-31-s046"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : Le régime de la ligne Air consumption n’est pas qualifié ; ajouter airflowBasis=unqualified."
	],
	"airflowLpm": {
		"min": 1100,
		"typical": 1100,
		"max": 1100
	},
	"airflowBasis": "unqualified",
	"recommendedHose": {
		"innerDiameterMm": 8
	}
};

export default product;

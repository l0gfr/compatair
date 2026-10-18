import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "deprag-305-3257ul",
	"slug": "deprag-305-3257ul",
	"brand": "DEPRAG",
	"model": "305-3257UL",
	"mpn": "352587E",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 305-3257UL",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-305-3257ul.webp",
		"alt": "Repères techniques DEPRAG 305-3257UL, référence 352587E",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3530/D3530en.pdf#page=2",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "305-3257UL 352587E : visseuse pistolet pour démontage horizontal, à rotation principale gauche et inversion possible. Les 15 Nm du tableau désignent le couple maximal de desserrage, à 525 tr/min à vide. La 305-4257UL voisine annonce 18 Nm et 270 tr/min ; les deux déclarent 0,35 m³/min à 6,3 bar.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 352587E.",
			"Couple maximal de desserrage : 15 Nm.",
			"Vitesse à vide : 525 tr/min.",
			"Démarrage / exécution du catalogue : reversible to right rotation."
		],
		"limitations": [
			"Le débit de 350 L/min n’est pas qualifié par un régime de charge : aucun besoin continu n’est garanti.",
			"DEPRAG prescrit un support de réaction au-delà de 10 Nm pour la poignée pistolet ; le réglage et le maintien doivent suivre la notice. Le couple de desserrage ne devient pas un réglage de serrage."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"evidenceIds": [
				"deprag-352587e-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-352587e-20260926"
			]
		},
		{
			"label": "Couple maximal de desserrage",
			"value": "15 Nm",
			"evidenceIds": [
				"deprag-352587e-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "525 tr/min",
			"evidenceIds": [
				"deprag-352587e-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "reversible to right rotation",
			"evidenceIds": [
				"deprag-352587e-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Screwdriver, left rotation",
			"evidenceIds": [
				"deprag-352587e-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-352587e-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3530/D3530en.pdf#page=2",
			"sourceLabel": "DEPRAG, brochure technique D3530en, p. 2, réf. 352587E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-352587e-20260926"
		],
		"workingPressureBar": [
			"deprag-352587e-20260926"
		],
		"airflowLpm": [
			"deprag-352587e-20260926"
		],
		"airflowBasis": [
			"deprag-352587e-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 350,
		"typical": 350,
		"max": 350
	},
	"airflowBasis": "unqualified"
};

export default product;

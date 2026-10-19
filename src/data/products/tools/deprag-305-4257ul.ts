import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "deprag-305-4257ul",
	"slug": "deprag-305-4257ul",
	"brand": "DEPRAG",
	"model": "305-4257UL",
	"mpn": "352587F",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 305-4257UL",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-305-4257ul.webp",
		"alt": "Repères techniques DEPRAG 305-4257UL, référence 352587F",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3530/D3530en.pdf#page=2",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 305-4257UL 352587F : visseuse de démontage à poignée pistolet, 270 tr/min à vide et couple maximal de desserrage de 18 Nm. La 305-3257UL voisine donne 525 tr/min et 15 Nm. Les deux déclarent 0,35 m³/min à 6,3 bar, soit 350 L/min, sans régime d’air qualifié.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 352587F.",
			"Couple maximal de desserrage : 18 Nm.",
			"Vitesse à vide : 270 tr/min.",
			"Démarrage / exécution du catalogue : reversible to right rotation."
		],
		"limitations": [
			"Le couple de desserrage n’est pas une plage de serrage contrôlé. Le fabricant demande un appui de réaction pour le maximum au-delà de 10 Nm sur la version pistolet ; son montage doit suivre la notice.",
			"Le couple et la vitesse correspondent à la colonne de cette référence commande, pas à l’ensemble de la famille.",
			"Les broches intégrées nécessitent aussi le dimensionnement des auxiliaires de l’installation, qui ne sont pas inclus dans la consommation du moteur de vissage."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"evidenceIds": [
				"deprag-352587f-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-352587f-20260926"
			]
		},
		{
			"label": "Couple maximal de desserrage",
			"value": "18 Nm",
			"evidenceIds": [
				"deprag-352587f-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "270 tr/min",
			"evidenceIds": [
				"deprag-352587f-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "reversible to right rotation",
			"evidenceIds": [
				"deprag-352587f-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Screwdriver, left rotation",
			"evidenceIds": [
				"deprag-352587f-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-352587f-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3530/D3530en.pdf#page=2",
			"sourceLabel": "DEPRAG, brochure technique D3530en, p. 2, réf. 352587F",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		},
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
			"deprag-352587f-20260926"
		],
		"workingPressureBar": [
			"deprag-352587f-20260926"
		],
		"airflowLpm": [
			"deprag-352587f-20260926"
		],
		"airflowBasis": [
			"deprag-352587f-20260926"
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

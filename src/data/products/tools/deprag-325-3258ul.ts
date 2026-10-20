import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "deprag-325-3258ul",
	"slug": "deprag-325-3258ul",
	"brand": "DEPRAG",
	"model": "325-3258UL",
	"mpn": "362714A",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 325-3258UL",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-325-3258ul.webp",
		"alt": "Repères techniques DEPRAG 325-3258UL, référence 362714A",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3530/D3530en.pdf#page=2",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "325-3258UL 362714A : visseuse droite pour démontage vertical, 640 tr/min et couple maximal de desserrage de 10 Nm. La 377-521U voisine répond à une autre fonction de vissage et à une autre plage de couple. La 325 publie 0,35 m³/min à 6,3 bar, soit 350 L/min sans régime d’air précisé. L’inversion et la réaction de desserrage font partie du choix.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 362714A.",
			"Couple maximal de desserrage : 10 Nm.",
			"Vitesse à vide : 640 tr/min.",
			"Démarrage / exécution du catalogue : reversible to right rotation."
		],
		"limitations": [
			"Le couple de desserrage ne devient pas une plage de serrage contrôlé. Le fabricant exige un appui de réaction au-dessus de 4 Nm sur l’exécution droite.",
			"Le couple et la vitesse correspondent à la colonne de cette référence commande, pas à l’ensemble de la famille.",
			"Les broches intégrées nécessitent aussi le dimensionnement des auxiliaires de l’installation, qui ne sont pas inclus dans la consommation du moteur de vissage."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"evidenceIds": [
				"deprag-362714a-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-362714a-20260926"
			]
		},
		{
			"label": "Couple maximal de desserrage",
			"value": "10 Nm",
			"evidenceIds": [
				"deprag-362714a-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "640 tr/min",
			"evidenceIds": [
				"deprag-362714a-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "reversible to right rotation",
			"evidenceIds": [
				"deprag-362714a-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Screwdriver, left rotation",
			"evidenceIds": [
				"deprag-362714a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-362714a-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3530/D3530en.pdf#page=2",
			"sourceLabel": "DEPRAG, brochure technique D3530en, p. 2, réf. 362714A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		},
		{
			"id": "deprag-386530c-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3450/D3450en.pdf#page=2",
			"sourceLabel": "DEPRAG, brochure technique D3450en, p. 2, réf. 386530C",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-362714a-20260926"
		],
		"workingPressureBar": [
			"deprag-362714a-20260926"
		],
		"airflowLpm": [
			"deprag-362714a-20260926"
		],
		"airflowBasis": [
			"deprag-362714a-20260926"
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

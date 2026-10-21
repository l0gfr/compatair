import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "deprag-344-140-31",
	"slug": "deprag-344-140-31",
	"brand": "DEPRAG",
	"model": "344-140-31",
	"mpn": "404623C",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 344-140-31",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-344-140-31.webp",
		"alt": "Repères techniques DEPRAG 344-140-31, référence 404623C",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3130/D3130en.pdf#page=12",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "344-140-31, commande 404623C : broche de vissage à démarrage déporté, rotation droite et arrêt à droite, carré de 3/4 pouce. Elle couvre 40–130 Nm à 160 tr/min ; la 344-940-31 404623B voisine couvre 40–85 Nm à 250 tr/min. Le moteur commun annonce 1,1 m³/min à 6,3 bar, soit 1 100 L/min sans régime précisé. Le couple, la vitesse d’approche et les commandes de la machine restent à dimensionner séparément.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 404623C.",
			"Couple minimal : 40 Nm.",
			"Couple maximal : 130 Nm.",
			"Vitesse à vide : 160 tr/min."
		],
		"limitations": [
			"Les forces de poussée en N du tableau ne sont pas des pressions en bar. Les variantes U réversibles ont d’autres couples ; aucune valeur n’est transférée depuis elles.",
			"Le couple et la vitesse correspondent à la colonne de cette référence commande, pas à l’ensemble de la famille.",
			"Les broches intégrées nécessitent aussi le dimensionnement des auxiliaires de l’installation, qui ne sont pas inclus dans la consommation du moteur de vissage."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"evidenceIds": [
				"deprag-404623c-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-404623c-20260926"
			]
		},
		{
			"label": "Couple minimal",
			"value": "40 Nm",
			"evidenceIds": [
				"deprag-404623c-20260926"
			]
		},
		{
			"label": "Couple maximal",
			"value": "130 Nm",
			"evidenceIds": [
				"deprag-404623c-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "160 tr/min",
			"evidenceIds": [
				"deprag-404623c-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "Remote Start",
			"evidenceIds": [
				"deprag-404623c-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Spindle right rotation, right shut-off",
			"evidenceIds": [
				"deprag-404623c-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-404623c-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3130/D3130en.pdf#page=12",
			"sourceLabel": "DEPRAG, brochure technique D3130en, p. 12, réf. 404623C",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		},
		{
			"id": "deprag-404623b-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3130/D3130en.pdf#page=12",
			"sourceLabel": "DEPRAG, brochure technique D3130en, p. 12, réf. 404623B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-404623c-20260926"
		],
		"workingPressureBar": [
			"deprag-404623c-20260926"
		],
		"airflowLpm": [
			"deprag-404623c-20260926"
		],
		"airflowBasis": [
			"deprag-404623c-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1100,
		"typical": 1100,
		"max": 1100
	},
	"airflowBasis": "unqualified"
};

export default product;

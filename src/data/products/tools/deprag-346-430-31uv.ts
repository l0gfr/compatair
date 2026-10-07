import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "deprag-346-430-31uv",
	"slug": "deprag-346-430-31uv",
	"brand": "DEPRAG",
	"model": "346-430-31UV",
	"mpn": "407286E",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 346-430-31UV",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-346-430-31uv.webp",
		"alt": "Repères techniques DEPRAG 346-430-31UV, référence 407286E",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3130/D3130en.pdf#page=16",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 346-430-31UV, référence 407286E. Le tableau fabricant publie 450 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple minimal : 2.6 Nm. Couple maximal, assemblage souple : 22 Nm.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 407286E.",
			"Couple minimal : 2.6 Nm.",
			"Couple maximal, assemblage souple : 22 Nm.",
			"Couple maximal, assemblage dur : 22 Nm."
		],
		"limitations": [
			"Le couple et la vitesse correspondent à la colonne de cette référence commande, pas à l’ensemble de la famille.",
			"Les broches intégrées nécessitent aussi le dimensionnement des auxiliaires de l’installation, qui ne sont pas inclus dans la consommation du moteur de vissage."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"evidenceIds": [
				"deprag-407286e-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-407286e-20260926"
			]
		},
		{
			"label": "Couple minimal",
			"value": "2.6 Nm",
			"evidenceIds": [
				"deprag-407286e-20260926"
			]
		},
		{
			"label": "Couple maximal, assemblage souple",
			"value": "22 Nm",
			"evidenceIds": [
				"deprag-407286e-20260926"
			]
		},
		{
			"label": "Couple maximal, assemblage dur",
			"value": "22 Nm",
			"evidenceIds": [
				"deprag-407286e-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "250 tr/min",
			"evidenceIds": [
				"deprag-407286e-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "Remote Start in drive direction and in reverse",
			"evidenceIds": [
				"deprag-407286e-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "reversible, left shut-off",
			"evidenceIds": [
				"deprag-407286e-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-407286e-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3130/D3130en.pdf#page=16",
			"sourceLabel": "DEPRAG, brochure technique D3130en, p. 16, réf. 407286E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-407286e-20260926"
		],
		"workingPressureBar": [
			"deprag-407286e-20260926"
		],
		"airflowLpm": [
			"deprag-407286e-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 450,
		"typical": 450,
		"max": 450
	}
};

export default product;

import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "deprag-347-318u",
	"slug": "deprag-347-318u",
	"brand": "DEPRAG",
	"model": "347-318U",
	"mpn": "397060B",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 347-318U",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-347-318u.webp",
		"alt": "Repères techniques DEPRAG 347-318U, référence 397060B",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3430/D3430en.pdf#page=2",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 347-318U, référence 397060B. Le tableau fabricant publie 230 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple minimal : 0.3 Nm. Couple maximal : 1.4 Nm.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 397060B.",
			"Couple minimal : 0.3 Nm.",
			"Couple maximal : 1.4 Nm.",
			"Vitesse à vide : 1300 tr/min."
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
				"deprag-397060b-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-397060b-20260926"
			]
		},
		{
			"label": "Couple minimal",
			"value": "0.3 Nm",
			"evidenceIds": [
				"deprag-397060b-20260926"
			]
		},
		{
			"label": "Couple maximal",
			"value": "1.4 Nm",
			"evidenceIds": [
				"deprag-397060b-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1300 tr/min",
			"evidenceIds": [
				"deprag-397060b-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "Push To Start",
			"evidenceIds": [
				"deprag-397060b-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Driver reversible, right shut-off",
			"evidenceIds": [
				"deprag-397060b-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-397060b-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3430/D3430en.pdf#page=2",
			"sourceLabel": "DEPRAG, brochure technique D3430en, p. 2, réf. 397060B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-397060b-20260926"
		],
		"workingPressureBar": [
			"deprag-397060b-20260926"
		],
		"airflowLpm": [
			"deprag-397060b-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 230,
		"typical": 230,
		"max": 230
	}
};

export default product;

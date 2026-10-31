import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "deprag-344-247u",
	"slug": "deprag-344-247u",
	"brand": "DEPRAG",
	"model": "344-247U",
	"mpn": "400320F",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 344-247U",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-344-247u.webp",
		"alt": "Repères techniques DEPRAG 344-247U, référence 400320F",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3435/D3435en.pdf#page=3",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 344-247U. Le document propre à cette référence publie une consommation sans préciser son régime de mesure. Le débit en charge maximal reste à confirmer auprès du fabricant. Référence fabricant : 400320F. Couple minimal : 2 Nm. Couple maximal, assemblage souple : 17 Nm. Couple maximal, assemblage dur : 17 Nm.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Référence fabricant : 400320F.",
			"Couple minimal : 2 Nm.",
			"Couple maximal, assemblage souple : 17 Nm.",
			"Couple maximal, assemblage dur : 17 Nm.",
			"Consommation de régime non précisé publiée : 1000 L/min."
		],
		"limitations": [
			"Le couple et la vitesse correspondent à la colonne de cette référence commande, pas à l’ensemble de la famille.",
			"Les broches intégrées nécessitent aussi le dimensionnement des auxiliaires de l’installation, qui ne sont pas inclus dans la consommation du moteur de vissage.",
			"Le document propre à cette référence publie une consommation sans préciser son régime de mesure. Le débit en charge maximal reste à confirmer auprès du fabricant."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"evidenceIds": [
				"deprag-400320f-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation de régime non précisé publiée : 1000 L/min.",
			"evidenceIds": [
				"deprag-344-247u-reserved-20261031-1"
			]
		},
		{
			"label": "Couple minimal",
			"value": "2 Nm",
			"evidenceIds": [
				"deprag-400320f-20260926"
			]
		},
		{
			"label": "Couple maximal, assemblage souple",
			"value": "17 Nm",
			"evidenceIds": [
				"deprag-400320f-20260926"
			]
		},
		{
			"label": "Couple maximal, assemblage dur",
			"value": "17 Nm",
			"evidenceIds": [
				"deprag-400320f-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "650 tr/min",
			"evidenceIds": [
				"deprag-400320f-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "Upper air-inlet, lower air-inlet or rear air-inlet",
			"evidenceIds": [
				"deprag-400320f-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Reversible, trigger-start",
			"evidenceIds": [
				"deprag-400320f-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":1000,\"typical\":1000,\"max\":1000},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"deprag-400320f-20260926",
				"deprag-344-247u-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-400320f-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3435/D3435en.pdf#page=3",
			"sourceLabel": "DEPRAG, brochure technique D3435en, p. 3, réf. 400320F",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		},
		{
			"id": "deprag-344-247u-reserved-20261031-1",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3435/D3435en.pdf#page=3",
			"sourceLabel": "DEPRAG 344-247U : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 d706aaf47698877463b3afd6bd5266d9fb101447bf98306210e484e55134db5e. Le document propre à cette référence publie une consommation sans préciser son régime de mesure. Le débit en charge maximal reste à confirmer auprès du fabricant."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-400320f-20260926"
		],
		"workingPressureBar": [
			"deprag-400320f-20260926"
		],
		"airflowLpm": [
			"deprag-400320f-20260926"
		],
		"airflowBasis": [
			"deprag-344-247u-reserved-20261031-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1000,
		"typical": 1000,
		"max": 1000
	},
	"airflowBasis": "unqualified"
};

export default product;

import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "deprag-376-7251u-e10",
	"slug": "deprag-376-7251u-e10",
	"brand": "DEPRAG",
	"model": "376-7251U-E10",
	"mpn": "382687A",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 376-7251U-E10",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-376-7251u-e10.webp",
		"alt": "Repères techniques DEPRAG 376-7251U-E10, référence 382687A",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3450/D3450en.pdf#page=3",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "DEPRAG 376-7251U-E10, référence 382687A. Le tableau fabricant publie 350 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple minimal : 1.5 Nm. Couple maximal : 8 Nm.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 382687A.",
			"Couple minimal : 1.5 Nm.",
			"Couple maximal : 8 Nm.",
			"Vitesse à vide : 810 tr/min."
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
				"deprag-382687a-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-382687a-20260926"
			]
		},
		{
			"label": "Couple minimal",
			"value": "1.5 Nm",
			"evidenceIds": [
				"deprag-382687a-20260926"
			]
		},
		{
			"label": "Couple maximal",
			"value": "8 Nm",
			"evidenceIds": [
				"deprag-382687a-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "810 tr/min",
			"evidenceIds": [
				"deprag-382687a-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "drive square male 3/8”",
			"evidenceIds": [
				"deprag-382687a-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Driver reversible, right shut-off",
			"evidenceIds": [
				"deprag-382687a-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-382687a-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3450/D3450en.pdf#page=3",
			"sourceLabel": "DEPRAG, brochure technique D3450en, p. 3, réf. 382687A",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-382687a-20260926"
		],
		"workingPressureBar": [
			"deprag-382687a-20260926"
		],
		"airflowLpm": [
			"deprag-382687a-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 350,
		"typical": 350,
		"max": 350
	}
};

export default product;

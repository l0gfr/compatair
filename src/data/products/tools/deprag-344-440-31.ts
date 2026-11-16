import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "deprag-344-440-31",
	"slug": "deprag-344-440-31",
	"brand": "DEPRAG",
	"model": "344-440-31",
	"mpn": "389730B",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "DEPRAG 344-440-31",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/deprag-344-440-31-technical-20261116-reviews.svg",
		"alt": "Repères techniques DEPRAG 344-440-31, référence 389730B",
		"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3130/D3130en.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "La 344-440-31, référence 389730B, est une broche à démarrage distant, rotation et coupure à droite, pour 4–10 Nm à 2 100 tr/min. La 344-340-31 passe à 2 800 tr/min pour 4–8 Nm ; la version 31U est réversible et possède une autre plage. Le tableau relie les performances à 6,3 bar, mais ne précise pas le régime des 1,1 m³/min de consommation. Cette valeur reste hors dimensionnement.",
		"verifiedFacts": [
			"La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"Référence fabricant : 389730B.",
			"Couple minimal : 4 Nm.",
			"Couple maximal : 10 Nm.",
			"Vitesse à vide : 2100 tr/min."
		],
		"limitations": [
			"Le couple et la vitesse correspondent à la colonne de cette référence commande, pas à l’ensemble de la famille.",
			"Les broches intégrées nécessitent aussi le dimensionnement des auxiliaires de l’installation, qui ne sont pas inclus dans la consommation du moteur de vissage.",
			"La pression de service n’atteste pas la pression de mesure de consommation. Le régime ou l’appariement documentaire reste non qualifié ; aucune consommation dimensionnante n’est conservée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La note du tableau indique une pression de fonctionnement de 6,3 bar.",
			"evidenceIds": [
				"deprag-389730b-20260926"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine.",
			"evidenceIds": [
				"deprag-389730b-20260926"
			]
		},
		{
			"label": "Couple minimal",
			"value": "4 Nm",
			"evidenceIds": [
				"deprag-389730b-20260926"
			]
		},
		{
			"label": "Couple maximal",
			"value": "10 Nm",
			"evidenceIds": [
				"deprag-389730b-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2100 tr/min",
			"evidenceIds": [
				"deprag-389730b-20260926"
			]
		},
		{
			"label": "Démarrage / exécution du catalogue",
			"value": "Remote Start",
			"evidenceIds": [
				"deprag-389730b-20260926"
			]
		},
		{
			"label": "Type de corps / rotation",
			"value": "Spindle right rotation, right shut-off",
			"evidenceIds": [
				"deprag-389730b-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "deprag-389730b-20260926",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3130/D3130en.pdf#page=12",
			"sourceLabel": "DEPRAG, brochure technique D3130en, p. 12, réf. 389730B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée en m³/min dans le tableau de la référence ; conversion × 1 000 en L/min, contrôlée avec la valeur CFM voisine."
		},
		{
			"id": "review:2026-11-16-reviews:deprag-344-440-31:0",
			"sourceUrl": "https://www.deprag.com/fileadmin/bilder_content/emedia/broschueren_pics/emedia_schraubtechnik/D3130/D3130en.pdf",
			"sourceLabel": "DEPRAG, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La 344-440-31, référence 389730B, est une broche à démarrage distant, rotation et coupure à droite, pour 4–10 Nm à 2 100 tr/min. La 344-340-31 passe à 2 800 tr/min pour 4–8 Nm ; la version 31U est réversible et possède une autre plage. Le tableau relie les performances à 6,3 bar, mais ne précise pas le régime des 1,1 m³/min de consommation. Cette valeur reste hors dimensionnement. GET complet SHA-256 9d445214624acd388e222274452a61e9bc2026c82f3d78fae74d146516a75dbd. Pages PDF lues : 12."
		}
	],
	"fieldSources": {
		"mpn": [
			"deprag-389730b-20260926"
		],
		"workingPressureBar": [
			"deprag-389730b-20260926"
		],
		"airflowLpm": [
			"deprag-389730b-20260926"
		],
		"airflowBasis": [
			"review:2026-11-16-reviews:deprag-344-440-31:0"
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

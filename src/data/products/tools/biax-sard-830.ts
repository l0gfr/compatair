import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-sard-830",
	"slug": "biax-sard-830",
	"brand": "BIAX",
	"model": "SARD 830",
	"mpn": "150012005",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "BIAX SARD 830",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-sard-830.webp",
		"alt": "Repères techniques BIAX SARD 830, référence 150012005",
		"sourceUrl": "https://biax.de/en/product/sard-830-30-000-1-min-extra-robust/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "SARD 830 150012005 : meuleuse à commande rotative, roulements avant appariés et 30 000 tr/min. La SBRH 830 voisine utilise une commande à levier et une autre masse. La fiche HTML annonce 260 W, le catalogue 240 W pour cette famille ; le débit de 400 L/min reste sans régime précisé.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 400 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150012005.",
			"Puissance de la fiche HTML : 260 W ; catalogue PDF : 240 W, écart non résolu.",
			"Vitesse de rotation : 30.000 tr/min.",
			"Masse publiée : 500 g."
		],
		"limitations": [
			"La puissance contradictoire n’est pas utilisée pour calculer un besoin d’air. La pince et la fraise doivent respecter les limites de diamètre et de vitesse propres au montage.",
			"Le choix de la fraise, du disque ou de l’accessoire doit respecter la vitesse et les dimensions prescrites par BIAX.",
			"Débit déclaré par le fabricant, sans mesure physique CompatAir."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"evidenceIds": [
				"biax-150012005-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 400 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150012005-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "Fiche HTML : 260 W ; catalogue PDF : 240 W, écart non résolu.",
			"evidenceIds": [
				"biax-150012005-20260926",
				"biax-150012005-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "30.000 tr/min",
			"evidenceIds": [
				"biax-150012005-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "500 g",
			"evidenceIds": [
				"biax-150012005-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "8 mm",
			"evidenceIds": [
				"biax-150012005-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150012005-20260926",
			"sourceUrl": "https://biax.de/en/product/sard-830-30-000-1-min-extra-robust/",
			"sourceLabel": "BIAX, fiche technique SARD 830 – 30.000 1/min, extra strong, réf. 150012005",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 400 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150012005-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=19",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 19",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		},
		{
			"id": "biax-150012032-20260926",
			"sourceUrl": "https://biax.de/en/product/sbrh-830-30-000-1-min-zweihandschleifer/",
			"sourceLabel": "BIAX, fiche technique SBRH 830 – 30.000 1/min, Two hand grinder, réf. 150012032",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 400 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150012032-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=19",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 19",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150012005-20260926"
		],
		"workingPressureBar": [
			"biax-150012005-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150012005-20260926"
		],
		"airflowBasis": [
			"biax-150012005-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 400,
		"typical": 400,
		"max": 400
	},
	"airflowBasis": "unqualified"
};

export default product;

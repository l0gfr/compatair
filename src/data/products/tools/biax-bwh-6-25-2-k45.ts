import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-bwh-6-25-2-k45",
	"slug": "biax-bwh-6-25-2-k45",
	"brand": "BIAX",
	"model": "BWH 6-25/2 K45",
	"mpn": "150222320",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "BIAX BWH 6-25/2 K45",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-bwh-6-25-2-k45-20261106.svg",
		"alt": "Repères techniques BIAX BWH 6-25/2 K45, référence 150222320",
		"sourceUrl": "https://biax.de/en/product/bwh-6-25-2-k45/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX BWH 6-25/2 K45, référence 150222320. Le tableau fabricant publie 500 L/min et une plage d’utilisation de 6 à 6 bar. Puissance publiée : 300 W. Vitesse de rotation : 2.500 tr/min.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150222320.",
			"Puissance publiée : 300 W.",
			"Vitesse de rotation : 2.500 tr/min.",
			"Masse publiée : 1240 g."
		],
		"limitations": [
			"Le choix de la fraise, du disque ou de l’accessoire doit respecter la vitesse et les dimensions prescrites par BIAX.",
			"Débit déclaré par le fabricant, sans mesure physique CompatAir.",
			"Le régime de consommation publié est non précisé. Cette valeur reste documentaire et le moteur renvoie insufficient_data."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"evidenceIds": [
				"biax-150222320-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150222320-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "300 W",
			"evidenceIds": [
				"biax-150222320-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "2.500 tr/min",
			"evidenceIds": [
				"biax-150222320-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1240 g",
			"evidenceIds": [
				"biax-150222320-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150222320-20260926",
			"sourceUrl": "https://biax.de/en/product/bwh-6-25-2-k45/",
			"sourceLabel": "BIAX, fiche technique BWH 6-25/2 K45, réf. 150222320",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150222320-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=55",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 55",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		},
		{
			"id": "review:2026-11-06-followup:biax-bwh-6-25-2-k45:1",
			"sourceUrl": "https://biax.de/en/product/bwh-6-25-2-k45/",
			"sourceLabel": "BIAX, revue documentaire du 6 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Fiche150222320 etcatalogue55 confirment300W/2500rpm/500Lmin, renvoiK90 avec tête45°. Le6bar appartient à une consigne d’huilage, et le régime500Lmin n’est pas décrit. Désactiver l’usage de cette valeur comme débit en charge. SHA-256 du document complet : 4da7437a909eebfe10abb6090070e78b649b35193b37137d2d8194b95264d2b2."
		},
		{
			"id": "review:2026-11-06-followup:biax-bwh-6-25-2-k45:2",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=55",
			"sourceLabel": "BIAX, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Fiche150222320 etcatalogue55 confirment300W/2500rpm/500Lmin, renvoiK90 avec tête45°. Le6bar appartient à une consigne d’huilage, et le régime500Lmin n’est pas décrit. Désactiver l’usage de cette valeur comme débit en charge. SHA-256 du document complet : 318971fb9ba951f395b81cbca3d1e57938ce23b74db3aef25ff98bb8f0edc6c8."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150222320-20260926"
		],
		"workingPressureBar": [
			"biax-150222320-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150222320-20260926"
		],
		"airflowBasis": [
			"review:2026-11-06-followup:biax-bwh-6-25-2-k45:1",
			"review:2026-11-06-followup:biax-bwh-6-25-2-k45:2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 500,
		"typical": 500,
		"max": 500
	},
	"airflowBasis": "unqualified"
};

export default product;

import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-sbrh-830",
	"slug": "biax-sbrh-830",
	"brand": "BIAX",
	"model": "SBRH 830",
	"mpn": "150012032",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "BIAX SBRH 830",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-sbrh-830-20261106.svg",
		"alt": "Repères techniques BIAX SBRH 830, référence 150012032",
		"sourceUrl": "https://biax.de/en/product/sbrh-830-30-000-1-min-zweihandschleifer/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX SBRH 830, référence 150012032. Le tableau fabricant publie 400 L/min et une plage d’utilisation de 6 à 6 bar. Puissance publiée : 260 W. Vitesse de rotation : 30.000 tr/min.",
		"verifiedFacts": [
			"Le catalogue de cette référence indique un fonctionnement à 6 bar.",
			"La fiche fabricant publie une consommation de 400 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"Référence fabricant : 150012032.",
			"Puissance publiée : 260 W.",
			"Vitesse de rotation : 30.000 tr/min.",
			"Masse publiée : 750 g."
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
				"biax-150012032-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "La fiche fabricant publie une consommation de 400 L/min. Le régime de charge n’est pas précisé dans ce tableau.",
			"evidenceIds": [
				"biax-150012032-20260926"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "260 W",
			"evidenceIds": [
				"biax-150012032-20260926"
			]
		},
		{
			"label": "Vitesse de rotation",
			"value": "30.000 tr/min",
			"evidenceIds": [
				"biax-150012032-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "750 g",
			"evidenceIds": [
				"biax-150012032-20260926"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "8 mm",
			"evidenceIds": [
				"biax-150012032-20260926"
			]
		}
	],
	"evidence": [
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
		},
		{
			"id": "review:2026-11-06-followup:biax-sbrh-830:1",
			"sourceUrl": "https://biax.de/en/product/sbrh-830-30-000-1-min-zweihandschleifer/",
			"sourceLabel": "BIAX, revue documentaire du 6 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Fiche150012032 etcatalogue19 :SBRH830 deuxmains260W/30000rpm/400Lmin, différent SARD/SARH. Le6bar est une consigne d’exploitation; régime de400Lmin indéterminé. airflowBasis doit empêcher la conclusion en charge. SHA-256 du document complet : 8cf185498befd97cf36d46b1905608d0c0351611abf2c3d161a6e818c6be7934."
		},
		{
			"id": "review:2026-11-06-followup:biax-sbrh-830:2",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=19",
			"sourceLabel": "BIAX, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Fiche150012032 etcatalogue19 :SBRH830 deuxmains260W/30000rpm/400Lmin, différent SARD/SARH. Le6bar est une consigne d’exploitation; régime de400Lmin indéterminé. airflowBasis doit empêcher la conclusion en charge. SHA-256 du document complet : 318971fb9ba951f395b81cbca3d1e57938ce23b74db3aef25ff98bb8f0edc6c8."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150012032-20260926"
		],
		"workingPressureBar": [
			"biax-150012032-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150012032-20260926"
		],
		"airflowBasis": [
			"review:2026-11-06-followup:biax-sbrh-830:1",
			"review:2026-11-06-followup:biax-sbrh-830:2"
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

import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-sbrh-820",
	"slug": "biax-sbrh-820",
	"brand": "BIAX",
	"model": "SBRH 820",
	"mpn": "150021115",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "BIAX SBRH 820",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-sbrh-820.webp",
		"alt": "Repères techniques BIAX SBRH 820, référence 150021115",
		"sourceUrl": "https://biax.de/en/product/sbrh-820-20-000-1-min-zweihandschl/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX SBRH 820. La SBRH 820 est la version à levier de 1 100 g ; la SBRD 820 à valve rotative pèse 1 040 g. Le tableau PDF donne 310 W au groupe, alors que la fiche HTML publie 300 W : cet écart reste visible, sans choisir une révision supposée. La SBRH 818 donne 18 000 tr/min et 750 L/min. Le régime des 500 L/min de la 820 reste non précisé.",
		"verifiedFacts": [
			"Commande : Levier, SBRH distincte de SBRD à valve rotative.",
			"Vitesse : 20 000 tr/min.",
			"Puissance, table PDF : 310 W.",
			"Puissance, fiche HTML : 300 W.",
			"Masse SBRH : 1 100 g.",
			"Diamètre maximal de queue : 8 mm.",
			"Consommation, régime non précisé : 500 L/min."
		],
		"limitations": [
			"Le régime de consommation n’est pas précisé ; la valeur reste non dimensionnante et le verdict demeure insufficient_data."
		]
	},
	"specifications": [
		{
			"label": "Commande",
			"value": "Levier, SBRH distincte de SBRD à valve rotative",
			"evidenceIds": [
				"biax-sbrh-820-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse",
			"value": "20 000 tr/min",
			"evidenceIds": [
				"biax-sbrh-820-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance, table PDF",
			"value": "310 W",
			"evidenceIds": [
				"biax-sbrh-820-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance, fiche HTML",
			"value": "300 W",
			"evidenceIds": [
				"biax-sbrh-820-reserved-20261103-1"
			]
		},
		{
			"label": "Masse SBRH",
			"value": "1 100 g",
			"evidenceIds": [
				"biax-sbrh-820-reserved-20261103-1"
			]
		},
		{
			"label": "Diamètre maximal de queue",
			"value": "8 mm",
			"evidenceIds": [
				"biax-sbrh-820-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "500 L/min",
			"evidenceIds": [
				"biax-sbrh-820-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150021115-20260926",
			"sourceUrl": "https://biax.de/en/product/sbrh-820-20-000-1-min-zweihandschl/",
			"sourceLabel": "BIAX, fiche technique SBRH 820 – Two hand grinder, réf. 150021115",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 500 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150021115-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=24",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 24",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		},
		{
			"id": "biax-sbrh-820-reserved-20261103-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=25",
			"sourceLabel": "BIAX : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 318971fb9ba951f395b81cbca3d1e57938ce23b74db3aef25ff98bb8f0edc6c8. La SBRH 820 est la version à levier de 1 100 g ; la SBRD 820 à valve rotative pèse 1 040 g. Le tableau PDF donne 310 W au groupe, alors que la fiche HTML publie 300 W : cet écart reste visible, sans choisir une révision supposée. La SBRH 818 donne 18 000 tr/min et 750 L/min. Le régime des 500 L/min de la 820 reste non précisé."
		},
		{
			"id": "biax-sbrh-820-reserved-20261103-1-3",
			"sourceUrl": "https://biax.de/en/product/sbrh-820-20-000-1-min-zweihandschl/",
			"sourceLabel": "BIAX : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 318971fb9ba951f395b81cbca3d1e57938ce23b74db3aef25ff98bb8f0edc6c8. La SBRH 820 est la version à levier de 1 100 g ; la SBRD 820 à valve rotative pèse 1 040 g. Le tableau PDF donne 310 W au groupe, alors que la fiche HTML publie 300 W : cet écart reste visible, sans choisir une révision supposée. La SBRH 818 donne 18 000 tr/min et 750 L/min. Le régime des 500 L/min de la 820 reste non précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150021115-20260926"
		],
		"workingPressureBar": [
			"biax-150021115-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150021115-20260926"
		],
		"airflowBasis": [
			"biax-sbrh-820-reserved-20261103-1"
		],
		"editorial": [
			"biax-sbrh-820-reserved-20261103-1"
		],
		"specifications": [
			"biax-sbrh-820-reserved-20261103-1"
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

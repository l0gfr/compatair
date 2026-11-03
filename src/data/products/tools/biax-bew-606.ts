import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "biax-bew-606",
	"slug": "biax-bew-606",
	"brand": "BIAX",
	"model": "BEW 606",
	"mpn": "150810925",
	"categoryId": "ebavureuse",
	"category": "Ébavureuse de trous pneumatique",
	"label": "BIAX BEW 606",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/biax-bew-606.svg",
		"alt": "Repères techniques BIAX BEW 606, référence 150810925",
		"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=40",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "BIAX BEW 606. La BEW 606 est la machine coudée d’ébavurage de trous à tête de 18 mm hors accessoire. La BEW 606 K est la version raccourcie pour les croisements de trous moins profonds ; la BEW 605 est donnée pour 0–500 tr/min contre 0–600. Le régime des 300 L/min n’est pas précisé et la consigne 6 bar ne le complète pas.",
		"verifiedFacts": [
			"Usage décrit : Ébavurage de trous, tête coudée.",
			"Diamètre de tête décrit, sans accessoire : 18 mm.",
			"Vitesse réglable : 0–600 tr/min.",
			"Puissance : 80 W.",
			"Consommation, régime non précisé : 300 L/min."
		],
		"limitations": [
			"Le régime de consommation n’est pas précisé ; la valeur reste non dimensionnante et le verdict demeure insufficient_data."
		]
	},
	"specifications": [
		{
			"label": "Usage décrit",
			"value": "Ébavurage de trous, tête coudée",
			"evidenceIds": [
				"biax-bew-606-reserved-20261103-1"
			]
		},
		{
			"label": "Diamètre de tête décrit, sans accessoire",
			"value": "18 mm",
			"evidenceIds": [
				"biax-bew-606-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse réglable",
			"value": "0–600 tr/min",
			"evidenceIds": [
				"biax-bew-606-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "80 W",
			"evidenceIds": [
				"biax-bew-606-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "300 L/min",
			"evidenceIds": [
				"biax-bew-606-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "biax-150810925-20260926",
			"sourceUrl": "https://biax.de/en/product/bew-606-bis-senk-o-14-mm/",
			"sourceLabel": "BIAX, fiche technique BEW 606 – up to sink-Ø 14 mm, réf. 150810925",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie une consommation de 300 L/min. Le régime de charge n’est pas précisé dans ce tableau."
		},
		{
			"id": "biax-150810925-20260926-workingpressurebar-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=40",
			"sourceLabel": "BIAX, catalogue technique biax-pneumatic-en, p. 40",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consigne de fonctionnement à 6 bar dans la page mentionnant cette référence commande."
		},
		{
			"id": "biax-bew-606-reserved-20261103-1",
			"sourceUrl": "https://biax.de/wp-content/uploads/2025/08/BIAX_Grinders-Files-and-Deburring-tools_EN-2.pdf#page=40",
			"sourceLabel": "BIAX : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 318971fb9ba951f395b81cbca3d1e57938ce23b74db3aef25ff98bb8f0edc6c8. La BEW 606 est la machine coudée d’ébavurage de trous à tête de 18 mm hors accessoire. La BEW 606 K est la version raccourcie pour les croisements de trous moins profonds ; la BEW 605 est donnée pour 0–500 tr/min contre 0–600. Le régime des 300 L/min n’est pas précisé et la consigne 6 bar ne le complète pas."
		}
	],
	"fieldSources": {
		"mpn": [
			"biax-150810925-20260926"
		],
		"workingPressureBar": [
			"biax-150810925-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"biax-150810925-20260926"
		],
		"airflowBasis": [
			"biax-bew-606-reserved-20261103-1"
		],
		"editorial": [
			"biax-bew-606-reserved-20261103-1"
		],
		"specifications": [
			"biax-bew-606-reserved-20261103-1"
		],
		"categoryId": [
			"biax-bew-606-reserved-20261103-1"
		],
		"category": [
			"biax-bew-606-reserved-20261103-1"
		],
		"image": [
			"biax-bew-606-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	},
	"airflowBasis": "unqualified"
};

export default product;

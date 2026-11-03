import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-smy115a",
	"slug": "fiam-smy115a",
	"brand": "Fiam",
	"model": "SMY115A",
	"mpn": "146395012",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Fiam SMY115A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-smy115a.webp",
		"alt": "Repères techniques Fiam SMY115A, référence 146395012",
		"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/smy115a/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam SMY115A. La SMY115A est la meuleuse d’angle de 400 W, 9 000 tr/min et disque 115 × 6,5 × 22 mm, avec bride et protecteur décrits comme fournis. Le tableau distingue le modèle pour disque 100 mm à 13 500 tr/min ; ces vitesses et consommables ne sont pas interchangeables. Le régime des 10 L/s reste non précisé.",
		"verifiedFacts": [
			"Type : Meuleuse d’angle.",
			"Puissance : 400 W.",
			"Vitesse à vide : 9 000 tr/min.",
			"Disque, dimensions publiées : 115 × 6,5 × 22 mm.",
			"Masse : 1,65 kg.",
			"Consommation, régime non précisé : 10 L/s."
		],
		"limitations": [
			"Le régime de consommation n’est pas précisé ; la valeur reste non dimensionnante et le verdict demeure insufficient_data."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "Meuleuse d’angle",
			"evidenceIds": [
				"fiam-smy115a-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "400 W",
			"evidenceIds": [
				"fiam-smy115a-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "9 000 tr/min",
			"evidenceIds": [
				"fiam-smy115a-reserved-20261103-1"
			]
		},
		{
			"label": "Disque, dimensions publiées",
			"value": "115 × 6,5 × 22 mm",
			"evidenceIds": [
				"fiam-smy115a-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,65 kg",
			"evidenceIds": [
				"fiam-smy115a-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "10 L/s",
			"evidenceIds": [
				"fiam-smy115a-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-146395012-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/grinders-and-sanders/smy115a/",
			"sourceLabel": "Fiam, fiche technique SMY115A, réf. 146395012",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-146395012-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-44.pdf#page=9",
			"sourceLabel": "Fiam, brochure technique en-44, p. 9",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
		{
			"id": "fiam-smy115a-reserved-20261103-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-44.pdf#page=9",
			"sourceLabel": "Fiam : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 01b152f269aeae367daa8a9524f083a1679707b0a3eff4daa59bcec83635f6de. La SMY115A est la meuleuse d’angle de 400 W, 9 000 tr/min et disque 115 × 6,5 × 22 mm, avec bride et protecteur décrits comme fournis. Le tableau distingue le modèle pour disque 100 mm à 13 500 tr/min ; ces vitesses et consommables ne sont pas interchangeables. Le régime des 10 L/s reste non précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-146395012-20260926"
		],
		"workingPressureBar": [
			"fiam-146395012-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-146395012-20260926"
		],
		"airflowBasis": [
			"fiam-smy115a-reserved-20261103-1"
		],
		"editorial": [
			"fiam-smy115a-reserved-20261103-1"
		],
		"specifications": [
			"fiam-smy115a-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	},
	"airflowBasis": "unqualified"
};

export default product;

import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fiam-fde60p",
	"slug": "fiam-fde60p",
	"brand": "Fiam",
	"model": "FDE60P",
	"mpn": "124610550",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Fiam FDE60P",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/fiam-fde60p.webp",
		"alt": "Repères techniques Fiam FDE60P, référence 124610550",
		"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fde60p/",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Fiam FDE60P. La FDE60P est livrée sans mandrin et pèse 0,720 kg ; la FDE60PA reçoit le mandrin autobloquant et la FDE60PC le mandrin à clé, pour 1,080 et 0,945 kg. Les trois versions sont à 6 000 tr/min, sans que leurs masses ni équipements soient fusionnés. Le régime des 10 L/s reste non précisé.",
		"verifiedFacts": [
			"Équipement : Sans mandrin.",
			"Capacité recommandée du groupe : 1–10 mm, note constructeur.",
			"Vitesse à vide : 6 000 tr/min.",
			"Masse sans mandrin : 0,720 kg.",
			"Consommation, régime non précisé : 10 L/s."
		],
		"limitations": [
			"Le régime de consommation n’est pas précisé ; la valeur reste non dimensionnante et le verdict demeure insufficient_data."
		]
	},
	"specifications": [
		{
			"label": "Équipement",
			"value": "Sans mandrin",
			"evidenceIds": [
				"fiam-fde60p-reserved-20261103-1"
			]
		},
		{
			"label": "Capacité recommandée du groupe",
			"value": "1–10 mm, note constructeur",
			"evidenceIds": [
				"fiam-fde60p-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6 000 tr/min",
			"evidenceIds": [
				"fiam-fde60p-reserved-20261103-1"
			]
		},
		{
			"label": "Masse sans mandrin",
			"value": "0,720 kg",
			"evidenceIds": [
				"fiam-fde60p-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "10 L/s",
			"evidenceIds": [
				"fiam-fde60p-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "fiam-124610550-20260926",
			"sourceUrl": "https://www.fiamgroup.com/en/products/air-drills/fde60p/",
			"sourceLabel": "Fiam, fiche technique FDE60P, réf. 124610550",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "La fiche fabricant publie 10 L/s, soit 600 L/min après conversion × 60. Le régime de charge n’est pas précisé sur la fiche HTML."
		},
		{
			"id": "fiam-124610550-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-34.pdf#page=13",
			"sourceLabel": "Fiam, brochure technique en-34, p. 13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de mesure et pression recommandée de la brochure directement liée à cette fiche produit."
		},
		{
			"id": "fiam-fde60p-reserved-20261103-1",
			"sourceUrl": "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-34.pdf#page=13",
			"sourceLabel": "Fiam : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 4bc7b8a199880ed886511848f97c3d61ae9b8a50dbb5f0f0318dddc819dcbf62. La FDE60P est livrée sans mandrin et pèse 0,720 kg ; la FDE60PA reçoit le mandrin autobloquant et la FDE60PC le mandrin à clé, pour 1,080 et 0,945 kg. Les trois versions sont à 6 000 tr/min, sans que leurs masses ni équipements soient fusionnés. Le régime des 10 L/s reste non précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"fiam-124610550-20260926"
		],
		"workingPressureBar": [
			"fiam-124610550-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"fiam-124610550-20260926"
		],
		"airflowBasis": [
			"fiam-fde60p-reserved-20261103-1"
		],
		"editorial": [
			"fiam-fde60p-reserved-20261103-1"
		],
		"specifications": [
			"fiam-fde60p-reserved-20261103-1"
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

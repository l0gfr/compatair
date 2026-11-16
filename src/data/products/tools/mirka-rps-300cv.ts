import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "mirka-rps-300cv",
	"slug": "mirka-rps-300cv",
	"brand": "Mirka",
	"model": "RPS 300CV",
	"mpn": "8992340111",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "Mirka RPS 300CV",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/mirka-rps-300cv-technical-20261116-reviews.svg",
		"alt": "Repères techniques Mirka RPS 300CV, référence 8992340111",
		"sourceUrl": "https://cms.mirka.com/globalassets/msc/pdf/mirka-product-catalog-2022-low-res.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "Mirka RPS 300CV 8992340111 : polisseuse rotative 77 mm à aspiration centrale, sans mouvement orbital, 209 W et 3 000 tr/min. L’AP 300NV est sans aspiration et tourne à 3 200 tr/min ; la ROP2 312NV utilise une orbite de 12 mm. Ces mouvements ne répondent pas au même travail de finition ; les consommations de catalogue restent documentaires.",
		"verifiedFacts": [
			"Plateau / orbite : 77 / 0 mm.",
			"Aspiration : Centrale, CV.",
			"Puissance / vitesse : 209 W / 3 000 tr/min.",
			"Masse, catalogue 2022/2023 : 0,63 kg.",
			"Consommation, régime non précisé : 481 L/min.",
			"Pression de travail : 6,2 bar."
		],
		"limitations": [
			"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Plateau / orbite",
			"value": "77 / 0 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:mirka-rps-300cv:0"
			]
		},
		{
			"label": "Aspiration",
			"value": "Centrale, CV",
			"evidenceIds": [
				"review:2026-11-16-reviews:mirka-rps-300cv:0"
			]
		},
		{
			"label": "Puissance / vitesse",
			"value": "209 W / 3 000 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:mirka-rps-300cv:0"
			]
		},
		{
			"label": "Masse, catalogue 2022/2023",
			"value": "0,63 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:mirka-rps-300cv:0"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "481 L/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:mirka-rps-300cv:0"
			]
		},
		{
			"label": "Pression de travail",
			"value": "6,2 bar",
			"evidenceIds": [
				"review:2026-11-16-reviews:mirka-rps-300cv:0"
			]
		}
	],
	"evidence": [
		{
			"id": "mirka-8992340111-20260927",
			"sourceUrl": "https://cms.mirka.com/globalassets/msc/pdf/mirka-product-catalog-2022-low-res.pdf#page=118",
			"sourceLabel": "Mirka Scandinavia, catalogue 2022/2023, p. 118, réf. 8992340111",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation publiée : 481 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		},
		{
			"id": "review:2026-11-16-reviews:mirka-rps-300cv:0",
			"sourceUrl": "https://cms.mirka.com/globalassets/msc/pdf/mirka-product-catalog-2022-low-res.pdf",
			"sourceLabel": "Mirka, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Mirka RPS 300CV 8992340111 : polisseuse rotative 77 mm à aspiration centrale, sans mouvement orbital, 209 W et 3 000 tr/min. L’AP 300NV est sans aspiration et tourne à 3 200 tr/min ; la ROP2 312NV utilise une orbite de 12 mm. Ces mouvements ne répondent pas au même travail de finition ; les consommations de catalogue restent documentaires. GET complet SHA-256 2ced0651411b4d8c2cd50ec1e250c15d9fda73d452ffd72b2a9cbe8910647fc2. Pages PDF lues : 118."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:mirka-rps-300cv:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:mirka-rps-300cv:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:mirka-rps-300cv:0"
		]
	},
	"notes": [
		"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
	],
	"demandExplanation": "La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
};

export default product;

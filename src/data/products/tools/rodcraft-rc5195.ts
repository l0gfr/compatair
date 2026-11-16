import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rodcraft-rc5195",
	"slug": "rodcraft-rc5195",
	"brand": "Rodcraft",
	"model": "RC5195",
	"mpn": "8951000154",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Rodcraft RC5195",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/rodcraft-rc5195-technical-20261116-reviews.svg",
		"alt": "Repères techniques Rodcraft RC5195, référence 8951000154",
		"sourceUrl": "https://www.rodcraft.com/en/products/8951000154",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "Rodcraft RC5195 : marteau à emmanchement hexagonal 11 mm, course 95 mm, énergie 12 J et 2 100 coups/min. Le RC5185 est plus court avec course 70 mm et 3 000 coups/min. La fiche sépare 6,2 L/s en charge et 3,7 L/s à vide ; le maximum dynamique 6,3 bar ne fixe pas leur pression de mesure.",
		"verifiedFacts": [
			"Emmanchement : Hexagonal 11 mm.",
			"Course / alésage : 95 / 19 mm.",
			"Cadence / masse : 2 100 coups/min / 2 kg.",
			"Dimensions : 223 × 57 × 163 mm.",
			"Consommations en charge / à vide : 6,2 / 3,7 L/s.",
			"Limite dynamique de service : 6,3 bar."
		],
		"limitations": [
			"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Emmanchement",
			"value": "Hexagonal 11 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:rodcraft-rc5195:0"
			]
		},
		{
			"label": "Course / alésage",
			"value": "95 / 19 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:rodcraft-rc5195:0"
			]
		},
		{
			"label": "Cadence / masse",
			"value": "2 100 coups/min / 2 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:rodcraft-rc5195:0"
			]
		},
		{
			"label": "Dimensions",
			"value": "223 × 57 × 163 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:rodcraft-rc5195:0"
			]
		},
		{
			"label": "Consommations en charge / à vide",
			"value": "6,2 / 3,7 L/s",
			"evidenceIds": [
				"review:2026-11-16-reviews:rodcraft-rc5195:0"
			]
		},
		{
			"label": "Limite dynamique de service",
			"value": "6,3 bar",
			"evidenceIds": [
				"review:2026-11-16-reviews:rodcraft-rc5195:0"
			]
		}
	],
	"evidence": [
		{
			"id": "rodcraft-8951000154-20260927",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951000154",
			"sourceLabel": "Rodcraft, fiche technique officielle RC5195, réf. 8951000154",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation en charge publiée : 6.2 L/s. Consommation à vide publiée : 3.7 L/s. Valeur retenue : 372 L/min (maximum des régimes documentés, L/s × 60)."
		},
		{
			"id": "review:2026-11-16-reviews:rodcraft-rc5195:0",
			"sourceUrl": "https://www.rodcraft.com/en/products/8951000154",
			"sourceLabel": "Rodcraft, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Rodcraft RC5195 : marteau à emmanchement hexagonal 11 mm, course 95 mm, énergie 12 J et 2 100 coups/min. Le RC5185 est plus court avec course 70 mm et 3 000 coups/min. La fiche sépare 6,2 L/s en charge et 3,7 L/s à vide ; le maximum dynamique 6,3 bar ne fixe pas leur pression de mesure. GET complet SHA-256 a0da1c2e52b93f087e8a06a1b00ea3bb42716bdb691906103b8cbe978d16a8bd. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:rodcraft-rc5195:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:rodcraft-rc5195:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:rodcraft-rc5195:0"
		]
	},
	"notes": [
		"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
	],
	"demandExplanation": "La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
};

export default product;

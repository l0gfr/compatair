import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "rupes-ra75",
	"slug": "rupes-ra75",
	"brand": "RUPES",
	"model": "RA75",
	"mpn": "RA75",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "RUPES RA75",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"confidence": "B",
	"image": {
		"src": "/images/products/rupes-ra75-technical-20261116-reviews.svg",
		"alt": "Repères techniques RUPES RA75, référence RA75",
		"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "RUPES RA75 : mini-ponceuse à plateau 75 mm sans aspiration, orbite 3 mm et vitesse réglable jusqu’à 11 000 tr/min. La RA75A possède trois trous et l’aspiration centrale ; la RA150A utilise un plateau 150 mm et une orbite 5 mm. Le maximum de consommation est documenté, sa pression de mesure reste à établir.",
		"verifiedFacts": [
			"Plateau / orbite : 75 / 3 mm.",
			"Aspiration / trous : Sans aspiration / aucun trou.",
			"Vitesse / masse : 0–11 000 tr/min / 0,68 kg.",
			"Filetages plateau / air : 5/16 pouce femelle / 1/4 GAS.",
			"Consommation maximale documentaire : 380 L/min.",
			"Pression de service : 6,2 bar."
		],
		"limitations": [
			"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Plateau / orbite",
			"value": "75 / 3 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:rupes-ra75:0"
			]
		},
		{
			"label": "Aspiration / trous",
			"value": "Sans aspiration / aucun trou",
			"evidenceIds": [
				"review:2026-11-16-reviews:rupes-ra75:0"
			]
		},
		{
			"label": "Vitesse / masse",
			"value": "0–11 000 tr/min / 0,68 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:rupes-ra75:0"
			]
		},
		{
			"label": "Filetages plateau / air",
			"value": "5/16 pouce femelle / 1/4 GAS",
			"evidenceIds": [
				"review:2026-11-16-reviews:rupes-ra75:0"
			]
		},
		{
			"label": "Consommation maximale documentaire",
			"value": "380 L/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:rupes-ra75:0"
			]
		},
		{
			"label": "Pression de service",
			"value": "6,2 bar",
			"evidenceIds": [
				"review:2026-11-16-reviews:rupes-ra75:0"
			]
		}
	],
	"evidence": [
		{
			"id": "rupes-ra75-20260926",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=62",
			"sourceLabel": "RUPES, catalogue 2026, édition 2, p. 62, réf. RA75",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation maximale explicitement publiée dans le tableau « Air consumption max », en L/min."
		},
		{
			"id": "review:2026-11-16-reviews:rupes-ra75:0",
			"sourceUrl": "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf",
			"sourceLabel": "RUPES, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "RUPES RA75 : mini-ponceuse à plateau 75 mm sans aspiration, orbite 3 mm et vitesse réglable jusqu’à 11 000 tr/min. La RA75A possède trois trous et l’aspiration centrale ; la RA150A utilise un plateau 150 mm et une orbite 5 mm. Le maximum de consommation est documenté, sa pression de mesure reste à établir. GET complet SHA-256 018272fb053802b4e419d3f70bb75a46a02a62aec2a0404862ded7c21b443a63. Pages PDF lues : 62."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:rupes-ra75:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:rupes-ra75:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:rupes-ra75:0"
		]
	},
	"notes": [
		"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
	],
	"demandExplanation": "La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
};

export default product;

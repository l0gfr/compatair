import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-atlas-copco-rrd57-12-8425110338",
	"slug": "burineur-atlas-copco-rrd57-12-8425110338",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Atlas Copco RRD57-12 (réf. 8425110338)",
	"brand": "Atlas Copco",
	"model": "RRD57-12",
	"mpn": "8425110338",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 570,
		"typical": 570,
		"max": 570
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-atlas-copco-rrd57-12-8425110338.webp",
		"alt": "Repères techniques : Atlas Copco RRD57-12 (réf. 8425110338)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-rrd57-12",
		"label": "Référence 8425110338",
		"distinguishingAttributes": {
			"reference": "8425110338",
			"Consommations originales": "9.5 L/s ; 20.1 cfm",
			"Masse": "3.4 kg",
			"Ligne de configuration originale": "RRD57-12 31 28/18 b 1.1/0.8 92 3.6 9.3 6.9 3.4 7.5 17.3 d 0.68 9.5 20.1 12.5 1/2 special e 8425 1103 38"
		}
	},
	"editorial": {
		"overview": "Atlas Copco RRD57-12. La RRD57-12 publie course 92 mm, 9,3 J et 3,4 kg, contre 70 mm, 6,8 J et 3,0 kg pour la RRD37-11. La RRD57-11 partage cette ligne de performances mais possède un autre code commande ; le montage du burin doit être confirmé sur le code exact. La cadence est en Hz, pas en coups par minute.",
		"verifiedFacts": [
			"Code : 8425 1103 38.",
			"Cadence : 31 Hz.",
			"Diamètre piston publié : 28/18 mm.",
			"Course : 92 mm.",
			"Énergie par coup : 9,3 J.",
			"Masse : 3,4 kg.",
			"Consommation maximale déclarée : 9,5 L/s à 6,3 bar."
		],
		"limitations": [
			"Conditions générales constructeur : air libre, pression 6,3 bar ; les régimes explicitement inscrits dans la table restent prioritaires."
		]
	},
	"specifications": [
		{
			"label": "Code",
			"value": "8425 1103 38",
			"evidenceIds": [
				"burineur-atlas-copco-rrd57-12-8425110338-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "31 Hz",
			"evidenceIds": [
				"burineur-atlas-copco-rrd57-12-8425110338-reserved-20261103-1"
			]
		},
		{
			"label": "Diamètre piston publié",
			"value": "28/18 mm",
			"evidenceIds": [
				"burineur-atlas-copco-rrd57-12-8425110338-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "92 mm",
			"evidenceIds": [
				"burineur-atlas-copco-rrd57-12-8425110338-reserved-20261103-1"
			]
		},
		{
			"label": "Énergie par coup",
			"value": "9,3 J",
			"evidenceIds": [
				"burineur-atlas-copco-rrd57-12-8425110338-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "3,4 kg",
			"evidenceIds": [
				"burineur-atlas-copco-rrd57-12-8425110338-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation maximale déclarée",
			"value": "9,5 L/s à 6,3 bar",
			"evidenceIds": [
				"burineur-atlas-copco-rrd57-12-8425110338-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p234",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=234",
			"sourceLabel": "atlas-tools, page PDF 234",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 1e22ac35e18dfbe166f86a825fb5f9b33d152e6eddd3601c658fd39f20195e21. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "documented-d-atlas-tools-p3",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=3",
			"sourceLabel": "atlas-tools, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 1e22ac35e18dfbe166f86a825fb5f9b33d152e6eddd3601c658fd39f20195e21. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "burineur-atlas-copco-rrd57-12-8425110338-reserved-20261103-1",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=234",
			"sourceLabel": "Atlas Copco : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 1e22ac35e18dfbe166f86a825fb5f9b33d152e6eddd3601c658fd39f20195e21. La RRD57-12 publie course 92 mm, 9,3 J et 3,4 kg, contre 70 mm, 6,8 J et 3,0 kg pour la RRD37-11. La RRD57-11 partage cette ligne de performances mais possède un autre code commande ; le montage du burin doit être confirmé sur le code exact. La cadence est en Hz, pas en coups par minute."
		},
		{
			"id": "burineur-atlas-copco-rrd57-12-8425110338-reserved-20261103-1-3",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=3",
			"sourceLabel": "Atlas Copco : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 1e22ac35e18dfbe166f86a825fb5f9b33d152e6eddd3601c658fd39f20195e21. La RRD57-12 publie course 92 mm, 9,3 J et 3,4 kg, contre 70 mm, 6,8 J et 3,0 kg pour la RRD37-11. La RRD57-11 partage cette ligne de performances mais possède un autre code commande ; le montage du burin doit être confirmé sur le code exact. La cadence est en Hz, pas en coups par minute."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-atlas-tools-p234"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p234",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p234"
		],
		"editorial": [
			"burineur-atlas-copco-rrd57-12-8425110338-reserved-20261103-1"
		],
		"specifications": [
			"burineur-atlas-copco-rrd57-12-8425110338-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation maximale : 570 L/min à 6,3 bar."
	]
};

export default product;

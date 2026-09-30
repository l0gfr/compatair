const product = {
	"id": "cle-a-chocs-atlas-copco-lms68-gor25-8434168002",
	"slug": "cle-a-chocs-atlas-copco-lms68-gor25-8434168002",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Atlas Copco LMS68 GOR25 (réf. 8434168002)",
	"brand": "Atlas Copco",
	"model": "LMS68 GOR25",
	"mpn": "8434168002",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1680,
		"typical": 1680,
		"max": 1680
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-atlas-copco-lms68-gor25-8434168002.webp",
		"alt": "Repères techniques : Atlas Copco LMS68 GOR25 (réf. 8434168002)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lms68-gor25",
		"label": "Référence 8434168002",
		"distinguishingAttributes": {
			"reference": "8434168002",
			"Consommations originales": "28 L/s ; 58.9 cfm",
			"Vitesse à vide": "5000 tr/min",
			"Masse": "9.6 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LMS68 GOR25 (réf. 8434168002). Consommation maximale : 1 680 L/min à 6,3 bar. Consommations originales : 28 L/s ; 58.9 cfm. Vitesse à vide : 5000 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 21.",
			"Consommations originales : 28 L/s ; 58.9 cfm.",
			"Vitesse à vide : 5000 tr/min.",
			"Masse : 9.6 kg."
		],
		"limitations": [
			"Le débit publié conserve son régime de mesure ; aucun cycle supposé ne réduit la consommation.",
			"Caractéristiques déclarées par le fabricant. Aucun essai physique réalisé par CompatAir.",
			"La disponibilité locale, les raccords, les accessoires et la notice de sécurité de la référence livrée restent à vérifier."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 21",
			"evidenceIds": [
				"documented-d-atlas-tools-p21"
			]
		},
		{
			"label": "Consommations originales",
			"value": "28 L/s ; 58.9 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p21"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5000 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p21"
			]
		},
		{
			"label": "Masse",
			"value": "9.6 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p21"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p21",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=21",
			"sourceLabel": "atlas-tools, page PDF 21",
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
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-atlas-tools-p21"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p21",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p21"
		]
	},
	"notes": [
		"Consommation maximale : 1 680 L/min à 6,3 bar."
	]
};

export default product;

const product = {
	"id": "perceuse-atlas-copco-lbv34-s040-8421030946",
	"slug": "perceuse-atlas-copco-lbv34-s040-8421030946",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Atlas Copco LBV34 S040 (réf. 8421030946)",
	"brand": "Atlas Copco",
	"model": "LBV34 S040",
	"mpn": "8421030946",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 660,
		"typical": 660,
		"max": 660
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-atlas-copco-lbv34-s040-8421030946.webp",
		"alt": "Repères techniques : Atlas Copco LBV34 S040 (réf. 8421030946)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lbv34-s040",
		"label": "Référence 8421030946",
		"distinguishingAttributes": {
			"reference": "8421030946",
			"Consommations originales": "11 L/s ; 23.3 cfm",
			"Vitesse à vide": "4000 tr/min",
			"Masse": "1.5 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LBV34 S040 (réf. 8421030946). Consommation maximale : 660 L/min à 6,3 bar. Consommations originales : 11 L/s ; 23.3 cfm. Vitesse à vide : 4000 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 254.",
			"Consommations originales : 11 L/s ; 23.3 cfm.",
			"Vitesse à vide : 4000 tr/min.",
			"Masse : 1.5 kg."
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
			"value": "Page PDF 254",
			"evidenceIds": [
				"documented-d-atlas-tools-p254"
			]
		},
		{
			"label": "Consommations originales",
			"value": "11 L/s ; 23.3 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p254"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4000 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p254"
			]
		},
		{
			"label": "Masse",
			"value": "1.5 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p254"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p254",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=254",
			"sourceLabel": "atlas-tools, page PDF 254",
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
			"documented-d-atlas-tools-p254"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p254",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p254"
		]
	},
	"notes": [
		"Consommation maximale : 660 L/min à 6,3 bar."
	]
};

export default product;

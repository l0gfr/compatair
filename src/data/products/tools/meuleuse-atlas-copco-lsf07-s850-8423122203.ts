const product = {
	"id": "meuleuse-atlas-copco-lsf07-s850-8423122203",
	"slug": "meuleuse-atlas-copco-lsf07-s850-8423122203",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Atlas Copco LSF07 S850 (réf. 8423122203)",
	"brand": "Atlas Copco",
	"model": "LSF07 S850",
	"mpn": "8423122203",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 138,
		"typical": 138,
		"max": 138
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-atlas-copco-lsf07-s850-8423122203.webp",
		"alt": "Repères techniques : Atlas Copco LSF07 S850 (réf. 8423122203)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lsf07-s850",
		"label": "Référence 8423122203",
		"distinguishingAttributes": {
			"reference": "8423122203",
			"Consommations originales": "2.2 L/s ; 4.9 cfm ; 2.3 L/s ; 4.6 cfm",
			"Vitesse à vide": "88000 tr/min",
			"Masse": "0.4 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LSF07 S850 (réf. 8423122203). Consommation maximale : 138 L/min à 6,3 bar. Consommations originales : 2.2 L/s ; 4.9 cfm ; 2.3 L/s ; 4.6 cfm. Vitesse à vide : 88000 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 211.",
			"Consommations originales : 2.2 L/s ; 4.9 cfm ; 2.3 L/s ; 4.6 cfm.",
			"Vitesse à vide : 88000 tr/min.",
			"Masse : 0.4 kg."
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
			"value": "Page PDF 211",
			"evidenceIds": [
				"documented-d-atlas-tools-p211"
			]
		},
		{
			"label": "Consommations originales",
			"value": "2.2 L/s ; 4.9 cfm ; 2.3 L/s ; 4.6 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p211"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "88000 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p211"
			]
		},
		{
			"label": "Masse",
			"value": "0.4 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p211"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p211",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=211",
			"sourceLabel": "atlas-tools, page PDF 211",
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
			"documented-d-atlas-tools-p211"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p211",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p211"
		]
	},
	"notes": [
		"Consommation maximale : 138 L/min à 6,3 bar."
	]
};

export default product;

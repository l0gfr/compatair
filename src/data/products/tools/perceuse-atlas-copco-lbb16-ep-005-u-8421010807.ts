import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-atlas-copco-lbb16-ep-005-u-8421010807",
	"slug": "perceuse-atlas-copco-lbb16-ep-005-u-8421010807",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Atlas Copco LBB16 EP-005-U (réf. 8421010807)",
	"brand": "Atlas Copco",
	"model": "LBB16 EP-005-U",
	"mpn": "8421010807",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 480,
		"typical": 480,
		"max": 480
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-atlas-copco-lbb16-ep-005-u-8421010807.webp",
		"alt": "Repères techniques : Atlas Copco LBB16 EP-005-U (réf. 8421010807)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lbb16-ep-005-u",
		"label": "Référence 8421010807",
		"distinguishingAttributes": {
			"reference": "8421010807",
			"Consommations originales": "8 L/s ; 17 cfm",
			"Vitesse à vide": "500 tr/min",
			"Configuration": "Sans mandrin ; référence de la colonne Without chuck"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LBB16 EP-005-U. La LBB16 EP-005-U est le code sans mandrin 8421 0108 07 ; le code 8421 0108 06 est livré avec mandrin. La EPX-005-U est une autre version à 9,5 L/s. Le titre de la colonne indique at free speed : les 480 L/min restent documentaires et ne constituent plus une consommation en charge.",
		"verifiedFacts": [
			"Code sans mandrin : 8421 0108 07.",
			"Vitesse à vide : 500 tr/min.",
			"Puissance publiée du groupe de référence : 290 W.",
			"Consommation explicitement à vide : 8 L/s à 6,3 bar.",
			"Masse publiée de 0,7 kg : Concerne la colonne avec mandrin, exclue de la version U."
		],
		"limitations": [
			"La valeur est explicitement publiée à vide. Une mesure maximale/en charge avec pression associée reste nécessaire pour un dimensionnement conclusif."
		]
	},
	"specifications": [
		{
			"label": "Code sans mandrin",
			"value": "8421 0108 07",
			"evidenceIds": [
				"perceuse-atlas-copco-lbb16-ep-005-u-8421010807-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "500 tr/min",
			"evidenceIds": [
				"perceuse-atlas-copco-lbb16-ep-005-u-8421010807-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance publiée du groupe de référence",
			"value": "290 W",
			"evidenceIds": [
				"perceuse-atlas-copco-lbb16-ep-005-u-8421010807-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation explicitement à vide",
			"value": "8 L/s à 6,3 bar",
			"evidenceIds": [
				"perceuse-atlas-copco-lbb16-ep-005-u-8421010807-reserved-20261103-1"
			]
		},
		{
			"label": "Masse publiée de 0,7 kg",
			"value": "Concerne la colonne avec mandrin, exclue de la version U",
			"evidenceIds": [
				"perceuse-atlas-copco-lbb16-ep-005-u-8421010807-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p248",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=248",
			"sourceLabel": "atlas-tools, page PDF 248",
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
			"id": "perceuse-atlas-copco-lbb16-ep-005-u-8421010807-reserved-20261103-1",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=248",
			"sourceLabel": "Atlas Copco : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 1e22ac35e18dfbe166f86a825fb5f9b33d152e6eddd3601c658fd39f20195e21. La LBB16 EP-005-U est le code sans mandrin 8421 0108 07 ; le code 8421 0108 06 est livré avec mandrin. La EPX-005-U est une autre version à 9,5 L/s. Le titre de la colonne indique at free speed : les 480 L/min restent documentaires et ne constituent plus une consommation en charge."
		},
		{
			"id": "perceuse-atlas-copco-lbb16-ep-005-u-8421010807-reserved-20261103-1-3",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=3",
			"sourceLabel": "Atlas Copco : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 1e22ac35e18dfbe166f86a825fb5f9b33d152e6eddd3601c658fd39f20195e21. La LBB16 EP-005-U est le code sans mandrin 8421 0108 07 ; le code 8421 0108 06 est livré avec mandrin. La EPX-005-U est une autre version à 9,5 L/s. Le titre de la colonne indique at free speed : les 480 L/min restent documentaires et ne constituent plus une consommation en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-atlas-tools-p248"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p248",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p248"
		],
		"airflowBasis": [
			"perceuse-atlas-copco-lbb16-ep-005-u-8421010807-reserved-20261103-1"
		],
		"editorial": [
			"perceuse-atlas-copco-lbb16-ep-005-u-8421010807-reserved-20261103-1"
		],
		"specifications": [
			"perceuse-atlas-copco-lbb16-ep-005-u-8421010807-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation maximale : 480 L/min à 6,3 bar."
	],
	"airflowBasis": "free-speed"
};

export default product;

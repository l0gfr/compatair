import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-top-cat-407gehsk4-28-15000-401",
	"slug": "meuleuse-top-cat-407gehsk4-28-15000-401",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Top Cat 407GEHSK4+28;15000;401",
	"brand": "Top Cat",
	"model": "407GEHSK4+28;15000;401",
	"mpn": "407GEHSK4+28;15000;401",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 990,
		"typical": 990,
		"max": 990
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-top-cat-407gehsk4-28-15000-401.webp",
		"alt": "Repères techniques : Top Cat 407GEHSK4+28;15000;401",
		"sourceUrl": "https://www.intlairtool.com/content/catalogs-page-pdfs/Top-Cat-Air-Tools.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "top-cat-407gehsk4-28",
		"label": "Code constructeur 407GEHSK4+28;15000;401",
		"distinguishingAttributes": {
			"codeCatalogue": "407GEHSK4+28;15000;401"
		}
	},
	"editorial": {
		"overview": "Top Cat 407GEHSK4+28;15000;401. Le tableau publie une consommation maximale de 16,5 L/s, soit 990 L/min. Pression de référence retenue : 6,2 bar.",
		"verifiedFacts": [
			"Référence complète imprimée : 407GEHSK4+28;15000;401, page PDF 55.",
			"Consommation maximale publiée : 990 L/min après conversion de l’unité originale.",
			"All tools are designed to operate at an air line pressure of 90 PSI (6.2 Bar) maximum. Catalogue PDF page 7."
		],
		"limitations": [
			"Le débit maximal est un besoin conservateur ; la cadence réelle de travail n’est pas déduite du catalogue.",
			"La disponibilité actuelle, les accessoires inclus et les conditions de sécurité doivent être confirmés sur la notice de cette référence."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 55",
			"evidenceIds": [
				"documented-20260930-topcat-issued"
			]
		},
		{
			"label": "Code complet de configuration",
			"value": "407GEHSK4+28;15000;401",
			"evidenceIds": [
				"documented-20260930-topcat-issued"
			]
		},
		{
			"label": "Vitesse comprise dans la désignation",
			"value": "15000 min⁻¹",
			"evidenceIds": [
				"documented-20260930-topcat-issued"
			]
		},
		{
			"label": "Consommation maximale publiée",
			"value": "16.5 L/s ; 35 cfm",
			"evidenceIds": [
				"documented-20260930-topcat-issued"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-20260930-topcat-issued",
			"sourceUrl": "https://www.intlairtool.com/content/catalogs-page-pdfs/Top-Cat-Air-Tools.pdf",
			"sourceLabel": "Catalogue constructeur Top Cat, hébergé par International Air Tool",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "Document constructeur consulté le 2026-09-30. SHA-256 4b4cea2c0cb0cfea87b1e287908e271388254005eda2136bb116549893decf7a. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-20260930-topcat-issued"
		],
		"airflowLpm": [
			"documented-20260930-topcat-issued"
		],
		"workingPressureBar": [
			"documented-20260930-topcat-issued"
		]
	},
	"notes": [
		"consommation maximale ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en bar : 6.2."
	]
};

export default product;

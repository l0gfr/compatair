import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-atlas-copco-lsv28-st12-12-8423012516",
	"slug": "meuleuse-atlas-copco-lsv28-st12-12-8423012516",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Atlas Copco LSV28 ST12-12 (réf. 8423012516)",
	"brand": "Atlas Copco",
	"model": "LSV28 ST12-12",
	"mpn": "8423012516",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1044,
		"typical": 1044,
		"max": 1044
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-atlas-copco-lsv28-st12-12-8423012516.webp",
		"alt": "Repères techniques : Atlas Copco LSV28 ST12-12 (réf. 8423012516)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lsv28-st12-12",
		"label": "Référence 8423012516",
		"distinguishingAttributes": {
			"reference": "8423012516",
			"Consommations originales": "17.4 L/s ; 36.9 cfm ; 7.5 L/s ; 15.9 cfm",
			"Vitesse à vide": "12000 tr/min",
			"Masse": "1.7 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LSV28 ST12-12 (réf. 8423012516). Consommation maximale : 1 044 L/min à 6,3 bar. Consommations originales : 17.4 L/s ; 36.9 cfm ; 7.5 L/s ; 15.9 cfm. Vitesse à vide : 12000 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 219.",
			"Consommations originales : 17.4 L/s ; 36.9 cfm ; 7.5 L/s ; 15.9 cfm.",
			"Vitesse à vide : 12000 tr/min.",
			"Masse : 1.7 kg."
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
			"value": "Page PDF 219",
			"evidenceIds": [
				"documented-d-atlas-tools-p219"
			]
		},
		{
			"label": "Consommations originales",
			"value": "17.4 L/s ; 36.9 cfm ; 7.5 L/s ; 15.9 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p219"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12000 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p219"
			]
		},
		{
			"label": "Masse",
			"value": "1.7 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p219"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p219",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=219",
			"sourceLabel": "atlas-tools, page PDF 219",
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
			"documented-d-atlas-tools-p219"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p219",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p219"
		]
	},
	"notes": [
		"Consommation maximale : 1 044 L/min à 6,3 bar."
	]
};

export default product;

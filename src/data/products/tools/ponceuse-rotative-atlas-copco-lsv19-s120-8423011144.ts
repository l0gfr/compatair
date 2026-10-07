import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-atlas-copco-lsv19-s120-8423011144",
	"slug": "ponceuse-rotative-atlas-copco-lsv19-s120-8423011144",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Atlas Copco LSV19 S120 (réf. 8423011144)",
	"brand": "Atlas Copco",
	"model": "LSV19 S120",
	"mpn": "8423011144",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 678,
		"typical": 678,
		"max": 678
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-atlas-copco-lsv19-s120-8423011144.webp",
		"alt": "Repères techniques : Atlas Copco LSV19 S120 (réf. 8423011144)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lsv19-s120",
		"label": "Référence 8423011144",
		"distinguishingAttributes": {
			"reference": "8423011144",
			"Consommations originales": "11.3 L/s ; 23.9 cfm ; 7.5 L/s ; 15.9 cfm",
			"Vitesse à vide": "12000 tr/min",
			"Masse": "0.6 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LSV19 S120 (réf. 8423011144). Consommation maximale : 678 L/min à 6,3 bar. Consommations originales : 11.3 L/s ; 23.9 cfm ; 7.5 L/s ; 15.9 cfm. Vitesse à vide : 12000 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 221.",
			"Consommations originales : 11.3 L/s ; 23.9 cfm ; 7.5 L/s ; 15.9 cfm.",
			"Vitesse à vide : 12000 tr/min.",
			"Masse : 0.6 kg."
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
			"value": "Page PDF 221",
			"evidenceIds": [
				"documented-d-atlas-tools-p221"
			]
		},
		{
			"label": "Consommations originales",
			"value": "11.3 L/s ; 23.9 cfm ; 7.5 L/s ; 15.9 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p221"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12000 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p221"
			]
		},
		{
			"label": "Masse",
			"value": "0.6 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p221"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p221",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=221",
			"sourceLabel": "atlas-tools, page PDF 221",
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
			"documented-d-atlas-tools-p221"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p221",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p221"
		]
	},
	"notes": [
		"Consommation maximale : 678 L/min à 6,3 bar."
	]
};

export default product;

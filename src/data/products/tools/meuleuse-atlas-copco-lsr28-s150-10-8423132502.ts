import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-atlas-copco-lsr28-s150-10-8423132502",
	"slug": "meuleuse-atlas-copco-lsr28-s150-10-8423132502",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Atlas Copco LSR28 S150-10 (réf. 8423132502)",
	"brand": "Atlas Copco",
	"model": "LSR28 S150-10",
	"mpn": "8423132502",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1080,
		"typical": 1080,
		"max": 1080
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-atlas-copco-lsr28-s150-10-8423132502.webp",
		"alt": "Repères techniques : Atlas Copco LSR28 S150-10 (réf. 8423132502)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lsr28-s150-10",
		"label": "Référence 8423132502",
		"distinguishingAttributes": {
			"reference": "8423132502",
			"Consommations originales": "18 L/s ; 38.2 cfm ; 5.8 L/s ; 12.3 cfm",
			"Vitesse à vide": "15000 tr/min",
			"Masse": "2.2 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LSR28 S150-10 (réf. 8423132502). Consommation maximale : 1 080 L/min à 6,3 bar. Consommations originales : 18 L/s ; 38.2 cfm ; 5.8 L/s ; 12.3 cfm. Vitesse à vide : 15000 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 213.",
			"Consommations originales : 18 L/s ; 38.2 cfm ; 5.8 L/s ; 12.3 cfm.",
			"Vitesse à vide : 15000 tr/min.",
			"Masse : 2.2 kg."
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
			"value": "Page PDF 213",
			"evidenceIds": [
				"documented-d-atlas-tools-p213"
			]
		},
		{
			"label": "Consommations originales",
			"value": "18 L/s ; 38.2 cfm ; 5.8 L/s ; 12.3 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p213"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "15000 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p213"
			]
		},
		{
			"label": "Masse",
			"value": "2.2 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p213"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p213",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=213",
			"sourceLabel": "atlas-tools, page PDF 213",
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
			"documented-d-atlas-tools-p213"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p213",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p213"
		]
	},
	"notes": [
		"Consommation maximale : 1 080 L/min à 6,3 bar."
	]
};

export default product;

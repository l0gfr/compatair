import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-atlas-copco-lsv28-st034-8423013580",
	"slug": "ponceuse-rotative-atlas-copco-lsv28-st034-8423013580",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Atlas Copco LSV28 ST034 (réf. 8423013580)",
	"brand": "Atlas Copco",
	"model": "LSV28 ST034",
	"mpn": "8423013580",
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
		"src": "/images/products/ponceuse-rotative-atlas-copco-lsv28-st034-8423013580.webp",
		"alt": "Repères techniques : Atlas Copco LSV28 ST034 (réf. 8423013580)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lsv28-st034",
		"label": "Référence 8423013580",
		"distinguishingAttributes": {
			"reference": "8423013580",
			"Consommations originales": "18 L/s ; 38.2 cfm ; 7.7 L/s ; 16.3 cfm",
			"Vitesse à vide": "3400 tr/min",
			"Masse": "1.7 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LSV28 ST034 (réf. 8423013580). Consommation maximale : 1 080 L/min à 6,3 bar. Consommations originales : 18 L/s ; 38.2 cfm ; 7.7 L/s ; 16.3 cfm. Vitesse à vide : 3400 tr/min.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 221.",
			"Consommations originales : 18 L/s ; 38.2 cfm ; 7.7 L/s ; 16.3 cfm.",
			"Vitesse à vide : 3400 tr/min.",
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
			"value": "Page PDF 221",
			"evidenceIds": [
				"documented-d-atlas-tools-p221"
			]
		},
		{
			"label": "Consommations originales",
			"value": "18 L/s ; 38.2 cfm ; 7.7 L/s ; 16.3 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p221"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3400 tr/min",
			"evidenceIds": [
				"documented-d-atlas-tools-p221"
			]
		},
		{
			"label": "Masse",
			"value": "1.7 kg",
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
		"Consommation maximale : 1 080 L/min à 6,3 bar."
	]
};

export default product;

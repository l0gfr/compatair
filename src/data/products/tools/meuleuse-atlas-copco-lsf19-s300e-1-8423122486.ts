import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-atlas-copco-lsf19-s300e-1-8423122486",
	"slug": "meuleuse-atlas-copco-lsf19-s300e-1-8423122486",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Atlas Copco LSF19 S300E-1 (réf. 8423122486)",
	"brand": "Atlas Copco",
	"model": "LSF19 S300E-1",
	"mpn": "8423122486",
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
		"src": "/images/products/meuleuse-atlas-copco-lsf19-s300e-1-8423122486-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Atlas Copco LSF19 S300E-1 (réf. 8423122486)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "atlas-copco-lsf19-s300e-1",
		"label": "Référence 8423122486",
		"distinguishingAttributes": {
			"reference": "8423122486",
			"Consommations originales": "11.3 L/s ; 23.7 cfm ; 6.6 L/s ; 13.8 cfm",
			"Vitesse à vide": "30000 tr/min",
			"Masse": "0.7 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LSF19 S300E-1, code 8423 1224 86 : meuleuse droite allongée 293 mm, pince 6 mm et 30 000 tr/min. La S300-1 mesure 193 mm et pèse 0,5 kg, contre 0,7 kg pour l’allongée ; la version /R est rigide, sans amortissement de dispersion. Le tableau distingue 11,3 L/s à puissance maximale et 6,6 L/s à vide.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 210.",
			"Consommations originales : 11.3 L/s ; 23.7 cfm ; 6.6 L/s ; 13.8 cfm.",
			"Vitesse à vide : 30000 tr/min.",
			"Masse : 0.7 kg.",
			"Pince : 6 mm.",
			"Longueur : 293 mm.",
			"Puissance maximale : 0,50 kW.",
			"Vitesse à vide : 30 000 tr/min.",
			"Consommation à puissance maximale : 11,3 L/s ; 678 L/min à 6,3 bar.",
			"Consommation à vide : 6,6 L/s ; 396 L/min à 6,3 bar."
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
			"value": "Page PDF 210",
			"evidenceIds": [
				"documented-d-atlas-tools-p210"
			]
		},
		{
			"label": "Consommations originales",
			"value": "11.3 L/s ; 23.7 cfm ; 6.6 L/s ; 13.8 cfm",
			"evidenceIds": [
				"documented-d-atlas-tools-p210"
			]
		},
		{
			"label": "Masse",
			"value": "0.7 kg",
			"evidenceIds": [
				"documented-d-atlas-tools-p210"
			]
		},
		{
			"label": "Pince",
			"value": "6 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-atlas-copco-lsf19-s300e-1-8423122486:0"
			]
		},
		{
			"label": "Longueur",
			"value": "293 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-atlas-copco-lsf19-s300e-1-8423122486:0"
			]
		},
		{
			"label": "Puissance maximale",
			"value": "0,50 kW",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-atlas-copco-lsf19-s300e-1-8423122486:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "30 000 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-atlas-copco-lsf19-s300e-1-8423122486:0"
			]
		},
		{
			"label": "Consommation à puissance maximale",
			"value": "11,3 L/s ; 678 L/min à 6,3 bar",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-atlas-copco-lsf19-s300e-1-8423122486:0"
			]
		},
		{
			"label": "Consommation à vide",
			"value": "6,6 L/s ; 396 L/min à 6,3 bar",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-atlas-copco-lsf19-s300e-1-8423122486:0"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-atlas-tools-p210",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=210",
			"sourceLabel": "atlas-tools, page PDF 210",
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
			"id": "review:2026-11-16-reviews:meuleuse-atlas-copco-lsf19-s300e-1-8423122486:0",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf",
			"sourceLabel": "Atlas Copco, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Atlas Copco LSF19 S300E-1, code 8423 1224 86 : meuleuse droite allongée 293 mm, pince 6 mm et 30 000 tr/min. La S300-1 mesure 193 mm et pèse 0,5 kg, contre 0,7 kg pour l’allongée ; la version /R est rigide, sans amortissement de dispersion. Le tableau distingue 11,3 L/s à puissance maximale et 6,6 L/s à vide. GET complet SHA-256 1e22ac35e18dfbe166f86a825fb5f9b33d152e6eddd3601c658fd39f20195e21. Pages PDF lues : 210, 3."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-atlas-tools-p210"
		],
		"workingPressureBar": [
			"documented-d-atlas-tools-p210",
			"documented-d-atlas-tools-p3"
		],
		"airflowLpm": [
			"documented-d-atlas-tools-p210"
		]
	},
	"notes": [
		"Consommation maximale : 678 L/min à 6,3 bar."
	]
};

export default product;

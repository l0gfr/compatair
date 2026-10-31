import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-atlas-copco-lsf07-s850-8423122203",
	"slug": "meuleuse-atlas-copco-lsf07-s850-8423122203",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Atlas Copco LSF07 S850 (réf. 8423122203)",
	"brand": "Atlas Copco",
	"model": "LSF07 S850",
	"mpn": "8423122203",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
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
		"overview": "Atlas Copco LSF07 S850. La ligne LSF07 S850 distingue 2,2 L/s à puissance maximale et 2,3 L/s à vide ; les colonnes cfm 4,9 et 4,6 ne concordent pas avec ces conversions. Les unités originales restent visibles ; aucun point unique dimensionnant n’est retenu sans clarification constructeur. Désignation et configuration documentées à la page PDF 211. Vitesse à vide : 88000 tr/min. Masse : 0.4 kg.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 211.",
			"Vitesse à vide : 88000 tr/min.",
			"Masse : 0.4 kg.",
			"Valeur documentaire conservée : 138 L/min. La ligne LSF07 S850 distingue 2,2 L/s à puissance maximale et 2,3 L/s à vide ; les colonnes cfm 4,9 et 4,6 ne concordent pas avec ces conversions. Les unités originales restent visibles ; aucun point unique dimensionnant n’est retenu sans clarification constructeur."
		],
		"limitations": [
			"Le débit publié conserve son régime de mesure ; aucun cycle supposé ne réduit la consommation.",
			"Caractéristiques déclarées par le fabricant. Aucun essai physique réalisé par CompatAir.",
			"La disponibilité locale, les raccords, les accessoires et la notice de sécurité de la référence livrée restent à vérifier.",
			"La ligne LSF07 S850 distingue 2,2 L/s à puissance maximale et 2,3 L/s à vide ; les colonnes cfm 4,9 et 4,6 ne concordent pas avec ces conversions. Les unités originales restent visibles ; aucun point unique dimensionnant n’est retenu sans clarification constructeur."
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
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":138,\"typical\":138,\"max\":138},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"documented-d-atlas-tools-p211",
				"meuleuse-atlas-copco-lsf07-s850-8423122203-reserved-20261031-1",
				"meuleuse-atlas-copco-lsf07-s850-8423122203-reserved-20261031-2"
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
		},
		{
			"id": "meuleuse-atlas-copco-lsf07-s850-8423122203-reserved-20261031-1",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=211",
			"sourceLabel": "Atlas Copco LSF07 S850 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 1e22ac35e18dfbe166f86a825fb5f9b33d152e6eddd3601c658fd39f20195e21. La ligne LSF07 S850 distingue 2,2 L/s à puissance maximale et 2,3 L/s à vide ; les colonnes cfm 4,9 et 4,6 ne concordent pas avec ces conversions. Les unités originales restent visibles ; aucun point unique dimensionnant n’est retenu sans clarification constructeur."
		},
		{
			"id": "meuleuse-atlas-copco-lsf07-s850-8423122203-reserved-20261031-2",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=3",
			"sourceLabel": "Atlas Copco LSF07 S850 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 1e22ac35e18dfbe166f86a825fb5f9b33d152e6eddd3601c658fd39f20195e21. La ligne LSF07 S850 distingue 2,2 L/s à puissance maximale et 2,3 L/s à vide ; les colonnes cfm 4,9 et 4,6 ne concordent pas avec ces conversions. Les unités originales restent visibles ; aucun point unique dimensionnant n’est retenu sans clarification constructeur."
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
		"demandModel": [
			"meuleuse-atlas-copco-lsf07-s850-8423122203-reserved-20261031-1",
			"meuleuse-atlas-copco-lsf07-s850-8423122203-reserved-20261031-2"
		],
		"demandExplanation": [
			"meuleuse-atlas-copco-lsf07-s850-8423122203-reserved-20261031-1",
			"meuleuse-atlas-copco-lsf07-s850-8423122203-reserved-20261031-2"
		]
	},
	"notes": [],
	"demandExplanation": "La ligne LSF07 S850 distingue 2,2 L/s à puissance maximale et 2,3 L/s à vide ; les colonnes cfm 4,9 et 4,6 ne concordent pas avec ces conversions. Les unités originales restent visibles ; aucun point unique dimensionnant n’est retenu sans clarification constructeur."
};

export default product;

import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-top-cat-300ehk-30000-1-4",
	"slug": "meuleuse-top-cat-300ehk-30000-1-4",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Top Cat 300EHK;30000;1/4",
	"brand": "Top Cat",
	"model": "300EHK;30000;1/4",
	"mpn": "300EHK;30000;1/4",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-top-cat-300ehk-30000-1-4-20261106.svg",
		"alt": "Repères techniques : Top Cat 300EHK;30000;1/4",
		"sourceUrl": "https://www.intlairtool.com/content/catalogs-page-pdfs/Top-Cat-Air-Tools.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "top-cat-300ehk",
		"label": "Code constructeur 300EHK;30000;1/4",
		"distinguishingAttributes": {
			"codeCatalogue": "300EHK;30000;1/4"
		}
	},
	"editorial": {
		"overview": "Top Cat 300EHK;30000;1/4. Le tableau publie une consommation maximale de 11,8 L/s, soit 708 L/min. Pression maximale de service : 6,2 bar ; pression de mesure de consommation à confirmer.",
		"verifiedFacts": [
			"Référence complète imprimée : 300EHK;30000;1/4, page PDF 48.",
			"Consommation maximale publiée : 708 L/min après conversion de l’unité originale.",
			"All tools are designed to operate at an air line pressure of 90 PSI (6.2 Bar) maximum. Catalogue PDF page 7."
		],
		"limitations": [
			"Le débit maximal est un besoin conservateur ; la cadence réelle de travail n’est pas déduite du catalogue.",
			"La disponibilité actuelle, les accessoires inclus et les conditions de sécurité doivent être confirmés sur la notice de cette référence.",
			"La pression de mesure de la consommation publiée reste à documenter. Les valeurs et leur régime sont conservés dans les spécifications, hors calcul de compatibilité."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 48",
			"evidenceIds": [
				"documented-20260930-topcat-issued"
			]
		},
		{
			"label": "Code complet de configuration",
			"value": "300EHK;30000;1/4",
			"evidenceIds": [
				"documented-20260930-topcat-issued"
			]
		},
		{
			"label": "Vitesse comprise dans la désignation",
			"value": "30000 min⁻¹",
			"evidenceIds": [
				"documented-20260930-topcat-issued"
			]
		},
		{
			"label": "Consommation maximale publiée",
			"value": "11.8 L/s ; 25 cfm",
			"evidenceIds": [
				"documented-20260930-topcat-issued"
			]
		},
		{
			"label": "Consommation publiée, hors dimensionnement",
			"value": "708 L/min ; La pression de mesure de la consommation publiée reste à documenter. Les valeurs et leur régime sont conservés dans les spécifications, hors calcul de compatibilité.",
			"evidenceIds": [
				"review:2026-11-06-followup:meuleuse-top-cat-300ehk-30000-1-4:1"
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
		},
		{
			"id": "review:2026-11-06-followup:meuleuse-top-cat-300ehk-30000-1-4:1",
			"sourceUrl": "https://www.intlairtool.com/content/catalogs-page-pdfs/Top-Cat-Air-Tools.pdf",
			"sourceLabel": "Top Cat, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Catalogue configuration300EHK;30000;1/4p48 : levier sécurité,pince1/4,30000tr/min. Les11,8L/s maximum sont documentaires ; la consigne90psi maximum ne prouve pas la pression de mesure de consommation. Garder le débit hors moteur. SHA-256 du document complet : 4b4cea2c0cb0cfea87b1e287908e271388254005eda2136bb116549893decf7a."
		},
		{
			"id": "review:2026-11-06-copy:meuleuse-top-cat-300ehk-30000-1-4",
			"sourceUrl": "https://www.intlairtool.com/content/catalogs-page-pdfs/Top-Cat-Air-Tools.pdf",
			"sourceLabel": "Top Cat, clarification des conditions de dimensionnement",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Alignement des textes sur le régime non dimensionnant déjà utilisé par le moteur. Valeurs documentaires et conditions de service conservées ; SHA-256 4b4cea2c0cb0cfea87b1e287908e271388254005eda2136bb116549893decf7a."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-20260930-topcat-issued"
		],
		"workingPressureBar": [
			"documented-20260930-topcat-issued"
		],
		"demandExplanation": [
			"review:2026-11-06-followup:meuleuse-top-cat-300ehk-30000-1-4:1"
		]
	},
	"notes": [
		"consommation maximale ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en bar : 6.2."
	],
	"demandExplanation": "La pression de mesure de la consommation publiée reste à documenter. Les valeurs et leur régime sont conservés dans les spécifications, hors calcul de compatibilité."
};

export default product;

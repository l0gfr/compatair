import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-top-cat-300ra3m2k-4000-5sp",
	"slug": "ponceuse-rotative-top-cat-300ra3m2k-4000-5sp",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Top Cat 300RA3m2K;4000;5SP",
	"brand": "Top Cat",
	"model": "300RA3m2K;4000;5SP",
	"mpn": "300RA3m2K;4000;5SP",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-top-cat-300ra3m2k-4000-5sp-20261106.svg",
		"alt": "Repères techniques : Top Cat 300RA3m2K;4000;5SP",
		"sourceUrl": "https://www.intlairtool.com/content/catalogs-page-pdfs/Top-Cat-Air-Tools.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "top-cat-300ra3m2k",
		"label": "Code constructeur 300RA3m2K;4000;5SP",
		"distinguishingAttributes": {
			"codeCatalogue": "300RA3m2K;4000;5SP"
		}
	},
	"editorial": {
		"overview": "Top Cat 300RA3m2K;4000;5SP. Le tableau publie une consommation maximale de 11,8 L/s, soit 708 L/min. Pression de référence retenue : 6,2 bar.",
		"verifiedFacts": [
			"Référence complète imprimée : 300RA3m2K;4000;5SP, page PDF 40.",
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
			"value": "Page PDF 40",
			"evidenceIds": [
				"documented-20260930-topcat-issued"
			]
		},
		{
			"label": "Code complet de configuration",
			"value": "300RA3m2K;4000;5SP",
			"evidenceIds": [
				"documented-20260930-topcat-issued"
			]
		},
		{
			"label": "Vitesse comprise dans la désignation",
			"value": "4000 min⁻¹",
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
				"review:2026-11-06-followup:ponceuse-rotative-top-cat-300ra3m2k-4000-5sp:1"
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
			"id": "review:2026-11-06-followup:ponceuse-rotative-top-cat-300ra3m2k-4000-5sp:1",
			"sourceUrl": "https://www.intlairtool.com/content/catalogs-page-pdfs/Top-Cat-Air-Tools.pdf",
			"sourceLabel": "Top Cat, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Catalogue p40 : ponceuse rotative5pouces,4000tr/min,levier sécurité. Les11,8L/s/25cfm maxima restent distincts d'une mesure encharge à6,2bar non établie. Garder la configuration exacte sans transfert du300RA2à15000. SHA-256 du document complet : 4b4cea2c0cb0cfea87b1e287908e271388254005eda2136bb116549893decf7a."
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
			"review:2026-11-06-followup:ponceuse-rotative-top-cat-300ra3m2k-4000-5sp:1"
		]
	},
	"notes": [
		"consommation maximale ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en bar : 6.2."
	],
	"demandExplanation": "La pression de mesure de la consommation publiée reste à documenter. Les valeurs et leur régime sont conservés dans les spécifications, hors calcul de compatibilité."
};

export default product;

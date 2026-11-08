import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-top-cat-300d36mk-825-d3-8",
	"slug": "perceuse-top-cat-300d36mk-825-d3-8",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Top Cat 300D36mK;825;D3/8",
	"brand": "Top Cat",
	"model": "300D36mK;825;D3/8",
	"mpn": "300D36mK;825;D3/8",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-top-cat-300d36mk-825-d3-8-20261106.svg",
		"alt": "Repères techniques : Top Cat 300D36mK;825;D3/8",
		"sourceUrl": "https://www.intlairtool.com/content/catalogs-page-pdfs/Top-Cat-Air-Tools.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "top-cat-300d36mk",
		"label": "Code constructeur 300D36mK;825;D3/8",
		"distinguishingAttributes": {
			"codeCatalogue": "300D36mK;825;D3/8"
		}
	},
	"editorial": {
		"overview": "Top Cat 300D36mK;825;D3/8. Le tableau publie une consommation maximale de 11,8 L/s, soit 708 L/min. Pression maximale de service : 6,2 bar ; pression de mesure de consommation à confirmer.",
		"verifiedFacts": [
			"Référence complète imprimée : 300D36mK;825;D3/8, page PDF 70.",
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
			"value": "Page PDF 70",
			"evidenceIds": [
				"documented-20260930-topcat-issued"
			]
		},
		{
			"label": "Code complet de configuration",
			"value": "300D36mK;825;D3/8",
			"evidenceIds": [
				"documented-20260930-topcat-issued"
			]
		},
		{
			"label": "Vitesse comprise dans la désignation",
			"value": "825 min⁻¹",
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
				"review:2026-11-06-followup:perceuse-top-cat-300d36mk-825-d3-8:1"
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
			"id": "review:2026-11-06-followup:perceuse-top-cat-300d36mk-825-d3-8:1",
			"sourceUrl": "https://www.intlairtool.com/content/catalogs-page-pdfs/Top-Cat-Air-Tools.pdf",
			"sourceLabel": "Top Cat, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Catalogue p70 : réducteur36:1,levier sécurité,825tr/min,mandrin3/8. Consommation11,8L/s publiée maximale mais sans point de mesure démontré par la seule pression maximale90psi. Ne pas dimensionner une charge à6,2bar présumée. SHA-256 du document complet : 4b4cea2c0cb0cfea87b1e287908e271388254005eda2136bb116549893decf7a."
		},
		{
			"id": "review:2026-11-06-copy:perceuse-top-cat-300d36mk-825-d3-8",
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
			"review:2026-11-06-followup:perceuse-top-cat-300d36mk-825-d3-8:1"
		]
	},
	"notes": [
		"consommation maximale ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en bar : 6.2."
	],
	"demandExplanation": "La pression de mesure de la consommation publiée reste à documenter. Les valeurs et leur régime sont conservés dans les spécifications, hors calcul de compatibilité."
};

export default product;

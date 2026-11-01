import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-top-cat-300eh-30000-1-4",
	"slug": "meuleuse-top-cat-300eh-30000-1-4",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Top Cat 300EH;30000;1/4",
	"brand": "Top Cat",
	"model": "300EH;30000;1/4",
	"mpn": "300EH;30000;1/4",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-top-cat-300eh-30000-1-4.webp",
		"alt": "Repères techniques : Top Cat 300EH;30000;1/4",
		"sourceUrl": "https://www.intlairtool.com/content/catalogs-page-pdfs/Top-Cat-Air-Tools.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "top-cat-300eh",
		"label": "Code constructeur 300EH;30000;1/4",
		"distinguishingAttributes": {
			"codeCatalogue": "300EH;30000;1/4"
		}
	},
	"editorial": {
		"overview": "Top Cat 300EH;30000;1/4. Le plafond de sécurité 90 psi ne prouve pas la pression de mesure du maximum de consommation. Les repères mécaniques propres au modèle sont conservés ; le débit ne dimensionne plus le compresseur.",
		"verifiedFacts": [
			"Référence complète imprimée : 300EH;30000;1/4, page PDF 48.",
			"All tools are designed to operate at an air line pressure of 90 PSI (6.2 Bar) maximum. Catalogue PDF page 7."
		],
		"limitations": [
			"Le débit maximal est un besoin conservateur ; la cadence réelle de travail n’est pas déduite du catalogue.",
			"La disponibilité actuelle, les accessoires inclus et les conditions de sécurité doivent être confirmés sur la notice de cette référence.",
			"Le plafond de sécurité 90 psi ne prouve pas la pression de mesure du maximum de consommation. Les repères mécaniques propres au modèle sont conservés ; le débit ne dimensionne plus le compresseur."
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
			"value": "300EH;30000;1/4",
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
			"label": "Ancienne valeur volumique, portée documentaire",
			"value": "708 L/min ; régime, unité de référence ou pression de mesure insuffisamment qualifiés pour le FAD",
			"evidenceIds": [
				"meuleuse-top-cat-300eh-30000-1-4-reserved-20261101-1"
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
			"id": "meuleuse-top-cat-300eh-30000-1-4-reserved-20261101-1",
			"sourceUrl": "https://www.intlairtool.com/content/catalogs-page-pdfs/Top-Cat-Air-Tools.pdf",
			"sourceLabel": "Top Cat : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 4b4cea2c0cb0cfea87b1e287908e271388254005eda2136bb116549893decf7a. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-20260930-topcat-issued"
		],
		"airflowLpm": [
			"meuleuse-top-cat-300eh-30000-1-4-reserved-20261101-1"
		],
		"workingPressureBar": [
			"documented-20260930-topcat-issued"
		],
		"demandModel": [
			"meuleuse-top-cat-300eh-30000-1-4-reserved-20261101-1"
		],
		"airflowBasis": [
			"meuleuse-top-cat-300eh-30000-1-4-reserved-20261101-1"
		],
		"demandExplanation": [
			"meuleuse-top-cat-300eh-30000-1-4-reserved-20261101-1"
		],
		"editorial": [
			"meuleuse-top-cat-300eh-30000-1-4-reserved-20261101-1"
		],
		"specifications": [
			"meuleuse-top-cat-300eh-30000-1-4-reserved-20261101-1"
		]
	},
	"notes": [
		"consommation maximale ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en bar : 6.2."
	],
	"demandExplanation": "Consommation maximale publiée, mais pression de mesure non appariée. Le plafond de sécurité 90 psi reste séparé de cette mesure."
};

export default product;

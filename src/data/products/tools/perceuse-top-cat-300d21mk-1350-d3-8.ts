import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-top-cat-300d21mk-1350-d3-8",
	"slug": "perceuse-top-cat-300d21mk-1350-d3-8",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Top Cat 300D21mK;1350;D3/8",
	"brand": "Top Cat",
	"model": "300D21mK;1350;D3/8",
	"mpn": "300D21mK;1350;D3/8",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-top-cat-300d21mk-1350-d3-8.webp",
		"alt": "Repères techniques : Top Cat 300D21mK;1350;D3/8",
		"sourceUrl": "https://www.intlairtool.com/content/catalogs-page-pdfs/Top-Cat-Air-Tools.pdf",
		"sourceLabel": "Carte technique CompatAir, établie à partir du document constructeur"
	},
	"variant": {
		"familyId": "top-cat-300d21mk",
		"label": "Code constructeur 300D21mK;1350;D3/8",
		"distinguishingAttributes": {
			"codeCatalogue": "300D21mK;1350;D3/8"
		}
	},
	"editorial": {
		"overview": "Top Cat 300D21mK;1350;D3/8. Le plafond de sécurité 90 psi ne prouve pas la pression de mesure du maximum de consommation. Les repères mécaniques propres au modèle sont conservés ; le débit ne dimensionne plus le compresseur.",
		"verifiedFacts": [
			"Référence complète imprimée : 300D21 m K;1350;D3/8, page PDF 70.",
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
			"value": "Page PDF 70",
			"evidenceIds": [
				"documented-20260930-topcat-issued"
			]
		},
		{
			"label": "Code complet de configuration",
			"value": "300D21 m K;1350;D3/8",
			"evidenceIds": [
				"documented-20260930-topcat-issued"
			]
		},
		{
			"label": "Vitesse comprise dans la désignation",
			"value": "1350 min⁻¹",
			"evidenceIds": [
				"documented-20260930-topcat-issued"
			]
		},
		{
			"label": "Ancienne valeur volumique, portée documentaire",
			"value": "708 L/min ; régime, unité de référence ou pression de mesure insuffisamment qualifiés pour le FAD",
			"evidenceIds": [
				"perceuse-top-cat-300d21mk-1350-d3-8-reserved-20261101-1"
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
			"id": "perceuse-top-cat-300d21mk-1350-d3-8-reserved-20261101-1",
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
			"perceuse-top-cat-300d21mk-1350-d3-8-reserved-20261101-1"
		],
		"workingPressureBar": [
			"documented-20260930-topcat-issued"
		],
		"demandModel": [
			"perceuse-top-cat-300d21mk-1350-d3-8-reserved-20261101-1"
		],
		"airflowBasis": [
			"perceuse-top-cat-300d21mk-1350-d3-8-reserved-20261101-1"
		],
		"demandExplanation": [
			"perceuse-top-cat-300d21mk-1350-d3-8-reserved-20261101-1"
		],
		"editorial": [
			"perceuse-top-cat-300d21mk-1350-d3-8-reserved-20261101-1"
		],
		"specifications": [
			"perceuse-top-cat-300d21mk-1350-d3-8-reserved-20261101-1"
		]
	},
	"notes": [
		"consommation maximale ; aucune conversion en consommation en charge n’est effectuée.",
		"Pression publiée en bar : 6.2."
	],
	"demandExplanation": "Consommation maximale publiée, mais pression de mesure non appariée. Le plafond de sécurité 90 psi reste séparé de cette mesure."
};

export default product;

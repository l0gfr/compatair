import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-desoutter-sd140-ab510-s4q-1462784",
	"slug": "visseuse-desoutter-sd140-ab510-s4q-1462784",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Desoutter SD140-AB510-S4Q (réf. 1462784)",
	"brand": "Desoutter",
	"model": "SD140-AB510-S4Q",
	"mpn": "1462784",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 522,
		"typical": 522,
		"max": 522
	},
	"airflowBasis": "free-speed",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-desoutter-sd140-ab510-s4q-1462784.webp",
		"alt": "Repères techniques : Desoutter SD140-AB510-S4Q (réf. 1462784)",
		"sourceUrl": "https://www.datocms-assets.com/104564/1784211285-desoutter_general_catalog_fr_2026-07.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "desoutter-sd140-ab510-s4q",
		"label": "Référence 1462784",
		"distinguishingAttributes": {
			"reference": "1462784",
			"Entrée d’air (pouces)": "1/4",
			"Longueur": "253 mm",
			"Vitesse à vide": "510 rpm"
		}
	},
	"editorial": {
		"overview": "Desoutter SD140-AB510-S4Q (réf. 1462784). Consommation à vide : 522 L/min à 6,3 bar. Entrée d’air (pouces) : 1/4. Longueur : 253 mm.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 150.",
			"Entrée d’air (pouces) : 1/4.",
			"Longueur : 253 mm.",
			"Vitesse à vide : 510 rpm."
		],
		"limitations": [
			"Le débit à vide seul ne confirme pas la consommation maximale ou en charge. Le verdict reste insufficient_data.",
			"Caractéristiques déclarées par le fabricant. Aucun essai physique réalisé par CompatAir.",
			"La disponibilité locale, les raccords, les accessoires et la notice de sécurité de la référence livrée restent à vérifier."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 150",
			"evidenceIds": [
				"documented-d-desoutter-2026-p150",
				"documented-d-desoutter-1462784"
			]
		},
		{
			"label": "Entrée d’air (pouces)",
			"value": "1/4",
			"evidenceIds": [
				"documented-d-desoutter-2026-p150",
				"documented-d-desoutter-1462784"
			]
		},
		{
			"label": "Longueur",
			"value": "253 mm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p150",
				"documented-d-desoutter-1462784"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "510 rpm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p150",
				"documented-d-desoutter-1462784"
			]
		},
		{
			"label": "Couple maximal avant",
			"value": "14 Nm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p150",
				"documented-d-desoutter-1462784"
			]
		},
		{
			"label": "Flexible intérieur minimal pour 5 m",
			"value": "10 mm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p150",
				"documented-d-desoutter-1462784"
			]
		},
		{
			"label": "Sortie",
			"value": "1/4",
			"evidenceIds": [
				"documented-d-desoutter-2026-p150",
				"documented-d-desoutter-1462784"
			]
		},
		{
			"label": "Déclenchement",
			"value": "Push start",
			"evidenceIds": [
				"documented-d-desoutter-2026-p150",
				"documented-d-desoutter-1462784"
			]
		},
		{
			"label": "Masse",
			"value": "0.89 kg",
			"evidenceIds": [
				"documented-d-desoutter-2026-p150",
				"documented-d-desoutter-1462784"
			]
		},
		{
			"label": "Consommation à vide du catalogue, conservée séparément",
			"value": "8.7 l/s ; 18.4 cfm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p150",
				"documented-d-desoutter-1462784"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-desoutter-2026-p150",
			"sourceUrl": "https://www.datocms-assets.com/104564/1784211285-desoutter_general_catalog_fr_2026-07.pdf#page=150",
			"sourceLabel": "desoutter-2026, page PDF 150",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 69b46fe9fc41aa8c1b174a8e7e32686b6b20e2884c95db1c461caa6ddf33c9ad. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "documented-d-desoutter-1462784",
			"sourceUrl": "https://www.desouttertools.com/en-us/products/1462784",
			"sourceLabel": "Desoutter, fiche individuelle 1462784",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 f5e8ad5d59d92c3ad52a6ba05b8fefa67f019a1fe4979c6ce513cfdb35e4219a. Les contradictions éventuelles sont conservées, sans correction numérique arbitraire."
		},
		{
			"id": "documented-d-desoutter-2026-p345",
			"sourceUrl": "https://www.datocms-assets.com/104564/1784211285-desoutter_general_catalog_fr_2026-07.pdf#page=345",
			"sourceLabel": "desoutter-2026, page PDF 345",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 69b46fe9fc41aa8c1b174a8e7e32686b6b20e2884c95db1c461caa6ddf33c9ad. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-desoutter-2026-p150"
		],
		"workingPressureBar": [
			"documented-d-desoutter-2026-p150",
			"documented-d-desoutter-2026-p345"
		],
		"airflowLpm": [
			"documented-d-desoutter-2026-p150",
			"documented-d-desoutter-1462784"
		],
		"airflowBasis": [
			"documented-d-desoutter-2026-p150"
		]
	},
	"notes": [
		"Consommation à vide : 522 L/min à 6,3 bar."
	]
};

export default product;

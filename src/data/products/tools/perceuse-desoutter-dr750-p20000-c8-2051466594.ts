import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-desoutter-dr750-p20000-c8-2051466594",
	"slug": "perceuse-desoutter-dr750-p20000-c8-2051466594",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Desoutter DR750-P20000-C8 (réf. 2051466594)",
	"brand": "Desoutter",
	"model": "DR750-P20000-C8",
	"mpn": "2051466594",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 840,
		"typical": 840,
		"max": 840
	},
	"airflowBasis": "free-speed",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-desoutter-dr750-p20000-c8-2051466594.webp",
		"alt": "Repères techniques : Desoutter DR750-P20000-C8 (réf. 2051466594)",
		"sourceUrl": "https://www.datocms-assets.com/104564/1784211285-desoutter_general_catalog_fr_2026-07.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "desoutter-dr750-p20000-c8",
		"label": "Référence 2051466594",
		"distinguishingAttributes": {
			"reference": "2051466594",
			"Entrée d’air (pouces)": "1/4",
			"Mandrin": "8",
			"Type de mandrin": "Keyed"
		}
	},
	"editorial": {
		"overview": "Desoutter DR750-P20000-C8 (réf. 2051466594). Consommation à vide : 840 L/min à 6,3 bar. Entrée d’air (pouces) : 1/4. Mandrin : 8.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 302.",
			"Entrée d’air (pouces) : 1/4.",
			"Mandrin : 8.",
			"Type de mandrin : Keyed."
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
			"value": "Page PDF 302",
			"evidenceIds": [
				"documented-d-desoutter-2026-p302",
				"documented-d-desoutter-2051466594"
			]
		},
		{
			"label": "Entrée d’air (pouces)",
			"value": "1/4",
			"evidenceIds": [
				"documented-d-desoutter-2026-p302",
				"documented-d-desoutter-2051466594"
			]
		},
		{
			"label": "Mandrin",
			"value": "8",
			"evidenceIds": [
				"documented-d-desoutter-2026-p302",
				"documented-d-desoutter-2051466594"
			]
		},
		{
			"label": "Type de mandrin",
			"value": "Keyed",
			"evidenceIds": [
				"documented-d-desoutter-2026-p302",
				"documented-d-desoutter-2051466594"
			]
		},
		{
			"label": "Longueur",
			"value": "152 mm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p302",
				"documented-d-desoutter-2051466594"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "20000 rpm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p302",
				"documented-d-desoutter-2051466594"
			]
		},
		{
			"label": "Flexible intérieur minimal pour 5 m",
			"value": "10 mm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p302",
				"documented-d-desoutter-2051466594"
			]
		},
		{
			"label": "Couple de calage",
			"value": "1.6 Nm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p302",
				"documented-d-desoutter-2051466594"
			]
		},
		{
			"label": "Déclenchement",
			"value": "Trigger",
			"evidenceIds": [
				"documented-d-desoutter-2026-p302",
				"documented-d-desoutter-2051466594"
			]
		},
		{
			"label": "Masse",
			"value": "0.9 kg",
			"evidenceIds": [
				"documented-d-desoutter-2026-p302",
				"documented-d-desoutter-2051466594"
			]
		},
		{
			"label": "Recoupement numérique avec le tableau PDF",
			"value": "Non établi pour cette ligne ; aucune confirmation croisée du débit revendiquée",
			"evidenceIds": [
				"documented-d-desoutter-2026-p302",
				"documented-d-desoutter-2051466594"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-desoutter-2026-p302",
			"sourceUrl": "https://www.datocms-assets.com/104564/1784211285-desoutter_general_catalog_fr_2026-07.pdf#page=302",
			"sourceLabel": "desoutter-2026, page PDF 302",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 69b46fe9fc41aa8c1b174a8e7e32686b6b20e2884c95db1c461caa6ddf33c9ad. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "documented-d-desoutter-2051466594",
			"sourceUrl": "https://www.desouttertools.com/en-us/products/2051466594",
			"sourceLabel": "Desoutter, fiche individuelle 2051466594",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 9fe545fbffd4b24039ef95c584fd723ff997b6133b21943eacbf6940941bc3dc. Les contradictions éventuelles sont conservées, sans correction numérique arbitraire."
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
			"documented-d-desoutter-2026-p302"
		],
		"workingPressureBar": [
			"documented-d-desoutter-2026-p302",
			"documented-d-desoutter-2026-p345"
		],
		"airflowLpm": [
			"documented-d-desoutter-2026-p302",
			"documented-d-desoutter-2051466594"
		],
		"airflowBasis": [
			"documented-d-desoutter-2026-p302"
		]
	},
	"notes": [
		"Consommation à vide : 840 L/min à 6,3 bar."
	]
};

export default product;

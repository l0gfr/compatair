import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-desoutter-sd160-lr320-s4q-1462964",
	"slug": "visseuse-desoutter-sd160-lr320-s4q-1462964",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Desoutter SD160-LR320-S4Q (réf. 1462964)",
	"brand": "Desoutter",
	"model": "SD160-LR320-S4Q",
	"mpn": "1462964",
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
		"src": "/images/products/visseuse-desoutter-sd160-lr320-s4q-1462964.webp",
		"alt": "Repères techniques : Desoutter SD160-LR320-S4Q (réf. 1462964)",
		"sourceUrl": "https://www.datocms-assets.com/104564/1789974097-desoutter_general_catalog_fr_2026-09.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "desoutter-sd160-lr320-s4q",
		"label": "Référence 1462964",
		"distinguishingAttributes": {
			"reference": "1462964",
			"Entrée d’air (pouces)": "1/4",
			"Longueur": "278 mm",
			"Vitesse à vide": "320 rpm"
		}
	},
	"editorial": {
		"overview": "Desoutter SD160-LR320-S4Q (réf. 1462964). Consommation à vide : 522 L/min à 6,3 bar. Entrée d’air (pouces) : 1/4. Longueur : 278 mm.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 151.",
			"Entrée d’air (pouces) : 1/4.",
			"Longueur : 278 mm.",
			"Vitesse à vide : 320 rpm."
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
			"value": "Page PDF 151",
			"evidenceIds": [
				"documented-d-desoutter-2026-p151",
				"documented-d-desoutter-1462964"
			]
		},
		{
			"label": "Entrée d’air (pouces)",
			"value": "1/4",
			"evidenceIds": [
				"documented-d-desoutter-2026-p151",
				"documented-d-desoutter-1462964"
			]
		},
		{
			"label": "Longueur",
			"value": "278 mm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p151",
				"documented-d-desoutter-1462964"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "320 rpm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p151",
				"documented-d-desoutter-1462964"
			]
		},
		{
			"label": "Couple maximal avant",
			"value": "16 Nm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p151",
				"documented-d-desoutter-1462964"
			]
		},
		{
			"label": "Flexible intérieur minimal pour 5 m",
			"value": "10 mm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p151",
				"documented-d-desoutter-1462964"
			]
		},
		{
			"label": "Sortie",
			"value": "1/4",
			"evidenceIds": [
				"documented-d-desoutter-2026-p151",
				"documented-d-desoutter-1462964"
			]
		},
		{
			"label": "Déclenchement",
			"value": "Lever",
			"evidenceIds": [
				"documented-d-desoutter-2026-p151",
				"documented-d-desoutter-1462964"
			]
		},
		{
			"label": "Masse",
			"value": "0.92 kg",
			"evidenceIds": [
				"documented-d-desoutter-2026-p151",
				"documented-d-desoutter-1462964"
			]
		},
		{
			"label": "Consommation à vide du catalogue, conservée séparément",
			"value": "8.7 l/s ; 18.4 cfm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p151",
				"documented-d-desoutter-1462964"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-desoutter-2026-p151",
			"sourceUrl": "https://www.datocms-assets.com/104564/1789974097-desoutter_general_catalog_fr_2026-09.pdf#page=151",
			"sourceLabel": "desoutter-2026, page PDF 151",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-13",
			"confidence": "B",
			"notes": "SHA-256 7d2121c4aeb36c31bde784ba6ddcebee83686fb4883c6b63005d0e569613304c. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé. Édition 09.2026 : ligne de référence, consommation publiée et pression page 345 recoupées le 13 octobre ; caractéristiques et incertitudes conservées."
		},
		{
			"id": "documented-d-desoutter-1462964",
			"sourceUrl": "https://www.desouttertools.com/en-us/products/1462964",
			"sourceLabel": "Desoutter, fiche individuelle 1462964",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 54a0971b2a418313a84567a8eacb1c736afe3729c18cc31bbaabf9ab8b76facf. Les contradictions éventuelles sont conservées, sans correction numérique arbitraire."
		},
		{
			"id": "documented-d-desoutter-2026-p345",
			"sourceUrl": "https://www.datocms-assets.com/104564/1789974097-desoutter_general_catalog_fr_2026-09.pdf#page=345",
			"sourceLabel": "desoutter-2026, page PDF 345",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-13",
			"confidence": "B",
			"notes": "SHA-256 7d2121c4aeb36c31bde784ba6ddcebee83686fb4883c6b63005d0e569613304c. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé. Édition 09.2026 : ligne de référence, consommation publiée et pression page 345 recoupées le 13 octobre ; caractéristiques et incertitudes conservées."
		}
	],
	"fieldSources": {
		"mpn": [
			"documented-d-desoutter-2026-p151"
		],
		"workingPressureBar": [
			"documented-d-desoutter-2026-p151",
			"documented-d-desoutter-2026-p345"
		],
		"airflowLpm": [
			"documented-d-desoutter-2026-p151",
			"documented-d-desoutter-1462964"
		],
		"airflowBasis": [
			"documented-d-desoutter-2026-p151"
		]
	},
	"notes": [
		"Consommation à vide : 522 L/min à 6,3 bar."
	]
};

export default product;

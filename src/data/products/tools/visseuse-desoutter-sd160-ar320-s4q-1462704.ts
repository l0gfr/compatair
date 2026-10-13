import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-desoutter-sd160-ar320-s4q-1462704",
	"slug": "visseuse-desoutter-sd160-ar320-s4q-1462704",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Desoutter SD160-AR320-S4Q (réf. 1462704)",
	"brand": "Desoutter",
	"model": "SD160-AR320-S4Q",
	"mpn": "1462704",
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
		"src": "/images/products/visseuse-desoutter-sd160-ar320-s4q-1462704.webp",
		"alt": "Repères techniques : Desoutter SD160-AR320-S4Q (réf. 1462704)",
		"sourceUrl": "https://www.datocms-assets.com/104564/1789974097-desoutter_general_catalog_fr_2026-09.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "desoutter-sd160-ar320-s4q",
		"label": "Référence 1462704",
		"distinguishingAttributes": {
			"reference": "1462704",
			"Entrée d’air (pouces)": "1/4",
			"Longueur": "253 mm",
			"Vitesse à vide": "320 rpm"
		}
	},
	"editorial": {
		"overview": "Desoutter SD160-AR320-S4Q (réf. 1462704). Consommation à vide : 522 L/min à 6,3 bar. Entrée d’air (pouces) : 1/4. Longueur : 253 mm.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 150.",
			"Entrée d’air (pouces) : 1/4.",
			"Longueur : 253 mm.",
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
			"value": "Page PDF 150",
			"evidenceIds": [
				"documented-d-desoutter-2026-p150",
				"documented-d-desoutter-1462704"
			]
		},
		{
			"label": "Entrée d’air (pouces)",
			"value": "1/4",
			"evidenceIds": [
				"documented-d-desoutter-2026-p150",
				"documented-d-desoutter-1462704"
			]
		},
		{
			"label": "Longueur",
			"value": "253 mm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p150",
				"documented-d-desoutter-1462704"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "320 rpm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p150",
				"documented-d-desoutter-1462704"
			]
		},
		{
			"label": "Couple maximal avant",
			"value": "16 Nm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p150",
				"documented-d-desoutter-1462704"
			]
		},
		{
			"label": "Flexible intérieur minimal pour 5 m",
			"value": "10 mm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p150",
				"documented-d-desoutter-1462704"
			]
		},
		{
			"label": "Sortie",
			"value": "1/4",
			"evidenceIds": [
				"documented-d-desoutter-2026-p150",
				"documented-d-desoutter-1462704"
			]
		},
		{
			"label": "Déclenchement",
			"value": "Push start",
			"evidenceIds": [
				"documented-d-desoutter-2026-p150",
				"documented-d-desoutter-1462704"
			]
		},
		{
			"label": "Masse",
			"value": "0.89 kg",
			"evidenceIds": [
				"documented-d-desoutter-2026-p150",
				"documented-d-desoutter-1462704"
			]
		},
		{
			"label": "Consommation à vide du catalogue, conservée séparément",
			"value": "8.7 l/s ; 18.4 cfm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p150",
				"documented-d-desoutter-1462704"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-desoutter-2026-p150",
			"sourceUrl": "https://www.datocms-assets.com/104564/1789974097-desoutter_general_catalog_fr_2026-09.pdf#page=150",
			"sourceLabel": "desoutter-2026, page PDF 150",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-13",
			"confidence": "B",
			"notes": "SHA-256 7d2121c4aeb36c31bde784ba6ddcebee83686fb4883c6b63005d0e569613304c. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé. Édition 09.2026 : ligne de référence, consommation publiée et pression page 345 recoupées le 13 octobre ; caractéristiques et incertitudes conservées."
		},
		{
			"id": "documented-d-desoutter-1462704",
			"sourceUrl": "https://www.desouttertools.com/en-us/products/1462704",
			"sourceLabel": "Desoutter, fiche individuelle 1462704",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 b7d09619034e4dbeb9cb893faca72488788ae6634f9d56d09756eb824fe6a7b7. Les contradictions éventuelles sont conservées, sans correction numérique arbitraire."
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
			"documented-d-desoutter-2026-p150"
		],
		"workingPressureBar": [
			"documented-d-desoutter-2026-p150",
			"documented-d-desoutter-2026-p345"
		],
		"airflowLpm": [
			"documented-d-desoutter-2026-p150",
			"documented-d-desoutter-1462704"
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

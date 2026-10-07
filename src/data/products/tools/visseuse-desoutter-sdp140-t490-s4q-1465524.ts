import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-desoutter-sdp140-t490-s4q-1465524",
	"slug": "visseuse-desoutter-sdp140-t490-s4q-1465524",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Desoutter SDP140-T490-S4Q (réf. 1465524)",
	"brand": "Desoutter",
	"model": "SDP140-T490-S4Q",
	"mpn": "1465524",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 540,
		"typical": 540,
		"max": 540
	},
	"airflowBasis": "free-speed",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-desoutter-sdp140-t490-s4q-1465524.webp",
		"alt": "Repères techniques : Desoutter SDP140-T490-S4Q (réf. 1465524)",
		"sourceUrl": "https://www.datocms-assets.com/104564/1784211285-desoutter_general_catalog_fr_2026-07.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "desoutter-sdp140-t490-s4q",
		"label": "Référence 1465524",
		"distinguishingAttributes": {
			"reference": "1465524",
			"Entrée d’air (pouces)": "1/4",
			"Longueur": "220 mm",
			"Vitesse à vide": "490 rpm"
		}
	},
	"editorial": {
		"overview": "Desoutter SDP140-T490-S4Q (réf. 1465524). Consommation à vide : 540 L/min à 6,3 bar. Entrée d’air (pouces) : 1/4. Longueur : 220 mm.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 152.",
			"Entrée d’air (pouces) : 1/4.",
			"Longueur : 220 mm.",
			"Vitesse à vide : 490 rpm."
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
			"value": "Page PDF 152",
			"evidenceIds": [
				"documented-d-desoutter-2026-p152",
				"documented-d-desoutter-1465524"
			]
		},
		{
			"label": "Entrée d’air (pouces)",
			"value": "1/4",
			"evidenceIds": [
				"documented-d-desoutter-2026-p152",
				"documented-d-desoutter-1465524"
			]
		},
		{
			"label": "Longueur",
			"value": "220 mm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p152",
				"documented-d-desoutter-1465524"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "490 rpm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p152",
				"documented-d-desoutter-1465524"
			]
		},
		{
			"label": "Couple maximal avant",
			"value": "14 Nm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p152",
				"documented-d-desoutter-1465524"
			]
		},
		{
			"label": "Flexible intérieur minimal pour 5 m",
			"value": "10 mm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p152",
				"documented-d-desoutter-1465524"
			]
		},
		{
			"label": "Sortie",
			"value": "1/4",
			"evidenceIds": [
				"documented-d-desoutter-2026-p152",
				"documented-d-desoutter-1465524"
			]
		},
		{
			"label": "Déclenchement",
			"value": "Trigger",
			"evidenceIds": [
				"documented-d-desoutter-2026-p152",
				"documented-d-desoutter-1465524"
			]
		},
		{
			"label": "Masse",
			"value": "1 kg",
			"evidenceIds": [
				"documented-d-desoutter-2026-p152",
				"documented-d-desoutter-1465524"
			]
		},
		{
			"label": "Consommation à vide du catalogue, conservée séparément",
			"value": "9.0 l/s ; 19.1 cfm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p152",
				"documented-d-desoutter-1465524"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-desoutter-2026-p152",
			"sourceUrl": "https://www.datocms-assets.com/104564/1784211285-desoutter_general_catalog_fr_2026-07.pdf#page=152",
			"sourceLabel": "desoutter-2026, page PDF 152",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 69b46fe9fc41aa8c1b174a8e7e32686b6b20e2884c95db1c461caa6ddf33c9ad. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "documented-d-desoutter-1465524",
			"sourceUrl": "https://www.desouttertools.com/en-us/products/1465524",
			"sourceLabel": "Desoutter, fiche individuelle 1465524",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 61241219af0daf80a919de66c1e7b3447aec6f543495ed4974b41ccdc962e119. Les contradictions éventuelles sont conservées, sans correction numérique arbitraire."
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
			"documented-d-desoutter-2026-p152"
		],
		"workingPressureBar": [
			"documented-d-desoutter-2026-p152",
			"documented-d-desoutter-2026-p345"
		],
		"airflowLpm": [
			"documented-d-desoutter-2026-p152",
			"documented-d-desoutter-1465524"
		],
		"airflowBasis": [
			"documented-d-desoutter-2026-p152"
		]
	},
	"notes": [
		"Consommation à vide : 540 L/min à 6,3 bar."
	]
};

export default product;

import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-desoutter-dr450-t4300-s6-90-6151761710",
	"slug": "perceuse-desoutter-dr450-t4300-s6-90-6151761710",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Desoutter DR450-T4300-S6-90 (réf. 6151761710)",
	"brand": "Desoutter",
	"model": "DR450-T4300-S6-90",
	"mpn": "6151761710",
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
		"src": "/images/products/perceuse-desoutter-dr450-t4300-s6-90-6151761710.webp",
		"alt": "Repères techniques : Desoutter DR450-T4300-S6-90 (réf. 6151761710)",
		"sourceUrl": "https://www.datocms-assets.com/104564/1784211285-desoutter_general_catalog_fr_2026-07.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "desoutter-dr450-t4300-s6-90",
		"label": "Référence 6151761710",
		"distinguishingAttributes": {
			"reference": "6151761710",
			"Entrée d’air (pouces)": "1/4",
			"Longueur": "253.5 mm",
			"Vitesse à vide": "4300 rpm"
		}
	},
	"editorial": {
		"overview": "Desoutter DR450-T4300-S6-90 (réf. 6151761710). Consommation à vide : 840 L/min à 6,3 bar. Entrée d’air (pouces) : 1/4. Longueur : 253.5 mm.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 297.",
			"Entrée d’air (pouces) : 1/4.",
			"Longueur : 253.5 mm.",
			"Vitesse à vide : 4300 rpm."
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
			"value": "Page PDF 297",
			"evidenceIds": [
				"documented-d-desoutter-2026-p297",
				"documented-d-desoutter-6151761710"
			]
		},
		{
			"label": "Entrée d’air (pouces)",
			"value": "1/4",
			"evidenceIds": [
				"documented-d-desoutter-2026-p297",
				"documented-d-desoutter-6151761710"
			]
		},
		{
			"label": "Longueur",
			"value": "253.5 mm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p297",
				"documented-d-desoutter-6151761710"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4300 rpm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p297",
				"documented-d-desoutter-6151761710"
			]
		},
		{
			"label": "Angle de tête",
			"value": "90",
			"evidenceIds": [
				"documented-d-desoutter-2026-p297",
				"documented-d-desoutter-6151761710"
			]
		},
		{
			"label": "Flexible intérieur minimal pour 5 m",
			"value": "6 mm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p297",
				"documented-d-desoutter-6151761710"
			]
		},
		{
			"label": "Couple de calage",
			"value": "4.2 Nm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p297",
				"documented-d-desoutter-6151761710"
			]
		},
		{
			"label": "Déclenchement",
			"value": "Safety lever",
			"evidenceIds": [
				"documented-d-desoutter-2026-p297",
				"documented-d-desoutter-6151761710"
			]
		},
		{
			"label": "Masse",
			"value": "0.76 kg",
			"evidenceIds": [
				"documented-d-desoutter-2026-p297",
				"documented-d-desoutter-6151761710"
			]
		},
		{
			"label": "Recoupement numérique avec le tableau PDF",
			"value": "Non établi pour cette ligne ; aucune confirmation croisée du débit revendiquée",
			"evidenceIds": [
				"documented-d-desoutter-2026-p297",
				"documented-d-desoutter-6151761710"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-desoutter-2026-p297",
			"sourceUrl": "https://www.datocms-assets.com/104564/1784211285-desoutter_general_catalog_fr_2026-07.pdf#page=297",
			"sourceLabel": "desoutter-2026, page PDF 297",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 69b46fe9fc41aa8c1b174a8e7e32686b6b20e2884c95db1c461caa6ddf33c9ad. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "documented-d-desoutter-6151761710",
			"sourceUrl": "https://www.desouttertools.com/en-us/products/6151761710",
			"sourceLabel": "Desoutter, fiche individuelle 6151761710",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 0128f9bc1a1cdd5ec74df2bec79341624d148340fd0957289c4e47edb405bcad. Les contradictions éventuelles sont conservées, sans correction numérique arbitraire."
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
			"documented-d-desoutter-2026-p297"
		],
		"workingPressureBar": [
			"documented-d-desoutter-2026-p297",
			"documented-d-desoutter-2026-p345"
		],
		"airflowLpm": [
			"documented-d-desoutter-2026-p297",
			"documented-d-desoutter-6151761710"
		],
		"airflowBasis": [
			"documented-d-desoutter-2026-p297"
		]
	},
	"notes": [
		"Consommation à vide : 840 L/min à 6,3 bar."
	]
};

export default product;

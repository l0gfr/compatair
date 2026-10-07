import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-desoutter-h410-n-60-1302794",
	"slug": "visseuse-desoutter-h410-n-60-1302794",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Desoutter H410-N-60** (réf. 1302794)",
	"brand": "Desoutter",
	"model": "H410-N-60**",
	"mpn": "1302794",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "Le débit de la fiche individuelle contredit la ligne du catalogue constructeur. Une confirmation fabricant est requise avant de dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-desoutter-h410-n-60-1302794.webp",
		"alt": "Repères techniques : Desoutter H410-N-60** (réf. 1302794)",
		"sourceUrl": "https://www.datocms-assets.com/104564/1784211285-desoutter_general_catalog_fr_2026-07.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "desoutter-h410-n-60",
		"label": "Référence 1302794",
		"distinguishingAttributes": {
			"reference": "1302794",
			"Entrée d’air (pouces)": "3/8",
			"Longueur": "358 mm",
			"Vitesse à vide": "60 rpm"
		}
	},
	"editorial": {
		"overview": "Desoutter H410-N-60** (réf. 1302794). Le débit de la fiche individuelle contredit la ligne du catalogue constructeur. Une confirmation fabricant est requise avant de dimensionner. Entrée d’air (pouces) : 3/8. Longueur : 358 mm.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 157.",
			"Entrée d’air (pouces) : 3/8.",
			"Longueur : 358 mm.",
			"Vitesse à vide : 60 rpm."
		],
		"limitations": [
			"Le débit de la fiche individuelle contredit la ligne du catalogue constructeur. Une confirmation fabricant est requise avant de dimensionner.",
			"Caractéristiques déclarées par le fabricant. Aucun essai physique réalisé par CompatAir.",
			"La disponibilité locale, les raccords, les accessoires et la notice de sécurité de la référence livrée restent à vérifier."
		]
	},
	"specifications": [
		{
			"label": "Localisation du tableau",
			"value": "Page PDF 157",
			"evidenceIds": [
				"documented-d-desoutter-2026-p157",
				"documented-d-desoutter-1302794"
			]
		},
		{
			"label": "Entrée d’air (pouces)",
			"value": "3/8",
			"evidenceIds": [
				"documented-d-desoutter-2026-p157",
				"documented-d-desoutter-1302794"
			]
		},
		{
			"label": "Longueur",
			"value": "358 mm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p157",
				"documented-d-desoutter-1302794"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "60 rpm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p157",
				"documented-d-desoutter-1302794"
			]
		},
		{
			"label": "Flexible intérieur minimal pour 5 m",
			"value": "12 mm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p157",
				"documented-d-desoutter-1302794"
			]
		},
		{
			"label": "Déclenchement",
			"value": "Lever",
			"evidenceIds": [
				"documented-d-desoutter-2026-p157",
				"documented-d-desoutter-1302794"
			]
		},
		{
			"label": "Masse",
			"value": "2 kg",
			"evidenceIds": [
				"documented-d-desoutter-2026-p157",
				"documented-d-desoutter-1302794"
			]
		},
		{
			"label": "Consommation déclarée, exclue du calcul",
			"value": "3 600 L/min ; fiche individuelle : 60 L/s et 120 cfm, unités non concordantes",
			"evidenceIds": [
				"documented-d-desoutter-2026-p157",
				"documented-d-desoutter-1302794"
			]
		},
		{
			"label": "Consommation à vide du catalogue, conservée séparément",
			"value": "13.2 l/s ; 27.9 cfm ; différente de la fiche individuelle",
			"evidenceIds": [
				"documented-d-desoutter-2026-p157",
				"documented-d-desoutter-1302794"
			]
		},
		{
			"label": "Désignation de la fiche individuelle, différente du catalogue",
			"value": "H410-N-60 WRENCH",
			"evidenceIds": [
				"documented-d-desoutter-2026-p157",
				"documented-d-desoutter-1302794"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-desoutter-2026-p157",
			"sourceUrl": "https://www.datocms-assets.com/104564/1784211285-desoutter_general_catalog_fr_2026-07.pdf#page=157",
			"sourceLabel": "desoutter-2026, page PDF 157",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 69b46fe9fc41aa8c1b174a8e7e32686b6b20e2884c95db1c461caa6ddf33c9ad. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé."
		},
		{
			"id": "documented-d-desoutter-1302794",
			"sourceUrl": "https://www.desouttertools.com/en-us/products/1302794",
			"sourceLabel": "Desoutter, fiche individuelle 1302794",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 87922d4c707781f17f79dd1fa967567210f1ae87c99245a29eafc4fc71a7b263. Les contradictions éventuelles sont conservées, sans correction numérique arbitraire."
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
			"documented-d-desoutter-2026-p157"
		],
		"workingPressureBar": [
			"documented-d-desoutter-2026-p157",
			"documented-d-desoutter-2026-p345"
		],
		"demandExplanation": [
			"documented-d-desoutter-2026-p157",
			"documented-d-desoutter-1302794"
		]
	},
	"notes": [
		"Le débit de la fiche individuelle contredit la ligne du catalogue constructeur. Une confirmation fabricant est requise avant de dimensionner."
	]
};

export default product;

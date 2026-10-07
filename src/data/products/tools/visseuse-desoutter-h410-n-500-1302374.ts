import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-desoutter-h410-n-500-1302374",
	"slug": "visseuse-desoutter-h410-n-500-1302374",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Desoutter H410-N-500 (réf. 1302374)",
	"brand": "Desoutter",
	"model": "H410-N-500",
	"mpn": "1302374",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "Le débit de la fiche individuelle contredit la ligne du catalogue constructeur. Une confirmation fabricant est requise avant de dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-desoutter-h410-n-500-1302374.webp",
		"alt": "Repères techniques : Desoutter H410-N-500 (réf. 1302374)",
		"sourceUrl": "https://www.datocms-assets.com/104564/1784211285-desoutter_general_catalog_fr_2026-07.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "desoutter-h410-n-500",
		"label": "Référence 1302374",
		"distinguishingAttributes": {
			"reference": "1302374",
			"Entrée d’air (pouces)": "3/8",
			"Longueur": "319 mm",
			"Vitesse à vide": "500 rpm"
		}
	},
	"editorial": {
		"overview": "Desoutter H410-N-500 (réf. 1302374). Le débit de la fiche individuelle contredit la ligne du catalogue constructeur. Une confirmation fabricant est requise avant de dimensionner. Entrée d’air (pouces) : 3/8. Longueur : 319 mm.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 157.",
			"Entrée d’air (pouces) : 3/8.",
			"Longueur : 319 mm.",
			"Vitesse à vide : 500 rpm."
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
				"documented-d-desoutter-1302374"
			]
		},
		{
			"label": "Entrée d’air (pouces)",
			"value": "3/8",
			"evidenceIds": [
				"documented-d-desoutter-2026-p157",
				"documented-d-desoutter-1302374"
			]
		},
		{
			"label": "Longueur",
			"value": "319 mm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p157",
				"documented-d-desoutter-1302374"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "500 rpm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p157",
				"documented-d-desoutter-1302374"
			]
		},
		{
			"label": "Flexible intérieur minimal pour 5 m",
			"value": "12 mm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p157",
				"documented-d-desoutter-1302374"
			]
		},
		{
			"label": "Déclenchement",
			"value": "Lever",
			"evidenceIds": [
				"documented-d-desoutter-2026-p157",
				"documented-d-desoutter-1302374"
			]
		},
		{
			"label": "Masse",
			"value": "1.7 kg",
			"evidenceIds": [
				"documented-d-desoutter-2026-p157",
				"documented-d-desoutter-1302374"
			]
		},
		{
			"label": "Consommation déclarée, exclue du calcul",
			"value": "30 000 L/min ; fiche individuelle : 500 L/s et 1 000 cfm, unités non concordantes",
			"evidenceIds": [
				"documented-d-desoutter-2026-p157",
				"documented-d-desoutter-1302374"
			]
		},
		{
			"label": "Consommation à vide du catalogue, conservée séparément",
			"value": "17.9 l/s ; 37.9 cfm ; différente de la fiche individuelle",
			"evidenceIds": [
				"documented-d-desoutter-2026-p157",
				"documented-d-desoutter-1302374"
			]
		},
		{
			"label": "Désignation de la fiche individuelle, différente du catalogue",
			"value": "H410-N-500 WRENCH",
			"evidenceIds": [
				"documented-d-desoutter-2026-p157",
				"documented-d-desoutter-1302374"
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
			"id": "documented-d-desoutter-1302374",
			"sourceUrl": "https://www.desouttertools.com/en-us/products/1302374",
			"sourceLabel": "Desoutter, fiche individuelle 1302374",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 0b7602acea96388809d2fc32e727ba0288a4af10ede056d70fe4126c441f72b1. Les contradictions éventuelles sont conservées, sans correction numérique arbitraire."
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
			"documented-d-desoutter-1302374"
		]
	},
	"notes": [
		"Le débit de la fiche individuelle contredit la ligne du catalogue constructeur. Une confirmation fabricant est requise avant de dimensionner."
	]
};

export default product;

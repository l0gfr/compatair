import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-desoutter-c27-lx300-qr-6151761290",
	"slug": "meuleuse-desoutter-c27-lx300-qr-6151761290",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Desoutter C27-LX300-QR (réf. 6151761290)",
	"brand": "Desoutter",
	"model": "C27-LX300-QR",
	"mpn": "6151761290",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "Le débit de la fiche individuelle contredit la ligne du catalogue constructeur. Une confirmation fabricant est requise avant de dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-desoutter-c27-lx300-qr-6151761290.webp",
		"alt": "Repères techniques : Desoutter C27-LX300-QR (réf. 6151761290)",
		"sourceUrl": "https://www.datocms-assets.com/104564/1789974097-desoutter_general_catalog_fr_2026-09.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "desoutter-c27-lx300-qr",
		"label": "Référence 6151761290",
		"distinguishingAttributes": {
			"reference": "6151761290",
			"Entrée d’air (pouces)": "1/4",
			"Longueur": "195.5 mm",
			"Flexible intérieur minimal pour 5 m": "6 mm"
		}
	},
	"editorial": {
		"overview": "Desoutter C27-LX300-QR (réf. 6151761290). Le débit de la fiche individuelle contredit la ligne du catalogue constructeur. Une confirmation fabricant est requise avant de dimensionner. Entrée d’air (pouces) : 1/4. Longueur : 195.5 mm.",
		"verifiedFacts": [
			"Désignation et configuration documentées à la page PDF 307.",
			"Entrée d’air (pouces) : 1/4.",
			"Longueur : 195.5 mm.",
			"Flexible intérieur minimal pour 5 m : 6 mm."
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
			"value": "Page PDF 307",
			"evidenceIds": [
				"documented-d-desoutter-2026-p307",
				"documented-d-desoutter-6151761290"
			]
		},
		{
			"label": "Entrée d’air (pouces)",
			"value": "1/4",
			"evidenceIds": [
				"documented-d-desoutter-2026-p307",
				"documented-d-desoutter-6151761290"
			]
		},
		{
			"label": "Longueur",
			"value": "195.5 mm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p307",
				"documented-d-desoutter-6151761290"
			]
		},
		{
			"label": "Flexible intérieur minimal pour 5 m",
			"value": "6 mm",
			"evidenceIds": [
				"documented-d-desoutter-2026-p307",
				"documented-d-desoutter-6151761290"
			]
		},
		{
			"label": "Déclenchement",
			"value": "Lever",
			"evidenceIds": [
				"documented-d-desoutter-2026-p307",
				"documented-d-desoutter-6151761290"
			]
		},
		{
			"label": "Masse",
			"value": "0.61 kg",
			"evidenceIds": [
				"documented-d-desoutter-2026-p307",
				"documented-d-desoutter-6151761290"
			]
		},
		{
			"label": "Consommation déclarée, exclue du calcul",
			"value": "372 L/min",
			"evidenceIds": [
				"documented-d-desoutter-2026-p307",
				"documented-d-desoutter-6151761290"
			]
		},
		{
			"label": "Consommation à vide du catalogue, conservée séparément",
			"value": "8 l/s ; 17 cfm ; différente de la fiche individuelle",
			"evidenceIds": [
				"documented-d-desoutter-2026-p307",
				"documented-d-desoutter-6151761290"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-desoutter-2026-p307",
			"sourceUrl": "https://www.datocms-assets.com/104564/1789974097-desoutter_general_catalog_fr_2026-09.pdf#page=307",
			"sourceLabel": "desoutter-2026, page PDF 307",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-13",
			"confidence": "B",
			"notes": "SHA-256 7d2121c4aeb36c31bde784ba6ddcebee83686fb4883c6b63005d0e569613304c. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé. Édition 09.2026 : ligne de référence, consommation publiée et pression page 345 recoupées le 13 octobre ; caractéristiques et incertitudes conservées."
		},
		{
			"id": "documented-d-desoutter-6151761290",
			"sourceUrl": "https://www.desouttertools.com/en-us/products/6151761290",
			"sourceLabel": "Desoutter, fiche individuelle 6151761290",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 ad0a40152d880339dc42d413ab265f778b66f5ebb72c55b0ca1cbc803c73f7c0. Les contradictions éventuelles sont conservées, sans correction numérique arbitraire."
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
			"documented-d-desoutter-2026-p307"
		],
		"workingPressureBar": [
			"documented-d-desoutter-2026-p307",
			"documented-d-desoutter-2026-p345"
		],
		"demandExplanation": [
			"documented-d-desoutter-2026-p307",
			"documented-d-desoutter-6151761290"
		]
	},
	"notes": [
		"Le débit de la fiche individuelle contredit la ligne du catalogue constructeur. Une confirmation fabricant est requise avant de dimensionner."
	]
};

export default product;

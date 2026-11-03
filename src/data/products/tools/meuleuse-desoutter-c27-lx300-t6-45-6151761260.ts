import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-desoutter-c27-lx300-t6-45-6151761260",
	"slug": "meuleuse-desoutter-c27-lx300-t6-45-6151761260",
	"categoryId": "ebavureuse",
	"category": "Ébavureuse de trous pneumatique",
	"label": "Desoutter C27-LX300-T6-45 (réf. 6151761260)",
	"brand": "Desoutter",
	"model": "C27-LX300-T6-45",
	"mpn": "6151761260",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "Le débit de la fiche individuelle contredit la ligne du catalogue constructeur. Une confirmation fabricant est requise avant de dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-desoutter-c27-lx300-t6-45-6151761260.webp",
		"alt": "Repères techniques : Desoutter C27-LX300-T6-45 (réf. 6151761260)",
		"sourceUrl": "https://www.datocms-assets.com/104564/1789974097-desoutter_general_catalog_fr_2026-09.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "desoutter-c27-lx300-t6-45",
		"label": "Référence 6151761260",
		"distinguishingAttributes": {
			"reference": "6151761260",
			"Entrée d’air (pouces)": "1/4",
			"Pince": "1/4 (6.35mm)",
			"Longueur": "298.2 mm"
		}
	},
	"editorial": {
		"overview": "Desoutter C27-LX300-T6-45. Le code 6151761260 identifie l’ébavureuse C27-LX300-T6-45 à renvoi 45 degrés ; le code 6151761280 est le renvoi 90 degrés. La fiche actuelle publie 6,2 L/s à vide et 298,2 mm ; le catalogue donne 8 L/s sans régime et 291,5 mm. L’écart reste visible sans révision supposée. Le calcul demeure indéterminé.",
		"verifiedFacts": [
			"Fonction : Ébavureuse à renvoi 45 degrés.",
			"Vitesse : 300 tr/min.",
			"Pince, fiche actuelle : 1/4 pouce (6,35 mm).",
			"Consommation, ancien catalogue : 8 L/s, régime non précisé.",
			"Consommation à vide, fiche actuelle : 6,2 L/s.",
			"Longueur, catalogue / fiche actuelle : 291,5 / 298,2 mm."
		],
		"limitations": [
			"Conflit documentaire de révision conservé, sans arbitrage ni performance supposée.",
			"Valeur à vide ou régime non précisé : consommation maximale/en charge non qualifiée."
		]
	},
	"specifications": [
		{
			"label": "Fonction",
			"value": "Ébavureuse à renvoi 45 degrés",
			"evidenceIds": [
				"meuleuse-desoutter-c27-lx300-t6-45-6151761260-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse",
			"value": "300 tr/min",
			"evidenceIds": [
				"meuleuse-desoutter-c27-lx300-t6-45-6151761260-reserved-20261103-1"
			]
		},
		{
			"label": "Pince, fiche actuelle",
			"value": "1/4 pouce (6,35 mm)",
			"evidenceIds": [
				"meuleuse-desoutter-c27-lx300-t6-45-6151761260-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, ancien catalogue",
			"value": "8 L/s, régime non précisé",
			"evidenceIds": [
				"meuleuse-desoutter-c27-lx300-t6-45-6151761260-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation à vide, fiche actuelle",
			"value": "6,2 L/s",
			"evidenceIds": [
				"meuleuse-desoutter-c27-lx300-t6-45-6151761260-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur, catalogue / fiche actuelle",
			"value": "291,5 / 298,2 mm",
			"evidenceIds": [
				"meuleuse-desoutter-c27-lx300-t6-45-6151761260-reserved-20261103-1"
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
			"id": "documented-d-desoutter-6151761260",
			"sourceUrl": "https://www.desouttertools.com/en-us/products/6151761260",
			"sourceLabel": "Desoutter, fiche individuelle 6151761260",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 25ea112a140eeceb852a2423f24567e8c5109307514c3bb4e9a537381e2747ed. Les contradictions éventuelles sont conservées, sans correction numérique arbitraire."
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
		},
		{
			"id": "meuleuse-desoutter-c27-lx300-t6-45-6151761260-reserved-20261103-1",
			"sourceUrl": "https://www.datocms-assets.com/104564/1789974097-desoutter_general_catalog_fr_2026-09.pdf#page=307",
			"sourceLabel": "Desoutter : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 7d2121c4aeb36c31bde784ba6ddcebee83686fb4883c6b63005d0e569613304c. Le code 6151761260 identifie l’ébavureuse C27-LX300-T6-45 à renvoi 45 degrés ; le code 6151761280 est le renvoi 90 degrés. La fiche actuelle publie 6,2 L/s à vide et 298,2 mm ; le catalogue donne 8 L/s sans régime et 291,5 mm. L’écart reste visible sans révision supposée. Le calcul demeure indéterminé."
		},
		{
			"id": "meuleuse-desoutter-c27-lx300-t6-45-6151761260-reserved-20261103-1-4",
			"sourceUrl": "https://www.desouttertools.com/en-us/products/6151761260",
			"sourceLabel": "Desoutter : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 7d2121c4aeb36c31bde784ba6ddcebee83686fb4883c6b63005d0e569613304c. Le code 6151761260 identifie l’ébavureuse C27-LX300-T6-45 à renvoi 45 degrés ; le code 6151761280 est le renvoi 90 degrés. La fiche actuelle publie 6,2 L/s à vide et 298,2 mm ; le catalogue donne 8 L/s sans régime et 291,5 mm. L’écart reste visible sans révision supposée. Le calcul demeure indéterminé."
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
			"documented-d-desoutter-6151761260"
		],
		"categoryId": [
			"meuleuse-desoutter-c27-lx300-t6-45-6151761260-reserved-20261103-1"
		],
		"category": [
			"meuleuse-desoutter-c27-lx300-t6-45-6151761260-reserved-20261103-1"
		],
		"editorial": [
			"meuleuse-desoutter-c27-lx300-t6-45-6151761260-reserved-20261103-1"
		],
		"specifications": [
			"meuleuse-desoutter-c27-lx300-t6-45-6151761260-reserved-20261103-1"
		]
	},
	"notes": [
		"Le débit de la fiche individuelle contredit la ligne du catalogue constructeur. Une confirmation fabricant est requise avant de dimensionner."
	]
};

export default product;

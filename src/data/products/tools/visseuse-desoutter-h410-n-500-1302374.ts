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
		"sourceUrl": "https://www.datocms-assets.com/104564/1789974097-desoutter_general_catalog_fr_2026-09.pdf",
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
		"overview": "Desoutter H410-N-500. La H410-N-500 est la clé d’angle 500 tr/min et 3–30 Nm ; la H410-N-350 donne 350 tr/min et 4,5–45 Nm. Le catalogue publie 17,9 L/s, tandis que la fiche actuelle affiche 500 L/s à vide et 1 000 CFM, un conflit non résolu. Aucun de ces chiffres contradictoires n’est utilisé pour dimensionner. La page de couple décrit le réglage par régulateur et recommande un dispositif de réaction pour le calage.",
		"verifiedFacts": [
			"Commande : Clé d’angle à entraînement direct, calage.",
			"Vitesse à vide : 500 tr/min.",
			"Plage de couple, catalogue : 3–30 Nm.",
			"Sortie hexagonale, catalogue : 0,525 pouce.",
			"Débit, catalogue : 17,9 L/s, régime non précisé.",
			"Débit à vide, fiche actuelle : 500 L/s ; seconde colonne 1 000 CFM."
		],
		"limitations": [
			"Conflit documentaire de révision conservé, sans arbitrage ni performance supposée.",
			"Valeur à vide ou régime non précisé : consommation maximale/en charge non qualifiée."
		]
	},
	"specifications": [
		{
			"label": "Commande",
			"value": "Clé d’angle à entraînement direct, calage",
			"evidenceIds": [
				"visseuse-desoutter-h410-n-500-1302374-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "500 tr/min",
			"evidenceIds": [
				"visseuse-desoutter-h410-n-500-1302374-reserved-20261103-1"
			]
		},
		{
			"label": "Plage de couple, catalogue",
			"value": "3–30 Nm",
			"evidenceIds": [
				"visseuse-desoutter-h410-n-500-1302374-reserved-20261103-1"
			]
		},
		{
			"label": "Sortie hexagonale, catalogue",
			"value": "0,525 pouce",
			"evidenceIds": [
				"visseuse-desoutter-h410-n-500-1302374-reserved-20261103-1"
			]
		},
		{
			"label": "Débit, catalogue",
			"value": "17,9 L/s, régime non précisé",
			"evidenceIds": [
				"visseuse-desoutter-h410-n-500-1302374-reserved-20261103-1"
			]
		},
		{
			"label": "Débit à vide, fiche actuelle",
			"value": "500 L/s ; seconde colonne 1 000 CFM",
			"evidenceIds": [
				"visseuse-desoutter-h410-n-500-1302374-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "documented-d-desoutter-2026-p157",
			"sourceUrl": "https://www.datocms-assets.com/104564/1789974097-desoutter_general_catalog_fr_2026-09.pdf#page=157",
			"sourceLabel": "desoutter-2026, page PDF 157",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-13",
			"confidence": "B",
			"notes": "SHA-256 7d2121c4aeb36c31bde784ba6ddcebee83686fb4883c6b63005d0e569613304c. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé. Édition 09.2026 : ligne de référence, consommation publiée et pression page 345 recoupées le 13 octobre ; caractéristiques et incertitudes conservées."
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
			"sourceUrl": "https://www.datocms-assets.com/104564/1789974097-desoutter_general_catalog_fr_2026-09.pdf#page=345",
			"sourceLabel": "desoutter-2026, page PDF 345",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-13",
			"confidence": "B",
			"notes": "SHA-256 7d2121c4aeb36c31bde784ba6ddcebee83686fb4883c6b63005d0e569613304c. Transcription, unités originales et périmètre conservés dans le lot documentaire. Aucun essai physique réalisé. Édition 09.2026 : ligne de référence, consommation publiée et pression page 345 recoupées le 13 octobre ; caractéristiques et incertitudes conservées."
		},
		{
			"id": "visseuse-desoutter-h410-n-500-1302374-reserved-20261103-1",
			"sourceUrl": "https://www.datocms-assets.com/104564/1789974097-desoutter_general_catalog_fr_2026-09.pdf#page=157",
			"sourceLabel": "Desoutter : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 7d2121c4aeb36c31bde784ba6ddcebee83686fb4883c6b63005d0e569613304c. La H410-N-500 est la clé d’angle 500 tr/min et 3–30 Nm ; la H410-N-350 donne 350 tr/min et 4,5–45 Nm. Le catalogue publie 17,9 L/s, tandis que la fiche actuelle affiche 500 L/s à vide et 1 000 CFM, un conflit non résolu. Aucun de ces chiffres contradictoires n’est utilisé pour dimensionner. La page de couple décrit le réglage par régulateur et recommande un dispositif de réaction pour le calage."
		},
		{
			"id": "visseuse-desoutter-h410-n-500-1302374-reserved-20261103-1-4",
			"sourceUrl": "https://www.desouttertools.com/en-us/products/1302374",
			"sourceLabel": "Desoutter : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 7d2121c4aeb36c31bde784ba6ddcebee83686fb4883c6b63005d0e569613304c. La H410-N-500 est la clé d’angle 500 tr/min et 3–30 Nm ; la H410-N-350 donne 350 tr/min et 4,5–45 Nm. Le catalogue publie 17,9 L/s, tandis que la fiche actuelle affiche 500 L/s à vide et 1 000 CFM, un conflit non résolu. Aucun de ces chiffres contradictoires n’est utilisé pour dimensionner. La page de couple décrit le réglage par régulateur et recommande un dispositif de réaction pour le calage."
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
		],
		"editorial": [
			"visseuse-desoutter-h410-n-500-1302374-reserved-20261103-1"
		],
		"specifications": [
			"visseuse-desoutter-h410-n-500-1302374-reserved-20261103-1"
		]
	},
	"notes": [
		"Le débit de la fiche individuelle contredit la ligne du catalogue constructeur. Une confirmation fabricant est requise avant de dimensionner."
	]
};

export default product;

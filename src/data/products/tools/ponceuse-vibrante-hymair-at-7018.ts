import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-vibrante-hymair-at-7018",
	"slug": "ponceuse-vibrante-hymair-at-7018",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "Hymair AT-7018",
	"brand": "Hymair",
	"model": "AT-7018",
	"mpn": "AT-7018",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-vibrante-hymair-at-7018.webp",
		"alt": "Repères techniques : Hymair AT-7018",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-7018",
		"label": "Référence AT-7018",
		"distinguishingAttributes": {
			"reference": "AT-7018",
			"Masse publiée (kg/lb)": "1.89/4.16",
			"Longueur × hauteur": "187x125 mm"
		}
	},
	"editorial": {
		"overview": "Hymair AT-7018. La AT-7018 est la ponceuse Jitterbug à patin 175 × 95 mm et serrage du papier par brides. La AT-186 est le modèle long 64 × 407 mm, course 25 mm et 2 500 spm : sa course ne s’applique pas à la AT-7018. La moyenne 5,75 CFM ne prouve pas la consommation maximale pendant le ponçage.",
		"verifiedFacts": [
			"Patin : 175 × 95 mm.",
			"Cadence publiée : 8 000 spm.",
			"Dimensions : 187 × 125 mm.",
			"Masse : 1,89 kg.",
			"Consommation moyenne publiée : 5,75 CFM."
		],
		"limitations": [
			"Consommation moyenne publiée conservée dans les spécifications ; aucun débit maximal ni volume par action déduit.",
			"Catalogue constructeur identifié ; configuration et disponibilité actuelles à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Patin",
			"value": "175 × 95 mm",
			"evidenceIds": [
				"ponceuse-vibrante-hymair-at-7018-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence publiée",
			"value": "8 000 spm",
			"evidenceIds": [
				"ponceuse-vibrante-hymair-at-7018-reserved-20261103-1"
			]
		},
		{
			"label": "Dimensions",
			"value": "187 × 125 mm",
			"evidenceIds": [
				"ponceuse-vibrante-hymair-at-7018-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,89 kg",
			"evidenceIds": [
				"ponceuse-vibrante-hymair-at-7018-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne publiée",
			"value": "5,75 CFM",
			"evidenceIds": [
				"ponceuse-vibrante-hymair-at-7018-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-3-p16",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU#page=16",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Good Level, page PDF 16",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 074602b959f2f30ac405df0c8ab2c02739cb7ec400ee95c071217a43d1f7ab36. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "ponceuse-vibrante-hymair-at-7018-reserved-20261103-1",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU#page=16",
			"sourceLabel": "Hymair : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 074602b959f2f30ac405df0c8ab2c02739cb7ec400ee95c071217a43d1f7ab36. La AT-7018 est la ponceuse Jitterbug à patin 175 × 95 mm et serrage du papier par brides. La AT-186 est le modèle long 64 × 407 mm, course 25 mm et 2 500 spm : sa course ne s’applique pas à la AT-7018. La moyenne 5,75 CFM ne prouve pas la consommation maximale pendant le ponçage."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-3-p16"
		],
		"workingPressureBar": [
			"october2-tools-steed-3-p16"
		],
		"demandExplanation": [
			"october2-tools-steed-3-p16"
		],
		"editorial": [
			"ponceuse-vibrante-hymair-at-7018-reserved-20261103-1"
		],
		"specifications": [
			"ponceuse-vibrante-hymair-at-7018-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;

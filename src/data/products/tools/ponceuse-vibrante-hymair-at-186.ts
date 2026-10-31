import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-vibrante-hymair-at-186",
	"slug": "ponceuse-vibrante-hymair-at-186",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "Hymair AT-186",
	"brand": "Hymair",
	"model": "AT-186",
	"mpn": "AT-186",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-vibrante-hymair-at-186.webp",
		"alt": "Repères techniques : Hymair AT-186",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-186",
		"label": "Référence AT-186",
		"distinguishingAttributes": {
			"reference": "AT-186",
			"Masse publiée (kg/lb)": "2.56/5.64",
			"Longueur × hauteur": "400x170 mm"
		}
	},
	"editorial": {
		"overview": "Hymair AT-186. La couverture du document Steed de cette famille affiche la marque Hymair sur les outils. La provenance de marque est documentée par la page 1 et la référence exacte demeure celle de la table, sans équivalence de version commerciale supposée. Masse publiée (kg/lb) : 2.56/5.64. Longueur × hauteur : 400x170 mm.",
		"verifiedFacts": [
			"Masse publiée (kg/lb) : 2.56/5.64.",
			"Longueur × hauteur : 400x170 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée.",
			"La présence dans le catalogue de cette famille ne prouve ni la disponibilité en France, ni une conformité particulière de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée (kg/lb)",
			"value": "2.56/5.64",
			"evidenceIds": [
				"october2-tools-steed-3-p16"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "400x170 mm",
			"evidenceIds": [
				"october2-tools-steed-3-p16"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-3-p16"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "6 cfm",
			"evidenceIds": [
				"october2-tools-steed-3-p16"
			]
		},
		{
			"label": "Provenance de marque",
			"value": "Catalogue constructeur Steed, couverture portant la marque Hymair ; référence de la table conservée.",
			"evidenceIds": [
				"october2-tools-steed-3-p16",
				"ponceuse-vibrante-hymair-at-186-reserved-20261031-1"
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
			"id": "ponceuse-vibrante-hymair-at-186-reserved-20261031-1",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=aGAfKUBkhgoV&dp=GvUApKfKKUAU#page=16",
			"sourceLabel": "Hymair AT-186 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 074602b959f2f30ac405df0c8ab2c02739cb7ec400ee95c071217a43d1f7ab36. La couverture du document Steed de cette famille affiche la marque Hymair sur les outils. La provenance de marque est documentée par la page 1 et la référence exacte demeure celle de la table, sans équivalence de version commerciale supposée. Pages complémentaires relues : 1."
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
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;

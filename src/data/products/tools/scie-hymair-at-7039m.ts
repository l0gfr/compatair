import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-hymair-at-7039m",
	"slug": "scie-hymair-at-7039m",
	"categoryId": "scie",
	"category": "scie",
	"label": "Hymair AT-7039M",
	"brand": "Hymair",
	"model": "AT-7039M",
	"mpn": "AT-7039M",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-hymair-at-7039m.webp",
		"alt": "Repères techniques : Hymair AT-7039M",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-7039m",
		"label": "Référence AT-7039M",
		"distinguishingAttributes": {
			"reference": "AT-7039M",
			"Masse publiée (kg/lb)": "0.64/1.41",
			"Longueur × hauteur": "235x70 mm"
		}
	},
	"editorial": {
		"overview": "Hymair AT-7039M. La couverture du document Steed de cette famille affiche la marque Hymair sur les outils. La provenance de marque est documentée par la page 1 et la référence exacte demeure celle de la table, sans équivalence de version commerciale supposée. Masse publiée (kg/lb) : 0.64/1.41. Longueur × hauteur : 235x70 mm.",
		"verifiedFacts": [
			"Masse publiée (kg/lb) : 0.64/1.41.",
			"Longueur × hauteur : 235x70 mm."
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
			"value": "0.64/1.41",
			"evidenceIds": [
				"october2-tools-steed-2-p21"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "235x70 mm",
			"evidenceIds": [
				"october2-tools-steed-2-p21"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-2-p21"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "6 cfm",
			"evidenceIds": [
				"october2-tools-steed-2-p21"
			]
		},
		{
			"label": "Provenance de marque",
			"value": "Catalogue constructeur Steed, couverture portant la marque Hymair ; référence de la table conservée.",
			"evidenceIds": [
				"october2-tools-steed-2-p21",
				"scie-hymair-at-7039m-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p21",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=21",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 21",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "scie-hymair-at-7039m-reserved-20261031-1",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=21",
			"sourceLabel": "Hymair AT-7039M : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. La couverture du document Steed de cette famille affiche la marque Hymair sur les outils. La provenance de marque est documentée par la page 1 et la référence exacte demeure celle de la table, sans équivalence de version commerciale supposée. Pages complémentaires relues : 1."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p21"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p21"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p21"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;

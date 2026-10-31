import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-hymair-at-6019",
	"slug": "riveteuse-hymair-at-6019",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "Hymair AT-6019",
	"brand": "Hymair",
	"model": "AT-6019",
	"mpn": "AT-6019",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-hymair-at-6019.webp",
		"alt": "Repères techniques : Hymair AT-6019",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-6019",
		"label": "Référence AT-6019",
		"distinguishingAttributes": {
			"reference": "AT-6019",
			"Masse publiée (kg/lb)": "1.49/3.28",
			"Longueur × hauteur": "298x255 mm"
		}
	},
	"editorial": {
		"overview": "Hymair AT-6019. La couverture du document Steed de cette famille affiche la marque Hymair sur les outils. La provenance de marque est documentée par la page 1 et la référence exacte demeure celle de la table, sans équivalence de version commerciale supposée. Masse publiée (kg/lb) : 1.49/3.28. Longueur × hauteur : 298x255 mm.",
		"verifiedFacts": [
			"Masse publiée (kg/lb) : 1.49/3.28.",
			"Longueur × hauteur : 298x255 mm."
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
			"value": "1.49/3.28",
			"evidenceIds": [
				"october2-tools-steed-2-p35"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "298x255 mm",
			"evidenceIds": [
				"october2-tools-steed-2-p35"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure non établie.",
			"evidenceIds": [
				"october2-tools-steed-2-p35"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "0.03 cfm",
			"evidenceIds": [
				"october2-tools-steed-2-p35"
			]
		},
		{
			"label": "Provenance de marque",
			"value": "Catalogue constructeur Steed, couverture portant la marque Hymair ; référence de la table conservée.",
			"evidenceIds": [
				"october2-tools-steed-2-p35",
				"riveteuse-hymair-at-6019-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p35",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=35",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 35",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "riveteuse-hymair-at-6019-reserved-20261031-1",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=35",
			"sourceLabel": "Hymair AT-6019 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. La couverture du document Steed de cette famille affiche la marque Hymair sur les outils. La provenance de marque est documentée par la page 1 et la référence exacte demeure celle de la table, sans équivalence de version commerciale supposée. Pages complémentaires relues : 1."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p35"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p35"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p35"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;

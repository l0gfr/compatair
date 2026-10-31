import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-hymair-at-185",
	"slug": "meuleuse-hymair-at-185",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Hymair AT-185",
	"brand": "Hymair",
	"model": "AT-185",
	"mpn": "AT-185",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-hymair-at-185.webp",
		"alt": "Repères techniques : Hymair AT-185",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-185",
		"label": "Référence AT-185",
		"distinguishingAttributes": {
			"reference": "AT-185",
			"Vitesse à vide": "11,000 rpm",
			"Masse publiée (kg/lb)": "1.67/3.70"
		}
	},
	"editorial": {
		"overview": "Hymair AT-185. La couverture du document Steed de cette famille affiche la marque Hymair sur les outils. La provenance de marque est documentée par la page 1 et la référence exacte demeure celle de la table, sans équivalence de version commerciale supposée. Vitesse à vide : 11,000 rpm. Masse publiée (kg/lb) : 1.67/3.70. Longueur × hauteur : 225x95 mm.",
		"verifiedFacts": [
			"Vitesse à vide : 11,000 rpm.",
			"Masse publiée (kg/lb) : 1.67/3.70.",
			"Longueur × hauteur : 225x95 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée.",
			"La présence dans le catalogue de cette famille ne prouve ni la disponibilité en France, ni une conformité particulière de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "11,000 rpm",
			"evidenceIds": [
				"october2-tools-steed-2-p32"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "1.67/3.70",
			"evidenceIds": [
				"october2-tools-steed-2-p32"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "225x95 mm",
			"evidenceIds": [
				"october2-tools-steed-2-p32"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-2-p32"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "6.5 cfm",
			"evidenceIds": [
				"october2-tools-steed-2-p32"
			]
		},
		{
			"label": "Provenance de marque",
			"value": "Catalogue constructeur Steed, couverture portant la marque Hymair ; référence de la table conservée.",
			"evidenceIds": [
				"october2-tools-steed-2-p32",
				"meuleuse-hymair-at-185-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p32",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=32",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 32",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "meuleuse-hymair-at-185-reserved-20261031-1",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=32",
			"sourceLabel": "Hymair AT-185 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. La couverture du document Steed de cette famille affiche la marque Hymair sur les outils. La provenance de marque est documentée par la page 1 et la référence exacte demeure celle de la table, sans équivalence de version commerciale supposée. Pages complémentaires relues : 1."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p32"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p32"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p32"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;

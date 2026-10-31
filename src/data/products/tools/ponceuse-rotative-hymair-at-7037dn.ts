import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-hymair-at-7037dn",
	"slug": "ponceuse-rotative-hymair-at-7037dn",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Hymair AT-7037DN",
	"brand": "Hymair",
	"model": "AT-7037DN",
	"mpn": "AT-7037DN",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-hymair-at-7037dn.webp",
		"alt": "Repères techniques : Hymair AT-7037DN",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-7037dn",
		"label": "Référence AT-7037DN",
		"distinguishingAttributes": {
			"reference": "AT-7037DN",
			"Vitesse à vide": "15,000 rpm",
			"Masse publiée (kg/lb)": "0.56/1.23"
		}
	},
	"editorial": {
		"overview": "Hymair AT-7037DN. La couverture du document Steed de cette famille affiche la marque Hymair sur les outils. La provenance de marque est documentée par la page 1 et la référence exacte demeure celle de la table, sans équivalence de version commerciale supposée. Vitesse à vide : 15,000 rpm. Masse publiée (kg/lb) : 0.56/1.23. Longueur × hauteur : 165x63 mm.",
		"verifiedFacts": [
			"Vitesse à vide : 15,000 rpm.",
			"Masse publiée (kg/lb) : 0.56/1.23.",
			"Longueur × hauteur : 165x63 mm."
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
			"value": "15,000 rpm",
			"evidenceIds": [
				"october2-tools-steed-2-p19"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "0.56/1.23",
			"evidenceIds": [
				"october2-tools-steed-2-p19"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "165x63 mm",
			"evidenceIds": [
				"october2-tools-steed-2-p19"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-2-p19"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2-tools-steed-2-p19"
			]
		},
		{
			"label": "Provenance de marque",
			"value": "Catalogue constructeur Steed, couverture portant la marque Hymair ; référence de la table conservée.",
			"evidenceIds": [
				"october2-tools-steed-2-p19",
				"ponceuse-rotative-hymair-at-7037dn-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p19",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=19",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "ponceuse-rotative-hymair-at-7037dn-reserved-20261031-1",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=19",
			"sourceLabel": "Hymair AT-7037DN : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. La couverture du document Steed de cette famille affiche la marque Hymair sur les outils. La provenance de marque est documentée par la page 1 et la référence exacte demeure celle de la table, sans équivalence de version commerciale supposée. Pages complémentaires relues : 1."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p19"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p19"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p19"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;

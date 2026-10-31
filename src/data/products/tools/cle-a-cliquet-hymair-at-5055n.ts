import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-hymair-at-5055n",
	"slug": "cle-a-cliquet-hymair-at-5055n",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Hymair AT-5055N",
	"brand": "Hymair",
	"model": "AT-5055N",
	"mpn": "AT-5055N",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-hymair-at-5055n.webp",
		"alt": "Repères techniques : Hymair AT-5055N",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-at-5055n",
		"label": "Référence AT-5055N",
		"distinguishingAttributes": {
			"reference": "AT-5055N",
			"Vitesse à vide": "200 rpm",
			"Masse publiée (kg/lb)": "0.51/1.12"
		}
	},
	"editorial": {
		"overview": "Hymair AT-5055N. La couverture du document Steed de cette famille affiche la marque Hymair sur les outils. La provenance de marque est documentée par la page 1 et la référence exacte demeure celle de la table, sans équivalence de version commerciale supposée. Vitesse à vide : 200 rpm. Masse publiée (kg/lb) : 0.51/1.12. Longueur × hauteur : 170x53 mm.",
		"verifiedFacts": [
			"Vitesse à vide : 200 rpm.",
			"Masse publiée (kg/lb) : 0.51/1.12.",
			"Longueur × hauteur : 170x53 mm."
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
			"value": "200 rpm",
			"evidenceIds": [
				"october2-tools-steed-2-p30"
			]
		},
		{
			"label": "Masse publiée (kg/lb)",
			"value": "0.51/1.12",
			"evidenceIds": [
				"october2-tools-steed-2-p30"
			]
		},
		{
			"label": "Longueur × hauteur",
			"value": "170x53 mm",
			"evidenceIds": [
				"october2-tools-steed-2-p30"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "WORKING PRESSURE : 6.2 Bar",
			"evidenceIds": [
				"october2-tools-steed-2-p30"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "2.5 cfm",
			"evidenceIds": [
				"october2-tools-steed-2-p30"
			]
		},
		{
			"label": "Provenance de marque",
			"value": "Catalogue constructeur Steed, couverture portant la marque Hymair ; référence de la table conservée.",
			"evidenceIds": [
				"october2-tools-steed-2-p30",
				"cle-a-cliquet-hymair-at-5055n-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-2-p30",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=30",
			"sourceLabel": "Hymair, catalogue fabricant Ningbo Steed Tools, Professional, page PDF 30",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "cle-a-cliquet-hymair-at-5055n-reserved-20261031-1",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=SAUfKpBkCgyL&dp=GvUApKfKKUAU#page=30",
			"sourceLabel": "Hymair AT-5055N : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 b9c6143d5502d453b5b2e0846bcfec263fb763d42a478fbc52089a41725e7d8d. La couverture du document Steed de cette famille affiche la marque Hymair sur les outils. La provenance de marque est documentée par la page 1 et la référence exacte demeure celle de la table, sans équivalence de version commerciale supposée. Pages complémentaires relues : 1."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-2-p30"
		],
		"workingPressureBar": [
			"october2-tools-steed-2-p30"
		],
		"demandExplanation": [
			"october2-tools-steed-2-p30"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;

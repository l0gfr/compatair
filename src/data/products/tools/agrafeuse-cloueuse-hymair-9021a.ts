import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-hymair-9021a",
	"slug": "agrafeuse-cloueuse-hymair-9021a",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Hymair 9021A",
	"brand": "Hymair",
	"model": "9021A",
	"mpn": "9021A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 116.099,
		"typical": 116.099,
		"max": 116.099
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-hymair-9021a.webp",
		"alt": "Repères techniques : Hymair 9021A",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=PWKUAfLuMrCV&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-9021a",
		"label": "Référence 9021A",
		"distinguishingAttributes": {
			"reference": "9021A",
			"Masse publiée": "3.75 kg",
			"Longueur publiée": "480 mm"
		}
	},
	"editorial": {
		"overview": "Hymair 9021A. Consommation de régime non précisé : 116,099 L/min à 6,205 bar. Masse publiée : 3.75 kg. Longueur publiée : 480 mm.",
		"verifiedFacts": [
			"Masse publiée : 3.75 kg.",
			"Longueur publiée : 480 mm.",
			"Hauteur publiée : 370 mm.",
			"Capacité du magasin : 50 nails."
		],
		"limitations": [
			"Une consommation moyenne, à vide ou de régime non précisé ne confirme pas le débit maximal en charge ; le verdict reste insufficient_data.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée.",
			"La présence dans le catalogue de cette famille ne prouve ni la disponibilité en France, ni une conformité particulière de la version livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "3.75 kg",
			"evidenceIds": [
				"october2-tools-steed-6-p2"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "480 mm",
			"evidenceIds": [
				"october2-tools-steed-6-p2"
			]
		},
		{
			"label": "Hauteur publiée",
			"value": "370 mm",
			"evidenceIds": [
				"october2-tools-steed-6-p2"
			]
		},
		{
			"label": "Capacité du magasin",
			"value": "50 nails",
			"evidenceIds": [
				"october2-tools-steed-6-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption .............................. 4.1 SCFM @ 90 PSI",
			"evidenceIds": [
				"october2-tools-steed-6-p2"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "4.1 cfm",
			"evidenceIds": [
				"october2-tools-steed-6-p2"
			]
		},
		{
			"label": "Provenance de marque",
			"value": "Catalogue constructeur Steed, couverture portant la marque Hymair ; référence de la table conservée.",
			"evidenceIds": [
				"october2-tools-steed-6-p2",
				"agrafeuse-cloueuse-hymair-9021a-reserved-20261031-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-6-p2",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=PWKUAfLuMrCV&dp=GvUApKfKKUAU#page=2",
			"sourceLabel": "Hymair, documentation technique fabricant, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 2ba54ea32cf0ef4aa86123d86f6ea822cce25a4e72cea15b8bda4c0c6cccb524. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "agrafeuse-cloueuse-hymair-9021a-reserved-20261031-1",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=PWKUAfLuMrCV&dp=GvUApKfKKUAU#page=2",
			"sourceLabel": "Hymair 9021A : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 2ba54ea32cf0ef4aa86123d86f6ea822cce25a4e72cea15b8bda4c0c6cccb524. La couverture du document Steed de cette famille affiche la marque Hymair sur les outils. La provenance de marque est documentée par la page 1 et la référence exacte demeure celle de la table, sans équivalence de version commerciale supposée. Pages complémentaires relues : 1."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-6-p2"
		],
		"workingPressureBar": [
			"october2-tools-steed-6-p2"
		],
		"airflowLpm": [
			"october2-tools-steed-6-p2"
		],
		"airflowBasis": [
			"october2-tools-steed-6-p2"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 116,099 L/min à 6,205 bar."
	]
};

export default product;

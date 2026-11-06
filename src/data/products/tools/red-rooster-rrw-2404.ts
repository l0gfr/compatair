import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rrw-2404",
	"slug": "red-rooster-rrw-2404",
	"brand": "Red Rooster",
	"model": "RRW-2404",
	"mpn": "RRW-2404",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Red Rooster RRW-2404",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rrw-2404-20261106.svg",
		"alt": "Repères techniques Red Rooster RRW-2404, référence RRW-2404",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=40",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRW-2404, référence RRW-2404. Le tableau fabricant publie 360 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Masse publiée : 1,2 kg. Diamètre intérieur de flexible conseillé : 6,5 mm.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 6 L/s, convertis en 360 L/min par multiplication par 60.",
			"Référence fabricant : RRW-2404.",
			"Masse publiée : 1,2 kg.",
			"Diamètre intérieur de flexible conseillé : 6,5 mm.",
			"Raccord pneumatique : PT 1/4\"."
		],
		"limitations": [
			"Les couples indiqués sont des valeurs indicatives, sensibles à l’assemblage et à l’accessoire.",
			"La pression doit être vérifiée pendant le fonctionnement ; la pression statique du réservoir ne suffit pas.",
			"Le régime de consommation publié est non précisé. Cette valeur reste documentaire et le moteur renvoie insufficient_data."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"red-rooster-rrw-2404-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 6 L/s, convertis en 360 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rrw-2404-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,2 kg",
			"evidenceIds": [
				"red-rooster-rrw-2404-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"red-rooster-rrw-2404-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rrw-2404-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rrw-2404-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=40",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 40, réf. RRW-2404",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 6 L/s, convertis en 360 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rrw-2404-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-06-followup:red-rooster-rrw-2404:1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=40",
			"sourceLabel": "Red Rooster, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P40 :cliquet1/2,150rpm/68Nm/6Ls/1,2kg; MR2410B donne175rpm/78Nm au même débit. Aucun régime de mesure360Lmin apparié à6,3bar. Conserver la différence mécanique, neutraliser la conclusion d’air. SHA-256 du document complet : f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e."
		},
		{
			"id": "review:2026-11-06-followup:red-rooster-rrw-2404:2",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Red Rooster, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P40 :cliquet1/2,150rpm/68Nm/6Ls/1,2kg; MR2410B donne175rpm/78Nm au même débit. Aucun régime de mesure360Lmin apparié à6,3bar. Conserver la différence mécanique, neutraliser la conclusion d’air. SHA-256 du document complet : f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rrw-2404-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rrw-2404-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rrw-2404-20260926"
		],
		"recommendedHose": [
			"red-rooster-rrw-2404-20260926"
		],
		"connectorSize": [
			"red-rooster-rrw-2404-20260926"
		],
		"airflowBasis": [
			"review:2026-11-06-followup:red-rooster-rrw-2404:1",
			"review:2026-11-06-followup:red-rooster-rrw-2404:2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 360,
		"typical": 360,
		"max": 360
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;

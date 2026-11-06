import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "toku-mr-2410b",
	"slug": "toku-mr-2410b",
	"brand": "Toku",
	"model": "MR-2410B",
	"mpn": "MR-2410B",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Toku MR-2410B",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-mr-2410b-20261106.svg",
		"alt": "Repères techniques Toku MR-2410B, référence MR-2410B",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=40",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Toku MR-2410B, référence MR-2410B. Le tableau fabricant publie 360 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Masse publiée : 1,2 kg. Diamètre intérieur de flexible conseillé : 6,5 mm.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 6 L/s, convertis en 360 L/min par multiplication par 60.",
			"Référence fabricant : MR-2410B.",
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
				"toku-mr-2410b-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 6 L/s, convertis en 360 L/min par multiplication par 60.",
			"evidenceIds": [
				"toku-mr-2410b-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,2 kg",
			"evidenceIds": [
				"toku-mr-2410b-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"toku-mr-2410b-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"toku-mr-2410b-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-mr-2410b-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=40",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 40, réf. MR-2410B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 6 L/s, convertis en 360 L/min par multiplication par 60."
		},
		{
			"id": "toku-mr-2410b-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-06-followup:toku-mr-2410b:1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=40",
			"sourceLabel": "Toku, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P40 :cliquet1/2,175rpm/78Nm/6Ls/1,2kg; MR2207C pluspetit etRRW2404 moinsrapide.6,3bar de service ne prouve pas la mesure360Lmin; retirer la portée conclusive. SHA-256 du document complet : f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e."
		},
		{
			"id": "review:2026-11-06-followup:toku-mr-2410b:2",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Toku, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P40 :cliquet1/2,175rpm/78Nm/6Ls/1,2kg; MR2207C pluspetit etRRW2404 moinsrapide.6,3bar de service ne prouve pas la mesure360Lmin; retirer la portée conclusive. SHA-256 du document complet : f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e."
		}
	],
	"fieldSources": {
		"mpn": [
			"toku-mr-2410b-20260926"
		],
		"workingPressureBar": [
			"toku-mr-2410b-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"toku-mr-2410b-20260926"
		],
		"recommendedHose": [
			"toku-mr-2410b-20260926"
		],
		"connectorSize": [
			"toku-mr-2410b-20260926"
		],
		"airflowBasis": [
			"review:2026-11-06-followup:toku-mr-2410b:1",
			"review:2026-11-06-followup:toku-mr-2410b:2"
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

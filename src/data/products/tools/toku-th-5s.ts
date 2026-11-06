import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "toku-th-5s",
	"slug": "toku-th-5s",
	"brand": "Toku",
	"model": "TH-5S",
	"mpn": "TH-5S",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Toku TH-5S",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/toku-th-5s-20261106.svg",
		"alt": "Repères techniques Toku TH-5S, référence TH-5S",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=50",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Toku TH-5S, référence TH-5S. Le tableau fabricant publie 840 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Masse publiée : 5,8 kg. Diamètre intérieur de flexible conseillé : 13 mm.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 14 L/s, convertis en 840 L/min par multiplication par 60.",
			"Référence fabricant : TH-5S.",
			"Masse publiée : 5,8 kg.",
			"Diamètre intérieur de flexible conseillé : 13 mm.",
			"Raccord pneumatique : PT 3/8\"."
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
				"toku-th-5s-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 14 L/s, convertis en 840 L/min par multiplication par 60.",
			"evidenceIds": [
				"toku-th-5s-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "5,8 kg",
			"evidenceIds": [
				"toku-th-5s-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "13 mm",
			"evidenceIds": [
				"toku-th-5s-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 3/8\"",
			"evidenceIds": [
				"toku-th-5s-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "toku-th-5s-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=50",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 50, réf. TH-5S",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 14 L/s, convertis en 840 L/min par multiplication par 60."
		},
		{
			"id": "toku-th-5s-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-06-followup:toku-th-5s:1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=50",
			"sourceLabel": "Toku, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P50 :burineur19×14,8×89,3400coupsmin,14Ls/5,8kg/entrée3/8,distinctTCD20 etTJ15. Le point840Lmin ne reçoit pas de pression de mesure ni de régime par la note générale; calcul àneutraliser. SHA-256 du document complet : f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e."
		},
		{
			"id": "review:2026-11-06-followup:toku-th-5s:2",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Toku, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P50 :burineur19×14,8×89,3400coupsmin,14Ls/5,8kg/entrée3/8,distinctTCD20 etTJ15. Le point840Lmin ne reçoit pas de pression de mesure ni de régime par la note générale; calcul àneutraliser. SHA-256 du document complet : f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e."
		}
	],
	"fieldSources": {
		"mpn": [
			"toku-th-5s-20260926"
		],
		"workingPressureBar": [
			"toku-th-5s-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"toku-th-5s-20260926"
		],
		"recommendedHose": [
			"toku-th-5s-20260926"
		],
		"connectorSize": [
			"toku-th-5s-20260926"
		],
		"airflowBasis": [
			"review:2026-11-06-followup:toku-th-5s:1",
			"review:2026-11-06-followup:toku-th-5s:2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 840,
		"typical": 840,
		"max": 840
	},
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"connectorSize": "PT 3/8\"",
	"airflowBasis": "unqualified"
};

export default product;

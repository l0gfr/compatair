import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-yrd-8nbk",
	"slug": "yokota-yrd-8nbk",
	"brand": "Yokota",
	"model": "YRD-8NBK",
	"mpn": "YRD-8NBK",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Yokota YRD-8NBK",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yrd-8nbk-20261106.svg",
		"alt": "Repères techniques Yokota YRD-8NBK, référence YRD-8NBK",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota YRD-8NBK, référence YRD-8NBK. Le tableau fabricant publie 600 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 1900 tr/min. Masse publiée : 1,3 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 10 L/s, convertis en 600 L/min par multiplication par 60.",
			"Référence fabricant : YRD-8NBK.",
			"Vitesse à vide publiée : 1900 tr/min.",
			"Masse publiée : 1,3 kg.",
			"Diamètre intérieur de flexible conseillé : 10 mm."
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
				"yokota-yrd-8nbk-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 10 L/s, convertis en 600 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-yrd-8nbk-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "1900 tr/min",
			"evidenceIds": [
				"yokota-yrd-8nbk-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,3 kg",
			"evidenceIds": [
				"yokota-yrd-8nbk-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"yokota-yrd-8nbk-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"yokota-yrd-8nbk-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yrd-8nbk-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 42, réf. YRD-8NBK",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 10 L/s, convertis en 600 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yrd-8nbk-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-06-followup:yokota-yrd-8nbk:1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
			"sourceLabel": "Yokota, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P42 :mandrin3/8-24UNF,8–10mm,1900rpm/0,38kW/10Ls/1,3kg; YRD6NBK2800rpm etRR10DP1800rpm. Consigne6,3bar distincte de la mesure600Lmin, régime non documenté. SHA-256 du document complet : f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e."
		},
		{
			"id": "review:2026-11-06-followup:yokota-yrd-8nbk:2",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Yokota, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P42 :mandrin3/8-24UNF,8–10mm,1900rpm/0,38kW/10Ls/1,3kg; YRD6NBK2800rpm etRR10DP1800rpm. Consigne6,3bar distincte de la mesure600Lmin, régime non documenté. SHA-256 du document complet : f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e."
		}
	],
	"fieldSources": {
		"mpn": [
			"yokota-yrd-8nbk-20260926"
		],
		"workingPressureBar": [
			"yokota-yrd-8nbk-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-yrd-8nbk-20260926"
		],
		"recommendedHose": [
			"yokota-yrd-8nbk-20260926"
		],
		"connectorSize": [
			"yokota-yrd-8nbk-20260926"
		],
		"airflowBasis": [
			"review:2026-11-06-followup:yokota-yrd-8nbk:1",
			"review:2026-11-06-followup:yokota-yrd-8nbk:2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;

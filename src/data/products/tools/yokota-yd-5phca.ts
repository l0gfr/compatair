import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-yd-5phca",
	"slug": "yokota-yd-5phca",
	"brand": "Yokota",
	"model": "YD-5PHCA",
	"mpn": "YD-5PHCA",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Yokota YD-5PHCA",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yd-5phca-technical-20261116-reviews.svg",
		"alt": "Repères techniques Yokota YD-5PHCA, référence YD-5PHCA",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "La YD-5PHCA est une visseuse pistolet réversible à friction réglable, pour 1–6,6 Nm et 1 650 tr/min. La YD-400SCA est une version droite pour 1–3,2 Nm ; les RR-02SP et RR-06SP ont d’autres plages et vitesses. Le tableau donne 5,8 L/s pour la YD-5PHCA, sans régime explicite de consommation. La consigne d’alimentation ne transforme pas cette valeur en besoin mesuré.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 5.8 L/s, convertis en 348 L/min par multiplication par 60.",
			"Référence fabricant : YD-5PHCA.",
			"Vitesse à vide publiée : 1650 tr/min.",
			"Masse publiée : 1,2 kg.",
			"Diamètre intérieur de flexible conseillé : 6,5 mm."
		],
		"limitations": [
			"Les couples indiqués sont des valeurs indicatives, sensibles à l’assemblage et à l’accessoire.",
			"La pression doit être vérifiée pendant le fonctionnement ; la pression statique du réservoir ne suffit pas.",
			"La pression de service n’atteste pas la pression de mesure de consommation. Le régime ou l’appariement documentaire reste non qualifié ; aucune consommation dimensionnante n’est conservée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"yokota-yd-5phca-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 5.8 L/s, convertis en 348 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-yd-5phca-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "1650 tr/min",
			"evidenceIds": [
				"yokota-yd-5phca-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,2 kg",
			"evidenceIds": [
				"yokota-yd-5phca-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"yokota-yd-5phca-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"yokota-yd-5phca-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yd-5phca-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 42, réf. YD-5PHCA",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 5.8 L/s, convertis en 348 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yd-5phca-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-16-reviews:yokota-yd-5phca:0",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
			"sourceLabel": "Yokota, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La YD-5PHCA est une visseuse pistolet réversible à friction réglable, pour 1–6,6 Nm et 1 650 tr/min. La YD-400SCA est une version droite pour 1–3,2 Nm ; les RR-02SP et RR-06SP ont d’autres plages et vitesses. Le tableau donne 5,8 L/s pour la YD-5PHCA, sans régime explicite de consommation. La consigne d’alimentation ne transforme pas cette valeur en besoin mesuré. GET complet SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Pages PDF lues : 42, 106."
		}
	],
	"fieldSources": {
		"mpn": [
			"yokota-yd-5phca-20260926"
		],
		"workingPressureBar": [
			"yokota-yd-5phca-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-yd-5phca-20260926"
		],
		"recommendedHose": [
			"yokota-yd-5phca-20260926"
		],
		"connectorSize": [
			"yokota-yd-5phca-20260926"
		],
		"airflowBasis": [
			"review:2026-11-16-reviews:yokota-yd-5phca:0"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 348,
		"typical": 348,
		"max": 348
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;

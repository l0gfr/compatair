import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-7vc-6500fs",
	"slug": "yokota-7vc-6500fs",
	"brand": "Yokota",
	"model": "7VC-6500FS",
	"mpn": "7VC-6500FS",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Yokota 7VC-6500FS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-7vc-6500fs.webp",
		"alt": "Repères techniques Yokota 7VC-6500FS, référence 7VC-6500FS",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota 7VC-6500FS. Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge. La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement. Référence fabricant : 7VC-6500FS. Vitesse à vide publiée : 6500 tr/min. Masse publiée : 4,2 kg. Diamètre intérieur de flexible conseillé : 13 mm.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Référence fabricant : 7VC-6500FS.",
			"Vitesse à vide publiée : 6500 tr/min.",
			"Masse publiée : 4,2 kg.",
			"Diamètre intérieur de flexible conseillé : 13 mm.",
			"Consommation de régime non précisé publiée : 1380 L/min."
		],
		"limitations": [
			"Les couples indiqués sont des valeurs indicatives, sensibles à l’assemblage et à l’accessoire.",
			"La pression doit être vérifiée pendant le fonctionnement ; la pression statique du réservoir ne suffit pas.",
			"Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"yokota-7vc-6500fs-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation de régime non précisé publiée : 1380 L/min.",
			"evidenceIds": [
				"yokota-7vc-6500fs-reserved-20261031-1",
				"yokota-7vc-6500fs-reserved-20261031-2"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "6500 tr/min",
			"evidenceIds": [
				"yokota-7vc-6500fs-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "4,2 kg",
			"evidenceIds": [
				"yokota-7vc-6500fs-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "13 mm",
			"evidenceIds": [
				"yokota-7vc-6500fs-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 3/8\"",
			"evidenceIds": [
				"yokota-7vc-6500fs-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":1380,\"typical\":1380,\"max\":1380},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"yokota-7vc-6500fs-20260926",
				"yokota-7vc-6500fs-reserved-20261031-1",
				"yokota-7vc-6500fs-reserved-20261031-2"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-7vc-6500fs-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 45, réf. 7VC-6500FS",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 23 L/s, convertis en 1380 L/min par multiplication par 60."
		},
		{
			"id": "yokota-7vc-6500fs-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "yokota-7vc-6500fs-reserved-20261031-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
			"sourceLabel": "Yokota 7VC-6500FS : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge."
		},
		{
			"id": "yokota-7vc-6500fs-reserved-20261031-2",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Yokota 7VC-6500FS : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"yokota-7vc-6500fs-20260926"
		],
		"workingPressureBar": [
			"yokota-7vc-6500fs-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-7vc-6500fs-20260926"
		],
		"recommendedHose": [
			"yokota-7vc-6500fs-20260926"
		],
		"connectorSize": [
			"yokota-7vc-6500fs-20260926"
		],
		"airflowBasis": [
			"yokota-7vc-6500fs-reserved-20261031-1",
			"yokota-7vc-6500fs-reserved-20261031-2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1380,
		"typical": 1380,
		"max": 1380
	},
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"connectorSize": "PT 3/8\"",
	"airflowBasis": "unqualified"
};

export default product;

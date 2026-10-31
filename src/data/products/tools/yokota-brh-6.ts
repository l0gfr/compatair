import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-brh-6",
	"slug": "yokota-brh-6",
	"brand": "Yokota",
	"model": "BRH-6",
	"mpn": "BRH-6",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Yokota BRH-6",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-brh-6.webp",
		"alt": "Repères techniques Yokota BRH-6, référence BRH-6",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=49",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota BRH-6. Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge. La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement. Référence fabricant : BRH-6. Masse publiée : 1,4 kg. Diamètre intérieur de flexible conseillé : 10 mm. Raccord pneumatique : PT 1/4\".",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Référence fabricant : BRH-6.",
			"Masse publiée : 1,4 kg.",
			"Diamètre intérieur de flexible conseillé : 10 mm.",
			"Raccord pneumatique : PT 1/4\".",
			"Consommation de régime non précisé publiée : 396 L/min."
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
				"yokota-brh-6-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation de régime non précisé publiée : 396 L/min.",
			"evidenceIds": [
				"yokota-brh-6-reserved-20261031-1",
				"yokota-brh-6-reserved-20261031-2"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,4 kg",
			"evidenceIds": [
				"yokota-brh-6-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"yokota-brh-6-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"yokota-brh-6-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":396,\"typical\":396,\"max\":396},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"yokota-brh-6-20260926",
				"yokota-brh-6-reserved-20261031-1",
				"yokota-brh-6-reserved-20261031-2"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-brh-6-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=49",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 49, réf. BRH-6",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 6.6 L/s, convertis en 396 L/min par multiplication par 60."
		},
		{
			"id": "yokota-brh-6-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "yokota-brh-6-reserved-20261031-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=49",
			"sourceLabel": "Yokota BRH-6 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge."
		},
		{
			"id": "yokota-brh-6-reserved-20261031-2",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Yokota BRH-6 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"yokota-brh-6-20260926"
		],
		"workingPressureBar": [
			"yokota-brh-6-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-brh-6-20260926"
		],
		"recommendedHose": [
			"yokota-brh-6-20260926"
		],
		"connectorSize": [
			"yokota-brh-6-20260926"
		],
		"airflowBasis": [
			"yokota-brh-6-reserved-20261031-1",
			"yokota-brh-6-reserved-20261031-2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 396,
		"typical": 396,
		"max": 396
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;

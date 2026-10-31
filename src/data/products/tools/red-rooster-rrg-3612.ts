import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rrg-3612",
	"slug": "red-rooster-rrg-3612",
	"brand": "Red Rooster",
	"model": "RRG-3612",
	"mpn": "RRG-3612",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Red Rooster RRG-3612",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rrg-3612.webp",
		"alt": "Repères techniques Red Rooster RRG-3612, référence RRG-3612",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=48",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRG-3612. Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge. La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement. Référence fabricant : RRG-3612. Vitesse à vide publiée : 20000 tr/min. Masse publiée : 1,4 kg. Diamètre intérieur de flexible conseillé : 10 mm.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Référence fabricant : RRG-3612.",
			"Vitesse à vide publiée : 20000 tr/min.",
			"Masse publiée : 1,4 kg.",
			"Diamètre intérieur de flexible conseillé : 10 mm.",
			"Consommation de régime non précisé publiée : 822 L/min."
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
				"red-rooster-rrg-3612-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation de régime non précisé publiée : 822 L/min.",
			"evidenceIds": [
				"red-rooster-rrg-3612-reserved-20261031-1",
				"red-rooster-rrg-3612-reserved-20261031-2"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "20000 tr/min",
			"evidenceIds": [
				"red-rooster-rrg-3612-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,4 kg",
			"evidenceIds": [
				"red-rooster-rrg-3612-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"red-rooster-rrg-3612-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rrg-3612-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":822,\"typical\":822,\"max\":822},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"red-rooster-rrg-3612-20260926",
				"red-rooster-rrg-3612-reserved-20261031-1",
				"red-rooster-rrg-3612-reserved-20261031-2"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rrg-3612-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=48",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 48, réf. RRG-3612",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 13.7 L/s, convertis en 822 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rrg-3612-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "red-rooster-rrg-3612-reserved-20261031-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=48",
			"sourceLabel": "Red Rooster RRG-3612 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge."
		},
		{
			"id": "red-rooster-rrg-3612-reserved-20261031-2",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Red Rooster RRG-3612 : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rrg-3612-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rrg-3612-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rrg-3612-20260926"
		],
		"recommendedHose": [
			"red-rooster-rrg-3612-20260926"
		],
		"connectorSize": [
			"red-rooster-rrg-3612-20260926"
		],
		"airflowBasis": [
			"red-rooster-rrg-3612-reserved-20261031-1",
			"red-rooster-rrg-3612-reserved-20261031-2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 822,
		"typical": 822,
		"max": 822
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;

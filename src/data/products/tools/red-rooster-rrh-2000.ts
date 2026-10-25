import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rrh-2000",
	"slug": "red-rooster-rrh-2000",
	"brand": "Red Rooster",
	"model": "RRH-2000",
	"mpn": "RRH-2000",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Red Rooster RRH-2000",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rrh-2000.webp",
		"alt": "Repères techniques Red Rooster RRH-2000, référence RRH-2000",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=49",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RRH-2000 : marteau à emmanchement 11 × 12,7 × 40 mm, 5 000 coups/min et énergie annoncée de 4,5 J par coup. Le RRH-4309K conserve cet emmanchement, à 3 200 coups/min et 9 J par coup. Le premier pèse 1,5 kg et publie 8,4 L/s, le second 1,7 kg et 7,1 L/s.",
		"verifiedFacts": [
			"RRH-2000 contre RRH-4309K : même emmanchement 11 × 12,7 × 40 mm ; 5 000 contre 3 200 coups/min et 4,5 contre 9 J/coup. Masses 1,5 et 1,7 kg ; consommations 8,4 et 7,1 L/s.",
			"Le régime de la consommation publiée n’est pas précisé ; cette valeur n’est pas assimilée à un maximum de travail."
		],
		"limitations": [
			"Le régime des 8,4 L/s n’est pas qualifié.",
			"L’énergie par coup et la cadence restent séparées ; aucun rendement de burinage n’est calculé depuis leur produit."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"red-rooster-rrh-2000-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 8.4 L/s, convertis en 504 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rrh-2000-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,5 kg",
			"evidenceIds": [
				"red-rooster-rrh-2000-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"red-rooster-rrh-2000-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rrh-2000-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rrh-2000-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=49",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 49, réf. RRH-2000",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 8.4 L/s, convertis en 504 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rrh-2000-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review-20261025-red-rooster-rrh-2000-s068",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=49",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s068, pages PDF 49, 106",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:38.623086+00:00, SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. RRH-2000 contre RRH-4309K : même emmanchement 11 × 12,7 × 40 mm ; 5 000 contre 3 200 coups/min et 4,5 contre 9 J/coup. Masses 1,5 et 1,7 kg ; consommations 8,4 et 7,1 L/s. Limite : Ajouter unqualified : le régime des 8,4 L/s n’est pas qualifié."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rrh-2000-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rrh-2000-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rrh-2000-20260926",
			"review-20261025-red-rooster-rrh-2000-s068"
		],
		"recommendedHose": [
			"red-rooster-rrh-2000-20260926"
		],
		"connectorSize": [
			"red-rooster-rrh-2000-20260926"
		],
		"airflowBasis": [
			"review-20261025-red-rooster-rrh-2000-s068"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : Ajouter unqualified : le régime des 8,4 L/s n’est pas qualifié."
	],
	"airflowLpm": {
		"min": 504,
		"typical": 504,
		"max": 504
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;

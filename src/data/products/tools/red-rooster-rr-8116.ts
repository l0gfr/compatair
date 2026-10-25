import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rr-8116",
	"slug": "red-rooster-rr-8116",
	"brand": "Red Rooster",
	"model": "RR-8116",
	"mpn": "RR-8116",
	"categoryId": "grignoteuse",
	"category": "grignoteuse",
	"label": "Red Rooster RR-8116",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rr-8116.webp",
		"alt": "Repères techniques Red Rooster RR-8116, référence RR-8116",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=57",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RR-8116 : grignoteuse pour tôles de 1,6 mm en acier ou 2,0 mm en aluminium, à 3 500 coups/min. La RR-8110 est une cisaille donnée pour 1,0 et 1,2 mm, à 2 400 coups/min. La grignoteuse annonce 8 L/s et 0,9 kg, contre 9,4 L/s et 1,2 kg pour la cisaille.",
		"verifiedFacts": [
			"RR-8116 grignoteuse contre RR-8110 cisaille : capacités acier 1,6 et 1,0 mm, aluminium 2,0 et 1,2 mm ; cadences 3 500 et 2 400 coups/min. Consommations 8 et 9,4 L/s, masses 0,9 et 1,2 kg.",
			"Le régime de la consommation publiée n’est pas précisé ; cette valeur n’est pas assimilée à un maximum de travail."
		],
		"limitations": [
			"Les 8 L/s ne sont pas qualifiés en charge ou au maximum.",
			"Les capacités de coupe publiées restent propres aux matériaux indiqués ; ne pas les étendre à l’inox."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"red-rooster-rr-8116-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 8 L/s, convertis en 480 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rr-8116-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,9 kg",
			"evidenceIds": [
				"red-rooster-rr-8116-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"red-rooster-rr-8116-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rr-8116-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rr-8116-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=57",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 57, réf. RR-8116",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 8 L/s, convertis en 480 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rr-8116-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review-20261025-red-rooster-rr-8116-s068",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=57",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s068, pages PDF 57, 106",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:38.623086+00:00, SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. RR-8116 grignoteuse contre RR-8110 cisaille : capacités acier 1,6 et 1,0 mm, aluminium 2,0 et 1,2 mm ; cadences 3 500 et 2 400 coups/min. Consommations 8 et 9,4 L/s, masses 0,9 et 1,2 kg. Limite : Ajouter unqualified : les 8 L/s ne sont pas qualifiés en charge ou au maximum."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rr-8116-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rr-8116-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rr-8116-20260926",
			"review-20261025-red-rooster-rr-8116-s068"
		],
		"recommendedHose": [
			"red-rooster-rr-8116-20260926"
		],
		"connectorSize": [
			"red-rooster-rr-8116-20260926"
		],
		"airflowBasis": [
			"review-20261025-red-rooster-rr-8116-s068"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : Ajouter unqualified : les 8 L/s ne sont pas qualifiés en charge ou au maximum."
	],
	"airflowLpm": {
		"min": 480,
		"typical": 480,
		"max": 480
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;

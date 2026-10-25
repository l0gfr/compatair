import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rr-2110ns",
	"slug": "red-rooster-rr-2110ns",
	"brand": "Red Rooster",
	"model": "RR-2110NS",
	"mpn": "RR-2110NS",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Red Rooster RR-2110NS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rr-2110ns.webp",
		"alt": "Repères techniques Red Rooster RR-2110NS, référence RR-2110NS",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=55",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RR-2110NS : dérouilleur pistolet à 3 000 coups/min, corps de 340 × 175 mm et masse de 2,5 kg. Le RR-0315NS droit atteint 4 000 coups/min avec un corps de 415 × 45 mm et 2,6 kg. Les deux lignes publient 6,6 L/s et un flexible intérieur de 6,5 mm.",
		"verifiedFacts": [
			"RR-2110NS contre RR-0315NS : 3 000 contre 4 000 coups/min, masses 2,5 et 2,6 kg, dimensions 340 × 175 et 415 × 45 mm. Consommation commune 6,6 L/s ; aiguille standard de 3 mm.",
			"Le régime de la consommation publiée n’est pas précisé ; cette valeur n’est pas assimilée à un maximum de travail."
		],
		"limitations": [
			"La table ne donne pas le régime des 6,6 L/s.",
			"La ligne des porte-aiguilles annonce 19 aiguilles de 3 mm, mais une désignation de pièce comporte -17 : ne pas transformer le suffixe de pièce en nombre d’aiguilles."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"red-rooster-rr-2110ns-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 6.6 L/s, convertis en 396 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rr-2110ns-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2,5 kg",
			"evidenceIds": [
				"red-rooster-rr-2110ns-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"red-rooster-rr-2110ns-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rr-2110ns-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rr-2110ns-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=55",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 55, réf. RR-2110NS",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 6.6 L/s, convertis en 396 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rr-2110ns-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review-20261025-red-rooster-rr-2110ns-s068",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=55",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s068, pages PDF 55, 106",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:38.623086+00:00, SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. RR-2110NS contre RR-0315NS : 3 000 contre 4 000 coups/min, masses 2,5 et 2,6 kg, dimensions 340 × 175 et 415 × 45 mm. Consommation commune 6,6 L/s ; aiguille standard de 3 mm. Limite : Ajouter unqualified ; la table ne donne pas le régime des 6,6 L/s."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rr-2110ns-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rr-2110ns-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rr-2110ns-20260926",
			"review-20261025-red-rooster-rr-2110ns-s068"
		],
		"recommendedHose": [
			"red-rooster-rr-2110ns-20260926"
		],
		"connectorSize": [
			"red-rooster-rr-2110ns-20260926"
		],
		"airflowBasis": [
			"review-20261025-red-rooster-rr-2110ns-s068"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : Ajouter unqualified ; la table ne donne pas le régime des 6,6 L/s."
	],
	"airflowLpm": {
		"min": 396,
		"typical": 396,
		"max": 396
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;

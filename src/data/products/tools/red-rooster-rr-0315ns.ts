import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rr-0315ns",
	"slug": "red-rooster-rr-0315ns",
	"brand": "Red Rooster",
	"model": "RR-0315NS",
	"mpn": "RR-0315NS",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Red Rooster RR-0315NS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rr-0315ns.webp",
		"alt": "Repères techniques Red Rooster RR-0315NS, référence RR-0315NS",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=55",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RR-0315NS frappe à 4 000 coups/min, contre 3 000 pour RR-2110NS, avec des courses respectives de 32 et 33 mm. Le catalogue donne des cotes A × B de 415 × 45 mm pour RR-0315NS et 340 × 175 mm pour RR-2110NS : l’encombrement doit être choisi avec l’accès à la surface à décaper. Les deux sont livrés avec 19 aiguilles de 3 mm, tandis que le tableau n’attribue l’option de 29 aiguilles de 2 mm qu’au RR-2110NS. La consommation commune de 6,6 l/s, soit 396 l/min, n’est pas qualifiée en régime dans ce tableau ; la consigne générale est de 6,3 bar moteur en fonctionnement.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 6.6 L/s, convertis en 396 L/min par multiplication par 60.",
			"Référence fabricant : RR-0315NS.",
			"Masse publiée : 2,6 kg.",
			"Diamètre intérieur de flexible conseillé : 6,5 mm.",
			"Raccord pneumatique : PT 1/4\"."
		],
		"limitations": [
			"Les couples indiqués sont des valeurs indicatives, sensibles à l’assemblage et à l’accessoire.",
			"La pression doit être vérifiée pendant le fonctionnement ; la pression statique du réservoir ne suffit pas."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"red-rooster-rr-0315ns-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 6.6 L/s, convertis en 396 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rr-0315ns-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2,6 kg",
			"evidenceIds": [
				"red-rooster-rr-0315ns-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"red-rooster-rr-0315ns-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rr-0315ns-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rr-0315ns-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=55",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 55, réf. RR-0315NS",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 6.6 L/s, convertis en 396 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rr-0315ns-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
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
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rr-0315ns-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rr-0315ns-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rr-0315ns-20260926"
		],
		"recommendedHose": [
			"red-rooster-rr-0315ns-20260926"
		],
		"connectorSize": [
			"red-rooster-rr-0315ns-20260926"
		],
		"airflowBasis": [
			"red-rooster-rr-0315ns-20260926"
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
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;

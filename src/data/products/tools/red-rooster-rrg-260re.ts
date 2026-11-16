import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rrg-260re",
	"slug": "red-rooster-rrg-260re",
	"brand": "Red Rooster",
	"model": "RRG-260RE",
	"mpn": "RRG-260RE",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Red Rooster RRG-260RE",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rrg-260re-technical-20261116-reviews.svg",
		"alt": "Repères techniques Red Rooster RRG-260RE, référence RRG-260RE",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "La RRG-260RE est une meuleuse droite de 0,26 kW avec pince de 6 mm ; la RRG-260REL prolonge l’axe de 116 mm. La RRG-541RE offre 0,41 kW dans la même famille. La consommation du tableau n’a pas de régime explicite et la consigne de service ne suffit pas à établir son point de mesure : le calcul de compatibilité demeure non conclusif.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 7.5 L/s, convertis en 450 L/min par multiplication par 60.",
			"Référence fabricant : RRG-260RE.",
			"Vitesse à vide publiée : 25000 tr/min.",
			"Masse publiée : 0,5 kg.",
			"Diamètre intérieur de flexible conseillé : 10 mm."
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
				"red-rooster-rrg-260re-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 7.5 L/s, convertis en 450 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rrg-260re-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "25000 tr/min",
			"evidenceIds": [
				"red-rooster-rrg-260re-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,5 kg",
			"evidenceIds": [
				"red-rooster-rrg-260re-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"red-rooster-rrg-260re-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rrg-260re-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rrg-260re-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=44",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 44, réf. RRG-260RE",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 7.5 L/s, convertis en 450 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rrg-260re-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-16-reviews:red-rooster-rrg-260re:0",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
			"sourceLabel": "Red Rooster, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La RRG-260RE est une meuleuse droite de 0,26 kW avec pince de 6 mm ; la RRG-260REL prolonge l’axe de 116 mm. La RRG-541RE offre 0,41 kW dans la même famille. La consommation du tableau n’a pas de régime explicite et la consigne de service ne suffit pas à établir son point de mesure : le calcul de compatibilité demeure non conclusif. GET complet SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Pages PDF lues : 44, 106."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rrg-260re-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rrg-260re-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rrg-260re-20260926"
		],
		"recommendedHose": [
			"red-rooster-rrg-260re-20260926"
		],
		"connectorSize": [
			"red-rooster-rrg-260re-20260926"
		],
		"airflowBasis": [
			"review:2026-11-16-reviews:red-rooster-rrg-260re:0"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 450,
		"typical": 450,
		"max": 450
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;

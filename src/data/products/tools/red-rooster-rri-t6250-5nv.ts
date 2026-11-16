import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rri-t6250-5nv",
	"slug": "red-rooster-rri-t6250-5nv",
	"brand": "Red Rooster",
	"model": "RRI-T6250-5NV",
	"mpn": "RRI-T6250-5NV",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Red Rooster RRI-T6250-5NV",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-t6250-5nv-technical-20261116-reviews.svg",
		"alt": "Repères techniques Red Rooster RRI-T6250-5NV, référence RRI-T6250-5NV",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "La RRI-T6250-5NV est une ponceuse orbitale sans aspiration intégrée ; la version 5CV se raccorde à une aspiration centrale. Les versions à course 2,5 mm et 5 mm répondent à des finitions différentes. La consommation publiée reste documentaire : le tableau et la consigne dynamique générale n’établissent pas ensemble le régime et le point de mesure requis pour le calcul.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 4.9 L/s, convertis en 294 L/min par multiplication par 60.",
			"Référence fabricant : RRI-T6250-5NV.",
			"Vitesse à vide publiée : 12000 tr/min.",
			"Masse publiée : 1 kg.",
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
				"red-rooster-rri-t6250-5nv-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 4.9 L/s, convertis en 294 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rri-t6250-5nv-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "12000 tr/min",
			"evidenceIds": [
				"red-rooster-rri-t6250-5nv-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1 kg",
			"evidenceIds": [
				"red-rooster-rri-t6250-5nv-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"red-rooster-rri-t6250-5nv-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rri-t6250-5nv-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-t6250-5nv-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=47",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 47, réf. RRI-T6250-5NV",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 4.9 L/s, convertis en 294 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-t6250-5nv-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-16-reviews:red-rooster-rri-t6250-5nv:0",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
			"sourceLabel": "Red Rooster, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La RRI-T6250-5NV est une ponceuse orbitale sans aspiration intégrée ; la version 5CV se raccorde à une aspiration centrale. Les versions à course 2,5 mm et 5 mm répondent à des finitions différentes. La consommation publiée reste documentaire : le tableau et la consigne dynamique générale n’établissent pas ensemble le régime et le point de mesure requis pour le calcul. GET complet SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Pages PDF lues : 47, 106."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rri-t6250-5nv-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rri-t6250-5nv-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rri-t6250-5nv-20260926"
		],
		"recommendedHose": [
			"red-rooster-rri-t6250-5nv-20260926"
		],
		"connectorSize": [
			"red-rooster-rri-t6250-5nv-20260926"
		],
		"airflowBasis": [
			"review:2026-11-16-reviews:red-rooster-rri-t6250-5nv:0"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 294,
		"typical": 294,
		"max": 294
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;

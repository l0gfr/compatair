import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rrg-2134",
	"slug": "red-rooster-rrg-2134",
	"brand": "Red Rooster",
	"model": "RRG-2134",
	"mpn": "RRG-2134",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Red Rooster RRG-2134",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rrg-2134-20261106.svg",
		"alt": "Repères techniques Red Rooster RRG-2134, référence RRG-2134",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRG-2134, référence RRG-2134. Le tableau fabricant publie 1 044 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 12000 tr/min. Masse publiée : 1,9 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 17.4 L/s, convertis en 1044 L/min par multiplication par 60.",
			"Référence fabricant : RRG-2134.",
			"Vitesse à vide publiée : 12000 tr/min.",
			"Masse publiée : 1,9 kg.",
			"Diamètre intérieur de flexible conseillé : 13 mm."
		],
		"limitations": [
			"Les couples indiqués sont des valeurs indicatives, sensibles à l’assemblage et à l’accessoire.",
			"La pression doit être vérifiée pendant le fonctionnement ; la pression statique du réservoir ne suffit pas.",
			"Le régime de consommation publié est non précisé. Cette valeur reste documentaire et le moteur renvoie insufficient_data."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"red-rooster-rrg-2134-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 17.4 L/s, convertis en 1044 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rrg-2134-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "12000 tr/min",
			"evidenceIds": [
				"red-rooster-rrg-2134-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,9 kg",
			"evidenceIds": [
				"red-rooster-rrg-2134-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "13 mm",
			"evidenceIds": [
				"red-rooster-rrg-2134-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 3/8\"",
			"evidenceIds": [
				"red-rooster-rrg-2134-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rrg-2134-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 45, réf. RRG-2134",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 17.4 L/s, convertis en 1044 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rrg-2134-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-06-followup:red-rooster-rrg-2134:1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
			"sourceLabel": "Red Rooster, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P45 :disque100×16mm,brocheM10×1,5,12000rpm,17,4Ls; RRG2144 a115×22,2mm/M14. Ni régime ni pression de mesure1044Lmin identifiés par la consigne d’exploitation. Désactiver leur portée dimensionnante. SHA-256 du document complet : f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e."
		},
		{
			"id": "review:2026-11-06-followup:red-rooster-rrg-2134:2",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Red Rooster, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P45 :disque100×16mm,brocheM10×1,5,12000rpm,17,4Ls; RRG2144 a115×22,2mm/M14. Ni régime ni pression de mesure1044Lmin identifiés par la consigne d’exploitation. Désactiver leur portée dimensionnante. SHA-256 du document complet : f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rrg-2134-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rrg-2134-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rrg-2134-20260926"
		],
		"recommendedHose": [
			"red-rooster-rrg-2134-20260926"
		],
		"connectorSize": [
			"red-rooster-rrg-2134-20260926"
		],
		"airflowBasis": [
			"review:2026-11-06-followup:red-rooster-rrg-2134:1",
			"review:2026-11-06-followup:red-rooster-rrg-2134:2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 1044,
		"typical": 1044,
		"max": 1044
	},
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"connectorSize": "PT 3/8\"",
	"airflowBasis": "unqualified"
};

export default product;

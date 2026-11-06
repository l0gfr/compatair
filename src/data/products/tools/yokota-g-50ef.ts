import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-g-50ef",
	"slug": "yokota-g-50ef",
	"brand": "Yokota",
	"model": "G-50EF",
	"mpn": "G-50EF",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Yokota G-50EF",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-g-50ef-20261106.svg",
		"alt": "Repères techniques Yokota G-50EF, référence G-50EF",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota G-50EF, référence G-50EF. Le tableau fabricant publie 648 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Vitesse à vide publiée : 12000 tr/min. Masse publiée : 1,5 kg.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 10.8 L/s, convertis en 648 L/min par multiplication par 60.",
			"Référence fabricant : G-50EF.",
			"Vitesse à vide publiée : 12000 tr/min.",
			"Masse publiée : 1,5 kg.",
			"Diamètre intérieur de flexible conseillé : 10 mm."
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
				"yokota-g-50ef-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 10.8 L/s, convertis en 648 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-g-50ef-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "12000 tr/min",
			"evidenceIds": [
				"yokota-g-50ef-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,5 kg",
			"evidenceIds": [
				"yokota-g-50ef-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"yokota-g-50ef-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"yokota-g-50ef-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-g-50ef-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 45, réf. G-50EF",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 10.8 L/s, convertis en 648 L/min par multiplication par 60."
		},
		{
			"id": "yokota-g-50ef-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-06-followup:yokota-g-50ef:1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
			"sourceLabel": "Yokota, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P45 :disque125×22,2mm,broche7/16,12000rpm/10,8Ls/1,5kg; G40EF115mm/13000rpm. Ni régime ni mesureà6,3bar confirmés pour648Lmin, donc usage documentaire uniquement. SHA-256 du document complet : f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e."
		},
		{
			"id": "review:2026-11-06-followup:yokota-g-50ef:2",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Yokota, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "P45 :disque125×22,2mm,broche7/16,12000rpm/10,8Ls/1,5kg; G40EF115mm/13000rpm. Ni régime ni mesureà6,3bar confirmés pour648Lmin, donc usage documentaire uniquement. SHA-256 du document complet : f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e."
		}
	],
	"fieldSources": {
		"mpn": [
			"yokota-g-50ef-20260926"
		],
		"workingPressureBar": [
			"yokota-g-50ef-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-g-50ef-20260926"
		],
		"recommendedHose": [
			"yokota-g-50ef-20260926"
		],
		"connectorSize": [
			"yokota-g-50ef-20260926"
		],
		"airflowBasis": [
			"review:2026-11-06-followup:yokota-g-50ef:1",
			"review:2026-11-06-followup:yokota-g-50ef:2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 648,
		"typical": 648,
		"max": 648
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;

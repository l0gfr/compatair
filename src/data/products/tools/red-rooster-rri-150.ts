import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rri-150",
	"slug": "red-rooster-rri-150",
	"brand": "Red Rooster",
	"model": "RRI-150",
	"mpn": "RRI-150",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Red Rooster RRI-150",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-150-20261106.svg",
		"alt": "Repères techniques Red Rooster RRI-150, référence RRI-150",
		"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=23",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRI-150, référence RRI-150. Le tableau fabricant publie 696 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple indicatif publié : 165 à 210 Nm. Vitesse à vide : 3700 tr/min.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 11.6 L/s, convertis en 696 L/min par multiplication par 60.",
			"Référence fabricant : RRI-150.",
			"Couple indicatif publié : 165 à 210 Nm.",
			"Vitesse à vide : 3700 tr/min.",
			"Entraînement : 3/4\" carré."
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
				"red-rooster-rri-150-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 11.6 L/s, convertis en 696 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rri-150-20260926"
			]
		},
		{
			"label": "Couple indicatif publié",
			"value": "165 à 210 Nm",
			"evidenceIds": [
				"red-rooster-rri-150-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3700 tr/min",
			"evidenceIds": [
				"red-rooster-rri-150-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "3/4\" carré",
			"evidenceIds": [
				"red-rooster-rri-150-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "3,0 kg",
			"evidenceIds": [
				"red-rooster-rri-150-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "11 mm",
			"evidenceIds": [
				"red-rooster-rri-150-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-150-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=23",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 23, réf. RRI-150",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 11.6 L/s, convertis en 696 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-150-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-06-followup:red-rooster-rri-150:1",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=23",
			"sourceLabel": "Red Rooster, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Assemblagep23 :carré3/4,3700rpm,165–210Nm,11,6Ls,3kg; RRI130 est1/2 et123–148Nm. Aucun régime ni point de mesure6,3bar prouvé par la note de maintenance;696Lmin non dimensionnants. SHA-256 du document complet : 6b7dca4923bfef1dbe2c7f6691e91e07f92fec5c1fa3b8d56f211ecbdb5e4845."
		},
		{
			"id": "review:2026-11-06-followup:red-rooster-rri-150:2",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Red Rooster, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Assemblagep23 :carré3/4,3700rpm,165–210Nm,11,6Ls,3kg; RRI130 est1/2 et123–148Nm. Aucun régime ni point de mesure6,3bar prouvé par la note de maintenance;696Lmin non dimensionnants. SHA-256 du document complet : f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rri-150-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rri-150-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rri-150-20260926"
		],
		"recommendedHose": [
			"red-rooster-rri-150-20260926"
		],
		"airflowBasis": [
			"review:2026-11-06-followup:red-rooster-rri-150:1",
			"review:2026-11-06-followup:red-rooster-rri-150:2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 696,
		"typical": 696,
		"max": 696
	},
	"recommendedHose": {
		"innerDiameterMm": 11
	},
	"airflowBasis": "unqualified"
};

export default product;

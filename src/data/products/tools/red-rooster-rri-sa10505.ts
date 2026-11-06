import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rri-sa10505",
	"slug": "red-rooster-rri-sa10505",
	"brand": "Red Rooster",
	"model": "RRI-SA10505",
	"mpn": "RRI-SA10505",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Red Rooster RRI-SA10505",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-sa10505-20261106.svg",
		"alt": "Repères techniques Red Rooster RRI-SA10505, référence RRI-SA10505",
		"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=29",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRI-SA10505, référence RRI-SA10505. Le tableau fabricant publie 450 L/min et une plage d’utilisation de 6,3 à 6,3 bar. Couple indicatif publié : 0,8 à 5,0 Nm. Vitesse à vide : 550 tr/min.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 7.5 L/s, convertis en 450 L/min par multiplication par 60.",
			"Référence fabricant : RRI-SA10505.",
			"Couple indicatif publié : 0,8 à 5,0 Nm.",
			"Vitesse à vide : 550 tr/min.",
			"Masse publiée : 1,02 kg."
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
				"red-rooster-rri-sa10505-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 7.5 L/s, convertis en 450 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rri-sa10505-20260926"
			]
		},
		{
			"label": "Couple indicatif publié",
			"value": "0,8 à 5,0 Nm",
			"evidenceIds": [
				"red-rooster-rri-sa10505-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "550 tr/min",
			"evidenceIds": [
				"red-rooster-rri-sa10505-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,02 kg",
			"evidenceIds": [
				"red-rooster-rri-sa10505-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"red-rooster-rri-sa10505-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "1/4\"",
			"evidenceIds": [
				"red-rooster-rri-sa10505-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-sa10505-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=29",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 29, réf. RRI-SA10505",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 7.5 L/s, convertis en 450 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-sa10505-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-06-followup:red-rooster-rri-sa10505:1",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=29",
			"sourceLabel": "Red Rooster, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Assemblagep29 :hex1/4,550rpm,0,8–5Nm/7,5Ls/1,02kg; suffixeW désignecarré3/8. Ni régime ni mesureà6,3bar explicités par la consigne générale:450Lmin non dimensionnants. SHA-256 du document complet : 6b7dca4923bfef1dbe2c7f6691e91e07f92fec5c1fa3b8d56f211ecbdb5e4845."
		},
		{
			"id": "review:2026-11-06-followup:red-rooster-rri-sa10505:2",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Red Rooster, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Assemblagep29 :hex1/4,550rpm,0,8–5Nm/7,5Ls/1,02kg; suffixeW désignecarré3/8. Ni régime ni mesureà6,3bar explicités par la consigne générale:450Lmin non dimensionnants. SHA-256 du document complet : f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rri-sa10505-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rri-sa10505-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rri-sa10505-20260926"
		],
		"recommendedHose": [
			"red-rooster-rri-sa10505-20260926"
		],
		"connectorSize": [
			"red-rooster-rri-sa10505-20260926"
		],
		"airflowBasis": [
			"review:2026-11-06-followup:red-rooster-rri-sa10505:1",
			"review:2026-11-06-followup:red-rooster-rri-sa10505:2"
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
		"innerDiameterMm": 6.5
	},
	"connectorSize": "1/4\"",
	"airflowBasis": "unqualified"
};

export default product;

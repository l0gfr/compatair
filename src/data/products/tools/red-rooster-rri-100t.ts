import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rri-100t",
	"slug": "red-rooster-rri-100t",
	"brand": "Red Rooster",
	"model": "RRI-100T",
	"mpn": "RRI-100T",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Red Rooster RRI-100T",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-100t.webp",
		"alt": "Repères techniques Red Rooster RRI-100T, référence RRI-100T",
		"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=21",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRI-100T. Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge. La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement. Référence fabricant : RRI-100T. Couple indicatif publié : 85 à 120 Nm. Vitesse à vide : 5300 tr/min. Entraînement : 1/2\" carré.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Référence fabricant : RRI-100T.",
			"Couple indicatif publié : 85 à 120 Nm.",
			"Vitesse à vide : 5300 tr/min.",
			"Entraînement : 1/2\" carré.",
			"Consommation de régime non précisé publiée : 522 L/min."
		],
		"limitations": [
			"Les couples indiqués sont des valeurs indicatives, sensibles à l’assemblage et à l’accessoire.",
			"La pression doit être vérifiée pendant le fonctionnement ; la pression statique du réservoir ne suffit pas.",
			"Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"red-rooster-rri-100t-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation de régime non précisé publiée : 522 L/min.",
			"evidenceIds": [
				"red-rooster-rri-100t-reserved-20261031-1",
				"red-rooster-rri-100t-reserved-20261031-2"
			]
		},
		{
			"label": "Couple indicatif publié",
			"value": "85 à 120 Nm",
			"evidenceIds": [
				"red-rooster-rri-100t-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5300 tr/min",
			"evidenceIds": [
				"red-rooster-rri-100t-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "1/2\" carré",
			"evidenceIds": [
				"red-rooster-rri-100t-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,9 kg",
			"evidenceIds": [
				"red-rooster-rri-100t-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "8 mm",
			"evidenceIds": [
				"red-rooster-rri-100t-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":522,\"typical\":522,\"max\":522},\"workingPressureBar\":{\"min\":6.3,\"typical\":6.3,\"max\":6.3}}",
			"evidenceIds": [
				"red-rooster-rri-100t-20260926",
				"red-rooster-rri-100t-reserved-20261031-1",
				"red-rooster-rri-100t-reserved-20261031-2"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-100t-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=21",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 21, réf. RRI-100T",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 8.7 L/s, convertis en 522 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-100t-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "red-rooster-rri-100t-reserved-20261031-1",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=21",
			"sourceLabel": "Red Rooster RRI-100T : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 6b7dca4923bfef1dbe2c7f6691e91e07f92fec5c1fa3b8d56f211ecbdb5e4845. Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge."
		},
		{
			"id": "red-rooster-rri-100t-reserved-20261031-2",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Red Rooster RRI-100T : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rri-100t-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rri-100t-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rri-100t-20260926"
		],
		"recommendedHose": [
			"red-rooster-rri-100t-20260926"
		],
		"airflowBasis": [
			"red-rooster-rri-100t-reserved-20261031-1",
			"red-rooster-rri-100t-reserved-20261031-2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 522,
		"typical": 522,
		"max": 522
	},
	"recommendedHose": {
		"innerDiameterMm": 8
	},
	"airflowBasis": "unqualified"
};

export default product;

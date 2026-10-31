import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-yla110e",
	"slug": "yokota-yla110e",
	"brand": "Yokota",
	"model": "YLA110E",
	"mpn": "YLA110E",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Yokota YLA110E",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 5,
		"typical": 6,
		"max": 6
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-yla110e.webp",
		"alt": "Repères techniques Yokota YLA110E, référence YLA110E",
		"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Yokota YLA110E. Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge. La plage du tableau Yokota va de 0,5 à 0,6 MPa, soit 5 à 6 bar ; le point de comparaison retenu est 6 bar. Référence fabricant : YLA110E. Couple indicatif publié : 65 à 105 Nm. Vitesse à vide : 6000 tr/min. Entraînement : 1/2\" carré.",
		"verifiedFacts": [
			"La plage du tableau Yokota va de 0,5 à 0,6 MPa, soit 5 à 6 bar ; le point de comparaison retenu est 6 bar.",
			"Référence fabricant : YLA110E.",
			"Couple indicatif publié : 65 à 105 Nm.",
			"Vitesse à vide : 6000 tr/min.",
			"Entraînement : 1/2\" carré.",
			"Consommation de régime non précisé publiée : 786 L/min."
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
			"value": "La plage du tableau Yokota va de 0,5 à 0,6 MPa, soit 5 à 6 bar ; le point de comparaison retenu est 6 bar.",
			"evidenceIds": [
				"yokota-yla110e-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation de régime non précisé publiée : 786 L/min.",
			"evidenceIds": [
				"yokota-yla110e-reserved-20261031-1",
				"yokota-yla110e-reserved-20261031-2"
			]
		},
		{
			"label": "Couple indicatif publié",
			"value": "65 à 105 Nm",
			"evidenceIds": [
				"yokota-yla110e-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6000 tr/min",
			"evidenceIds": [
				"yokota-yla110e-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "1/2\" carré",
			"evidenceIds": [
				"yokota-yla110e-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,4 kg",
			"evidenceIds": [
				"yokota-yla110e-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "9,5 mm",
			"evidenceIds": [
				"yokota-yla110e-20260926"
			]
		},
		{
			"label": "Consommation en charge / à vide",
			"value": "9.6 / 13.1 L/s",
			"evidenceIds": [
				"yokota-yla110e-20260926"
			]
		},
		{
			"label": "Observation historique conservée, hors calcul",
			"value": "{\"airflowLpm\":{\"min\":786,\"typical\":786,\"max\":786},\"workingPressureBar\":{\"min\":5,\"typical\":6,\"max\":6}}",
			"evidenceIds": [
				"yokota-yla110e-20260926",
				"yokota-yla110e-reserved-20261031-1",
				"yokota-yla110e-reserved-20261031-2"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-yla110e-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 17, réf. YLA110E",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Le maximum entre la consommation en charge et à vide est retenu : 13.1 L/s, convertis en 786 L/min par multiplication par 60."
		},
		{
			"id": "yokota-yla110e-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 17",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Condition de pression spécifique du tableau Yokota à impulsions."
		},
		{
			"id": "yokota-yla110e-reserved-20261031-1",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
			"sourceLabel": "Yokota YLA110E : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 6b7dca4923bfef1dbe2c7f6691e91e07f92fec5c1fa3b8d56f211ecbdb5e4845. Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge."
		},
		{
			"id": "yokota-yla110e-reserved-20261031-2",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=17",
			"sourceLabel": "Yokota YLA110E : relecture documentaire du 31 octobre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-31",
			"confidence": "B",
			"notes": "SHA-256 6b7dca4923bfef1dbe2c7f6691e91e07f92fec5c1fa3b8d56f211ecbdb5e4845. Le tableau Yokota/Red Rooster/Toku indique une consommation en L/s et une pression de service de 6,3 bar. Le régime de consommation n’est pas défini ; la valeur publiée ne sert pas à confirmer un besoin maximal en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"yokota-yla110e-20260926"
		],
		"workingPressureBar": [
			"yokota-yla110e-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-yla110e-20260926"
		],
		"recommendedHose": [
			"yokota-yla110e-20260926"
		],
		"airflowBasis": [
			"yokota-yla110e-reserved-20261031-1",
			"yokota-yla110e-reserved-20261031-2"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 786,
		"typical": 786,
		"max": 786
	},
	"recommendedHose": {
		"innerDiameterMm": 9.5
	},
	"airflowBasis": "unqualified"
};

export default product;

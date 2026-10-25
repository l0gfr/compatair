import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rri-100",
	"slug": "red-rooster-rri-100",
	"brand": "Red Rooster",
	"model": "RRI-100",
	"mpn": "RRI-100",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Red Rooster RRI-100",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rri-100.webp",
		"alt": "Repères techniques Red Rooster RRI-100, référence RRI-100",
		"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=23",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RRI-100 : visseuse hydrotension sans coupure d’air, carré 1/2 pouce et couple indicatif de 85 à 120 Nm. La RRI-100T ajoute la coupure d’air. Les deux lignes conservent 5 300 tr/min, 1,9 kg et 8,7 L/s, avec une entrée PT 1/4 pouce et un flexible intérieur de 8 mm.",
		"verifiedFacts": [
			"RRI-100 sans coupure contre RRI-100T avec coupure : même carré 1/2 pouce, couple indicatif 85–120 Nm, 5 300 tr/min, masse 1,9 kg et 8,7 L/s. Le suffixe T change la commande de coupure, pas le débit publié.",
			"Le régime de la consommation publiée n’est pas précisé ; cette valeur n’est pas assimilée à un maximum de travail."
		],
		"limitations": [
			"La table d’assemblage ne qualifie pas le régime de mesure des 8,7 L/s.",
			"La consigne générale de service du catalogue Powertools est conservée comme telle ; elle ne qualifie pas rétroactivement le protocole d’une autre brochure.",
			"Aucun cycle moyen ou économie d’air par assemblage n’est inventé depuis la présence d’une coupure."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"red-rooster-rri-100-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 8.7 L/s, convertis en 522 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rri-100-20260926"
			]
		},
		{
			"label": "Couple indicatif publié",
			"value": "85 à 120 Nm",
			"evidenceIds": [
				"red-rooster-rri-100-20260926"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5300 tr/min",
			"evidenceIds": [
				"red-rooster-rri-100-20260926"
			]
		},
		{
			"label": "Entraînement",
			"value": "1/2\" carré",
			"evidenceIds": [
				"red-rooster-rri-100-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,9 kg",
			"evidenceIds": [
				"red-rooster-rri-100-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "8 mm",
			"evidenceIds": [
				"red-rooster-rri-100-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rri-100-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=23",
			"sourceLabel": "Rami Yokota, catalogue assemblage 2026, p. 23, réf. RRI-100",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 8.7 L/s, convertis en 522 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rri-100-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review-20261025-red-rooster-rri-100-s069",
			"sourceUrl": "https://www.rami-yokota.com/media/godd0tdm/2026_fr_outils_d-assemblage_spreads.pdf#page=21",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s069, pages PDF 21, 23",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:38.741330+00:00, SHA-256 6b7dca4923bfef1dbe2c7f6691e91e07f92fec5c1fa3b8d56f211ecbdb5e4845. RRI-100 sans coupure contre RRI-100T avec coupure : même carré 1/2 pouce, couple indicatif 85–120 Nm, 5 300 tr/min, masse 1,9 kg et 8,7 L/s. Le suffixe T change la commande de coupure, pas le débit publié. Limite : Ajouter unqualified : la table d’assemblage ne qualifie pas le régime de mesure des 8,7 L/s."
		},
		{
			"id": "review-20261025-red-rooster-rri-100-s068",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s068, pages PDF 106",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:38.623086+00:00, SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. RRI-100 sans coupure contre RRI-100T avec coupure : même carré 1/2 pouce, couple indicatif 85–120 Nm, 5 300 tr/min, masse 1,9 kg et 8,7 L/s. Le suffixe T change la commande de coupure, pas le débit publié. Limite : Ajouter unqualified : la table d’assemblage ne qualifie pas le régime de mesure des 8,7 L/s."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rri-100-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rri-100-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rri-100-20260926",
			"review-20261025-red-rooster-rri-100-s069",
			"review-20261025-red-rooster-rri-100-s068"
		],
		"recommendedHose": [
			"red-rooster-rri-100-20260926"
		],
		"airflowBasis": [
			"review-20261025-red-rooster-rri-100-s069",
			"review-20261025-red-rooster-rri-100-s068"
		],
		"connectorSize": [
			"review-20261025-red-rooster-rri-100-s069",
			"review-20261025-red-rooster-rri-100-s068"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : Ajouter unqualified : la table d’assemblage ne qualifie pas le régime de mesure des 8,7 L/s."
	],
	"airflowLpm": {
		"min": 522,
		"typical": 522,
		"max": 522
	},
	"recommendedHose": {
		"innerDiameterMm": 8
	},
	"airflowBasis": "unqualified",
	"connectorSize": "PT 1/4\""
};

export default product;

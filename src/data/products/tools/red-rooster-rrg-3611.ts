import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rrg-3611",
	"slug": "red-rooster-rrg-3611",
	"brand": "Red Rooster",
	"model": "RRG-3611",
	"mpn": "RRG-3611",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Red Rooster RRG-3611",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rrg-3611.webp",
		"alt": "Repères techniques Red Rooster RRG-3611, référence RRG-3611",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=48",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RRG-3611 : ponceuse à bande de 10 × 330 mm, 0,28 kW et 20 000 tr/min. Le kit RRG-3617K contient la même machine avec deux bras de 6 et 10 × 330 mm. Le catalogue annonce dans les deux cas 6,7 L/s et 0,8 kg : le kit ne crée pas un nouveau besoin de compresseur.",
		"verifiedFacts": [
			"Le catalogue dit explicitement que RRG-3611 et RRG-3617K sont identiques : 20 000 tr/min, 0,28 kW, 0,8 kg et 6,7 L/s. La 3617K ajoute deux bras de 6 et 10 × 330 mm ; la 3611 est la version 10 × 330 mm.",
			"Le régime de la consommation publiée n’est pas précisé ; cette valeur n’est pas assimilée à un maximum de travail."
		],
		"limitations": [
			"Régime de la consommation non précisé."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"red-rooster-rrg-3611-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 6.7 L/s, convertis en 402 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rrg-3611-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "20000 tr/min",
			"evidenceIds": [
				"red-rooster-rrg-3611-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,8 kg",
			"evidenceIds": [
				"red-rooster-rrg-3611-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"red-rooster-rrg-3611-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rrg-3611-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rrg-3611-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=48",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 48, réf. RRG-3611",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 6.7 L/s, convertis en 402 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rrg-3611-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review-20261025-red-rooster-rrg-3611-s068",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=48",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s068, pages PDF 48, 106",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:38.623086+00:00, SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Le catalogue dit explicitement que RRG-3611 et RRG-3617K sont identiques : 20 000 tr/min, 0,28 kW, 0,8 kg et 6,7 L/s. La 3617K ajoute deux bras de 6 et 10 × 330 mm ; la 3611 est la version 10 × 330 mm. Limite : Ajouter unqualified : régime de la consommation non précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rrg-3611-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rrg-3611-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rrg-3611-20260926",
			"review-20261025-red-rooster-rrg-3611-s068"
		],
		"recommendedHose": [
			"red-rooster-rrg-3611-20260926"
		],
		"connectorSize": [
			"red-rooster-rrg-3611-20260926"
		],
		"airflowBasis": [
			"review-20261025-red-rooster-rrg-3611-s068"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : Ajouter unqualified : régime de la consommation non précisé."
	],
	"airflowLpm": {
		"min": 402,
		"typical": 402,
		"max": 402
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;

import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rrj-8205",
	"slug": "red-rooster-rrj-8205",
	"brand": "Red Rooster",
	"model": "RRJ-8205",
	"mpn": "RRJ-8205",
	"categoryId": "scie",
	"category": "scie",
	"label": "Red Rooster RRJ-8205",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rrj-8205.webp",
		"alt": "Repères techniques Red Rooster RRJ-8205, référence RRJ-8205",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=56",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RRJ-8205 : scie sabre donnée pour 10 mm d’acier et 12 mm d’aluminium, course de 25 mm à 5 000 coups/min. La RRJ-8210 est destinée aux matériaux fins : course de 10 mm à 9 500 coups/min, capacités de 3,1 et 3,9 mm. Les deux annoncent 2,8 L/s ; la masse passe de 1 à 0,5 kg.",
		"verifiedFacts": [
			"RRJ-8205 contre RRJ-8210 : capacités acier 10 et 3,1 mm, aluminium 12 et 3,9 mm ; courses 25 et 10 mm, cadences 5 000 et 9 500 coups/min. Débit publié identique de 2,8 L/s ; masses 1 et 0,5 kg.",
			"Le régime de la consommation publiée n’est pas précisé ; cette valeur n’est pas assimilée à un maximum de travail."
		],
		"limitations": [
			"Les 2,8 L/s ne sont pas qualifiés en charge ou au maximum.",
			"La capacité de coupe ne se déduit pas de la seule cadence ; conserver matériau, course et lame adaptée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"red-rooster-rrj-8205-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 2.8 L/s, convertis en 168 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rrj-8205-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1 kg",
			"evidenceIds": [
				"red-rooster-rrj-8205-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"red-rooster-rrj-8205-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rrj-8205-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rrj-8205-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=56",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 56, réf. RRJ-8205",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 2.8 L/s, convertis en 168 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rrj-8205-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review-20261025-red-rooster-rrj-8205-s068",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=56",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s068, pages PDF 56, 106",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:38.623086+00:00, SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. RRJ-8205 contre RRJ-8210 : capacités acier 10 et 3,1 mm, aluminium 12 et 3,9 mm ; courses 25 et 10 mm, cadences 5 000 et 9 500 coups/min. Débit publié identique de 2,8 L/s ; masses 1 et 0,5 kg. Limite : Ajouter unqualified : les 2,8 L/s ne sont pas qualifiés en charge ou au maximum."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rrj-8205-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rrj-8205-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rrj-8205-20260926",
			"review-20261025-red-rooster-rrj-8205-s068"
		],
		"recommendedHose": [
			"red-rooster-rrj-8205-20260926"
		],
		"connectorSize": [
			"red-rooster-rrj-8205-20260926"
		],
		"airflowBasis": [
			"review-20261025-red-rooster-rrj-8205-s068"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : Ajouter unqualified : les 2,8 L/s ne sont pas qualifiés en charge ou au maximum."
	],
	"airflowLpm": {
		"min": 168,
		"typical": 168,
		"max": 168
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;

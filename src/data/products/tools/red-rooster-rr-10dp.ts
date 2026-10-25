import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rr-10dp",
	"slug": "red-rooster-rr-10dp",
	"brand": "Red Rooster",
	"model": "RR-10DP",
	"mpn": "RR-10DP",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Red Rooster RR-10DP",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rr-10dp.webp",
		"alt": "Repères techniques Red Rooster RR-10DP, référence RR-10DP",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RR-10DP : perceuse pistolet réversible, capacité acier de 10 mm et 1 800 tr/min. La RR-13DP monte à 13 mm à 800 tr/min. Le moteur de 0,35 kW, les 8 L/s publiés et le flexible intérieur de 10 mm sont communs ; la masse passe de 1,1 à 1,3 kg.",
		"verifiedFacts": [
			"RR-10DP contre RR-13DP : capacités acier 10 et 13 mm, vitesses 1 800 et 800 tr/min, masses 1,1 et 1,3 kg. Puissance 0,35 kW et consommation 8 L/s identiques ; toutes deux réversibles.",
			"Le régime de la consommation publiée n’est pas précisé ; cette valeur n’est pas assimilée à un maximum de travail."
		],
		"limitations": [
			"8 L/s n’est pas qualifié de maximum ni de débit en charge.",
			"Le mandrin est fileté 3/8-24 UNF ; il ne faut pas le confondre avec l’entrée d’air PT 1/4."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"red-rooster-rr-10dp-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 8 L/s, convertis en 480 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rr-10dp-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "1800 tr/min",
			"evidenceIds": [
				"red-rooster-rr-10dp-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,1 kg",
			"evidenceIds": [
				"red-rooster-rr-10dp-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"red-rooster-rr-10dp-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rr-10dp-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rr-10dp-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 42, réf. RR-10DP",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 8 L/s, convertis en 480 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rr-10dp-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review-20261025-red-rooster-rr-10dp-s068",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s068, pages PDF 42, 106",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:38.623086+00:00, SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. RR-10DP contre RR-13DP : capacités acier 10 et 13 mm, vitesses 1 800 et 800 tr/min, masses 1,1 et 1,3 kg. Puissance 0,35 kW et consommation 8 L/s identiques ; toutes deux réversibles. Limite : Ajouter unqualified : 8 L/s n’est pas qualifié de maximum ni de débit en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rr-10dp-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rr-10dp-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rr-10dp-20260926",
			"review-20261025-red-rooster-rr-10dp-s068"
		],
		"recommendedHose": [
			"red-rooster-rr-10dp-20260926"
		],
		"connectorSize": [
			"red-rooster-rr-10dp-20260926"
		],
		"airflowBasis": [
			"review-20261025-red-rooster-rr-10dp-s068"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : Ajouter unqualified : 8 L/s n’est pas qualifié de maximum ni de débit en charge."
	],
	"airflowLpm": {
		"min": 480,
		"typical": 480,
		"max": 480
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;

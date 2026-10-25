import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rrg-1000re",
	"slug": "red-rooster-rrg-1000re",
	"brand": "Red Rooster",
	"model": "RRG-1000RE",
	"mpn": "RRG-1000RE",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Red Rooster RRG-1000RE",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rrg-1000re.webp",
		"alt": "Repères techniques Red Rooster RRG-1000RE, référence RRG-1000RE",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=44",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RRG-1000RE : meuleuse droite de 0,74 kW à 22 000 tr/min, pince standard de 6 mm et masse de 0,8 kg. La RRG-1000REL partage ces valeurs et les 11 L/s publiés, mais pèse 1,2 kg. Une pince de 8 mm est disponible sur demande ; elle ne décrit pas l’équipement standard.",
		"verifiedFacts": [
			"RRG-1000RE contre RRG-1000REL : mêmes 0,74 kW, 22 000 tr/min, pince standard 6 mm et 11 L/s ; masses 0,8 et 1,2 kg. Le mandrin 8 mm est sur demande. La longueur d’axe des autres modèles REL n’est pas transférée.",
			"Le régime de la consommation publiée n’est pas précisé ; cette valeur n’est pas assimilée à un maximum de travail."
		],
		"limitations": [
			"La consommation de 11 L/s n’est pas qualifiée en charge ou au maximum.",
			"Les longueurs d’axe de 116 et 180 mm de la note concernent RRG-260REL et RRG-541REL, pas RRG-1000REL."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"red-rooster-rrg-1000re-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 11 L/s, convertis en 660 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rrg-1000re-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "22000 tr/min",
			"evidenceIds": [
				"red-rooster-rrg-1000re-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,8 kg",
			"evidenceIds": [
				"red-rooster-rrg-1000re-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"red-rooster-rrg-1000re-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rrg-1000re-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rrg-1000re-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=44",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 44, réf. RRG-1000RE",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 11 L/s, convertis en 660 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rrg-1000re-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review-20261025-red-rooster-rrg-1000re-s068",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=44",
			"sourceLabel": "Relecture fabricant du 25 octobre 2026, s068, pages PDF 44, 106",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-25",
			"confidence": "B",
			"notes": "Relecture des octets complets récupérés le 2026-10-25T07:20:38.623086+00:00, SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. RRG-1000RE contre RRG-1000REL : mêmes 0,74 kW, 22 000 tr/min, pince standard 6 mm et 11 L/s ; masses 0,8 et 1,2 kg. Le mandrin 8 mm est sur demande. La longueur d’axe des autres modèles REL n’est pas transférée. Limite : Ajouter unqualified : la consommation de 11 L/s n’est pas qualifiée en charge ou au maximum."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rrg-1000re-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rrg-1000re-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rrg-1000re-20260926",
			"review-20261025-red-rooster-rrg-1000re-s068"
		],
		"recommendedHose": [
			"red-rooster-rrg-1000re-20260926"
		],
		"connectorSize": [
			"red-rooster-rrg-1000re-20260926"
		],
		"airflowBasis": [
			"review-20261025-red-rooster-rrg-1000re-s068"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir.",
		"Relecture proposée du 25 octobre 2026 : Ajouter unqualified : la consommation de 11 L/s n’est pas qualifiée en charge ou au maximum."
	],
	"airflowLpm": {
		"min": 660,
		"typical": 660,
		"max": 660
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;

import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-10rds-2500",
	"slug": "red-rooster-10rds-2500",
	"brand": "Red Rooster",
	"model": "10RDS-2500",
	"mpn": "10RDS-2500",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Red Rooster 10RDS-2500",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-10rds-2500.webp",
		"alt": "Repères techniques Red Rooster 10RDS-2500, référence 10RDS-2500",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "10RDS-2500 : perceuse droite à sortie 3/8-24 UNF, capacité acier annoncée de 10 mm et 2 500 tr/min. La 10RDS-4000 voisine tourne à 4 000 tr/min ; les deux donnent 0,37 kW, 1,1 kg et 3,5 L/s à 6,3 bar, soit 210 L/min. La vitesse adaptée au foret et à la matière doit être choisie séparément d’une consommation identique.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 3.5 L/s, convertis en 210 L/min par multiplication par 60.",
			"Référence fabricant : 10RDS-2500.",
			"Vitesse à vide publiée : 2500 tr/min.",
			"Masse publiée : 1,1 kg.",
			"Diamètre intérieur de flexible conseillé : 6,5 mm."
		],
		"limitations": [
			"Le tableau ne qualifie pas le régime de consommation. La pression de service est mesurée au moteur en marche, et la consommation n’est pas transformée en maximum en charge.",
			"Les couples indiqués sont des valeurs indicatives, sensibles à l’assemblage et à l’accessoire.",
			"La pression doit être vérifiée pendant le fonctionnement ; la pression statique du réservoir ne suffit pas."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"red-rooster-10rds-2500-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 3.5 L/s, convertis en 210 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-10rds-2500-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "2500 tr/min",
			"evidenceIds": [
				"red-rooster-10rds-2500-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,1 kg",
			"evidenceIds": [
				"red-rooster-10rds-2500-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"red-rooster-10rds-2500-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-10rds-2500-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-10rds-2500-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 42, réf. 10RDS-2500",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 3.5 L/s, convertis en 210 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-10rds-2500-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "red-rooster-10rds-4000-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=42",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 42, réf. 10RDS-4000",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 3.5 L/s, convertis en 210 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-10rds-4000-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-10rds-2500-20260926"
		],
		"workingPressureBar": [
			"red-rooster-10rds-2500-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-10rds-2500-20260926"
		],
		"recommendedHose": [
			"red-rooster-10rds-2500-20260926"
		],
		"connectorSize": [
			"red-rooster-10rds-2500-20260926"
		],
		"airflowBasis": [
			"red-rooster-10rds-2500-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 210,
		"typical": 210,
		"max": 210
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;

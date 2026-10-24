import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rr-476",
	"slug": "red-rooster-rr-476",
	"brand": "Red Rooster",
	"model": "RR-476",
	"mpn": "RR-476",
	"categoryId": "scie",
	"category": "scie",
	"label": "Red Rooster RR-476",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rr-476.webp",
		"alt": "Repères techniques Red Rooster RR-476, référence RR-476",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=60",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "RR-476 est un couteau universel à mouvement oscillant réglable de 0 à 22 000 oscillations/min, utilisable comme scie, coupe-vitres ou ponceuse selon l’accessoire monté. La RRJ-8205 voisine est une scie sabre à 5 000 coups/min et course de 25 mm : mouvement et montage de lame diffèrent. Le catalogue associe la lame 475101 du RR-476 à une coupe d’acier de 1 mm ; cette capacité ne se transfère pas aux autres accessoires. Il donne 6,5 l/s, soit 390 l/min, pour RR-476 contre 2,8 l/s pour RRJ-8205, sans régime de mesure précisé ; la consigne générale est de 6,3 bar en fonctionnement.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 6.5 L/s, convertis en 390 L/min par multiplication par 60.",
			"Référence fabricant : RR-476.",
			"Masse publiée : 1,1 kg.",
			"Diamètre intérieur de flexible conseillé : 6,5 mm.",
			"Raccord pneumatique : PT 1/4\"."
		],
		"limitations": [
			"Les couples indiqués sont des valeurs indicatives, sensibles à l’assemblage et à l’accessoire.",
			"La pression doit être vérifiée pendant le fonctionnement ; la pression statique du réservoir ne suffit pas."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"red-rooster-rr-476-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 6.5 L/s, convertis en 390 L/min par multiplication par 60.",
			"evidenceIds": [
				"red-rooster-rr-476-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,1 kg",
			"evidenceIds": [
				"red-rooster-rr-476-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "6,5 mm",
			"evidenceIds": [
				"red-rooster-rr-476-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"red-rooster-rr-476-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rr-476-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=60",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 60, réf. RR-476",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 6.5 L/s, convertis en 390 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rr-476-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
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
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rr-476-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rr-476-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rr-476-20260926"
		],
		"recommendedHose": [
			"red-rooster-rr-476-20260926"
		],
		"connectorSize": [
			"red-rooster-rr-476-20260926"
		],
		"airflowBasis": [
			"red-rooster-rr-476-20260926"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 390,
		"typical": 390,
		"max": 390
	},
	"recommendedHose": {
		"innerDiameterMm": 6.5
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;

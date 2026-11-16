import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "yokota-gs-2efs",
	"slug": "yokota-gs-2efs",
	"brand": "Yokota",
	"model": "GS-2EFS",
	"mpn": "GS-2EFS",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Yokota GS-2EFS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/yokota-gs-2efs-technical-20261116-reviews.svg",
		"alt": "Repères techniques Yokota GS-2EFS, référence GS-2EFS",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "La GS-2EFS emploie une meule de 65 × 13 × 9,5 mm à 14 000 tr/min. La TSG-3L passe au diamètre 75 mm et à 11 500 tr/min. Le catalogue autorise aussi un usage avec pince par l’accessoire 1104-0661-01-99, à commander séparément. Les 10 L/s publiés n’ont pas de régime établi : ils restent hors du calcul de compatibilité.",
		"verifiedFacts": [
			"La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"Consommation publiée : 10 L/s, convertis en 600 L/min par multiplication par 60.",
			"Référence fabricant : GS-2EFS.",
			"Vitesse à vide publiée : 14000 tr/min.",
			"Masse publiée : 1,3 kg.",
			"Diamètre intérieur de flexible conseillé : 10 mm."
		],
		"limitations": [
			"Les couples indiqués sont des valeurs indicatives, sensibles à l’assemblage et à l’accessoire.",
			"La pression doit être vérifiée pendant le fonctionnement ; la pression statique du réservoir ne suffit pas.",
			"La pression de service n’atteste pas la pression de mesure de consommation. Le régime ou l’appariement documentaire reste non qualifié ; aucune consommation dimensionnante n’est conservée."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "La notice générale du catalogue prescrit 0,63 MPa, soit 6,3 bar mesurés au moteur en fonctionnement.",
			"evidenceIds": [
				"yokota-gs-2efs-20260926-workingpressurebar-1"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation publiée : 10 L/s, convertis en 600 L/min par multiplication par 60.",
			"evidenceIds": [
				"yokota-gs-2efs-20260926"
			]
		},
		{
			"label": "Vitesse à vide publiée",
			"value": "14000 tr/min",
			"evidenceIds": [
				"yokota-gs-2efs-20260926"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,3 kg",
			"evidenceIds": [
				"yokota-gs-2efs-20260926"
			]
		},
		{
			"label": "Diamètre intérieur de flexible conseillé",
			"value": "10 mm",
			"evidenceIds": [
				"yokota-gs-2efs-20260926"
			]
		},
		{
			"label": "Raccord pneumatique",
			"value": "PT 1/4\"",
			"evidenceIds": [
				"yokota-gs-2efs-20260926"
			]
		}
	],
	"evidence": [
		{
			"id": "yokota-gs-2efs-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 45, réf. GS-2EFS",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 10 L/s, convertis en 600 L/min par multiplication par 60."
		},
		{
			"id": "yokota-gs-2efs-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "review:2026-11-16-reviews:yokota-gs-2efs:0",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf",
			"sourceLabel": "Yokota, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La GS-2EFS emploie une meule de 65 × 13 × 9,5 mm à 14 000 tr/min. La TSG-3L passe au diamètre 75 mm et à 11 500 tr/min. Le catalogue autorise aussi un usage avec pince par l’accessoire 1104-0661-01-99, à commander séparément. Les 10 L/s publiés n’ont pas de régime établi : ils restent hors du calcul de compatibilité. GET complet SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. Pages PDF lues : 45, 106."
		}
	],
	"fieldSources": {
		"mpn": [
			"yokota-gs-2efs-20260926"
		],
		"workingPressureBar": [
			"yokota-gs-2efs-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"yokota-gs-2efs-20260926"
		],
		"recommendedHose": [
			"yokota-gs-2efs-20260926"
		],
		"connectorSize": [
			"yokota-gs-2efs-20260926"
		],
		"airflowBasis": [
			"review:2026-11-16-reviews:yokota-gs-2efs:0"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;

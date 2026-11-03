import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "red-rooster-rrg-1046al",
	"slug": "red-rooster-rrg-1046al",
	"brand": "Red Rooster",
	"model": "RRG-1046AL",
	"mpn": "RRG-1046AL",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Red Rooster RRG-1046AL",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/red-rooster-rrg-1046al.webp",
		"alt": "Repères techniques Red Rooster RRG-1046AL, référence RRG-1046AL",
		"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "Red Rooster RRG-1046AL. La RRG-1046AL est le modèle pour disque mince de 100 mm, 0,8–1,0 mm d’épaisseur, alésage 16 mm et broche M6. La RRG-2134 est donnée pour 100 mm jusqu’à 6 mm d’épaisseur et broche M10 × 1,5. Le choix du disque et du montage est documenté ; la table ne précise pas le régime des 14 L/s.",
		"verifiedFacts": [
			"Disque : 100 × (0,8–1,0) × 16 mm.",
			"Broche : M6.",
			"Puissance : 0,76 kW.",
			"Vitesse à vide : 14 000 tr/min.",
			"Consommation publiée, régime non précisé : 14 L/s."
		],
		"limitations": [
			"Consommation conservée avec son unité et son régime non précisé ; aucune mesure maximale/en charge appariée à la pression n’est déduite de la consigne de service.",
			"Catalogue historique identifié ; référence et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Disque",
			"value": "100 × (0,8–1,0) × 16 mm",
			"evidenceIds": [
				"red-rooster-rrg-1046al-reserved-20261103-1"
			]
		},
		{
			"label": "Broche",
			"value": "M6",
			"evidenceIds": [
				"red-rooster-rrg-1046al-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "0,76 kW",
			"evidenceIds": [
				"red-rooster-rrg-1046al-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "14 000 tr/min",
			"evidenceIds": [
				"red-rooster-rrg-1046al-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation publiée, régime non précisé",
			"value": "14 L/s",
			"evidenceIds": [
				"red-rooster-rrg-1046al-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "red-rooster-rrg-1046al-20260926",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 45, réf. RRG-1046AL",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Consommation publiée : 14 L/s, convertis en 840 L/min par multiplication par 60."
		},
		{
			"id": "red-rooster-rrg-1046al-20260926-workingpressurebar-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=106",
			"sourceLabel": "Rami Yokota, catalogue des outils pneumatiques, p. 106",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Pression de service dynamique, explicitement mesurée au moteur en fonctionnement dans les consignes du catalogue."
		},
		{
			"id": "red-rooster-rrg-1046al-reserved-20261103-1",
			"sourceUrl": "https://www.rami-yokota.com/media/mpnb45zf/powertools_spread_fr.pdf#page=45",
			"sourceLabel": "Red Rooster : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 f22d1a57dc63da65a76cb6ba58b2c7f43dba3dbb28ee9032eca6ab1e1fa99c0e. La RRG-1046AL est le modèle pour disque mince de 100 mm, 0,8–1,0 mm d’épaisseur, alésage 16 mm et broche M6. La RRG-2134 est donnée pour 100 mm jusqu’à 6 mm d’épaisseur et broche M10 × 1,5. Le choix du disque et du montage est documenté ; la table ne précise pas le régime des 14 L/s."
		}
	],
	"fieldSources": {
		"mpn": [
			"red-rooster-rrg-1046al-20260926"
		],
		"workingPressureBar": [
			"red-rooster-rrg-1046al-20260926-workingpressurebar-1"
		],
		"airflowLpm": [
			"red-rooster-rrg-1046al-20260926"
		],
		"recommendedHose": [
			"red-rooster-rrg-1046al-20260926"
		],
		"connectorSize": [
			"red-rooster-rrg-1046al-20260926"
		],
		"airflowBasis": [
			"red-rooster-rrg-1046al-reserved-20261103-1"
		],
		"editorial": [
			"red-rooster-rrg-1046al-reserved-20261103-1"
		],
		"specifications": [
			"red-rooster-rrg-1046al-reserved-20261103-1"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 840,
		"typical": 840,
		"max": 840
	},
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"connectorSize": "PT 1/4\"",
	"airflowBasis": "unqualified"
};

export default product;

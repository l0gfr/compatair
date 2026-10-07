import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-max-nf255fa-18",
	"slug": "agrafeuse-cloueuse-max-nf255fa-18",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "MAX NF255FA/18",
	"brand": "MAX",
	"model": "NF255FA/18",
	"mpn": "NF255FA/18",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 6.895,
		"typical": 6.895,
		"max": 6.895
	},
	"airPerActionLiters": 0.68,
	"actionLabel": "cycle de pose",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-max-nf255fa-18.webp",
		"alt": "Repères techniques : MAX NF255FA/18",
		"sourceUrl": "https://www.maxusacorp.com/nailers_compressors/products/nf255fa-18/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "max-nf255fa-18",
		"label": "Référence NF255FA/18",
		"distinguishingAttributes": {
			"reference": "NF255FA/18",
			"AIR INLET SIZE": "1/4\"",
			"MAGAZINE CAPACITY": "100"
		}
	},
	"editorial": {
		"overview": "MAX NF255FA/18. Volume déclaré : 0,68 L par cycle à 6,895 bar ; la cadence doit être renseignée. AIR INLET SIZE : 1/4\". MAGAZINE CAPACITY : 100.",
		"verifiedFacts": [
			"AIR INLET SIZE : 1/4\".",
			"MAGAZINE CAPACITY : 100.",
			"COLLATION TYPE : Glue.",
			"NAIL GUN ANGLE : Straight.",
			"STRIP OR COIL : Strip.",
			"MINIMUM FASTENER SIZE : 5/8\".",
			"MAXIMUM FASTENER SIZE : 2-3/16\"."
		],
		"limitations": [
			"Une cadence déclarée permet le calcul moyen ; la pointe instantanée de déclenchement reste distincte.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "AIR INLET SIZE",
			"value": "1/4\"",
			"evidenceIds": [
				"october2-tools-max-pdp-27-p1"
			]
		},
		{
			"label": "MAGAZINE CAPACITY",
			"value": "100",
			"evidenceIds": [
				"october2-tools-max-pdp-27-p1"
			]
		},
		{
			"label": "COLLATION TYPE",
			"value": "Glue",
			"evidenceIds": [
				"october2-tools-max-pdp-27-p1"
			]
		},
		{
			"label": "NAIL GUN ANGLE",
			"value": "Straight",
			"evidenceIds": [
				"october2-tools-max-pdp-27-p1"
			]
		},
		{
			"label": "STRIP OR COIL",
			"value": "Strip",
			"evidenceIds": [
				"october2-tools-max-pdp-27-p1"
			]
		},
		{
			"label": "MINIMUM FASTENER SIZE",
			"value": "5/8\"",
			"evidenceIds": [
				"october2-tools-max-pdp-27-p1"
			]
		},
		{
			"label": "MAXIMUM FASTENER SIZE",
			"value": "2-3/16\"",
			"evidenceIds": [
				"october2-tools-max-pdp-27-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "100 psi operating pressure : point de consommation de la brochure fabricant liée au modèle.",
			"evidenceIds": [
				"october2-tools-max-pdp-27-p1",
				"october2-tools-max-pdp-27-brochure-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "0.024 ft3/cycle",
			"evidenceIds": [
				"october2-tools-max-pdp-27-p1",
				"october2-tools-max-pdp-27-brochure-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-max-pdp-27-p1",
			"sourceUrl": "https://www.maxusacorp.com/nailers_compressors/products/nf255fa-18/",
			"sourceLabel": "MAX USA, fiche produit fabricant max-pdp-27",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b5c2e7db687b7cbc7a12a0e00950b436bffcdc57665df0f05fe92f27a8360cb3. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "october2-tools-max-pdp-27-brochure-p1",
			"sourceUrl": "https://www.maxusacorp.com/wp-content/uploads/100PSI_NF255FA-18_Brochure.pdf#page=1",
			"sourceLabel": "MAX USA, brochure du modèle max-pdp-27-brochure, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 6eaee2598415112de558098588af8b4d3034ac22101a65bdfddf76073fb3d427. Document complémentaire de la référence exacte, sans essai CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-max-pdp-27-p1"
		],
		"workingPressureBar": [
			"october2-tools-max-pdp-27-p1",
			"october2-tools-max-pdp-27-brochure-p1"
		],
		"airPerActionLiters": [
			"october2-tools-max-pdp-27-p1",
			"october2-tools-max-pdp-27-brochure-p1"
		],
		"actionLabel": [
			"october2-tools-max-pdp-27-p1",
			"october2-tools-max-pdp-27-brochure-p1"
		]
	},
	"notes": [
		"Volume déclaré : 0,68 L par cycle à 6,895 bar ; la cadence doit être renseignée."
	]
};

export default product;

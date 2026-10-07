import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-max-ta551b-16-11",
	"slug": "agrafeuse-cloueuse-max-ta551b-16-11",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "MAX TA551B/16-11",
	"brand": "MAX",
	"model": "TA551B/16-11",
	"mpn": "TA551B/16-11",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airPerActionLiters": 1.104,
	"actionLabel": "cycle de pose",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-max-ta551b-16-11.webp",
		"alt": "Repères techniques : MAX TA551B/16-11",
		"sourceUrl": "https://www.maxusacorp.com/nailers_compressors/products/ta551b-16-11/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "max-ta551b-16-11",
		"label": "Référence TA551B/16-11",
		"distinguishingAttributes": {
			"reference": "TA551B/16-11",
			"AIR INLET SIZE": "1/4\"",
			"MAGAZINE CAPACITY": "157"
		}
	},
	"editorial": {
		"overview": "MAX TA551B/16-11. Volume déclaré : 1,104 L par cycle à 6,205 bar ; la cadence doit être renseignée. AIR INLET SIZE : 1/4\". MAGAZINE CAPACITY : 157.",
		"verifiedFacts": [
			"AIR INLET SIZE : 1/4\".",
			"MAGAZINE CAPACITY : 157.",
			"COLLATION TYPE : Glue.",
			"NAIL GUN ANGLE : Straight.",
			"STRIP OR COIL : Strip.",
			"MINIMUM FASTENER SIZE : 1\".",
			"MAXIMUM FASTENER SIZE : 2\"."
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
				"october2-tools-max-pdp-28-p1"
			]
		},
		{
			"label": "MAGAZINE CAPACITY",
			"value": "157",
			"evidenceIds": [
				"october2-tools-max-pdp-28-p1"
			]
		},
		{
			"label": "COLLATION TYPE",
			"value": "Glue",
			"evidenceIds": [
				"october2-tools-max-pdp-28-p1"
			]
		},
		{
			"label": "NAIL GUN ANGLE",
			"value": "Straight",
			"evidenceIds": [
				"october2-tools-max-pdp-28-p1"
			]
		},
		{
			"label": "STRIP OR COIL",
			"value": "Strip",
			"evidenceIds": [
				"october2-tools-max-pdp-28-p1"
			]
		},
		{
			"label": "MINIMUM FASTENER SIZE",
			"value": "1\"",
			"evidenceIds": [
				"october2-tools-max-pdp-28-p1"
			]
		},
		{
			"label": "MAXIMUM FASTENER SIZE",
			"value": "2\"",
			"evidenceIds": [
				"october2-tools-max-pdp-28-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "90 psi operating pressure : point de consommation de la brochure fabricant liée au modèle.",
			"evidenceIds": [
				"october2-tools-max-pdp-28-p1",
				"october2-tools-max-pdp-28-brochure-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "0.039 ft3/cycle",
			"evidenceIds": [
				"october2-tools-max-pdp-28-p1",
				"october2-tools-max-pdp-28-brochure-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-max-pdp-28-p1",
			"sourceUrl": "https://www.maxusacorp.com/nailers_compressors/products/ta551b-16-11/",
			"sourceLabel": "MAX USA, fiche produit fabricant max-pdp-28",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 74622fba72d8782e263f7b035403d8e00b1b25030c7097977129f75b9b782d5f. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "october2-tools-max-pdp-28-brochure-p1",
			"sourceUrl": "https://www.maxusacorp.com/wp-content/uploads/TA551B-16-11.pdf#page=1",
			"sourceLabel": "MAX USA, brochure du modèle max-pdp-28-brochure, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : f931157d389ee8d95fafe7c922e3074e4f3441490f893844144ea78b48ff867e. Document complémentaire de la référence exacte, sans essai CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-max-pdp-28-p1"
		],
		"workingPressureBar": [
			"october2-tools-max-pdp-28-p1",
			"october2-tools-max-pdp-28-brochure-p1"
		],
		"airPerActionLiters": [
			"october2-tools-max-pdp-28-p1",
			"october2-tools-max-pdp-28-brochure-p1"
		],
		"actionLabel": [
			"october2-tools-max-pdp-28-p1",
			"october2-tools-max-pdp-28-brochure-p1"
		]
	},
	"notes": [
		"Volume déclaré : 1,104 L par cycle à 6,205 bar ; la cadence doit être renseignée."
	]
};

export default product;

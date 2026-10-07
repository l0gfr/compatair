import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-max-cn445r3",
	"slug": "agrafeuse-cloueuse-max-cn445r3",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "MAX CN445R3",
	"brand": "MAX",
	"model": "CN445R3",
	"mpn": "CN445R3",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airPerActionLiters": 1.303,
	"actionLabel": "cycle de pose",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-max-cn445r3.webp",
		"alt": "Repères techniques : MAX CN445R3",
		"sourceUrl": "https://www.maxusacorp.com/nailers_compressors/products/roofing-coil-nailer-cn445r3-superroofer/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "max-cn445r3",
		"label": "Référence CN445R3",
		"distinguishingAttributes": {
			"reference": "CN445R3",
			"AIR INLET SIZE": "1/4\"",
			"MAGAZINE CAPACITY": "120"
		}
	},
	"editorial": {
		"overview": "MAX CN445R3. Volume déclaré : 1,303 L par cycle à 6,205 bar ; la cadence doit être renseignée. AIR INLET SIZE : 1/4\". MAGAZINE CAPACITY : 120.",
		"verifiedFacts": [
			"AIR INLET SIZE : 1/4\".",
			"MAGAZINE CAPACITY : 120.",
			"COLLATION TYPE : Wire.",
			"NAIL GUN ANGLE : 15.",
			"STRIP OR COIL : Coil.",
			"MINIMUM FASTENER SIZE : 3/4\".",
			"MAXIMUM FASTENER SIZE : 1-3/4\".",
			"MAXIMUM NAIL DIAMETER : .120\"."
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
				"october2-tools-max-pdp-20-p1"
			]
		},
		{
			"label": "MAGAZINE CAPACITY",
			"value": "120",
			"evidenceIds": [
				"october2-tools-max-pdp-20-p1"
			]
		},
		{
			"label": "COLLATION TYPE",
			"value": "Wire",
			"evidenceIds": [
				"october2-tools-max-pdp-20-p1"
			]
		},
		{
			"label": "NAIL GUN ANGLE",
			"value": "15",
			"evidenceIds": [
				"october2-tools-max-pdp-20-p1"
			]
		},
		{
			"label": "STRIP OR COIL",
			"value": "Coil",
			"evidenceIds": [
				"october2-tools-max-pdp-20-p1"
			]
		},
		{
			"label": "MINIMUM FASTENER SIZE",
			"value": "3/4\"",
			"evidenceIds": [
				"october2-tools-max-pdp-20-p1"
			]
		},
		{
			"label": "MAXIMUM FASTENER SIZE",
			"value": "1-3/4\"",
			"evidenceIds": [
				"october2-tools-max-pdp-20-p1"
			]
		},
		{
			"label": "MAXIMUM NAIL DIAMETER",
			"value": ".120\"",
			"evidenceIds": [
				"october2-tools-max-pdp-20-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "90 psi operating pressure : consommation de la colonne exacte du manuel fabricant, page PDF 5.",
			"evidenceIds": [
				"october2-tools-max-pdp-20-p1",
				"october2-tools-max-cn890f3-manual-p5"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "0.046 ft3/cycle",
			"evidenceIds": [
				"october2-tools-max-pdp-20-p1",
				"october2-tools-max-cn890f3-manual-p5"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-max-pdp-20-p1",
			"sourceUrl": "https://www.maxusacorp.com/nailers_compressors/products/roofing-coil-nailer-cn445r3-superroofer/",
			"sourceLabel": "MAX USA, fiche produit fabricant max-pdp-20",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : e74a5865b26d137bab76351cb4eccc7c32f5c9e293e5e66f52de3f4a51e916f6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "october2-tools-max-cn890f3-manual-p5",
			"sourceUrl": "https://www.maxusacorp.com/wp-content/uploads/%E3%80%90%E5%AE%8C%E6%88%90%E7%89%88%E3%80%91_CN890F_5L_c6_250822_MAX.pdf#page=5",
			"sourceLabel": "MAX USA, manuel commun des cloueurs CN, anglais, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 158f081891729d5e86313ad16b99ed0ab724afec6c05fc26ffa7c9dd84ad0fd8. Document complémentaire de la référence exacte, sans essai CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-max-pdp-20-p1"
		],
		"workingPressureBar": [
			"october2-tools-max-pdp-20-p1",
			"october2-tools-max-cn890f3-manual-p5"
		],
		"airPerActionLiters": [
			"october2-tools-max-pdp-20-p1",
			"october2-tools-max-cn890f3-manual-p5"
		],
		"actionLabel": [
			"october2-tools-max-pdp-20-p1",
			"october2-tools-max-cn890f3-manual-p5"
		]
	},
	"notes": [
		"Volume déclaré : 1,303 L par cycle à 6,205 bar ; la cadence doit être renseignée."
	]
};

export default product;

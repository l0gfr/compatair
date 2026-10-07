import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-metabo-hpt-nt50af",
	"slug": "agrafeuse-cloueuse-metabo-hpt-nt50af",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Metabo HPT NT50AF",
	"brand": "Metabo HPT",
	"model": "NT50AF",
	"mpn": "NT50AF",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 5.5,
		"typical": 5.5,
		"max": 5.5
	},
	"airPerActionLiters": 1.64,
	"actionLabel": "cycle de pose",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-metabo-hpt-nt50af.webp",
		"alt": "Repères techniques : Metabo HPT NT50AF",
		"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/397448739fdd426cafde1de1a1598d80.pdf?sfvrsn=bba90a9f_1",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "metabo-hpt-nt50af",
		"label": "Référence NT50AF",
		"distinguishingAttributes": {
			"reference": "NT50AF",
			"Masse déclarée": "4.1 kg",
			"Dimensions L × H × l déclarées": "457 × 476 × 79 mm"
		}
	},
	"editorial": {
		"overview": "Metabo HPT NT50AF. Volume déclaré : 1,64 L par cycle à 5,5 bar ; la cadence doit être renseignée. Masse déclarée : 4.1 kg. Dimensions L × H × l déclarées : 457 × 476 × 79 mm.",
		"verifiedFacts": [
			"Masse déclarée : 4.1 kg.",
			"Dimensions L × H × l déclarées : 457 × 476 × 79 mm.",
			"Capacité du chargeur déclarée : 150 clous."
		],
		"limitations": [
			"Une cadence déclarée permet le calcul moyen ; la pointe instantanée de déclenchement reste distincte.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse déclarée",
			"value": "4.1 kg",
			"evidenceIds": [
				"october3c-tools-hpt-nt50af-n5009af-p12"
			]
		},
		{
			"label": "Dimensions L × H × l déclarées",
			"value": "457 × 476 × 79 mm",
			"evidenceIds": [
				"october3c-tools-hpt-nt50af-n5009af-p12"
			]
		},
		{
			"label": "Capacité du chargeur déclarée",
			"value": "150 clous",
			"evidenceIds": [
				"october3c-tools-hpt-nt50af-n5009af-p12"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "(1.64 ltr/cycle @ 5.5 bar)  ",
			"evidenceIds": [
				"october3c-tools-hpt-nt50af-n5009af-p12",
				"october3c-tools-hpt-nt50af-n5009af-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "1.64 L/cycle",
			"evidenceIds": [
				"october3c-tools-hpt-nt50af-n5009af-p12",
				"october3c-tools-hpt-nt50af-n5009af-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-hpt-nt50af-n5009af-p12",
			"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/397448739fdd426cafde1de1a1598d80.pdf?sfvrsn=bba90a9f_1#page=12",
			"sourceLabel": "Notice constructeur conservée par Metabo HPT, référence exacte, page PDF 12",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 5f14f70284c23e4ae1a669e8ad78284e9f09d66dc7384b03ed2e24363ebe917b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "october3c-tools-hpt-nt50af-n5009af-p1",
			"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/397448739fdd426cafde1de1a1598d80.pdf?sfvrsn=bba90a9f_1#page=1",
			"sourceLabel": "Notice constructeur conservée par Metabo HPT, référence exacte, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 5f14f70284c23e4ae1a669e8ad78284e9f09d66dc7384b03ed2e24363ebe917b. Document complémentaire de la référence exacte, sans essai CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-hpt-nt50af-n5009af-p12"
		],
		"workingPressureBar": [
			"october3c-tools-hpt-nt50af-n5009af-p12",
			"october3c-tools-hpt-nt50af-n5009af-p1"
		],
		"airPerActionLiters": [
			"october3c-tools-hpt-nt50af-n5009af-p12",
			"october3c-tools-hpt-nt50af-n5009af-p1"
		],
		"actionLabel": [
			"october3c-tools-hpt-nt50af-n5009af-p12",
			"october3c-tools-hpt-nt50af-n5009af-p1"
		]
	},
	"notes": [
		"Volume déclaré : 1,64 L par cycle à 5,5 bar ; la cadence doit être renseignée."
	]
};

export default product;

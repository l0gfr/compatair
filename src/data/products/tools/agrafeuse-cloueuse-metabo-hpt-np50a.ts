import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-metabo-hpt-np50a",
	"slug": "agrafeuse-cloueuse-metabo-hpt-np50a",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Metabo HPT NP50A",
	"brand": "Metabo HPT",
	"model": "NP50A",
	"mpn": "NP50A",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 6.9,
		"typical": 6.9,
		"max": 6.9
	},
	"airPerActionLiters": 0.6,
	"actionLabel": "cycle de pose",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-metabo-hpt-np50a.webp",
		"alt": "Repères techniques : Metabo HPT NP50A",
		"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/np50a_metabo-hpt_om.pdf?sfvrsn=60a059_1",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "metabo-hpt-np50a",
		"label": "Référence NP50A",
		"distinguishingAttributes": {
			"reference": "NP50A",
			"Masse déclarée": "1.5 kg",
			"Dimensions L × H × l déclarées": "260 × 244 × 57 mm"
		}
	},
	"editorial": {
		"overview": "Metabo HPT NP50A. Volume déclaré : 0,6 L par cycle à 6,9 bar ; la cadence doit être renseignée. Masse déclarée : 1.5 kg. Dimensions L × H × l déclarées : 260 × 244 × 57 mm.",
		"verifiedFacts": [
			"Masse déclarée : 1.5 kg.",
			"Dimensions L × H × l déclarées : 260 × 244 × 57 mm.",
			"Capacité du chargeur déclarée : 100 clous."
		],
		"limitations": [
			"Une cadence déclarée permet le calcul moyen ; la pointe instantanée de déclenchement reste distincte.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse déclarée",
			"value": "1.5 kg",
			"evidenceIds": [
				"october3c-tools-hpt-np50a-p8"
			]
		},
		{
			"label": "Dimensions L × H × l déclarées",
			"value": "260 × 244 × 57 mm",
			"evidenceIds": [
				"october3c-tools-hpt-np50a-p8"
			]
		},
		{
			"label": "Capacité du chargeur déclarée",
			"value": "100 clous",
			"evidenceIds": [
				"october3c-tools-hpt-np50a-p8"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "(.6 ltr/cycle at 6.9 bar)",
			"evidenceIds": [
				"october3c-tools-hpt-np50a-p8",
				"october3c-tools-hpt-np50a-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": ".6 L/cycle",
			"evidenceIds": [
				"october3c-tools-hpt-np50a-p8",
				"october3c-tools-hpt-np50a-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-hpt-np50a-p8",
			"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/np50a_metabo-hpt_om.pdf?sfvrsn=60a059_1#page=8",
			"sourceLabel": "Notice constructeur conservée par Metabo HPT, référence exacte, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 5e7f40c5d188260b348fed41c071b09f904ddc20c7dcbf11e1254a57c0a36471. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "october3c-tools-hpt-np50a-p1",
			"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/np50a_metabo-hpt_om.pdf?sfvrsn=60a059_1#page=1",
			"sourceLabel": "Notice constructeur conservée par Metabo HPT, référence exacte, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 5e7f40c5d188260b348fed41c071b09f904ddc20c7dcbf11e1254a57c0a36471. Document complémentaire de la référence exacte, sans essai CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-hpt-np50a-p8"
		],
		"workingPressureBar": [
			"october3c-tools-hpt-np50a-p8",
			"october3c-tools-hpt-np50a-p1"
		],
		"airPerActionLiters": [
			"october3c-tools-hpt-np50a-p8",
			"october3c-tools-hpt-np50a-p1"
		],
		"actionLabel": [
			"october3c-tools-hpt-np50a-p8",
			"october3c-tools-hpt-np50a-p1"
		]
	},
	"notes": [
		"Volume déclaré : 0,6 L par cycle à 6,9 bar ; la cadence doit être renseignée."
	]
};

export default product;

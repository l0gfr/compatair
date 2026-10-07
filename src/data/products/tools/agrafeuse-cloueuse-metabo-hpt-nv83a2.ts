import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-metabo-hpt-nv83a2",
	"slug": "agrafeuse-cloueuse-metabo-hpt-nv83a2",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Metabo HPT NV83A2",
	"brand": "Metabo HPT",
	"model": "NV83A2",
	"mpn": "NV83A2",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 6.9,
		"typical": 6.9,
		"max": 6.9
	},
	"airPerActionLiters": 2.4,
	"actionLabel": "cycle de pose",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-metabo-hpt-nv83a2.webp",
		"alt": "Repères techniques : Metabo HPT NV83A2",
		"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/e9101772b5c248b6a46b2b092a2c8bde.pdf?sfvrsn=77d25f1a_2",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "metabo-hpt-nv83a2",
		"label": "Référence NV83A2",
		"distinguishingAttributes": {
			"reference": "NV83A2",
			"Masse déclarée": "3.7 kg",
			"Dimensions L × H × l déclarées": "290 × 348 × 135 mm"
		}
	},
	"editorial": {
		"overview": "Metabo HPT NV83A2. Volume déclaré : 2,4 L par cycle à 6,9 bar ; la cadence doit être renseignée. Masse déclarée : 3.7 kg. Dimensions L × H × l déclarées : 290 × 348 × 135 mm.",
		"verifiedFacts": [
			"Masse déclarée : 3.7 kg.",
			"Dimensions L × H × l déclarées : 290 × 348 × 135 mm.",
			"Capacité du chargeur déclarée : 200–300 clous par bobine."
		],
		"limitations": [
			"Une cadence déclarée permet le calcul moyen ; la pointe instantanée de déclenchement reste distincte.",
			"Notice de génération HITACHI conservée par Metabo HPT : édition ancienne, référence exacte à confirmer sur l’appareil livré.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse déclarée",
			"value": "3.7 kg",
			"evidenceIds": [
				"october3c-tools-hpt-nv83a2-nv65ac-nv50a1-p9"
			]
		},
		{
			"label": "Dimensions L × H × l déclarées",
			"value": "290 × 348 × 135 mm",
			"evidenceIds": [
				"october3c-tools-hpt-nv83a2-nv65ac-nv50a1-p9"
			]
		},
		{
			"label": "Capacité du chargeur déclarée",
			"value": "200–300 clous par bobine",
			"evidenceIds": [
				"october3c-tools-hpt-nv83a2-nv65ac-nv50a1-p9"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption (2.4 ltr/cycle at 6.9 bar) (2.1 ltr/cycle at 6.9 bar) (.99 ltr/cycle at 6.9 bar)",
			"evidenceIds": [
				"october3c-tools-hpt-nv83a2-nv65ac-nv50a1-p9",
				"october3c-tools-hpt-nv83a2-nv65ac-nv50a1-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "2.4 L/cycle",
			"evidenceIds": [
				"october3c-tools-hpt-nv83a2-nv65ac-nv50a1-p9",
				"october3c-tools-hpt-nv83a2-nv65ac-nv50a1-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-hpt-nv83a2-nv65ac-nv50a1-p9",
			"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/e9101772b5c248b6a46b2b092a2c8bde.pdf?sfvrsn=77d25f1a_2#page=9",
			"sourceLabel": "Notice constructeur conservée par Metabo HPT, référence exacte, page PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c3c318cdc705e2b5bd8d65a7668ea3408d8a5ea7a3a23528271e3c580ec63307. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "october3c-tools-hpt-nv83a2-nv65ac-nv50a1-p1",
			"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/e9101772b5c248b6a46b2b092a2c8bde.pdf?sfvrsn=77d25f1a_2#page=1",
			"sourceLabel": "Notice constructeur conservée par Metabo HPT, référence exacte, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c3c318cdc705e2b5bd8d65a7668ea3408d8a5ea7a3a23528271e3c580ec63307. Document complémentaire de la référence exacte, sans essai CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-hpt-nv83a2-nv65ac-nv50a1-p9"
		],
		"workingPressureBar": [
			"october3c-tools-hpt-nv83a2-nv65ac-nv50a1-p9",
			"october3c-tools-hpt-nv83a2-nv65ac-nv50a1-p1"
		],
		"airPerActionLiters": [
			"october3c-tools-hpt-nv83a2-nv65ac-nv50a1-p9",
			"october3c-tools-hpt-nv83a2-nv65ac-nv50a1-p1"
		],
		"actionLabel": [
			"october3c-tools-hpt-nv83a2-nv65ac-nv50a1-p9",
			"october3c-tools-hpt-nv83a2-nv65ac-nv50a1-p1"
		]
	},
	"notes": [
		"Volume déclaré : 2,4 L par cycle à 6,9 bar ; la cadence doit être renseignée."
	]
};

export default product;

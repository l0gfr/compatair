import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-metabo-hpt-nv65ah",
	"slug": "agrafeuse-cloueuse-metabo-hpt-nv65ah",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Metabo HPT NV65AH",
	"brand": "Metabo HPT",
	"model": "NV65AH",
	"mpn": "NV65AH",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 6.9,
		"typical": 6.9,
		"max": 6.9
	},
	"airPerActionLiters": 1.4,
	"actionLabel": "cycle de pose",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-metabo-hpt-nv65ah.webp",
		"alt": "Repères techniques : Metabo HPT NV65AH",
		"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/ba937d2ddf20459ea8826a4b4caa2e3e.pdf?sfvrsn=fb3388d_2",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "metabo-hpt-nv65ah",
		"label": "Référence NV65AH",
		"distinguishingAttributes": {
			"reference": "NV65AH",
			"Masse déclarée": "2.1 kg",
			"Dimensions L × H × l déclarées": "266 × 300 × 128 mm"
		}
	},
	"editorial": {
		"overview": "Metabo HPT NV65AH. Volume déclaré : 1,4 L par cycle à 6,9 bar ; la cadence doit être renseignée. Masse déclarée : 2.1 kg. Dimensions L × H × l déclarées : 266 × 300 × 128 mm.",
		"verifiedFacts": [
			"Masse déclarée : 2.1 kg.",
			"Dimensions L × H × l déclarées : 266 × 300 × 128 mm.",
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
			"value": "2.1 kg",
			"evidenceIds": [
				"october3c-tools-hpt-unidentified-ba937-p8"
			]
		},
		{
			"label": "Dimensions L × H × l déclarées",
			"value": "266 × 300 × 128 mm",
			"evidenceIds": [
				"october3c-tools-hpt-unidentified-ba937-p8"
			]
		},
		{
			"label": "Capacité du chargeur déclarée",
			"value": "200–300 clous par bobine",
			"evidenceIds": [
				"october3c-tools-hpt-unidentified-ba937-p8"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption (1.4 ltr/cycle at 6.9 bar)",
			"evidenceIds": [
				"october3c-tools-hpt-unidentified-ba937-p8",
				"october3c-tools-hpt-unidentified-ba937-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "1.4 L/cycle",
			"evidenceIds": [
				"october3c-tools-hpt-unidentified-ba937-p8",
				"october3c-tools-hpt-unidentified-ba937-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-hpt-unidentified-ba937-p8",
			"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/ba937d2ddf20459ea8826a4b4caa2e3e.pdf?sfvrsn=fb3388d_2#page=8",
			"sourceLabel": "Notice constructeur conservée par Metabo HPT, référence exacte, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9ab038717f76e366b926ab630fa3c9533a7d4b2541fe4d224a9d3393470679f5. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "october3c-tools-hpt-unidentified-ba937-p1",
			"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/ba937d2ddf20459ea8826a4b4caa2e3e.pdf?sfvrsn=fb3388d_2#page=1",
			"sourceLabel": "Notice constructeur conservée par Metabo HPT, référence exacte, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9ab038717f76e366b926ab630fa3c9533a7d4b2541fe4d224a9d3393470679f5. Document complémentaire de la référence exacte, sans essai CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-hpt-unidentified-ba937-p8"
		],
		"workingPressureBar": [
			"october3c-tools-hpt-unidentified-ba937-p8",
			"october3c-tools-hpt-unidentified-ba937-p1"
		],
		"airPerActionLiters": [
			"october3c-tools-hpt-unidentified-ba937-p8",
			"october3c-tools-hpt-unidentified-ba937-p1"
		],
		"actionLabel": [
			"october3c-tools-hpt-unidentified-ba937-p8",
			"october3c-tools-hpt-unidentified-ba937-p1"
		]
	},
	"notes": [
		"Volume déclaré : 1,4 L par cycle à 6,9 bar ; la cadence doit être renseignée."
	]
};

export default product;

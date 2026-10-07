import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-metabo-hpt-nt65ma4",
	"slug": "agrafeuse-cloueuse-metabo-hpt-nt65ma4",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Metabo HPT NT65MA4",
	"brand": "Metabo HPT",
	"model": "NT65MA4",
	"mpn": "NT65MA4",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 6.9,
		"typical": 6.9,
		"max": 6.9
	},
	"airPerActionLiters": 1.29,
	"actionLabel": "cycle de pose",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-metabo-hpt-nt65ma4.webp",
		"alt": "Repères techniques : Metabo HPT NT65MA4",
		"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/811193e6eb964db0ba8654ea6706114e.pdf?sfvrsn=3e87de18_2",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "metabo-hpt-nt65ma4",
		"label": "Référence NT65MA4",
		"distinguishingAttributes": {
			"reference": "NT65MA4",
			"Masse déclarée": "1.9 kg",
			"Dimensions L × H × l déclarées": "344 × 304 × 82 mm"
		}
	},
	"editorial": {
		"overview": "Metabo HPT NT65MA4. Volume déclaré : 1,29 L par cycle à 6,9 bar ; la cadence doit être renseignée. Masse déclarée : 1.9 kg. Dimensions L × H × l déclarées : 344 × 304 × 82 mm.",
		"verifiedFacts": [
			"Masse déclarée : 1.9 kg.",
			"Dimensions L × H × l déclarées : 344 × 304 × 82 mm.",
			"Capacité du chargeur déclarée : 100 clous."
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
			"value": "1.9 kg",
			"evidenceIds": [
				"october3c-tools-hpt-nt65ma4-p8"
			]
		},
		{
			"label": "Dimensions L × H × l déclarées",
			"value": "344 × 304 × 82 mm",
			"evidenceIds": [
				"october3c-tools-hpt-nt65ma4-p8"
			]
		},
		{
			"label": "Capacité du chargeur déclarée",
			"value": "100 clous",
			"evidenceIds": [
				"october3c-tools-hpt-nt65ma4-p8"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "(1.29 ltr/cycle at 6.9 bar)",
			"evidenceIds": [
				"october3c-tools-hpt-nt65ma4-p8",
				"october3c-tools-hpt-nt65ma4-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "1.29 L/cycle",
			"evidenceIds": [
				"october3c-tools-hpt-nt65ma4-p8",
				"october3c-tools-hpt-nt65ma4-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-hpt-nt65ma4-p8",
			"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/811193e6eb964db0ba8654ea6706114e.pdf?sfvrsn=3e87de18_2#page=8",
			"sourceLabel": "Notice constructeur conservée par Metabo HPT, référence exacte, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 7c778bf2ff24e2599b4e767dfcd32c806a11772a925c01e59210e7f26bf5be80. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "october3c-tools-hpt-nt65ma4-p1",
			"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/811193e6eb964db0ba8654ea6706114e.pdf?sfvrsn=3e87de18_2#page=1",
			"sourceLabel": "Notice constructeur conservée par Metabo HPT, référence exacte, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 7c778bf2ff24e2599b4e767dfcd32c806a11772a925c01e59210e7f26bf5be80. Document complémentaire de la référence exacte, sans essai CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-hpt-nt65ma4-p8"
		],
		"workingPressureBar": [
			"october3c-tools-hpt-nt65ma4-p8",
			"october3c-tools-hpt-nt65ma4-p1"
		],
		"airPerActionLiters": [
			"october3c-tools-hpt-nt65ma4-p8",
			"october3c-tools-hpt-nt65ma4-p1"
		],
		"actionLabel": [
			"october3c-tools-hpt-nt65ma4-p8",
			"october3c-tools-hpt-nt65ma4-p1"
		]
	},
	"notes": [
		"Volume déclaré : 1,29 L par cycle à 6,9 bar ; la cadence doit être renseignée."
	]
};

export default product;

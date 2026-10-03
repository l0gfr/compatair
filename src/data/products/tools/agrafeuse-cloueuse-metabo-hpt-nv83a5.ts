const product = {
	"id": "agrafeuse-cloueuse-metabo-hpt-nv83a5",
	"slug": "agrafeuse-cloueuse-metabo-hpt-nv83a5",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Metabo HPT NV83A5",
	"brand": "Metabo HPT",
	"model": "NV83A5",
	"mpn": "NV83A5",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 6.9,
		"typical": 6.9,
		"max": 6.9
	},
	"airPerActionLiters": 2.5,
	"actionLabel": "cycle de pose",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-metabo-hpt-nv83a5.webp",
		"alt": "Repères techniques : Metabo HPT NV83A5",
		"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/2819d8f3eada4c1f9ce1504a97a0840b.pdf?sfvrsn=92c394e7_2",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "metabo-hpt-nv83a5",
		"label": "Référence NV83A5",
		"distinguishingAttributes": {
			"reference": "NV83A5",
			"Masse déclarée": "4.0 kg sans crochet",
			"Dimensions L × H × l déclarées": "315 × 348 × 137 mm"
		}
	},
	"editorial": {
		"overview": "Metabo HPT NV83A5. Volume déclaré : 2,5 L par cycle à 6,9 bar ; la cadence doit être renseignée. Masse déclarée : 4.0 kg sans crochet. Dimensions L × H × l déclarées : 315 × 348 × 137 mm.",
		"verifiedFacts": [
			"Masse déclarée : 4.0 kg sans crochet.",
			"Dimensions L × H × l déclarées : 315 × 348 × 137 mm.",
			"Capacité du chargeur déclarée : 200–300 clous par bobine."
		],
		"limitations": [
			"Une cadence déclarée permet le calcul moyen ; la pointe instantanée de déclenchement reste distincte.",
			"La valeur SI publiée dans la colonne du fabricant est conservée directement, sans reconvertir la valeur ft³ arrondie.",
			"Notice de génération HITACHI conservée sur le site Metabo HPT ; disponibilité actuelle à confirmer pour la référence exacte.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse déclarée",
			"value": "4.0 kg sans crochet",
			"evidenceIds": [
				"october3c-tools-hpt-nv83a5-p10"
			]
		},
		{
			"label": "Dimensions L × H × l déclarées",
			"value": "315 × 348 × 137 mm",
			"evidenceIds": [
				"october3c-tools-hpt-nv83a5-p10"
			]
		},
		{
			"label": "Capacité du chargeur déclarée",
			"value": "200–300 clous par bobine",
			"evidenceIds": [
				"october3c-tools-hpt-nv83a5-p10"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "(2.5 ltr/cycle at 6.9 bar)",
			"evidenceIds": [
				"october3c-tools-hpt-nv83a5-p10",
				"october3c-tools-hpt-nv83a5-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "2.5 L/cycle",
			"evidenceIds": [
				"october3c-tools-hpt-nv83a5-p10",
				"october3c-tools-hpt-nv83a5-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-hpt-nv83a5-p10",
			"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/2819d8f3eada4c1f9ce1504a97a0840b.pdf?sfvrsn=92c394e7_2#page=10",
			"sourceLabel": "Notice constructeur conservée par Metabo HPT, référence exacte, page PDF 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 3f151b97a0d2f25adb914b72dd2b4c315fa38600a086d39e49e6caeef1ee972e. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "october3c-tools-hpt-nv83a5-p1",
			"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/2819d8f3eada4c1f9ce1504a97a0840b.pdf?sfvrsn=92c394e7_2#page=1",
			"sourceLabel": "Notice constructeur conservée par Metabo HPT, référence exacte, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 3f151b97a0d2f25adb914b72dd2b4c315fa38600a086d39e49e6caeef1ee972e. Document complémentaire de la référence exacte, sans essai CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-hpt-nv83a5-p10"
		],
		"workingPressureBar": [
			"october3c-tools-hpt-nv83a5-p10",
			"october3c-tools-hpt-nv83a5-p1"
		],
		"airPerActionLiters": [
			"october3c-tools-hpt-nv83a5-p10",
			"october3c-tools-hpt-nv83a5-p1"
		],
		"actionLabel": [
			"october3c-tools-hpt-nv83a5-p10",
			"october3c-tools-hpt-nv83a5-p1"
		]
	},
	"notes": [
		"Volume déclaré : 2,5 L par cycle à 6,9 bar ; la cadence doit être renseignée."
	]
};

export default product;

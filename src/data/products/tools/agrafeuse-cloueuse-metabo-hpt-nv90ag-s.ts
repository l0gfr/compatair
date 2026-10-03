const product = {
	"id": "agrafeuse-cloueuse-metabo-hpt-nv90ag-s",
	"slug": "agrafeuse-cloueuse-metabo-hpt-nv90ag-s",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Metabo HPT NV90AG(S)",
	"brand": "Metabo HPT",
	"model": "NV90AG(S)",
	"mpn": "NV90AG(S)",
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
		"src": "/images/products/agrafeuse-cloueuse-metabo-hpt-nv90ag-s.webp",
		"alt": "Repères techniques : Metabo HPT NV90AG(S)",
		"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/178e4426d6fe45b5993076ef7ba32cbe.pdf?sfvrsn=b770012d_2",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "metabo-hpt-nv90ag-s",
		"label": "Référence NV90AG(S)",
		"distinguishingAttributes": {
			"reference": "NV90AG(S)",
			"Masse déclarée": "3.5 kg",
			"Dimensions L × H × l déclarées": "336 × 332 × 135 mm"
		}
	},
	"editorial": {
		"overview": "Metabo HPT NV90AG(S). Volume déclaré : 2,5 L par cycle à 6,9 bar ; la cadence doit être renseignée. Masse déclarée : 3.5 kg. Dimensions L × H × l déclarées : 336 × 332 × 135 mm.",
		"verifiedFacts": [
			"Masse déclarée : 3.5 kg.",
			"Dimensions L × H × l déclarées : 336 × 332 × 135 mm.",
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
			"value": "3.5 kg",
			"evidenceIds": [
				"october3c-tools-hpt-nv90ag-s-p9"
			]
		},
		{
			"label": "Dimensions L × H × l déclarées",
			"value": "336 × 332 × 135 mm",
			"evidenceIds": [
				"october3c-tools-hpt-nv90ag-s-p9"
			]
		},
		{
			"label": "Capacité du chargeur déclarée",
			"value": "200–300 clous par bobine",
			"evidenceIds": [
				"october3c-tools-hpt-nv90ag-s-p9"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "(2.5 ltr/cycle at 6.9 bar)",
			"evidenceIds": [
				"october3c-tools-hpt-nv90ag-s-p9",
				"october3c-tools-hpt-nv90ag-s-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "2.5 L/cycle",
			"evidenceIds": [
				"october3c-tools-hpt-nv90ag-s-p9",
				"october3c-tools-hpt-nv90ag-s-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-hpt-nv90ag-s-p9",
			"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/178e4426d6fe45b5993076ef7ba32cbe.pdf?sfvrsn=b770012d_2#page=9",
			"sourceLabel": "Notice constructeur conservée par Metabo HPT, référence exacte, page PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : da1579cacf66f787d2f2e18a66e8387d820bd3c40a397a62431bb09e0e1d9e09. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "october3c-tools-hpt-nv90ag-s-p1",
			"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/178e4426d6fe45b5993076ef7ba32cbe.pdf?sfvrsn=b770012d_2#page=1",
			"sourceLabel": "Notice constructeur conservée par Metabo HPT, référence exacte, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : da1579cacf66f787d2f2e18a66e8387d820bd3c40a397a62431bb09e0e1d9e09. Document complémentaire de la référence exacte, sans essai CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-hpt-nv90ag-s-p9"
		],
		"workingPressureBar": [
			"october3c-tools-hpt-nv90ag-s-p9",
			"october3c-tools-hpt-nv90ag-s-p1"
		],
		"airPerActionLiters": [
			"october3c-tools-hpt-nv90ag-s-p9",
			"october3c-tools-hpt-nv90ag-s-p1"
		],
		"actionLabel": [
			"october3c-tools-hpt-nv90ag-s-p9",
			"october3c-tools-hpt-nv90ag-s-p1"
		]
	},
	"notes": [
		"Volume déclaré : 2,5 L par cycle à 6,9 bar ; la cadence doit être renseignée."
	]
};

export default product;

import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-metabo-hpt-n3804a5",
	"slug": "agrafeuse-cloueuse-metabo-hpt-n3804a5",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Metabo HPT N3804A5",
	"brand": "Metabo HPT",
	"model": "N3804A5",
	"mpn": "N3804A5",
	"demandModel": "per-action",
	"workingPressureBar": {
		"min": 6.9,
		"typical": 6.9,
		"max": 6.9
	},
	"airPerActionLiters": 0.73,
	"actionLabel": "cycle de pose",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-metabo-hpt-n3804a5.webp",
		"alt": "Repères techniques : Metabo HPT N3804A5",
		"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/n3804a5%28metabohpt%29_pdf_manual_view.pdf?sfvrsn=94929168_1",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "metabo-hpt-n3804a5",
		"label": "Référence N3804A5",
		"distinguishingAttributes": {
			"reference": "N3804A5",
			"Masse déclarée": "1.2 kg",
			"Dimensions L × H × l déclarées": "263 × 235 × 76 mm"
		}
	},
	"editorial": {
		"overview": "Metabo HPT N3804A5. Volume déclaré : 0,73 L par cycle à 6,9 bar ; la cadence doit être renseignée. Masse déclarée : 1.2 kg. Dimensions L × H × l déclarées : 263 × 235 × 76 mm.",
		"verifiedFacts": [
			"Masse déclarée : 1.2 kg.",
			"Dimensions L × H × l déclarées : 263 × 235 × 76 mm.",
			"Capacité du chargeur déclarée : 100 agrafes."
		],
		"limitations": [
			"Une cadence déclarée permet le calcul moyen ; la pointe instantanée de déclenchement reste distincte.",
			"La valeur SI publiée dans la colonne du fabricant est conservée directement, sans reconvertir la valeur ft³ arrondie.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse déclarée",
			"value": "1.2 kg",
			"evidenceIds": [
				"october3c-tools-hpt-n3804a5-p9"
			]
		},
		{
			"label": "Dimensions L × H × l déclarées",
			"value": "263 × 235 × 76 mm",
			"evidenceIds": [
				"october3c-tools-hpt-n3804a5-p9"
			]
		},
		{
			"label": "Capacité du chargeur déclarée",
			"value": "100 agrafes",
			"evidenceIds": [
				"october3c-tools-hpt-n3804a5-p9"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "(.73 ltr/cycle at 6.9 bar)",
			"evidenceIds": [
				"october3c-tools-hpt-n3804a5-p9",
				"october3c-tools-hpt-n3804a5-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": ".73 L/cycle",
			"evidenceIds": [
				"october3c-tools-hpt-n3804a5-p9",
				"october3c-tools-hpt-n3804a5-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-hpt-n3804a5-p9",
			"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/n3804a5%28metabohpt%29_pdf_manual_view.pdf?sfvrsn=94929168_1#page=9",
			"sourceLabel": "Notice constructeur conservée par Metabo HPT, référence exacte, page PDF 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0125ec9ad128a7e861de2371ddbb0549fbe26be83e6f882bd69a3bde239539a2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "october3c-tools-hpt-n3804a5-p1",
			"sourceUrl": "https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/n3804a5%28metabohpt%29_pdf_manual_view.pdf?sfvrsn=94929168_1#page=1",
			"sourceLabel": "Notice constructeur conservée par Metabo HPT, référence exacte, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0125ec9ad128a7e861de2371ddbb0549fbe26be83e6f882bd69a3bde239539a2. Document complémentaire de la référence exacte, sans essai CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-hpt-n3804a5-p9"
		],
		"workingPressureBar": [
			"october3c-tools-hpt-n3804a5-p9",
			"october3c-tools-hpt-n3804a5-p1"
		],
		"airPerActionLiters": [
			"october3c-tools-hpt-n3804a5-p9",
			"october3c-tools-hpt-n3804a5-p1"
		],
		"actionLabel": [
			"october3c-tools-hpt-n3804a5-p9",
			"october3c-tools-hpt-n3804a5-p1"
		]
	},
	"notes": [
		"Volume déclaré : 0,73 L par cycle à 6,9 bar ; la cadence doit être renseignée."
	]
};

export default product;

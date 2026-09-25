const product = {
	"id": "chicago-pneumatic-cp3109-19es-cnomo",
	"slug": "meuleuse-chicago-pneumatic-cp3109-19es-cnomo",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3109-19ES CNOMO",
	"brand": "Chicago Pneumatic",
	"model": "CP3109-19ES CNOMO",
	"mpn": "6151701050",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 3/8 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3109-19es-cnomo-catalogue-2026.webp",
		"alt": "Repères techniques CP3109-19ES CNOMO : 900 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=124",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3109-19ES CNOMO, référence 6151701050, demande 900 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 124. Vitesse à vide : 19 000 tr/min. Puissance de l’outil : 600 W.",
		"verifiedFacts": [
			"Vitesse à vide : 19 000 tr/min.",
			"Puissance de l’outil : 600 W.",
			"Pince publiée dans le tableau : 6.0 mm.",
			"Longueur publiée : 363 mm.",
			"Entrée d’air 3/8 pouce ; flexible intérieur de 10 mm publié par le fabricant."
		],
		"limitations": [
			"Le débit utilisé est la consommation en charge du tableau constructeur à 6,3 bar. Aucune réduction arbitraire pour usage intermittent n’est appliquée.",
			"Le diamètre intérieur de flexible publié est de 10 mm, sans longueur associée dans ce tableau. La perte de pression du réseau reste à vérifier pour votre installation.",
			"Référence issue du catalogue international v6.08.2026. La configuration livrée, les normes applicables et la disponibilité en France restent à confirmer avec le fournisseur.",
			"Version CNOMO, distincte de la référence sans ce suffixe ; le catalogue la réserve hors marché nord-américain."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "19 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151701050"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "600 W",
			"evidenceIds": [
				"cp-catalog-202608-6151701050"
			]
		},
		{
			"label": "Pince publiée dans le tableau",
			"value": "6.0 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151701050"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "363 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151701050"
			]
		},
		{
			"label": "Poids publié",
			"value": "1,3 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151701050"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151701050",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=124",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 124, réf. 6151701050",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 15 L/s × 60 = 900 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151701050"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151701050"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151701050"
		],
		"connectorSize": [
			"cp-catalog-202608-6151701050"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151701050"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 124, référence 6151701050."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 900,
		"typical": 900,
		"max": 900
	}
};

export default product;

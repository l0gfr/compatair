const product = {
	"id": "chicago-pneumatic-cp3019-31es-cnomo",
	"slug": "meuleuse-chicago-pneumatic-cp3019-31es-cnomo",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3019-31ES CNOMO",
	"brand": "Chicago Pneumatic",
	"model": "CP3019-31ES CNOMO",
	"mpn": "6151602230",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3019-31es-cnomo-catalogue-2026.webp",
		"alt": "Repères techniques CP3019-31ES CNOMO : 564 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=123",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3019-31ES CNOMO, référence 6151602230, demande 564 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 123. Vitesse à vide : 31 000 tr/min. Puissance de l’outil : 370 W.",
		"verifiedFacts": [
			"Vitesse à vide : 31 000 tr/min.",
			"Puissance de l’outil : 370 W.",
			"Pince publiée dans le tableau : 6.4 mm.",
			"Longueur publiée : 249 mm.",
			"Entrée d’air 1/4 pouce ; flexible intérieur de 10 mm publié par le fabricant."
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
			"value": "31 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151602230"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "370 W",
			"evidenceIds": [
				"cp-catalog-202608-6151602230"
			]
		},
		{
			"label": "Pince publiée dans le tableau",
			"value": "6.4 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151602230"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "249 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151602230"
			]
		},
		{
			"label": "Poids publié",
			"value": "0,57 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151602230"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151602230",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=123",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 123, réf. 6151602230",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 9.4 L/s × 60 = 564 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151602230"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151602230"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151602230"
		],
		"connectorSize": [
			"cp-catalog-202608-6151602230"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151602230"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 123, référence 6151602230."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 564,
		"typical": 564,
		"max": 564
	}
};

export default product;

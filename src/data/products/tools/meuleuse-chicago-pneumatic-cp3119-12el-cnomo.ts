const product = {
	"id": "chicago-pneumatic-cp3119-12el-cnomo",
	"slug": "meuleuse-chicago-pneumatic-cp3119-12el-cnomo",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3119-12EL CNOMO",
	"brand": "Chicago Pneumatic",
	"model": "CP3119-12EL CNOMO",
	"mpn": "6151701080",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 3/8 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3119-12el-cnomo-catalogue-2026.webp",
		"alt": "Repères techniques CP3119-12EL CNOMO : 960 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=126",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3119-12EL CNOMO, référence 6151701080, demande 960 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 126. Vitesse à vide : 12 000 tr/min. Puissance de l’outil : 900 W.",
		"verifiedFacts": [
			"Vitesse à vide : 12 000 tr/min.",
			"Puissance de l’outil : 900 W.",
			"Pince publiée dans le tableau : 6.0 mm.",
			"Longueur publiée : 603 mm.",
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
			"value": "12 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151701080"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "900 W",
			"evidenceIds": [
				"cp-catalog-202608-6151701080"
			]
		},
		{
			"label": "Pince publiée dans le tableau",
			"value": "6.0 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151701080"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "603 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151701080"
			]
		},
		{
			"label": "Poids publié",
			"value": "2,1 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151701080"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151701080",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=126",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 126, réf. 6151701080",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 16 L/s × 60 = 960 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151701080"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151701080"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151701080"
		],
		"connectorSize": [
			"cp-catalog-202608-6151701080"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151701080"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 126, référence 6151701080."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 960,
		"typical": 960,
		"max": 960
	}
};

export default product;

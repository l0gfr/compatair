const product = {
	"id": "chicago-pneumatic-cp3030-325r",
	"slug": "meuleuse-chicago-pneumatic-cp3030-325r",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3030-325R",
	"brand": "Chicago Pneumatic",
	"model": "CP3030-325R",
	"mpn": "6151604090",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3030-325r-catalogue-2026.webp",
		"alt": "Repères techniques CP3030-325R : 480 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=108",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3030-325R, référence 6151604090, demande 480 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 108. Vitesse à vide : 25 000 tr/min. Puissance de l’outil : 300 W.",
		"verifiedFacts": [
			"Vitesse à vide : 25 000 tr/min.",
			"Puissance de l’outil : 300 W.",
			"Pince publiée dans le tableau : 6.0 mm.",
			"Longueur publiée : 154 mm.",
			"Entrée d’air 1/4 pouce ; flexible intérieur de 10 mm publié par le fabricant."
		],
		"limitations": [
			"Le débit utilisé est la consommation en charge du tableau constructeur à 6,3 bar. Aucune réduction arbitraire pour usage intermittent n’est appliquée.",
			"Le diamètre intérieur de flexible publié est de 10 mm, sans longueur associée dans ce tableau. La perte de pression du réseau reste à vérifier pour votre installation.",
			"Référence issue du catalogue international v6.08.2026. La configuration livrée, les normes applicables et la disponibilité en France restent à confirmer avec le fournisseur."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "25 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151604090"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "300 W",
			"evidenceIds": [
				"cp-catalog-202608-6151604090"
			]
		},
		{
			"label": "Pince publiée dans le tableau",
			"value": "6.0 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151604090"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "154 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151604090"
			]
		},
		{
			"label": "Poids publié",
			"value": "0,52 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151604090"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151604090",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=108",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 108, réf. 6151604090",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 8 L/s × 60 = 480 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151604090"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151604090"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151604090"
		],
		"connectorSize": [
			"cp-catalog-202608-6151604090"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151604090"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 108, référence 6151604090."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 480,
		"typical": 480,
		"max": 480
	}
};

export default product;

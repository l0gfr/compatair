const product = {
	"id": "chicago-pneumatic-cp0611p-rs",
	"slug": "cle-a-chocs-chicago-pneumatic-cp0611p-rs",
	"categoryId": "cle-a-chocs",
	"category": "Clé à chocs",
	"label": "Clé à chocs Chicago Pneumatic CP0611P RS",
	"brand": "Chicago Pneumatic",
	"model": "CP0611P RS",
	"mpn": "6151590050",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/2 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "burst",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp0611p-rs-catalogue-2026.webp",
		"alt": "Repères techniques CP0611P RS : 1 356 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=32",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP0611P RS, référence 6151590050, demande 1 356 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 32. Vitesse à vide : 3 500 tr/min. Couple maximal en marche arrière : 3790 Nm.",
		"verifiedFacts": [
			"Vitesse à vide : 3 500 tr/min.",
			"Couple maximal en marche arrière : 3790 Nm.",
			"Longueur publiée : 272 mm.",
			"Poids publié : 10,5 kg.",
			"Entrée d’air 1/2 pouce ; flexible intérieur de 10 mm publié par le fabricant."
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
			"value": "3 500 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151590050"
			]
		},
		{
			"label": "Couple maximal en marche arrière",
			"value": "3790 Nm",
			"evidenceIds": [
				"cp-catalog-202608-6151590050"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "272 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151590050"
			]
		},
		{
			"label": "Poids publié",
			"value": "10,5 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151590050"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151590050",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=32",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 32, réf. 6151590050",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 22.6 L/s × 60 = 1356 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151590050"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151590050"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151590050"
		],
		"connectorSize": [
			"cp-catalog-202608-6151590050"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151590050"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 32, référence 6151590050."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1356,
		"typical": 1356,
		"max": 1356
	}
};

export default product;

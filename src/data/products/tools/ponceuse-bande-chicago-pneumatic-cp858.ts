const product = {
	"id": "chicago-pneumatic-cp858",
	"slug": "ponceuse-bande-chicago-pneumatic-cp858",
	"categoryId": "ponceuse-bande",
	"category": "Ponceuse à bande pneumatique",
	"label": "Ponceuse à bande pneumatique Chicago Pneumatic CP858",
	"brand": "Chicago Pneumatic",
	"model": "CP858",
	"mpn": "T025179",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp858-catalogue-2026.webp",
		"alt": "Repères techniques CP858 : 1 320 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=180",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP858, référence T025179, demande 1 320 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 180. Vitesse à vide : 18 000 tr/min. Puissance de l’outil : 300 W.",
		"verifiedFacts": [
			"Vitesse à vide : 18 000 tr/min.",
			"Puissance de l’outil : 300 W.",
			"Dimensions de la bande : 10x330 mm.",
			"Longueur publiée : 275 mm.",
			"Entrée d’air 1/4 pouce ; flexible intérieur de 10 mm publié par le fabricant."
		],
		"limitations": [
			"Le débit utilisé est la consommation en charge du tableau constructeur à 6,3 bar. Aucune réduction arbitraire pour usage intermittent n’est appliquée.",
			"Le diamètre intérieur de flexible publié est de 10 mm, sans longueur associée dans ce tableau. La perte de pression du réseau reste à vérifier pour votre installation.",
			"Référence issue du catalogue international v6.08.2026. La configuration livrée, les normes applicables et la disponibilité en France restent à confirmer avec le fournisseur.",
			"La consommation à vide publiée est de 600 L/min. Elle reste distincte de la consommation en charge utilisée dans le calcul."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "18 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-t025179"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "300 W",
			"evidenceIds": [
				"cp-catalog-202608-t025179"
			]
		},
		{
			"label": "Dimensions de la bande",
			"value": "10x330 mm",
			"evidenceIds": [
				"cp-catalog-202608-t025179"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "275 mm",
			"evidenceIds": [
				"cp-catalog-202608-t025179"
			]
		},
		{
			"label": "Poids publié",
			"value": "0,85 kg",
			"evidenceIds": [
				"cp-catalog-202608-t025179"
			]
		},
		{
			"label": "Consommation à vide, distincte du débit en charge",
			"value": "600 L/min",
			"evidenceIds": [
				"cp-catalog-202608-t025179"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-t025179",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=180",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 180, réf. T025179",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 22 L/s × 60 = 1320 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-t025179"
		],
		"airflowLpm": [
			"cp-catalog-202608-t025179"
		],
		"workingPressureBar": [
			"cp-catalog-202608-t025179"
		],
		"connectorSize": [
			"cp-catalog-202608-t025179"
		],
		"recommendedHose": [
			"cp-catalog-202608-t025179"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 180, référence T025179."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1320,
		"typical": 1320,
		"max": 1320
	}
};

export default product;

const product = {
	"id": "chicago-pneumatic-cp3750-085ab7",
	"slug": "meuleuse-chicago-pneumatic-cp3750-085ab7",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3750-085AB7",
	"brand": "Chicago Pneumatic",
	"model": "CP3750-085AB7",
	"mpn": "6151607820",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/2 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3750-085ab7-catalogue-2026.webp",
		"alt": "Repères techniques CP3750-085AB7 : 2 100 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=141",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3750-085AB7, référence 6151607820, demande 2 100 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 141. Vitesse à vide : 8 500 tr/min. Puissance de l’outil : 1 638 W.",
		"verifiedFacts": [
			"Vitesse à vide : 8 500 tr/min.",
			"Puissance de l’outil : 1 638 W.",
			"Diamètre maximal du disque : 180 mm.",
			"Filetage de sortie : 5/8-11 UNC.",
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
			"value": "8 500 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151607820"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "1 638 W",
			"evidenceIds": [
				"cp-catalog-202608-6151607820"
			]
		},
		{
			"label": "Diamètre maximal du disque",
			"value": "180 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151607820"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/8-11 UNC",
			"evidenceIds": [
				"cp-catalog-202608-6151607820"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "314 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151607820"
			]
		},
		{
			"label": "Poids publié",
			"value": "2,9 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151607820"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151607820",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=141",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 141, réf. 6151607820",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 35 L/s × 60 = 2100 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151607820"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151607820"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151607820"
		],
		"connectorSize": [
			"cp-catalog-202608-6151607820"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151607820"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 141, référence 6151607820."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 2100,
		"typical": 2100,
		"max": 2100
	}
};

export default product;

const product = {
	"id": "chicago-pneumatic-cp3040gastim",
	"slug": "meuleuse-chicago-pneumatic-cp3040gastim",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3040GASTIM",
	"brand": "Chicago Pneumatic",
	"model": "CP3040GASTIM",
	"mpn": "6151607020",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 3/8 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3040gastim-catalogue-2026.webp",
		"alt": "Repères techniques CP3040GASTIM : 720 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=136",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3040GASTIM, référence 6151607020, demande 720 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 136. Vitesse à vide : 13 500 tr/min. Puissance de l’outil : 750 W.",
		"verifiedFacts": [
			"Vitesse à vide : 13 500 tr/min.",
			"Puissance de l’outil : 750 W.",
			"Diamètre maximal du disque : 100 mm.",
			"Filetage de sortie : 3/8-24 UNF.",
			"Entrée d’air 3/8 pouce ; flexible intérieur de 10 mm publié par le fabricant."
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
			"value": "13 500 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151607020"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "750 W",
			"evidenceIds": [
				"cp-catalog-202608-6151607020"
			]
		},
		{
			"label": "Diamètre maximal du disque",
			"value": "100 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151607020"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "3/8-24 UNF",
			"evidenceIds": [
				"cp-catalog-202608-6151607020"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "270 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151607020"
			]
		},
		{
			"label": "Poids publié",
			"value": "1,7 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151607020"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151607020",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=136",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 136, réf. 6151607020",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 12 L/s × 60 = 720 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151607020"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151607020"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151607020"
		],
		"connectorSize": [
			"cp-catalog-202608-6151607020"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151607020"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 136, référence 6151607020."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 720,
		"typical": 720,
		"max": 720
	}
};

export default product;

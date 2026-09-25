const product = {
	"id": "chicago-pneumatic-cp3850-85abve",
	"slug": "ponceuse-rotative-chicago-pneumatic-cp3850-85abve",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Chicago Pneumatic CP3850-85ABVE",
	"brand": "Chicago Pneumatic",
	"model": "CP3850-85ABVE",
	"mpn": "6151704970",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/2 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3850-85abve-catalogue-2026.webp",
		"alt": "Repères techniques CP3850-85ABVE : 2 160 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=165",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3850-85ABVE, référence 6151704970, demande 2 160 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 165. Vitesse à vide : 8 500 tr/min. Puissance de l’outil : 2 100 W.",
		"verifiedFacts": [
			"Vitesse à vide : 8 500 tr/min.",
			"Puissance de l’outil : 2 100 W.",
			"Dimension du plateau : 75 mm.",
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
				"cp-catalog-202608-6151704970"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "2 100 W",
			"evidenceIds": [
				"cp-catalog-202608-6151704970"
			]
		},
		{
			"label": "Dimension du plateau",
			"value": "75 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151704970"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/8-11 UNC",
			"evidenceIds": [
				"cp-catalog-202608-6151704970"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "340 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151704970"
			]
		},
		{
			"label": "Poids publié",
			"value": "2,3 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151704970"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151704970",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=165",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 165, réf. 6151704970",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 36 L/s × 60 = 2160 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151704970"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151704970"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151704970"
		],
		"connectorSize": [
			"cp-catalog-202608-6151704970"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151704970"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 165, référence 6151704970."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 2160,
		"typical": 2160,
		"max": 2160
	}
};

export default product;

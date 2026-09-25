const product = {
	"id": "chicago-pneumatic-cp3249-gabsyg",
	"slug": "meuleuse-chicago-pneumatic-cp3249-gabsyg",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3249-GABSYG",
	"brand": "Chicago Pneumatic",
	"model": "CP3249-GABSYG",
	"mpn": "6151606130",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/2 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3249-gabsyg-catalogue-2026.webp",
		"alt": "Repères techniques CP3249-GABSYG : 2 460 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=132",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3249-GABSYG, référence 6151606130, demande 2 460 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 132. Vitesse à vide : 6 000 tr/min. Puissance de l’outil : 2 700 W.",
		"verifiedFacts": [
			"Vitesse à vide : 6 000 tr/min.",
			"Puissance de l’outil : 2 700 W.",
			"Diamètre maximal du disque : 150 mm.",
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
			"value": "6 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151606130"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "2 700 W",
			"evidenceIds": [
				"cp-catalog-202608-6151606130"
			]
		},
		{
			"label": "Diamètre maximal du disque",
			"value": "150 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151606130"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/8-11 UNC",
			"evidenceIds": [
				"cp-catalog-202608-6151606130"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "554 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151606130"
			]
		},
		{
			"label": "Poids publié",
			"value": "5,6 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151606130"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151606130",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=132",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 132, réf. 6151606130",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 41 L/s × 60 = 2460 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151606130"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151606130"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151606130"
		],
		"connectorSize": [
			"cp-catalog-202608-6151606130"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151606130"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 132, référence 6151606130."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 2460,
		"typical": 2460,
		"max": 2460
	}
};

export default product;

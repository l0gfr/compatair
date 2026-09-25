const product = {
	"id": "chicago-pneumatic-cp3249-gabsude",
	"slug": "meuleuse-chicago-pneumatic-cp3249-gabsude",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3249-GABSUDE",
	"brand": "Chicago Pneumatic",
	"model": "CP3249-GABSUDE",
	"mpn": "6151606190",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/2 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3249-gabsude-catalogue-2026.webp",
		"alt": "Repères techniques CP3249-GABSUDE : 1 980 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=132",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3249-GABSUDE, référence 6151606190, demande 1 980 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 132. Vitesse à vide : 4 500 tr/min. Puissance de l’outil : 2 400 W.",
		"verifiedFacts": [
			"Vitesse à vide : 4 500 tr/min.",
			"Puissance de l’outil : 2 400 W.",
			"Diamètre maximal du disque : 200 mm.",
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
			"value": "4 500 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151606190"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "2 400 W",
			"evidenceIds": [
				"cp-catalog-202608-6151606190"
			]
		},
		{
			"label": "Diamètre maximal du disque",
			"value": "200 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151606190"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/8-11 UNC",
			"evidenceIds": [
				"cp-catalog-202608-6151606190"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "492 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151606190"
			]
		},
		{
			"label": "Poids publié",
			"value": "6,3 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151606190"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151606190",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=132",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 132, réf. 6151606190",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 33 L/s × 60 = 1980 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151606190"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151606190"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151606190"
		],
		"connectorSize": [
			"cp-catalog-202608-6151606190"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151606190"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 132, référence 6151606190."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1980,
		"typical": 1980,
		"max": 1980
	}
};

export default product;

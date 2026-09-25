const product = {
	"id": "chicago-pneumatic-cp5080-4200h18",
	"slug": "ponceuse-bande-chicago-pneumatic-cp5080-4200h18",
	"categoryId": "ponceuse-bande",
	"category": "Ponceuse à bande pneumatique",
	"label": "Ponceuse à bande pneumatique Chicago Pneumatic CP5080-4200H18",
	"brand": "Chicago Pneumatic",
	"model": "CP5080-4200H18",
	"mpn": "6151620020",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp5080-4200h18-catalogue-2026.webp",
		"alt": "Repères techniques CP5080-4200H18 : 1 260 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=182",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP5080-4200H18, référence 6151620020, demande 1 260 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 182. Vitesse à vide : 20 000 tr/min. Puissance de l’outil : 400 W.",
		"verifiedFacts": [
			"Vitesse à vide : 20 000 tr/min.",
			"Puissance de l’outil : 400 W.",
			"Dimensions de la bande : 13x457 mm.",
			"Longueur publiée : 340 mm.",
			"Entrée d’air 1/4 pouce ; flexible intérieur de 10 mm publié par le fabricant."
		],
		"limitations": [
			"Le débit utilisé est la consommation en charge du tableau constructeur à 6,3 bar. Aucune réduction arbitraire pour usage intermittent n’est appliquée.",
			"Le diamètre intérieur de flexible publié est de 10 mm, sans longueur associée dans ce tableau. La perte de pression du réseau reste à vérifier pour votre installation.",
			"Référence issue du catalogue international v6.08.2026. La configuration livrée, les normes applicables et la disponibilité en France restent à confirmer avec le fournisseur.",
			"La consommation à vide publiée est de 720 L/min. Elle reste distincte de la consommation en charge utilisée dans le calcul."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "20 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151620020"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "400 W",
			"evidenceIds": [
				"cp-catalog-202608-6151620020"
			]
		},
		{
			"label": "Dimensions de la bande",
			"value": "13x457 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151620020"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "340 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151620020"
			]
		},
		{
			"label": "Poids publié",
			"value": "1,28 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151620020"
			]
		},
		{
			"label": "Consommation à vide, distincte du débit en charge",
			"value": "720 L/min",
			"evidenceIds": [
				"cp-catalog-202608-6151620020"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151620020",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=182",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 182, réf. 6151620020",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 21 L/s × 60 = 1260 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151620020"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151620020"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151620020"
		],
		"connectorSize": [
			"cp-catalog-202608-6151620020"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151620020"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 182, référence 6151620020."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1260,
		"typical": 1260,
		"max": 1260
	}
};

export default product;

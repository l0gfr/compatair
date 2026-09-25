const product = {
	"id": "chicago-pneumatic-cp3019-09afc",
	"slug": "ponceuse-rotative-chicago-pneumatic-cp3019-09afc",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Chicago Pneumatic CP3019-09AFC",
	"brand": "Chicago Pneumatic",
	"model": "CP3019-09AFC",
	"mpn": "6151702030",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3019-09afc-catalogue-2026.webp",
		"alt": "Repères techniques CP3019-09AFC : 480 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=161",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3019-09AFC, référence 6151702030, demande 480 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 161. Vitesse à vide : 9 000 tr/min. Puissance de l’outil : 375 W.",
		"verifiedFacts": [
			"Vitesse à vide : 9 000 tr/min.",
			"Puissance de l’outil : 375 W.",
			"Dimension du plateau : 75 mm.",
			"Filetage de sortie : 3/8-24 UNF.",
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
			"value": "9 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151702030"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "375 W",
			"evidenceIds": [
				"cp-catalog-202608-6151702030"
			]
		},
		{
			"label": "Dimension du plateau",
			"value": "75 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151702030"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "3/8-24 UNF",
			"evidenceIds": [
				"cp-catalog-202608-6151702030"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "166 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151702030"
			]
		},
		{
			"label": "Poids publié",
			"value": "0,6 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151702030"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151702030",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=161",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 161, réf. 6151702030",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 8 L/s × 60 = 480 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151702030"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151702030"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151702030"
		],
		"connectorSize": [
			"cp-catalog-202608-6151702030"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151702030"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 161, référence 6151702030."
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

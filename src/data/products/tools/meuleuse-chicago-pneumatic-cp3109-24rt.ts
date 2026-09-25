const product = {
	"id": "chicago-pneumatic-cp3109-24rt",
	"slug": "meuleuse-chicago-pneumatic-cp3109-24rt",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3109-24RT",
	"brand": "Chicago Pneumatic",
	"model": "CP3109-24RT",
	"mpn": "6151702900",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 3/8 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3109-24rt-catalogue-2026.webp",
		"alt": "Repères techniques CP3109-24RT : 900 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=118",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3109-24RT, référence 6151702900, demande 900 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 118. Vitesse à vide : 24 000 tr/min. Puissance de l’outil : 600 W.",
		"verifiedFacts": [
			"Vitesse à vide : 24 000 tr/min.",
			"Puissance de l’outil : 600 W.",
			"Pince publiée dans le tableau : 6.4 mm.",
			"Longueur publiée : 222 mm.",
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
			"value": "24 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151702900"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "600 W",
			"evidenceIds": [
				"cp-catalog-202608-6151702900"
			]
		},
		{
			"label": "Pince publiée dans le tableau",
			"value": "6.4 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151702900"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "222 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151702900"
			]
		},
		{
			"label": "Poids publié",
			"value": "1,2 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151702900"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151702900",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=118",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 118, réf. 6151702900",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 15 L/s × 60 = 900 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151702900"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151702900"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151702900"
		],
		"connectorSize": [
			"cp-catalog-202608-6151702900"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151702900"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 118, référence 6151702900."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 900,
		"typical": 900,
		"max": 900
	}
};

export default product;

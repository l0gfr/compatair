const product = {
	"id": "chicago-pneumatic-cp3019-09af",
	"slug": "ponceuse-rotative-chicago-pneumatic-cp3019-09af",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Chicago Pneumatic CP3019-09AF",
	"brand": "Chicago Pneumatic",
	"model": "CP3019-09AF",
	"mpn": "6151702040",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3019-09af-catalogue-2026.webp",
		"alt": "Repères techniques CP3019-09AF : 480 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=161",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3019-09AF, référence 6151702040, demande 480 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 161. Vitesse à vide : 9 000 tr/min. Puissance de l’outil : 375 W.",
		"verifiedFacts": [
			"Vitesse à vide : 9 000 tr/min.",
			"Puissance de l’outil : 375 W.",
			"Dimension du plateau : 75 mm.",
			"Filetage de sortie : 1/4-20 UNC.",
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
				"cp-catalog-202608-6151702040"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "375 W",
			"evidenceIds": [
				"cp-catalog-202608-6151702040"
			]
		},
		{
			"label": "Dimension du plateau",
			"value": "75 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151702040"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "1/4-20 UNC",
			"evidenceIds": [
				"cp-catalog-202608-6151702040"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "166 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151702040"
			]
		},
		{
			"label": "Poids publié",
			"value": "0,6 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151702040"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151702040",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=161",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 161, réf. 6151702040",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 8 L/s × 60 = 480 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151702040"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151702040"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151702040"
		],
		"connectorSize": [
			"cp-catalog-202608-6151702040"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151702040"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 161, référence 6151702040."
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

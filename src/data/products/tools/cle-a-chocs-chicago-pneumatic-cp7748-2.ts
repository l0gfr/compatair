const product = {
	"id": "chicago-pneumatic-cp7748-2",
	"slug": "cle-a-chocs-chicago-pneumatic-cp7748-2",
	"categoryId": "cle-a-chocs",
	"category": "Clé à chocs",
	"label": "Clé à chocs Chicago Pneumatic CP7748-2",
	"brand": "Chicago Pneumatic",
	"model": "CP7748-2",
	"mpn": "8941077486",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "burst",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp7748-2-catalogue-2026.webp",
		"alt": "Repères techniques CP7748-2 : 720 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=23",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP7748-2, référence 8941077486, demande 720 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 23. Vitesse à vide : 7 000 tr/min. Couple maximal en marche arrière : 1300 Nm.",
		"verifiedFacts": [
			"Vitesse à vide : 7 000 tr/min.",
			"Couple maximal en marche arrière : 1300 Nm.",
			"Longueur publiée : 225 mm.",
			"Poids publié : 2,11 kg.",
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
			"value": "7 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-8941077486"
			]
		},
		{
			"label": "Couple maximal en marche arrière",
			"value": "1300 Nm",
			"evidenceIds": [
				"cp-catalog-202608-8941077486"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "225 mm",
			"evidenceIds": [
				"cp-catalog-202608-8941077486"
			]
		},
		{
			"label": "Poids publié",
			"value": "2,11 kg",
			"evidenceIds": [
				"cp-catalog-202608-8941077486"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-8941077486",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=23",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 23, réf. 8941077486",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 12 L/s × 60 = 720 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-8941077486"
		],
		"airflowLpm": [
			"cp-catalog-202608-8941077486"
		],
		"workingPressureBar": [
			"cp-catalog-202608-8941077486"
		],
		"connectorSize": [
			"cp-catalog-202608-8941077486"
		],
		"recommendedHose": [
			"cp-catalog-202608-8941077486"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 23, référence 8941077486."
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

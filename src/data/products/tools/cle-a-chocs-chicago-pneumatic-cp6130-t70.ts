const product = {
	"id": "chicago-pneumatic-cp6130-t70",
	"slug": "cle-a-chocs-chicago-pneumatic-cp6130-t70",
	"categoryId": "cle-a-chocs",
	"category": "Clé à chocs",
	"label": "Clé à chocs Chicago Pneumatic CP6130-T70",
	"brand": "Chicago Pneumatic",
	"model": "CP6130-T70",
	"mpn": "6151590010",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "burst",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp6130-t70-catalogue-2026.webp",
		"alt": "Repères techniques CP6130-T70 : 1 908 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=38",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP6130-T70, référence 6151590010, demande 1 908 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 38. Vitesse à vide : 4 000 tr/min. Couple maximal en marche arrière : 12500 Nm.",
		"verifiedFacts": [
			"Vitesse à vide : 4 000 tr/min.",
			"Couple maximal en marche arrière : 12500 Nm.",
			"Longueur publiée : 500 mm.",
			"Poids publié : 33 kg.",
			"Entrée d’air 1 pouce ; flexible intérieur de 10 mm publié par le fabricant."
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
			"value": "4 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151590010"
			]
		},
		{
			"label": "Couple maximal en marche arrière",
			"value": "12500 Nm",
			"evidenceIds": [
				"cp-catalog-202608-6151590010"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "500 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151590010"
			]
		},
		{
			"label": "Poids publié",
			"value": "33 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151590010"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151590010",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=38",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 38, réf. 6151590010",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 31.8 L/s × 60 = 1908 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151590010"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151590010"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151590010"
		],
		"connectorSize": [
			"cp-catalog-202608-6151590010"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151590010"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 38, référence 6151590010."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1908,
		"typical": 1908,
		"max": 1908
	}
};

export default product;

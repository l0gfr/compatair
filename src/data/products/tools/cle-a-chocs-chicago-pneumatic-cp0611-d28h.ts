const product = {
	"id": "chicago-pneumatic-cp0611-d28h",
	"slug": "cle-a-chocs-chicago-pneumatic-cp0611-d28h",
	"categoryId": "cle-a-chocs",
	"category": "Clé à chocs",
	"label": "Clé à chocs Chicago Pneumatic CP0611-D28H",
	"brand": "Chicago Pneumatic",
	"model": "CP0611-D28H",
	"mpn": "6151590160",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/2 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "burst",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp0611-d28h-catalogue-2026.webp",
		"alt": "Repères techniques CP0611-D28H : 1 920 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=34",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP0611-D28H, référence 6151590160, demande 1 920 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 34. Vitesse à vide : 3 500 tr/min. Couple maximal en marche arrière : 3790 Nm.",
		"verifiedFacts": [
			"Vitesse à vide : 3 500 tr/min.",
			"Couple maximal en marche arrière : 3790 Nm.",
			"Longueur publiée : 360 mm.",
			"Poids publié : 10,4 kg.",
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
			"value": "3 500 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151590160"
			]
		},
		{
			"label": "Couple maximal en marche arrière",
			"value": "3790 Nm",
			"evidenceIds": [
				"cp-catalog-202608-6151590160"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "360 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151590160"
			]
		},
		{
			"label": "Poids publié",
			"value": "10,4 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151590160"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151590160",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=34",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 34, réf. 6151590160",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 32 L/s × 60 = 1920 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151590160"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151590160"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151590160"
		],
		"connectorSize": [
			"cp-catalog-202608-6151590160"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151590160"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 34, référence 6151590160."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1920,
		"typical": 1920,
		"max": 1920
	}
};

export default product;

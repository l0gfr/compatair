const product = {
	"id": "chicago-pneumatic-cp876",
	"slug": "meuleuse-chicago-pneumatic-cp876",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP876",
	"brand": "Chicago Pneumatic",
	"model": "CP876",
	"mpn": "T023996",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp876-catalogue-2026.webp",
		"alt": "Repères techniques CP876 : 660 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=112",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP876, référence T023996, demande 660 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 112. Vitesse à vide : 30 000 tr/min. Puissance de l’outil : 220 W.",
		"verifiedFacts": [
			"Vitesse à vide : 30 000 tr/min.",
			"Puissance de l’outil : 220 W.",
			"Pince publiée dans le tableau : 6.0 mm.",
			"Longueur publiée : 121 mm.",
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
			"value": "30 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-t023996"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "220 W",
			"evidenceIds": [
				"cp-catalog-202608-t023996"
			]
		},
		{
			"label": "Pince publiée dans le tableau",
			"value": "6.0 mm",
			"evidenceIds": [
				"cp-catalog-202608-t023996"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "121 mm",
			"evidenceIds": [
				"cp-catalog-202608-t023996"
			]
		},
		{
			"label": "Poids publié",
			"value": "0,34 kg",
			"evidenceIds": [
				"cp-catalog-202608-t023996"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-t023996",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=112",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 112, réf. T023996",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 11 L/s × 60 = 660 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-t023996"
		],
		"airflowLpm": [
			"cp-catalog-202608-t023996"
		],
		"workingPressureBar": [
			"cp-catalog-202608-t023996"
		],
		"connectorSize": [
			"cp-catalog-202608-t023996"
		],
		"recommendedHose": [
			"cp-catalog-202608-t023996"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 112, référence T023996."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 660,
		"typical": 660,
		"max": 660
	}
};

export default product;

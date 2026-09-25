const product = {
	"id": "chicago-pneumatic-cp3119-010",
	"slug": "meuleuse-chicago-pneumatic-cp3119-010",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3119-010",
	"brand": "Chicago Pneumatic",
	"model": "CP3119-010",
	"mpn": "6151701680",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 3/8 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3119-010-catalogue-2026.webp",
		"alt": "Repères techniques CP3119-010 : 1 020 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=119",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3119-010, référence 6151701680, demande 1 020 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 119. Vitesse à vide : 1 000 tr/min. Puissance de l’outil : 900 W.",
		"verifiedFacts": [
			"Vitesse à vide : 1 000 tr/min.",
			"Puissance de l’outil : 900 W.",
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
			"value": "1 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151701680"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "900 W",
			"evidenceIds": [
				"cp-catalog-202608-6151701680"
			]
		},
		{
			"label": "Pince publiée dans le tableau",
			"value": "6.4 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151701680"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "222 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151701680"
			]
		},
		{
			"label": "Poids publié",
			"value": "1,4 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151701680"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151701680",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=119",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 119, réf. 6151701680",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 17 L/s × 60 = 1020 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151701680"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151701680"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151701680"
		],
		"connectorSize": [
			"cp-catalog-202608-6151701680"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151701680"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 119, référence 6151701680."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1020,
		"typical": 1020,
		"max": 1020
	}
};

export default product;

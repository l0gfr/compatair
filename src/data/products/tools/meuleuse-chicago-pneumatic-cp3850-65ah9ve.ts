const product = {
	"id": "chicago-pneumatic-cp3850-65ah9ve",
	"slug": "meuleuse-chicago-pneumatic-cp3850-65ah9ve",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3850-65AH9VE",
	"brand": "Chicago Pneumatic",
	"model": "CP3850-65AH9VE",
	"mpn": "6151704950",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/2 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3850-65ah9ve-catalogue-2026.webp",
		"alt": "Repères techniques CP3850-65AH9VE : 2 280 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=143",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3850-65AH9VE, référence 6151704950, demande 2 280 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 143. Vitesse à vide : 6 500 tr/min. Puissance de l’outil : 2 100 W.",
		"verifiedFacts": [
			"Vitesse à vide : 6 500 tr/min.",
			"Puissance de l’outil : 2 100 W.",
			"Diamètre maximal du disque : 230 mm.",
			"Filetage de sortie : HEXA.",
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
			"value": "6 500 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151704950"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "2 100 W",
			"evidenceIds": [
				"cp-catalog-202608-6151704950"
			]
		},
		{
			"label": "Diamètre maximal du disque",
			"value": "230 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151704950"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "HEXA",
			"evidenceIds": [
				"cp-catalog-202608-6151704950"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "340 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151704950"
			]
		},
		{
			"label": "Poids publié",
			"value": "2,9 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151704950"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151704950",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=143",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 143, réf. 6151704950",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 38 L/s × 60 = 2280 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151704950"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151704950"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151704950"
		],
		"connectorSize": [
			"cp-catalog-202608-6151704950"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151704950"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 143, référence 6151704950."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 2280,
		"typical": 2280,
		"max": 2280
	}
};

export default product;

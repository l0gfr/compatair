const product = {
	"id": "chicago-pneumatic-cp5510-50h",
	"slug": "ponceuse-orbitale-chicago-pneumatic-cp5510-50h",
	"categoryId": "ponceuse-orbitale",
	"category": "Ponceuse orbitale pneumatique",
	"label": "Ponceuse orbitale pneumatique Chicago Pneumatic CP5510-50H",
	"brand": "Chicago Pneumatic",
	"model": "CP5510-50H",
	"mpn": "6151700790",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp5510-50h-catalogue-2026.webp",
		"alt": "Repères techniques CP5510-50H : 660 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=176",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP5510-50H, référence 6151700790, demande 660 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 176. Vitesse à vide : 10 000 tr/min. Puissance de l’outil : 375 W.",
		"verifiedFacts": [
			"Vitesse à vide : 10 000 tr/min.",
			"Puissance de l’outil : 375 W.",
			"Aspiration des poussières : Sans aspiration.",
			"Dimension du plateau : 127 mm.",
			"Entrée d’air 1/4 pouce ; flexible intérieur de 10 mm publié par le fabricant."
		],
		"limitations": [
			"Le débit utilisé est la consommation en charge du tableau constructeur à 6,3 bar. Aucune réduction arbitraire pour usage intermittent n’est appliquée.",
			"Le diamètre intérieur de flexible publié est de 10 mm, sans longueur associée dans ce tableau. La perte de pression du réseau reste à vérifier pour votre installation.",
			"Référence issue du catalogue international v6.08.2026. La configuration livrée, les normes applicables et la disponibilité en France restent à confirmer avec le fournisseur.",
			"La consommation à vide publiée est de 600 L/min. Elle reste distincte de la consommation en charge utilisée dans le calcul."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "10 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151700790"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "375 W",
			"evidenceIds": [
				"cp-catalog-202608-6151700790"
			]
		},
		{
			"label": "Aspiration des poussières",
			"value": "Sans aspiration",
			"evidenceIds": [
				"cp-catalog-202608-6151700790"
			]
		},
		{
			"label": "Dimension du plateau",
			"value": "127 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151700790"
			]
		},
		{
			"label": "Poids publié",
			"value": "1,3 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151700790"
			]
		},
		{
			"label": "Consommation à vide, distincte du débit en charge",
			"value": "600 L/min",
			"evidenceIds": [
				"cp-catalog-202608-6151700790"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151700790",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=176",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 176, réf. 6151700790",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 11 L/s × 60 = 660 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151700790"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151700790"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151700790"
		],
		"connectorSize": [
			"cp-catalog-202608-6151700790"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151700790"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 176, référence 6151700790."
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

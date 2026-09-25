const product = {
	"id": "chicago-pneumatic-cp3451-18se3",
	"slug": "meuleuse-chicago-pneumatic-cp3451-18se3",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3451-18SE3",
	"brand": "Chicago Pneumatic",
	"model": "CP3451-18SE3",
	"mpn": "6151602030",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 3/8 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3451-18se3-catalogue-2026.webp",
		"alt": "Repères techniques CP3451-18SE3 : 1 020 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=131",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3451-18SE3, référence 6151602030, demande 1 020 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 131. Vitesse à vide : 18 000 tr/min. Puissance de l’outil : 750 W.",
		"verifiedFacts": [
			"Vitesse à vide : 18 000 tr/min.",
			"Puissance de l’outil : 750 W.",
			"Diamètre maximal du disque : 80 mm.",
			"Filetage de sortie : 3/8-24 UNF.",
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
			"value": "18 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151602030"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "750 W",
			"evidenceIds": [
				"cp-catalog-202608-6151602030"
			]
		},
		{
			"label": "Diamètre maximal du disque",
			"value": "80 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151602030"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "3/8-24 UNF",
			"evidenceIds": [
				"cp-catalog-202608-6151602030"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "351 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151602030"
			]
		},
		{
			"label": "Poids publié",
			"value": "1,6 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151602030"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151602030",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=131",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 131, réf. 6151602030",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 17 L/s × 60 = 1020 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151602030"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151602030"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151602030"
		],
		"connectorSize": [
			"cp-catalog-202608-6151602030"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151602030"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 131, référence 6151602030."
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

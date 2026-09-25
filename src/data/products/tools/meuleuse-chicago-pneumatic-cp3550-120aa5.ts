const product = {
	"id": "chicago-pneumatic-cp3550-120aa5",
	"slug": "meuleuse-chicago-pneumatic-cp3550-120aa5",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3550-120AA5",
	"brand": "Chicago Pneumatic",
	"model": "CP3550-120AA5",
	"mpn": "6151607780",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 3/8 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3550-120aa5-catalogue-2026.webp",
		"alt": "Repères techniques CP3550-120AA5 : 1 560 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=138",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3550-120AA5, référence 6151607780, demande 1 560 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 138. Vitesse à vide : 12 000 tr/min. Puissance de l’outil : 1 100 W.",
		"verifiedFacts": [
			"Vitesse à vide : 12 000 tr/min.",
			"Puissance de l’outil : 1 100 W.",
			"Diamètre maximal du disque : 125 mm.",
			"Filetage de sortie : M14x2.",
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
			"value": "12 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151607780"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "1 100 W",
			"evidenceIds": [
				"cp-catalog-202608-6151607780"
			]
		},
		{
			"label": "Diamètre maximal du disque",
			"value": "125 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151607780"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "M14x2",
			"evidenceIds": [
				"cp-catalog-202608-6151607780"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "252 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151607780"
			]
		},
		{
			"label": "Poids publié",
			"value": "1,9 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151607780"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151607780",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=138",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 138, réf. 6151607780",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 26 L/s × 60 = 1560 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151607780"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151607780"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151607780"
		],
		"connectorSize": [
			"cp-catalog-202608-6151607780"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151607780"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 138, référence 6151607780."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1560,
		"typical": 1560,
		"max": 1560
	}
};

export default product;

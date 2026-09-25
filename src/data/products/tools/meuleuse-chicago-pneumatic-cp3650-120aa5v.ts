const product = {
	"id": "chicago-pneumatic-cp3650-120aa5v",
	"slug": "meuleuse-chicago-pneumatic-cp3650-120aa5v",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3650-120AA5V",
	"brand": "Chicago Pneumatic",
	"model": "CP3650-120AA5V",
	"mpn": "6151607870",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 3/8 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3650-120aa5v-catalogue-2026.webp",
		"alt": "Repères techniques CP3650-120AA5V : 1 788 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=139",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3650-120AA5V, référence 6151607870, demande 1 788 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 139. Vitesse à vide : 12 000 tr/min. Puissance de l’outil : 1 800 W.",
		"verifiedFacts": [
			"Vitesse à vide : 12 000 tr/min.",
			"Puissance de l’outil : 1 800 W.",
			"Diamètre maximal du disque : 125 mm.",
			"Filetage de sortie : M14.",
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
				"cp-catalog-202608-6151607870"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "1 800 W",
			"evidenceIds": [
				"cp-catalog-202608-6151607870"
			]
		},
		{
			"label": "Diamètre maximal du disque",
			"value": "125 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151607870"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "M14",
			"evidenceIds": [
				"cp-catalog-202608-6151607870"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "247.5 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151607870"
			]
		},
		{
			"label": "Poids publié",
			"value": "2,2 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151607870"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151607870",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=139",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 139, réf. 6151607870",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 29.8 L/s × 60 = 1788 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151607870"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151607870"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151607870"
		],
		"connectorSize": [
			"cp-catalog-202608-6151607870"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151607870"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 139, référence 6151607870."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1788,
		"typical": 1788,
		"max": 1788
	}
};

export default product;

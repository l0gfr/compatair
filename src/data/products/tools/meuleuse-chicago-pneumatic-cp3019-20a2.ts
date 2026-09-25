const product = {
	"id": "chicago-pneumatic-cp3019-20a2",
	"slug": "meuleuse-chicago-pneumatic-cp3019-20a2",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3019-20A2",
	"brand": "Chicago Pneumatic",
	"model": "CP3019-20A2",
	"mpn": "6151704880",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3019-20a2-catalogue-2026.webp",
		"alt": "Repères techniques CP3019-20A2 : 600 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=134",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3019-20A2, référence 6151704880, demande 600 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 134. Vitesse à vide : 20 000 tr/min. Puissance de l’outil : 375 W.",
		"verifiedFacts": [
			"Vitesse à vide : 20 000 tr/min.",
			"Puissance de l’outil : 375 W.",
			"Diamètre maximal du disque : 50 mm.",
			"Filetage de sortie : 3/8-24 UNF.",
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
			"value": "20 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151704880"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "375 W",
			"evidenceIds": [
				"cp-catalog-202608-6151704880"
			]
		},
		{
			"label": "Diamètre maximal du disque",
			"value": "50 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151704880"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "3/8-24 UNF",
			"evidenceIds": [
				"cp-catalog-202608-6151704880"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "163 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151704880"
			]
		},
		{
			"label": "Poids publié",
			"value": "0,6 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151704880"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151704880",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=134",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 134, réf. 6151704880",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 10 L/s × 60 = 600 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151704880"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151704880"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151704880"
		],
		"connectorSize": [
			"cp-catalog-202608-6151704880"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151704880"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 134, référence 6151704880."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	}
};

export default product;

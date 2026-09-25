const product = {
	"id": "chicago-pneumatic-cp1117p26-atex",
	"slug": "perceuse-chicago-pneumatic-cp1117p26-atex",
	"categoryId": "perceuse",
	"category": "Perceuse pneumatique",
	"label": "Perceuse pneumatique Chicago Pneumatic CP1117P26 ATEX",
	"brand": "Chicago Pneumatic",
	"model": "CP1117P26 ATEX",
	"mpn": "6151580370",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp1117p26-atex-catalogue-2026.webp",
		"alt": "Repères techniques CP1117P26 ATEX : 840 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=195",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP1117P26 ATEX, référence 6151580370, demande 840 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 195. Vitesse à vide : 2 600 tr/min. Puissance de l’outil : 750 W.",
		"verifiedFacts": [
			"Vitesse à vide : 2 600 tr/min.",
			"Puissance de l’outil : 750 W.",
			"Couple de calage : 6.3 Nm.",
			"Capacité publiée du mandrin : 10 mm.",
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
			"value": "2 600 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151580370"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "750 W",
			"evidenceIds": [
				"cp-catalog-202608-6151580370"
			]
		},
		{
			"label": "Couple de calage",
			"value": "6.3 Nm",
			"evidenceIds": [
				"cp-catalog-202608-6151580370"
			]
		},
		{
			"label": "Capacité publiée du mandrin",
			"value": "10 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151580370"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "220.1 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151580370"
			]
		},
		{
			"label": "Poids publié",
			"value": "2,2 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151580370"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151580370",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=195",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 195, réf. 6151580370",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 14 L/s × 60 = 840 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151580370"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151580370"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151580370"
		],
		"connectorSize": [
			"cp-catalog-202608-6151580370"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151580370"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 195, référence 6151580370."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 840,
		"typical": 840,
		"max": 840
	}
};

export default product;

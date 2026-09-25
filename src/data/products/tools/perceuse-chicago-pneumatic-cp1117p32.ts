const product = {
	"id": "chicago-pneumatic-cp1117p32",
	"slug": "perceuse-chicago-pneumatic-cp1117p32",
	"categoryId": "perceuse",
	"category": "Perceuse pneumatique",
	"label": "Perceuse pneumatique Chicago Pneumatic CP1117P32",
	"brand": "Chicago Pneumatic",
	"model": "CP1117P32",
	"mpn": "6151580110",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp1117p32-catalogue-2026.webp",
		"alt": "Repères techniques CP1117P32 : 840 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=195",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP1117P32, référence 6151580110, demande 840 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 195. Vitesse à vide : 3 200 tr/min. Puissance de l’outil : 750 W.",
		"verifiedFacts": [
			"Vitesse à vide : 3 200 tr/min.",
			"Puissance de l’outil : 750 W.",
			"Couple de calage : 5.4 Nm.",
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
			"value": "3 200 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151580110"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "750 W",
			"evidenceIds": [
				"cp-catalog-202608-6151580110"
			]
		},
		{
			"label": "Couple de calage",
			"value": "5.4 Nm",
			"evidenceIds": [
				"cp-catalog-202608-6151580110"
			]
		},
		{
			"label": "Capacité publiée du mandrin",
			"value": "10 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151580110"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "200 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151580110"
			]
		},
		{
			"label": "Poids publié",
			"value": "0,99 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151580110"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151580110",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=195",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 195, réf. 6151580110",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 14 L/s × 60 = 840 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151580110"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151580110"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151580110"
		],
		"connectorSize": [
			"cp-catalog-202608-6151580110"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151580110"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 195, référence 6151580110."
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

const product = {
	"id": "chicago-pneumatic-cp3349-salavade",
	"slug": "meuleuse-chicago-pneumatic-cp3349-salavade",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3349-SALAVADE",
	"brand": "Chicago Pneumatic",
	"model": "CP3349-SALAVADE",
	"mpn": "6151609110",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 2760,
		"typical": 2760,
		"max": 2760
	},
	"usagePattern": "continuous",
	"connectorSize": "Entrée 1/2 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3349-salavade-catalogue-2026.webp",
		"alt": "Repères techniques CP3349-SALAVADE : 2 760 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=149",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3349-SALAVADE, référence 6151609110, demande 2 760 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 149. Vitesse à vide : 7 700 tr/min. Puissance de l’outil : 3 000 W.",
		"verifiedFacts": [
			"Vitesse à vide : 7 700 tr/min.",
			"Puissance de l’outil : 3 000 W.",
			"Diamètre de roue publié : 180 mm.",
			"Broche publiée : 5/8-11 UNC.",
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
			"value": "7 700 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151609110"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "3 000 W",
			"evidenceIds": [
				"cp-catalog-202608-6151609110"
			]
		},
		{
			"label": "Diamètre de roue publié",
			"value": "180 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151609110"
			]
		},
		{
			"label": "Broche publiée",
			"value": "5/8-11 UNC",
			"evidenceIds": [
				"cp-catalog-202608-6151609110"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "280 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151609110"
			]
		},
		{
			"label": "Poids publié",
			"value": "4,2 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151609110"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151609110",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=149",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 149, réf. 6151609110",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 46 L/s × 60 = 2760 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151609110"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151609110"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151609110"
		],
		"connectorSize": [
			"cp-catalog-202608-6151609110"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151609110"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 149, référence 6151609110."
	]
};

export default product;

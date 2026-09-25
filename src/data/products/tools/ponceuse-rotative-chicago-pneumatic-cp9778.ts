const product = {
	"id": "chicago-pneumatic-cp9778",
	"slug": "ponceuse-rotative-chicago-pneumatic-cp9778",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Chicago Pneumatic CP9778",
	"brand": "Chicago Pneumatic",
	"model": "CP9778",
	"mpn": "6151939778",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp9778-catalogue-2026.webp",
		"alt": "Repères techniques CP9778 : 720 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=160",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP9778, référence 6151939778, demande 720 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 160. Vitesse à vide : 14 000 tr/min. Puissance de l’outil : 370 W.",
		"verifiedFacts": [
			"Vitesse à vide : 14 000 tr/min.",
			"Puissance de l’outil : 370 W.",
			"Dimension du plateau : 125 mm.",
			"Filetage de sortie : 7/16-20 UNF.",
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
			"value": "14 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151939778"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "370 W",
			"evidenceIds": [
				"cp-catalog-202608-6151939778"
			]
		},
		{
			"label": "Dimension du plateau",
			"value": "125 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151939778"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "7/16-20 UNF",
			"evidenceIds": [
				"cp-catalog-202608-6151939778"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "297 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151939778"
			]
		},
		{
			"label": "Poids publié",
			"value": "1 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151939778"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151939778",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=160",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 160, réf. 6151939778",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 12 L/s × 60 = 720 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151939778"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151939778"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151939778"
		],
		"connectorSize": [
			"cp-catalog-202608-6151939778"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151939778"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 160, référence 6151939778."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 720,
		"typical": 720,
		"max": 720
	}
};

export default product;

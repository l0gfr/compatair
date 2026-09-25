const product = {
	"id": "chicago-pneumatic-cp3850-77ab7v",
	"slug": "meuleuse-chicago-pneumatic-cp3850-77ab7v",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3850-77AB7V",
	"brand": "Chicago Pneumatic",
	"model": "CP3850-77AB7V",
	"mpn": "6151704960",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/2 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3850-77ab7v-catalogue-2026.webp",
		"alt": "Repères techniques CP3850-77AB7V : 1 920 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=143",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3850-77AB7V, référence 6151704960, demande 1 920 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 143. Vitesse à vide : 7 700 tr/min. Puissance de l’outil : 2 100 W.",
		"verifiedFacts": [
			"Vitesse à vide : 7 700 tr/min.",
			"Puissance de l’outil : 2 100 W.",
			"Diamètre maximal du disque : 180 mm.",
			"Filetage de sortie : 5/8-11 UNC.",
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
				"cp-catalog-202608-6151704960"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "2 100 W",
			"evidenceIds": [
				"cp-catalog-202608-6151704960"
			]
		},
		{
			"label": "Diamètre maximal du disque",
			"value": "180 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151704960"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/8-11 UNC",
			"evidenceIds": [
				"cp-catalog-202608-6151704960"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "340 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151704960"
			]
		},
		{
			"label": "Poids publié",
			"value": "3 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151704960"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151704960",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=143",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 143, réf. 6151704960",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 32 L/s × 60 = 1920 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151704960"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151704960"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151704960"
		],
		"connectorSize": [
			"cp-catalog-202608-6151704960"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151704960"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 143, référence 6151704960."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1920,
		"typical": 1920,
		"max": 1920
	}
};

export default product;

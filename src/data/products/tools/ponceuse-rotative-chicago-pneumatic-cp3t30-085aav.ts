const product = {
	"id": "chicago-pneumatic-cp3t30-085aav",
	"slug": "ponceuse-rotative-chicago-pneumatic-cp3t30-085aav",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Chicago Pneumatic CP3T30-085AAV",
	"brand": "Chicago Pneumatic",
	"model": "CP3T30-085AAV",
	"mpn": "6151620470",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 3/8 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3t30-085aav-catalogue-2026.webp",
		"alt": "Repères techniques CP3T30-085AAV : 1 920 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=166",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3T30-085AAV, référence 6151620470, demande 1 920 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 166. Vitesse à vide : 8 500 tr/min. Puissance de l’outil : 2 300 W.",
		"verifiedFacts": [
			"Vitesse à vide : 8 500 tr/min.",
			"Puissance de l’outil : 2 300 W.",
			"Dimension du plateau : 180 mm.",
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
			"value": "8 500 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151620470"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "2 300 W",
			"evidenceIds": [
				"cp-catalog-202608-6151620470"
			]
		},
		{
			"label": "Dimension du plateau",
			"value": "180 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151620470"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "M14",
			"evidenceIds": [
				"cp-catalog-202608-6151620470"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "302 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151620470"
			]
		},
		{
			"label": "Poids publié",
			"value": "2,1 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151620470"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151620470",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=166",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 166, réf. 6151620470",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 32 L/s × 60 = 1920 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151620470"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151620470"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151620470"
		],
		"connectorSize": [
			"cp-catalog-202608-6151620470"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151620470"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 166, référence 6151620470."
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

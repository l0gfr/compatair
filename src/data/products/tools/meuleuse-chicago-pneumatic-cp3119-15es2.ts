const product = {
	"id": "chicago-pneumatic-cp3119-15es2",
	"slug": "meuleuse-chicago-pneumatic-cp3119-15es2",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3119-15ES2",
	"brand": "Chicago Pneumatic",
	"model": "CP3119-15ES2",
	"mpn": "6151606040",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 3/8 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3119-15es2-catalogue-2026.webp",
		"alt": "Repères techniques CP3119-15ES2 : 960 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=131",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3119-15ES2, référence 6151606040, demande 960 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 131. Vitesse à vide : 15 000 tr/min. Puissance de l’outil : 900 W.",
		"verifiedFacts": [
			"Vitesse à vide : 15 000 tr/min.",
			"Puissance de l’outil : 900 W.",
			"Diamètre maximal du disque : 63 mm.",
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
			"value": "15 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151606040"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "900 W",
			"evidenceIds": [
				"cp-catalog-202608-6151606040"
			]
		},
		{
			"label": "Diamètre maximal du disque",
			"value": "63 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151606040"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "3/8-24 UNF",
			"evidenceIds": [
				"cp-catalog-202608-6151606040"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "338 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151606040"
			]
		},
		{
			"label": "Poids publié",
			"value": "1,6 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151606040"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151606040",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=131",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 131, réf. 6151606040",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 16 L/s × 60 = 960 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151606040"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151606040"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151606040"
		],
		"connectorSize": [
			"cp-catalog-202608-6151606040"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151606040"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 131, référence 6151606040."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 960,
		"typical": 960,
		"max": 960
	}
};

export default product;

const product = {
	"id": "chicago-pneumatic-cp3330-salavade",
	"slug": "meuleuse-chicago-pneumatic-cp3330-salavade",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3330-SALAVADE",
	"brand": "Chicago Pneumatic",
	"model": "CP3330-SALAVADE",
	"mpn": "6151609250",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/2 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3330-salavade-catalogue-2026.webp",
		"alt": "Repères techniques CP3330-SALAVADE : 2 340 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=147",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3330-SALAVADE, référence 6151609250, demande 2 340 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 147. Vitesse à vide : 8 500 tr/min. Puissance de l’outil : 2 800 W.",
		"verifiedFacts": [
			"Vitesse à vide : 8 500 tr/min.",
			"Puissance de l’outil : 2 800 W.",
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
			"value": "8 500 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151609250"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "2 800 W",
			"evidenceIds": [
				"cp-catalog-202608-6151609250"
			]
		},
		{
			"label": "Diamètre maximal du disque",
			"value": "180 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151609250"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/8-11 UNC",
			"evidenceIds": [
				"cp-catalog-202608-6151609250"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "250 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151609250"
			]
		},
		{
			"label": "Poids publié",
			"value": "4,65 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151609250"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151609250",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=147",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 147, réf. 6151609250",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 39 L/s × 60 = 2340 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151609250"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151609250"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151609250"
		],
		"connectorSize": [
			"cp-catalog-202608-6151609250"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151609250"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 147, référence 6151609250."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 2340,
		"typical": 2340,
		"max": 2340
	}
};

export default product;

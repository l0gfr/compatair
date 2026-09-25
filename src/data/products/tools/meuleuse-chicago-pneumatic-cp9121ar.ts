const product = {
	"id": "chicago-pneumatic-cp9121ar",
	"slug": "meuleuse-chicago-pneumatic-cp9121ar",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP9121AR",
	"brand": "Chicago Pneumatic",
	"model": "CP9121AR",
	"mpn": "6151957321",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp9121ar-catalogue-2026.webp",
		"alt": "Repères techniques CP9121AR : 780 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=135",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP9121AR, référence 6151957321, demande 780 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 135. Vitesse à vide : 12 000 tr/min. Puissance de l’outil : 600 W.",
		"verifiedFacts": [
			"Vitesse à vide : 12 000 tr/min.",
			"Puissance de l’outil : 600 W.",
			"Diamètre maximal du disque : 125 mm.",
			"Filetage de sortie : M14x2.",
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
			"value": "12 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151957321"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "600 W",
			"evidenceIds": [
				"cp-catalog-202608-6151957321"
			]
		},
		{
			"label": "Diamètre maximal du disque",
			"value": "125 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151957321"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "M14x2",
			"evidenceIds": [
				"cp-catalog-202608-6151957321"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "240 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151957321"
			]
		},
		{
			"label": "Poids publié",
			"value": "2,1 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151957321"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151957321",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=135",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 135, réf. 6151957321",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 13 L/s × 60 = 780 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151957321"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151957321"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151957321"
		],
		"connectorSize": [
			"cp-catalog-202608-6151957321"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151957321"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 135, référence 6151957321."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 780,
		"typical": 780,
		"max": 780
	}
};

export default product;

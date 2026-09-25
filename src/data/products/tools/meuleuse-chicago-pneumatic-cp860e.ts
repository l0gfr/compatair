const product = {
	"id": "chicago-pneumatic-cp860e",
	"slug": "meuleuse-chicago-pneumatic-cp860e",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP860E",
	"brand": "Chicago Pneumatic",
	"model": "CP860E",
	"mpn": "T021136",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp860e-catalogue-2026.webp",
		"alt": "Repères techniques CP860E : 594 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=112",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP860E, référence T021136, demande 594 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 112. Vitesse à vide : 24 000 tr/min. Puissance de l’outil : 400 W.",
		"verifiedFacts": [
			"Vitesse à vide : 24 000 tr/min.",
			"Puissance de l’outil : 400 W.",
			"Pince publiée dans le tableau : 6.4 mm.",
			"Longueur publiée : 146 mm.",
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
			"value": "24 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-t021136"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "400 W",
			"evidenceIds": [
				"cp-catalog-202608-t021136"
			]
		},
		{
			"label": "Pince publiée dans le tableau",
			"value": "6.4 mm",
			"evidenceIds": [
				"cp-catalog-202608-t021136"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "146 mm",
			"evidenceIds": [
				"cp-catalog-202608-t021136"
			]
		},
		{
			"label": "Poids publié",
			"value": "0,57 kg",
			"evidenceIds": [
				"cp-catalog-202608-t021136"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-t021136",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=112",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 112, réf. T021136",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 9.9 L/s × 60 = 594 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-t021136"
		],
		"airflowLpm": [
			"cp-catalog-202608-t021136"
		],
		"workingPressureBar": [
			"cp-catalog-202608-t021136"
		],
		"connectorSize": [
			"cp-catalog-202608-t021136"
		],
		"recommendedHose": [
			"cp-catalog-202608-t021136"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 112, référence T021136."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 594,
		"typical": 594,
		"max": 594
	}
};

export default product;

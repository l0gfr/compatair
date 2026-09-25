const product = {
	"id": "chicago-pneumatic-cp3329-salavode",
	"slug": "meuleuse-chicago-pneumatic-cp3329-salavode",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3329-SALAVODE",
	"brand": "Chicago Pneumatic",
	"model": "CP3329-SALAVODE",
	"mpn": "6151700120",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/2 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3329-salavode-catalogue-2026.webp",
		"alt": "Repères techniques CP3329-SALAVODE : 960 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=146",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3329-SALAVODE, référence 6151700120, demande 960 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 146. Vitesse à vide : 8 500 tr/min. Puissance de l’outil : 1 200 W.",
		"verifiedFacts": [
			"Vitesse à vide : 8 500 tr/min.",
			"Puissance de l’outil : 1 200 W.",
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
				"cp-catalog-202608-6151700120"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "1 200 W",
			"evidenceIds": [
				"cp-catalog-202608-6151700120"
			]
		},
		{
			"label": "Diamètre maximal du disque",
			"value": "180 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151700120"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/8-11 UNC",
			"evidenceIds": [
				"cp-catalog-202608-6151700120"
			]
		},
		{
			"label": "Poids publié",
			"value": "2,8 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151700120"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151700120",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=146",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 146, réf. 6151700120",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 16 L/s × 60 = 960 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151700120"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151700120"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151700120"
		],
		"connectorSize": [
			"cp-catalog-202608-6151700120"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151700120"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 146, référence 6151700120."
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

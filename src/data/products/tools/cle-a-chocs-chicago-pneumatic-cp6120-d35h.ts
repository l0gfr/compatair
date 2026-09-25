const product = {
	"id": "chicago-pneumatic-cp6120-d35h",
	"slug": "cle-a-chocs-chicago-pneumatic-cp6120-d35h",
	"categoryId": "cle-a-chocs",
	"category": "Clé à chocs",
	"label": "Clé à chocs Chicago Pneumatic CP6120-D35H",
	"brand": "Chicago Pneumatic",
	"model": "CP6120-D35H",
	"mpn": "6151590120",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/2 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "burst",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp6120-d35h-catalogue-2026.webp",
		"alt": "Repères techniques CP6120-D35H : 1 698 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=37",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP6120-D35H, référence 6151590120, demande 1 698 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 37. Vitesse à vide : 3 500 tr/min. Couple maximal en marche arrière : 4880 Nm.",
		"verifiedFacts": [
			"Vitesse à vide : 3 500 tr/min.",
			"Couple maximal en marche arrière : 4880 Nm.",
			"Longueur publiée : 420 mm.",
			"Poids publié : 15,6 kg.",
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
			"value": "3 500 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151590120"
			]
		},
		{
			"label": "Couple maximal en marche arrière",
			"value": "4880 Nm",
			"evidenceIds": [
				"cp-catalog-202608-6151590120"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "420 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151590120"
			]
		},
		{
			"label": "Poids publié",
			"value": "15,6 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151590120"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151590120",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=37",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 37, réf. 6151590120",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 28.3 L/s × 60 = 1698 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151590120"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151590120"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151590120"
		],
		"connectorSize": [
			"cp-catalog-202608-6151590120"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151590120"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 37, référence 6151590120."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1698,
		"typical": 1698,
		"max": 1698
	}
};

export default product;

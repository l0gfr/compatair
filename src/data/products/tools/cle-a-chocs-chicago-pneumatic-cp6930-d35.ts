const product = {
	"id": "chicago-pneumatic-cp6930-d35",
	"slug": "cle-a-chocs-chicago-pneumatic-cp6930-d35",
	"categoryId": "cle-a-chocs",
	"category": "Clé à chocs",
	"label": "Clé à chocs Chicago Pneumatic CP6930-D35",
	"brand": "Chicago Pneumatic",
	"model": "CP6930-D35",
	"mpn": "6151590390",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/2 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "burst",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp6930-d35-catalogue-2026.webp",
		"alt": "Repères techniques CP6930-D35 : 1 800 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=36",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP6930-D35, référence 6151590390, demande 1 800 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 36. Vitesse à vide : 4 300 tr/min. Couple maximal en marche arrière : 3900 Nm.",
		"verifiedFacts": [
			"Vitesse à vide : 4 300 tr/min.",
			"Couple maximal en marche arrière : 3900 Nm.",
			"Longueur publiée : 440 mm.",
			"Poids publié : 14,3 kg.",
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
			"value": "4 300 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151590390"
			]
		},
		{
			"label": "Couple maximal en marche arrière",
			"value": "3900 Nm",
			"evidenceIds": [
				"cp-catalog-202608-6151590390"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "440 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151590390"
			]
		},
		{
			"label": "Poids publié",
			"value": "14,3 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151590390"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151590390",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=36",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 36, réf. 6151590390",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 30 L/s × 60 = 1800 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151590390"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151590390"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151590390"
		],
		"connectorSize": [
			"cp-catalog-202608-6151590390"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151590390"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 36, référence 6151590390."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1800,
		"typical": 1800,
		"max": 1800
	}
};

export default product;

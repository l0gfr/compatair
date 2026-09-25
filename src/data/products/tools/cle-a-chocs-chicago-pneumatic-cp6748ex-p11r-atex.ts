const product = {
	"id": "chicago-pneumatic-cp6748ex-p11r-atex",
	"slug": "cle-a-chocs-chicago-pneumatic-cp6748ex-p11r-atex",
	"categoryId": "cle-a-chocs",
	"category": "Clé à chocs",
	"label": "Clé à chocs Chicago Pneumatic CP6748EX-P11R ATEX",
	"brand": "Chicago Pneumatic",
	"model": "CP6748EX-P11R ATEX",
	"mpn": "6151590570",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "burst",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp6748ex-p11r-atex-catalogue-2026.webp",
		"alt": "Repères techniques CP6748EX-P11R ATEX : 852 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=25",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP6748EX-P11R ATEX, référence 6151590570, demande 852 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 25. Vitesse à vide : 8 400 tr/min. Couple maximal en marche arrière : 1080 Nm.",
		"verifiedFacts": [
			"Vitesse à vide : 8 400 tr/min.",
			"Couple maximal en marche arrière : 1080 Nm.",
			"Longueur publiée : 200 mm.",
			"Poids publié : 2,4 kg.",
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
			"value": "8 400 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151590570"
			]
		},
		{
			"label": "Couple maximal en marche arrière",
			"value": "1080 Nm",
			"evidenceIds": [
				"cp-catalog-202608-6151590570"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "200 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151590570"
			]
		},
		{
			"label": "Poids publié",
			"value": "2,4 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151590570"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151590570",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=25",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 25, réf. 6151590570",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 14.2 L/s × 60 = 852 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151590570"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151590570"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151590570"
		],
		"connectorSize": [
			"cp-catalog-202608-6151590570"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151590570"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 25, référence 6151590570."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 852,
		"typical": 852,
		"max": 852
	}
};

export default product;

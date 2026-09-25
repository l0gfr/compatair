const product = {
	"id": "chicago-pneumatic-cp6773-d18d",
	"slug": "cle-a-chocs-chicago-pneumatic-cp6773-d18d",
	"categoryId": "cle-a-chocs",
	"category": "Clé à chocs",
	"label": "Clé à chocs Chicago Pneumatic CP6773-D18D",
	"brand": "Chicago Pneumatic",
	"model": "CP6773-D18D",
	"mpn": "6151590650",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/2 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "burst",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp6773-d18d-catalogue-2026.webp",
		"alt": "Repères techniques CP6773-D18D : 1 158 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=33",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP6773-D18D, référence 6151590650, demande 1 158 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 33. Vitesse à vide : 6 600 tr/min. Couple maximal en marche arrière : 1760 Nm.",
		"verifiedFacts": [
			"Vitesse à vide : 6 600 tr/min.",
			"Couple maximal en marche arrière : 1760 Nm.",
			"Longueur publiée : 290 mm.",
			"Poids publié : 6,7 kg.",
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
			"value": "6 600 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151590650"
			]
		},
		{
			"label": "Couple maximal en marche arrière",
			"value": "1760 Nm",
			"evidenceIds": [
				"cp-catalog-202608-6151590650"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "290 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151590650"
			]
		},
		{
			"label": "Poids publié",
			"value": "6,7 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151590650"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151590650",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=33",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 33, réf. 6151590650",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 19.3 L/s × 60 = 1158 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151590650"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151590650"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151590650"
		],
		"connectorSize": [
			"cp-catalog-202608-6151590650"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151590650"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 33, référence 6151590650."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1158,
		"typical": 1158,
		"max": 1158
	}
};

export default product;

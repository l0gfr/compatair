const product = {
	"id": "chicago-pneumatic-cp7225cve",
	"slug": "ponceuse-orbitale-chicago-pneumatic-cp7225cve",
	"categoryId": "ponceuse-orbitale",
	"category": "Ponceuse orbitale pneumatique",
	"label": "Ponceuse orbitale pneumatique Chicago Pneumatic CP7225CVE",
	"brand": "Chicago Pneumatic",
	"model": "CP7225CVE",
	"mpn": "8941272253",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp7225cve-catalogue-2026.webp",
		"alt": "Repères techniques CP7225CVE : 456 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=171",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP7225CVE, référence 8941272253, demande 456 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 171. Vitesse à vide : 12 000 tr/min. Puissance de l’outil : 210 W.",
		"verifiedFacts": [
			"Vitesse à vide : 12 000 tr/min.",
			"Puissance de l’outil : 210 W.",
			"Aspiration des poussières : Aspiration centralisée.",
			"Dimension du plateau : 150 mm.",
			"Entrée d’air 1/4 pouce ; flexible intérieur de 10 mm publié par le fabricant."
		],
		"limitations": [
			"Le débit utilisé est la consommation en charge du tableau constructeur à 6,3 bar. Aucune réduction arbitraire pour usage intermittent n’est appliquée.",
			"Le diamètre intérieur de flexible publié est de 10 mm, sans longueur associée dans ce tableau. La perte de pression du réseau reste à vérifier pour votre installation.",
			"Référence issue du catalogue international v6.08.2026. La configuration livrée, les normes applicables et la disponibilité en France restent à confirmer avec le fournisseur.",
			"La consommation à vide publiée est de 480 L/min. Elle dépasse le seuil en charge ; couvrir ce dernier ne garantit pas une marche à vide prolongée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-8941272253"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "210 W",
			"evidenceIds": [
				"cp-catalog-202608-8941272253"
			]
		},
		{
			"label": "Aspiration des poussières",
			"value": "Aspiration centralisée",
			"evidenceIds": [
				"cp-catalog-202608-8941272253"
			]
		},
		{
			"label": "Dimension du plateau",
			"value": "150 mm",
			"evidenceIds": [
				"cp-catalog-202608-8941272253"
			]
		},
		{
			"label": "Poids publié",
			"value": "0,83 kg",
			"evidenceIds": [
				"cp-catalog-202608-8941272253"
			]
		},
		{
			"label": "Consommation à vide, distincte du débit en charge",
			"value": "480 L/min",
			"evidenceIds": [
				"cp-catalog-202608-8941272253"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-8941272253",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=171",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 171, réf. 8941272253",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 7.6 L/s × 60 = 456 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-8941272253"
		],
		"airflowLpm": [
			"cp-catalog-202608-8941272253"
		],
		"workingPressureBar": [
			"cp-catalog-202608-8941272253"
		],
		"connectorSize": [
			"cp-catalog-202608-8941272253"
		],
		"recommendedHose": [
			"cp-catalog-202608-8941272253"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 171, référence 8941272253."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 456,
		"typical": 456,
		"max": 456
	}
};

export default product;

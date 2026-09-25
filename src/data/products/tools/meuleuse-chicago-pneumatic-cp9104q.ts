const product = {
	"id": "chicago-pneumatic-cp9104q",
	"slug": "meuleuse-chicago-pneumatic-cp9104q",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP9104Q",
	"brand": "Chicago Pneumatic",
	"model": "CP9104Q",
	"mpn": "6151959104",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp9104q-catalogue-2026.webp",
		"alt": "Repères techniques CP9104Q : 192 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=111",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP9104Q, référence 6151959104, demande 192 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 111. Vitesse à vide : 60 000 tr/min. Puissance de l’outil : 40 W.",
		"verifiedFacts": [
			"Vitesse à vide : 60 000 tr/min.",
			"Puissance de l’outil : 40 W.",
			"Pince publiée dans le tableau : 3 mm.",
			"Longueur publiée : 133 mm.",
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
			"value": "60 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151959104"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "40 W",
			"evidenceIds": [
				"cp-catalog-202608-6151959104"
			]
		},
		{
			"label": "Pince publiée dans le tableau",
			"value": "3 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151959104"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "133 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151959104"
			]
		},
		{
			"label": "Poids publié",
			"value": "0,2 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151959104"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151959104",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=111",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 111, réf. 6151959104",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 3.2 L/s × 60 = 192 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151959104"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151959104"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151959104"
		],
		"connectorSize": [
			"cp-catalog-202608-6151959104"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151959104"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 111, référence 6151959104."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 192,
		"typical": 192,
		"max": 192
	}
};

export default product;

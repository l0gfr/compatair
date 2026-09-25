const product = {
	"id": "chicago-pneumatic-cp5303-r5sv",
	"slug": "ponceuse-vibrante-chicago-pneumatic-cp5303-r5sv",
	"categoryId": "ponceuse-vibrante",
	"category": "Ponceuse vibrante pneumatique",
	"label": "Ponceuse vibrante pneumatique Chicago Pneumatic CP5303-R5SV",
	"brand": "Chicago Pneumatic",
	"model": "CP5303-R5SV",
	"mpn": "6151702350",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp5303-r5sv-catalogue-2026.webp",
		"alt": "Repères techniques CP5303-R5SV : 480 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=174",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP5303-R5SV, référence 6151702350, demande 480 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 174. Vitesse à vide : 10 000 tr/min. Puissance de l’outil : 210 W.",
		"verifiedFacts": [
			"Vitesse à vide : 10 000 tr/min.",
			"Puissance de l’outil : 210 W.",
			"Aspiration des poussières : Aspiration autonome.",
			"Dimension du plateau : 80x130 mm.",
			"Entrée d’air 1/4 pouce ; flexible intérieur de 10 mm publié par le fabricant."
		],
		"limitations": [
			"Le débit utilisé est la consommation en charge du tableau constructeur à 6,3 bar. Aucune réduction arbitraire pour usage intermittent n’est appliquée.",
			"Le diamètre intérieur de flexible publié est de 10 mm, sans longueur associée dans ce tableau. La perte de pression du réseau reste à vérifier pour votre installation.",
			"Référence issue du catalogue international v6.08.2026. La configuration livrée, les normes applicables et la disponibilité en France restent à confirmer avec le fournisseur.",
			"Plateau rectangulaire et mouvement orbital publiés ; ce modèle est classé avec les ponceuses vibrantes à plateau rectangulaire."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "10 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151702350"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "210 W",
			"evidenceIds": [
				"cp-catalog-202608-6151702350"
			]
		},
		{
			"label": "Aspiration des poussières",
			"value": "Aspiration autonome",
			"evidenceIds": [
				"cp-catalog-202608-6151702350"
			]
		},
		{
			"label": "Dimension du plateau",
			"value": "80x130 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151702350"
			]
		},
		{
			"label": "Poids publié",
			"value": "1 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151702350"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151702350",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=174",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 174, réf. 6151702350",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 8 L/s × 60 = 480 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151702350"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151702350"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151702350"
		],
		"connectorSize": [
			"cp-catalog-202608-6151702350"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151702350"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 174, référence 6151702350."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 480,
		"typical": 480,
		"max": 480
	}
};

export default product;

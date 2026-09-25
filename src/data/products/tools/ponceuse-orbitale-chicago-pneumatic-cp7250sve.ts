const product = {
	"id": "chicago-pneumatic-cp7250sve",
	"slug": "ponceuse-orbitale-chicago-pneumatic-cp7250sve",
	"categoryId": "ponceuse-orbitale",
	"category": "Ponceuse orbitale pneumatique",
	"label": "Ponceuse orbitale pneumatique Chicago Pneumatic CP7250SVE",
	"brand": "Chicago Pneumatic",
	"model": "CP7250SVE",
	"mpn": "8941272502",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp7250sve-catalogue-2026.webp",
		"alt": "Repères techniques CP7250SVE : 468 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=173",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP7250SVE, référence 8941272502, demande 468 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 173. Vitesse à vide : 12 000 tr/min. Puissance de l’outil : 210 W.",
		"verifiedFacts": [
			"Vitesse à vide : 12 000 tr/min.",
			"Puissance de l’outil : 210 W.",
			"Aspiration des poussières : Aspiration autonome.",
			"Dimension du plateau : 150 mm.",
			"Entrée d’air 1/4 pouce ; flexible intérieur de 10 mm publié par le fabricant."
		],
		"limitations": [
			"Le débit utilisé est la consommation en charge du tableau constructeur à 6,3 bar. Aucune réduction arbitraire pour usage intermittent n’est appliquée.",
			"Le diamètre intérieur de flexible publié est de 10 mm, sans longueur associée dans ce tableau. La perte de pression du réseau reste à vérifier pour votre installation.",
			"Référence issue du catalogue international v6.08.2026. La configuration livrée, les normes applicables et la disponibilité en France restent à confirmer avec le fournisseur.",
			"La consommation à vide publiée est de 468 L/min. Elle reste distincte de la consommation en charge utilisée dans le calcul."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-8941272502"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "210 W",
			"evidenceIds": [
				"cp-catalog-202608-8941272502"
			]
		},
		{
			"label": "Aspiration des poussières",
			"value": "Aspiration autonome",
			"evidenceIds": [
				"cp-catalog-202608-8941272502"
			]
		},
		{
			"label": "Dimension du plateau",
			"value": "150 mm",
			"evidenceIds": [
				"cp-catalog-202608-8941272502"
			]
		},
		{
			"label": "Poids publié",
			"value": "0,77 kg",
			"evidenceIds": [
				"cp-catalog-202608-8941272502"
			]
		},
		{
			"label": "Consommation à vide, distincte du débit en charge",
			"value": "468 L/min",
			"evidenceIds": [
				"cp-catalog-202608-8941272502"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-8941272502",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=173",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 173, réf. 8941272502",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 7.8 L/s × 60 = 468 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-8941272502"
		],
		"airflowLpm": [
			"cp-catalog-202608-8941272502"
		],
		"workingPressureBar": [
			"cp-catalog-202608-8941272502"
		],
		"connectorSize": [
			"cp-catalog-202608-8941272502"
		],
		"recommendedHose": [
			"cp-catalog-202608-8941272502"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 173, référence 8941272502."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 468,
		"typical": 468,
		"max": 468
	}
};

export default product;

const product = {
	"id": "chicago-pneumatic-cp5506-r6cv",
	"slug": "ponceuse-vibrante-chicago-pneumatic-cp5506-r6cv",
	"categoryId": "ponceuse-vibrante",
	"category": "Ponceuse vibrante pneumatique",
	"label": "Ponceuse vibrante pneumatique Chicago Pneumatic CP5506-R6CV",
	"brand": "Chicago Pneumatic",
	"model": "CP5506-R6CV",
	"mpn": "6151700740",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp5506-r6cv-catalogue-2026.webp",
		"alt": "Repères techniques CP5506-R6CV : 660 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=177",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP5506-R6CV, référence 6151700740, demande 660 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 177. Vitesse à vide : 8 000 tr/min. Puissance de l’outil : 375 W.",
		"verifiedFacts": [
			"Vitesse à vide : 8 000 tr/min.",
			"Puissance de l’outil : 375 W.",
			"Aspiration des poussières : Aspiration centralisée.",
			"Dimension du plateau : 170 x 93 mm.",
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
			"value": "8 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151700740"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "375 W",
			"evidenceIds": [
				"cp-catalog-202608-6151700740"
			]
		},
		{
			"label": "Aspiration des poussières",
			"value": "Aspiration centralisée",
			"evidenceIds": [
				"cp-catalog-202608-6151700740"
			]
		},
		{
			"label": "Dimension du plateau",
			"value": "170 x 93 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151700740"
			]
		},
		{
			"label": "Poids publié",
			"value": "1,7 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151700740"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151700740",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=177",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 177, réf. 6151700740",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 11 L/s × 60 = 660 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151700740"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151700740"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151700740"
		],
		"connectorSize": [
			"cp-catalog-202608-6151700740"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151700740"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 177, référence 6151700740."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 660,
		"typical": 660,
		"max": 660
	}
};

export default product;

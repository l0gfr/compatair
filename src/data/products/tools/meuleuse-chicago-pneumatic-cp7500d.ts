const product = {
	"id": "chicago-pneumatic-cp7500d",
	"slug": "meuleuse-chicago-pneumatic-cp7500d",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP7500D",
	"brand": "Chicago Pneumatic",
	"model": "CP7500D",
	"mpn": "8941075001",
	"distributorSkus": [],
	"identifierAliases": [],
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp7500d-catalogue-2026.webp",
		"alt": "Repères techniques CP7500D : 228 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=134",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP7500D, référence 8941075001, demande 228 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 134. Vitesse à vide : 22 000 tr/min. Puissance de l’outil : 150 W.",
		"verifiedFacts": [
			"Vitesse à vide : 22 000 tr/min.",
			"Puissance de l’outil : 150 W.",
			"Diamètre maximal du disque : 50 mm.",
			"Filetage de sortie : 3/8-24 UNF.",
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
			"value": "22 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-8941075001"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "150 W",
			"evidenceIds": [
				"cp-catalog-202608-8941075001"
			]
		},
		{
			"label": "Diamètre maximal du disque",
			"value": "50 mm",
			"evidenceIds": [
				"cp-catalog-202608-8941075001"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "3/8-24 UNF",
			"evidenceIds": [
				"cp-catalog-202608-8941075001"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "140 mm",
			"evidenceIds": [
				"cp-catalog-202608-8941075001"
			]
		},
		{
			"label": "Poids publié",
			"value": "0,59 kg",
			"evidenceIds": [
				"cp-catalog-202608-8941075001"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-8941075001",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=134",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 134, réf. 8941075001",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 3.8 L/s × 60 = 228 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-8941075001"
		],
		"airflowLpm": [
			"cp-catalog-202608-8941075001"
		],
		"workingPressureBar": [
			"cp-catalog-202608-8941075001"
		],
		"connectorSize": [
			"cp-catalog-202608-8941075001"
		],
		"recommendedHose": [
			"cp-catalog-202608-8941075001"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 134, référence 8941075001."
	],
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 228,
		"typical": 228,
		"max": 228
	}
};

export default product;

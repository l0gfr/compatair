import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "chicago-pneumatic-cp3340-salavele",
	"slug": "meuleuse-chicago-pneumatic-cp3340-salavele",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3340-SALAVELE",
	"brand": "Chicago Pneumatic",
	"model": "CP3340-SALAVELE",
	"mpn": "6151609320",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 2700,
		"typical": 2700,
		"max": 2700
	},
	"usagePattern": "continuous",
	"connectorSize": "Entrée 1/2 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3340-salavele-catalogue-2026.webp",
		"alt": "Repères techniques CP3340-SALAVELE : 2 700 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=148",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3340-SALAVELE, référence 6151609320, demande 2 700 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 148. Vitesse à vide : 6 000 tr/min. Puissance de l’outil : 3 400 W.",
		"verifiedFacts": [
			"Vitesse à vide : 6 000 tr/min.",
			"Puissance de l’outil : 3 400 W.",
			"Diamètre de roue publié : 230 mm.",
			"Broche publiée : 5/8-11 UNC.",
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
			"value": "6 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151609320"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "3 400 W",
			"evidenceIds": [
				"cp-catalog-202608-6151609320"
			]
		},
		{
			"label": "Diamètre de roue publié",
			"value": "230 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151609320"
			]
		},
		{
			"label": "Broche publiée",
			"value": "5/8-11 UNC",
			"evidenceIds": [
				"cp-catalog-202608-6151609320"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "250 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151609320"
			]
		},
		{
			"label": "Poids publié",
			"value": "5,85 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151609320"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151609320",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=148",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 148, réf. 6151609320",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 45 L/s × 60 = 2700 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151609320"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151609320"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151609320"
		],
		"connectorSize": [
			"cp-catalog-202608-6151609320"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151609320"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 148, référence 6151609320."
	]
};

export default product;

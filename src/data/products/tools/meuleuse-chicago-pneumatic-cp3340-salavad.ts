import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "chicago-pneumatic-cp3340-salavad",
	"slug": "meuleuse-chicago-pneumatic-cp3340-salavad",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3340-SALAVAD",
	"brand": "Chicago Pneumatic",
	"model": "CP3340-SALAVAD",
	"mpn": "6151609280",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 3120,
		"typical": 3120,
		"max": 3120
	},
	"usagePattern": "continuous",
	"connectorSize": "Entrée 1/2 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3340-salavad-catalogue-2026.webp",
		"alt": "Repères techniques CP3340-SALAVAD : 3 120 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=148",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3340-SALAVAD, référence 6151609280, demande 3 120 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 148. Vitesse à vide : 8 500 tr/min. Puissance de l’outil : 3 400 W.",
		"verifiedFacts": [
			"Vitesse à vide : 8 500 tr/min.",
			"Puissance de l’outil : 3 400 W.",
			"Diamètre de roue publié : 180 mm.",
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
			"value": "8 500 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151609280"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "3 400 W",
			"evidenceIds": [
				"cp-catalog-202608-6151609280"
			]
		},
		{
			"label": "Diamètre de roue publié",
			"value": "180 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151609280"
			]
		},
		{
			"label": "Broche publiée",
			"value": "5/8-11 UNC",
			"evidenceIds": [
				"cp-catalog-202608-6151609280"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "250 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151609280"
			]
		},
		{
			"label": "Poids publié",
			"value": "5,6 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151609280"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151609280",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=148",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 148, réf. 6151609280",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 52 L/s × 60 = 3120 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151609280"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151609280"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151609280"
		],
		"connectorSize": [
			"cp-catalog-202608-6151609280"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151609280"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 148, référence 6151609280."
	]
};

export default product;

import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "chicago-pneumatic-cp3000-600cr",
	"slug": "meuleuse-chicago-pneumatic-cp3000-600cr",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3000-600CR",
	"brand": "Chicago Pneumatic",
	"model": "CP3000-600CR",
	"mpn": "6151600140",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 156,
		"typical": 156,
		"max": 156
	},
	"usagePattern": "continuous",
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm, longueur non précisée",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3000-600cr-catalogue-2026.webp",
		"alt": "Repères techniques CP3000-600CR : 156 L/min en charge à 6,3 bar",
		"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=111",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3000-600CR, référence 6151600140, demande 156 L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page 111. Vitesse à vide : 60 000 tr/min. Puissance de l’outil : 90 W.",
		"verifiedFacts": [
			"Vitesse à vide : 60 000 tr/min.",
			"Puissance de l’outil : 90 W.",
			"Pince : divergence documentaire : À confirmer : texte 1/8 pouce, tableau 15/64 (6,0 mm) contradictoire.",
			"Longueur publiée : 153 mm.",
			"Entrée d’air 1/4 pouce ; flexible intérieur de 10 mm publié par le fabricant."
		],
		"limitations": [
			"Le débit utilisé est la consommation en charge du tableau constructeur à 6,3 bar. Aucune réduction arbitraire pour usage intermittent n’est appliquée.",
			"Le diamètre intérieur de flexible publié est de 10 mm, sans longueur associée dans ce tableau. La perte de pression du réseau reste à vérifier pour votre installation.",
			"Référence issue du catalogue international v6.08.2026. La configuration livrée, les normes applicables et la disponibilité en France restent à confirmer avec le fournisseur.",
			"Le texte décrit une pince de 1/8 pouce pour cette référence, mais le tableau indique 15/64 (6,0 mm). Aucune dimension de pince unique n’est validée ; confirmation de la notice individuelle requise."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "60 000 tr/min",
			"evidenceIds": [
				"cp-catalog-202608-6151600140"
			]
		},
		{
			"label": "Puissance de l’outil",
			"value": "90 W",
			"evidenceIds": [
				"cp-catalog-202608-6151600140"
			]
		},
		{
			"label": "Pince : divergence documentaire",
			"value": "À confirmer : texte 1/8 pouce, tableau 15/64 (6,0 mm) contradictoire",
			"evidenceIds": [
				"cp-catalog-202608-6151600140"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "153 mm",
			"evidenceIds": [
				"cp-catalog-202608-6151600140"
			]
		},
		{
			"label": "Poids publié",
			"value": "0,14 kg",
			"evidenceIds": [
				"cp-catalog-202608-6151600140"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-catalog-202608-6151600140",
			"sourceUrl": "https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf#page=111",
			"sourceLabel": "Chicago Pneumatic, catalogue v6.08.2026, p. 111, réf. 6151600140",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Colonne AIR CONS. @LOAD : 2.6 L/s × 60 = 156 L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-catalog-202608-6151600140"
		],
		"airflowLpm": [
			"cp-catalog-202608-6151600140"
		],
		"workingPressureBar": [
			"cp-catalog-202608-6151600140"
		],
		"connectorSize": [
			"cp-catalog-202608-6151600140"
		],
		"recommendedHose": [
			"cp-catalog-202608-6151600140"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.",
		"Source versionnée : catalogue v6.08.2026, page 111, référence 6151600140."
	]
};

export default product;

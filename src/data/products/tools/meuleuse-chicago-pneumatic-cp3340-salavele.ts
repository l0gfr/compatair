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
		"overview": "CP3340-SALAVELE 6151609320 : version CE de 230 mm, 3 400 W et 6 000 tr/min à vide, donnée pour 45 L/s en charge à 6,3 bar, soit 2 700 L/min. La SALAVEL 6151609290 voisine est une ligne ANSI distincte, avec la même consommation mais une autre référence et une masse publiée de 5,95 kg contre 5,85 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 6 000 tr/min.",
			"Puissance de l’outil : 3 400 W.",
			"Diamètre de roue publié : 230 mm.",
			"Broche publiée : 5/8-11 UNC.",
			"Entrée d’air 1/2 pouce ; flexible intérieur de 10 mm publié par le fabricant."
		],
		"limitations": [
			"La conformité, la protection et les accessoires livrés doivent être vérifiés sur la référence exacte ; le débit identique ne prouve pas l’interchangeabilité.",
			"Le diamètre admissible et la vitesse de l’abrasif restent des conditions de montage distinctes du bilan d’air."
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

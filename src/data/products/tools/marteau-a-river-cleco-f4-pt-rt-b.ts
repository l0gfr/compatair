import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-cleco-f4-pt-rt-b",
	"slug": "marteau-a-river-cleco-f4-pt-rt-b",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "Cleco F4-PT-RT-B",
	"brand": "Cleco",
	"model": "F4-PT-RT-B",
	"mpn": "F4-PT-RT-B",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-cleco-f4-pt-rt-b.webp",
		"alt": "Repères techniques : Cleco F4-PT-RT-B",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "cleco-f4-pt-rt-b",
		"label": "Référence F4-PT-RT-B",
		"distinguishingAttributes": {
			"reference": "F4-PT-RT-B",
			"Masse publiée": "1.50 kg",
			"Longueur publiée": "221 mm",
			"Cadence publiée": "1,700 coups/min"
		}
	},
	"editorial": {
		"overview": "Cleco F4-PT-RT-B. Le F4-PT-RT-B est le marteau à retenue Beehive, capacité rivet 1/4 pouce et course 4 pouces. Le E5-2336 accepte aussi 1/4 pouce mais possède une retenue ouverte, course 5 pouces et cadence 1 400 coups/min. La matière du rivet n’est pas précisée dans cette table ; aucun débit n’est déduit de la course.",
		"verifiedFacts": [
			"Retenue : Beehive.",
			"Capacité rivet publiée : 1/4 pouce (6,4 mm).",
			"Piston : 0,56 pouce.",
			"Course : 4 pouces.",
			"Cadence : 1 700 coups/min.",
			"Longueur : 221 mm.",
			"Masse : 1,50 kg."
		],
		"limitations": [
			"La vitesse, la puissance et la cadence ne remplacent pas une consommation maximale/en charge documentée avec ses conditions. Les données insuffisantes restent hors calcul conclusif."
		]
	},
	"specifications": [
		{
			"label": "Retenue",
			"value": "Beehive",
			"evidenceIds": [
				"marteau-a-river-cleco-f4-pt-rt-b-reserved-20261103-1"
			]
		},
		{
			"label": "Capacité rivet publiée",
			"value": "1/4 pouce (6,4 mm)",
			"evidenceIds": [
				"marteau-a-river-cleco-f4-pt-rt-b-reserved-20261103-1"
			]
		},
		{
			"label": "Piston",
			"value": "0,56 pouce",
			"evidenceIds": [
				"marteau-a-river-cleco-f4-pt-rt-b-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "4 pouces",
			"evidenceIds": [
				"marteau-a-river-cleco-f4-pt-rt-b-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "1 700 coups/min",
			"evidenceIds": [
				"marteau-a-river-cleco-f4-pt-rt-b-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "221 mm",
			"evidenceIds": [
				"marteau-a-river-cleco-f4-pt-rt-b-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,50 kg",
			"evidenceIds": [
				"marteau-a-river-cleco-f4-pt-rt-b-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p104",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=104",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 104",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "marteau-a-river-cleco-f4-pt-rt-b-reserved-20261103-1",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=104",
			"sourceLabel": "Cleco : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Le F4-PT-RT-B est le marteau à retenue Beehive, capacité rivet 1/4 pouce et course 4 pouces. Le E5-2336 accepte aussi 1/4 pouce mais possède une retenue ouverte, course 5 pouces et cadence 1 400 coups/min. La matière du rivet n’est pas précisée dans cette table ; aucun débit n’est déduit de la course."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p104"
		],
		"workingPressureBar": [
			"october-dotco-p104"
		],
		"demandExplanation": [
			"october-dotco-p104"
		],
		"editorial": [
			"marteau-a-river-cleco-f4-pt-rt-b-reserved-20261103-1"
		],
		"specifications": [
			"marteau-a-river-cleco-f4-pt-rt-b-reserved-20261103-1"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;

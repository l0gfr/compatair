import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-cleco-mp5187",
	"slug": "derouilleur-a-aiguilles-cleco-mp5187",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Cleco MP5187",
	"brand": "Cleco",
	"model": "MP5187",
	"mpn": "MP5187",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-cleco-mp5187.webp",
		"alt": "Repères techniques : Cleco MP5187",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "cleco-mp5187",
		"label": "Référence MP5187",
		"distinguishingAttributes": {
			"reference": "MP5187",
			"Masse publiée": "1.1 kg",
			"Longueur publiée": "225 mm",
			"Cadence publiée": "4,200 coups/min"
		}
	},
	"editorial": {
		"overview": "Cleco MP5187. Le MP5187 est le petit dérouilleur à levier livré avec douze aiguilles et une course 15 mm. Le B1-CNB-LT-RD est un autre ensemble de 381 mm et 2,86 kg ; ses dimensions ne s’appliquent pas au MP5187 de 225 mm et 1,1 kg. Le tableau donne piston et course, mais aucune consommation ; le calcul reste indéterminé.",
		"verifiedFacts": [
			"Aiguilles fournies : 12, diamètre publié 1/8 pouce (3 mm), longueur 5 pouces (125 mm).",
			"Piston : 20 mm.",
			"Course : 15 mm.",
			"Cadence : 4 200 coups/min.",
			"Longueur : 225 mm.",
			"Masse : 1,1 kg."
		],
		"limitations": [
			"La vitesse, la puissance et la cadence ne remplacent pas une consommation maximale/en charge documentée avec ses conditions. Les données insuffisantes restent hors calcul conclusif."
		]
	},
	"specifications": [
		{
			"label": "Aiguilles fournies",
			"value": "12, diamètre publié 1/8 pouce (3 mm), longueur 5 pouces (125 mm)",
			"evidenceIds": [
				"derouilleur-a-aiguilles-cleco-mp5187-reserved-20261103-1"
			]
		},
		{
			"label": "Piston",
			"value": "20 mm",
			"evidenceIds": [
				"derouilleur-a-aiguilles-cleco-mp5187-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "15 mm",
			"evidenceIds": [
				"derouilleur-a-aiguilles-cleco-mp5187-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "4 200 coups/min",
			"evidenceIds": [
				"derouilleur-a-aiguilles-cleco-mp5187-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "225 mm",
			"evidenceIds": [
				"derouilleur-a-aiguilles-cleco-mp5187-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,1 kg",
			"evidenceIds": [
				"derouilleur-a-aiguilles-cleco-mp5187-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p102",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=102",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 102",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "derouilleur-a-aiguilles-cleco-mp5187-reserved-20261103-1",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=102",
			"sourceLabel": "Cleco : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Le MP5187 est le petit dérouilleur à levier livré avec douze aiguilles et une course 15 mm. Le B1-CNB-LT-RD est un autre ensemble de 381 mm et 2,86 kg ; ses dimensions ne s’appliquent pas au MP5187 de 225 mm et 1,1 kg. Le tableau donne piston et course, mais aucune consommation ; le calcul reste indéterminé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p102"
		],
		"workingPressureBar": [
			"october-dotco-p102"
		],
		"demandExplanation": [
			"october-dotco-p102"
		],
		"editorial": [
			"derouilleur-a-aiguilles-cleco-mp5187-reserved-20261103-1"
		],
		"specifications": [
			"derouilleur-a-aiguilles-cleco-mp5187-reserved-20261103-1"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;

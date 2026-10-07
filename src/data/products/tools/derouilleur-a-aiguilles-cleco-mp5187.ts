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
		"overview": "Cleco MP5187. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Masse publiée : 1.1 kg. Longueur publiée : 225 mm.",
		"verifiedFacts": [
			"Masse publiée : 1.1 kg.",
			"Longueur publiée : 225 mm.",
			"Cadence publiée : 4,200 coups/min."
		],
		"limitations": [
			"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1.1 kg",
			"evidenceIds": [
				"october-dotco-p102"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "225 mm",
			"evidenceIds": [
				"october-dotco-p102"
			]
		},
		{
			"label": "Cadence publiée",
			"value": "4,200 coups/min",
			"evidenceIds": [
				"october-dotco-p102"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco/Dotco, Material Removal SP-102EN, page 102",
			"evidenceIds": [
				"october-dotco-p102"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All tools performance rated @ 90 psi / 620 kPa air pressure.",
			"evidenceIds": [
				"october-dotco-p102"
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
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;

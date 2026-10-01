const product = {
	"id": "meuleuse-dotco-12r0380-13",
	"slug": "meuleuse-dotco-12r0380-13",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Dotco 12R0380-13",
	"brand": "Dotco",
	"model": "12R0380-13",
	"mpn": "12R0380-13",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.205
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-dotco-12r0380-13.webp",
		"alt": "Repères techniques : Dotco 12R0380-13",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-12r0380-13",
		"label": "Référence 12R0380-13",
		"distinguishingAttributes": {
			"reference": "12R0380-13",
			"Vitesse à vide": "80,000 tr/min",
			"Masse publiée": "0.14 kg"
		}
	},
	"editorial": {
		"overview": "Dotco 12R0380-13. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Vitesse à vide : 80,000 tr/min. Masse publiée : 0.14 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 80,000 tr/min.",
			"Masse publiée : 0.14 kg."
		],
		"limitations": [
			"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
			"La pression citée est un maximum ; elle ne documente pas une pression de mesure du débit.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "80,000 tr/min",
			"evidenceIds": [
				"october-dotco-p12"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.14 kg",
			"evidenceIds": [
				"october-dotco-p12"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco/Dotco, Material Removal SP-102EN, page 12",
			"evidenceIds": [
				"october-dotco-p12"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Use dry air at 90 psi maximum: Do not lubricate turbine grinders. Lubrication will be detrimental to the operation and life of turbine tools. Do not attach a quick-disconnect fitting directly to the tool.",
			"evidenceIds": [
				"october-dotco-p12"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p12",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=12",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 12",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p12"
		],
		"workingPressureBar": [
			"october-dotco-p12"
		],
		"demandExplanation": [
			"october-dotco-p12"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;

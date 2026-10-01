const product = {
	"id": "graveur-dotco-15z-710",
	"slug": "graveur-dotco-15z-710",
	"categoryId": "graveur",
	"category": "graveur",
	"label": "Dotco 15Z-710",
	"brand": "Dotco",
	"model": "15Z-710",
	"mpn": "15Z-710",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.205
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/graveur-dotco-15z-710.webp",
		"alt": "Repères techniques : Dotco 15Z-710",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-15z-710",
		"label": "Référence 15Z-710",
		"distinguishingAttributes": {
			"reference": "15Z-710",
			"Vitesse à vide": "20,000 tr/min",
			"Masse publiée": "0.14 kg",
			"Dimension publiée": "140 mm"
		}
	},
	"editorial": {
		"overview": "Dotco 15Z-710. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Vitesse à vide : 20,000 tr/min. Masse publiée : 0.14 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 20,000 tr/min.",
			"Masse publiée : 0.14 kg.",
			"Dimension publiée : 140 mm."
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
			"value": "20,000 tr/min",
			"evidenceIds": [
				"october-dotco-p15"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.14 kg",
			"evidenceIds": [
				"october-dotco-p15"
			]
		},
		{
			"label": "Dimension publiée",
			"value": "140 mm",
			"evidenceIds": [
				"october-dotco-p15"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco/Dotco, Material Removal SP-102EN, page 15",
			"evidenceIds": [
				"october-dotco-p15"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Use dry air at 90 psi maximum: Do not lubricate turbine grinders. Lubrication will be detrimental to the operation and life of turbine tools. Do not attach a quick-disconnect fitting directly to the tool.",
			"evidenceIds": [
				"october-dotco-p15"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p15",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=15",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 15",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p15"
		],
		"workingPressureBar": [
			"october-dotco-p15"
		],
		"demandExplanation": [
			"october-dotco-p15"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;

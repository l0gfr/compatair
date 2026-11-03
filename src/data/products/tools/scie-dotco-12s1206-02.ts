import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-dotco-12s1206-02",
	"slug": "scie-dotco-12s1206-02",
	"categoryId": "scie",
	"category": "scie",
	"label": "Dotco 12S1206-02",
	"brand": "Dotco",
	"model": "12S1206-02",
	"mpn": "12S1206-02",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-dotco-12s1206-02.webp",
		"alt": "Repères techniques : Dotco 12S1206-02",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-12s1206-02",
		"label": "Référence 12S1206-02",
		"distinguishingAttributes": {
			"reference": "12S1206-02",
			"Vitesse à vide": "12,000 tr/min",
			"Masse publiée": "0.59 kg",
			"Dimension publiée": "180 mm"
		}
	},
	"editorial": {
		"overview": "Dotco 12S1206-02. La 12S1206-02 est la scie circulaire à échappement avant, lame 2 pouces et arbre 7/16 pouce. La 12S1282-02 utilise un échappement arrière avec les mêmes dimensions ; la 12S1207-02 passe à 20 000 tr/min. Aucun régime de scie alternative n’est attribué à cette lame rotative. Le tableau ne documente pas la consommation.",
		"verifiedFacts": [
			"Type : Scie circulaire, échappement avant.",
			"Lame : 2 pouces.",
			"Arbre : 7/16 pouce.",
			"Vitesse à vide : 12 000 tr/min.",
			"Corps : Composite.",
			"Longueur : 180 mm.",
			"Masse : 0,59 kg."
		],
		"limitations": [
			"Aucune consommation qualifiée n’est publiée dans le tableau de cette référence ; vitesse et puissance ne fournissent pas un débit.",
			"Catalogue constructeur identifié ; vérifier l’équipement de la révision livrée."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "Scie circulaire, échappement avant",
			"evidenceIds": [
				"scie-dotco-12s1206-02-reserved-20261103-1"
			]
		},
		{
			"label": "Lame",
			"value": "2 pouces",
			"evidenceIds": [
				"scie-dotco-12s1206-02-reserved-20261103-1"
			]
		},
		{
			"label": "Arbre",
			"value": "7/16 pouce",
			"evidenceIds": [
				"scie-dotco-12s1206-02-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"scie-dotco-12s1206-02-reserved-20261103-1"
			]
		},
		{
			"label": "Corps",
			"value": "Composite",
			"evidenceIds": [
				"scie-dotco-12s1206-02-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "180 mm",
			"evidenceIds": [
				"scie-dotco-12s1206-02-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,59 kg",
			"evidenceIds": [
				"scie-dotco-12s1206-02-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p98",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=98",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 98",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "scie-dotco-12s1206-02-reserved-20261103-1",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=98",
			"sourceLabel": "Dotco : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. La 12S1206-02 est la scie circulaire à échappement avant, lame 2 pouces et arbre 7/16 pouce. La 12S1282-02 utilise un échappement arrière avec les mêmes dimensions ; la 12S1207-02 passe à 20 000 tr/min. Aucun régime de scie alternative n’est attribué à cette lame rotative. Le tableau ne documente pas la consommation."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p98"
		],
		"workingPressureBar": [
			"october-dotco-p98"
		],
		"demandExplanation": [
			"october-dotco-p98"
		],
		"editorial": [
			"scie-dotco-12s1206-02-reserved-20261103-1"
		],
		"specifications": [
			"scie-dotco-12s1206-02-reserved-20261103-1"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;

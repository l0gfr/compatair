import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-bande-dotco-12l1280-36b2",
	"slug": "ponceuse-bande-dotco-12l1280-36b2",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Dotco 12L1280-36B2",
	"brand": "Dotco",
	"model": "12L1280-36B2",
	"mpn": "12L1280-36B2",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-bande-dotco-12l1280-36b2.webp",
		"alt": "Repères techniques : Dotco 12L1280-36B2",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-12l1280-36b2",
		"label": "Référence 12L1280-36B2",
		"distinguishingAttributes": {
			"reference": "12L1280-36B2",
			"Vitesse à vide": "12,000 tr/min",
			"Masse publiée": "0.64 kg",
			"Dimension publiée": "287 mm"
		}
	},
	"editorial": {
		"overview": "Dotco 12L1280-36B2. La 12L1280-36B2 utilise la bande 1/2 × 12 pouces à 12 000 tr/min. La 12L1281-36B2 garde la même bande, le même corps et la même masse, à 20 000 tr/min. La vitesse, pas seulement la taille de bande, distingue les deux choix. La consommation ne peut pas être déduite de cet écart de régime.",
		"verifiedFacts": [
			"Bande : 1/2 pouce de large × 12 pouces de long.",
			"Vitesse à vide : 12 000 tr/min.",
			"Corps : Composite.",
			"Longueur : 287 mm.",
			"Masse : 0,64 kg."
		],
		"limitations": [
			"Aucune consommation qualifiée n’est publiée dans le tableau de cette référence ; vitesse et puissance ne fournissent pas un débit.",
			"Catalogue constructeur identifié ; vérifier l’équipement de la révision livrée."
		]
	},
	"specifications": [
		{
			"label": "Bande",
			"value": "1/2 pouce de large × 12 pouces de long",
			"evidenceIds": [
				"ponceuse-bande-dotco-12l1280-36b2-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"ponceuse-bande-dotco-12l1280-36b2-reserved-20261103-1"
			]
		},
		{
			"label": "Corps",
			"value": "Composite",
			"evidenceIds": [
				"ponceuse-bande-dotco-12l1280-36b2-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "287 mm",
			"evidenceIds": [
				"ponceuse-bande-dotco-12l1280-36b2-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,64 kg",
			"evidenceIds": [
				"ponceuse-bande-dotco-12l1280-36b2-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p53",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=53",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 53",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "ponceuse-bande-dotco-12l1280-36b2-reserved-20261103-1",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=53",
			"sourceLabel": "Dotco : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. La 12L1280-36B2 utilise la bande 1/2 × 12 pouces à 12 000 tr/min. La 12L1281-36B2 garde la même bande, le même corps et la même masse, à 20 000 tr/min. La vitesse, pas seulement la taille de bande, distingue les deux choix. La consommation ne peut pas être déduite de cet écart de régime."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p53"
		],
		"workingPressureBar": [
			"october-dotco-p53"
		],
		"demandExplanation": [
			"october-dotco-p53"
		],
		"editorial": [
			"ponceuse-bande-dotco-12l1280-36b2-reserved-20261103-1"
		],
		"specifications": [
			"ponceuse-bande-dotco-12l1280-36b2-reserved-20261103-1"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;

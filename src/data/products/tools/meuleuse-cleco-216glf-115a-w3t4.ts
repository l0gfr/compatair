import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-cleco-216glf-115a-w3t4",
	"slug": "meuleuse-cleco-216glf-115a-w3t4",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Cleco 216GLF-115A-W3T4",
	"brand": "Cleco",
	"model": "216GLF-115A-W3T4",
	"mpn": "216GLF-115A-W3T4",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-cleco-216glf-115a-w3t4.webp",
		"alt": "Repères techniques : Cleco 216GLF-115A-W3T4",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "cleco-216glf-115a-w3t4",
		"label": "Référence 216GLF-115A-W3T4",
		"distinguishingAttributes": {
			"reference": "216GLF-115A-W3T4",
			"Vitesse à vide": "11,500 tr/min",
			"Masse publiée": "1.22 kg",
			"Dimension publiée": "180 mm"
		}
	},
	"editorial": {
		"overview": "Cleco 216GLF-115A-W3T4. La 216GLF-115A-W3T4 est la version pour disque Type 1 de 100 mm, broche 3/8-24 et échappement avant. Le suffixe W3T4 désigne cette configuration d’abrasif ; une donnée du modèle D3T4 ne remplace pas la table de cette version. Le protecteur et l’adaptateur sont décrits dans l’équipement standard. La consommation n’est pas publiée dans cette table.",
		"verifiedFacts": [
			"Abrasif : Disque Type 1, 4 pouces (100 mm).",
			"Broche : 3/8-24, filetage extérieur.",
			"Échappement : Avant.",
			"Vitesse à vide : 11 500 tr/min.",
			"Longueur : 180 mm.",
			"Masse : 1,22 kg."
		],
		"limitations": [
			"La vitesse, la puissance et la cadence ne remplacent pas une consommation maximale/en charge documentée avec ses conditions. Les données insuffisantes restent hors calcul conclusif."
		]
	},
	"specifications": [
		{
			"label": "Abrasif",
			"value": "Disque Type 1, 4 pouces (100 mm)",
			"evidenceIds": [
				"meuleuse-cleco-216glf-115a-w3t4-reserved-20261103-1"
			]
		},
		{
			"label": "Broche",
			"value": "3/8-24, filetage extérieur",
			"evidenceIds": [
				"meuleuse-cleco-216glf-115a-w3t4-reserved-20261103-1"
			]
		},
		{
			"label": "Échappement",
			"value": "Avant",
			"evidenceIds": [
				"meuleuse-cleco-216glf-115a-w3t4-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "11 500 tr/min",
			"evidenceIds": [
				"meuleuse-cleco-216glf-115a-w3t4-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "180 mm",
			"evidenceIds": [
				"meuleuse-cleco-216glf-115a-w3t4-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,22 kg",
			"evidenceIds": [
				"meuleuse-cleco-216glf-115a-w3t4-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p34",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=34",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 34",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "meuleuse-cleco-216glf-115a-w3t4-reserved-20261103-1",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=34",
			"sourceLabel": "Cleco : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. La 216GLF-115A-W3T4 est la version pour disque Type 1 de 100 mm, broche 3/8-24 et échappement avant. Le suffixe W3T4 désigne cette configuration d’abrasif ; une donnée du modèle D3T4 ne remplace pas la table de cette version. Le protecteur et l’adaptateur sont décrits dans l’équipement standard. La consommation n’est pas publiée dans cette table."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p34"
		],
		"workingPressureBar": [
			"october-dotco-p34"
		],
		"demandExplanation": [
			"october-dotco-p34"
		],
		"editorial": [
			"meuleuse-cleco-216glf-115a-w3t4-reserved-20261103-1"
		],
		"specifications": [
			"meuleuse-cleco-216glf-115a-w3t4-reserved-20261103-1"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;

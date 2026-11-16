import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-cleco-216glfb-135a-w3t4",
	"slug": "meuleuse-cleco-216glfb-135a-w3t4",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Cleco 216GLFB-135A-W3T4",
	"brand": "Cleco",
	"model": "216GLFB-135A-W3T4",
	"mpn": "216GLFB-135A-W3T4",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-cleco-216glfb-135a-w3t4-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Cleco 216GLFB-135A-W3T4",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "cleco-216glfb-135a-w3t4",
		"label": "Référence 216GLFB-135A-W3T4",
		"distinguishingAttributes": {
			"reference": "216GLFB-135A-W3T4",
			"Vitesse à vide": "13,500 tr/min",
			"Masse publiée": "0.95 kg",
			"Dimension publiée": "244 mm"
		}
	},
	"editorial": {
		"overview": "La 216GLFB-135A-W3T4 est la version à tête allongée pour disque de tronçonnage Type 1 de 100 mm, échappement avant. La D3T4 est prévue pour Type 27 ; la GLSB évacue latéralement. Le type de disque et l’échappement commandent le choix, pas seulement les 13 500 tr/min.",
		"verifiedFacts": [
			"Disque et broche : Type 1 ; 4 pouces (100 mm) ; 3/8-24 extérieur.",
			"Vitesse à vide : 13 500 tr/min.",
			"Puissance de famille : 0,6 hp ; 0,4 kW.",
			"Longueur et masse : 244 mm ; 0,95 kg.",
			"Échappement : Avant.",
			"Hauteur de tête : 2,2 pouces.",
			"Équipement standard indiqué : Carter, adaptateur de disque, clé de broche, instructions et notice d’entretien.",
			"Consommation : Absente du tableau ; besoin en air indéterminé."
		],
		"limitations": [
			"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Disque et broche",
			"value": "Type 1 ; 4 pouces (100 mm) ; 3/8-24 extérieur",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-cleco-216glfb-135a-w3t4:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "13 500 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-cleco-216glfb-135a-w3t4:0"
			]
		},
		{
			"label": "Puissance de famille",
			"value": "0,6 hp ; 0,4 kW",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-cleco-216glfb-135a-w3t4:0"
			]
		},
		{
			"label": "Longueur et masse",
			"value": "244 mm ; 0,95 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-cleco-216glfb-135a-w3t4:0"
			]
		},
		{
			"label": "Échappement",
			"value": "Avant",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-cleco-216glfb-135a-w3t4:0"
			]
		},
		{
			"label": "Hauteur de tête",
			"value": "2,2 pouces",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-cleco-216glfb-135a-w3t4:0"
			]
		},
		{
			"label": "Équipement standard indiqué",
			"value": "Carter, adaptateur de disque, clé de broche, instructions et notice d’entretien",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-cleco-216glfb-135a-w3t4:0"
			]
		},
		{
			"label": "Consommation",
			"value": "Absente du tableau ; besoin en air indéterminé",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-cleco-216glfb-135a-w3t4:0"
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
			"id": "review:2026-11-16-reviews:meuleuse-cleco-216glfb-135a-w3t4:0",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
			"sourceLabel": "Cleco, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La 216GLFB-135A-W3T4 est la version à tête allongée pour disque de tronçonnage Type 1 de 100 mm, échappement avant. La D3T4 est prévue pour Type 27 ; la GLSB évacue latéralement. Le type de disque et l’échappement commandent le choix, pas seulement les 13 500 tr/min. GET complet SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Pages PDF lues : 30, 34."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:meuleuse-cleco-216glfb-135a-w3t4:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:meuleuse-cleco-216glfb-135a-w3t4:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:meuleuse-cleco-216glfb-135a-w3t4:0"
		]
	},
	"notes": [
		"La demande continue en charge n’est pas entièrement qualifiée par les données publiées. Les consommations et leurs régimes documentés restent dans les spécifications ; aucun maximum continu n’est déduit d’une moyenne."
	]
};

export default product;

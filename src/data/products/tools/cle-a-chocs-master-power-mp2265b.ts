import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-master-power-mp2265b",
	"slug": "cle-a-chocs-master-power-mp2265b",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Master Power MP2265B",
	"brand": "Master Power",
	"model": "MP2265B",
	"mpn": "MP2265B",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-master-power-mp2265b.webp",
		"alt": "Repères techniques : Master Power MP2265B",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "master-power-mp2265b",
		"label": "Référence MP2265B",
		"distinguishingAttributes": {
			"reference": "MP2265B",
			"Fonction dans le catalogue": "cle-a-chocs",
			"Caractéristiques du tableau constructeur": "MP2265B 3/8” Pin-Detent Square 14-122 150 10000 84 91 2000 2,2 0,98 152 4 16 1/4” 10"
		}
	},
	"editorial": {
		"overview": "Master Power MP2265B. Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul. Fonction dans le catalogue : cle-a-chocs. Caractéristiques du tableau constructeur : MP2265B 3/8” Pin-Detent Square 14-122 150 10000 84 91 2000 2,2 0,98 152 4 16 1/4” 10.",
		"verifiedFacts": [
			"Fonction dans le catalogue : cle-a-chocs.",
			"Caractéristiques du tableau constructeur : MP2265B 3/8” Pin-Detent Square 14-122 150 10000 84 91 2000 2,2 0,98 152 4 16 1/4” 10."
		],
		"limitations": [
			"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
			"Référence physique explicitement listée dans un tableau constructeur. Aucune variante n’est générée à partir d’un code de nomenclature. Consulter le tableau source pour les dimensions et les exceptions exactes.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Fonction dans le catalogue",
			"value": "cle-a-chocs",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p63"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "MP2265B 3/8” Pin-Detent Square 14-122 150 10000 84 91 2000 2,2 0,98 152 4 16 1/4” 10",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p63"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation de cette ligne n’est pas établie ; une pression de couple, de puissance ou de vitesse n’est pas transposée.",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p63"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-cleco-gi1250-pdf-p63",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=63",
			"sourceLabel": "Cleco, catalogue constructeur cleco-gi1250.pdf, page PDF 63",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 8668d5e77a6b2469dc9b9012841e65bbfb947234a8087faa6fdd90384b3babac. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p63"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p63"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p63"
		]
	},
	"notes": [
		"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul."
	]
};

export default product;

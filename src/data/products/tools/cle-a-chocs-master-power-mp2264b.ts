import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-master-power-mp2264b",
	"slug": "cle-a-chocs-master-power-mp2264b",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Master Power MP2264B",
	"brand": "Master Power",
	"model": "MP2264B",
	"mpn": "MP2264B",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-master-power-mp2264b.webp",
		"alt": "Repères techniques : Master Power MP2264B",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "master-power-mp2264b",
		"label": "Référence MP2264B",
		"distinguishingAttributes": {
			"reference": "MP2264B",
			"Fonction dans le catalogue": "cle-a-chocs",
			"Caractéristiques du tableau constructeur": "MP2264B 1/4” Hex Quick Change 14-122 150 10000 84 91 2000 2,2 0,98 152 4 16 1/4” 10"
		}
	},
	"editorial": {
		"overview": "Master Power MP2264B. MP2265B partage 14–122 Nm de plage,150 Nm maximum et 10000 tr/min, mais reçoit une sortie carrée 3/8 pouce avec retenue Pin-Detent. MP2264B est la version hexagonale à changement rapide ; une même consommation ne rend pas les sorties interchangeables. Sortie : Hexagone 1/4 pouce, changement rapide. Couple maximal publié : 150 Nm. Vitesse à vide : 10 000 tr/min.",
		"verifiedFacts": [
			"Fonction dans le catalogue : cle-a-chocs.",
			"Caractéristiques du tableau constructeur : MP2264B 1/4” Hex Quick Change 14-122 150 10000 84 91 2000 2,2 0,98 152 4 16 1/4” 10.",
			"Sortie : Hexagone 1/4 pouce, changement rapide.",
			"Couple maximal publié : 150 Nm.",
			"Vitesse à vide : 10 000 tr/min.",
			"Longueur totale : 152 mm.",
			"Masse : 0,98 kg."
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
			"value": "MP2264B 1/4” Hex Quick Change 14-122 150 10000 84 91 2000 2,2 0,98 152 4 16 1/4” 10",
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
		},
		{
			"label": "Sortie",
			"value": "Hexagone 1/4 pouce, changement rapide",
			"evidenceIds": [
				"cle-a-chocs-master-power-mp2264b-reserved-20261101-1"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "150 Nm",
			"evidenceIds": [
				"cle-a-chocs-master-power-mp2264b-reserved-20261101-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "10 000 tr/min",
			"evidenceIds": [
				"cle-a-chocs-master-power-mp2264b-reserved-20261101-1"
			]
		},
		{
			"label": "Longueur totale",
			"value": "152 mm",
			"evidenceIds": [
				"cle-a-chocs-master-power-mp2264b-reserved-20261101-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,98 kg",
			"evidenceIds": [
				"cle-a-chocs-master-power-mp2264b-reserved-20261101-1"
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
		},
		{
			"id": "cle-a-chocs-master-power-mp2264b-reserved-20261101-1",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=63",
			"sourceLabel": "Master Power : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 8668d5e77a6b2469dc9b9012841e65bbfb947234a8087faa6fdd90384b3babac. Passage page=63. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
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
		],
		"editorial": [
			"cle-a-chocs-master-power-mp2264b-reserved-20261101-1"
		],
		"specifications": [
			"cle-a-chocs-master-power-mp2264b-reserved-20261101-1"
		]
	},
	"notes": [
		"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul."
	]
};

export default product;

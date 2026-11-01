import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-cleco-wl-200-3",
	"slug": "cle-a-chocs-cleco-wl-200-3",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Cleco WL-200-3",
	"brand": "Cleco",
	"model": "WL-200-3",
	"mpn": "WL-200-3",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-cleco-wl-200-3.webp",
		"alt": "Repères techniques : Cleco WL-200-3",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/Cleco_SP-1000-EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "cleco-wl-200-3",
		"label": "Référence WL-200-3",
		"distinguishingAttributes": {
			"reference": "WL-200-3",
			"Consommation documentaire (SCFM)": "18",
			"Caractéristiques du tableau constructeur": "WL-200-3 7/16 M10 3/8 15-50 20-68 3,200 3,000 8 .5 216 3 .1 1 .4 1 25 1/4” 1/4” 18"
		}
	},
	"editorial": {
		"overview": "Cleco WL-200-3. WL-200-4 possède un carré 1/2 pouce et une plage 20–81 Nm, avec 1,5 kg ; WL-200-3 possède 3/8 pouce,20–68 Nm et 1,4 kg. La consommation 18 SCFM commune ne justifie pas de choisir la sortie voisine. Carré de sortie : 3/8 pouce. Commande : En ligne, par levier. Plage de couple publiée : 20–68 Nm.",
		"verifiedFacts": [
			"Consommation documentaire (SCFM) : 18.",
			"Caractéristiques du tableau constructeur : WL-200-3 7/16 M10 3/8 15-50 20-68 3,200 3,000 8 .5 216 3 .1 1 .4 1 25 1/4” 1/4” 18.",
			"Carré de sortie : 3/8 pouce.",
			"Commande : En ligne, par levier.",
			"Plage de couple publiée : 20–68 Nm.",
			"Vitesse à vide : 3 000 tr/min.",
			"Cadence de frappe : 3 200 coups/min."
		],
		"limitations": [
			"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
			"Référence physique explicitement listée dans un tableau constructeur. Aucune variante n’est générée à partir d’un code de nomenclature. Consulter le tableau source pour les dimensions et les exceptions exactes.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Consommation documentaire (SCFM)",
			"value": "18",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p50"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "WL-200-3 7/16 M10 3/8 15-50 20-68 3,200 3,000 8 .5 216 3 .1 1 .4 1 25 1/4” 1/4” 18",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p50"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation de cette ligne n’est pas établie ; une pression de couple, de puissance ou de vitesse n’est pas transposée.",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p50"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "3/8 pouce",
			"evidenceIds": [
				"cle-a-chocs-cleco-wl-200-3-reserved-20261101-1"
			]
		},
		{
			"label": "Commande",
			"value": "En ligne, par levier",
			"evidenceIds": [
				"cle-a-chocs-cleco-wl-200-3-reserved-20261101-1"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "20–68 Nm",
			"evidenceIds": [
				"cle-a-chocs-cleco-wl-200-3-reserved-20261101-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3 000 tr/min",
			"evidenceIds": [
				"cle-a-chocs-cleco-wl-200-3-reserved-20261101-1"
			]
		},
		{
			"label": "Cadence de frappe",
			"value": "3 200 coups/min",
			"evidenceIds": [
				"cle-a-chocs-cleco-wl-200-3-reserved-20261101-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-cleco-sp1000-pdf-p50",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/Cleco_SP-1000-EN_en.pdf#page=50",
			"sourceLabel": "Cleco, catalogue constructeur cleco-sp1000.pdf, page PDF 50",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : d4b1a134c27b40febe6ad33aa138bad7b337e6775f0fdc06fa8a058d4c99a3e9. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "cle-a-chocs-cleco-wl-200-3-reserved-20261101-1",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/Cleco_SP-1000-EN_en.pdf#page=50",
			"sourceLabel": "Cleco : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 d4b1a134c27b40febe6ad33aa138bad7b337e6775f0fdc06fa8a058d4c99a3e9. Passage page=50. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p50"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p50"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p50"
		],
		"editorial": [
			"cle-a-chocs-cleco-wl-200-3-reserved-20261101-1"
		],
		"specifications": [
			"cle-a-chocs-cleco-wl-200-3-reserved-20261101-1"
		]
	},
	"notes": [
		"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul."
	]
};

export default product;

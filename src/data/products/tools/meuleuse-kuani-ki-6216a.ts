import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-kuani-ki-6216a",
	"slug": "meuleuse-kuani-ki-6216a",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "KUANI KI-6216A",
	"brand": "KUANI",
	"model": "KI-6216A",
	"mpn": "KI-6216A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Consommation moyenne publiée sans facteur de marche ni point de pression de mesure : aucun débit en charge déterministe ne peut être retenu.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-kuani-ki-6216a.webp",
		"alt": "Repères techniques : KUANI KI-6216A",
		"sourceUrl": "https://www.kuani.com/TW/ImgKuani/%E7%B6%9C%E5%90%88%E5%9E%8B%E9%8C%84%20202310-001-R2-2503%20%E5%A3%93%E7%B8%AE.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "kuani-ki-6216a",
		"label": "Référence KI-6216A",
		"distinguishingAttributes": {
			"reference": "KI-6216A",
			"Taille de pince (mm)": "6",
			"Vitesse à vide (tr/min)": "20,000"
		}
	},
	"editorial": {
		"overview": "KUANI KI-6216A. Consommation moyenne publiée sans facteur de marche ni point de pression de mesure : aucun débit en charge déterministe ne peut être retenu. Taille de pince (mm) : 6. Vitesse à vide (tr/min) : 20,000.",
		"verifiedFacts": [
			"Taille de pince (mm) : 6.",
			"Vitesse à vide (tr/min) : 20,000.",
			"Longueur totale (mm) : 220.",
			"Entrée d’air (pouce) : 3/8.",
			"Diamètre intérieur de tuyau (pouce) : 1/2.",
			"Consommation moyenne publiée (L/min) : 110.",
			"Masse nette (kg) : 0.87."
		],
		"limitations": [
			"Consommation moyenne publiée sans facteur de marche ni point de pression de mesure : aucun débit en charge déterministe ne peut être retenu.",
			"La consommation est explicitement une moyenne ; le facteur de marche, le régime en charge et le point de pression de mesure ne sont pas publiés dans ce tableau.",
			"La référence est documentée dans le catalogue KUANI 202310-001-R2-2503 ; aucune disponibilité actuelle ni performance en usage continu n’est déduite.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Taille de pince (mm)",
			"value": "6",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p85"
			]
		},
		{
			"label": "Vitesse à vide (tr/min)",
			"value": "20,000",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p85"
			]
		},
		{
			"label": "Longueur totale (mm)",
			"value": "220",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p85"
			]
		},
		{
			"label": "Entrée d’air (pouce)",
			"value": "3/8",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p85"
			]
		},
		{
			"label": "Diamètre intérieur de tuyau (pouce)",
			"value": "1/2",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p85"
			]
		},
		{
			"label": "Consommation moyenne publiée (L/min)",
			"value": "110",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p85"
			]
		},
		{
			"label": "Masse nette (kg)",
			"value": "0.87",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p85"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de pression de mesure n’est indiqué dans le tableau de cette référence.",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p85"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "110 L/min",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p85"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-kuani-catalog-2503-p85",
			"sourceUrl": "https://www.kuani.com/TW/ImgKuani/%E7%B6%9C%E5%90%88%E5%9E%8B%E9%8C%84%20202310-001-R2-2503%20%E5%A3%93%E7%B8%AE.pdf#page=85",
			"sourceLabel": "KUANI Product Catalog 202310-001-R2-2503, tableaux des références exactes, page PDF 85",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-kuani-catalog-2503-p85"
		],
		"workingPressureBar": [
			"october3c-tools-kuani-catalog-2503-p85"
		],
		"demandExplanation": [
			"october3c-tools-kuani-catalog-2503-p85"
		]
	},
	"notes": [
		"Consommation moyenne publiée sans facteur de marche ni point de pression de mesure : aucun débit en charge déterministe ne peut être retenu."
	]
};

export default product;

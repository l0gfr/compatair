import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-kuani-ki-5316",
	"slug": "perceuse-kuani-ki-5316",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "KUANI KI-5316",
	"brand": "KUANI",
	"model": "KI-5316",
	"mpn": "KI-5316",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Consommation moyenne publiée sans facteur de marche ni point de pression de mesure : aucun débit en charge déterministe ne peut être retenu.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-kuani-ki-5316.webp",
		"alt": "Repères techniques : KUANI KI-5316",
		"sourceUrl": "https://www.kuani.com/TW/ImgKuani/%E7%B6%9C%E5%90%88%E5%9E%8B%E9%8C%84%20202310-001-R2-2503%20%E5%A3%93%E7%B8%AE.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "kuani-ki-5316",
		"label": "Référence KI-5316",
		"distinguishingAttributes": {
			"reference": "KI-5316",
			"Filetage de broche (pouce)": "3/8-24",
			"Vitesse à vide (tr/min)": "2,800"
		}
	},
	"editorial": {
		"overview": "KUANI KI-5316. Consommation moyenne publiée sans facteur de marche ni point de pression de mesure : aucun débit en charge déterministe ne peut être retenu. Filetage de broche (pouce) : 3/8-24. Vitesse à vide (tr/min) : 2,800.",
		"verifiedFacts": [
			"Filetage de broche (pouce) : 3/8-24.",
			"Vitesse à vide (tr/min) : 2,800.",
			"Longueur totale (mm) : 203.",
			"Entrée d’air (pouce) : 1/4.",
			"Diamètre intérieur de tuyau (pouce) : 3/8.",
			"Consommation moyenne publiée (L/min) : 127.",
			"Masse nette (kg) : 1.48."
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
			"label": "Filetage de broche (pouce)",
			"value": "3/8-24",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p71"
			]
		},
		{
			"label": "Vitesse à vide (tr/min)",
			"value": "2,800",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p71"
			]
		},
		{
			"label": "Longueur totale (mm)",
			"value": "203",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p71"
			]
		},
		{
			"label": "Entrée d’air (pouce)",
			"value": "1/4",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p71"
			]
		},
		{
			"label": "Diamètre intérieur de tuyau (pouce)",
			"value": "3/8",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p71"
			]
		},
		{
			"label": "Consommation moyenne publiée (L/min)",
			"value": "127",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p71"
			]
		},
		{
			"label": "Masse nette (kg)",
			"value": "1.48",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p71"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de pression de mesure n’est indiqué dans le tableau de cette référence.",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p71"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "127 L/min",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p71"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-kuani-catalog-2503-p71",
			"sourceUrl": "https://www.kuani.com/TW/ImgKuani/%E7%B6%9C%E5%90%88%E5%9E%8B%E9%8C%84%20202310-001-R2-2503%20%E5%A3%93%E7%B8%AE.pdf#page=71",
			"sourceLabel": "KUANI Product Catalog 202310-001-R2-2503, tableaux des références exactes, page PDF 71",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-kuani-catalog-2503-p71"
		],
		"workingPressureBar": [
			"october3c-tools-kuani-catalog-2503-p71"
		],
		"demandExplanation": [
			"october3c-tools-kuani-catalog-2503-p71"
		]
	},
	"notes": [
		"Consommation moyenne publiée sans facteur de marche ni point de pression de mesure : aucun débit en charge déterministe ne peut être retenu."
	]
};

export default product;

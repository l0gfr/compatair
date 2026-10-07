import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-kuani-ki-6824",
	"slug": "meuleuse-kuani-ki-6824",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "KUANI KI-6824",
	"brand": "KUANI",
	"model": "KI-6824",
	"mpn": "KI-6824",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Consommation moyenne publiée sans facteur de marche ni point de pression de mesure : aucun débit en charge déterministe ne peut être retenu.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-kuani-ki-6824.webp",
		"alt": "Repères techniques : KUANI KI-6824",
		"sourceUrl": "https://www.kuani.com/TW/ImgKuani/%E7%B6%9C%E5%90%88%E5%9E%8B%E9%8C%84%20202310-001-R2-2503%20%E5%A3%93%E7%B8%AE.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "kuani-ki-6824",
		"label": "Référence KI-6824",
		"distinguishingAttributes": {
			"reference": "KI-6824",
			"Taille de roue (mm)": "102",
			"Filetage de broche (pouce)": "3/8-24"
		}
	},
	"editorial": {
		"overview": "KUANI KI-6824. Consommation moyenne publiée sans facteur de marche ni point de pression de mesure : aucun débit en charge déterministe ne peut être retenu. Taille de roue (mm) : 102. Filetage de broche (pouce) : 3/8-24.",
		"verifiedFacts": [
			"Taille de roue (mm) : 102.",
			"Filetage de broche (pouce) : 3/8-24.",
			"Vitesse à vide (tr/min) : 13,000.",
			"Longueur totale (mm) : 270.",
			"Entrée d’air (pouce) : 3/8.",
			"Diamètre intérieur de tuyau (pouce) : 1/2.",
			"Consommation moyenne publiée (L/min) : 119.",
			"Masse nette (kg) : 2.10."
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
			"label": "Taille de roue (mm)",
			"value": "102",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p90"
			]
		},
		{
			"label": "Filetage de broche (pouce)",
			"value": "3/8-24",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p90"
			]
		},
		{
			"label": "Vitesse à vide (tr/min)",
			"value": "13,000",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p90"
			]
		},
		{
			"label": "Longueur totale (mm)",
			"value": "270",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p90"
			]
		},
		{
			"label": "Entrée d’air (pouce)",
			"value": "3/8",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p90"
			]
		},
		{
			"label": "Diamètre intérieur de tuyau (pouce)",
			"value": "1/2",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p90"
			]
		},
		{
			"label": "Consommation moyenne publiée (L/min)",
			"value": "119",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p90"
			]
		},
		{
			"label": "Masse nette (kg)",
			"value": "2.10",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p90"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de pression de mesure n’est indiqué dans le tableau de cette référence.",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p90"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "119 L/min",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p90"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-kuani-catalog-2503-p90",
			"sourceUrl": "https://www.kuani.com/TW/ImgKuani/%E7%B6%9C%E5%90%88%E5%9E%8B%E9%8C%84%20202310-001-R2-2503%20%E5%A3%93%E7%B8%AE.pdf#page=90",
			"sourceLabel": "KUANI Product Catalog 202310-001-R2-2503, tableaux des références exactes, page PDF 90",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-kuani-catalog-2503-p90"
		],
		"workingPressureBar": [
			"october3c-tools-kuani-catalog-2503-p90"
		],
		"demandExplanation": [
			"october3c-tools-kuani-catalog-2503-p90"
		]
	},
	"notes": [
		"Consommation moyenne publiée sans facteur de marche ni point de pression de mesure : aucun débit en charge déterministe ne peut être retenu."
	]
};

export default product;

import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-kuani-ki-5420",
	"slug": "perceuse-kuani-ki-5420",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "KUANI KI-5420",
	"brand": "KUANI",
	"model": "KI-5420",
	"mpn": "KI-5420",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Consommation moyenne publiée sans facteur de marche ni point de pression de mesure : aucun débit en charge déterministe ne peut être retenu.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-kuani-ki-5420.webp",
		"alt": "Repères techniques : KUANI KI-5420",
		"sourceUrl": "https://www.kuani.com/TW/ImgKuani/%E7%B6%9C%E5%90%88%E5%9E%8B%E9%8C%84%20202310-001-R2-2503%20%E5%A3%93%E7%B8%AE.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "kuani-ki-5420",
		"label": "Référence KI-5420",
		"distinguishingAttributes": {
			"reference": "KI-5420",
			"Filetage de broche (pouce)": "3/8-24",
			"Vitesse à vide (tr/min)": "1,200"
		}
	},
	"editorial": {
		"overview": "KUANI KI-5420. Consommation moyenne publiée sans facteur de marche ni point de pression de mesure : aucun débit en charge déterministe ne peut être retenu. Filetage de broche (pouce) : 3/8-24. Vitesse à vide (tr/min) : 1,200.",
		"verifiedFacts": [
			"Filetage de broche (pouce) : 3/8-24.",
			"Vitesse à vide (tr/min) : 1,200.",
			"Longueur totale (mm) : 225.",
			"Entrée d’air (pouce) : 1/4.",
			"Diamètre intérieur de tuyau (mm) : 3/8.",
			"Consommation moyenne publiée (L/min) : 91.",
			"Masse nette (kg) : 1.40."
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
				"october3c-tools-kuani-catalog-2503-p51"
			]
		},
		{
			"label": "Vitesse à vide (tr/min)",
			"value": "1,200",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p51"
			]
		},
		{
			"label": "Longueur totale (mm)",
			"value": "225",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p51"
			]
		},
		{
			"label": "Entrée d’air (pouce)",
			"value": "1/4",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p51"
			]
		},
		{
			"label": "Diamètre intérieur de tuyau (mm)",
			"value": "3/8",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p51"
			]
		},
		{
			"label": "Consommation moyenne publiée (L/min)",
			"value": "91",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p51"
			]
		},
		{
			"label": "Masse nette (kg)",
			"value": "1.40",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p51"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de pression de mesure n’est indiqué dans le tableau de cette référence.",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p51"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "91 L/min",
			"evidenceIds": [
				"october3c-tools-kuani-catalog-2503-p51"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-kuani-catalog-2503-p51",
			"sourceUrl": "https://www.kuani.com/TW/ImgKuani/%E7%B6%9C%E5%90%88%E5%9E%8B%E9%8C%84%20202310-001-R2-2503%20%E5%A3%93%E7%B8%AE.pdf#page=51",
			"sourceLabel": "KUANI Product Catalog 202310-001-R2-2503, tableaux des références exactes, page PDF 51",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 569aacfbb59d7f84482da0eff26f47c6a89293c02b85c46fc33d30338b0a6bba. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-kuani-catalog-2503-p51"
		],
		"workingPressureBar": [
			"october3c-tools-kuani-catalog-2503-p51"
		],
		"demandExplanation": [
			"october3c-tools-kuani-catalog-2503-p51"
		]
	},
	"notes": [
		"Consommation moyenne publiée sans facteur de marche ni point de pression de mesure : aucun débit en charge déterministe ne peut être retenu."
	]
};

export default product;

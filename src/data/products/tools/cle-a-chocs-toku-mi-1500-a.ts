import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-toku-mi-1500-a",
	"slug": "cle-a-chocs-toku-mi-1500-a",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Toku MI-1500-A",
	"brand": "Toku",
	"model": "MI-1500-A",
	"mpn": "MI-1500-A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-toku-mi-1500-a.webp",
		"alt": "Repères techniques : Toku MI-1500-A",
		"sourceUrl": "https://www.toku-net.co.jp/cata/AirConst_ctj.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "toku-mi-1500-a",
		"label": "Référence MI-1500-A",
		"distinguishingAttributes": {
			"reference": "MI-1500-A",
			"Carré d’entraînement, in(mm)": "1/2（12.7）",
			"Capacité de boulon (mm)": "14"
		}
	},
	"editorial": {
		"overview": "Toku MI-1500-A. Consommation en charge : 300 L/min à 6 bar. Carré d’entraînement, in(mm) : 1/2（12.7）. Capacité de boulon (mm) : 14.",
		"verifiedFacts": [
			"Carré d’entraînement, in(mm) : 1/2（12.7）.",
			"Capacité de boulon (mm) : 14.",
			"Couple maximal (Nm) : 271.",
			"Masse (kg) : 1.8.",
			"Longueur (mm) : 340.",
			"Vitesse à vide (tr/min) : 7,000.",
			"Consommation à vide (m³/min) : 0.66.",
			"Consommation en charge (m³/min) : 0.3.",
			"Entrée d’air PT : 1/4.",
			"Diamètre intérieur de tuyau (mm) : 9.5."
		],
		"limitations": [
			"Le débit en charge est associé au point de pression documenté ; aucun facteur de marche supposé ne le réduit.",
			"La valeur principale de pression est 0,6 MPa, convertie exactement en 6 bar. L’équivalence parenthétique 6,0 kgf/cm² est arrondie dans le catalogue et n’est pas utilisée comme autre point.",
			"Valeurs transcrites de la colonne en charge, distincte de la colonne à vide ; aucun facteur de marche supposé.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Carré d’entraînement, in(mm)",
			"value": "1/2（12.7）",
			"evidenceIds": [
				"october3c-tools-toku-civil-306-p5"
			]
		},
		{
			"label": "Capacité de boulon (mm)",
			"value": "14",
			"evidenceIds": [
				"october3c-tools-toku-civil-306-p5"
			]
		},
		{
			"label": "Couple maximal (Nm)",
			"value": "271",
			"evidenceIds": [
				"october3c-tools-toku-civil-306-p5"
			]
		},
		{
			"label": "Masse (kg)",
			"value": "1.8",
			"evidenceIds": [
				"october3c-tools-toku-civil-306-p5"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "340",
			"evidenceIds": [
				"october3c-tools-toku-civil-306-p5"
			]
		},
		{
			"label": "Vitesse à vide (tr/min)",
			"value": "7,000",
			"evidenceIds": [
				"october3c-tools-toku-civil-306-p5"
			]
		},
		{
			"label": "Consommation à vide (m³/min)",
			"value": "0.66",
			"evidenceIds": [
				"october3c-tools-toku-civil-306-p5"
			]
		},
		{
			"label": "Consommation en charge (m³/min)",
			"value": "0.3",
			"evidenceIds": [
				"october3c-tools-toku-civil-306-p5"
			]
		},
		{
			"label": "Entrée d’air PT",
			"value": "1/4",
			"evidenceIds": [
				"october3c-tools-toku-civil-306-p5"
			]
		},
		{
			"label": "Diamètre intérieur de tuyau (mm)",
			"value": "9.5",
			"evidenceIds": [
				"october3c-tools-toku-civil-306-p5"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "※性能は、使用空気圧0.6MPa（6.0kgf/c㎡）時の数値。",
			"evidenceIds": [
				"october3c-tools-toku-civil-306-p5"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "0.3 m3/min",
			"evidenceIds": [
				"october3c-tools-toku-civil-306-p5"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-toku-civil-306-p5",
			"sourceUrl": "https://www.toku-net.co.jp/cata/AirConst_ctj.pdf#page=5",
			"sourceLabel": "TOKU Construction air tools, Ver.3.06, tableau des références exactes, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : fdf1e8a6353944a077ab4cf036420e6bed5699ee503fb76b5ed7de7b46b37124. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-toku-civil-306-p5"
		],
		"workingPressureBar": [
			"october3c-tools-toku-civil-306-p5"
		],
		"airflowLpm": [
			"october3c-tools-toku-civil-306-p5"
		]
	},
	"notes": [
		"Consommation en charge : 300 L/min à 6 bar."
	]
};

export default product;

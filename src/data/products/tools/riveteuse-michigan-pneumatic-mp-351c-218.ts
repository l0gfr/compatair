import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-michigan-pneumatic-mp-351c-218",
	"slug": "riveteuse-michigan-pneumatic-mp-351c-218",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "Michigan Pneumatic MP-351C-218",
	"brand": "Michigan Pneumatic",
	"model": "MP-351C-218",
	"mpn": "MP-351C-218",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Volume par course publié, sans pression ni base volumique établies ; valeur conservée dans la ligne technique, hors calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-michigan-pneumatic-mp-351c-218.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-351C-218",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/13-Riveters_v2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-351c-218",
		"label": "Référence MP-351C-218",
		"distinguishingAttributes": {
			"reference": "MP-351C-218",
			"Masse publiée": "6000 lbs",
			"Ligne technique constructeur": "MP-351C-218 3/16\" 5/32\" 2-1/8\" 1-3/16\" 25/32\" 0.187\" 6000 lbs 9/16\" 17-1/2\" 12.50 lbs 1/4\" 3/8\" 2.75 cfper stroke"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-351C-218. Volume par course publié, sans pression ni base volumique établies ; valeur conservée dans la ligne technique, hors calcul. Masse publiée : 6000 lbs. Ligne technique constructeur : MP-351C-218 3/16\" 5/32\" 2-1/8\" 1-3/16\" 25/32\" 0.187\" 6000 lbs 9/16\" 17-1/2\" 12.50 lbs 1/4\" 3/8\" 2.75 cfper stroke.",
		"verifiedFacts": [
			"Masse publiée : 6000 lbs.",
			"Ligne technique constructeur : MP-351C-218 3/16\" 5/32\" 2-1/8\" 1-3/16\" 25/32\" 0.187\" 6000 lbs 9/16\" 17-1/2\" 12.50 lbs 1/4\" 3/8\" 2.75 cfper stroke."
		],
		"limitations": [
			"Volume par course publié, sans pression ni base volumique établies ; valeur conservée dans la ligne technique, hors calcul.",
			"Données du catalogue constructeur archivé ; consommation moyenne ou de régime non précisé, sans certification du besoin maximal en charge.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "6000 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-13-pdf-p6"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-351C-218 3/16\" 5/32\" 2-1/8\" 1-3/16\" 25/32\" 0.187\" 6000 lbs 9/16\" 17-1/2\" 12.50 lbs 1/4\" 3/8\" 2.75 cfper stroke",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-13-pdf-p6"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-13-pdf-p6"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-13-pdf-p6",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/13-Riveters_v2.pdf#page=6",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 13, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 10b8be5bab69a1115007085fbd0305b474d3b8349820d435bc73d3d3869389c6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-13-pdf-p6"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-13-pdf-p6"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-13-pdf-p6"
		]
	},
	"notes": [
		"Volume par course publié, sans pression ni base volumique établies ; valeur conservée dans la ligne technique, hors calcul."
	]
};

export default product;

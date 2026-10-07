import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-michigan-pneumatic-mp-351c-pu",
	"slug": "riveteuse-michigan-pneumatic-mp-351c-pu",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "Michigan Pneumatic MP-351C-PU",
	"brand": "Michigan Pneumatic",
	"model": "MP-351C-PU",
	"mpn": "MP-351C-PU",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Volume par course publié, sans pression ni base volumique établies ; valeur conservée dans la ligne technique, hors calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-michigan-pneumatic-mp-351c-pu.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-351C-PU",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/13-Riveters_v2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-351c-pu",
		"label": "Référence MP-351C-PU",
		"distinguishingAttributes": {
			"reference": "MP-351C-PU",
			"Masse publiée": "5400 lbs",
			"Ligne technique constructeur": "MP-351C-PU 3/16\" 1/2\" 1-7/8\" 1/2\" 5400 lbs 20-1/2\" 20.5 lbs 1/4\" 3/8\" 2.75 cf per stroke"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-351C-PU. Volume par course publié, sans pression ni base volumique établies ; valeur conservée dans la ligne technique, hors calcul. Masse publiée : 5400 lbs. Ligne technique constructeur : MP-351C-PU 3/16\" 1/2\" 1-7/8\" 1/2\" 5400 lbs 20-1/2\" 20.5 lbs 1/4\" 3/8\" 2.75 cf per stroke.",
		"verifiedFacts": [
			"Masse publiée : 5400 lbs.",
			"Ligne technique constructeur : MP-351C-PU 3/16\" 1/2\" 1-7/8\" 1/2\" 5400 lbs 20-1/2\" 20.5 lbs 1/4\" 3/8\" 2.75 cf per stroke."
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
			"value": "5400 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-13-pdf-p7"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-351C-PU 3/16\" 1/2\" 1-7/8\" 1/2\" 5400 lbs 20-1/2\" 20.5 lbs 1/4\" 3/8\" 2.75 cf per stroke",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-13-pdf-p7"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-13-pdf-p7"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-13-pdf-p7",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/13-Riveters_v2.pdf#page=7",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 13, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 10b8be5bab69a1115007085fbd0305b474d3b8349820d435bc73d3d3869389c6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-13-pdf-p7"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-13-pdf-p7"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-13-pdf-p7"
		]
	},
	"notes": [
		"Volume par course publié, sans pression ni base volumique établies ; valeur conservée dans la ligne technique, hors calcul."
	]
};

export default product;

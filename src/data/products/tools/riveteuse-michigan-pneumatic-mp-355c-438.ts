import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-michigan-pneumatic-mp-355c-438",
	"slug": "riveteuse-michigan-pneumatic-mp-355c-438",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "Michigan Pneumatic MP-355C-438",
	"brand": "Michigan Pneumatic",
	"model": "MP-355C-438",
	"mpn": "MP-355C-438",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Volume par course publié, sans pression ni base volumique établies ; valeur conservée dans la ligne technique, hors calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-michigan-pneumatic-mp-355c-438.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-355C-438",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/13-Riveters_v2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-355c-438",
		"label": "Référence MP-355C-438",
		"distinguishingAttributes": {
			"reference": "MP-355C-438",
			"Masse publiée": "000 lbs",
			"Ligne technique constructeur": "MP-355C-438 1/4\" 7/32\" 4-3/8\" 3\" 1-1/32\" 0.25\" 12,000 lbs 7/8\" 22-1/2\" 26 lbs 1/4\" 3/8\" 2.75 cfper stroke"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-355C-438. Volume par course publié, sans pression ni base volumique établies ; valeur conservée dans la ligne technique, hors calcul. Masse publiée : 000 lbs. Ligne technique constructeur : MP-355C-438 1/4\" 7/32\" 4-3/8\" 3\" 1-1/32\" 0.25\" 12,000 lbs 7/8\" 22-1/2\" 26 lbs 1/4\" 3/8\" 2.75 cfper stroke.",
		"verifiedFacts": [
			"Masse publiée : 000 lbs.",
			"Ligne technique constructeur : MP-355C-438 1/4\" 7/32\" 4-3/8\" 3\" 1-1/32\" 0.25\" 12,000 lbs 7/8\" 22-1/2\" 26 lbs 1/4\" 3/8\" 2.75 cfper stroke."
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
			"value": "000 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-13-pdf-p7"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-355C-438 1/4\" 7/32\" 4-3/8\" 3\" 1-1/32\" 0.25\" 12,000 lbs 7/8\" 22-1/2\" 26 lbs 1/4\" 3/8\" 2.75 cfper stroke",
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

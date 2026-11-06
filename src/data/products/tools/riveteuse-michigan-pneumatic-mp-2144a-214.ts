import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-michigan-pneumatic-mp-2144a-214",
	"slug": "riveteuse-michigan-pneumatic-mp-2144a-214",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "Michigan Pneumatic MP-2144A-214",
	"brand": "Michigan Pneumatic",
	"model": "MP-2144A-214",
	"mpn": "MP-2144A-214",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Volume par course publié, sans pression ni base volumique établies ; valeur conservée dans la ligne technique, hors calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-michigan-pneumatic-mp-2144a-214.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-2144A-214",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/13-Riveters_v2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-2144a-214",
		"label": "Référence MP-2144A-214",
		"distinguishingAttributes": {
			"reference": "MP-2144A-214",
			"Masse publiée": "4,25 lb",
			"Ligne technique constructeur": "MP-2144A-214 1/8\" 2-1/4\" 2-1/8\" 2200 lbs 7/8\" 10-1/8\" 4.25 lbs3/32\"7/8\" 0.187\"1/4\" 3/8\" 1.12 cfper stroke"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-2144A-214. Volume par course publié, sans pression ni base volumique établies ; valeur conservée dans la ligne technique, hors calcul. Masse publiée : 4,25 lb. Ligne technique constructeur : MP-2144A-214 1/8\" 2-1/4\" 2-1/8\" 2200 lbs 7/8\" 10-1/8\" 4.25 lbs3/32\"7/8\" 0.187\"1/4\" 3/8\" 1.12 cfper stroke.",
		"verifiedFacts": [
			"Masse publiée : 4,25 lb.",
			"Ligne technique constructeur : MP-2144A-214 1/8\" 2-1/4\" 2-1/8\" 2200 lbs 7/8\" 10-1/8\" 4.25 lbs3/32\"7/8\" 0.187\"1/4\" 3/8\" 1.12 cfper stroke."
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
			"value": "4,25 lb",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-13-pdf-p5"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-2144A-214 1/8\" 2-1/4\" 2-1/8\" 2200 lbs 7/8\" 10-1/8\" 4.25 lbs3/32\"7/8\" 0.187\"1/4\" 3/8\" 1.12 cfper stroke",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-13-pdf-p5"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-13-pdf-p5"
			]
		},
		{
			"label": "Traction publiée",
			"value": "2200 lb",
			"evidenceIds": [
				"review:2026-11-06-followup:riveteuse-michigan-pneumatic-mp-2144a-214:1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-13-pdf-p5",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/13-Riveters_v2.pdf#page=5",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 13, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 10b8be5bab69a1115007085fbd0305b474d3b8349820d435bc73d3d3869389c6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-06-followup:riveteuse-michigan-pneumatic-mp-2144a-214:1",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/13-Riveters_v2.pdf#page=5",
			"sourceLabel": "Michigan Pneumatic, revue documentaire du 6 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-06",
			"confidence": "B",
			"notes": "Catalogue riveteuses p5 :2200 lb est la traction,masse4,25 lb,course7/8 pouce. Corriger la masse étiquetée2200 lb et conserver la traction séparément. Les1,12 cf/stroke sans pression de mesure restent non dimensionnants. SHA-256 du document complet : 10b8be5bab69a1115007085fbd0305b474d3b8349820d435bc73d3d3869389c6."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-13-pdf-p5"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-13-pdf-p5"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-13-pdf-p5"
		]
	},
	"notes": [
		"Volume par course publié, sans pression ni base volumique établies ; valeur conservée dans la ligne technique, hors calcul."
	]
};

export default product;

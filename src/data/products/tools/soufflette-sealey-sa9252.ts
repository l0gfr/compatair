import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "soufflette-sealey-sa9252",
	"slug": "soufflette-sealey-sa9252",
	"categoryId": "soufflette",
	"category": "soufflette",
	"label": "Sealey SA9252",
	"brand": "Sealey",
	"model": "SA9252",
	"mpn": "SA9252",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 8,
		"typical": 8,
		"max": 8
	},
	"airflowLpm": {
		"min": 580,
		"typical": 580,
		"max": 580
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/soufflette-sealey-sa9252.webp",
		"alt": "Repères techniques : Sealey SA9252",
		"sourceUrl": "https://www.sealey.co.uk/premier-curtain-air-blow-gun-with-1-4-bsp-air-inlet-sa9252/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sealey-sa9252",
		"label": "Référence SA9252",
		"distinguishingAttributes": {
			"reference": "SA9252",
			"Champ fabricant : Max. Operating Pressure": "232psi/16bar",
			"Champ fabricant : Lance Type": "Air Curtain"
		}
	},
	"editorial": {
		"overview": "Sealey SA9252. Consommation de régime non précisé : 580 L/min à 8 bar. Champ fabricant : Max. Operating Pressure : 232psi/16bar. Champ fabricant : Lance Type : Air Curtain.",
		"verifiedFacts": [
			"Champ fabricant : Max. Operating Pressure : 232psi/16bar.",
			"Champ fabricant : Lance Type : Air Curtain.",
			"Champ fabricant : Flow at 8bar : 580 l/min.",
			"Champ fabricant : Noise Level at 8bar : 81.5 dB.",
			"Champ fabricant : Temperature Range : -10 to +80°C.",
			"Champ fabricant : Inlet Size : 1/4\"BSP.",
			"Champ fabricant : Nett Weight : 0.095kg."
		],
		"limitations": [
			"Une consommation moyenne, à vide ou de régime non précisé ne confirme pas le débit maximal en charge ; le verdict reste insufficient_data.",
			"Fiche produit constructeur, caractéristiques déclaratives ; aucun essai physique CompatAir.",
			"Les pressions recommandées ou limites d’alimentation restent distinctes des points de mesure de consommation.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Champ fabricant : Max. Operating Pressure",
			"value": "232psi/16bar",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa9252-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Lance Type",
			"value": "Air Curtain",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa9252-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Flow at 8bar",
			"value": "580 l/min",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa9252-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Noise Level at 8bar",
			"value": "81.5 dB",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa9252-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Temperature Range",
			"value": "-10 to +80°C",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa9252-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Inlet Size",
			"value": "1/4\"BSP",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa9252-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Nett Weight",
			"value": "0.095kg",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa9252-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Flow at 8bar: 580 l/min",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa9252-html-p1"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "580 L/min",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa9252-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-sealey-sa9252-html-p1",
			"sourceUrl": "https://www.sealey.co.uk/premier-curtain-air-blow-gun-with-1-4-bsp-air-inlet-sa9252/",
			"sourceLabel": "Sealey, fiche technique constructeur SA9252",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 247db288c6d2ad4e22b81d390b4385f7a0e1dfcb26e9aa196079e45bfdecc83b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-sealey-sa9252-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-sealey-sa9252-html-p1"
		],
		"airflowLpm": [
			"october2b-tools-oct2b-sealey-sa9252-html-p1"
		],
		"airflowBasis": [
			"october2b-tools-oct2b-sealey-sa9252-html-p1"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 580 L/min à 8 bar."
	]
};

export default product;

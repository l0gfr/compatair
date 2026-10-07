import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "grignoteuse-sealey-sa649",
	"slug": "grignoteuse-sealey-sa649",
	"categoryId": "grignoteuse",
	"category": "grignoteuse",
	"label": "Sealey SA649",
	"brand": "Sealey",
	"model": "SA649",
	"mpn": "SA649",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.205
	},
	"demandExplanation": "La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué.",
	"confidence": "B",
	"image": {
		"src": "/images/products/grignoteuse-sealey-sa649.webp",
		"alt": "Repères techniques : Sealey SA649",
		"sourceUrl": "https://www.sealey.co.uk/premier-air-nibbler-sa649/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sealey-sa649",
		"label": "Référence SA649",
		"distinguishingAttributes": {
			"reference": "SA649",
			"Champ fabricant : Air Consumption": "4cfm",
			"Champ fabricant : Free Speed": "3200spm"
		}
	},
	"editorial": {
		"overview": "Sealey SA649. La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué. Champ fabricant : Air Consumption : 4cfm. Champ fabricant : Free Speed : 3200spm.",
		"verifiedFacts": [
			"Champ fabricant : Air Consumption : 4cfm.",
			"Champ fabricant : Free Speed : 3200spm.",
			"Champ fabricant : Inlet Size : 1/4\"BSP.",
			"Champ fabricant : Maximum Cutting Capacity : 1.5mm (Steel).",
			"Champ fabricant : Noise Power/Pressure : 97/86dB(A).",
			"Champ fabricant : Operating Pressure : 90psi.",
			"Champ fabricant : Vibration/Uncertainty : 8.73/3.33m/s².",
			"Champ fabricant : Nett Weight : 0.9kg."
		],
		"limitations": [
			"La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué.",
			"Fiche produit constructeur, caractéristiques déclaratives ; aucun essai physique CompatAir.",
			"Les pressions recommandées ou limites d’alimentation restent distinctes des points de mesure de consommation.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Champ fabricant : Air Consumption",
			"value": "4cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa649-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Free Speed",
			"value": "3200spm",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa649-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Inlet Size",
			"value": "1/4\"BSP",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa649-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Maximum Cutting Capacity",
			"value": "1.5mm (Steel)",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa649-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Noise Power/Pressure",
			"value": "97/86dB(A)",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa649-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Operating Pressure",
			"value": "90psi",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa649-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Vibration/Uncertainty",
			"value": "8.73/3.33m/s²",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa649-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Nett Weight",
			"value": "0.9kg",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa649-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 90psi",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa649-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-sealey-sa649-html-p1",
			"sourceUrl": "https://www.sealey.co.uk/premier-air-nibbler-sa649/",
			"sourceLabel": "Sealey, fiche technique constructeur SA649",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 919d558ab76161380589f9001cb939c7fcb51d046e5989c55a51c993b3988e8d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-sealey-sa649-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-sealey-sa649-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-sealey-sa649-html-p1"
		]
	},
	"notes": [
		"La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué."
	]
};

export default product;

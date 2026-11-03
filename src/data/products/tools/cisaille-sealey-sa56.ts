import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-sealey-sa56",
	"slug": "cisaille-sealey-sa56",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "Sealey SA56",
	"brand": "Sealey",
	"model": "SA56",
	"mpn": "SA56",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.205
	},
	"demandExplanation": "La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-sealey-sa56.webp",
		"alt": "Repères techniques : Sealey SA56",
		"sourceUrl": "https://www.sealey.co.uk/pistol-type-air-shears-sa56/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sealey-sa56",
		"label": "Référence SA56",
		"distinguishingAttributes": {
			"reference": "SA56",
			"Champ fabricant : Air Consumption": "4cfm",
			"Champ fabricant : Inlet Size": "1/4\"BSP"
		}
	},
	"editorial": {
		"overview": "Sealey SA56. La SA56 est une cisaille à poignée pistolet pour coupes droites dans l’acier jusqu’à 1,2 mm. Les trois lames portent les codes SA56.31, .32 et .33 ; elles ne sont pas transposées à la SA53. La fiche donne 4 CFM sans préciser le régime de consommation ; description 1,22 kg et tableau 1,2 kg restent deux niveaux d’arrondi.",
		"verifiedFacts": [
			"Champ fabricant : Air Consumption : 4 cfm.",
			"Champ fabricant : Inlet Size : 1/4\"BSP.",
			"Champ fabricant : Maximum Cutting Capacity : 1.2 mm (Steel).",
			"Champ fabricant : Noise Power/Pressure : 99/88 dB(A).",
			"Champ fabricant : Operating Pressure : 90 psi.",
			"Champ fabricant : Vibration/Uncertainty : 4/0.13m/s².",
			"Champ fabricant : Nett Weight : 1.2 kg.",
			"Capacité acier : 1,2 mm.",
			"Forme : Poignée pistolet.",
			"Lames de rechange : SA56.31, SA56.32 et SA56.33."
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
			"value": "4 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa56-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Inlet Size",
			"value": "1/4\"BSP",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa56-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Maximum Cutting Capacity",
			"value": "1.2 mm (Steel)",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa56-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Noise Power/Pressure",
			"value": "99/88 dB(A)",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa56-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Operating Pressure",
			"value": "90 psi",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa56-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Vibration/Uncertainty",
			"value": "4/0.13m/s²",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa56-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Nett Weight",
			"value": "1.2 kg",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa56-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Operating Pressure: 90 psi",
			"evidenceIds": [
				"october2b-tools-oct2b-sealey-sa56-html-p1"
			]
		},
		{
			"label": "Capacité acier",
			"value": "1,2 mm",
			"evidenceIds": [
				"cisaille-sealey-sa56-reserved-20261103-1"
			]
		},
		{
			"label": "Forme",
			"value": "Poignée pistolet",
			"evidenceIds": [
				"cisaille-sealey-sa56-reserved-20261103-1"
			]
		},
		{
			"label": "Lames de rechange",
			"value": "SA56.31, SA56.32 et SA56.33",
			"evidenceIds": [
				"cisaille-sealey-sa56-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-sealey-sa56-html-p1",
			"sourceUrl": "https://www.sealey.co.uk/pistol-type-air-shears-sa56/",
			"sourceLabel": "Sealey, fiche technique constructeur SA56",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : e4a24274b69eadb7ad7f28ce0a624f752c096fecc37a37e8b7f13d1db417dbb0. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "cisaille-sealey-sa56-reserved-20261103-1",
			"sourceUrl": "https://www.sealey.co.uk/pistol-type-air-shears-sa56/",
			"sourceLabel": "Sealey : revue factuelle du 3 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 de 11aecbd150157851c6967e5394f85b67b7789b0c7a68a9cfebbb165604194d. La SA56 est une cisaille à poignée pistolet pour coupes droites dans l’acier jusqu’à 1,2 mm. Les trois lames portent les codes SA56.31, .32 et .33 ; elles ne sont pas transposées à la SA53. La fiche donne 4 CFM sans préciser le régime de consommation ; description 1,22 kg et tableau 1,2 kg restent deux niveaux d’arrondi."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-sealey-sa56-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-sealey-sa56-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-sealey-sa56-html-p1"
		],
		"editorial": [
			"cisaille-sealey-sa56-reserved-20261103-1"
		],
		"specifications": [
			"cisaille-sealey-sa56-reserved-20261103-1"
		]
	},
	"notes": [
		"La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué."
	]
};

export default product;

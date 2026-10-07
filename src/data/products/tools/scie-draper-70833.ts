import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-draper-70833",
	"slug": "scie-draper-70833",
	"categoryId": "scie",
	"category": "scie",
	"label": "Draper 70833",
	"brand": "Draper",
	"model": "70833",
	"mpn": "70833",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué.",
	"connectorSize": "1/4\" (Air inlet)",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-draper-70833.webp",
		"alt": "Repères techniques : Draper 70833",
		"sourceUrl": "https://www.drapertools.com/product/70833/air-body-saw/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "draper-70833",
		"label": "Référence 70833",
		"distinguishingAttributes": {
			"reference": "70833",
			"Champ fabricant : Working pressure": "90psi (6.2bar)",
			"Champ fabricant : Average air consumption": "2.5cfm (78l/min)"
		}
	},
	"editorial": {
		"overview": "Draper 70833. La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué. Champ fabricant : Working pressure : 90psi (6.2bar). Champ fabricant : Average air consumption : 2.5cfm (78l/min).",
		"verifiedFacts": [
			"Champ fabricant : Working pressure : 90psi (6.2bar).",
			"Champ fabricant : Average air consumption : 2.5cfm (78l/min).",
			"Champ fabricant : Air inlet : 1/4\".",
			"Champ fabricant : Air hose size : 3/8\".",
			"Champ fabricant : Strokes per min : 10,000.",
			"Champ fabricant : Weight : 0.64 kg."
		],
		"limitations": [
			"La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué.",
			"Fiche produit constructeur, caractéristiques déclaratives ; aucun essai physique CompatAir.",
			"Les pressions recommandées ou limites d’alimentation restent distinctes des points de mesure de consommation.",
			"La consommation de cette référence n’apparaît pas dans le bloc de caractéristiques isolé.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Champ fabricant : Working pressure",
			"value": "90psi (6.2bar)",
			"evidenceIds": [
				"october2b-tools-oct2b-draper-70833-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Average air consumption",
			"value": "2.5cfm (78l/min)",
			"evidenceIds": [
				"october2b-tools-oct2b-draper-70833-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Air inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october2b-tools-oct2b-draper-70833-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Air hose size",
			"value": "3/8\"",
			"evidenceIds": [
				"october2b-tools-oct2b-draper-70833-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Strokes per min",
			"value": "10,000",
			"evidenceIds": [
				"october2b-tools-oct2b-draper-70833-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Weight",
			"value": "0.64 kg",
			"evidenceIds": [
				"october2b-tools-oct2b-draper-70833-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Air inlet",
			"value": "1/4\"",
			"evidenceIds": [
				"october2b-tools-oct2b-draper-70833-html-p1"
			]
		},
		{
			"label": "Champ fabricant : Air hose size",
			"value": "3/8\"",
			"evidenceIds": [
				"october2b-tools-oct2b-draper-70833-html-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de mesure associé à la consommation n’est établi par la fiche individuelle.",
			"evidenceIds": [
				"october2b-tools-oct2b-draper-70833-html-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-draper-70833-html-p1",
			"sourceUrl": "https://www.drapertools.com/product/70833/air-body-saw/",
			"sourceLabel": "Draper, fiche technique constructeur 70833",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : d430a4ae94857ed467964dac4ebefefc5fc2102ead5c97ab2266e23bf52ad645. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2b-tools-oct2b-draper-70833-html-p1"
		],
		"mpn": [
			"october2b-tools-oct2b-draper-70833-html-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-draper-70833-html-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-draper-70833-html-p1"
		]
	},
	"notes": [
		"La fiche décrit cette référence et ses dimensions ou caractéristiques mécaniques. Aucun besoin d’air maximal à une pression donnée n’est reconstitué."
	]
};

export default product;

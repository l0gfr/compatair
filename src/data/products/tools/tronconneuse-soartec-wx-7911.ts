import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-soartec-wx-7911",
	"slug": "tronconneuse-soartec-wx-7911",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "Soartec WX-7911",
	"brand": "Soartec",
	"model": "WX-7911",
	"mpn": "WX-7911",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.205
	},
	"demandExplanation": "La fiche fournit les caractéristiques propres de cette référence, mais ne documente pas ensemble une consommation en charge, sa pression de mesure et sa convention volumique. Aucun besoin d’air n’est déduit de la masse, de la vitesse ou de la capacité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-soartec-wx-7911.webp",
		"alt": "Repères techniques : Soartec WX-7911",
		"sourceUrl": "https://www.soartectools.com/products/air-heavy-duty-cut-off-tool-3-75mm",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "soartec-wx-7911",
		"label": "Référence WX-7911",
		"distinguishingAttributes": {
			"reference": "WX-7911",
			"Fonction déclarée": "Air Heavy Duty Cut Off Tool 3\" (75mm)",
			"Champ fabricant : Cylinder Power (hp/w)": "0.5 (375)"
		}
	},
	"editorial": {
		"overview": "Soartec WX-7911. La fiche fournit les caractéristiques propres de cette référence, mais ne documente pas ensemble une consommation en charge, sa pression de mesure et sa convention volumique. Aucun besoin d’air n’est déduit de la masse, de la vitesse ou de la capacité. Fonction déclarée : Air Heavy Duty Cut Off Tool 3\" (75mm). Champ fabricant : Cylinder Power (hp/w) : 0.5 (375).",
		"verifiedFacts": [
			"Fonction déclarée : Air Heavy Duty Cut Off Tool 3\" (75mm).",
			"Champ fabricant : Cylinder Power (hp/w) : 0.5 (375).",
			"Champ fabricant : Wheel Size : 3\"(75).",
			"Champ fabricant : Spindle Thread Size : 3/8\"-24UNF.",
			"Masse : 0.77 kg.",
			"Longueur (mm) : 193.",
			"Vitesse à vide (tr/min) : 20,000.",
			"Pression d’alimentation publiée : 90 psi."
		],
		"limitations": [
			"La fiche fournit les caractéristiques propres de cette référence, mais ne documente pas ensemble une consommation en charge, sa pression de mesure et sa convention volumique. Aucun besoin d’air n’est déduit de la masse, de la vitesse ou de la capacité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Fonction déclarée",
			"value": "Air Heavy Duty Cut Off Tool 3\" (75mm)",
			"evidenceIds": [
				"october3c-tools-soartec-product-166-p1"
			]
		},
		{
			"label": "Champ fabricant : Cylinder Power (hp/w)",
			"value": "0.5 (375)",
			"evidenceIds": [
				"october3c-tools-soartec-product-166-p1"
			]
		},
		{
			"label": "Champ fabricant : Wheel Size",
			"value": "3\"(75)",
			"evidenceIds": [
				"october3c-tools-soartec-product-166-p1"
			]
		},
		{
			"label": "Champ fabricant : Spindle Thread Size",
			"value": "3/8\"-24UNF",
			"evidenceIds": [
				"october3c-tools-soartec-product-166-p1"
			]
		},
		{
			"label": "Masse",
			"value": "0.77 kg",
			"evidenceIds": [
				"october3c-tools-soartec-product-166-p1"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "193",
			"evidenceIds": [
				"october3c-tools-soartec-product-166-p1"
			]
		},
		{
			"label": "Vitesse à vide (tr/min)",
			"value": "20,000",
			"evidenceIds": [
				"october3c-tools-soartec-product-166-p1"
			]
		},
		{
			"label": "Pression d’alimentation publiée",
			"value": "90 psi",
			"evidenceIds": [
				"october3c-tools-soartec-product-166-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90 psi",
			"evidenceIds": [
				"october3c-tools-soartec-product-166-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-soartec-product-166-p1",
			"sourceUrl": "https://www.soartectools.com/products/air-heavy-duty-cut-off-tool-3-75mm",
			"sourceLabel": "Fiche fabricant Soartec, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 4cbad916b59fc7f76fb99d4587c53e41a11f4a65e14dfffa7a56cc3237b66fab. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-soartec-product-166-p1"
		],
		"workingPressureBar": [
			"october3c-tools-soartec-product-166-p1"
		],
		"demandExplanation": [
			"october3c-tools-soartec-product-166-p1"
		]
	},
	"notes": [
		"La fiche fournit les caractéristiques propres de cette référence, mais ne documente pas ensemble une consommation en charge, sa pression de mesure et sa convention volumique. Aucun besoin d’air n’est déduit de la masse, de la vitesse ou de la capacité."
	]
};

export default product;

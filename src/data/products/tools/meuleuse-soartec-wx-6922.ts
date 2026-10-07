import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-soartec-wx-6922",
	"slug": "meuleuse-soartec-wx-6922",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Soartec WX-6922",
	"brand": "Soartec",
	"model": "WX-6922",
	"mpn": "WX-6922",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.205
	},
	"demandExplanation": "La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-soartec-wx-6922.webp",
		"alt": "Repères techniques : Soartec WX-6922",
		"sourceUrl": "https://www.soartectools.com/products/air-die-grinder-composite-type-6mm-1-4-wx-6922",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "soartec-wx-6922",
		"label": "Référence WX-6922",
		"distinguishingAttributes": {
			"reference": "WX-6922",
			"Fonction déclarée": "Air Die Grinder Composite Type 6mm (1/4\")",
			"Champ fabricant : Throttle Type": "Lever"
		}
	},
	"editorial": {
		"overview": "Soartec WX-6922. La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité. Fonction déclarée : Air Die Grinder Composite Type 6mm (1/4\"). Champ fabricant : Throttle Type : Lever.",
		"verifiedFacts": [
			"Fonction déclarée : Air Die Grinder Composite Type 6mm (1/4\").",
			"Champ fabricant : Throttle Type : Lever.",
			"Champ fabricant : Collet Capacity (in/mm) : 1/4\"(6mm).",
			"Vitesse à vide (tr/min) : 22000.",
			"Pression d’alimentation publiée : 90 psi.",
			"Masse : 0.74 kg.",
			"Longueur (mm) : 228.",
			"Consommation déclarée, libellé original hors calcul : Air Cons. (cfm/l/min): 3 (84)."
		],
		"limitations": [
			"La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Fonction déclarée",
			"value": "Air Die Grinder Composite Type 6mm (1/4\")",
			"evidenceIds": [
				"october3c-tools-soartec-product-037-p1"
			]
		},
		{
			"label": "Champ fabricant : Throttle Type",
			"value": "Lever",
			"evidenceIds": [
				"october3c-tools-soartec-product-037-p1"
			]
		},
		{
			"label": "Champ fabricant : Collet Capacity (in/mm)",
			"value": "1/4\"(6mm)",
			"evidenceIds": [
				"october3c-tools-soartec-product-037-p1"
			]
		},
		{
			"label": "Vitesse à vide (tr/min)",
			"value": "22000",
			"evidenceIds": [
				"october3c-tools-soartec-product-037-p1"
			]
		},
		{
			"label": "Pression d’alimentation publiée",
			"value": "90 psi",
			"evidenceIds": [
				"october3c-tools-soartec-product-037-p1"
			]
		},
		{
			"label": "Masse",
			"value": "0.74 kg",
			"evidenceIds": [
				"october3c-tools-soartec-product-037-p1"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "228",
			"evidenceIds": [
				"october3c-tools-soartec-product-037-p1"
			]
		},
		{
			"label": "Consommation déclarée, libellé original hors calcul",
			"value": "Air Cons. (cfm/l/min): 3 (84)",
			"evidenceIds": [
				"october3c-tools-soartec-product-037-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90 psi",
			"evidenceIds": [
				"october3c-tools-soartec-product-037-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "3 cfm",
			"evidenceIds": [
				"october3c-tools-soartec-product-037-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-soartec-product-037-p1",
			"sourceUrl": "https://www.soartectools.com/products/air-die-grinder-composite-type-6mm-1-4-wx-6922",
			"sourceLabel": "Fiche fabricant Soartec, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : a217c1bac3b96d3e26de54d9878f92cf3596e32f180b27776374bd714b063673. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-soartec-product-037-p1"
		],
		"workingPressureBar": [
			"october3c-tools-soartec-product-037-p1"
		],
		"demandExplanation": [
			"october3c-tools-soartec-product-037-p1"
		]
	},
	"notes": [
		"La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité."
	]
};

export default product;

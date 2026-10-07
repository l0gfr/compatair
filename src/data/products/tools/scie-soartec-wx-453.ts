import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-soartec-wx-453",
	"slug": "scie-soartec-wx-453",
	"categoryId": "scie",
	"category": "scie",
	"label": "Soartec WX-453",
	"brand": "Soartec",
	"model": "WX-453",
	"mpn": "WX-453",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.205
	},
	"demandExplanation": "La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-soartec-wx-453.webp",
		"alt": "Repères techniques : Soartec WX-453",
		"sourceUrl": "https://www.soartectools.com/products/air-reciprocating-saw-10mm-wx-453",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "soartec-wx-453",
		"label": "Référence WX-453",
		"distinguishingAttributes": {
			"reference": "WX-453",
			"Fonction déclarée": "Air Reciprocating Saw 10mm",
			"Champ fabricant : Stroke Length (mm)": "10"
		}
	},
	"editorial": {
		"overview": "Soartec WX-453. La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité. Fonction déclarée : Air Reciprocating Saw 10mm. Champ fabricant : Stroke Length (mm) : 10.",
		"verifiedFacts": [
			"Fonction déclarée : Air Reciprocating Saw 10mm.",
			"Champ fabricant : Stroke Length (mm) : 10.",
			"Champ fabricant : B.P.M : 10,000.",
			"Masse : 0.45 kg.",
			"Longueur (mm) : 180.",
			"Pression d’alimentation publiée : 90 psi.",
			"Consommation déclarée, libellé original hors calcul : Air Cons. (cfm): 7.6 (215)."
		],
		"limitations": [
			"La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité.",
			"Le champ de consommation original ne donne pas une attribution univoque d’unité à chaque nombre ; ses valeurs restent visibles sans conversion supposée.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Fonction déclarée",
			"value": "Air Reciprocating Saw 10mm",
			"evidenceIds": [
				"october3c-tools-soartec-product-162-p1"
			]
		},
		{
			"label": "Champ fabricant : Stroke Length (mm)",
			"value": "10",
			"evidenceIds": [
				"october3c-tools-soartec-product-162-p1"
			]
		},
		{
			"label": "Champ fabricant : B.P.M",
			"value": "10,000",
			"evidenceIds": [
				"october3c-tools-soartec-product-162-p1"
			]
		},
		{
			"label": "Masse",
			"value": "0.45 kg",
			"evidenceIds": [
				"october3c-tools-soartec-product-162-p1"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "180",
			"evidenceIds": [
				"october3c-tools-soartec-product-162-p1"
			]
		},
		{
			"label": "Pression d’alimentation publiée",
			"value": "90 psi",
			"evidenceIds": [
				"october3c-tools-soartec-product-162-p1"
			]
		},
		{
			"label": "Consommation déclarée, libellé original hors calcul",
			"value": "Air Cons. (cfm): 7.6 (215)",
			"evidenceIds": [
				"october3c-tools-soartec-product-162-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90 psi",
			"evidenceIds": [
				"october3c-tools-soartec-product-162-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-soartec-product-162-p1",
			"sourceUrl": "https://www.soartectools.com/products/air-reciprocating-saw-10mm-wx-453",
			"sourceLabel": "Fiche fabricant Soartec, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : a40a9331a24f99b423a8c1bf582e9ad39fbb097ba1ecb783ba22ab6f0566aef2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-soartec-product-162-p1"
		],
		"workingPressureBar": [
			"october3c-tools-soartec-product-162-p1"
		],
		"demandExplanation": [
			"october3c-tools-soartec-product-162-p1"
		]
	},
	"notes": [
		"La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité."
	]
};

export default product;

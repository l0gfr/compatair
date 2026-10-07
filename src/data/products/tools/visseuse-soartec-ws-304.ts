import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-soartec-ws-304",
	"slug": "visseuse-soartec-ws-304",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Soartec WS-304",
	"brand": "Soartec",
	"model": "WS-304",
	"mpn": "WS-304",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.205
	},
	"demandExplanation": "La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-soartec-ws-304.webp",
		"alt": "Repères techniques : Soartec WS-304",
		"sourceUrl": "https://www.soartectools.com/products/1-4-air-corner-screwdriver-90-degree-angle-head-ws-304",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "soartec-ws-304",
		"label": "Référence WS-304",
		"distinguishingAttributes": {
			"reference": "WS-304",
			"Fonction déclarée": "1/4\" Air Corner Screwdriver 90 Degree Angle Head",
			"Champ fabricant : Hex Size": "1/4\""
		}
	},
	"editorial": {
		"overview": "Soartec WS-304. La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité. Fonction déclarée : 1/4\" Air Corner Screwdriver 90 Degree Angle Head. Champ fabricant : Hex Size : 1/4\".",
		"verifiedFacts": [
			"Fonction déclarée : 1/4\" Air Corner Screwdriver 90 Degree Angle Head.",
			"Champ fabricant : Hex Size : 1/4\".",
			"Champ fabricant : Std. Bolt Cap : 6-8 mm.",
			"Plage de couple (Nm) : 43 Nm(@2s).",
			"Mécanisme : Two Hammer.",
			"Masse : 1.3 kg.",
			"Longueur (mm) : 217.",
			"Pression d’alimentation publiée : 90 psi.",
			"Vitesse à vide (tr/min) : 8,000.",
			"Consommation déclarée, libellé original hors calcul : Air Cons. (cfm): 11.5(325)."
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
			"value": "1/4\" Air Corner Screwdriver 90 Degree Angle Head",
			"evidenceIds": [
				"october3c-tools-soartec-product-010-p1"
			]
		},
		{
			"label": "Champ fabricant : Hex Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october3c-tools-soartec-product-010-p1"
			]
		},
		{
			"label": "Champ fabricant : Std. Bolt Cap",
			"value": "6-8 mm",
			"evidenceIds": [
				"october3c-tools-soartec-product-010-p1"
			]
		},
		{
			"label": "Plage de couple (Nm)",
			"value": "43 Nm(@2s)",
			"evidenceIds": [
				"october3c-tools-soartec-product-010-p1"
			]
		},
		{
			"label": "Mécanisme",
			"value": "Two Hammer",
			"evidenceIds": [
				"october3c-tools-soartec-product-010-p1"
			]
		},
		{
			"label": "Masse",
			"value": "1.3 kg",
			"evidenceIds": [
				"october3c-tools-soartec-product-010-p1"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "217",
			"evidenceIds": [
				"october3c-tools-soartec-product-010-p1"
			]
		},
		{
			"label": "Pression d’alimentation publiée",
			"value": "90 psi",
			"evidenceIds": [
				"october3c-tools-soartec-product-010-p1"
			]
		},
		{
			"label": "Vitesse à vide (tr/min)",
			"value": "8,000",
			"evidenceIds": [
				"october3c-tools-soartec-product-010-p1"
			]
		},
		{
			"label": "Consommation déclarée, libellé original hors calcul",
			"value": "Air Cons. (cfm): 11.5(325)",
			"evidenceIds": [
				"october3c-tools-soartec-product-010-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90 psi",
			"evidenceIds": [
				"october3c-tools-soartec-product-010-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-soartec-product-010-p1",
			"sourceUrl": "https://www.soartectools.com/products/1-4-air-corner-screwdriver-90-degree-angle-head-ws-304",
			"sourceLabel": "Fiche fabricant Soartec, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9dfd88b6d0f2d02ac273ba328351d5967addcdaac546b29b82447c2dc6162061. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-soartec-product-010-p1"
		],
		"workingPressureBar": [
			"october3c-tools-soartec-product-010-p1"
		],
		"demandExplanation": [
			"october3c-tools-soartec-product-010-p1"
		]
	},
	"notes": [
		"La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité."
	]
};

export default product;

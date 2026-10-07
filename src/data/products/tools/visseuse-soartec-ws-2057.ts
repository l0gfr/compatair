import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-soartec-ws-2057",
	"slug": "visseuse-soartec-ws-2057",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Soartec WS-2057",
	"brand": "Soartec",
	"model": "WS-2057",
	"mpn": "WS-2057",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.205
	},
	"demandExplanation": "La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-soartec-ws-2057.webp",
		"alt": "Repères techniques : Soartec WS-2057",
		"sourceUrl": "https://www.soartectools.com/products/1-4-heavy-duty-air-screwdriver-pistol-type-ws-2057",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "soartec-ws-2057",
		"label": "Référence WS-2057",
		"distinguishingAttributes": {
			"reference": "WS-2057",
			"Fonction déclarée": "1/4\" Heavy Duty Air Screwdriver Pistol Type",
			"Champ fabricant : Hex Size": "1/4\""
		}
	},
	"editorial": {
		"overview": "Soartec WS-2057. La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité. Fonction déclarée : 1/4\" Heavy Duty Air Screwdriver Pistol Type. Champ fabricant : Hex Size : 1/4\".",
		"verifiedFacts": [
			"Fonction déclarée : 1/4\" Heavy Duty Air Screwdriver Pistol Type.",
			"Champ fabricant : Hex Size : 1/4\".",
			"Champ fabricant : Std. Bolt Cap : 10-12 mm.",
			"Plage de couple (Nm) : 110 Nm(@2s).",
			"Mécanisme : Twin Hammer.",
			"Masse : 1.6 kg.",
			"Longueur (mm) : 145.",
			"Pression d’alimentation publiée : 90 psi.",
			"Vitesse à vide (tr/min) : 12,000.",
			"Consommation déclarée, libellé original hors calcul : Air Cons. (cfm): 15(425)."
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
			"value": "1/4\" Heavy Duty Air Screwdriver Pistol Type",
			"evidenceIds": [
				"october3c-tools-soartec-product-007-p1"
			]
		},
		{
			"label": "Champ fabricant : Hex Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october3c-tools-soartec-product-007-p1"
			]
		},
		{
			"label": "Champ fabricant : Std. Bolt Cap",
			"value": "10-12 mm",
			"evidenceIds": [
				"october3c-tools-soartec-product-007-p1"
			]
		},
		{
			"label": "Plage de couple (Nm)",
			"value": "110 Nm(@2s)",
			"evidenceIds": [
				"october3c-tools-soartec-product-007-p1"
			]
		},
		{
			"label": "Mécanisme",
			"value": "Twin Hammer",
			"evidenceIds": [
				"october3c-tools-soartec-product-007-p1"
			]
		},
		{
			"label": "Masse",
			"value": "1.6 kg",
			"evidenceIds": [
				"october3c-tools-soartec-product-007-p1"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "145",
			"evidenceIds": [
				"october3c-tools-soartec-product-007-p1"
			]
		},
		{
			"label": "Pression d’alimentation publiée",
			"value": "90 psi",
			"evidenceIds": [
				"october3c-tools-soartec-product-007-p1"
			]
		},
		{
			"label": "Vitesse à vide (tr/min)",
			"value": "12,000",
			"evidenceIds": [
				"october3c-tools-soartec-product-007-p1"
			]
		},
		{
			"label": "Consommation déclarée, libellé original hors calcul",
			"value": "Air Cons. (cfm): 15(425)",
			"evidenceIds": [
				"october3c-tools-soartec-product-007-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90 psi",
			"evidenceIds": [
				"october3c-tools-soartec-product-007-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-soartec-product-007-p1",
			"sourceUrl": "https://www.soartectools.com/products/1-4-heavy-duty-air-screwdriver-pistol-type-ws-2057",
			"sourceLabel": "Fiche fabricant Soartec, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 11004e6010d2fcaa8e3bf8ebbb8d65bb5b674e42455dfa3d68dcdf2d04dd37b4. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-soartec-product-007-p1"
		],
		"workingPressureBar": [
			"october3c-tools-soartec-product-007-p1"
		],
		"demandExplanation": [
			"october3c-tools-soartec-product-007-p1"
		]
	},
	"notes": [
		"La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité."
	]
};

export default product;

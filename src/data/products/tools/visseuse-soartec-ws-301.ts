import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-soartec-ws-301",
	"slug": "visseuse-soartec-ws-301",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Soartec WS-301",
	"brand": "Soartec",
	"model": "WS-301",
	"mpn": "WS-301",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-soartec-ws-301.webp",
		"alt": "Repères techniques : Soartec WS-301",
		"sourceUrl": "https://www.soartectools.com/products/1-4-air-impact-screwdriver-ws-301-ws-301p",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "soartec-ws-301",
		"label": "Référence WS-301",
		"distinguishingAttributes": {
			"reference": "WS-301",
			"Fonction déclarée": "1/4\" Air Impact Screwdriver Straight Type",
			"Champ fabricant : Hex Size": "1/4\""
		}
	},
	"editorial": {
		"overview": "Soartec WS-301. La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité. Fonction déclarée : 1/4\" Air Impact Screwdriver Straight Type. Champ fabricant : Hex Size : 1/4\".",
		"verifiedFacts": [
			"Fonction déclarée : 1/4\" Air Impact Screwdriver Straight Type.",
			"Champ fabricant : Hex Size : 1/4\".",
			"Champ fabricant : Std. Bolt Cap : 8-10 mm.",
			"Plage de couple (Nm) : 60 Nm(@2s).",
			"Mécanisme : Two Hammer / Pinless.",
			"Masse : 1.3 kg.",
			"Longueur (mm) : 217.",
			"Vitesse à vide (tr/min) : 10,000.",
			"Consommation déclarée, libellé original hors calcul : Air Cons. (cfm): 9(255)."
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
			"value": "1/4\" Air Impact Screwdriver Straight Type",
			"evidenceIds": [
				"october3c-tools-soartec-product-014-p1"
			]
		},
		{
			"label": "Champ fabricant : Hex Size",
			"value": "1/4\"",
			"evidenceIds": [
				"october3c-tools-soartec-product-014-p1"
			]
		},
		{
			"label": "Champ fabricant : Std. Bolt Cap",
			"value": "8-10 mm",
			"evidenceIds": [
				"october3c-tools-soartec-product-014-p1"
			]
		},
		{
			"label": "Plage de couple (Nm)",
			"value": "60 Nm(@2s)",
			"evidenceIds": [
				"october3c-tools-soartec-product-014-p1"
			]
		},
		{
			"label": "Mécanisme",
			"value": "Two Hammer / Pinless",
			"evidenceIds": [
				"october3c-tools-soartec-product-014-p1"
			]
		},
		{
			"label": "Masse",
			"value": "1.3 kg",
			"evidenceIds": [
				"october3c-tools-soartec-product-014-p1"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "217",
			"evidenceIds": [
				"october3c-tools-soartec-product-014-p1"
			]
		},
		{
			"label": "Vitesse à vide (tr/min)",
			"value": "10,000",
			"evidenceIds": [
				"october3c-tools-soartec-product-014-p1"
			]
		},
		{
			"label": "Consommation déclarée, libellé original hors calcul",
			"value": "Air Cons. (cfm): 9(255)",
			"evidenceIds": [
				"october3c-tools-soartec-product-014-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Point de mesure de consommation non établi dans la fiche exacte.",
			"evidenceIds": [
				"october3c-tools-soartec-product-014-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-soartec-product-014-p1",
			"sourceUrl": "https://www.soartectools.com/products/1-4-air-impact-screwdriver-ws-301-ws-301p",
			"sourceLabel": "Fiche fabricant Soartec, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : da8066a4199af5821f0e80a286f3c23ba43e609528d0bb62a1a03d80153b322e. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-soartec-product-014-p1"
		],
		"workingPressureBar": [
			"october3c-tools-soartec-product-014-p1"
		],
		"demandExplanation": [
			"october3c-tools-soartec-product-014-p1"
		]
	},
	"notes": [
		"La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité."
	]
};

export default product;

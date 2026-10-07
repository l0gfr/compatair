import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-soartec-wx-3501",
	"slug": "visseuse-soartec-wx-3501",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Soartec WX-3501",
	"brand": "Soartec",
	"model": "WX-3501",
	"mpn": "WX-3501",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.205
	},
	"demandExplanation": "La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-soartec-wx-3501.webp",
		"alt": "Repères techniques : Soartec WX-3501",
		"sourceUrl": "https://www.soartectools.com/products/air-shut-off-screwdriver-torque-control-type-angle-head-wx-3501",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "soartec-wx-3501",
		"label": "Référence WX-3501",
		"distinguishingAttributes": {
			"reference": "WX-3501",
			"Fonction déclarée": "Air Shut Off Screwdriver Torque Control Type Angle Head",
			"Plage de couple (Nm)": "1.2~2.4 Nm"
		}
	},
	"editorial": {
		"overview": "Soartec WX-3501. La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité. Fonction déclarée : Air Shut Off Screwdriver Torque Control Type Angle Head. Plage de couple (Nm) : 1.2~2.4 Nm.",
		"verifiedFacts": [
			"Fonction déclarée : Air Shut Off Screwdriver Torque Control Type Angle Head.",
			"Plage de couple (Nm) : 1.2~2.4 Nm.",
			"Capacité de vissage : 4 mm.",
			"Masse : 1.22 kg.",
			"Longueur (mm) : 340.",
			"Pression d’alimentation publiée : 90 psi.",
			"Vitesse à vide (tr/min) : 1450.",
			"Consommation déclarée, libellé original hors calcul : Air Cons. (cfm): 7 cfm."
		],
		"limitations": [
			"La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Fonction déclarée",
			"value": "Air Shut Off Screwdriver Torque Control Type Angle Head",
			"evidenceIds": [
				"october3c-tools-soartec-product-002-p1"
			]
		},
		{
			"label": "Plage de couple (Nm)",
			"value": "1.2~2.4 Nm",
			"evidenceIds": [
				"october3c-tools-soartec-product-002-p1"
			]
		},
		{
			"label": "Capacité de vissage",
			"value": "4 mm",
			"evidenceIds": [
				"october3c-tools-soartec-product-002-p1"
			]
		},
		{
			"label": "Masse",
			"value": "1.22 kg",
			"evidenceIds": [
				"october3c-tools-soartec-product-002-p1"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "340",
			"evidenceIds": [
				"october3c-tools-soartec-product-002-p1"
			]
		},
		{
			"label": "Pression d’alimentation publiée",
			"value": "90 psi",
			"evidenceIds": [
				"october3c-tools-soartec-product-002-p1"
			]
		},
		{
			"label": "Vitesse à vide (tr/min)",
			"value": "1450",
			"evidenceIds": [
				"october3c-tools-soartec-product-002-p1"
			]
		},
		{
			"label": "Consommation déclarée, libellé original hors calcul",
			"value": "Air Cons. (cfm): 7 cfm",
			"evidenceIds": [
				"october3c-tools-soartec-product-002-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90 psi",
			"evidenceIds": [
				"october3c-tools-soartec-product-002-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "7 cfm",
			"evidenceIds": [
				"october3c-tools-soartec-product-002-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-soartec-product-002-p1",
			"sourceUrl": "https://www.soartectools.com/products/air-shut-off-screwdriver-torque-control-type-angle-head-wx-3501",
			"sourceLabel": "Fiche fabricant Soartec, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 3bfbe806601bcee2b437073a32f053d7a3e62926237a9ac4d2d70be1f10f5481. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-soartec-product-002-p1"
		],
		"workingPressureBar": [
			"october3c-tools-soartec-product-002-p1"
		],
		"demandExplanation": [
			"october3c-tools-soartec-product-002-p1"
		]
	},
	"notes": [
		"La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité."
	]
};

export default product;

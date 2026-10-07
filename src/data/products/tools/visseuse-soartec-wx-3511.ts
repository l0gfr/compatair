import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-soartec-wx-3511",
	"slug": "visseuse-soartec-wx-3511",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Soartec WX-3511",
	"brand": "Soartec",
	"model": "WX-3511",
	"mpn": "WX-3511",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.205
	},
	"demandExplanation": "La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-soartec-wx-3511.webp",
		"alt": "Repères techniques : Soartec WX-3511",
		"sourceUrl": "https://www.soartectools.com/products/air-shut-off-screwdriver-torque-control-type-wx-3511",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "soartec-wx-3511",
		"label": "Référence WX-3511",
		"distinguishingAttributes": {
			"reference": "WX-3511",
			"Fonction déclarée": "Air Shut Off Screwdriver Torque Control Type",
			"Plage de couple (Nm)": "0.9~1.6 Nm"
		}
	},
	"editorial": {
		"overview": "Soartec WX-3511. La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité. Fonction déclarée : Air Shut Off Screwdriver Torque Control Type. Plage de couple (Nm) : 0.9~1.6 Nm.",
		"verifiedFacts": [
			"Fonction déclarée : Air Shut Off Screwdriver Torque Control Type.",
			"Plage de couple (Nm) : 0.9~1.6 Nm.",
			"Capacité de vissage : 3.5 mm.",
			"Masse : 0.95 kg.",
			"Longueur (mm) : 285.",
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
			"value": "Air Shut Off Screwdriver Torque Control Type",
			"evidenceIds": [
				"october3c-tools-soartec-product-000-p1"
			]
		},
		{
			"label": "Plage de couple (Nm)",
			"value": "0.9~1.6 Nm",
			"evidenceIds": [
				"october3c-tools-soartec-product-000-p1"
			]
		},
		{
			"label": "Capacité de vissage",
			"value": "3.5 mm",
			"evidenceIds": [
				"october3c-tools-soartec-product-000-p1"
			]
		},
		{
			"label": "Masse",
			"value": "0.95 kg",
			"evidenceIds": [
				"october3c-tools-soartec-product-000-p1"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "285",
			"evidenceIds": [
				"october3c-tools-soartec-product-000-p1"
			]
		},
		{
			"label": "Pression d’alimentation publiée",
			"value": "90 psi",
			"evidenceIds": [
				"october3c-tools-soartec-product-000-p1"
			]
		},
		{
			"label": "Vitesse à vide (tr/min)",
			"value": "1450",
			"evidenceIds": [
				"october3c-tools-soartec-product-000-p1"
			]
		},
		{
			"label": "Consommation déclarée, libellé original hors calcul",
			"value": "Air Cons. (cfm): 7 cfm",
			"evidenceIds": [
				"october3c-tools-soartec-product-000-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90 psi",
			"evidenceIds": [
				"october3c-tools-soartec-product-000-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "7 cfm",
			"evidenceIds": [
				"october3c-tools-soartec-product-000-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-soartec-product-000-p1",
			"sourceUrl": "https://www.soartectools.com/products/air-shut-off-screwdriver-torque-control-type-wx-3511",
			"sourceLabel": "Fiche fabricant Soartec, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 07c37d8a61ba89808195f5d42962e8a64c0c38a48685091384997084175fc68b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-soartec-product-000-p1"
		],
		"workingPressureBar": [
			"october3c-tools-soartec-product-000-p1"
		],
		"demandExplanation": [
			"october3c-tools-soartec-product-000-p1"
		]
	},
	"notes": [
		"La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité."
	]
};

export default product;

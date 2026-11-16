import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-soartec-wx-2701",
	"slug": "cle-a-cliquet-soartec-wx-2701",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Soartec WX-2701",
	"brand": "Soartec",
	"model": "WX-2701",
	"mpn": "WX-2701",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6.205
	},
	"demandExplanation": "La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-soartec-wx-2701-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Soartec WX-2701",
		"sourceUrl": "https://www.soartectools.com/products/air-ratchet-wrench-hex-bit",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "soartec-wx-2701",
		"label": "Référence WX-2701",
		"distinguishingAttributes": {
			"reference": "WX-2701",
			"Fonction déclarée": "Air Ratchet Wrench Hex Bit 6-12 mm",
			"Champ fabricant : Hex Size": "6,7,8,9,10,11,12 mm (1/4\", 3/8\")"
		}
	},
	"editorial": {
		"overview": "Le WX-2701 est le cliquet traversant pour hexagones 6–12 mm, 180 tr/min et 10 Nm de travail. Le WX-2702 couvre 10–14 mm ; le WX-2703 étend la sélection jusqu’à 19 mm. L’écrou et le dégagement déterminent la référence, puis le serrage final doit respecter l’assemblage. Les 127 L/min ne sont pas appariés à un régime de mesure explicite, malgré la consigne 90 psi.",
		"verifiedFacts": [
			"Fonction déclarée : Air Ratchet Wrench Hex Bit 6-12 mm.",
			"Champ fabricant : Hex Size : 6,7,8,9,10,11,12 mm (1/4\", 3/8\").",
			"Champ fabricant : Working Torque : 10 Nm.",
			"Couple maximal déclaré à 5 secondes : 10 Nm.",
			"Masse : 1.3 kg.",
			"Longueur (mm) : 285.",
			"Champ fabricant : Free Speed : 180.",
			"Entrée d’air : 1/4\" PT.",
			"Pression d’alimentation publiée : 90 psi.",
			"Consommation déclarée, libellé original hors calcul : Air Cons.: 4.5 / 127."
		],
		"limitations": [
			"La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité.",
			"Le champ de consommation original ne donne pas une attribution univoque d’unité à chaque nombre ; ses valeurs restent visibles sans conversion supposée.",
			"L’entrée d’air publiée ne fournit pas une dimension de raccordement interprétable sans clarification fabricant. Le libellé original reste visible.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Fonction déclarée",
			"value": "Air Ratchet Wrench Hex Bit 6-12 mm",
			"evidenceIds": [
				"october3c-tools-soartec-product-201-p1"
			]
		},
		{
			"label": "Champ fabricant : Hex Size",
			"value": "6,7,8,9,10,11,12 mm (1/4\", 3/8\")",
			"evidenceIds": [
				"october3c-tools-soartec-product-201-p1"
			]
		},
		{
			"label": "Champ fabricant : Working Torque",
			"value": "10 Nm",
			"evidenceIds": [
				"october3c-tools-soartec-product-201-p1"
			]
		},
		{
			"label": "Couple maximal déclaré à 5 secondes",
			"value": "10 Nm",
			"evidenceIds": [
				"october3c-tools-soartec-product-201-p1"
			]
		},
		{
			"label": "Masse",
			"value": "1.3 kg",
			"evidenceIds": [
				"october3c-tools-soartec-product-201-p1"
			]
		},
		{
			"label": "Longueur (mm)",
			"value": "285",
			"evidenceIds": [
				"october3c-tools-soartec-product-201-p1"
			]
		},
		{
			"label": "Champ fabricant : Free Speed",
			"value": "180",
			"evidenceIds": [
				"october3c-tools-soartec-product-201-p1"
			]
		},
		{
			"label": "Entrée d’air",
			"value": "1/4\" PT",
			"evidenceIds": [
				"october3c-tools-soartec-product-201-p1"
			]
		},
		{
			"label": "Pression d’alimentation publiée",
			"value": "90 psi",
			"evidenceIds": [
				"october3c-tools-soartec-product-201-p1"
			]
		},
		{
			"label": "Consommation déclarée, libellé original hors calcul",
			"value": "Air Cons.: 4.5 / 127",
			"evidenceIds": [
				"october3c-tools-soartec-product-201-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet",
			"value": "1/4\" PT",
			"evidenceIds": [
				"october3c-tools-soartec-product-201-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 90 psi",
			"evidenceIds": [
				"october3c-tools-soartec-product-201-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october3c-tools-soartec-product-201-p1",
			"sourceUrl": "https://www.soartectools.com/products/air-ratchet-wrench-hex-bit",
			"sourceLabel": "Fiche fabricant Soartec, référence exacte",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b9105bfa3150832d8ea10e2a94c674731f5d9122947ec1f07824532ef96b8cc8. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:cle-a-cliquet-soartec-wx-2701:0",
			"sourceUrl": "https://www.soartectools.com/products/air-ratchet-wrench-hex-bit",
			"sourceLabel": "Soartec, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le WX-2701 est le cliquet traversant pour hexagones 6–12 mm, 180 tr/min et 10 Nm de travail. Le WX-2702 couvre 10–14 mm ; le WX-2703 étend la sélection jusqu’à 19 mm. L’écrou et le dégagement déterminent la référence, puis le serrage final doit respecter l’assemblage. Les 127 L/min ne sont pas appariés à un régime de mesure explicite, malgré la consigne 90 psi. GET complet SHA-256 0cfad279788e17e03adcff0ed7a77d77d967bc0b62da3d7e8b9d67c256fd5364. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3c-tools-soartec-product-201-p1"
		],
		"workingPressureBar": [
			"october3c-tools-soartec-product-201-p1"
		],
		"demandExplanation": [
			"october3c-tools-soartec-product-201-p1"
		]
	},
	"notes": [
		"La fiche publie une consommation et une pression d’alimentation, sans préciser le régime de consommation ni affirmer que cette valeur est mesurée à cette pression. Ces champs restent séparés et hors du calcul de compatibilité."
	]
};

export default product;

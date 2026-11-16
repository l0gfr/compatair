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
		"src": "/images/products/scie-soartec-wx-453-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Soartec WX-453",
		"sourceUrl": "https://www.soartectools.com/products/air-reciprocating-saw-10mm-wx-453",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
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
		"overview": "La WX-453 est une scie alternative, course 10 mm, 10 000 courses/min, 180 mm et 0,45 kg. La WX-452 mesure 200 mm ; la WX-455 ajoute l’usage scie/lime avec mandrin double. Le montage de lame et le kit doivent correspondre au travail. Les 215 L/min publiés ne portent pas de régime de mesure explicite. Le moteur conserve une réponse non conclusive, sans inventer de capacité de coupe.",
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
		},
		{
			"id": "review:2026-11-16-reviews:scie-soartec-wx-453:0",
			"sourceUrl": "https://www.soartectools.com/products/air-reciprocating-saw-10mm-wx-453",
			"sourceLabel": "Soartec, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La WX-453 est une scie alternative, course 10 mm, 10 000 courses/min, 180 mm et 0,45 kg. La WX-452 mesure 200 mm ; la WX-455 ajoute l’usage scie/lime avec mandrin double. Le montage de lame et le kit doivent correspondre au travail. Les 215 L/min publiés ne portent pas de régime de mesure explicite. Le moteur conserve une réponse non conclusive, sans inventer de capacité de coupe. GET complet SHA-256 f9a9ae18ccd0112c822b9d506a6a37a012f4e022dcebfe3f992927c0b275fcd9. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
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

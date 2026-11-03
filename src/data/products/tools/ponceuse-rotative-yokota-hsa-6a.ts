import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-yokota-hsa-6a",
	"slug": "ponceuse-rotative-yokota-hsa-6a",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Yokota HSA-6A",
	"brand": "Yokota",
	"model": "HSA-6A",
	"mpn": "HSA-6A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-yokota-hsa-6a.webp",
		"alt": "Repères techniques : Yokota HSA-6A",
		"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "yokota-hsa-6a",
		"label": "Référence HSA-6A",
		"distinguishingAttributes": {
			"reference": "HSA-6A",
			"Vitesse à vide": "8400 tr/min",
			"Longueur": "204 mm"
		}
	},
	"editorial": {
		"overview": "Yokota HSA-6A. La HSA-6A est la ponceuse pour papier disque 150 × 22 mm et mesure 204 mm. La HSA-L accepte le même diamètre mais mesure 222 mm ; la HSA-6AK est une version pour brosse métallique 70–95 × 16 mm à 5 000 tr/min. La table japonaise identifie les 1 100 L/min en charge et donne séparément une pression d’utilisation 0,6 MPa ; cette consigne ne devient pas une pression de mesure appariée.",
		"verifiedFacts": [
			"Papier, diamètre × alésage : 150 × 22 mm.",
			"Vitesse à vide : 8 400 tr/min.",
			"Consommation en charge publiée : 1 100 L/min.",
			"Longueur : 204 mm.",
			"Masse : 1,8 kg.",
			"Flexible publié : 12,7 mm × 5 m."
		],
		"limitations": [
			"Régime et pression de mesure ne sont pas complétés par hypothèse. Les données non dimensionnantes restent dans les spécifications.",
			"Catalogue constructeur historique ; configuration livrée et disponibilité actuelles à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Papier, diamètre × alésage",
			"value": "150 × 22 mm",
			"evidenceIds": [
				"ponceuse-rotative-yokota-hsa-6a-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "8 400 tr/min",
			"evidenceIds": [
				"ponceuse-rotative-yokota-hsa-6a-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation en charge publiée",
			"value": "1 100 L/min",
			"evidenceIds": [
				"ponceuse-rotative-yokota-hsa-6a-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "204 mm",
			"evidenceIds": [
				"ponceuse-rotative-yokota-hsa-6a-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,8 kg",
			"evidenceIds": [
				"ponceuse-rotative-yokota-hsa-6a-reserved-20261103-1"
			]
		},
		{
			"label": "Flexible publié",
			"value": "12,7 mm × 5 m",
			"evidenceIds": [
				"ponceuse-rotative-yokota-hsa-6a-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-yokota-jp-p57",
			"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf#page=57",
			"sourceLabel": "Yokota Kogyo, catalogue général japonais du fabricant, page PDF 57",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b60e8188ea17df768d52a2b1381382bc9b0e158a03fcd4416d4c4e3ebd0a866c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "ponceuse-rotative-yokota-hsa-6a-reserved-20261103-1",
			"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf#page=57",
			"sourceLabel": "Yokota : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 b60e8188ea17df768d52a2b1381382bc9b0e158a03fcd4416d4c4e3ebd0a866c. La HSA-6A est la ponceuse pour papier disque 150 × 22 mm et mesure 204 mm. La HSA-L accepte le même diamètre mais mesure 222 mm ; la HSA-6AK est une version pour brosse métallique 70–95 × 16 mm à 5 000 tr/min. La table japonaise identifie les 1 100 L/min en charge et donne séparément une pression d’utilisation 0,6 MPa ; cette consigne ne devient pas une pression de mesure appariée."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-yokota-jp-p57"
		],
		"workingPressureBar": [
			"october2-tools-yokota-jp-p57"
		],
		"demandExplanation": [
			"october2-tools-yokota-jp-p57"
		],
		"editorial": [
			"ponceuse-rotative-yokota-hsa-6a-reserved-20261103-1"
		],
		"specifications": [
			"ponceuse-rotative-yokota-hsa-6a-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;

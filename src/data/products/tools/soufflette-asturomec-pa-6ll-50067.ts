import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "soufflette-asturomec-pa-6ll-50067",
	"slug": "soufflette-asturomec-pa-6ll-50067",
	"categoryId": "soufflette",
	"category": "soufflette",
	"label": "Asturomec PA/6LL (réf. 50067)",
	"brand": "Asturomec",
	"model": "PA/6LL",
	"mpn": "50067",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 1,
		"max": 6
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/soufflette-asturomec-pa-6ll-50067.svg",
		"alt": "Repères techniques : Asturomec PA/6LL (réf. 50067)",
		"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "asturomec-pa-6ll",
		"label": "Référence 50067",
		"distinguishingAttributes": {
			"reference": "50067",
			"Matériau du corps": "métal poli nickelé, revêtement soft-touch",
			"Embout ou canon": "300 mm, droit"
		}
	},
	"editorial": {
		"overview": "Asturomec PA/6LL (réf. 50067). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Matériau du corps : métal poli nickelé, revêtement soft-touch.",
			"Embout ou canon : 300 mm, droit.",
			"Commande : valve à débit progressif."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"Édition italienne 2024 ; aucune disponibilité commerciale actuelle n’est vérifiée.",
			"La plage de service ne constitue pas une pression de mesure de consommation ; aucun facteur de marche implicite.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Matériau du corps",
			"value": "métal poli nickelé, revêtement soft-touch",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p44"
			]
		},
		{
			"label": "Embout ou canon",
			"value": "300 mm, droit",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p44"
			]
		},
		{
			"label": "Commande",
			"value": "valve à débit progressif",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p44"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Plage de service publiée : 1 à 6 bar ; aucun point de consommation utilisable à une pression unique.",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p44"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-asturomec2024-p44",
			"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf#page=44",
			"sourceLabel": "Asturomec, document technique officiel, page PDF 44",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 28bc606b4d5bdb9fb84c9288e42573241454b8347b9623c38854744b09fab5e3. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-asturomec2024-p44"
		],
		"workingPressureBar": [
			"october3d-tools-asturomec2024-p44"
		],
		"demandExplanation": [
			"october3d-tools-asturomec2024-p44"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;

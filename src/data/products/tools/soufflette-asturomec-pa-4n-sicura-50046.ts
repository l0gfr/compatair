import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "soufflette-asturomec-pa-4n-sicura-50046",
	"slug": "soufflette-asturomec-pa-4n-sicura-50046",
	"categoryId": "soufflette",
	"category": "soufflette",
	"label": "Asturomec PA/4N SICURA (réf. 50046)",
	"brand": "Asturomec",
	"model": "PA/4N SICURA",
	"mpn": "50046",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 1,
		"max": 6
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/soufflette-asturomec-pa-4n-sicura-50046.svg",
		"alt": "Repères techniques : Asturomec PA/4N SICURA (réf. 50046)",
		"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "asturomec-pa-4n-sicura",
		"label": "Référence 50046",
		"distinguishingAttributes": {
			"reference": "50046",
			"Matériau du corps": "nylon",
			"Embout ou canon": "anti-éclats, anti-rayure, silencieux selon catalogue"
		}
	},
	"editorial": {
		"overview": "Asturomec PA/4N SICURA (réf. 50046). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Matériau du corps : nylon.",
			"Embout ou canon : anti-éclats, anti-rayure, silencieux selon catalogue.",
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
			"value": "nylon",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p46"
			]
		},
		{
			"label": "Embout ou canon",
			"value": "anti-éclats, anti-rayure, silencieux selon catalogue",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p46"
			]
		},
		{
			"label": "Commande",
			"value": "valve à débit progressif",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p46"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Plage de service publiée : 1 à 6 bar ; aucun point de consommation utilisable à une pression unique.",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p46"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-asturomec2024-p46",
			"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf#page=46",
			"sourceLabel": "Asturomec, document technique officiel, page PDF 46",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 28bc606b4d5bdb9fb84c9288e42573241454b8347b9623c38854744b09fab5e3. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-asturomec2024-p46"
		],
		"workingPressureBar": [
			"october3d-tools-asturomec2024-p46"
		],
		"demandExplanation": [
			"october3d-tools-asturomec2024-p46"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;

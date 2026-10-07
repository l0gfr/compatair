import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "gonflage-asturomec-pg-sg-50107",
	"slug": "gonflage-asturomec-pg-sg-50107",
	"categoryId": "gonflage",
	"category": "gonflage",
	"label": "Asturomec PG/SG (réf. 50107)",
	"brand": "Asturomec",
	"model": "PG/SG",
	"mpn": "50107",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 1,
		"max": 6
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/gonflage-asturomec-pg-sg-50107.svg",
		"alt": "Repères techniques : Asturomec PG/SG (réf. 50107)",
		"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "asturomec-pg-sg",
		"label": "Référence 50107",
		"distinguishingAttributes": {
			"reference": "50107",
			"Manomètre": "63, unité non répétée dans ce bloc",
			"Échelle du manomètre, distincte du service": "bar/psi"
		}
	},
	"editorial": {
		"overview": "Asturomec PG/SG (réf. 50107). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Manomètre : 63, unité non répétée dans ce bloc.",
			"Échelle du manomètre, distincte du service : bar/psi.",
			"Flexible : 80 cm.",
			"Corps : nylon.",
			"Tête de gonflage : laiton, 30 cm."
		],
		"limitations": [
			"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
			"La graduation du manomètre ne constitue ni pression d’alimentation admissible ni pression de mesure de consommation.",
			"La revendication d’homologation est historique ; certificat actuel et disponibilité non vérifiés.",
			"Données déclarées dans les documents identifiés ; aucun essai physique ni disponibilité commerciale actuelle n’est revendiqué."
		]
	},
	"specifications": [
		{
			"label": "Manomètre",
			"value": "63, unité non répétée dans ce bloc",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p51"
			]
		},
		{
			"label": "Échelle du manomètre, distincte du service",
			"value": "bar/psi",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p51"
			]
		},
		{
			"label": "Flexible",
			"value": "80 cm",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p51"
			]
		},
		{
			"label": "Corps",
			"value": "nylon",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p51"
			]
		},
		{
			"label": "Tête de gonflage",
			"value": "laiton, 30 cm",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p51"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Plage de service publiée : 1 à 6 bar ; aucun point de consommation utilisable à une pression unique.",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p51"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-asturomec2024-p51",
			"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf#page=51",
			"sourceLabel": "Asturomec, document technique officiel, page PDF 51",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 28bc606b4d5bdb9fb84c9288e42573241454b8347b9623c38854744b09fab5e3. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-asturomec2024-p51"
		],
		"workingPressureBar": [
			"october3d-tools-asturomec2024-p51"
		],
		"demandExplanation": [
			"october3d-tools-asturomec2024-p51"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;

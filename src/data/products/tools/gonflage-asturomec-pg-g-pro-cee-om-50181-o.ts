import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "gonflage-asturomec-pg-g-pro-cee-om-50181-o",
	"slug": "gonflage-asturomec-pg-g-pro-cee-om-50181-o",
	"categoryId": "gonflage",
	"category": "gonflage",
	"label": "Asturomec PG/G PRO CEE/OM (réf. 50181/O)",
	"brand": "Asturomec",
	"model": "PG/G PRO CEE/OM",
	"mpn": "50181/O",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 1,
		"max": 6
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/gonflage-asturomec-pg-g-pro-cee-om-50181-o.svg",
		"alt": "Repères techniques : Asturomec PG/G PRO CEE/OM (réf. 50181/O)",
		"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "asturomec-pg-g-pro-cee-om",
		"label": "Référence 50181/O",
		"distinguishingAttributes": {
			"reference": "50181/O",
			"Manomètre": "80 mm",
			"Échelle du manomètre, distincte du service": "0-10 bar"
		}
	},
	"editorial": {
		"overview": "Asturomec PG/G PRO CEE/OM (réf. 50181/O). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Manomètre : 80 mm.",
			"Échelle du manomètre, distincte du service : 0-10 bar.",
			"Flexible : 1 m.",
			"Corps : laiton nickelé.",
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
			"value": "80 mm",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p50"
			]
		},
		{
			"label": "Échelle du manomètre, distincte du service",
			"value": "0-10 bar",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p50"
			]
		},
		{
			"label": "Flexible",
			"value": "1 m",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p50"
			]
		},
		{
			"label": "Corps",
			"value": "laiton nickelé",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p50"
			]
		},
		{
			"label": "Tête de gonflage",
			"value": "laiton, 30 cm",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p50"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Plage de service publiée : 1 à 6 bar ; aucun point de consommation utilisable à une pression unique.",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p50"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-asturomec2024-p50",
			"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf#page=50",
			"sourceLabel": "Asturomec, document technique officiel, page PDF 50",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 28bc606b4d5bdb9fb84c9288e42573241454b8347b9623c38854744b09fab5e3. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-asturomec2024-p50"
		],
		"workingPressureBar": [
			"october3d-tools-asturomec2024-p50"
		],
		"demandExplanation": [
			"october3d-tools-asturomec2024-p50"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;

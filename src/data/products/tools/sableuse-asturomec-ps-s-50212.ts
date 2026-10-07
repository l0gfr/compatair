import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sableuse-asturomec-ps-s-50212",
	"slug": "sableuse-asturomec-ps-s-50212",
	"categoryId": "sableuse",
	"category": "sableuse",
	"label": "Asturomec PS/S (réf. 50212)",
	"brand": "Asturomec",
	"model": "PS/S",
	"mpn": "50212",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5,
		"max": 8
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/sableuse-asturomec-ps-s-50212.svg",
		"alt": "Repères techniques : Asturomec PS/S (réf. 50212)",
		"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "asturomec-ps-s",
		"label": "Référence 50212",
		"distinguishingAttributes": {
			"reference": "50212",
			"Buse": "acier cémenté trempé, diamètre 6 mm",
			"Corps": "laiton sablé nickelé"
		}
	},
	"editorial": {
		"overview": "Asturomec PS/S (réf. 50212). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Buse : acier cémenté trempé, diamètre 6 mm.",
			"Corps : laiton sablé nickelé.",
			"Réservoir : aluminium 1000 cc."
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
			"label": "Buse",
			"value": "acier cémenté trempé, diamètre 6 mm",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p56"
			]
		},
		{
			"label": "Corps",
			"value": "laiton sablé nickelé",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p56"
			]
		},
		{
			"label": "Réservoir",
			"value": "aluminium 1000 cc",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p56"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Plage de service publiée : 5 à 8 bar ; aucun point de consommation utilisable à une pression unique.",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p56"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-asturomec2024-p56",
			"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf#page=56",
			"sourceLabel": "Asturomec, document technique officiel, page PDF 56",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 28bc606b4d5bdb9fb84c9288e42573241454b8347b9623c38854744b09fab5e3. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-asturomec2024-p56"
		],
		"workingPressureBar": [
			"october3d-tools-asturomec2024-p56"
		],
		"demandExplanation": [
			"october3d-tools-asturomec2024-p56"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;

import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sableuse-asturomec-ps-e-50090",
	"slug": "sableuse-asturomec-ps-e-50090",
	"categoryId": "sableuse",
	"category": "sableuse",
	"label": "Asturomec PS/E (réf. 50090)",
	"brand": "Asturomec",
	"model": "PS/E",
	"mpn": "50090",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5,
		"max": 8
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/sableuse-asturomec-ps-e-50090.svg",
		"alt": "Repères techniques : Asturomec PS/E (réf. 50090)",
		"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "asturomec-ps-e",
		"label": "Référence 50090",
		"distinguishingAttributes": {
			"reference": "50090",
			"Buse": "acier cémenté trempé, diamètre 6 mm",
			"Corps": "aluminium"
		}
	},
	"editorial": {
		"overview": "Asturomec PS/E (réf. 50090). Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
		"verifiedFacts": [
			"Buse : acier cémenté trempé, diamètre 6 mm.",
			"Corps : aluminium.",
			"Tube d’aspiration : 2 m ; 8×13, unité non répétée."
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
				"october3d-tools-asturomec2024-p95"
			]
		},
		{
			"label": "Corps",
			"value": "aluminium",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p95"
			]
		},
		{
			"label": "Tube d’aspiration",
			"value": "2 m ; 8×13, unité non répétée",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p95"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Plage de service publiée : 5 à 8 bar ; aucun point de consommation utilisable à une pression unique.",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p95"
			]
		}
	],
	"evidence": [
		{
			"id": "october3d-tools-asturomec2024-p95",
			"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf#page=95",
			"sourceLabel": "Asturomec, document technique officiel, page PDF 95",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-03",
			"confidence": "B",
			"notes": "Réponse primaire SHA-256 28bc606b4d5bdb9fb84c9288e42573241454b8347b9623c38854744b09fab5e3. Déclaration constructeur, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october3d-tools-asturomec2024-p95"
		],
		"workingPressureBar": [
			"october3d-tools-asturomec2024-p95"
		],
		"demandExplanation": [
			"october3d-tools-asturomec2024-p95"
		]
	},
	"notes": [
		"Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict."
	]
};

export default product;

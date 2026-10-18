import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "sableuse-asturomec-ps-es-50091",
	"slug": "sableuse-asturomec-ps-es-50091",
	"categoryId": "sableuse",
	"category": "sableuse",
	"label": "Asturomec PS/ES (réf. 50091)",
	"brand": "Asturomec",
	"model": "PS/ES",
	"mpn": "50091",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 5,
		"max": 8
	},
	"demandExplanation": "Les caractéristiques propres à cette référence sont documentées ; la demande d’air avec régime, unité et pression utilisables reste insuffisante pour un verdict.",
	"confidence": "B",
	"image": {
		"src": "/images/products/sableuse-asturomec-ps-es-50091.svg",
		"alt": "Repères techniques : Asturomec PS/ES (réf. 50091)",
		"sourceUrl": "https://walmec.com/it/cataloghi/catalogo-asturomec/AD_13_24_IT.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "asturomec-ps-es",
		"label": "Référence 50091",
		"distinguishingAttributes": {
			"reference": "50091",
			"Buse": "acier cémenté trempé, diamètre 6 mm",
			"Corps": "aluminium"
		}
	},
	"editorial": {
		"overview": "PS/ES 50091 : sablage avec réservoir intégré en aluminium de 1 L, réglage du débit de sable et buse de 6 mm. La PS/E 50090 voisine utilise un tube plongeur de 2 m dans une réserve externe. Les deux montages annoncent 5 à 8 bar de service.",
		"verifiedFacts": [
			"Buse : acier cémenté trempé, diamètre 6 mm.",
			"Corps : aluminium.",
			"Réservoir : aluminium 1000 cc.",
			"Réglage : débit de sable réglable."
		],
		"limitations": [
			"Le catalogue ne publie pas de consommation d’air pour ce bloc ; le diamètre de buse ne suffit pas à la reconstituer.",
			"Le tube d’aspiration d’abrasif ne renseigne pas les dimensions du flexible d’air."
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
			"label": "Réservoir",
			"value": "aluminium 1000 cc",
			"evidenceIds": [
				"october3d-tools-asturomec2024-p95"
			]
		},
		{
			"label": "Réglage",
			"value": "débit de sable réglable",
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
